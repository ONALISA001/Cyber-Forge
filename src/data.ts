import { Course, Lab, Certification, CareerMilestone } from './types';
import { beginnerCourses } from './data/beginner-courses';
import { intermediateCourses } from './data/intermediate-courses';
import { advancedCourses } from './data/advanced-courses';

export const courses: Course[] = [
  ...beginnerCourses,
  ...intermediateCourses,
  ...advancedCourses,
];

export const labs: Lab[] = [
  // BEGINNER
  {
    id: 'wireshark-basics',
    tier: 'beginner',
    title: 'Wireshark Packet Capture Basics',
    skillArea: 'Networking',
    description: 'Capture and analyze network traffic using Wireshark to understand protocol behavior.',
    objectives: ['Capture live network packets', 'Apply display filters', 'Identify TCP handshakes', 'Analyze HTTP traffic'],
    instructions: [
      'Open a terminal and start a packet capture',
      'Generate traffic by browsing a website',
      'Apply filters to isolate HTTP traffic',
      'Examine the TCP three-way handshake',
      'Export findings and write a brief analysis',
    ],
    terminalCommands: [
      { command: 'sudo tcpdump -i eth0 -c 50 -w capture.pcap', output: 'tcpdump: listening on eth0, link-type EN10MB\n50 packets captured\n50 packets received by filter' },
      { command: 'tcpdump -r capture.pcap -n | head -20', output: '14:23:01.234 IP 192.168.1.10.45032 > 93.184.216.34.80: Flags [S], seq 1234567\n14:23:01.267 IP 93.184.216.34.80 > 192.168.1.10.45032: Flags [S.], seq 7654321, ack 1234568\n14:23:01.267 IP 192.168.1.10.45032 > 93.184.216.34.80: Flags [.], ack 7654322' },
      { command: 'tcpdump -r capture.pcap -n "tcp port 80" | wc -l', output: '23' },
    ],
    externalPlatforms: [
      { name: 'TryHackMe — Wireshark 101', url: 'https://tryhackme.com/room/wireshark' },
    ],
  },
  {
    id: 'linux-cli',
    tier: 'beginner',
    title: 'Command-Line Fundamentals (Linux)',
    skillArea: 'Operating Systems',
    description: 'Master essential Linux command-line skills for security operations.',
    objectives: ['Navigate the filesystem', 'Manage files and permissions', 'Use pipes and redirects', 'Search and filter text'],
    instructions: [
      'Navigate to /var/log and list files',
      'Search for failed login attempts in auth.log',
      'Create a filtered report of suspicious activity',
      'Set appropriate file permissions',
    ],
    terminalCommands: [
      { command: 'ls -la /var/log/', output: 'total 4820\ndrwxr-xr-x  12 root root  4096 Jul  3 14:00 .\n-rw-r-----   1 root adm  45678 Jul  3 14:00 auth.log\n-rw-r-----   1 root adm  12345 Jul  3 13:00 syslog\n-rw-r-----   1 root adm   8901 Jul  3 12:00 kern.log' },
      { command: 'grep "Failed password" /var/log/auth.log | tail -5', output: 'Jul  3 13:45:22 server sshd[1234]: Failed password for root from 10.0.0.5 port 22\nJul  3 13:45:25 server sshd[1235]: Failed password for admin from 10.0.0.5 port 22\nJul  3 13:45:28 server sshd[1236]: Failed password for root from 10.0.0.5 port 22' },
      { command: 'grep "Failed password" /var/log/auth.log | awk \'{print $11}\' | sort | uniq -c | sort -rn', output: '     15 10.0.0.5\n      3 192.168.1.100\n      1 172.16.0.50' },
      { command: 'chmod 640 /var/log/auth.log && ls -l /var/log/auth.log', output: '-rw-r-----  1 root adm  45678 Jul  3 14:00 /var/log/auth.log' },
    ],
    externalPlatforms: [
      { name: 'OverTheWire — Bandit', url: 'https://overthewire.org/wargames/bandit/' },
      { name: 'TryHackMe — Linux Fundamentals', url: 'https://tryhackme.com/module/linux-fundamentals' },
    ],
  },
  {
    id: 'nmap-scanning',
    tier: 'beginner',
    title: 'Basic Nmap Scanning',
    skillArea: 'Networking',
    description: 'Learn to use Nmap for network discovery and security auditing.',
    objectives: ['Perform host discovery scans', 'Identify open ports and services', 'Detect operating systems', 'Interpret scan results'],
    instructions: [
      'Perform a ping sweep to discover hosts',
      'Run a SYN scan on discovered hosts',
      'Identify services and versions',
      'Save results to a report file',
    ],
    terminalCommands: [
      { command: 'nmap -sn 192.168.1.0/24', output: 'Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.0010s latency).\nNmap scan report for 192.168.1.10\nHost is up (0.0020s latency).\nNmap scan report for 192.168.1.25\nHost is up (0.0015s latency).\nNmap done: 256 IP addresses (3 hosts up)' },
      { command: 'nmap -sS -sV -O 192.168.1.25', output: 'PORT     STATE SERVICE  VERSION\n22/tcp   open  ssh      OpenSSH 8.9p1\n80/tcp   open  http     Apache httpd 2.4.54\n443/tcp  open  ssl/http Apache httpd 2.4.54\n3306/tcp open  mysql    MySQL 8.0.30\nOS: Linux 5.15' },
    ],
    externalPlatforms: [
      { name: 'TryHackMe — Nmap', url: 'https://tryhackme.com/room/furthernmap' },
    ],
  },
  {
    id: 'security-audit',
    tier: 'beginner',
    title: 'Personal Security Audit',
    skillArea: 'Security Concepts',
    description: 'Conduct a security audit of your own digital footprint and personal security posture.',
    objectives: ['Assess password hygiene', 'Review account security settings', 'Check for data breaches', 'Implement 2FA'],
    instructions: [
      'Check if your email appears in known breaches',
      'Audit your password strength and reuse',
      'Enable 2FA on critical accounts',
      'Review app permissions and connected services',
      'Document findings in a security report',
    ],
    terminalCommands: [
      { command: 'curl -s "https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com" -H "hibp-api-key: YOUR_KEY" | python3 -m json.tool', output: '[\n  {\n    "Name": "ExampleBreach",\n    "BreachDate": "2023-01-15",\n    "DataClasses": ["Email addresses", "Passwords"]\n  }\n]' },
    ],
    externalPlatforms: [
      { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/' },
    ],
  },
  // INTERMEDIATE
  {
    id: 'splunk-log-analysis',
    tier: 'intermediate',
    title: 'Splunk/ELK Log Analysis',
    skillArea: 'SIEM',
    description: 'Analyze security logs using SIEM tools to detect threats and anomalies.',
    objectives: ['Write SPL search queries', 'Build correlation rules', 'Create security dashboards', 'Investigate alerts'],
    instructions: [
      'Ingest sample log data into your SIEM',
      'Write queries to find failed authentications',
      'Correlate events to identify brute force attacks',
      'Build an alert for suspicious activity',
      'Create a dashboard showing key metrics',
    ],
    terminalCommands: [
      { command: 'splunk search "index=security sourcetype=auth failed" -maxout 10', output: '07/03/2026 13:45:22, src=10.0.0.5, user=root, action=failed\n07/03/2026 13:45:25, src=10.0.0.5, user=admin, action=failed\n07/03/2026 13:45:28, src=10.0.0.5, user=root, action=failed\n07/03/2026 13:46:01, src=10.0.0.5, user=test, action=failed' },
      { command: 'splunk search "index=security failed | stats count by src | where count > 5"', output: 'src          count\n10.0.0.5     23\n172.16.0.10  8' },
    ],
    externalPlatforms: [
      { name: 'Splunk Free — Boss of the SOC', url: 'https://bots.splunk.com/' },
      { name: 'TryHackMe — Splunk 101', url: 'https://tryhackme.com/room/splunk101' },
    ],
  },
  {
    id: 'soc-triage',
    tier: 'intermediate',
    title: 'SOC Alert Triage Simulation',
    skillArea: 'Incident Response',
    description: 'Practice triaging security alerts in a simulated SOC environment.',
    objectives: ['Classify alert severity levels', 'Perform initial alert triage', 'Escalate true positives', 'Document false positives'],
    instructions: [
      'Review incoming security alerts',
      'Classify each alert by severity and type',
      'Investigate indicators of compromise',
      'Determine true vs false positives',
      'Write triage notes for each alert',
    ],
    terminalCommands: [
      { command: 'cat /var/log/alerts/alert_001.json | python3 -m json.tool', output: '{\n  "alert_id": "ALT-001",\n  "severity": "HIGH",\n  "type": "Brute Force",\n  "source_ip": "10.0.0.5",\n  "target": "DC01",\n  "events": 47,\n  "timeframe": "5 minutes",\n  "status": "NEW"\n}' },
    ],
    externalPlatforms: [
      { name: 'LetsDefend — SOC Analyst', url: 'https://letsdefend.io/' },
      { name: 'TryHackMe — SOC Level 1', url: 'https://tryhackme.com/path/outline/soclevel1' },
    ],
  },
  {
    id: 'malware-sandbox',
    tier: 'intermediate',
    title: 'Basic Malware Analysis in a Sandbox',
    skillArea: 'Security Analysis',
    description: 'Safely analyze suspicious files in an isolated sandbox environment.',
    objectives: ['Set up a malware analysis sandbox', 'Perform static analysis', 'Observe dynamic behavior', 'Extract indicators of compromise'],
    instructions: [
      'Set up an isolated virtual environment',
      'Perform static analysis on suspicious files',
      'Execute samples and monitor behavior',
      'Extract IOCs (hashes, IPs, domains)',
      'Write an analysis report',
    ],
    terminalCommands: [
      { command: 'sha256sum suspicious_file.exe', output: 'a1b2c3d4e5f6789012345678abcdef0123456789abcdef0123456789abcdef01  suspicious_file.exe' },
      { command: 'strings suspicious_file.exe | grep -i "http"', output: 'http://malicious-c2.evil.com/beacon\nhttp://update.evil.com/payload\nhttps://exfil.evil.com/data' },
      { command: 'file suspicious_file.exe', output: 'suspicious_file.exe: PE32 executable (GUI) Intel 80386, for MS Windows' },
    ],
    externalPlatforms: [
      { name: 'Any.Run — Interactive Sandbox', url: 'https://any.run/' },
      { name: 'Hybrid Analysis', url: 'https://www.hybrid-analysis.com/' },
    ],
  },
  {
    id: 'mitre-attack',
    tier: 'intermediate',
    title: 'MITRE ATT&CK Mapping Exercise',
    skillArea: 'Threat Intelligence',
    description: 'Map real-world attack techniques to the MITRE ATT&CK framework.',
    objectives: ['Navigate the ATT&CK matrix', 'Map attack techniques to tactics', 'Identify detection opportunities', 'Create threat profiles'],
    instructions: [
      'Review a simulated incident report',
      'Identify techniques used by the attacker',
      'Map techniques to ATT&CK tactics',
      'Identify detection and mitigation strategies',
      'Create a threat actor profile',
    ],
    terminalCommands: [
      { command: 'curl -s "https://attack.mitre.org/api/techniques" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d),\'techniques loaded\')"', output: '625 techniques loaded' },
    ],
    externalPlatforms: [
      { name: 'MITRE ATT&CK Navigator', url: 'https://mitre-attack.github.io/attack-navigator/' },
      { name: 'TryHackMe — MITRE', url: 'https://tryhackme.com/room/mitre' },
    ],
  },
  // ADVANCED
  {
    id: 'ctf-pentest',
    tier: 'advanced',
    title: 'Full CTF Penetration Testing Lab',
    skillArea: 'Penetration Testing',
    description: 'Complete a full penetration test against a vulnerable target machine.',
    objectives: ['Perform full reconnaissance', 'Exploit multiple vulnerabilities', 'Achieve privilege escalation', 'Write a professional report'],
    instructions: [
      'Enumerate the target with Nmap and Gobuster',
      'Identify and exploit web application vulnerabilities',
      'Gain initial access via reverse shell',
      'Escalate privileges to root',
      'Capture all flags and write a report',
    ],
    terminalCommands: [
      { command: 'nmap -sC -sV -oA target 10.10.10.50', output: 'PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1\n80/tcp open  http    Apache httpd 2.4.41\n|_http-title: Vulnerable Corp' },
      { command: 'gobuster dir -u http://10.10.10.50 -w /usr/share/wordlists/dirb/common.txt', output: '/admin        (Status: 301)\n/uploads      (Status: 301)\n/backup       (Status: 403)\n/config       (Status: 200)' },
      { command: 'cat /root/root.txt', output: 'FLAG{c0ngr4ts_y0u_pwn3d_th3_b0x}' },
    ],
    externalPlatforms: [
      { name: 'Hack The Box', url: 'https://www.hackthebox.com/' },
      { name: 'TryHackMe — Offensive Pentesting', url: 'https://tryhackme.com/path/outline/pentesting' },
      { name: 'VulnHub', url: 'https://www.vulnhub.com/' },
    ],
  },
  {
    id: 'forensics-investigation',
    tier: 'advanced',
    title: 'Digital Forensics Case Investigation',
    skillArea: 'Digital Forensics',
    description: 'Investigate a simulated security incident using digital forensics techniques.',
    objectives: ['Acquire and preserve digital evidence', 'Perform memory forensics', 'Conduct timeline analysis', 'Write a forensic report'],
    instructions: [
      'Create a forensic image of the suspect drive',
      'Analyze memory dump with Volatility',
      'Build a timeline of events',
      'Extract and analyze artifacts',
      'Compile findings into a forensic report',
    ],
    terminalCommands: [
      { command: 'volatility -f memory.dmp imageinfo', output: 'Suggested Profile(s): Win10x64_19041\nImage Type: AMD64\nDTB: 0x1aa000\nKDBG: 0xf8005c2c00a0' },
      { command: 'volatility -f memory.dmp --profile=Win10x64_19041 pslist | head -10', output: 'Offset(V)          Name                    PID   PPID\n0xffff8a0123456780 System                    4      0\n0xffff8a0123456890 smss.exe                348      4\n0xffff8a01234569a0 csrss.exe               456    348\n0xffff8a0123456ab0 svchost.exe             789    456\n0xffff8a0123456bc0 suspicious.exe         1337    789' },
      { command: 'volatility -f memory.dmp --profile=Win10x64_19041 netscan | grep "suspicious"', output: '0xffff8a0198765432  TCPv4  10.0.0.50:49152  185.141.27.78:443  ESTABLISHED  1337  suspicious.exe' },
    ],
    externalPlatforms: [
      { name: 'CyberDefenders — Blue Team Labs', url: 'https://cyberdefenders.org/' },
      { name: 'DFIR.training', url: 'https://www.dfir.training/' },
    ],
  },
  {
    id: 'red-vs-blue',
    tier: 'advanced',
    title: 'Red Team vs Blue Team Simulation',
    skillArea: 'Security Operations',
    description: 'Participate in a simulated red team / blue team exercise.',
    objectives: ['Execute red team attack chains', 'Detect attacks as blue team', 'Implement defensive measures', 'Conduct after-action review'],
    instructions: [
      'Red team: Plan and execute an attack campaign',
      'Blue team: Monitor, detect, and respond to attacks',
      'Document attack techniques and detection gaps',
      'Implement new defensive measures',
      'Conduct a joint after-action review',
    ],
    terminalCommands: [
      { command: 'msfconsole -q -x "use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST 10.0.0.100; set LPORT 4444; exploit"', output: '[*] Started reverse TCP handler on 10.0.0.100:4444\n[*] Meterpreter session 1 opened (10.0.0.100:4444 -> 10.10.10.50:49152)' },
    ],
    externalPlatforms: [
      { name: 'Hack The Box — Pro Labs', url: 'https://www.hackthebox.com/hacker/pro-labs' },
      { name: 'RangeForce', url: 'https://www.rangeforce.com/' },
    ],
  },
];

export const certifications: Certification[] = [
  // BEGINNER
  { id: 'google-cybersec', tier: 'beginner', name: 'Google Cybersecurity Professional Certificate', provider: 'Google / Coursera', cost: '$49/month (Coursera subscription)', prerequisites: 'None', studyResources: ['Coursera course (self-paced)', 'Google Cybersecurity certificate site'], description: 'Entry-level certificate covering security fundamentals, Linux, SQL, Python, SIEM tools, and IDS.' },
  { id: 'security-plus', tier: 'beginner', name: 'CompTIA Security+ (SY0-701)', provider: 'CompTIA', cost: '$404 (exam voucher)', prerequisites: 'CompTIA Network+ recommended', studyResources: ['Professor Messer (free YouTube)', 'CompTIA CertMaster', 'Jason Dion Udemy course', 'Get Certified Get Ahead (book)'], description: 'Industry-standard baseline security certification covering threats, architecture, operations, and governance.' },
  { id: 'isc2-cc', tier: 'beginner', name: 'ISC2 Certified in Cybersecurity (CC)', provider: 'ISC2', cost: 'Free (exam and training)', prerequisites: 'None', studyResources: ['ISC2 free self-paced training', 'ISC2 CC Official Study Guide'], description: 'Free entry-level certification from ISC2 covering foundational cybersecurity principles.' },
  // INTERMEDIATE
  { id: 'cysa-plus', tier: 'intermediate', name: 'CompTIA CySA+ (CS0-003)', provider: 'CompTIA', cost: '$404 (exam voucher)', prerequisites: 'Security+ or equivalent knowledge', studyResources: ['CompTIA CertMaster', 'Jason Dion CySA+ course', 'Sybex CySA+ Study Guide'], description: 'Intermediate security analytics certification focusing on threat detection, analysis, and response.' },
  { id: 'ejpt', tier: 'intermediate', name: 'eJPT (eLearnSecurity Junior Penetration Tester)', provider: 'INE Security', cost: '$249 (exam + training)', prerequisites: 'Basic networking and security knowledge', studyResources: ['INE free Starter Pass', 'eJPT official courseware', 'TryHackMe Jr Penetration Tester path'], description: 'Practical entry-level penetration testing certification with hands-on exam.' },
  { id: 'sc-900', tier: 'intermediate', name: 'Microsoft SC-900', provider: 'Microsoft', cost: '$165 (exam)', prerequisites: 'None', studyResources: ['Microsoft Learn (free)', 'John Savill YouTube series', 'MeasureUp practice tests'], description: 'Microsoft Security, Compliance, and Identity Fundamentals certification.' },
  // ADVANCED
  { id: 'oscp', tier: 'advanced', name: 'OSCP (Offensive Security Certified Professional)', provider: 'OffSec', cost: '$1,749+ (course + exam)', prerequisites: 'Strong networking, Linux, and scripting skills', studyResources: ['PEN-200 course (included)', 'TJ Null OSCP prep list', 'Hack The Box and TryHackMe labs', 'IppSec YouTube walkthroughs'], description: 'The gold standard penetration testing certification — 24-hour hands-on exam.' },
  { id: 'gcih', tier: 'advanced', name: 'GCIH (GIAC Certified Incident Handler)', provider: 'SANS / GIAC', cost: '$8,525+ (training + exam)', prerequisites: 'IR experience recommended', studyResources: ['SANS SEC504 course', 'GIAC practice tests', 'SANS reading room papers'], description: 'Advanced incident handling certification covering attack techniques and defensive strategies.' },
  { id: 'cissp', tier: 'advanced', name: 'CISSP (Certified Information Systems Security Professional)', provider: 'ISC2', cost: '$749 (exam)', prerequisites: '5 years experience (or Associate)', studyResources: ['ISC2 Official Study Guide', 'Destination Certification YouTube', 'Boson practice exams', 'Think Like a Manager (Kelly Handerhan)'], description: 'Premier management-level security certification covering 8 domains of security.' },
  { id: 'aws-security', tier: 'advanced', name: 'AWS Security Specialty', provider: 'Amazon Web Services', cost: '$300 (exam)', prerequisites: 'AWS experience, Security+ recommended', studyResources: ['AWS Skill Builder', 'A Cloud Guru course', 'Tutorials Dojo practice exams'], description: 'Specialty certification for securing AWS cloud environments.' },
];

export const careerMilestones: CareerMilestone[] = [
  { tier: 'beginner', milestones: ['Set up LinkedIn profile with cybersecurity headline', 'Create GitHub account', 'Publish first "learning in public" post', 'Join cybersecurity Discord/Reddit communities', 'Complete a CTF challenge'] },
  { tier: 'intermediate', milestones: ['Build 2-3 portfolio projects on GitHub with proper documentation', 'Start applying to entry-level/internship roles', 'Request LinkedIn recommendations', 'Write a technical blog post', 'Attend a security meetup or conference'] },
  { tier: 'advanced', milestones: ['Contribute to open-source security tools', 'Write technical blog posts/write-ups', 'Mock interview practice', 'Negotiate first offer', 'Mentor a beginner', 'Speak at a meetup or create educational content'] },
];

export const communityResources = [
  { tier: 'beginner' as const, resources: [
    { name: 'TryHackMe', url: 'https://tryhackme.com', description: 'Guided, gamified cybersecurity training with hands-on labs' },
    { name: 'OverTheWire', url: 'https://overthewire.org/wargames/', description: 'Free wargames for learning Linux and security basics' },
    { name: 'Cybrary', url: 'https://www.cybrary.it', description: 'Free cybersecurity courses and career paths' },
    { name: 'Professor Messer (YouTube)', url: 'https://www.youtube.com/@professormesser', description: 'Free CompTIA certification training videos' },
    { name: 'NetworkChuck (YouTube)', url: 'https://www.youtube.com/@NetworkChuck', description: 'Entertaining networking and cybersecurity tutorials' },
  ]},
  { tier: 'intermediate' as const, resources: [
    { name: 'LetsDefend', url: 'https://letsdefend.io', description: 'SOC analyst training with realistic alert simulations' },
    { name: 'Blue Team Labs Online', url: 'https://blueteamlabs.online', description: 'Defensive security challenges and investigations' },
    { name: 'SANS Reading Room', url: 'https://www.sans.org/white-papers/', description: 'Free security research papers and whitepapers' },
    { name: 'John Hammond (YouTube)', url: 'https://www.youtube.com/@_JohnHammond', description: 'CTF walkthroughs and security research' },
    { name: 'The DFIR Report', url: 'https://thedfirreport.com', description: 'Real-world intrusion analysis reports' },
  ]},
  { tier: 'advanced' as const, resources: [
    { name: 'Hack The Box', url: 'https://www.hackthebox.com', description: 'Advanced penetration testing labs and challenges' },
    { name: 'VulnHub', url: 'https://www.vulnhub.com', description: 'Free vulnerable VMs for penetration testing practice' },
    { name: 'CyberDefenders', url: 'https://cyberdefenders.org', description: 'Blue team CTF challenges and forensics labs' },
    { name: 'IppSec (YouTube)', url: 'https://www.youtube.com/@ippsec', description: 'Detailed Hack The Box walkthroughs' },
    { name: 'OWASP', url: 'https://owasp.org', description: 'Open-source application security resources and projects' },
  ]},
];
