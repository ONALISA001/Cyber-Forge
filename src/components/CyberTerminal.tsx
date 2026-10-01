import { useState, useRef, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Environment = "linux" | "networking" | "scripting" | "splunk";

interface TerminalLine {
  id: number;
  type: "input" | "output" | "error" | "info" | "banner";
  content: string;
}

// ─── Environment Configs ──────────────────────────────────────────────────────

const ENV_CONFIG: Record<
  Environment,
  { label: string; prompt: string; color: string; bgAccent: string; welcomeKey: string }
> = {
  linux: {
    label: "Linux",
    prompt: "mido@cyberforge:~$",
    color: "#22d3ee",
    bgAccent: "bg-cyan-900/20",
    welcomeKey: "linux_welcome",
  },
  networking: {
    label: "Networking",
    prompt: "analyst@net-lab:~$",
    color: "#a78bfa",
    bgAccent: "bg-violet-900/20",
    welcomeKey: "net_welcome",
  },
  scripting: {
    label: "Scripting",
    prompt: "hacker@forge:~$",
    color: "#34d399",
    bgAccent: "bg-emerald-900/20",
    welcomeKey: "script_welcome",
  },
  splunk: {
    label: "Splunk",
    prompt: "splunk>",
    color: "#fb923c",
    bgAccent: "bg-orange-900/20",
    welcomeKey: "splunk_welcome",
  },
};

// ─── Simulated Filesystem ─────────────────────────────────────────────────────

const FAKE_FS: Record<string, string> = {
  "/etc/passwd": `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
mido:x:1000:1000:CyberForge User:/home/mido:/bin/bash`,
  "/etc/hosts": `127.0.0.1   localhost
127.0.1.1   cyberforge
192.168.1.1 gateway
10.0.0.1    attacker.local`,
  "/home/mido/notes.txt": `CyberForge learning notes
========================
Day 1: Linux basics - ls, cd, cat, grep
Day 2: File permissions - chmod 755, 644
Day 3: Networking - ifconfig, netstat, nmap`,
  "/home/mido/suspicious.log": `2024-01-15 03:22:11 Failed login for root from 185.234.218.99
2024-01-15 03:22:14 Failed login for admin from 185.234.218.99
2024-01-15 03:22:18 Failed login for root from 185.234.218.99
2024-01-15 03:22:21 Successful login for mido from 185.234.218.99
2024-01-15 03:24:07 sudo: mido : TTY=pts/0 ; COMMAND=/bin/bash`,
  "/var/log/auth.log": `Jan 15 03:22:11 cyberforge sshd[1234]: Failed password for root from 185.234.218.99 port 54321 ssh2
Jan 15 03:22:21 cyberforge sshd[1234]: Accepted password for mido from 185.234.218.99 port 54322 ssh2
Jan 15 03:24:07 cyberforge sudo: mido : TTY=pts/0 ; PWD=/home/mido ; USER=root ; COMMAND=/bin/bash`,
};

// ─── Command Handlers ─────────────────────────────────────────────────────────

let lineCounter = 100;
function mkLine(type: TerminalLine["type"], content: string): TerminalLine {
  return { id: lineCounter++, type, content };
}
function mkLines(type: TerminalLine["type"], ...lines: string[]): TerminalLine[] {
  return lines.map((c) => mkLine(type, c));
}

// Simulated processes for `ps`
const PROCESSES = [
  "PID   TTY          TIME CMD",
  " 1234 pts/0    00:00:00 bash",
  " 2345 pts/0    00:00:01 python3",
  " 3456 pts/0    00:00:00 splunkd",
  " 4567 pts/0    00:00:02 tcpdump",
  " 5678 pts/0    00:00:00 ps",
];

// Simulated network interfaces
const IFCONFIG_OUT = `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.105  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64
        ether 08:00:27:4e:66:a1  txqueuelen 1000

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128`;

function handleLinux(cmd: string, args: string[]): TerminalLine[] {
  const raw = cmd + (args.length ? " " + args.join(" ") : "");

  switch (cmd) {
    case "ls":
      if (args.includes("-la") || args.includes("-l")) {
        return mkLines("output",
          "total 48",
          "drwxr-xr-x 2 mido mido 4096 Jan 15 03:22 .",
          "drwxr-xr-x 8 mido mido 4096 Jan 10 12:00 ..",
          "-rw------- 1 mido mido  220 Jan 10 12:00 .bash_history",
          "-rw-r--r-- 1 mido mido 3526 Jan 10 12:00 .bashrc",
          "-rw-r--r-- 1 mido mido   33 Jan 15 03:22 notes.txt",
          "-rw-r--r-- 1 mido mido  421 Jan 15 03:24 suspicious.log",
        );
      }
      return [mkLine("output", "notes.txt  suspicious.log  .bashrc  .bash_history")];

    case "cat":
      if (!args[0]) return [mkLine("error", "cat: missing file operand")];
      const path = args[0].startsWith("/") ? args[0] : `/home/mido/${args[0]}`;
      const content = FAKE_FS[path] ?? FAKE_FS[`/home/mido/${args[0]}`];
      if (!content) return [mkLine("error", `cat: ${args[0]}: No such file or directory`)];
      return content.split("\n").map((l) => mkLine("output", l));

    case "grep":
      if (args.length < 2) return [mkLine("error", "Usage: grep <pattern> <file>")];
      const pattern = args[0];
      const file = args[args.length - 1];
      const filePath = file.startsWith("/") ? file : `/home/mido/${file}`;
      const fileContent = FAKE_FS[filePath] ?? FAKE_FS[`/home/mido/${file}`];
      if (!fileContent) return [mkLine("error", `grep: ${file}: No such file or directory`)];
      const matches = fileContent.split("\n").filter((l) =>
        l.toLowerCase().includes(pattern.toLowerCase())
      );
      if (matches.length === 0) return [mkLine("output", "")];
      return matches.map((l) => mkLine("output", l));

    case "pwd":
      return [mkLine("output", "/home/mido")];

    case "whoami":
      return [mkLine("output", "mido")];

    case "id":
      return [mkLine("output", "uid=1000(mido) gid=1000(mido) groups=1000(mido),4(adm),27(sudo)")];

    case "ps":
      return PROCESSES.map((l) => mkLine("output", l));

    case "top":
      return mkLines("output",
        "top - 03:24:07 up 1:22, 1 user, load average: 0.23, 0.18, 0.12",
        "Tasks:  98 total,  1 running, 97 sleeping",
        "Cpu(s):  2.3% us,  0.7% sy, 97.0% id",
        "MiB Mem: 3927.4 total, 2341.2 free, 891.4 used",
        "",
        "PID   USER  PR  NI   VIRT   RES  SHR S %CPU %MEM COMMAND",
        "3456  mido  20   0  45232  8912  6784 S  1.3  0.2 splunkd",
        "4567  mido  20   0  12432  3456  2876 S  0.3  0.1 tcpdump",
        "1234  mido  20   0   8912  2345  1876 S  0.0  0.1 bash",
      );

    case "chmod": {
      if (args.length < 2) return [mkLine("error", "Usage: chmod <mode> <file>")];
      const [mode, target] = args;
      return [mkLine("info", `✓ Changed permissions of '${target}' to ${mode}`)];
    }

    case "mkdir":
      if (!args[0]) return [mkLine("error", "mkdir: missing operand")];
      return [mkLine("info", `✓ Directory '${args[0]}' created`)];

    case "echo":
      return [mkLine("output", args.join(" ").replace(/^['"]|['"]$/g, ""))];

    case "find":
      return mkLines("output",
        ".",
        "./notes.txt",
        "./suspicious.log",
        "./.bashrc",
        "./.bash_history",
      );

    case "history":
      return mkLines("output",
        "1  ls -la",
        "2  cat suspicious.log",
        "3  grep 'Failed' /var/log/auth.log",
        "4  ps aux",
        "5  chmod 600 notes.txt",
      );

    case "sudo":
      if (args[0] === "su" || (args[0] === "-" && args.length === 1)) {
        return [mkLine("info", "[sudo] password for mido: \n✓ Switched to root")];
      }
      return [mkLine("info", `✓ Running '${args.join(" ")}' as root`)];

    case "df":
      return mkLines("output",
        "Filesystem     1K-blocks    Used Available Use% Mounted on",
        "/dev/sda1       20971520 4194304  16777216  21% /",
        "tmpfs            2011136       0   2011136   0% /dev/shm",
      );

    case "uname":
      return [mkLine("output", args.includes("-a")
        ? "Linux cyberforge 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
        : "Linux")];

    default:
      return [mkLine("error", `bash: ${cmd}: command not found\nTip: type 'help' to see available commands`)];
  }
}

function handleNetworking(cmd: string, args: string[]): TerminalLine[] {
  switch (cmd) {
    case "ifconfig":
    case "ip addr":
      return IFCONFIG_OUT.split("\n").map((l) => mkLine("output", l));

    case "ip":
      if (args[0] === "addr" || args[0] === "a") {
        return IFCONFIG_OUT.split("\n").map((l) => mkLine("output", l));
      }
      if (args[0] === "route") {
        return mkLines("output",
          "default via 192.168.1.1 dev eth0 proto dhcp src 192.168.1.105",
          "192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.105",
        );
      }
      return [mkLine("error", `ip: unknown subcommand '${args[0]}'`)];

    case "netstat":
      return mkLines("output",
        "Proto Recv-Q Send-Q Local Address    Foreign Address  State",
        "tcp        0      0 0.0.0.0:22       0.0.0.0:*        LISTEN",
        "tcp        0      0 0.0.0.0:8000     0.0.0.0:*        LISTEN",
        "tcp        0      0 192.168.1.105:22 192.168.1.50:6234 ESTABLISHED",
        "udp        0      0 0.0.0.0:68       0.0.0.0:*",
      );

    case "ss":
      return mkLines("output",
        "Netid  State   Recv-Q Send-Q  Local Address:Port  Peer Address:Port",
        "tcp    LISTEN  0      128     0.0.0.0:22           0.0.0.0:*",
        "tcp    LISTEN  0      5       0.0.0.0:8000         0.0.0.0:*",
        "tcp    ESTAB   0      0       192.168.1.105:22     192.168.1.50:6234",
      );

    case "ping":
      if (!args[0]) return [mkLine("error", "ping: missing host operand")];
      return mkLines("output",
        `PING ${args[0]} (93.184.216.34) 56(84) bytes of data.`,
        `64 bytes from ${args[0]}: icmp_seq=1 ttl=116 time=12.3 ms`,
        `64 bytes from ${args[0]}: icmp_seq=2 ttl=116 time=11.8 ms`,
        `64 bytes from ${args[0]}: icmp_seq=3 ttl=116 time=12.1 ms`,
        `--- ${args[0]} ping statistics ---`,
        "3 packets transmitted, 3 received, 0% packet loss",
      );

    case "traceroute":
    case "tracert":
      if (!args[0]) return [mkLine("error", "traceroute: missing host")];
      return mkLines("output",
        `traceroute to ${args[0]}, 30 hops max`,
        " 1  192.168.1.1      2.1 ms   1.9 ms   2.0 ms",
        " 2  10.0.0.1         8.4 ms   8.1 ms   8.3 ms",
        " 3  203.0.113.1     12.2 ms  11.9 ms  12.0 ms",
        `  4  ${args[0]}   13.5 ms  13.2 ms  13.4 ms`,
      );

    case "nmap":
      const target = args.find((a) => !a.startsWith("-")) ?? "192.168.1.1";
      return mkLines("output",
        `Starting Nmap 7.94 ( https://nmap.org )`,
        `Nmap scan report for ${target}`,
        "Host is up (0.0012s latency).",
        "",
        "PORT     STATE SERVICE  VERSION",
        "22/tcp   open  ssh      OpenSSH 8.9",
        "80/tcp   open  http     Apache 2.4",
        "443/tcp  open  https    nginx 1.24",
        "8080/tcp open  http-alt Tomcat 9.0",
        "",
        "Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds",
      );

    case "nslookup":
    case "dig":
      if (!args[0]) return [mkLine("error", `${cmd}: missing hostname`)];
      return mkLines("output",
        `Server:   8.8.8.8`,
        `Address:  8.8.8.8#53`,
        "",
        `Non-authoritative answer:`,
        `Name: ${args[0]}`,
        `Address: 93.184.216.34`,
      );

    case "curl":
      if (!args[0]) return [mkLine("error", "curl: no URL specified")];
      if (args.includes("-I")) {
        return mkLines("output",
          "HTTP/2 200",
          "content-type: text/html; charset=UTF-8",
          "server: cloudflare",
          "x-frame-options: SAMEORIGIN",
          "x-content-type-options: nosniff",
        );
      }
      return [mkLine("output", `<!DOCTYPE html><html><head><title>Response from ${args[0]}</title></head>...`)];

    case "arp":
      return mkLines("output",
        "Address          HWtype  HWaddress           Flags",
        "192.168.1.1      ether   08:00:27:aa:bb:cc   C",
        "192.168.1.50     ether   de:ad:be:ef:01:02   C",
      );

    default:
      return [mkLine("error", `bash: ${cmd}: command not found\nTip: type 'help' to see networking commands`)];
  }
}

function handleScripting(cmd: string, args: string[], input: string): TerminalLine[] {
  const full = input.trim();

  // Python
  if (cmd === "python3" || cmd === "python") {
    if (args.length === 0) {
      return mkLines("info",
        "Python 3.11.0 (CyberForge Simulator)",
        "Type Python expressions to evaluate them.",
        "Examples: python3 -c \"print('hello')\"",
      );
    }
    if (args[0] === "-c") {
      const code = args.slice(1).join(" ").replace(/^['"]|['"]$/g, "");
      try {
        if (code.includes("print(")) {
          const inner = code.match(/print\((['"]?)(.+?)\1\)/)?.[2] ?? "";
          return [mkLine("output", inner)];
        }
        if (code.includes("import socket")) {
          return mkLines("output",
            "Socket module loaded",
            "s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
          );
        }
        if (/^\d+[\s\d+\-*/]+\d+$/.test(code)) {
          // Safe simple math eval
          const result = Function(`"use strict"; return (${code})`)();
          return [mkLine("output", String(result))];
        }
      } catch {}
      return [mkLine("output", `[simulated] Running: ${code}`)];
    }
  }

  // Bash scripting
  if (cmd === "bash") {
    if (args[0] === "-c") {
      const script = args.slice(1).join(" ").replace(/^['"]|['"]$/g, "");
      return [mkLine("output", `[simulated] ${script}`)];
    }
    return [mkLine("info", "GNU bash, version 5.1.16\nInteractive mode not supported in simulation")];
  }

  // Variable assignment
  if (full.includes("=") && !full.startsWith("-")) {
    const [name, value] = full.split("=");
    return [mkLine("info", `✓ Variable '${name.trim()}' set to '${value?.trim() ?? ""}'`)];
  }

  // For loop
  if (full.startsWith("for ")) {
    return mkLines("output",
      "1", "2", "3", "4", "5",
      "[loop completed]",
    );
  }

  // Awk
  if (cmd === "awk") {
    return [mkLine("output", "[awk] Processed input with pattern: " + args.join(" "))];
  }

  // Sed
  if (cmd === "sed") {
    return [mkLine("output", "[sed] Applied substitution: " + args.join(" "))];
  }

  // Cut
  if (cmd === "cut") {
    return [mkLine("output", "[cut] Extracted fields: " + args.join(" "))];
  }

  // Sort / uniq / wc
  if (["sort", "uniq", "wc"].includes(cmd)) {
    return [mkLine("output", `[${cmd}] Processing input...`)];
  }

  // Pipe simulation
  if (full.includes("|")) {
    return [mkLine("output", `[pipeline] Executed: ${full}`)];
  }

  return handleLinux(cmd, args);
}

function handleSplunk(cmd: string, args: string[], input: string): TerminalLine[] {
  const full = input.trim();

  // SPL (Splunk Search Processing Language)
  if (full.startsWith("search ") || full.startsWith("index=")) {
    const query = full.replace(/^search /, "");
    return mkLines("output",
      `Searching: ${query}`,
      "",
      "Retrieving results from index...",
      "",
      "Time                  host           source         sourcetype",
      "2024-01-15 03:22:11   cyberforge     /var/log/auth  linux_secure",
      "2024-01-15 03:22:14   cyberforge     /var/log/auth  linux_secure",
      "2024-01-15 03:22:21   cyberforge     /var/log/auth  linux_secure",
      "",
      "3 events (before 15:24:07.000 +0000)",
    );
  }

  if (full.includes("stats count")) {
    return mkLines("output",
      "Running stats...",
      "",
      "src_ip             count",
      "185.234.218.99     47",
      "10.0.0.100          3",
      "192.168.1.50        1",
    );
  }

  if (full.includes("table ")) {
    return mkLines("output",
      "Generating table...",
      "",
      "_time                 action   src_ip",
      "2024-01-15 03:22:11   failure  185.234.218.99",
      "2024-01-15 03:22:14   failure  185.234.218.99",
      "2024-01-15 03:22:21   success  185.234.218.99",
    );
  }

  if (full.includes("| timechart") || full.includes("|timechart")) {
    return mkLines("output",
      "Generating timechart...",
      "",
      "_time              count",
      "2024-01-15 03:00    0",
      "2024-01-15 03:20    2",
      "2024-01-15 03:25   45",
      "2024-01-15 03:30    1",
      "",
      "[Visualization: Line chart with spike at 03:25 — brute force detected]",
    );
  }

  if (full.includes("alert") || full.includes("| alert")) {
    return mkLines("info",
      "✓ Alert configured:",
      "  Name: Brute Force Detection",
      "  Trigger: count > 10 within 5 minutes",
      "  Action: Send email to soc@cyberforge.io",
    );
  }

  switch (cmd) {
    case "index":
      return mkLines("output",
        "Available indexes:",
        "  main        (1.2 GB, 30-day retention)",
        "  security    (4.7 GB, 90-day retention)",
        "  windows     (2.1 GB, 30-day retention)",
        "  firewall    (8.3 GB, 90-day retention)",
      );

    case "fields":
      return mkLines("output",
        "Common fields in current search:",
        "  _time, host, source, sourcetype",
        "  action, src_ip, dest_ip, user",
        "  bytes_in, bytes_out, duration",
      );

    case "help":
      return mkLines("info",
        "── Splunk SPL Quick Reference ──",
        "",
        "SEARCH:  index=security action=failure",
        "FILTER:  | where src_ip=\"185.234.218.99\"",
        "STATS:   | stats count by src_ip",
        "TABLE:   | table _time action src_ip user",
        "CHART:   | timechart count by action",
        "SORT:    | sort -count",
        "TOP:     | top limit=10 src_ip",
        "DEDUP:   | dedup src_ip",
        "EVAL:    | eval risk=if(count>10,\"HIGH\",\"LOW\")",
        "",
        "Example hunt: index=security | stats count by src_ip | where count>10",
      );

    case "exit":
    case "quit":
      return [mkLine("info", "Splunk session ended.")];

    default:
      if (!full) return [];
      return [mkLine("error", `Unknown SPL command: '${cmd}'\nType 'help' for Splunk SPL reference`)];
  }
}

// ─── Welcome Banners ──────────────────────────────────────────────────────────

const BANNERS: Record<Environment, string[]> = {
  linux: [
    "┌─────────────────────────────────────────┐",
    "│  CyberForge Linux Lab  v1.0             │",
    "│  OS: Ubuntu 22.04 LTS (Simulated)       │",
    "│  User: mido | Role: SOC Analyst          │",
    "└─────────────────────────────────────────┘",
    "",
    "Type 'help' for available commands.",
    "Try: ls -la | cat notes.txt | grep 'Failed' suspicious.log",
  ],
  networking: [
    "┌─────────────────────────────────────────┐",
    "│  CyberForge Network Lab  v1.0           │",
    "│  Interface: eth0 @ 192.168.1.105/24     │",
    "│  Gateway: 192.168.1.1                   │",
    "└─────────────────────────────────────────┘",
    "",
    "Type 'help' for networking commands.",
    "Try: nmap 192.168.1.1 | ping google.com | netstat -an",
  ],
  scripting: [
    "┌─────────────────────────────────────────┐",
    "│  CyberForge Scripting Lab  v1.0         │",
    "│  Bash 5.1 | Python 3.11 | Awk/Sed       │",
    "│  Focus: Security automation             │",
    "└─────────────────────────────────────────┘",
    "",
    "Type 'help' for scripting commands.",
    "Try: python3 -c \"print('Hello, SOC!')\" | for i in 1 2 3; do echo $i; done",
  ],
  splunk: [
    "┌─────────────────────────────────────────┐",
    "│  CyberForge Splunk Lab  v1.0            │",
    "│  Connected to: SplunkEnterprise 9.1     │",
    "│  Indexes: main, security, firewall       │",
    "└─────────────────────────────────────────┘",
    "",
    "Type 'help' for SPL reference.",
    "Try: index=security action=failure | stats count by src_ip",
  ],
};

// ─── Help text ────────────────────────────────────────────────────────────────

const HELP: Record<Environment, string[]> = {
  linux: [
    "── Linux Commands ──",
    "FILE:    ls [-la]  cat <file>  grep <pattern> <file>  find  mkdir",
    "SYSTEM:  pwd  whoami  id  ps  top  df  uname [-a]",
    "PERMS:   chmod <mode> <file>  sudo <cmd>",
    "OTHER:   echo <text>  history  clear",
    "",
    "Available files: notes.txt, suspicious.log, /etc/passwd, /etc/hosts, /var/log/auth.log",
  ],
  networking: [
    "── Networking Commands ──",
    "INTERFACES:  ifconfig  ip addr  ip route",
    "DISCOVERY:   ping <host>  traceroute <host>  nmap <target>",
    "CONNECTIONS: netstat -an  ss -tulnp  arp",
    "DNS:         nslookup <host>  dig <host>",
    "HTTP:        curl <url>  curl -I <url>  (check headers)",
  ],
  scripting: [
    "── Scripting Commands ──",
    "PYTHON:  python3 -c \"<code>\"  python3 script.py",
    "BASH:    bash -c \"<cmd>\"  for i in 1 2 3; do echo $i; done",
    "TEXT:    awk '{print $1}' file  sed 's/foo/bar/' file",
    "UTILS:   sort  uniq  wc -l  cut -d: -f1",
    "All Linux commands also available here.",
  ],
  splunk: [
    "── Splunk SPL ──",
    "SEARCH:  index=security action=failure",
    "FILTER:  | where count > 10",
    "STATS:   | stats count by src_ip",
    "TABLE:   | table _time action src_ip",
    "CHART:   | timechart count by action",
    "EVAL:    | eval risk=if(count>10,\"HIGH\",\"LOW\")",
    "",
    "Type 'index' to list available indexes",
    "Type 'fields' to see searchable fields",
  ],
};

// ─── Terminal Component ───────────────────────────────────────────────────────

interface Props {
  defaultEnv?: Environment;
}

export default function CyberTerminal({ defaultEnv = "linux" }: Props) {
  const [env, setEnv] = useState<Environment>(defaultEnv);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const cfg = ENV_CONFIG[env];

  // Boot sequence
  useEffect(() => {
    setLines([]);
    setIsBooting(true);
    const banner = BANNERS[env];
    let i = 0;
    const timer = setInterval(() => {
      if (i < banner.length) {
        setLines((prev) => [...prev, mkLine("banner", banner[i])]);
        i++;
      } else {
        setIsBooting(false);
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [env]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const processCommand = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      setHistory((h) => [trimmed, ...h.slice(0, 49)]);
      setHistoryIdx(-1);

      setLines((prev) => [
        ...prev,
        mkLine("input", `${cfg.prompt} ${trimmed}`),
      ]);

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      let result: TerminalLine[] = [];

      if (cmd === "clear" || cmd === "cls") {
        setLines([]);
        return;
      }

      if (cmd === "help") {
        result = HELP[env].map((l) => mkLine("info", l));
      } else if (cmd === "exit" || cmd === "logout") {
        result = [mkLine("info", "Session ended. Reload to restart.")];
      } else {
        switch (env) {
          case "linux":
            result = handleLinux(cmd, args);
            break;
          case "networking":
            result = handleNetworking(cmd, args);
            break;
          case "scripting":
            result = handleScripting(cmd, args, trimmed);
            break;
          case "splunk":
            result = handleSplunk(cmd, args, trimmed);
            break;
        }
      }

      setLines((prev) => [...prev, ...result]);
    },
    [env, cfg.prompt]
  );

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : history[next] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Basic tab completion
      const cmds = {
        linux: ["ls", "cat", "grep", "chmod", "ps", "top", "find", "pwd", "whoami", "sudo", "mkdir", "echo", "history", "uname", "df", "id", "clear"],
        networking: ["ifconfig", "ip", "netstat", "ss", "ping", "traceroute", "nmap", "nslookup", "dig", "curl", "arp"],
        scripting: ["python3", "bash", "awk", "sed", "cut", "sort", "uniq", "wc", "grep", "ls"],
        splunk: ["index", "fields", "help", "search", "exit"],
      };
      const available = cmds[env];
      const match = available.find((c) => c.startsWith(input));
      if (match) setInput(match);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  }

  function switchEnv(newEnv: Environment) {
    if (newEnv === env) return;
    setEnv(newEnv);
    setInput("");
    setHistory([]);
    setHistoryIdx(-1);
  }

  function getLineColor(type: TerminalLine["type"]): string {
    switch (type) {
      case "input": return cfg.color;
      case "error": return "#f87171";
      case "info": return "#a3e635";
      case "banner": return cfg.color;
      default: return "#d1d5db";
    }
  }

  const envKeys: Environment[] = ["linux", "networking", "scripting", "splunk"];

  return (
    <div
      className="flex flex-col w-full rounded-xl overflow-hidden border border-gray-700"
      style={{ fontFamily: "monospace" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="flex-1 text-center text-xs text-gray-400">
          CyberForge Terminal — {cfg.label} Lab
        </span>
      </div>

      {/* Environment tabs */}
      <div className="flex bg-gray-950 border-b border-gray-700">
        {envKeys.map((e) => (
          <button
            key={e}
            onClick={() => switchEnv(e)}
            className={`px-4 py-2 text-xs font-medium transition-all border-b-2 ${
              env === e
                ? "border-current text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
            style={env === e ? { color: ENV_CONFIG[e].color, borderColor: ENV_CONFIG[e].color } : {}}
          >
            {ENV_CONFIG[e].label}
          </button>
        ))}
        <div className="ml-auto flex items-center pr-3 gap-3 text-xs text-gray-600">
          <span>↑↓ history</span>
          <span>Tab complete</span>
          <span>Ctrl+L clear</span>
        </div>
      </div>

      {/* Terminal output */}
      <div
        className={`flex-1 overflow-y-auto p-4 bg-gray-950 ${cfg.bgAccent} min-h-72 max-h-[480px] cursor-text`}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className="text-sm leading-relaxed whitespace-pre-wrap break-all"
            style={{ color: getLineColor(line.type) }}
          >
            {line.content || "\u00A0"}
          </div>
        ))}

        {/* Input line */}
        {!isBooting && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm" style={{ color: cfg.color }}>
              {cfg.prompt}
            </span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-sm text-gray-100 outline-none caret-green-400"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder=""
                style={{ caretColor: cfg.color }}
              />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-4 px-4 py-1.5 bg-gray-900 border-t border-gray-700 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: cfg.color }}
          />
          {cfg.label} environment active
        </span>
        <span className="ml-auto">{lines.filter((l) => l.type === "input").length} commands run</span>
      </div>
    </div>
  );
}
