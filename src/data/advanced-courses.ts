import { Course } from '../types';

export const advancedCourses: Course[] = [
  {
    id: 'pentest-fundamentals',
    tier: 'advanced',
    title: 'Penetration Testing Fundamentals',
    description: 'A comprehensive, hands-on course covering the full penetration testing lifecycle from reconnaissance through reporting. Students will master industry-standard tools and methodologies used by professional penetration testers, learning to identify and exploit vulnerabilities in networks, systems, and web applications while maintaining ethical and legal standards.',
    objectives: [
      'Execute a full penetration test following industry-standard methodologies such as PTES and OWASP Testing Guide',
      'Perform advanced reconnaissance and OSINT gathering to map target attack surfaces',
      'Identify and exploit vulnerabilities in networks, operating systems, and web applications',
      'Conduct post-exploitation activities including lateral movement and data exfiltration',
      'Escalate privileges on both Windows and Linux systems using manual and automated techniques',
      'Produce professional penetration testing reports with actionable remediation guidance'
    ],
    estimatedHours: 45,
    prerequisites: ['scripting-security', 'siem-log-analysis'],
    modules: [
      {
        title: 'Pentest Methodology',
        duration: '5 hours',
        overview: 'This module establishes the foundational methodologies and frameworks that guide professional penetration testing engagements. Students will learn how to scope engagements, understand rules of engagement, and follow structured approaches such as PTES, OSSTMM, and the OWASP Testing Guide. Legal and ethical considerations are emphasized throughout.',
        topics: [
          {
            heading: 'Penetration Testing Frameworks & Standards',
            detail: 'Explore the Penetration Testing Execution Standard (PTES), Open Source Security Testing Methodology Manual (OSSTMM), and NIST SP 800-115 Technical Guide to Information Security Testing. Understand how each framework structures the testing lifecycle from pre-engagement through reporting. Compare their strengths and applicability to different engagement types including network, application, and physical testing.'
          },
          {
            heading: 'Engagement Scoping & Rules of Engagement',
            detail: 'Learn to define precise scope boundaries including IP ranges, domains, and testing windows. Draft and review Rules of Engagement (RoE) documents that specify authorized activities, emergency contacts, and escalation procedures. Understand the differences between black-box, grey-box, and white-box testing approaches and when each is appropriate.'
          },
          {
            heading: 'Legal & Ethical Considerations',
            detail: 'Examine the legal frameworks governing penetration testing including the Computer Fraud and Abuse Act (CFAA), GDPR implications, and sector-specific regulations. Review case studies where testers crossed legal boundaries and the resulting consequences. Understand the importance of written authorization and how to protect yourself and your organization legally.'
          },
          {
            heading: 'Setting Up Your Testing Environment',
            detail: 'Configure a professional penetration testing lab using Kali Linux, Parrot Security OS, and purpose-built VMs. Set up isolated networks with vulnerable targets such as Metasploitable, DVWA, and HackTheBox machines. Learn to use tools like VirtualBox and Proxmox for lab management, and configure VPN tunnels for remote engagements.'
          },
          {
            heading: 'Testing Lifecycle & Phase Management',
            detail: 'Walk through each phase of a penetration test: planning, discovery, attack, and reporting. Understand how findings from one phase inform the next and how to manage time effectively across phases. Learn to maintain detailed notes using tools like CherryTree, Obsidian, or KeepNote for evidence preservation and report generation.'
          }
        ],
        keyTakeaways: [
          'Understand and apply industry-standard penetration testing methodologies',
          'Draft professional scope documents and rules of engagement',
          'Navigate the legal landscape surrounding authorized security testing',
          'Build and maintain a functional penetration testing lab environment'
        ],
        practiceExercises: [
          'Draft a complete scope document and Rules of Engagement for a simulated corporate penetration test',
          'Set up a Kali Linux VM with Metasploitable 2 as a target and verify connectivity',
          'Map a sample engagement to the PTES phases and create a project timeline'
        ],
        resources: [
          { name: 'The Penetration Testing Execution Standard (PTES)', url: 'http://www.pentest-standard.org' },
          { name: 'Penetration Testing by Georgia Weidman (No Starch Press)' },
          { name: 'OWASP Testing Guide v4.2', url: 'https://owasp.org/www-project-web-security-testing-guide/' }
        ]
      },
      {
        title: 'Reconnaissance & OSINT',
        duration: '6 hours',
        overview: 'Master the art of information gathering using both passive and active reconnaissance techniques. This module covers Open Source Intelligence (OSINT) collection, DNS enumeration, social engineering reconnaissance, and attack surface mapping. Students will learn to build comprehensive target profiles before any scanning begins.',
        topics: [
          {
            heading: 'Passive Reconnaissance Techniques',
            detail: 'Gather intelligence without directly interacting with target systems using WHOIS lookups, DNS records analysis, Google dorking, and Shodan searches. Leverage certificate transparency logs via crt.sh to discover subdomains. Use the Wayback Machine to find historical website content, exposed credentials, and deprecated endpoints that may still be accessible.'
          },
          {
            heading: 'OSINT Frameworks & Tools',
            detail: 'Utilize professional OSINT tools including Maltego for relationship mapping, theHarvester for email and subdomain enumeration, Recon-ng for automated reconnaissance workflows, and SpiderFoot for comprehensive target profiling. Learn to chain multiple tools together to build complete intelligence dossiers on target organizations.'
          },
          {
            heading: 'Social Media & Human Intelligence',
            detail: 'Extract valuable intelligence from LinkedIn, Twitter, GitHub, and other platforms to identify employees, technology stacks, and organizational structures. Discover exposed credentials and API keys in public code repositories using tools like GitDorker and TruffleHog. Map organizational hierarchies to identify high-value targets for social engineering campaigns.'
          },
          {
            heading: 'DNS & Infrastructure Enumeration',
            detail: 'Perform comprehensive DNS reconnaissance using tools like dig, dnsenum, fierce, and Amass to discover subdomains, mail servers, and infrastructure details. Identify cloud service providers, CDN configurations, and WAF presence through DNS and HTTP header analysis. Use techniques like DNS zone transfer attempts and brute-force subdomain enumeration to map the complete attack surface.'
          },
          {
            heading: 'Attack Surface Mapping & Documentation',
            detail: 'Synthesize gathered intelligence into comprehensive attack surface maps using tools like Maltego and draw.io. Categorize discovered assets by risk level and potential attack vectors. Create target prioritization matrices based on exposure, business criticality, and likely vulnerability density to guide the testing approach.'
          },
          {
            heading: 'Metadata & Document Intelligence',
            detail: 'Extract metadata from publicly available documents using tools like FOCA and ExifTool to discover usernames, software versions, internal paths, and email addresses. Analyze job postings to identify technologies in use. Map out internal naming conventions and network architecture from leaked or publicly accessible documents.'
          }
        ],
        keyTakeaways: [
          'Conduct thorough passive and active reconnaissance without alerting the target',
          'Use professional OSINT tools to build comprehensive target profiles',
          'Discover hidden subdomains, infrastructure, and exposed services',
          'Create prioritized attack surface maps to guide penetration testing efforts',
          'Extract actionable intelligence from publicly available information'
        ],
        practiceExercises: [
          'Perform a full OSINT assessment on a bug bounty target and document all discovered subdomains, technologies, and potential entry points',
          'Use Amass and Subfinder to enumerate subdomains for a given domain and compare results',
          'Extract metadata from 10 publicly available PDFs from a target organization using ExifTool and FOCA',
          'Build a Maltego graph mapping the infrastructure and relationships for a target organization'
        ],
        resources: [
          { name: 'OSINT Framework', url: 'https://osintframework.com' },
          { name: 'Open Source Intelligence Techniques by Michael Bazzell' },
          { name: 'Amass Project by OWASP', url: 'https://github.com/owasp-amass/amass' }
        ]
      },
      {
        title: 'Scanning & Enumeration',
        duration: '6 hours',
        overview: 'Learn to systematically discover and enumerate live hosts, open ports, running services, and potential vulnerabilities across target networks. This module covers both automated and manual scanning techniques using industry-standard tools, along with strategies for evading detection during the scanning phase.',
        topics: [
          {
            heading: 'Network Discovery & Host Identification',
            detail: 'Use Nmap for comprehensive network discovery including ARP scans, ICMP sweeps, and TCP/UDP port scanning. Understand the differences between SYN, connect, FIN, and XMAS scans and when each is appropriate. Learn to identify live hosts in networks with strict firewall rules using techniques like fragmented packets and decoy scanning.'
          },
          {
            heading: 'Service & Version Enumeration',
            detail: 'Perform detailed service enumeration using Nmap NSE scripts, banner grabbing with Netcat, and protocol-specific tools. Identify exact service versions to map to known CVEs using tools like searchsploit and the NVD database. Enumerate SMB shares with smbclient and enum4linux, SNMP with snmpwalk, and LDAP with ldapsearch to extract valuable information from common enterprise services.'
          },
          {
            heading: 'Vulnerability Scanning',
            detail: 'Configure and run vulnerability scanners including Nessus, OpenVAS, and Nuclei to identify known vulnerabilities across the target environment. Learn to tune scan policies to reduce false positives and prioritize findings by CVSS score and exploitability. Understand the limitations of automated scanners and how to validate findings manually before including them in reports.'
          },
          {
            heading: 'Web Application Scanning',
            detail: 'Use Nikto, Dirb, Gobuster, and ffuf for web server and directory enumeration. Discover hidden endpoints, backup files, and configuration files that may expose sensitive information. Identify web technologies and frameworks using Wappalyzer and WhatWeb to guide further testing efforts against known framework-specific vulnerabilities.'
          },
          {
            heading: 'Evasion & Stealth Techniques',
            detail: 'Learn to perform scanning activities while minimizing detection by IDS/IPS systems and SOC analysts. Use Nmap timing templates, packet fragmentation, and source port manipulation to evade signature-based detection. Understand how to route scans through proxy chains and Tor for anonymization, and leverage IPv6 scanning to find assets that may not be monitored.'
          },
          {
            heading: 'Scan Data Management & Analysis',
            detail: 'Organize and analyze scan results using tools like Faraday, Dradis, or custom scripts to consolidate findings from multiple tools. Import Nmap XML output, Nessus results, and other scan data into a centralized platform. Learn to identify patterns, correlate findings across hosts, and prioritize targets for the exploitation phase based on discovered vulnerabilities and misconfigurations.'
          }
        ],
        keyTakeaways: [
          'Execute comprehensive network and service scans using Nmap and complementary tools',
          'Identify and validate vulnerabilities using both automated scanners and manual techniques',
          'Enumerate services like SMB, SNMP, LDAP, and HTTP for actionable intelligence',
          'Apply evasion techniques to minimize detection during scanning activities',
          'Organize and prioritize scan findings to maximize exploitation success'
        ],
        practiceExercises: [
          'Perform a full Nmap scan of a lab network using SYN, version detection, and NSE scripts, then analyze the XML output',
          'Run Nessus or OpenVAS against Metasploitable 2 and validate the top 5 findings manually',
          'Enumerate SMB shares, SNMP communities, and web directories on a target host using specialized tools'
        ],
        resources: [
          { name: 'Nmap Network Scanning by Gordon Lyon', url: 'https://nmap.org/book/' },
          { name: 'Nmap NSE Script Documentation', url: 'https://nmap.org/nsedoc/' },
          { name: 'Nuclei Project Templates', url: 'https://github.com/projectdiscovery/nuclei-templates' }
        ]
      },
      {
        title: 'Exploitation Techniques',
        duration: '7 hours',
        overview: 'Dive deep into exploitation techniques for networks, services, and operating systems. Students will learn to use Metasploit Framework, manual exploitation methods, and custom exploit modification to gain initial access to target systems. The module emphasizes understanding exploit mechanics rather than simply running automated tools.',
        topics: [
          {
            heading: 'Metasploit Framework Mastery',
            detail: 'Master the Metasploit Framework including msfconsole, module selection, payload configuration, and exploit execution. Learn to use auxiliary modules for information gathering, exploit modules for vulnerability exploitation, and post modules for post-exploitation activities. Configure advanced options including evasion techniques, staged vs stageless payloads, and custom payload encoding with msfvenom.'
          },
          {
            heading: 'Network Service Exploitation',
            detail: 'Exploit common network services including FTP (anonymous access, ProFTPD vulnerabilities), SSH (brute force, key-based attacks), SMB (EternalBlue, relay attacks), and RDP (BlueKeep, brute force). Understand the mechanics behind each exploit and the conditions required for successful exploitation. Learn to chain service misconfigurations for initial access in hardened environments.'
          },
          {
            heading: 'Password Attacks & Credential Exploitation',
            detail: 'Execute sophisticated password attacks using Hydra for online brute-forcing, Hashcat and John the Ripper for offline hash cracking, and CrackMapExec for credential spraying across networks. Understand hash types (NTLM, NTLMv2, Kerberos, bcrypt) and appropriate attack strategies for each. Exploit credential reuse and default credentials to pivot across systems.'
          },
          {
            heading: 'Buffer Overflow & Memory Corruption',
            detail: 'Understand the fundamentals of buffer overflow vulnerabilities including stack-based and heap-based overflows. Walk through the exploitation process: fuzzing with tools like Spike or Boofuzz, finding the offset, identifying bad characters, locating JMP ESP instructions, and generating shellcode. Practice exploiting a vulnerable application step-by-step in a controlled lab environment.'
          },
          {
            heading: 'Client-Side Attacks & Social Engineering',
            detail: 'Craft client-side attacks using malicious documents, HTA files, and macro-enabled Office documents. Use tools like the Social Engineering Toolkit (SET) to create credential harvesting pages and phishing campaigns. Generate payloads with msfvenom disguised as legitimate applications and learn to bypass basic antivirus detection using encoding and packers.'
          },
          {
            heading: 'Exploit Research & Modification',
            detail: 'Search for public exploits using searchsploit, Exploit-DB, and GitHub repositories. Learn to read, understand, and modify existing exploit code to adapt it to specific target configurations. Understand common exploit languages (Python, Ruby, C) and how to troubleshoot failed exploitation attempts by analyzing error messages and adjusting parameters.'
          }
        ],
        keyTakeaways: [
          'Use Metasploit Framework proficiently for various exploitation scenarios',
          'Exploit common network services and misconfigurations for initial access',
          'Execute password attacks using both online and offline techniques',
          'Understand buffer overflow mechanics and exploit development fundamentals',
          'Research, modify, and deploy public exploits against target systems'
        ],
        practiceExercises: [
          'Exploit the vsftpd backdoor and Samba vulnerabilities on Metasploitable 2 using Metasploit and document each step',
          'Perform a stack-based buffer overflow exploitation against a vulnerable application like SLMail or Brainpan',
          'Crack a set of NTLM and SHA-256 hashes using Hashcat with wordlists and rules',
          'Create a malicious payload with msfvenom, set up a handler, and achieve a reverse shell on a test VM'
        ],
        resources: [
          { name: 'Metasploit: The Penetration Tester\'s Guide by David Kennedy et al.' },
          { name: 'Exploit Database', url: 'https://www.exploit-db.com' },
          { name: 'Hacking: The Art of Exploitation by Jon Erickson' }
        ]
      },
      {
        title: 'Post-Exploitation',
        duration: '6 hours',
        overview: 'Learn critical post-exploitation techniques that transform initial access into comprehensive compromise. This module covers maintaining access, lateral movement, data exfiltration, pivoting through networks, and covering tracks—all essential skills for demonstrating the true business impact of vulnerabilities in professional penetration tests.',
        topics: [
          {
            heading: 'Maintaining Access & Persistence',
            detail: 'Establish persistent access using techniques mapped to MITRE ATT&CK Persistence tactics. Create scheduled tasks, registry run keys, WMI event subscriptions on Windows, and cron jobs, systemd services, and SSH authorized_keys on Linux. Deploy Cobalt Strike beacons, Covenant agents, or custom backdoors that survive reboots and maintain command-and-control communications.'
          },
          {
            heading: 'Lateral Movement Techniques',
            detail: 'Move through networks using Pass-the-Hash with Mimikatz and CrackMapExec, PsExec and WMI for remote execution, and RDP hijacking for GUI access. Leverage stolen credentials and tokens to authenticate to additional systems. Use tools like BloodHound to map Active Directory attack paths and identify the shortest route to domain administration.'
          },
          {
            heading: 'Pivoting & Tunneling',
            detail: 'Access isolated network segments through compromised hosts using SSH tunneling (local, remote, dynamic), Chisel for HTTP-based tunneling, and Metasploit autoroute with SOCKS proxies. Configure proxychains to route tools through pivot hosts and establish multi-hop tunnels for deep network penetration. Understand when to use each technique based on firewall rules and network architecture.'
          },
          {
            heading: 'Data Discovery & Exfiltration',
            detail: 'Identify and extract sensitive data including credentials, PII, financial records, and intellectual property. Search file shares, databases, and email stores for high-value data using PowerShell scripts and tools like Snaffler. Exfiltrate data using DNS tunneling with dnscat2, HTTPS channels, or steganography to demonstrate business impact while evading DLP controls.'
          },
          {
            heading: 'Active Directory Exploitation',
            detail: 'Enumerate and attack Active Directory environments using BloodHound for attack path visualization, Rubeus for Kerberos attacks (Kerberoasting, AS-REP Roasting), and PowerView for domain enumeration. Execute DCSync attacks to extract all domain hashes, perform Golden and Silver Ticket attacks, and exploit misconfigured Group Policy Objects and delegation settings.'
          },
          {
            heading: 'Anti-Forensics & Covering Tracks',
            detail: 'Understand techniques used to cover tracks during penetration tests including clearing Windows Event Logs, manipulating timestamps with Timestomp, and removing command history on Linux. Learn about these techniques from both offensive and defensive perspectives to understand what forensic artifacts your activities leave behind and how defenders can detect them.'
          }
        ],
        keyTakeaways: [
          'Establish persistent access that survives reboots and basic remediation attempts',
          'Move laterally through networks using credential-based and exploitation-based techniques',
          'Pivot into isolated network segments using various tunneling methods',
          'Enumerate and attack Active Directory to achieve domain dominance',
          'Understand anti-forensics techniques and their detection from a defensive perspective'
        ],
        practiceExercises: [
          'Use Mimikatz to extract credentials from a compromised Windows host and use Pass-the-Hash to move laterally to another system',
          'Set up an SSH dynamic tunnel through a compromised host and use proxychains to scan an internal network',
          'Run BloodHound against an Active Directory lab and identify the shortest path to Domain Admin',
          'Perform a Kerberoasting attack using Rubeus, extract service ticket hashes, and crack them offline'
        ],
        resources: [
          { name: 'BloodHound Documentation', url: 'https://bloodhound.readthedocs.io' },
          { name: 'Red Team Field Manual (RTFM) by Ben Clark' },
          { name: 'Active Directory Attacks - HackTricks', url: 'https://book.hacktricks.xyz' }
        ]
      },
      {
        title: 'Privilege Escalation',
        duration: '6 hours',
        overview: 'Master privilege escalation techniques on both Windows and Linux operating systems. Students will learn to identify and exploit misconfigurations, vulnerable services, kernel exploits, and design flaws to elevate from standard user to root or SYSTEM-level access using both manual enumeration and automated tools.',
        topics: [
          {
            heading: 'Linux Privilege Escalation Fundamentals',
            detail: 'Systematically enumerate Linux systems for privilege escalation vectors using manual commands and automated tools like LinPEAS, LinEnum, and linux-exploit-suggester. Check for SUID/SGID binaries, writable cron jobs, misconfigured sudo permissions, and sensitive files with improper permissions. Reference GTFOBins for exploiting legitimate binaries with elevated permissions to spawn root shells.'
          },
          {
            heading: 'Windows Privilege Escalation Fundamentals',
            detail: 'Enumerate Windows systems for escalation paths using WinPEAS, PowerUp, and Seatbelt. Identify unquoted service paths, weak service permissions, always install elevated policies, and DLL hijacking opportunities. Exploit token impersonation vulnerabilities using tools like PrintSpoofer, JuicyPotato, and GodPotato to escalate from service accounts to SYSTEM.'
          },
          {
            heading: 'Kernel Exploits & System Vulnerabilities',
            detail: 'Identify and exploit kernel-level vulnerabilities on both Linux (Dirty COW, Dirty Pipe, PwnKit) and Windows (MS16-032, PrintNightmare, HiveNightmare). Use kernel exploit suggesters to match the target OS version and patch level against known vulnerabilities. Understand the risks of kernel exploitation in production environments and how to assess stability before execution.'
          },
          {
            heading: 'Credential Harvesting for Escalation',
            detail: 'Extract credentials stored in memory, configuration files, registries, and databases. Use Mimikatz to dump LSASS process memory for NTLM hashes and Kerberos tickets on Windows. On Linux, search for credentials in bash history, configuration files, SSH keys, and database connection strings. Leverage harvested credentials to access higher-privileged accounts.'
          },
          {
            heading: 'Automated Escalation Frameworks',
            detail: 'Utilize automated privilege escalation frameworks including PEASS-ng suite, BeRoot, and Metasploit local exploit suggester to quickly identify escalation vectors. Understand how these tools work under the hood to interpret their output correctly and avoid false positives. Learn when automated tools are sufficient and when manual enumeration is necessary for complex environments.'
          },
          {
            heading: 'Escalation Through Misconfigurations',
            detail: 'Exploit common misconfigurations including Docker socket exposure for container escapes, NFS no_root_squash for root access, PATH variable injection, and capabilities abuse on Linux. On Windows, exploit Group Policy Preferences (GPP) cached credentials, LAPS misconfigurations, and certificate template vulnerabilities (ESC1-ESC8) using Certify and Certipy for Active Directory Certificate Services attacks.'
          }
        ],
        keyTakeaways: [
          'Systematically enumerate both Linux and Windows systems for privilege escalation vectors',
          'Exploit SUID binaries, service misconfigurations, and token impersonation vulnerabilities',
          'Identify and safely exploit kernel vulnerabilities when other vectors are unavailable',
          'Harvest credentials from memory, files, and configuration stores',
          'Chain multiple low-severity findings into successful privilege escalation paths'
        ],
        practiceExercises: [
          'Use LinPEAS on a vulnerable Linux VM and exploit three different escalation vectors (SUID, cron job, sudo misconfiguration)',
          'Exploit an unquoted service path and a weak service permission on a Windows lab machine to achieve SYSTEM access',
          'Perform token impersonation using PrintSpoofer on a Windows Server with SeImpersonatePrivilege',
          'Find and exploit stored credentials in configuration files and bash history on a CTF-style challenge box'
        ],
        resources: [
          { name: 'GTFOBins - Unix Binaries Privilege Escalation', url: 'https://gtfobins.github.io' },
          { name: 'LOLBAS - Living Off The Land Binaries', url: 'https://lolbas-project.github.io' },
          { name: 'Windows Privilege Escalation by Tib3rius (TryHackMe/Udemy)' }
        ]
      },
      {
        title: 'Web Application Testing',
        duration: '7 hours',
        overview: 'Conduct comprehensive web application penetration tests following the OWASP Testing Guide methodology. This module covers the OWASP Top 10 vulnerabilities in depth, advanced exploitation techniques using Burp Suite Professional, and modern web application attack vectors including API security testing and client-side attacks.',
        topics: [
          {
            heading: 'OWASP Top 10 Deep Dive',
            detail: 'Examine each category of the OWASP Top 10 (2021) in depth: Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Data Integrity Failures, Logging Failures, and SSRF. Understand the root causes, real-world impact, and specific exploitation techniques for each category with hands-on examples using DVWA and WebGoat.'
          },
          {
            heading: 'Burp Suite Professional Mastery',
            detail: 'Master Burp Suite Professional including Proxy for traffic interception, Repeater for request manipulation, Intruder for automated parameter fuzzing, and Scanner for automated vulnerability detection. Configure match-and-replace rules, session handling rules, and custom macros for complex authentication flows. Write custom Burp extensions using the Montoya API for specialized testing scenarios.'
          },
          {
            heading: 'SQL Injection & Advanced Exploitation',
            detail: 'Exploit SQL injection vulnerabilities from basic UNION-based attacks to advanced techniques including blind (boolean and time-based), second-order, and out-of-band injection. Use sqlmap for automated exploitation including database enumeration, data extraction, and OS shell access. Understand WAF bypass techniques including encoding, comment injection, and alternative syntax for different database engines (MySQL, MSSQL, PostgreSQL, Oracle).'
          },
          {
            heading: 'Cross-Site Scripting (XSS) & Client-Side Attacks',
            detail: 'Identify and exploit Reflected, Stored, and DOM-based XSS vulnerabilities. Craft payloads for cookie theft, session hijacking, keylogging, and phishing. Bypass common XSS filters and Content Security Policy (CSP) using techniques like polyglot payloads, dangling markup injection, and mutation XSS. Understand the security implications of modern JavaScript frameworks and how they handle user input.'
          },
          {
            heading: 'API Security Testing',
            detail: 'Test REST and GraphQL APIs for security vulnerabilities including Broken Object Level Authorization (BOLA), Broken Function Level Authorization, mass assignment, and excessive data exposure. Use Postman, Burp Suite, and specialized tools like Arjun for parameter discovery. Test for API-specific vulnerabilities like JWT manipulation (none algorithm, key confusion), OAuth misconfigurations, and rate limiting bypasses.'
          },
          {
            heading: 'Server-Side Vulnerabilities',
            detail: 'Exploit server-side vulnerabilities including Server-Side Request Forgery (SSRF) for cloud metadata access and internal service enumeration, Server-Side Template Injection (SSTI) using tools like tplmap, XML External Entity (XXE) injection for file reading and SSRF, and insecure deserialization in Java (ysoserial) and PHP applications. Chain multiple vulnerabilities to achieve remote code execution.'
          }
        ],
        keyTakeaways: [
          'Test web applications against all OWASP Top 10 vulnerability categories',
          'Use Burp Suite Professional as the primary web application testing platform',
          'Exploit SQL injection, XSS, SSRF, and other web vulnerabilities with advanced techniques',
          'Test modern APIs for authorization flaws, injection, and authentication bypasses',
          'Chain multiple web vulnerabilities to demonstrate maximum business impact'
        ],
        practiceExercises: [
          'Complete the DVWA at all security levels for SQL Injection, XSS, Command Injection, and File Upload vulnerabilities',
          'Use Burp Suite Intruder to brute-force a login form and exploit a discovered SQL injection to extract the database',
          'Exploit an SSRF vulnerability to access AWS metadata service and retrieve IAM credentials in a cloud-hosted lab',
          'Test a deliberately vulnerable API (like crAPI or OWASP Juice Shop) for BOLA and JWT manipulation vulnerabilities'
        ],
        resources: [
          { name: 'OWASP Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
          { name: 'The Web Application Hacker\'s Handbook by Dafydd Stuttard and Marcus Pinto' },
          { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' }
        ]
      },
      {
        title: 'Report Writing',
        duration: '2 hours',
        overview: 'Transform technical findings into professional, actionable penetration testing reports that drive remediation. This module covers report structure, writing for different audiences (technical and executive), risk rating methodologies, and delivering findings effectively to stakeholders.',
        topics: [
          {
            heading: 'Report Structure & Components',
            detail: 'Understand the standard components of a professional penetration test report: executive summary, scope and methodology, risk rating summary, detailed findings with evidence, and remediation recommendations. Learn to structure reports following formats used by major consulting firms and align findings with frameworks like CVSS v3.1 for consistent risk scoring.'
          },
          {
            heading: 'Writing for Multiple Audiences',
            detail: 'Craft executive summaries that communicate business risk without technical jargon, helping C-suite understand the implications and urgency of findings. Write detailed technical sections that give remediation teams specific steps to fix each vulnerability, including code snippets, configuration changes, and architecture recommendations. Balance detail with readability throughout the document.'
          },
          {
            heading: 'Evidence Documentation & Screenshots',
            detail: 'Capture and present evidence effectively using annotated screenshots, request/response pairs from Burp Suite, and command output. Follow best practices for redacting sensitive data while maintaining proof of exploitation. Organize evidence chronologically and link it clearly to specific findings to create an auditable trail of testing activities.'
          },
          {
            heading: 'Risk Rating & Prioritization',
            detail: 'Apply consistent risk ratings using CVSS v3.1 base, temporal, and environmental scores. Factor in business context including data sensitivity, system criticality, and exploitability to create a final risk rating. Present findings in priority order with clear remediation timelines aligned to the organization\'s risk appetite and patch management capabilities.'
          },
          {
            heading: 'Delivering Findings & Stakeholder Management',
            detail: 'Prepare and deliver out-brief presentations that effectively communicate test results to technical and non-technical stakeholders. Handle pushback on findings diplomatically while maintaining the integrity of the assessment. Provide retesting guidance and support remediation efforts with clear, actionable next steps and follow-up testing schedules.'
          }
        ],
        keyTakeaways: [
          'Produce professional penetration testing reports that meet industry standards',
          'Write effective executive summaries that drive remediation investment',
          'Apply consistent risk ratings using CVSS v3.1 and business context',
          'Present findings to diverse stakeholders with clarity and confidence'
        ],
        practiceExercises: [
          'Write a complete penetration test report for a lab exercise including executive summary, 5 detailed findings with evidence, and remediation recommendations',
          'Create an executive presentation summarizing a penetration test engagement for a mock board meeting',
          'Score 5 sample vulnerabilities using CVSS v3.1 calculator and justify environmental score adjustments'
        ],
        resources: [
          { name: 'PTES Reporting Guidelines', url: 'http://www.pentest-standard.org/index.php/Reporting' },
          { name: 'CVSS v3.1 Calculator', url: 'https://www.first.org/cvss/calculator/3.1' },
          { name: 'Writing for Penetration Testers - SANS Reading Room' }
        ]
      }
    ]
  },
  {
    id: 'advanced-ir-forensics',
    tier: 'advanced',
    title: 'Advanced IR & Digital Forensics',
    description: 'An advanced course that builds on incident response foundations to cover sophisticated forensic analysis techniques, advanced malware analysis, and expert-level investigation methodologies. Students will master tools like Volatility, Autopsy, and Wireshark for deep forensic investigations while learning to handle evidence in a legally defensible manner.',
    objectives: [
      'Lead complex incident response engagements using advanced containment and eradication strategies',
      'Perform memory forensics with Volatility to identify malware, rootkits, and attacker artifacts',
      'Conduct disk forensics including file system analysis, data carving, and artifact recovery',
      'Analyze network captures to reconstruct attacker activities and data exfiltration',
      'Perform static and dynamic malware analysis to understand threat capabilities',
      'Build forensic timelines that withstand legal and regulatory scrutiny'
    ],
    estimatedHours: 40,
    prerequisites: ['incident-response', 'threat-intel'],
    modules: [
      {
        title: 'Advanced IR Techniques',
        duration: '5 hours',
        overview: 'Elevate incident response capabilities with advanced techniques for handling sophisticated threats including APT groups, ransomware campaigns, and supply chain attacks. This module covers advanced containment strategies, threat hunting methodologies, and coordinating response across complex enterprise environments.',
        topics: [
          {
            heading: 'Advanced Containment Strategies',
            detail: 'Implement surgical containment measures that isolate threats without disrupting critical business operations. Use network segmentation, DNS sinkholes, and endpoint isolation through EDR platforms like CrowdStrike Falcon and Microsoft Defender for Endpoint. Coordinate containment across hybrid environments spanning on-premise and cloud infrastructure while maintaining forensic evidence integrity.'
          },
          {
            heading: 'APT Incident Response',
            detail: 'Respond to Advanced Persistent Threat intrusions by identifying the full scope of compromise before initiating remediation. Map attacker infrastructure using MITRE ATT&CK framework to understand TTPs and predict next moves. Coordinate simultaneous eradication across all compromised systems to prevent adversary reentry, a technique known as coordinated remediation or "big bang" remediation.'
          },
          {
            heading: 'Ransomware Response Playbooks',
            detail: 'Execute structured ransomware response procedures including immediate network isolation, backup integrity verification, and ransomware variant identification using services like ID Ransomware and No More Ransom. Assess decryption feasibility, coordinate with law enforcement and cyber insurance providers, and manage communications during high-pressure incidents. Document lessons learned for playbook improvement.'
          },
          {
            heading: 'Threat Hunting During Incidents',
            detail: 'Proactively hunt for additional indicators of compromise across the environment during active incidents using YARA rules, Sigma rules, and IOC sweeps through EDR platforms. Leverage threat intelligence to develop hypotheses about attacker behavior and validate them against endpoint telemetry, network logs, and authentication data. Use tools like Velociraptor for enterprise-wide artifact collection.'
          },
          {
            heading: 'Incident Response Automation',
            detail: 'Automate repetitive IR tasks using SOAR platforms like Splunk SOAR, Palo Alto XSOAR, or open-source alternatives like Shuffle. Build playbooks that automatically enrich indicators, isolate endpoints, block malicious IPs, and notify stakeholders. Integrate SOAR with SIEM, EDR, firewalls, and ticketing systems to create an orchestrated response pipeline that reduces mean time to respond (MTTR).'
          }
        ],
        keyTakeaways: [
          'Execute advanced containment strategies for sophisticated threat actors',
          'Respond to APT intrusions with coordinated eradication across the enterprise',
          'Follow structured ransomware response procedures including legal and insurance coordination',
          'Hunt for additional compromise during active incidents using hypothesis-driven approaches',
          'Automate incident response workflows using SOAR platforms'
        ],
        practiceExercises: [
          'Develop and walk through a ransomware response playbook for a simulated attack on a hospital network',
          'Use Velociraptor to collect forensic artifacts from multiple endpoints simultaneously in a lab environment',
          'Create three YARA rules to detect indicators from a recent APT campaign report and sweep a sample dataset'
        ],
        resources: [
          { name: 'NIST SP 800-61 Rev. 2 - Computer Security Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
          { name: 'Intelligence-Driven Incident Response by Scott Roberts and Rebekah Brown' },
          { name: 'Velociraptor - Endpoint Visibility Tool', url: 'https://docs.velociraptor.app' }
        ]
      },
      {
        title: 'Memory Forensics with Volatility',
        duration: '6 hours',
        overview: 'Master memory forensics using the Volatility framework to analyze RAM captures for evidence of malware, rootkits, injected code, and attacker activities. This module covers memory acquisition, analysis techniques for Windows and Linux, and advanced detection of sophisticated in-memory threats that leave no disk artifacts.',
        topics: [
          {
            heading: 'Memory Acquisition Techniques',
            detail: 'Capture volatile memory from live systems using tools like WinPMEM, DumpIt, and FTK Imager for Windows, and LiME (Linux Memory Extractor) for Linux systems. Understand the order of volatility and why memory must be captured before disk imaging. Handle challenges like anti-dumping protections, encrypted memory, and virtual machine memory extraction from VMware VMEM files and Hyper-V BIN files.'
          },
          {
            heading: 'Volatility Framework Fundamentals',
            detail: 'Install and configure Volatility 2 and Volatility 3, understanding the differences between each version. Identify memory profiles using imageinfo and kdbgscan plugins. Navigate the plugin ecosystem for process analysis (pslist, psscan, pstree), network connections (netscan, connections), and registry analysis (hivelist, printkey). Build custom Volatility profiles for non-standard operating systems.'
          },
          {
            heading: 'Process & DLL Analysis',
            detail: 'Analyze running processes using pslist, psscan, and pstree to identify suspicious and hidden processes. Detect process hollowing, process injection, and parent-child relationship anomalies. Dump suspicious processes and DLLs using procdump and dlldump for further analysis. Identify injected code using malfind plugin which detects memory regions with executable permissions and suspicious characteristics.'
          },
          {
            heading: 'Rootkit & Hidden Object Detection',
            detail: 'Detect kernel-level rootkits by comparing process lists from different sources (pslist vs psscan) to find DKOM-hidden processes. Use ssdt plugin to identify hooked system service descriptor table entries. Analyze kernel modules with modscan and compare with modules to find hidden drivers. Detect inline hooks and IAT hooks that rootkits use to intercept system calls and hide their presence.'
          },
          {
            heading: 'Network Artifact Analysis',
            detail: 'Extract network connection data from memory using netscan and connections plugins to identify active and recently closed connections. Recover DNS cache entries, browser history, and cached network credentials from process memory. Correlate network artifacts with process information to attribute network activity to specific malware or attacker tools running in memory.'
          },
          {
            heading: 'Advanced Memory Analysis Techniques',
            detail: 'Extract encryption keys from memory for tools like TrueCrypt, BitLocker, and common malware. Analyze Windows registry hives extracted from memory to recover user activity and system configuration. Use yarascan plugin to sweep memory for specific patterns, indicators of compromise, or malware signatures. Perform timeline analysis of memory artifacts to reconstruct the sequence of attacker activities.'
          }
        ],
        keyTakeaways: [
          'Acquire memory dumps from live Windows and Linux systems using appropriate tools',
          'Analyze memory dumps with Volatility to identify malware and attacker artifacts',
          'Detect advanced threats including rootkits, process injection, and hidden processes',
          'Extract network artifacts, encryption keys, and credentials from memory',
          'Correlate memory forensic findings with disk and network evidence'
        ],
        practiceExercises: [
          'Analyze a provided memory dump to identify a running malware process, extract it, and determine its C2 server address',
          'Use Volatility to detect process injection in a memory sample and dump the injected code for analysis',
          'Create a custom YARA rule and use yarascan to find specific malware indicators across a memory image',
          'Build a timeline of attacker activities from memory artifacts and correlate with network connection data'
        ],
        resources: [
          { name: 'The Art of Memory Forensics by Michael Hale Ligh et al.' },
          { name: 'Volatility 3 Documentation', url: 'https://volatility3.readthedocs.io' },
          { name: 'MemLabs - Memory Forensics CTF Challenges', url: 'https://github.com/stuxnet999/MemLabs' }
        ]
      },
      {
        title: 'Disk Forensics',
        duration: '5 hours',
        overview: 'Learn comprehensive disk forensics techniques to acquire, preserve, and analyze digital evidence from storage media. This module covers forensic imaging, file system analysis, data recovery and carving, artifact analysis across Windows and Linux systems, and anti-forensics detection.',
        topics: [
          {
            heading: 'Forensic Imaging & Evidence Preservation',
            detail: 'Create forensically sound disk images using dd, dc3dd, and FTK Imager while maintaining chain of custody documentation. Understand write blockers (hardware and software) and their role in evidence integrity. Generate and verify hash values (MD5, SHA-256) for evidence integrity validation. Work with different image formats including raw (dd), E01 (EnCase), and AFF4, understanding the advantages of each.'
          },
          {
            heading: 'File System Analysis',
            detail: 'Analyze NTFS, FAT32, ext4, and APFS file systems using Autopsy, The Sleuth Kit, and FTK. Understand Master File Table (MFT) entries, alternate data streams in NTFS, and inode structures in ext4. Recover deleted files by analyzing file system metadata, unallocated space, and journal entries. Identify timestamp manipulation (timestomping) by comparing $STANDARD_INFORMATION and $FILE_NAME timestamps in NTFS.'
          },
          {
            heading: 'Windows Artifact Analysis',
            detail: 'Extract and analyze critical Windows forensic artifacts including registry hives (SAM, SYSTEM, SOFTWARE, NTUSER.DAT), Prefetch files for program execution evidence, Amcache for application installation history, and ShimCache for additional execution artifacts. Parse Windows Event Logs using tools like EvtxECmd and analyze LNK files, Jump Lists, and Shellbags for user activity reconstruction.'
          },
          {
            heading: 'Data Carving & Recovery',
            detail: 'Recover deleted and fragmented files from unallocated disk space using Foremost, Scalpel, and PhotoRec based on file signatures and headers. Understand file carving limitations and how fragmentation affects recovery success. Extract embedded files from compound documents and container formats. Use bulk_extractor for automated extraction of email addresses, URLs, credit card numbers, and other structured data from disk images.'
          },
          {
            heading: 'Anti-Forensics Detection',
            detail: 'Identify and overcome anti-forensics techniques including secure deletion (with tools like BleachBit and sdelete), timestamp manipulation, steganography, encryption, and log wiping. Detect evidence of anti-forensics tool usage by analyzing program execution artifacts, file system artifacts, and residual data in slack space. Understand the limitations of anti-forensics and the artifacts that typically survive even sophisticated wiping attempts.'
          }
        ],
        keyTakeaways: [
          'Create forensically sound disk images that maintain evidentiary integrity',
          'Analyze file systems to recover deleted files and identify suspicious activity',
          'Extract and interpret critical Windows and Linux forensic artifacts',
          'Perform data carving to recover files from unallocated space',
          'Detect and overcome common anti-forensics techniques'
        ],
        practiceExercises: [
          'Create a forensic image of a USB drive using dc3dd, verify integrity with SHA-256, and analyze it with Autopsy',
          'Parse NTFS MFT entries to identify timestomping on a forensic image and document the evidence',
          'Use Foremost and bulk_extractor on an unallocated space dump to recover deleted files and extract structured data',
          'Analyze Windows registry hives and Prefetch files to build a timeline of program execution on a forensic image'
        ],
        resources: [
          { name: 'File System Forensic Analysis by Brian Carrier' },
          { name: 'Autopsy Digital Forensics Platform', url: 'https://www.autopsy.com' },
          { name: 'SANS DFIR Artifact Poster', url: 'https://www.sans.org/posters/windows-forensic-analysis/' }
        ]
      },
      {
        title: 'Network Forensics',
        duration: '5 hours',
        overview: 'Analyze network traffic captures to reconstruct attacker activities, identify data exfiltration, and extract indicators of compromise. This module covers packet-level analysis with Wireshark, flow-based analysis, protocol-specific investigation techniques, and network evidence correlation with other forensic data sources.',
        topics: [
          {
            heading: 'Packet Capture & Analysis with Wireshark',
            detail: 'Master Wireshark for deep packet inspection including display filters, protocol dissectors, and stream following for TCP, UDP, and HTTP sessions. Analyze full packet captures (PCAP/PCAPNG) to reconstruct communications between attacker and victim systems. Use tshark for command-line analysis and automated extraction of specific fields from large capture files. Apply Wireshark profiles customized for incident investigation workflows.'
          },
          {
            heading: 'Network Flow Analysis',
            detail: 'Analyze NetFlow, sFlow, and IPFIX data to identify anomalous traffic patterns across large networks where full packet capture is impractical. Use tools like nfdump, SiLK, and ntopng to process flow records and identify beaconing behavior, unusual data transfers, and lateral movement. Create baselines of normal network behavior to detect deviations indicative of compromise.'
          },
          {
            heading: 'Protocol-Specific Analysis',
            detail: 'Investigate specific protocols commonly abused by attackers: DNS tunneling detection by analyzing query patterns, payload sizes, and entropy; HTTP/HTTPS analysis including SSL/TLS certificate inspection; SMB traffic for lateral movement evidence; and email protocols (SMTP, IMAP) for phishing campaign reconstruction. Use protocol-specific decoders and scripts to extract embedded data from tunneled communications.'
          },
          {
            heading: 'Encrypted Traffic Analysis',
            detail: 'Analyze encrypted traffic without decryption using JA3/JA3S fingerprinting to identify known malware SSL/TLS client and server configurations. Detect encrypted C2 channels through traffic pattern analysis including packet sizes, timing intervals, and connection frequency. Use SSLKEYLOGFILE and PMS (Pre-Master Secret) files to decrypt TLS traffic when keys are available for detailed payload inspection.'
          },
          {
            heading: 'Evidence Extraction & Reconstruction',
            detail: 'Extract files, images, and documents from network captures using Wireshark export objects feature, NetworkMiner, and custom scripts. Reconstruct web browsing sessions, email communications, and file transfers from packet captures. Carve files from raw network streams and verify integrity against known hashes. Document network evidence in a format suitable for legal proceedings and incident reports.'
          },
          {
            heading: 'Intrusion Detection & IDS Analysis',
            detail: 'Analyze Snort and Suricata IDS/IPS alerts in the context of forensic investigations. Write custom Snort rules to detect specific attack patterns observed during the investigation. Correlate IDS alerts with packet captures and system logs to build a comprehensive attack narrative. Use Zeek (formerly Bro) connection logs, DNS logs, and HTTP logs for retrospective network analysis.'
          }
        ],
        keyTakeaways: [
          'Perform deep packet analysis with Wireshark to reconstruct attacker communications',
          'Detect DNS tunneling, C2 beaconing, and lateral movement through network traffic analysis',
          'Analyze encrypted traffic using fingerprinting and behavioral analysis techniques',
          'Extract files and reconstruct sessions from packet captures as forensic evidence',
          'Correlate network forensic findings with endpoint and log-based evidence'
        ],
        practiceExercises: [
          'Analyze a PCAP file containing a simulated intrusion to identify the initial compromise, lateral movement, and data exfiltration',
          'Detect DNS tunneling in a provided packet capture by analyzing query patterns and extract the tunneled data',
          'Use Zeek to process a large PCAP file and identify all unique JA3 hashes, then check them against known malware databases',
          'Extract transferred files from an HTTP-based packet capture using Wireshark and NetworkMiner, then hash and analyze them'
        ],
        resources: [
          { name: 'Network Forensics: Tracking Hackers through Cyberspace by Sherri Davidoff and Jonathan Ham' },
          { name: 'Wireshark Documentation', url: 'https://www.wireshark.org/docs/' },
          { name: 'Zeek Network Security Monitor', url: 'https://zeek.org' }
        ]
      },
      {
        title: 'Malware Analysis',
        duration: '6 hours',
        overview: 'Develop essential malware analysis skills covering both static and dynamic analysis techniques. Students will learn to safely handle malware samples, perform triage analysis for rapid classification, conduct in-depth static analysis using disassemblers, and observe malware behavior in controlled sandbox environments.',
        topics: [
          {
            heading: 'Malware Analysis Lab Setup',
            detail: 'Build a safe malware analysis environment using isolated virtual machines with tools like FlareVM for Windows analysis and REMnux for Linux-based tooling. Configure network isolation using INetSim and FakeNet-NG to simulate internet services and capture malware communications without allowing real C2 connectivity. Establish proper snapshot management and evidence handling procedures for analysis workflows.'
          },
          {
            heading: 'Static Analysis Fundamentals',
            detail: 'Perform initial triage using file identification tools (file, TrID), hash analysis (ssdeep for fuzzy hashing, VirusTotal lookups), and string extraction with FLOSS (FLARE Obfuscated String Solver). Analyze PE file structure using pestudio, PE-bear, and CFF Explorer to identify imports, exports, sections, and suspicious characteristics. Examine embedded resources, certificates, and compilation timestamps for attribution clues.'
          },
          {
            heading: 'Dynamic Analysis & Sandboxing',
            detail: 'Execute malware in controlled environments while monitoring behavior using Process Monitor, Process Explorer, and Regshot for system changes. Capture network communications with Wireshark and FakeNet-NG. Use automated sandboxes like Cuckoo Sandbox and ANY.RUN for initial behavioral analysis. Document all observed behaviors including file system modifications, registry changes, network connections, and process creation.'
          },
          {
            heading: 'Disassembly & Reverse Engineering',
            detail: 'Use Ghidra and IDA Free/Pro for disassembly and decompilation of malware samples. Identify key functions including anti-analysis checks (VM detection, debugger detection), persistence mechanisms, encryption routines, and C2 communication protocols. Understand x86/x64 assembly fundamentals necessary for malware reverse engineering including common calling conventions, stack operations, and control flow structures.'
          },
          {
            heading: 'Behavioral Indicators & YARA Rules',
            detail: 'Extract indicators of compromise (IOCs) from analyzed malware samples including file hashes, network indicators, mutexes, registry keys, and file paths. Write YARA rules based on unique strings, byte patterns, and structural characteristics to detect malware variants across the organization. Map observed behaviors to MITRE ATT&CK techniques and generate threat intelligence reports for the SOC team.'
          },
          {
            heading: 'Packing, Obfuscation & Evasion Analysis',
            detail: 'Identify and handle packed malware using tools like Detect It Easy (DIE), PEiD, and UPX. Understand common packing techniques and manual unpacking approaches using x64dbg debugger. Analyze obfuscated scripts (PowerShell, JavaScript, VBScript) by deobfuscating layer by layer. Recognize anti-analysis techniques including timing checks, sandbox detection, and environment keying that malware uses to evade analysis.'
          }
        ],
        keyTakeaways: [
          'Set up and maintain a safe malware analysis laboratory environment',
          'Perform static and dynamic analysis to understand malware capabilities and intent',
          'Use Ghidra for disassembly and reverse engineering of malicious binaries',
          'Extract IOCs and write YARA rules for organizational malware detection',
          'Handle packed and obfuscated malware using appropriate unpacking techniques'
        ],
        practiceExercises: [
          'Analyze a malware sample using static analysis tools to identify suspicious imports, strings, and PE characteristics before execution',
          'Execute a malware sample in a FlareVM sandbox while monitoring with ProcMon and Wireshark, documenting all observed behaviors',
          'Use Ghidra to reverse engineer a simple keylogger or RAT and identify its C2 communication protocol',
          'Write three YARA rules based on analyzed samples and test them against a sample repository'
        ],
        resources: [
          { name: 'Practical Malware Analysis by Michael Sikorski and Andrew Honig' },
          { name: 'Ghidra Software Reverse Engineering Framework', url: 'https://ghidra-sre.org' },
          { name: 'FlareVM - Windows Malware Analysis Distribution', url: 'https://github.com/mandiant/flare-vm' }
        ]
      },
      {
        title: 'Timeline Analysis',
        duration: '4 hours',
        overview: 'Build comprehensive forensic timelines that reconstruct the sequence of events during a security incident. This module covers timeline creation from multiple data sources, super timeline generation using tools like Plaso/log2timeline, and analysis techniques for identifying attacker activities within potentially millions of timestamped events.',
        topics: [
          {
            heading: 'Timeline Theory & Methodology',
            detail: 'Understand the principles of forensic timeline analysis including timestamp types (MACB: Modified, Accessed, Changed, Birth), time zone considerations, and clock skew challenges across distributed systems. Learn timeline analysis methodologies that start with known-bad indicators and pivot outward to discover the full scope of an incident. Understand how different artifact sources contribute complementary timestamp information.'
          },
          {
            heading: 'Super Timeline Creation with Plaso',
            detail: 'Use log2timeline (Plaso) to create comprehensive super timelines that aggregate timestamps from file systems, registry hives, event logs, browser history, Prefetch files, and dozens of other artifact sources. Configure Plaso parsers and filters for different investigation scenarios. Process timeline output with psort and convert to formats suitable for analysis including CSV, Elasticsearch, and timeline explorer formats.'
          },
          {
            heading: 'Timeline Analysis with Timeline Explorer',
            detail: 'Analyze super timelines using Eric Zimmerman\'s Timeline Explorer for efficient filtering, searching, and visualization of timeline data. Apply color coding and bookmarking to highlight significant events. Use advanced filtering techniques to focus on specific time windows, file paths, and event types. Export curated timeline segments for inclusion in forensic reports and legal exhibits.'
          },
          {
            heading: 'Pivot Point Analysis',
            detail: 'Identify key pivot points in timelines that reveal attacker activities: initial access timestamps, first execution of malicious tools, lateral movement events, and data staging and exfiltration windows. Use known indicators from threat intelligence to anchor timeline analysis and discover previously unknown attacker activities. Build comprehensive attack narratives from timestamped evidence that can withstand legal scrutiny.'
          },
          {
            heading: 'Multi-Source Timeline Correlation',
            detail: 'Correlate timestamps across multiple evidence sources including endpoint forensic images, network logs, SIEM events, cloud audit logs, and physical access records. Handle time synchronization challenges including NTP drift, virtual machine clock skew, and time zone discrepancies. Build unified timelines that combine evidence from diverse sources into a coherent incident narrative using tools like Timesketch.'
          }
        ],
        keyTakeaways: [
          'Create comprehensive forensic timelines using Plaso/log2timeline',
          'Analyze large timelines efficiently using Timeline Explorer and filtering techniques',
          'Identify pivot points and reconstruct attack narratives from timestamped evidence',
          'Correlate timestamps across multiple evidence sources and handle time synchronization issues',
          'Present timeline evidence in formats suitable for legal proceedings'
        ],
        practiceExercises: [
          'Generate a super timeline from a forensic disk image using log2timeline and analyze it with Timeline Explorer to reconstruct user activity',
          'Identify the initial compromise and subsequent lateral movement in a timeline containing over 100,000 events',
          'Correlate endpoint timeline data with provided network logs to build a unified incident narrative'
        ],
        resources: [
          { name: 'Plaso (log2timeline) Documentation', url: 'https://plaso.readthedocs.io' },
          { name: 'Timeline Explorer by Eric Zimmerman', url: 'https://ericzimmerman.github.io' },
          { name: 'Timesketch - Collaborative Forensic Timeline Analysis', url: 'https://timesketch.org' }
        ]
      },
      {
        title: 'Legal & Compliance Considerations',
        duration: '4 hours',
        overview: 'Navigate the legal and regulatory landscape surrounding digital forensics and incident response. This module covers evidence handling procedures, chain of custody requirements, privacy regulations, mandatory breach notification obligations, and working with law enforcement during cybersecurity incidents.',
        topics: [
          {
            heading: 'Chain of Custody & Evidence Handling',
            detail: 'Establish and maintain proper chain of custody documentation for all digital evidence throughout an investigation. Understand the legal standards for evidence admissibility including the Daubert standard and Federal Rules of Evidence. Implement evidence handling procedures including secure storage, access logging, and integrity verification using cryptographic hashing at every transfer point.'
          },
          {
            heading: 'Privacy Regulations & Investigation Constraints',
            detail: 'Navigate privacy regulations that impact forensic investigations including GDPR requirements for data handling in EU-related incidents, CCPA/CPRA obligations, HIPAA for healthcare data, and PCI DSS for payment card environments. Understand when forensic activities may conflict with privacy requirements and how to balance investigative needs with data protection obligations through legal counsel coordination.'
          },
          {
            heading: 'Breach Notification Requirements',
            detail: 'Understand mandatory breach notification timelines and requirements across jurisdictions including GDPR (72-hour notification to DPA), US state-specific notification laws, and sector-specific requirements like HIPAA (60-day notification). Coordinate with legal counsel to determine notification obligations, prepare notification content, and manage regulatory communications during and after an incident.'
          },
          {
            heading: 'Law Enforcement Coordination',
            detail: 'Establish relationships with law enforcement agencies (FBI, Secret Service, IC3) before incidents occur. Understand when and how to involve law enforcement, what information to share, and how to protect organizational interests during criminal investigations. Navigate mutual legal assistance treaties (MLATs) for cross-border incidents and understand the implications of law enforcement involvement on civil litigation.'
          },
          {
            heading: 'Documentation & Reporting Standards',
            detail: 'Create forensic reports that meet legal standards for clarity, completeness, and objectivity. Document all investigative steps, tools used, and findings in a manner that can be independently verified and reproduced. Understand the differences between internal investigation reports, regulatory submissions, and expert witness reports. Maintain investigative notes that can withstand discovery in litigation.'
          }
        ],
        keyTakeaways: [
          'Maintain legally defensible chain of custody for all digital evidence',
          'Navigate privacy regulations that constrain forensic investigation activities',
          'Understand breach notification obligations across different jurisdictions and sectors',
          'Coordinate effectively with law enforcement during cybersecurity incidents',
          'Produce forensic documentation that meets legal standards for admissibility'
        ],
        practiceExercises: [
          'Create a complete chain of custody form and evidence log for a simulated incident involving multiple evidence sources',
          'Draft a GDPR-compliant breach notification for a simulated data breach affecting EU data subjects',
          'Review a sample forensic report and identify areas that would not meet legal standards for admissibility'
        ],
        resources: [
          { name: 'NIST SP 800-86 - Guide to Integrating Forensic Techniques into Incident Response', url: 'https://csrc.nist.gov/publications/detail/sp/800-86/final' },
          { name: 'GDPR Text - Article 33: Notification to Supervisory Authority', url: 'https://gdpr-info.eu/art-33-gdpr/' },
          { name: 'Digital Evidence and Computer Crime by Eoghan Casey' }
        ]
      },
      {
        title: 'Expert Witness Preparation',
        duration: '5 hours',
        overview: 'Prepare to serve as an expert witness in legal proceedings involving digital forensics evidence. This module covers the qualifications and responsibilities of expert witnesses, testimony preparation, courtroom procedures, and techniques for presenting complex technical findings to judges and juries in an understandable manner.',
        topics: [
          {
            heading: 'Expert Witness Qualifications & Standards',
            detail: 'Understand the requirements for qualifying as a digital forensics expert witness under Daubert and Frye standards. Build and maintain a professional CV that demonstrates relevant education, certifications (GCFE, EnCE, CCE), training, and experience. Learn how opposing counsel challenges expert qualifications through voir dire and prepare to defend your expertise before the court.'
          },
          {
            heading: 'Report Preparation for Legal Proceedings',
            detail: 'Write forensic expert reports that clearly present methodology, findings, and conclusions in language accessible to legal professionals and lay jurors. Structure reports to withstand adversarial scrutiny by documenting every analytical step, tool used, and assumption made. Include appropriate caveats and limitations while maintaining clear, defensible conclusions supported by evidence.'
          },
          {
            heading: 'Deposition & Testimony Techniques',
            detail: 'Prepare for deposition and trial testimony by understanding the question-and-answer format, rules of evidence, and common objection types. Practice techniques for explaining complex technical concepts using analogies and visual aids that resonate with non-technical audiences. Learn to maintain composure under aggressive cross-examination and respond to hypothetical questions without overstepping your expertise.'
          },
          {
            heading: 'Cross-Examination Preparation',
            detail: 'Anticipate and prepare for common cross-examination strategies used by opposing counsel including challenging tool reliability, questioning methodology choices, highlighting alternative interpretations of evidence, and attempting to impeach credibility. Practice responding to gotcha questions, maintaining consistency between report contents and testimony, and handling questions designed to elicit speculation beyond the evidence.'
          },
          {
            heading: 'Presenting Technical Evidence to Non-Technical Audiences',
            detail: 'Develop skills for translating complex digital forensics concepts into clear, compelling presentations for judges and juries. Create effective demonstrative exhibits including timelines, diagrams, and simplified screenshots that illustrate key findings. Use storytelling techniques to build coherent narratives from technical evidence while maintaining scientific objectivity and avoiding advocacy beyond your expert role.'
          },
          {
            heading: 'Ethics & Professional Responsibilities',
            detail: 'Understand the ethical obligations of expert witnesses including objectivity, honesty, and impartiality regardless of which party retained you. Navigate conflicts of interest, scope limitations, and the boundary between expert testimony and advocacy. Follow professional codes of conduct from organizations like IACIS, ISFCE, and AAFS. Understand the consequences of bias, misrepresentation, or overstatement in expert testimony.'
          }
        ],
        keyTakeaways: [
          'Qualify as a digital forensics expert witness under applicable legal standards',
          'Prepare forensic reports that withstand adversarial scrutiny in legal proceedings',
          'Deliver clear, credible testimony during depositions and trial proceedings',
          'Handle cross-examination techniques used by opposing counsel with composure',
          'Present complex technical findings in ways non-technical audiences can understand'
        ],
        practiceExercises: [
          'Prepare an expert witness CV and practice responding to voir dire qualification questions',
          'Write a mock expert report for a simulated data breach case and present findings in a simulated deposition',
          'Practice cross-examination responses with a partner playing the role of opposing counsel challenging your methodology and conclusions',
          'Create demonstrative exhibits that explain a complex forensic finding (e.g., timeline of a network intrusion) for a lay audience'
        ],
        resources: [
          { name: 'The Expert Witness in Digital Forensics - SANS Reading Room' },
          { name: 'Digital Forensics with Kali Linux by Shiva V. N. Parasram' },
          { name: 'Federal Rules of Evidence - Article VII: Opinions and Expert Testimony', url: 'https://www.law.cornell.edu/rules/fre' }
        ]
      }
    ]
  },
  {
    id: 'cloud-security-arch',
    tier: 'advanced',
    title: 'Cloud Security Architecture',
    description: 'Design and implement secure cloud architectures across major cloud service providers. This course covers security architecture principles, Zero Trust implementation, Infrastructure as Code security, container and Kubernetes hardening, DevSecOps practices, multi-cloud security strategies, and security automation at scale.',
    objectives: [
      'Design secure cloud architectures following industry frameworks and best practices',
      'Implement Zero Trust Architecture principles across cloud environments',
      'Secure Infrastructure as Code pipelines and detect misconfigurations before deployment',
      'Harden container and Kubernetes environments against common attack vectors',
      'Integrate security into CI/CD pipelines following DevSecOps principles',
      'Develop automated security controls for multi-cloud environments'
    ],
    estimatedHours: 35,
    prerequisites: ['cloud-security-basics'],
    modules: [
      {
        title: 'Security Architecture Principles',
        duration: '5 hours',
        overview: 'Establish foundational security architecture principles for cloud environments including defense in depth, least privilege, shared responsibility models, and threat modeling. This module bridges traditional security architecture with cloud-native design patterns to create resilient, secure systems.',
        topics: [
          {
            heading: 'Cloud Security Reference Architectures',
            detail: 'Study established cloud security reference architectures from CSA (Cloud Security Alliance), NIST SP 800-210, and cloud provider-specific frameworks like AWS Well-Architected Security Pillar, Azure Security Benchmark, and Google Cloud Security Foundations Blueprint. Understand how these frameworks organize security controls across identity, network, data, and application layers and how to adapt them to organizational requirements.'
          },
          {
            heading: 'Shared Responsibility Model Deep Dive',
            detail: 'Analyze the shared responsibility model across IaaS, PaaS, SaaS, and serverless deployment models for AWS, Azure, and GCP. Identify specific security responsibilities that shift between provider and customer at each service level. Map organizational security controls to the appropriate layer and identify gaps where neither the provider nor the customer has adequate controls in place.'
          },
          {
            heading: 'Threat Modeling for Cloud Architectures',
            detail: 'Apply STRIDE and PASTA threat modeling methodologies to cloud architectures to identify threats before they are exploited. Model threats specific to cloud environments including insecure APIs, misconfigured storage, identity federation weaknesses, and cross-tenant vulnerabilities. Use tools like Microsoft Threat Modeling Tool and OWASP Threat Dragon to create visual threat models and prioritize security investments.'
          },
          {
            heading: 'Defense in Depth for Cloud',
            detail: 'Implement layered security controls across cloud environments including network segmentation with VPCs and security groups, identity-based access controls with IAM policies, data protection with encryption at rest and in transit using KMS services, and application-layer protections with WAFs and API gateways. Design architectures where the failure of any single control does not result in complete compromise.'
          },
          {
            heading: 'Security Architecture Documentation',
            detail: 'Create comprehensive security architecture documentation including architecture decision records (ADRs), security control matrices, data flow diagrams, and network diagrams using tools like draw.io, Lucidchart, and Diagrams-as-Code libraries. Develop security architecture review processes that integrate with cloud governance programs and change management workflows.'
          }
        ],
        keyTakeaways: [
          'Apply cloud security reference architectures to organizational environments',
          'Map security responsibilities accurately across the shared responsibility model',
          'Perform threat modeling specific to cloud architectures and deployment patterns',
          'Design defense-in-depth strategies across all layers of cloud infrastructure',
          'Document security architecture decisions in a structured, reviewable format'
        ],
        practiceExercises: [
          'Perform a STRIDE threat model on a sample three-tier web application deployed on AWS and document identified threats with mitigations',
          'Map security responsibilities for a hybrid deployment spanning IaaS VMs, managed databases (PaaS), and SaaS applications',
          'Design a defense-in-depth architecture diagram for a healthcare application handling PHI in a cloud environment'
        ],
        resources: [
          { name: 'AWS Well-Architected Framework - Security Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/' },
          { name: 'NIST SP 800-210 - General Access Control Guidance for Cloud Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-210/final' },
          { name: 'Cloud Security Alliance - Security Guidance v4.0', url: 'https://cloudsecurityalliance.org/research/guidance/' }
        ]
      },
      {
        title: 'Zero Trust Architecture',
        duration: '5 hours',
        overview: 'Implement Zero Trust Architecture (ZTA) principles across cloud environments, moving beyond perimeter-based security to continuous verification of every user, device, and workload. This module covers ZTA frameworks, identity-centric security, micro-segmentation, and continuous adaptive trust evaluation.',
        topics: [
          {
            heading: 'Zero Trust Principles & Frameworks',
            detail: 'Understand the core principles of Zero Trust: never trust, always verify; assume breach; and verify explicitly with least privilege access. Study NIST SP 800-207 Zero Trust Architecture and the CISA Zero Trust Maturity Model. Map your organization\'s current security posture against ZTA maturity levels and develop a phased implementation roadmap that delivers incremental security improvements.'
          },
          {
            heading: 'Identity-Centric Security',
            detail: 'Implement identity as the new security perimeter using cloud IAM services, multi-factor authentication, conditional access policies, and identity governance. Deploy solutions like Azure AD Conditional Access, AWS IAM Identity Center, or Okta for centralized identity management. Implement just-in-time (JIT) and just-enough-access (JEA) principles to minimize standing privileges and reduce blast radius of credential compromise.'
          },
          {
            heading: 'Micro-Segmentation & Network Controls',
            detail: 'Replace traditional network perimeters with micro-segmentation using cloud-native security groups, network policies, and service mesh technologies like Istio. Implement identity-aware proxies (Google BeyondCorp, Azure AD Application Proxy) to provide zero trust network access (ZTNA) that replaces traditional VPNs. Design network architectures where workloads authenticate and authorize every connection regardless of network location.'
          },
          {
            heading: 'Continuous Verification & Adaptive Access',
            detail: 'Implement continuous trust evaluation using device health attestation, user behavior analytics (UBA), and risk-based authentication. Configure adaptive access policies that adjust permissions based on real-time risk signals including device compliance, location anomalies, and session risk scores. Integrate SIEM and UEBA platforms to feed risk signals into access control decisions for dynamic policy enforcement.'
          },
          {
            heading: 'Data-Centric Security in Zero Trust',
            detail: 'Apply Zero Trust principles to data protection through classification, labeling, and policy-based access controls using tools like Microsoft Purview, AWS Macie, and Google DLP. Implement data loss prevention (DLP) policies that enforce access based on data sensitivity and user context. Encrypt data with customer-managed keys and implement key management policies that ensure cryptographic controls align with Zero Trust principles.'
          }
        ],
        keyTakeaways: [
          'Design and implement Zero Trust Architecture following NIST SP 800-207 guidelines',
          'Deploy identity-centric security with conditional access and least privilege principles',
          'Implement micro-segmentation and ZTNA to replace perimeter-based network security',
          'Configure continuous verification and adaptive access based on real-time risk signals',
          'Apply Zero Trust principles to data protection and classification'
        ],
        practiceExercises: [
          'Design a Zero Trust architecture for a remote workforce accessing cloud-hosted applications and document the implementation plan',
          'Configure Azure AD Conditional Access or AWS IAM policies implementing JIT access for administrative operations',
          'Implement micro-segmentation for a three-tier application using cloud-native security groups and document the policy matrix'
        ],
        resources: [
          { name: 'NIST SP 800-207 - Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' },
          { name: 'CISA Zero Trust Maturity Model', url: 'https://www.cisa.gov/zero-trust-maturity-model' },
          { name: 'Google BeyondCorp Papers', url: 'https://cloud.google.com/beyondcorp' }
        ]
      },
      {
        title: 'Infrastructure as Code Security',
        duration: '5 hours',
        overview: 'Secure Infrastructure as Code (IaC) pipelines to prevent misconfigurations from reaching production environments. This module covers static analysis of Terraform, CloudFormation, and ARM templates, policy-as-code frameworks, and integration of security scanning into CI/CD pipelines for shift-left security.',
        topics: [
          {
            heading: 'IaC Security Fundamentals',
            detail: 'Understand common security misconfigurations in IaC templates including overly permissive IAM policies, unencrypted storage, publicly exposed resources, and missing logging configurations. Review real-world breaches caused by IaC misconfigurations such as open S3 buckets and over-privileged Lambda functions. Establish IaC security baselines aligned with CIS Benchmarks for AWS, Azure, and GCP.'
          },
          {
            heading: 'Static Analysis Tools',
            detail: 'Scan IaC templates for security issues using tools like Checkov, tfsec, KICS, and Terrascan before deployment. Configure custom rules and policies tailored to organizational security requirements. Understand the strengths and limitations of each tool and how to reduce false positives through policy tuning. Integrate scan results into developer workflows through IDE plugins and pre-commit hooks for immediate feedback.'
          },
          {
            heading: 'Policy as Code with OPA & Sentinel',
            detail: 'Implement policy-as-code using Open Policy Agent (OPA) with Rego language and HashiCorp Sentinel for Terraform Enterprise. Write policies that enforce security requirements including mandatory encryption, network access restrictions, tagging compliance, and resource naming conventions. Deploy policy guardrails that prevent non-compliant infrastructure from being provisioned while allowing developers flexibility within defined boundaries.'
          },
          {
            heading: 'Secrets Management in IaC',
            detail: 'Prevent secrets from being embedded in IaC templates and version control systems. Integrate HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, and GCP Secret Manager into IaC workflows for dynamic secret injection. Use tools like git-secrets, TruffleHog, and Gitleaks to detect accidentally committed secrets in repositories. Implement secret rotation policies and audit access to sensitive configuration data.'
          },
          {
            heading: 'Drift Detection & Compliance Monitoring',
            detail: 'Detect configuration drift between deployed infrastructure and IaC definitions using tools like Terraform plan, AWS Config, and Fugue. Implement continuous compliance monitoring that alerts when deployed resources deviate from their defined secure state. Establish remediation workflows that either automatically correct drift or create tickets for manual review, ensuring infrastructure remains in its approved configuration.'
          }
        ],
        keyTakeaways: [
          'Identify and prevent common IaC security misconfigurations before deployment',
          'Integrate IaC scanning tools into CI/CD pipelines for automated security validation',
          'Implement policy-as-code frameworks to enforce security guardrails at scale',
          'Manage secrets securely within IaC workflows using vault services',
          'Detect and remediate configuration drift to maintain continuous compliance'
        ],
        practiceExercises: [
          'Scan a set of intentionally misconfigured Terraform templates using Checkov and tfsec, then fix all identified issues',
          'Write OPA Rego policies that enforce mandatory encryption and restricted network access for cloud resources',
          'Set up a CI/CD pipeline that runs IaC security scanning and blocks deployment of non-compliant infrastructure'
        ],
        resources: [
          { name: 'Checkov - IaC Static Analysis', url: 'https://www.checkov.io' },
          { name: 'Open Policy Agent Documentation', url: 'https://www.openpolicyagent.org/docs/' },
          { name: 'HashiCorp Vault Documentation', url: 'https://developer.hashicorp.com/vault/docs' }
        ]
      },
      {
        title: 'Container & Kubernetes Security',
        duration: '5 hours',
        overview: 'Secure containerized applications and Kubernetes orchestration platforms against modern attack vectors. This module covers container image security, runtime protection, Kubernetes cluster hardening, network policies, RBAC configuration, and security monitoring for containerized workloads.',
        topics: [
          {
            heading: 'Container Image Security',
            detail: 'Build secure container images using minimal base images (distroless, Alpine), multi-stage builds to reduce attack surface, and non-root user execution. Scan images for known vulnerabilities using Trivy, Grype, and Snyk Container. Implement image signing and verification with Cosign and Notary to ensure only trusted images are deployed. Configure container registries with access controls and vulnerability scanning policies.'
          },
          {
            heading: 'Kubernetes Cluster Hardening',
            detail: 'Harden Kubernetes clusters following CIS Kubernetes Benchmark recommendations. Secure the API server with authentication (OIDC, client certificates), authorization (RBAC), and admission controllers. Disable unnecessary features, restrict kubelet access, enable audit logging, and encrypt etcd data at rest. Use tools like kube-bench to assess cluster security posture and identify configuration weaknesses.'
          },
          {
            heading: 'RBAC & Access Control',
            detail: 'Design and implement Kubernetes RBAC policies that enforce least privilege access for users, service accounts, and workloads. Create role hierarchies using Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings. Audit RBAC configurations using tools like rakkess and kubectl-who-can to identify over-privileged accounts. Implement namespace-level isolation with resource quotas and limit ranges for multi-tenant clusters.'
          },
          {
            heading: 'Network Policies & Service Mesh Security',
            detail: 'Implement Kubernetes Network Policies to control pod-to-pod communication and enforce micro-segmentation within clusters. Deploy Calico or Cilium for advanced network policy enforcement including DNS-based and identity-aware policies. Use Istio or Linkerd service mesh for mutual TLS between services, traffic encryption, and fine-grained authorization policies. Monitor east-west traffic for anomalous communication patterns.'
          },
          {
            heading: 'Runtime Security & Monitoring',
            detail: 'Detect and prevent runtime threats in containerized environments using Falco for system call monitoring, Sysdig for container visibility, and cloud-native solutions like GKE Security Posture. Implement Pod Security Standards (Baseline, Restricted) using Pod Security Admission controllers. Monitor for container escapes, privilege escalation attempts, and cryptomining activities. Configure alerting for suspicious runtime behaviors.'
          },
          {
            heading: 'Supply Chain Security for Containers',
            detail: 'Secure the container supply chain from source code to production using SLSA (Supply Chain Levels for Software Artifacts) framework. Implement Software Bill of Materials (SBOM) generation using Syft and track component vulnerabilities. Configure admission controllers like Kyverno or OPA Gatekeeper to enforce image policies including registry restrictions, signature verification, and vulnerability thresholds.'
          }
        ],
        keyTakeaways: [
          'Build and maintain secure container images with minimal attack surface',
          'Harden Kubernetes clusters following CIS Benchmark recommendations',
          'Implement RBAC and network policies for least privilege access and micro-segmentation',
          'Deploy runtime security monitoring to detect and prevent container-based threats',
          'Secure the container supply chain with image signing, SBOM, and admission controls'
        ],
        practiceExercises: [
          'Scan a set of container images with Trivy, fix identified vulnerabilities, and rebuild with security best practices',
          'Run kube-bench against a lab Kubernetes cluster and remediate the top 10 findings',
          'Implement Network Policies that restrict pod communication to only required paths in a microservices application',
          'Deploy Falco in a Kubernetes cluster and create custom rules to detect suspicious container behavior'
        ],
        resources: [
          { name: 'CIS Kubernetes Benchmark', url: 'https://www.cisecurity.org/benchmark/kubernetes' },
          { name: 'Kubernetes Security by Liz Rice and Michael Hausenblas' },
          { name: 'Falco - Cloud-Native Runtime Security', url: 'https://falco.org' }
        ]
      },
      {
        title: 'DevSecOps Integration',
        duration: '5 hours',
        overview: 'Integrate security seamlessly into DevOps pipelines and culture to achieve continuous security validation without slowing development velocity. This module covers security tooling integration, automated testing, security champions programs, and building a DevSecOps culture that makes security everyone\'s responsibility.',
        topics: [
          {
            heading: 'CI/CD Pipeline Security Integration',
            detail: 'Embed security scanning into every stage of CI/CD pipelines using tools appropriate for each phase: pre-commit hooks with git-secrets, SAST with SonarQube and Semgrep in build stages, SCA with Dependabot and Snyk for dependency analysis, DAST with OWASP ZAP and Nuclei in staging environments, and IaC scanning with Checkov before deployment. Configure quality gates that block deployments when critical vulnerabilities are detected.'
          },
          {
            heading: 'Automated Security Testing',
            detail: 'Implement automated security testing strategies including Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), Interactive Application Security Testing (IAST), and Software Composition Analysis (SCA). Understand the strengths and limitations of each approach and how to combine them for comprehensive coverage. Tune tools to minimize false positives while maintaining detection efficacy to keep developer trust.'
          },
          {
            heading: 'Vulnerability Management in DevOps',
            detail: 'Build vulnerability management workflows that integrate with developer tools and processes. Triage and prioritize findings using risk-based approaches that consider exploitability, exposure, and business impact. Track remediation SLAs by severity and provide developers with actionable fix guidance directly in their IDEs and pull requests. Implement break-glass procedures for deploying with known vulnerabilities when business needs require it.'
          },
          {
            heading: 'Security as Code',
            detail: 'Codify security controls, policies, and compliance requirements as version-controlled code that can be tested, reviewed, and deployed alongside application code. Use tools like Conftest for policy testing, InSpec for compliance automation, and ScoutSuite for multi-cloud security auditing. Implement security unit tests that validate security controls work as expected and catch regressions before they reach production.'
          },
          {
            heading: 'Building DevSecOps Culture',
            detail: 'Establish security champions programs that embed security expertise within development teams. Create security training programs tailored to developers including secure coding workshops and CTF competitions. Build security self-service platforms that make it easy for developers to do the right thing. Measure DevSecOps program effectiveness using metrics like mean time to remediate (MTTR), vulnerability escape rate, and developer satisfaction with security tooling.'
          }
        ],
        keyTakeaways: [
          'Integrate security scanning into every stage of CI/CD pipelines',
          'Implement complementary automated security testing approaches (SAST, DAST, SCA, IAST)',
          'Build vulnerability management workflows that integrate with developer tools',
          'Codify security controls and compliance requirements as testable, version-controlled code',
          'Foster a DevSecOps culture through security champions and developer-friendly security tooling'
        ],
        practiceExercises: [
          'Build a CI/CD pipeline in GitHub Actions or GitLab CI that includes SAST (Semgrep), SCA (Snyk), and IaC scanning (Checkov) with quality gate enforcement',
          'Configure OWASP ZAP as an automated DAST scanner in a staging environment and triage the results',
          'Write InSpec compliance profiles that validate CIS Benchmark controls on cloud resources and integrate them into a pipeline'
        ],
        resources: [
          { name: 'OWASP DevSecOps Guideline', url: 'https://owasp.org/www-project-devsecops-guideline/' },
          { name: 'Semgrep - Lightweight Static Analysis', url: 'https://semgrep.dev' },
          { name: 'Accelerate: Building and Scaling High Performing Technology Organizations by Nicole Forsgren et al.' }
        ]
      },
      {
        title: 'Multi-Cloud Security',
        duration: '5 hours',
        overview: 'Develop strategies for securing workloads across multiple cloud service providers while maintaining consistent security posture, visibility, and governance. This module covers multi-cloud identity federation, unified security monitoring, cross-cloud networking security, and compliance management across heterogeneous cloud environments.',
        topics: [
          {
            heading: 'Multi-Cloud Security Strategy',
            detail: 'Develop a comprehensive multi-cloud security strategy that addresses the challenges of managing security across AWS, Azure, and GCP simultaneously. Evaluate cloud-agnostic vs cloud-native security tooling trade-offs. Create unified security policies that can be implemented consistently across providers while leveraging each provider\'s unique security capabilities. Address organizational challenges including skills gaps and operational complexity.'
          },
          {
            heading: 'Unified Identity & Access Management',
            detail: 'Implement centralized identity management across multiple clouds using federation with identity providers like Azure AD, Okta, or Ping Identity. Configure SAML 2.0 and OIDC federation for cross-cloud access. Standardize RBAC models across providers by mapping provider-specific roles to organizational role definitions. Implement cross-cloud privileged access management (PAM) to control and audit administrative access consistently.'
          },
          {
            heading: 'Cross-Cloud Network Security',
            detail: 'Design secure network architectures spanning multiple cloud providers using cloud interconnect services, transit gateways, and VPN tunnels. Implement consistent network security controls including firewalls, IDS/IPS, and DDoS protection across providers. Use cloud-agnostic network security tools and SD-WAN solutions to maintain visibility and control. Address challenges of inconsistent IP addressing, DNS, and certificate management.'
          },
          {
            heading: 'Cloud Security Posture Management (CSPM)',
            detail: 'Deploy CSPM solutions like Prisma Cloud, Wiz, or Orca to continuously assess security posture across multiple cloud providers from a single dashboard. Configure continuous compliance monitoring against frameworks like CIS Benchmarks, SOC 2, and PCI DSS. Implement automated remediation for common misconfigurations and establish escalation workflows for complex findings that require manual intervention.'
          },
          {
            heading: 'Unified Security Monitoring & Logging',
            detail: 'Centralize security logging from multiple cloud providers into a unified SIEM platform using cloud-native log forwarding services (CloudTrail, Azure Monitor, GCP Cloud Logging). Normalize log formats across providers for consistent detection rule development. Build cross-cloud detection rules that identify attack patterns spanning multiple environments such as credential compromise in one cloud used to access resources in another.'
          }
        ],
        keyTakeaways: [
          'Design and implement multi-cloud security strategies with consistent controls',
          'Federate identity and access management across multiple cloud providers',
          'Deploy CSPM solutions for unified security posture visibility and compliance',
          'Centralize security monitoring and build cross-cloud detection capabilities',
          'Address organizational and operational challenges of multi-cloud security management'
        ],
        practiceExercises: [
          'Design a unified IAM strategy for an organization using both AWS and Azure, including role mapping and federation architecture',
          'Configure a CSPM tool (like open-source ScoutSuite) to scan both AWS and GCP accounts and generate a unified compliance report',
          'Build a centralized logging architecture that ingests security logs from two cloud providers into a single analysis platform'
        ],
        resources: [
          { name: 'Cloud Security Alliance - Multi-Cloud Security Guide', url: 'https://cloudsecurityalliance.org' },
          { name: 'Prisma Cloud Documentation', url: 'https://docs.prismacloud.io' },
          { name: 'ScoutSuite - Multi-Cloud Security Auditing', url: 'https://github.com/nccgroup/ScoutSuite' }
        ]
      },
      {
        title: 'Cloud Security Automation',
        duration: '5 hours',
        overview: 'Automate cloud security operations to achieve consistent, scalable security enforcement across cloud environments. This module covers security automation frameworks, automated remediation, event-driven security responses, and building custom security tooling using cloud-native services and serverless architectures.',
        topics: [
          {
            heading: 'Security Automation Frameworks',
            detail: 'Design security automation architectures using event-driven patterns with cloud-native services like AWS EventBridge, Azure Event Grid, and GCP Eventarc. Implement the detect-alert-respond-remediate automation lifecycle. Evaluate build vs buy decisions for security automation and understand when custom automation is necessary vs when commercial platforms provide better value. Start with high-confidence, low-risk automations and gradually expand scope.'
          },
          {
            heading: 'Automated Remediation',
            detail: 'Build automated remediation workflows that fix common security misconfigurations without human intervention. Use AWS Config Rules with SSM Automation, Azure Policy with DeployIfNotExists effects, and GCP Organization Policies for preventive controls. Implement guardrails that automatically revert unauthorized changes such as closing publicly opened S3 buckets, removing overly permissive security group rules, and enforcing encryption on new resources.'
          },
          {
            heading: 'Serverless Security Functions',
            detail: 'Develop serverless security functions using AWS Lambda, Azure Functions, and GCP Cloud Functions for event-driven security responses. Build functions that automatically respond to security events including quarantining compromised instances, rotating exposed credentials, blocking malicious IPs in WAF rules, and creating forensic snapshots. Follow secure coding practices for serverless functions including least privilege IAM roles and input validation.'
          },
          {
            heading: 'Security Orchestration & ChatOps',
            detail: 'Implement security orchestration platforms that coordinate automated responses across multiple security tools and cloud services. Build ChatOps workflows using Slack or Teams bots that allow security teams to trigger investigation and remediation actions directly from communication channels. Create approval workflows for high-impact automations that require human authorization before execution while maintaining rapid response capabilities.'
          },
          {
            heading: 'Custom Security Tooling Development',
            detail: 'Build custom security tools using Python and cloud SDKs (boto3, azure-sdk, google-cloud libraries) to address organization-specific security requirements. Develop custom compliance scanners, access reviewers, and security reporting dashboards. Create security APIs that expose security capabilities as services for development teams. Implement testing and deployment pipelines for security tooling with the same rigor as production applications.'
          },
          {
            heading: 'Measuring Automation Effectiveness',
            detail: 'Define and track metrics that demonstrate the value of security automation including mean time to detect (MTTD), mean time to respond (MTTR), automation coverage percentage, and false positive rates. Build security dashboards using tools like Grafana and CloudWatch that provide visibility into automation performance. Conduct regular reviews to identify new automation opportunities and retire ineffective automations.'
          }
        ],
        keyTakeaways: [
          'Design event-driven security automation architectures using cloud-native services',
          'Build automated remediation workflows for common security misconfigurations',
          'Develop serverless security functions for rapid incident response',
          'Implement security orchestration and ChatOps for team-wide security operations',
          'Measure and continuously improve security automation effectiveness'
        ],
        practiceExercises: [
          'Build an AWS Lambda function triggered by CloudTrail events that automatically reverts public S3 bucket ACL changes',
          'Create an automated workflow that detects new security group rules allowing 0.0.0.0/0 access and sends a Slack alert with remediation options',
          'Develop a Python script using boto3 that performs an automated IAM access review and generates a report of unused credentials and overly permissive policies'
        ],
        resources: [
          { name: 'AWS Security Automation Blog', url: 'https://aws.amazon.com/blogs/security/' },
          { name: 'Security Automation with Ansible 2 by Madhu Akula' },
          { name: 'Cloud Security Automation - O\'Reilly by Prashant Priyam' }
        ]
      }
    ]
  },
  {
    id: 'grc-basics',
    tier: 'advanced',
    title: 'Governance Risk & Compliance (GRC)',
    description: 'A comprehensive course covering the governance, risk management, and compliance landscape in cybersecurity. Students will master major frameworks and standards including NIST CSF, ISO 27001, and risk assessment methodologies while developing practical skills in policy development, compliance management, audit preparation, and third-party risk management.',
    objectives: [
      'Understand and implement GRC frameworks to align cybersecurity with business objectives',
      'Apply the NIST Cybersecurity Framework to assess and improve organizational security posture',
      'Implement ISO 27001/27002 controls and prepare for certification audits',
      'Conduct quantitative and qualitative risk assessments using industry-standard methodologies',
      'Develop comprehensive security policies, standards, and procedures',
      'Manage compliance programs and prepare for regulatory audits'
    ],
    estimatedHours: 30,
    prerequisites: ['incident-response'],
    modules: [
      {
        title: 'GRC Fundamentals',
        duration: '4 hours',
        overview: 'Establish a foundational understanding of Governance, Risk, and Compliance as integrated disciplines that align cybersecurity programs with business objectives. This module covers the GRC framework, organizational structures, stakeholder management, and the business case for robust GRC programs.',
        topics: [
          {
            heading: 'Understanding Governance, Risk & Compliance',
            detail: 'Define the three pillars of GRC: Governance (ensuring security aligns with business strategy through oversight and decision-making structures), Risk Management (identifying, assessing, and treating risks to acceptable levels), and Compliance (meeting legal, regulatory, and contractual obligations). Understand how these disciplines integrate to create a cohesive security program that serves business objectives while managing threats effectively.'
          },
          {
            heading: 'GRC Organizational Structures',
            detail: 'Examine organizational structures that support effective GRC programs including the roles of CISO, GRC managers, risk analysts, and compliance officers. Understand reporting structures and how GRC teams interface with boards of directors, executive management, IT operations, and business units. Design committee structures including security steering committees, risk committees, and audit committees that provide appropriate oversight.'
          },
          {
            heading: 'Regulatory Landscape Overview',
            detail: 'Survey the major regulatory frameworks affecting cybersecurity programs including GDPR for data protection, HIPAA for healthcare, PCI DSS for payment card processing, SOX for financial reporting, GLBA for financial institutions, and sector-specific regulations like NERC CIP for critical infrastructure. Map organizational obligations based on industry, geography, and data types processed to create a compliance obligation register.'
          },
          {
            heading: 'Building the Business Case for GRC',
            detail: 'Quantify the value of GRC programs using metrics like risk reduction, compliance cost avoidance, insurance premium impacts, and breach cost prevention based on data from IBM Cost of a Data Breach Report and Ponemon studies. Communicate GRC value to executive leadership using business language and ROI frameworks. Develop GRC program maturity roadmaps that demonstrate progressive value delivery.'
          },
          {
            heading: 'GRC Technology Platforms',
            detail: 'Evaluate GRC technology platforms including ServiceNow GRC, Archer RSA, OneTrust, and open-source alternatives for managing risk registers, compliance obligations, policy libraries, and audit workflows. Understand how GRC platforms integrate with security tools (SIEM, vulnerability scanners, asset management) to automate evidence collection and continuous monitoring. Develop selection criteria for GRC tool procurement.'
          }
        ],
        keyTakeaways: [
          'Understand how governance, risk management, and compliance integrate into cohesive security programs',
          'Map organizational regulatory obligations across jurisdictions and industries',
          'Communicate GRC program value to executive leadership and boards',
          'Evaluate GRC technology platforms for organizational needs',
          'Design organizational structures that support effective GRC programs'
        ],
        practiceExercises: [
          'Create a compliance obligation register for a fictional e-commerce company operating in the US and EU that processes payment cards and health data',
          'Develop an executive presentation making the business case for a GRC program with budget justification',
          'Design a GRC organizational structure and RACI matrix for a mid-sized financial services company'
        ],
        resources: [
          { name: 'OCEG GRC Capability Model', url: 'https://www.oceg.org/resources/grc-capability-model-red-book/' },
          { name: 'ISACA COBIT Framework', url: 'https://www.isaca.org/resources/cobit' },
          { name: 'IBM Cost of a Data Breach Report', url: 'https://www.ibm.com/reports/data-breach' }
        ]
      },
      {
        title: 'NIST Cybersecurity Framework',
        duration: '4 hours',
        overview: 'Master the NIST Cybersecurity Framework (CSF) as a foundational tool for assessing and improving organizational cybersecurity posture. This module covers the Framework Core functions, implementation tiers, profiles, and practical application of CSF for security program development and maturity assessment.',
        topics: [
          {
            heading: 'CSF Core Functions Deep Dive',
            detail: 'Examine the five core functions of the NIST CSF — Identify, Protect, Detect, Respond, and Recover — along with the new Govern function introduced in CSF 2.0. Understand the categories and subcategories within each function and how they map to specific security controls and activities. Analyze how each function contributes to a comprehensive security program and identify gaps in organizational coverage.'
          },
          {
            heading: 'Implementation Tiers & Maturity Assessment',
            detail: 'Assess organizational cybersecurity maturity using the four CSF Implementation Tiers: Partial, Risk Informed, Repeatable, and Adaptive. Conduct tier assessments across each core function to identify areas of strength and weakness. Develop improvement plans that move the organization from current tier levels toward target states based on risk appetite and available resources.'
          },
          {
            heading: 'CSF Profiles & Gap Analysis',
            detail: 'Create Current and Target CSF Profiles that document the organization\'s existing and desired cybersecurity outcomes. Perform gap analysis between current and target profiles to identify priority areas for investment. Align profiles with business requirements, risk tolerance, and regulatory obligations. Use profiles as communication tools for stakeholder discussions about security program priorities and resource allocation.'
          },
          {
            heading: 'Mapping CSF to Other Frameworks',
            detail: 'Map NIST CSF categories and subcategories to other frameworks and standards including ISO 27001, CIS Controls, COBIT, and regulatory requirements like HIPAA and PCI DSS. Use CSF as a unifying framework that demonstrates compliance with multiple requirements simultaneously. Leverage NIST\'s informative references and community mappings to reduce duplication of effort across compliance programs.'
          },
          {
            heading: 'Practical CSF Implementation',
            detail: 'Implement NIST CSF in organizations of various sizes and maturity levels. Develop action plans with specific milestones, responsible parties, and timelines for addressing gaps identified in assessments. Create metrics and key performance indicators (KPIs) aligned to CSF functions for ongoing program measurement. Establish a continuous improvement cycle using CSF profiles as the baseline for measuring progress over time.'
          }
        ],
        keyTakeaways: [
          'Apply all five NIST CSF core functions (plus Govern in CSF 2.0) to organizational security programs',
          'Conduct CSF maturity assessments using Implementation Tiers',
          'Create Current and Target profiles and perform actionable gap analysis',
          'Map CSF to other frameworks for efficient multi-framework compliance',
          'Develop practical CSF implementation plans with measurable outcomes'
        ],
        practiceExercises: [
          'Conduct a NIST CSF assessment for a simulated organization and create Current and Target profiles with gap analysis',
          'Map a set of NIST CSF subcategories to corresponding ISO 27001 controls and CIS Controls',
          'Develop a 12-month CSF implementation roadmap with quarterly milestones for a small business'
        ],
        resources: [
          { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
          { name: 'NIST CSF Reference Tool', url: 'https://csrc.nist.gov/Projects/Cybersecurity-Framework/Filters' },
          { name: 'NIST SP 800-53 Rev. 5 - Security and Privacy Controls', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' }
        ]
      },
      {
        title: 'ISO 27001 / 27002',
        duration: '4 hours',
        overview: 'Understand and implement the ISO 27001 Information Security Management System (ISMS) and ISO 27002 security controls. This module covers ISMS establishment, Annex A controls implementation, certification preparation, and ongoing management system maintenance for organizations pursuing or maintaining ISO 27001 certification.',
        topics: [
          {
            heading: 'ISO 27001 ISMS Framework',
            detail: 'Understand the structure and requirements of ISO 27001:2022 including the management system clauses (4-10) covering organizational context, leadership, planning, support, operation, performance evaluation, and improvement. Learn how the Plan-Do-Check-Act (PDCA) cycle underpins the ISMS and drives continuous improvement. Understand mandatory documented information requirements and the relationship between ISO 27001 and ISO 27002.'
          },
          {
            heading: 'Annex A Controls & Statement of Applicability',
            detail: 'Review the 93 controls in ISO 27001:2022 Annex A (reorganized from 114 in the 2013 version) across four themes: Organizational, People, Physical, and Technological controls. Develop a Statement of Applicability (SoA) that documents which controls are applicable, their implementation status, and justification for any exclusions. Map controls to organizational risks identified in the risk assessment process.'
          },
          {
            heading: 'ISMS Implementation & Documentation',
            detail: 'Implement an ISMS including defining the scope, establishing the information security policy, conducting risk assessments, selecting and implementing controls, and developing required documented information. Create essential documents including the risk treatment plan, security objectives, competence records, and operational procedures. Balance documentation requirements with practical usability to avoid creating a paper-only ISMS.'
          },
          {
            heading: 'Internal Auditing & Management Review',
            detail: 'Plan and conduct ISO 27001 internal audits that objectively assess ISMS conformity and effectiveness. Develop audit programs, checklists, and reports that satisfy clause 9.2 requirements. Prepare management review inputs covering audit results, stakeholder feedback, risk assessment updates, and improvement opportunities. Generate management review outputs that demonstrate leadership engagement and drive continuous improvement.'
          },
          {
            heading: 'Certification Process & Maintenance',
            detail: 'Prepare for ISO 27001 certification audits including Stage 1 (documentation review) and Stage 2 (implementation assessment) by certification bodies. Understand how auditors evaluate ISMS effectiveness, common nonconformity findings, and how to address them. Maintain certification through surveillance audits, continual improvement activities, and recertification cycles. Budget and plan for ongoing certification costs and resource requirements.'
          }
        ],
        keyTakeaways: [
          'Establish and implement an ISO 27001 Information Security Management System',
          'Develop a Statement of Applicability mapping controls to identified risks',
          'Create required ISMS documentation that balances compliance with usability',
          'Conduct internal audits and management reviews that drive continuous improvement',
          'Prepare for and maintain ISO 27001 certification through the full audit lifecycle'
        ],
        practiceExercises: [
          'Develop a Statement of Applicability for a simulated SaaS company including justifications for control selection and exclusions',
          'Create an internal audit plan and checklist for auditing access control and cryptography sections of an ISMS',
          'Prepare a management review presentation covering ISMS performance metrics, audit findings, and improvement recommendations'
        ],
        resources: [
          { name: 'ISO 27001:2022 Standard', url: 'https://www.iso.org/standard/27001' },
          { name: 'ISO 27002:2022 - Code of Practice for Information Security Controls', url: 'https://www.iso.org/standard/75652.html' },
          { name: 'ISO 27001 Toolkit by IT Governance', url: 'https://www.itgovernance.co.uk' }
        ]
      },
      {
        title: 'Risk Assessment Methods',
        duration: '4 hours',
        overview: 'Master quantitative and qualitative risk assessment methodologies used in cybersecurity programs. This module covers risk identification, analysis, evaluation, and treatment using frameworks like NIST SP 800-30, FAIR, OCTAVE, and ISO 27005 to make informed decisions about security investments and risk acceptance.',
        topics: [
          {
            heading: 'Risk Assessment Fundamentals',
            detail: 'Understand core risk concepts including threat, vulnerability, likelihood, impact, inherent risk, residual risk, and risk appetite. Differentiate between qualitative approaches (using scales like High/Medium/Low), semi-quantitative (using numerical scales), and quantitative approaches (using financial values and probabilities). Select appropriate assessment methodologies based on organizational maturity, available data, and stakeholder requirements.'
          },
          {
            heading: 'NIST SP 800-30 Risk Assessment',
            detail: 'Conduct risk assessments following NIST SP 800-30 Rev. 1 guidance through the four steps: prepare for assessment, conduct assessment (identify threat sources, threat events, vulnerabilities, likelihood, and impact), communicate results, and maintain assessment. Use NIST threat and vulnerability catalogs to ensure comprehensive identification. Produce risk assessment reports that inform risk management decisions and control selection.'
          },
          {
            heading: 'FAIR Quantitative Risk Analysis',
            detail: 'Apply the Factor Analysis of Information Risk (FAIR) model for quantitative cyber risk analysis. Decompose risk scenarios into measurable factors: Loss Event Frequency (Threat Event Frequency × Vulnerability) and Loss Magnitude (Primary and Secondary losses). Use Monte Carlo simulations to generate probabilistic risk estimates expressed in financial terms. Leverage FAIR to compare security investments by their impact on annualized loss expectancy.'
          },
          {
            heading: 'Risk Treatment & Mitigation Planning',
            detail: 'Evaluate risk treatment options: mitigate (implement controls), transfer (cyber insurance, contracts), avoid (eliminate the risk source), or accept (acknowledge and monitor). Develop risk treatment plans that specify selected controls, implementation timelines, responsible parties, and expected residual risk levels. Create risk registers that track risks through their lifecycle from identification through treatment and ongoing monitoring.'
          },
          {
            heading: 'Risk Communication & Reporting',
            detail: 'Communicate risk assessment results to diverse stakeholders including boards of directors, executive management, and technical teams using appropriate formats. Create risk heat maps, bow-tie diagrams, and Monte Carlo distribution charts that visually convey risk information. Develop risk appetite statements and risk tolerance thresholds that guide decision-making. Establish regular risk reporting cadences aligned with governance meeting schedules.'
          },
          {
            heading: 'Continuous Risk Monitoring',
            detail: 'Implement continuous risk monitoring programs that update risk assessments based on changes in the threat landscape, vulnerability discoveries, and business environment changes. Integrate risk monitoring with vulnerability management, threat intelligence, and security metrics programs. Use Key Risk Indicators (KRIs) to provide early warning of increasing risk levels. Automate risk data collection from security tools to maintain current risk registers.'
          }
        ],
        keyTakeaways: [
          'Conduct qualitative and quantitative risk assessments using NIST and FAIR methodologies',
          'Develop risk treatment plans with appropriate mitigation, transfer, avoidance, or acceptance strategies',
          'Communicate risk in business terms that drive informed decision-making',
          'Maintain risk registers and implement continuous risk monitoring programs',
          'Use quantitative risk analysis to justify security investment decisions'
        ],
        practiceExercises: [
          'Conduct a NIST SP 800-30 risk assessment for a simulated e-commerce platform identifying threats, vulnerabilities, and risk levels',
          'Perform a FAIR analysis on a data breach scenario including Monte Carlo simulation and annualized loss expectancy calculation',
          'Create a risk register with 10 risks, risk treatment plans, and a heat map visualization for executive reporting'
        ],
        resources: [
          { name: 'NIST SP 800-30 Rev. 1 - Guide for Conducting Risk Assessments', url: 'https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final' },
          { name: 'Measuring and Managing Information Risk: A FAIR Approach by Jack Freund and Jack Jones' },
          { name: 'FAIR Institute', url: 'https://www.fairinstitute.org' }
        ]
      },
      {
        title: 'Compliance Management',
        duration: '3.5 hours',
        overview: 'Build and manage compliance programs that efficiently meet regulatory and contractual obligations while minimizing duplication of effort. This module covers compliance program design, evidence management, continuous compliance monitoring, and strategies for managing multiple overlapping compliance requirements.',
        topics: [
          {
            heading: 'Compliance Program Design',
            detail: 'Design compliance programs that systematically address all regulatory, legal, and contractual obligations. Create compliance obligation registers that map requirements to responsible parties, controls, and evidence sources. Establish compliance governance structures including compliance committees, escalation procedures, and reporting cadences. Build programs that scale with organizational growth and evolving regulatory requirements.'
          },
          {
            heading: 'Common Controls Framework',
            detail: 'Develop a common controls framework that maps controls to multiple compliance requirements simultaneously, reducing duplication of effort and evidence collection. Use frameworks like the Unified Compliance Framework (UCF) or build custom mappings between NIST CSF, ISO 27001, PCI DSS, SOC 2, and other applicable standards. Identify control gaps that need to be addressed and controls that satisfy multiple requirements.'
          },
          {
            heading: 'Evidence Collection & Management',
            detail: 'Establish systematic evidence collection processes that capture compliance artifacts efficiently and consistently. Automate evidence collection using GRC platforms, configuration management tools, and API integrations with security systems. Organize evidence repositories with clear naming conventions, retention policies, and access controls. Maintain evidence quality standards that satisfy auditor requirements and reduce audit preparation time.'
          },
          {
            heading: 'Continuous Compliance Monitoring',
            detail: 'Implement continuous compliance monitoring using tools like AWS Config, Azure Policy, and cloud-native compliance scanners to maintain real-time visibility into compliance status. Configure automated alerts for compliance deviations and establish remediation workflows. Move from point-in-time compliance assessments to continuous assurance models that provide stakeholders with up-to-date compliance posture information.'
          },
          {
            heading: 'Managing Regulatory Changes',
            detail: 'Establish processes for monitoring regulatory changes that affect the organization using regulatory intelligence services and industry associations. Assess the impact of new or modified regulations on existing controls and compliance programs. Develop implementation plans for new requirements with appropriate timelines. Communicate regulatory changes to affected stakeholders and update compliance obligations, controls, and evidence accordingly.'
          }
        ],
        keyTakeaways: [
          'Design scalable compliance programs that address multiple regulatory requirements efficiently',
          'Build common controls frameworks that reduce duplication across compliance standards',
          'Automate evidence collection and maintain audit-ready documentation',
          'Implement continuous compliance monitoring for real-time posture visibility',
          'Track and respond to regulatory changes that affect organizational obligations'
        ],
        practiceExercises: [
          'Create a common controls mapping between ISO 27001 Annex A, NIST CSF, and SOC 2 Trust Service Criteria for 10 selected controls',
          'Design an evidence collection workflow for quarterly compliance reviews including automation opportunities',
          'Develop a regulatory change management process and apply it to a recent regulatory update (e.g., SEC cyber rules or EU NIS2)'
        ],
        resources: [
          { name: 'SOC 2 Compliance Handbook by Jeff Gallimore et al.' },
          { name: 'PCI DSS v4.0', url: 'https://www.pcisecuritystandards.org/document_library/' },
          { name: 'Unified Compliance Framework', url: 'https://www.unifiedcompliance.com' }
        ]
      },
      {
        title: 'Policy Development',
        duration: '3.5 hours',
        overview: 'Develop comprehensive information security policies, standards, guidelines, and procedures that form the governance foundation of security programs. This module covers policy frameworks, writing techniques, stakeholder alignment, and policy lifecycle management including communication, training, and enforcement.',
        topics: [
          {
            heading: 'Policy Framework & Hierarchy',
            detail: 'Establish a policy framework with clear hierarchy from policies (high-level management directives) to standards (mandatory requirements), guidelines (recommended practices), and procedures (step-by-step instructions). Define the relationships between each document type and their appropriate audiences, approval authorities, and review cycles. Align the policy framework with organizational governance structures and regulatory requirements.'
          },
          {
            heading: 'Writing Effective Security Policies',
            detail: 'Write clear, enforceable security policies using plain language that can be understood by all employees. Structure policies with consistent sections including purpose, scope, definitions, policy statements, roles and responsibilities, enforcement, and related documents. Avoid overly technical language in policies while maintaining precision. Review sample policies from SANS, NIST, and industry peers as starting templates that can be customized.'
          },
          {
            heading: 'Essential Security Policies',
            detail: 'Develop core security policies required for a comprehensive security program: Acceptable Use Policy, Access Control Policy, Data Classification and Handling Policy, Incident Response Policy, Business Continuity Policy, Password and Authentication Policy, Remote Work Security Policy, and Bring Your Own Device (BYOD) Policy. Understand the critical elements of each policy and adapt them to organizational context and risk profile.'
          },
          {
            heading: 'Policy Lifecycle Management',
            detail: 'Manage policies through their complete lifecycle: development, review, approval, communication, implementation, monitoring, and retirement. Establish policy review schedules (typically annual) and triggers for ad-hoc reviews such as regulatory changes, significant incidents, or organizational restructuring. Track policy versions, maintain change histories, and ensure superseded versions are properly archived and removed from circulation.'
          },
          {
            heading: 'Policy Communication & Enforcement',
            detail: 'Develop communication strategies that ensure all employees understand and acknowledge their policy obligations. Create policy awareness training programs, acknowledgment workflows, and exception management processes. Establish enforcement mechanisms including progressive disciplinary actions and technical controls that enforce policy requirements automatically. Track compliance metrics including acknowledgment rates, training completion, and violation trends.'
          }
        ],
        keyTakeaways: [
          'Establish a comprehensive policy framework with appropriate hierarchy and governance',
          'Write clear, enforceable security policies using industry-standard structures',
          'Develop all essential security policies required for a mature security program',
          'Manage policies through their complete lifecycle with proper version control and review',
          'Implement effective policy communication, training, and enforcement mechanisms'
        ],
        practiceExercises: [
          'Write a complete Acceptable Use Policy and Data Classification Policy for a simulated organization',
          'Create a policy lifecycle management workflow including review triggers, approval chains, and communication plans',
          'Develop a policy exception request process with risk assessment requirements and approval criteria'
        ],
        resources: [
          { name: 'SANS Security Policy Templates', url: 'https://www.sans.org/information-security-policy/' },
          { name: 'Information Security Policies Made Easy by Charles Cresson Wood' },
          { name: 'NIST SP 800-12 Rev. 1 - An Introduction to Information Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-12/rev-1/final' }
        ]
      },
      {
        title: 'Audit Preparation',
        duration: '3.5 hours',
        overview: 'Prepare for and successfully navigate internal and external security audits including SOC 2, ISO 27001, PCI DSS, and regulatory examinations. This module covers audit readiness assessment, evidence preparation, auditor interaction strategies, finding remediation, and continuous audit readiness maintenance.',
        topics: [
          {
            heading: 'Audit Readiness Assessment',
            detail: 'Conduct pre-audit readiness assessments to identify and remediate gaps before external auditors arrive. Perform self-assessments against applicable standards using checklists and gap analysis tools. Prioritize remediation activities based on finding severity and available time. Engage internal audit teams or external consultants for preliminary assessments that identify issues when there is still time to address them.'
          },
          {
            heading: 'Evidence Preparation & Organization',
            detail: 'Prepare audit evidence packages organized by control area with clear mapping to audit requirements. Ensure evidence demonstrates control design (how it should work), implementation (that it is in place), and operating effectiveness (that it works consistently over the audit period). Prepare population lists, sample selections, and supporting documentation that auditors will request. Use consistent naming conventions and index documents for efficient auditor review.'
          },
          {
            heading: 'Working with Auditors',
            detail: 'Develop effective strategies for working with external auditors including managing information requests, preparing staff for interviews, and establishing communication protocols. Understand auditor independence requirements and how to maintain appropriate professional relationships. Provide timely, complete responses to auditor requests while maintaining scope boundaries. Handle preliminary findings discussions constructively and provide management responses that demonstrate remediation commitment.'
          },
          {
            heading: 'Remediation Planning & Tracking',
            detail: 'Develop remediation plans for audit findings that address root causes rather than symptoms. Prioritize findings by severity (critical, high, medium, low) and set realistic remediation timelines that consider resource constraints. Track remediation progress using project management tools and provide regular status updates to management. Prepare evidence of remediation completion for validation during follow-up audits or surveillance reviews.'
          },
          {
            heading: 'Continuous Audit Readiness',
            detail: 'Maintain continuous audit readiness through automated evidence collection, regular control testing, and ongoing compliance monitoring. Implement control self-assessment programs where control owners periodically validate their controls are operating effectively. Build audit calendars that track all audit activities, deadlines, and preparation milestones. Establish a culture where audit readiness is a continuous state rather than a periodic scramble.'
          }
        ],
        keyTakeaways: [
          'Conduct pre-audit readiness assessments to identify and remediate gaps proactively',
          'Prepare organized audit evidence that demonstrates control effectiveness',
          'Work productively with external auditors while maintaining scope boundaries',
          'Develop and track remediation plans that address audit finding root causes',
          'Maintain continuous audit readiness through automation and ongoing control testing'
        ],
        practiceExercises: [
          'Conduct a mock SOC 2 readiness assessment for a simulated SaaS company across the Security and Availability trust service criteria',
          'Prepare an evidence package for 5 selected controls including design, implementation, and operating effectiveness evidence',
          'Create an audit finding remediation tracker with root cause analysis, action plans, responsible parties, and target dates'
        ],
        resources: [
          { name: 'AICPA SOC 2 Guide', url: 'https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome' },
          { name: 'IT Auditing Using Controls to Protect Information Assets by Chris Davis et al.' },
          { name: 'ISACA CISA Review Manual', url: 'https://www.isaca.org/credentialing/cisa' }
        ]
      },
      {
        title: 'Third-Party Risk Management',
        duration: '3.5 hours',
        overview: 'Manage cybersecurity risks introduced by vendors, suppliers, and business partners through comprehensive third-party risk management (TPRM) programs. This module covers vendor assessment methodologies, contractual security requirements, continuous monitoring of third-party risks, and incident management involving third parties.',
        topics: [
          {
            heading: 'TPRM Program Design',
            detail: 'Design and implement a third-party risk management program including vendor inventory management, risk tiering based on data access and business criticality, and assessment cadence determination. Establish TPRM governance structures with clear roles for procurement, legal, security, and business owner stakeholders. Develop vendor lifecycle management processes from onboarding through termination that embed security considerations at every stage.'
          },
          {
            heading: 'Vendor Security Assessments',
            detail: 'Conduct thorough vendor security assessments using standardized questionnaires like SIG (Standardized Information Gathering), CAIQ (Consensus Assessments Initiative Questionnaire), and custom assessment frameworks. Review vendor SOC 2 reports, ISO 27001 certificates, and penetration test results. Perform on-site assessments for critical vendors. Evaluate assessment responses objectively, identify risk areas, and make informed recommendations about vendor engagement or remediation requirements.'
          },
          {
            heading: 'Contractual Security Requirements',
            detail: 'Develop contractual security clauses and data processing agreements that establish vendor security obligations. Include requirements for data protection, incident notification timelines, audit rights, subcontractor management, and termination data handling. Work with legal teams to ensure security requirements are enforceable and aligned with regulatory obligations like GDPR Article 28 processor requirements. Negotiate security addenda with vendors who resist standard contractual terms.'
          },
          {
            heading: 'Continuous Vendor Monitoring',
            detail: 'Implement continuous monitoring of third-party security posture using services like SecurityScorecard, BitSight, and UpGuard that provide outside-in assessments of vendor security. Monitor for vendor data breaches, security incidents, and changes in security posture that may affect your organization. Establish alert thresholds and escalation procedures for significant vendor risk changes. Integrate vendor monitoring data into the overall risk management program.'
          },
          {
            heading: 'Third-Party Incident Management',
            detail: 'Develop incident response procedures specific to third-party security incidents including notification chains, impact assessment, and coordinated response activities. Understand contractual rights during vendor incidents and how to exercise audit and information request rights. Manage communications with affected customers and regulators when a vendor incident impacts your organization\'s data. Document lessons learned and update TPRM processes to prevent recurrence.'
          },
          {
            heading: 'Supply Chain Risk & Fourth-Party Risk',
            detail: 'Extend risk management beyond direct vendors to their subcontractors and service providers (fourth-party risk). Map critical supply chains to identify concentration risks and single points of failure. Assess supply chain resilience using frameworks like NIST SP 800-161 for Cyber Supply Chain Risk Management. Implement contractual requirements for vendor subcontractor management and transparency. Evaluate geopolitical risks affecting technology supply chains.'
          }
        ],
        keyTakeaways: [
          'Design and implement comprehensive third-party risk management programs',
          'Conduct thorough vendor security assessments using industry-standard frameworks',
          'Develop enforceable contractual security requirements for vendor agreements',
          'Implement continuous vendor monitoring for real-time risk visibility',
          'Manage third-party security incidents with clear procedures and communication plans',
          'Address fourth-party and supply chain risks beyond direct vendor relationships'
        ],
        practiceExercises: [
          'Design a vendor risk tiering model and apply it to categorize 10 sample vendors by risk level',
          'Complete a SIG questionnaire assessment for a simulated cloud service provider and document identified risks with recommendations',
          'Draft contractual security clauses for a data processing agreement with a cloud vendor including GDPR-compliant terms',
          'Create a third-party incident response playbook for a scenario where a critical SaaS vendor experiences a data breach'
        ],
        resources: [
          { name: 'NIST SP 800-161 Rev. 1 - Cybersecurity Supply Chain Risk Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final' },
          { name: 'Shared Assessments SIG Questionnaire', url: 'https://sharedassessments.org/sig/' },
          { name: 'SecurityScorecard Platform', url: 'https://securityscorecard.com' }
        ]
      }
    ]
  }
];
