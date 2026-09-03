import { Course } from '../types';

export const beginnerCourses: Course[] = [
  {
    id: 'net-fundamentals',
    tier: 'beginner',
    title: 'Networking Fundamentals',
    description: 'A comprehensive introduction to computer networking that covers the essential concepts, protocols, and technologies that form the backbone of modern digital communications. This course takes you from foundational networking principles through practical skills in IP addressing, subnetting, DNS, DHCP, and wireless networking, preparing you for further study in cybersecurity and network administration.',
    objectives: [
      'Understand core networking concepts including the OSI and TCP/IP models',
      'Configure and troubleshoot IP addressing and subnetting schemes',
      'Explain how DNS, DHCP, and HTTP operate at a protocol level',
      'Identify common network devices, topologies, and their roles in enterprise environments',
      'Describe wireless networking standards, security mechanisms, and common vulnerabilities',
      'Use fundamental networking tools such as ping, traceroute, Wireshark, and nslookup'
    ],
    estimatedHours: 20,
    prerequisites: [],
    modules: [
      {
        title: 'Introduction to Networking',
        duration: '2.5 hours',
        overview: 'This module establishes the foundational understanding of what computer networks are, why they exist, and how they enable modern communication. You will explore network types, data transmission concepts, and the history of networking from ARPANET to today\'s global internet infrastructure.',
        topics: [
          {
            heading: 'What is a Computer Network?',
            detail: 'A computer network is a collection of interconnected devices that share resources and communicate using defined protocols. Networks range from simple two-device connections to massive global infrastructures like the internet. Understanding how data flows between endpoints — through switches, routers, and various transmission media — is the essential first step in cybersecurity, as every attack and defense occurs over a network.'
          },
          {
            heading: 'Types of Networks: LAN, WAN, MAN, PAN, and CAN',
            detail: 'Networks are classified by their geographic scope and purpose. A Local Area Network (LAN) covers a single building or campus, while a Wide Area Network (WAN) spans cities or countries, often using leased lines or MPLS circuits. Metropolitan Area Networks (MAN) bridge the gap between LAN and WAN, and Personal Area Networks (PAN) connect devices within a few meters using Bluetooth or USB. Campus Area Networks (CAN) interconnect multiple LANs within a university or corporate campus. Each type presents unique security considerations and attack surfaces.'
          },
          {
            heading: 'Network Communication Models: Client-Server vs. Peer-to-Peer',
            detail: 'In a client-server model, dedicated servers provide resources (files, applications, authentication) to client devices, creating centralized management and security enforcement points. In a peer-to-peer (P2P) model, every device acts as both client and server, sharing resources directly — as seen in protocols like BitTorrent. While client-server architectures dominate enterprise environments due to better access control and auditing, P2P networks are common in file sharing and can be exploited for distributing malware or conducting covert communications.'
          },
          {
            heading: 'Data Transmission Basics: Packets, Frames, and Segments',
            detail: 'Data on a network doesn\'t travel as a continuous stream but is broken into discrete units called packets, frames, or segments depending on the network layer. At the transport layer, TCP segments include sequence numbers for reliable delivery, while UDP datagrams sacrifice reliability for speed. At the data link layer, Ethernet frames encapsulate packets with MAC addresses for local delivery. Understanding this encapsulation process — how data is wrapped in headers at each layer — is critical for analyzing network traffic in tools like Wireshark.'
          },
          {
            heading: 'Bandwidth, Latency, and Throughput',
            detail: 'Bandwidth refers to the maximum theoretical data rate of a network link, measured in bits per second (Mbps, Gbps). Latency is the time delay for a packet to travel from source to destination, influenced by propagation delay, queuing, and processing time. Throughput represents the actual data rate achieved, which is always less than bandwidth due to protocol overhead, congestion, and errors. Tools like iperf and speedtest-cli help measure these metrics, which are essential for network performance monitoring and identifying potential denial-of-service conditions.'
          },
          {
            heading: 'Network Standards and Organizations',
            detail: 'Networking relies on standards defined by organizations like the IEEE (Ethernet standards such as 802.3 and wireless 802.11), IETF (TCP/IP and internet protocols via RFCs), ITU (telecommunications standards), and ISO (the OSI reference model). These standards ensure interoperability between devices from different vendors. Understanding who governs these standards helps you locate authoritative documentation — for example, RFC 793 defines TCP, and IEEE 802.11ax defines Wi-Fi 6. In cybersecurity, protocol standards also reveal expected behaviors that, when violated, may indicate an attack.'
          }
        ],
        keyTakeaways: [
          'Networks are classified by scope (LAN, WAN, MAN, PAN, CAN) and architecture (client-server, peer-to-peer)',
          'Data travels in discrete units (packets, frames, segments) that are encapsulated with headers at each layer',
          'Bandwidth, latency, and throughput are distinct metrics critical for performance and security monitoring',
          'International standards bodies like IEEE, IETF, and ISO define the protocols and frameworks that enable interoperable networking'
        ],
        practiceExercises: [
          'Use the ping command to measure round-trip latency to five different public servers (e.g., 8.8.8.8, 1.1.1.1) and document how latency varies by distance and network path',
          'Install Wireshark and capture 60 seconds of network traffic on your local interface — identify at least three different protocols in the capture',
          'Draw a diagram of your home or lab network identifying every device, its IP address, the network type (LAN/WAN), and the communication model in use'
        ],
        resources: [
          { name: 'Computer Networking: A Top-Down Approach by Kurose & Ross' },
          { name: 'Wireshark Official Documentation', url: 'https://www.wireshark.org/docs/' },
          { name: 'Cisco Networking Basics Course (NetAcad)', url: 'https://www.netacad.com/' }
        ],
        keyConcepts: [
          { term: 'LAN', definition: 'Local Area Network — devices in a single building/campus' },
          { term: 'WAN', definition: 'Wide Area Network — spans cities or countries (e.g. the internet)' },
          { term: 'Packet', definition: 'A unit of data at Layer 3; includes source/destination IP headers' },
          { term: 'Bandwidth', definition: 'Maximum theoretical data rate of a link (Mbps/Gbps)' },
          { term: 'Latency', definition: 'Time delay for data to travel from source to destination' },
          { term: 'Client-Server', definition: 'Architecture where dedicated servers provide services to clients' },
        ],
        youtubeIds: ['3QhU9jd03a0', 'vv4y_uOneC0'],
        quiz: [
          {
            question: 'Which network type covers a single building or campus?',
            options: ['WAN', 'LAN', 'MAN', 'PAN'],
            answer: 1,
            explanation: 'A LAN (Local Area Network) connects devices in a limited geographic area like a building or campus. WANs span cities or countries.'
          },
          {
            question: 'What is the difference between bandwidth and throughput?',
            options: [
              'They are the same thing',
              'Bandwidth is maximum theoretical speed; throughput is actual achieved speed',
              'Throughput is faster than bandwidth',
              'Bandwidth is measured in milliseconds'
            ],
            answer: 1,
            explanation: 'Bandwidth is the maximum theoretical capacity of a link. Throughput is the actual data rate achieved, always lower than bandwidth due to overhead, congestion, and errors.'
          },
          {
            question: 'Which organization defines Ethernet standards like 802.3?',
            options: ['IETF', 'ITU', 'IEEE', 'ISO'],
            answer: 2,
            explanation: 'The IEEE (Institute of Electrical and Electronics Engineers) defines Ethernet (802.3) and Wi-Fi (802.11) standards. IETF manages internet protocols via RFCs. ISO created the OSI model.'
          },
        ]
      },
      {
        title: 'OSI Model Deep Dive',
        duration: '3 hours',
        overview: 'The OSI (Open Systems Interconnection) model is the universal reference framework for understanding how data moves across networks. This module examines all seven layers in detail, from the physical transmission of bits to application-layer protocols, showing how each layer contributes to network communication and where security vulnerabilities exist at each level.',
        topics: [
          {
            heading: 'Layer 1 — Physical Layer',
            detail: 'The Physical layer handles the transmission of raw bit streams over a physical medium such as copper cables (Cat5e, Cat6), fiber optic cables (single-mode, multi-mode), or wireless radio frequencies. It defines specifications for voltages, pin layouts, cable lengths, and modulation schemes. Physical layer attacks include wiretapping, cable splicing, and signal jamming. Tools like cable testers and Time Domain Reflectometers (TDR) help diagnose physical layer issues. Understanding this layer is critical for site surveys and securing physical network infrastructure.'
          },
          {
            heading: 'Layer 2 — Data Link Layer',
            detail: 'The Data Link layer is responsible for node-to-node data transfer within the same network segment, using MAC (Media Access Control) addresses to identify devices. Ethernet (IEEE 802.3) operates here, encapsulating IP packets into frames with source and destination MAC addresses. This layer also handles error detection via Frame Check Sequence (FCS) and flow control. Common Layer 2 attacks include MAC flooding (overwhelming a switch\'s CAM table to force it into hub mode), ARP spoofing (redirecting traffic by forging ARP replies), and VLAN hopping. Tools like macchanger and arpspoof demonstrate these vulnerabilities.'
          },
          {
            heading: 'Layer 3 — Network Layer',
            detail: 'The Network layer manages logical addressing and routing of packets across different networks. IP (Internet Protocol) operates here, assigning logical addresses (IPv4 and IPv6) to devices and enabling routers to forward packets toward their destination using routing tables and protocols like OSPF, BGP, and EIGRP. ICMP (Internet Control Message Protocol) provides diagnostic functions like ping and traceroute. Network layer attacks include IP spoofing, route hijacking (BGP hijacking), and ICMP-based reconnaissance. Firewalls and ACLs (Access Control Lists) provide primary defense at this layer.'
          },
          {
            heading: 'Layer 4 — Transport Layer',
            detail: 'The Transport layer ensures reliable or unreliable end-to-end data delivery between applications using port numbers. TCP (Transmission Control Protocol) provides connection-oriented, reliable communication with its three-way handshake (SYN, SYN-ACK, ACK), sequencing, and acknowledgment mechanisms. UDP (User Datagram Protocol) provides connectionless, faster communication used for streaming, DNS queries, and VoIP. Transport layer attacks include SYN flood attacks (exhausting server resources with half-open connections) and port scanning (using tools like Nmap to discover open services). Stateful firewalls inspect traffic at this layer.'
          },
          {
            heading: 'Layer 5 — Session Layer',
            detail: 'The Session layer establishes, manages, and terminates sessions between applications. It handles session checkpointing and recovery — for example, if a large file transfer is interrupted, the session layer enables resumption from a checkpoint rather than restarting from scratch. Protocols associated with this layer include NetBIOS, RPC (Remote Procedure Call), and PPTP. Session hijacking attacks exploit weak session management, where an attacker steals or predicts session identifiers to impersonate a legitimate user. Proper session timeout policies and secure token generation are critical defenses.'
          },
          {
            heading: 'Layer 6 — Presentation Layer',
            detail: 'The Presentation layer handles data formatting, encryption, and compression, ensuring that data sent by one system\'s application layer is readable by another. It manages character encoding (ASCII, Unicode), data serialization formats (JSON, XML, ASN.1), image formats (JPEG, PNG), and encryption/decryption (SSL/TLS operations). Vulnerabilities at this layer include SSL stripping attacks, where an attacker downgrades an HTTPS connection to HTTP to intercept plaintext data. Tools like sslstrip demonstrate this vulnerability. Proper TLS configuration and HSTS (HTTP Strict Transport Security) headers mitigate these risks.'
          },
          {
            heading: 'Layer 7 — Application Layer',
            detail: 'The Application layer is where end-user protocols and applications operate, including HTTP/HTTPS (web browsing), SMTP/IMAP/POP3 (email), FTP/SFTP (file transfer), DNS (name resolution), and SSH (secure remote access). This is the layer most targeted by attackers through techniques such as SQL injection, cross-site scripting (XSS), phishing, and DNS poisoning. Web Application Firewalls (WAFs) and intrusion detection systems operate at this layer to inspect and filter malicious traffic. Understanding application layer protocols is essential for both offensive and defensive cybersecurity roles.'
          },
          {
            heading: 'OSI vs. TCP/IP Model Comparison',
            detail: 'While the OSI model has seven layers and serves primarily as a conceptual teaching framework, the TCP/IP model has four layers (Network Access, Internet, Transport, Application) and reflects the actual protocol implementation of the internet. The TCP/IP model combines OSI layers 5-7 into a single Application layer and layers 1-2 into the Network Access layer. In practice, cybersecurity professionals reference both models — the OSI model for troubleshooting and communication, and the TCP/IP model for understanding real protocol behavior. Knowing both is expected on certifications like CompTIA Security+ and Network+.'
          }
        ],
        keyTakeaways: [
          'The OSI model\'s seven layers provide a systematic framework for understanding network communication and troubleshooting',
          'Each layer has distinct security vulnerabilities — from physical wiretapping (Layer 1) to SQL injection (Layer 7)',
          'The TCP/IP model\'s four layers map to actual internet protocol implementations and are used alongside the OSI model',
          'Understanding layer-specific attacks and defenses is fundamental to cybersecurity analysis and incident response',
          'Encapsulation adds headers at each layer going down the stack; de-encapsulation removes them going up'
        ],
        practiceExercises: [
          'Capture HTTP traffic in Wireshark and identify data at each OSI layer — examine Ethernet headers (L2), IP headers (L3), TCP headers (L4), and HTTP content (L7)',
          'Perform an ARP scan on your local network using arp-scan or Nmap to identify all devices, then examine the ARP table to understand Layer 2 addressing',
          'Use Nmap to perform a SYN scan (-sS) on a target machine and explain how the scan operates at the Transport layer using the TCP three-way handshake'
        ],
        resources: [
          { name: 'CompTIA Network+ Study Guide by Todd Lammle' },
          { name: 'Practical Packet Analysis by Chris Sanders (No Starch Press)' },
          { name: 'OSI Model Explained - Cisco Learning Network', url: 'https://learningnetwork.cisco.com/' }
        ],
        keyConcepts: [
          { term: 'Layer 1 — Physical', definition: 'Raw bit transmission over cables/wireless; attacks: wiretapping, jamming' },
          { term: 'Layer 2 — Data Link', definition: 'MAC addressing, Ethernet frames; attacks: ARP spoofing, MAC flooding' },
          { term: 'Layer 3 — Network', definition: 'IP routing between networks; attacks: IP spoofing, BGP hijacking' },
          { term: 'Layer 4 — Transport', definition: 'TCP/UDP ports, end-to-end delivery; attacks: SYN flood, port scanning' },
          { term: 'Layer 7 — Application', definition: 'HTTP, DNS, SMTP; attacks: SQLi, XSS, phishing' },
          { term: 'Encapsulation', definition: 'Headers added at each layer going down; removed going up (de-encapsulation)' },
        ],
        youtubeIds: ['LANB3CFUkqA', 'OTwp3olo3P0'],
        quiz: [
          {
            question: 'At which OSI layer does ARP spoofing occur?',
            options: ['Layer 3 — Network', 'Layer 2 — Data Link', 'Layer 4 — Transport', 'Layer 7 — Application'],
            answer: 1,
            explanation: 'ARP spoofing targets the Data Link layer (Layer 2) by sending forged ARP replies that map a legitimate IP address to the attacker\'s MAC address, redirecting traffic through the attacker.'
          },
          {
            question: 'Which layer adds IP headers to data packets?',
            options: ['Layer 2', 'Layer 4', 'Layer 3', 'Layer 5'],
            answer: 2,
            explanation: 'The Network layer (Layer 3) adds IP headers containing source and destination IP addresses, enabling routing between different networks.'
          },
          {
            question: 'SSL/TLS encryption operates at which OSI layer?',
            options: ['Layer 4 — Transport', 'Layer 3 — Network', 'Layer 6 — Presentation', 'Layer 7 — Application'],
            answer: 2,
            explanation: 'TLS/SSL operates at the Presentation layer (Layer 6), handling encryption, decryption, and data format translation between the application and transport layers.'
          },
        ]
      },
      {
        title: 'TCP/IP Protocol Suite',
        duration: '3 hours',
        overview: 'This module provides an in-depth exploration of the TCP/IP protocol suite — the foundation of internet communication. You will learn how TCP and UDP operate, understand the significance of ports and sockets, analyze the TCP handshake process, and examine how IP handles routing and packet delivery across networks.',
        topics: [
          {
            heading: 'TCP/IP Model Architecture',
            detail: 'The TCP/IP model consists of four layers: Network Access (handling physical and data link functions), Internet (managing logical addressing and routing via IP), Transport (providing end-to-end communication via TCP/UDP), and Application (encompassing all higher-level protocols like HTTP, DNS, and SMTP). Unlike the OSI model, TCP/IP was designed alongside the actual protocols of the internet, making it a practical rather than theoretical model. Each layer communicates with adjacent layers through well-defined interfaces, and understanding this architecture is critical for packet analysis and firewall rule creation.'
          },
          {
            heading: 'TCP Deep Dive: Handshake, Flow Control, and Reliability',
            detail: 'TCP establishes connections using the three-way handshake: the client sends a SYN packet, the server responds with SYN-ACK, and the client completes with ACK. This process establishes sequence numbers for reliable, ordered data delivery. TCP uses sliding window flow control to manage transmission rates and prevent buffer overflow. Retransmission timers ensure lost segments are resent. Connection teardown uses a four-way handshake (FIN, ACK, FIN, ACK). Analyzing TCP flags in Wireshark reveals connection states, and anomalous flag combinations (like SYN+FIN) can indicate scan attempts or crafted packets from tools like hping3.'
          },
          {
            heading: 'UDP: Connectionless Communication',
            detail: 'UDP provides a lightweight, connectionless transport mechanism with no handshake, sequencing, or acknowledgment. This makes it ideal for time-sensitive applications like VoIP (SIP/RTP), video streaming, DNS queries, and online gaming where speed matters more than reliability. UDP packets (datagrams) contain only source port, destination port, length, and checksum fields, resulting in minimal overhead. However, the lack of connection state makes UDP vulnerable to amplification attacks — attackers send small spoofed queries to services like DNS or NTP that respond with much larger replies, overwhelming the victim with traffic.'
          },
          {
            heading: 'Ports, Sockets, and Service Identification',
            detail: 'Port numbers (0-65535) identify specific services on a host. Well-known ports (0-1023) are assigned to standard services: HTTP (80), HTTPS (443), SSH (22), FTP (21), DNS (53), SMTP (25), and RDP (3389). Registered ports (1024-49151) are used by applications like MySQL (3306) and PostgreSQL (5432). Ephemeral ports (49152-65535) are dynamically assigned for client-side connections. A socket is the combination of an IP address and port number (e.g., 192.168.1.10:443). Security professionals use Nmap to scan for open ports and identify running services, and unnecessary open ports represent an expanded attack surface that should be closed.'
          },
          {
            heading: 'ICMP and Network Diagnostics',
            detail: 'ICMP (Internet Control Message Protocol) operates at the Internet layer and provides error reporting and diagnostic functions. ICMP Type 8 (Echo Request) and Type 0 (Echo Reply) power the ping utility. Type 11 (Time Exceeded) enables traceroute functionality by incrementing TTL values. Type 3 (Destination Unreachable) indicates routing failures with specific codes for network, host, port, and protocol unreachable conditions. While essential for troubleshooting, ICMP can be abused for reconnaissance (ping sweeps), covert channels (ICMP tunneling with tools like ptunnel), and denial-of-service (Ping of Death, Smurf attacks). Many organizations limit or filter ICMP at the perimeter.'
          },
          {
            heading: 'IPv4 vs. IPv6 Transition',
            detail: 'IPv4 uses 32-bit addresses (approximately 4.3 billion addresses), which have been exhausted, driving adoption of IPv6 with its 128-bit address space (340 undecillion addresses). IPv6 eliminates the need for NAT, includes mandatory IPsec support, and uses simplified headers for more efficient routing. Transition mechanisms include dual-stack (running both protocols simultaneously), tunneling (encapsulating IPv6 in IPv4 with 6to4 or Teredo), and translation (NAT64). Security implications of IPv6 include expanded attack surfaces, potential for IPv6-based evasion of IPv4-only security controls, and the need for security tools and firewalls to support both protocol versions.'
          }
        ],
        keyTakeaways: [
          'TCP provides reliable, connection-oriented communication using the three-way handshake and sequence numbers',
          'UDP sacrifices reliability for speed and is used in DNS, VoIP, streaming, and gaming',
          'Port numbers identify services and are a primary focus of network scanning and attack surface reduction',
          'ICMP enables essential diagnostics but can be weaponized for reconnaissance and attacks',
          'IPv6 adoption introduces new security considerations including dual-stack vulnerabilities and expanded address space'
        ],
        practiceExercises: [
          'Capture a TCP three-way handshake in Wireshark by navigating to a website — filter by tcp.flags.syn==1 and follow the SYN → SYN-ACK → ACK sequence, documenting sequence and acknowledgment numbers',
          'Use Nmap to scan a target for the top 1000 ports (nmap -sT <target>) and categorize discovered services by well-known, registered, and ephemeral port ranges',
          'Compare TCP and UDP behavior by capturing DNS traffic (UDP port 53) and HTTPS traffic (TCP port 443) in Wireshark — document the differences in connection establishment and overhead'
        ],
        resources: [
          { name: 'TCP/IP Illustrated, Volume 1 by W. Richard Stevens' },
          { name: 'Nmap Network Scanning by Gordon "Fyodor" Lyon', url: 'https://nmap.org/book/' },
          { name: 'IANA Service Name and Transport Protocol Port Number Registry', url: 'https://www.iana.org/assignments/service-names-port-numbers/' }
        ]
      },
      {
        title: 'IP Addressing & Subnetting',
        duration: '3.5 hours',
        overview: 'IP addressing and subnetting are foundational skills for any networking or cybersecurity professional. This module covers IPv4 address classes, CIDR notation, subnet mask calculation, and practical subnetting techniques. You will learn to design efficient IP addressing schemes and understand how subnetting impacts network security through segmentation and access control.',
        topics: [
          {
            heading: 'IPv4 Address Structure and Binary Representation',
            detail: 'An IPv4 address is a 32-bit number typically represented in dotted decimal notation (e.g., 192.168.1.1). Each octet represents 8 bits, ranging from 0 to 255. Converting between binary and decimal is essential for subnetting: for example, 192.168.1.0 in binary is 11000000.10101000.00000001.00000000. Understanding binary helps you quickly calculate network and broadcast addresses, determine the number of available hosts, and create subnet masks. Practice with binary conversion until it becomes second nature — it is tested on both Network+ and Security+ exams.'
          },
          {
            heading: 'Address Classes and Private IP Ranges',
            detail: 'IPv4 addresses were originally divided into classes: Class A (1.0.0.0–126.0.0.0, /8 default mask, 16 million hosts per network), Class B (128.0.0.0–191.255.0.0, /16, 65,534 hosts), and Class C (192.0.0.0–223.255.255.0, /24, 254 hosts). RFC 1918 defines private (non-routable) address ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16, which are used internally and translated to public addresses via NAT. Special addresses include 127.0.0.1 (loopback), 169.254.0.0/16 (APIPA — Automatic Private IP Addressing), and 0.0.0.0 (default route). Classful addressing has largely been replaced by CIDR but remains important for understanding network fundamentals.'
          },
          {
            heading: 'CIDR Notation and Subnet Masks',
            detail: 'Classless Inter-Domain Routing (CIDR) replaced classful addressing to allow flexible allocation of IP addresses. CIDR notation uses a slash followed by the number of network bits: /24 means the first 24 bits identify the network (subnet mask 255.255.255.0), leaving 8 bits for host addresses (254 usable hosts). A /25 splits a /24 in half (126 hosts each), a /26 creates four subnets of 62 hosts, and so on. The formula for usable hosts is 2^(32-prefix) - 2 (subtracting the network and broadcast addresses). CIDR enables efficient IP allocation and is the foundation of modern routing and firewall ACL rules.'
          },
          {
            heading: 'Subnetting in Practice',
            detail: 'Subnetting divides a larger network into smaller, more manageable subnetworks. To subnet, determine the required number of subnets or hosts, select the appropriate CIDR prefix, calculate the network address, broadcast address, and usable host range for each subnet. For example, subnetting 10.0.0.0/24 into four equal subnets yields: 10.0.0.0/26 (hosts .1–.62), 10.0.0.64/26 (hosts .65–.126), 10.0.0.128/26 (hosts .129–.190), and 10.0.0.192/26 (hosts .193–.254). Each subnet acts as a separate broadcast domain, reducing unnecessary traffic and enabling security policies per segment. The ipcalc tool can verify your manual calculations.'
          },
          {
            heading: 'VLSM and Supernetting',
            detail: 'Variable Length Subnet Masking (VLSM) allows different subnets within the same network to use different prefix lengths, optimizing address utilization. For example, a department with 100 users gets a /25 (126 hosts), while a point-to-point link between routers needs only a /30 (2 hosts). Supernetting (route aggregation or summarization) combines multiple smaller networks into a single larger route advertisement — for example, four contiguous /24 networks can be summarized as a single /22. This reduces routing table size and improves router performance. Both techniques are essential for efficient network design and are heavily tested on networking certifications.'
          },
          {
            heading: 'Network Segmentation for Security',
            detail: 'Subnetting is not just about address management — it is a critical security strategy. Network segmentation isolates sensitive assets (servers, databases, IoT devices) into separate subnets with firewall rules controlling inter-subnet traffic. VLANs (Virtual LANs) provide Layer 2 segmentation, while subnets provide Layer 3 segmentation. A typical enterprise segments its network into zones: DMZ for public-facing servers, internal network for users, management network for infrastructure devices, and restricted network for sensitive data. This limits lateral movement during a breach — an attacker who compromises a workstation in the user subnet cannot directly reach the database subnet without passing through firewall controls.'
          }
        ],
        keyTakeaways: [
          'IPv4 addresses are 32-bit numbers and converting between binary and decimal is essential for subnetting',
          'CIDR notation provides flexible IP allocation, replacing the rigid classful system',
          'Subnetting creates smaller broadcast domains and enables network segmentation for security',
          'VLSM optimizes address usage by allowing variable subnet sizes within the same network',
          'Network segmentation using subnets and VLANs is a primary defense against lateral movement in breaches'
        ],
        practiceExercises: [
          'Given the network 172.16.0.0/16, subnet it to support 50 subnets with at least 500 hosts each — document the subnet mask, network addresses, broadcast addresses, and usable host ranges for the first five subnets',
          'Use the ipcalc command-line tool to verify your subnetting calculations for 10.0.0.0/8 divided into /20 subnets',
          'Design a network segmentation plan for a small company with four departments (HR, Engineering, Finance, IT), a DMZ, and a management network — assign appropriate subnet sizes using VLSM and document firewall rules between segments'
        ],
        resources: [
          { name: 'Subnetting Practice — Subnetting.org', url: 'https://subnetting.org/' },
          { name: 'CompTIA Network+ Certification All-in-One Exam Guide by Mike Meyers' },
          { name: 'ipcalc — IP Subnet Calculator', url: 'https://jodies.de/ipcalc' }
        ]
      },
      {
        title: 'DNS, DHCP & HTTP',
        duration: '3 hours',
        overview: 'This module explores three of the most critical application-layer protocols in modern networking. You will learn how DNS translates domain names to IP addresses, how DHCP automates network configuration, and how HTTP/HTTPS powers web communication. Understanding these protocols is essential for both network administration and identifying common attack vectors.',
        topics: [
          {
            heading: 'DNS Architecture and Resolution Process',
            detail: 'The Domain Name System (DNS) is a hierarchical, distributed database that translates human-readable domain names (e.g., www.example.com) into IP addresses. The resolution process involves recursive and iterative queries through a chain of servers: the client queries a recursive resolver (often provided by the ISP or services like 8.8.8.8), which contacts root servers, TLD (Top-Level Domain) servers (.com, .org, .net), and authoritative name servers to obtain the answer. DNS records include A (IPv4 address), AAAA (IPv6), MX (mail exchange), CNAME (canonical name alias), NS (name server), TXT (text, used for SPF/DKIM), and SOA (start of authority). Tools like nslookup, dig, and host are essential for DNS troubleshooting.'
          },
          {
            heading: 'DNS Security Threats and Defenses',
            detail: 'DNS is a frequent target for attackers due to its fundamental role in network communication. DNS cache poisoning (Kaminsky attack) involves injecting false records into a resolver\'s cache to redirect users to malicious sites. DNS tunneling uses DNS queries and responses to exfiltrate data or establish covert command-and-control channels, using tools like iodine or dnscat2. DNS amplification attacks exploit open resolvers to generate massive DDoS traffic. Defenses include DNSSEC (DNS Security Extensions) for authenticating DNS responses, DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) for encrypting queries, and monitoring for unusual DNS query patterns in SIEM tools like Splunk.'
          },
          {
            heading: 'DHCP Operation and the DORA Process',
            detail: 'DHCP (Dynamic Host Configuration Protocol) automates IP address assignment and network configuration for devices joining a network. The DORA process consists of four steps: Discover (client broadcasts a request for configuration), Offer (DHCP server proposes an IP address and parameters), Request (client formally requests the offered configuration), and Acknowledge (server confirms the lease). DHCP assigns IP addresses, subnet masks, default gateways, DNS servers, and lease durations. The DHCP lease lifecycle includes renewal (at 50% of lease time) and rebinding (at 87.5%). Understanding DHCP is essential for network troubleshooting and for recognizing attacks targeting this protocol.'
          },
          {
            heading: 'DHCP Attacks: Starvation and Rogue Servers',
            detail: 'DHCP starvation attacks exhaust all available IP addresses in a DHCP scope by sending massive numbers of DHCP Discover messages with spoofed MAC addresses, using tools like Yersinia or dhcpstarv. Once the legitimate pool is exhausted, the attacker can set up a rogue DHCP server that provides clients with malicious configuration — including a rogue default gateway or DNS server that routes traffic through the attacker for interception (man-in-the-middle). Defenses include DHCP snooping on managed switches (which validates DHCP messages and builds a binding table), port security to limit MAC addresses per port, and 802.1X network access control.'
          },
          {
            heading: 'HTTP/HTTPS Protocol Fundamentals',
            detail: 'HTTP (Hypertext Transfer Protocol) is a stateless, request-response protocol that powers the World Wide Web. Clients send requests with methods like GET (retrieve data), POST (submit data), PUT (update data), and DELETE (remove data), along with headers specifying content types, authentication tokens, cookies, and caching directives. Servers respond with status codes: 200 (OK), 301 (Moved Permanently), 403 (Forbidden), 404 (Not Found), and 500 (Internal Server Error). HTTPS adds TLS encryption, protecting data in transit from eavesdropping and tampering. Tools like curl, Postman, and browser developer tools (F12) are essential for inspecting HTTP transactions.'
          },
          {
            heading: 'TLS/SSL Handshake and Certificate Validation',
            detail: 'When a client connects via HTTPS, a TLS handshake establishes an encrypted channel. The process involves the client sending a ClientHello with supported cipher suites, the server responding with its certificate and chosen cipher suite, key exchange using algorithms like ECDHE (Elliptic Curve Diffie-Hellman Ephemeral), and derivation of symmetric session keys. The server\'s certificate is validated against trusted Certificate Authorities (CAs) stored in the browser or operating system. Common issues include expired certificates, self-signed certificates, and certificate chain problems. Tools like openssl s_client and testssl.sh help analyze TLS configurations and identify weaknesses like support for deprecated protocols (SSLv3, TLS 1.0).'
          }
        ],
        keyTakeaways: [
          'DNS is a hierarchical system that translates domain names to IP addresses and is a frequent attack target',
          'DHCP automates network configuration through the DORA process and can be exploited via starvation and rogue server attacks',
          'HTTP is a stateless request-response protocol; HTTPS adds TLS encryption for confidentiality and integrity',
          'DNSSEC, DHCP snooping, and proper TLS configuration are critical defenses for these protocols',
          'Tools like dig, Wireshark, curl, and openssl are essential for troubleshooting and security analysis of these protocols'
        ],
        practiceExercises: [
          'Use dig or nslookup to trace the full DNS resolution path for a domain — query root servers, TLD servers, and authoritative servers manually to understand iterative resolution',
          'Capture a DHCP DORA exchange in Wireshark by releasing and renewing your IP address (ipconfig /release && ipconfig /renew on Windows or sudo dhclient -r && sudo dhclient on Linux)',
          'Use curl -v to perform an HTTPS request and analyze the TLS handshake output — identify the TLS version, cipher suite, and certificate details'
        ],
        resources: [
          { name: 'DNS and BIND by Cricket Liu & Paul Albitz (O\'Reilly)' },
          { name: 'Mozilla HTTP Documentation (MDN Web Docs)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' },
          { name: 'testssl.sh — TLS/SSL Testing Tool', url: 'https://testssl.sh/' }
        ]
      },
      {
        title: 'Network Devices & Topologies',
        duration: '2.5 hours',
        overview: 'This module covers the hardware and logical structures that form network infrastructure. You will learn how switches, routers, firewalls, load balancers, and other devices operate, as well as how network topologies like star, mesh, and hybrid designs impact performance, reliability, and security.',
        topics: [
          {
            heading: 'Switches and Layer 2 Forwarding',
            detail: 'Network switches operate at Layer 2 (Data Link) and forward Ethernet frames based on MAC addresses stored in their Content Addressable Memory (CAM) table. When a frame arrives, the switch checks the destination MAC against the CAM table to determine the correct egress port, providing microsecond-level switching decisions. Managed switches support VLANs (Virtual LANs) for traffic segmentation, Spanning Tree Protocol (STP) for loop prevention, and port security features. Unmanaged switches offer plug-and-play connectivity without configuration options. Layer 3 switches combine switching and routing capabilities, making forwarding decisions based on both MAC and IP addresses. Understanding switch operation is essential for troubleshooting and securing local networks.'
          },
          {
            heading: 'Routers and Layer 3 Forwarding',
            detail: 'Routers operate at Layer 3 (Network) and forward packets between different networks based on destination IP addresses and routing tables. Routing decisions use static routes (manually configured) or dynamic routing protocols: RIP (distance-vector, hop count metric), OSPF (link-state, cost metric based on bandwidth), and BGP (path-vector, used for inter-AS routing on the internet). Routers perform NAT (Network Address Translation) to map private IP addresses to public addresses, enabling internet connectivity for internal networks. Access Control Lists (ACLs) on routers filter traffic based on source/destination IP, port numbers, and protocols. Router misconfigurations are a common source of network outages and security vulnerabilities.'
          },
          {
            heading: 'Firewalls: Packet Filtering, Stateful, and Next-Generation',
            detail: 'Firewalls control network traffic based on predefined security rules. Packet filtering firewalls inspect individual packets based on IP addresses, ports, and protocols (Layer 3-4). Stateful firewalls track active connections and make decisions based on connection state — a response packet is only allowed if an outbound request was first seen. Next-Generation Firewalls (NGFWs) add deep packet inspection (DPI), application awareness (identifying applications regardless of port), intrusion prevention (IPS), TLS inspection, and threat intelligence integration. Common firewalls include pfSense (open-source), iptables/nftables (Linux), Windows Defender Firewall, and enterprise solutions from Palo Alto Networks, Fortinet, and Cisco.'
          },
          {
            heading: 'Additional Network Devices: Load Balancers, Proxies, and IDS/IPS',
            detail: 'Load balancers distribute incoming traffic across multiple servers to ensure availability and performance, using algorithms like round-robin, least connections, or IP hash. Reverse proxies (like Nginx or HAProxy) sit in front of web servers to handle TLS termination, caching, and request routing. Forward proxies (like Squid) mediate client requests to the internet for content filtering and caching. Intrusion Detection Systems (IDS) like Snort or Suricata passively monitor traffic for malicious patterns, while Intrusion Prevention Systems (IPS) actively block detected threats inline. Network Access Control (NAC) solutions enforce security policies before granting devices network access through 802.1X authentication.'
          },
          {
            heading: 'Network Topologies: Star, Mesh, Ring, Bus, and Hybrid',
            detail: 'Network topology defines how devices are interconnected. Star topology connects all devices to a central switch or hub — it is the most common LAN topology offering easy management but creating a single point of failure at the central device. Full mesh topology provides redundant connections between every device pair, maximizing reliability but at high cost — common in WAN backbone designs. Partial mesh balances redundancy and cost. Ring topology passes data in one direction through each node, used in legacy Token Ring and modern fiber optic rings (SONET/SDH). Bus topology uses a single shared cable — largely obsolete. Hybrid topologies combine elements, such as a star-mesh design with star topology within offices and mesh connectivity between sites.'
          },
          {
            heading: 'Network Architecture: DMZ, Three-Tier, and Zero Trust',
            detail: 'Enterprise networks use architectural patterns to organize security zones. A DMZ (Demilitarized Zone) places public-facing services (web servers, email gateways) between two firewalls — an external firewall facing the internet and an internal firewall protecting the private network. Three-tier architecture separates networks into access (user devices), distribution (policy enforcement and routing), and core (high-speed backbone) layers. Zero Trust Architecture (ZTA) abandons the perimeter-based model entirely, requiring authentication and authorization for every access request regardless of network location — implementing the principle of "never trust, always verify" as outlined in NIST SP 800-207.'
          }
        ],
        keyTakeaways: [
          'Switches forward frames using MAC addresses (Layer 2), routers forward packets using IP addresses (Layer 3)',
          'Firewalls have evolved from basic packet filtering to next-generation firewalls with deep packet inspection and application awareness',
          'Network topology choices impact performance, redundancy, and security posture',
          'DMZ architecture isolates public-facing services, while Zero Trust eliminates implicit trust based on network location',
          'Understanding device roles and placement is essential for designing secure network architectures'
        ],
        practiceExercises: [
          'Set up a virtual network lab using GNS3 or Packet Tracer with a router, two switches, and four hosts — configure VLANs and inter-VLAN routing to demonstrate network segmentation',
          'Configure basic iptables or nftables rules on a Linux machine to allow only SSH (port 22) and HTTP (port 80) traffic while blocking everything else — test with Nmap',
          'Design a network diagram for a small business with a DMZ containing a web server, an internal network with two VLANs (staff and management), and appropriate firewall rules between zones'
        ],
        resources: [
          { name: 'Cisco Packet Tracer (Free Network Simulator)', url: 'https://www.netacad.com/courses/packet-tracer' },
          { name: 'GNS3 Network Emulator', url: 'https://www.gns3.com/' },
          { name: 'NIST SP 800-207: Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
        ]
      },
      {
        title: 'Wireless Networking Basics',
        duration: '2.5 hours',
        overview: 'Wireless networks are ubiquitous in both home and enterprise environments, making them a critical area of study for cybersecurity professionals. This module covers Wi-Fi standards, authentication methods, encryption protocols, common wireless attacks, and defense strategies to secure wireless infrastructure.',
        topics: [
          {
            heading: 'Wi-Fi Standards: 802.11a/b/g/n/ac/ax',
            detail: 'The IEEE 802.11 family defines wireless LAN standards. 802.11b (1999, 2.4 GHz, 11 Mbps) and 802.11g (2003, 2.4 GHz, 54 Mbps) are legacy standards still found in older devices. 802.11n (Wi-Fi 4, 2009) introduced MIMO (Multiple Input Multiple Output) antennas and dual-band operation (2.4/5 GHz) reaching 600 Mbps. 802.11ac (Wi-Fi 5, 2013) operates on 5 GHz only with wider channels and MU-MIMO for up to 6.9 Gbps theoretical throughput. 802.11ax (Wi-Fi 6/6E, 2019) adds OFDMA, BSS Coloring, and Target Wake Time for better performance in dense environments, extending to the 6 GHz band. Understanding these standards helps assess network capabilities, plan deployments, and identify legacy devices that may weaken security.'
          },
          {
            heading: 'Wireless Security Protocols: WEP, WPA, WPA2, and WPA3',
            detail: 'WEP (Wired Equivalent Privacy) was the original wireless security protocol using RC4 encryption with static keys — it is fatally flawed and can be cracked in minutes using tools like aircrack-ng. WPA (Wi-Fi Protected Access) introduced TKIP (Temporal Key Integrity Protocol) as an interim improvement. WPA2 (2004) replaced TKIP with AES-CCMP encryption and remains widely deployed. WPA2-Personal uses a Pre-Shared Key (PSK), while WPA2-Enterprise uses 802.1X with a RADIUS server for individual authentication. WPA3 (2018) introduces SAE (Simultaneous Authentication of Equals) to protect against offline dictionary attacks, individualized data encryption in open networks (OWE), and 192-bit security for enterprise. Always configure WPA2 or WPA3; never use WEP or WPA with TKIP.'
          },
          {
            heading: 'Wireless Network Architecture and Components',
            detail: 'Wireless networks consist of access points (APs), wireless controllers, and client devices (stations). In autonomous AP deployments, each AP is independently configured. In controller-based architectures (using Cisco WLC, Aruba, or UniFi controllers), lightweight APs are centrally managed for consistent policy enforcement, seamless roaming, and simplified management. Enterprise wireless deployments use site surveys (with tools like Ekahau or Acrylic Wi-Fi) to optimize AP placement, channel assignment, and signal coverage. SSIDs (Service Set Identifiers) identify wireless networks, and BSSIDs (MAC addresses of APs) uniquely identify each access point. Understanding these components is essential for securing and troubleshooting wireless infrastructure.'
          },
          {
            heading: 'Common Wireless Attacks',
            detail: 'Wireless networks are vulnerable to numerous attacks. Evil twin attacks involve setting up a rogue AP with the same SSID as a legitimate network to intercept client traffic — tools like hostapd and wifiphisher automate this. Deauthentication attacks send forged deauth frames to disconnect clients from an AP, forcing reconnection to a rogue AP or capturing WPA handshakes — performed with aireplay-ng. WPA2-PSK cracking captures the four-way handshake and uses dictionary or brute-force attacks with hashcat or aircrack-ng against the PSK. KRACK (Key Reinstallation Attack) exploited a vulnerability in the WPA2 four-way handshake process. Wardriving involves scanning for wireless networks from a vehicle using tools like Kismet or WiFi Analyzer.'
          },
          {
            heading: 'Securing Wireless Networks',
            detail: 'Comprehensive wireless security requires multiple layers of defense. Use WPA3 or WPA2-Enterprise with 802.1X authentication and strong EAP methods (EAP-TLS with certificates is the gold standard). Implement a WIDS/WIPS (Wireless Intrusion Detection/Prevention System) to detect rogue APs and deauthentication attacks. Segment wireless traffic using VLANs — guest, corporate, and IoT devices should be on separate VLANs with firewall policies between them. Disable WPS (Wi-Fi Protected Setup) as it has known vulnerabilities. Use strong, unique PSKs (at least 20 characters with mixed character types) and rotate them regularly. Conduct periodic wireless security assessments using tools like Aircrack-ng suite, Wireshark with wireless capture capabilities, and Kismet for rogue AP detection.'
          }
        ],
        keyTakeaways: [
          'Wi-Fi standards have evolved from 802.11b (11 Mbps) to Wi-Fi 6 (multi-gigabit) with improvements in speed, capacity, and security',
          'WPA3 is the current recommended security protocol; WEP and WPA-TKIP are broken and must never be used',
          'Evil twin, deauthentication, and PSK cracking are the most common wireless attacks',
          'Enterprise wireless security requires 802.1X authentication, VLAN segmentation, and wireless intrusion prevention',
          'Regular wireless security assessments and proper AP placement through site surveys are essential for maintaining a secure wireless environment'
        ],
        practiceExercises: [
          'Use Wireshark in monitor mode (or a dedicated wireless adapter) to capture beacon frames from nearby APs — identify the SSID, BSSID, channel, and security protocol for each network',
          'Set up a lab environment and practice capturing a WPA2 four-way handshake using airodump-ng, then attempt to crack a weak PSK using aircrack-ng with a wordlist (use only on networks you own)',
          'Configure a wireless access point with WPA2-Enterprise authentication using a FreeRADIUS server and EAP-PEAP — document the configuration steps and test client connectivity'
        ],
        resources: [
          { name: 'Aircrack-ng Documentation and Tutorials', url: 'https://www.aircrack-ng.org/doku.php' },
          { name: 'Hacking Exposed Wireless by Joshua Wright & Johnny Cache' },
          { name: 'WiFi Alliance — Security Resources', url: 'https://www.wi-fi.org/discover-wi-fi/security' }
        ]
      }
    ]
  },
  {
    id: 'os-basics',
    tier: 'beginner',
    title: 'Operating Systems Basics (Windows & Linux)',
    description: 'A dual-track course covering both Windows and Linux operating systems from a cybersecurity perspective. You will gain hands-on proficiency with the command line, file system management, user permissions, process control, and system logging on both platforms — essential skills for any cybersecurity role from SOC analyst to penetration tester.',
    objectives: [
      'Navigate and manage both Windows and Linux operating systems confidently',
      'Use command-line interfaces including CMD, PowerShell, and Bash for system administration',
      'Configure and troubleshoot file system permissions on NTFS and Linux ext4/xfs',
      'Manage processes, services, and scheduled tasks on both platforms',
      'Understand system logging mechanisms and their role in security monitoring',
      'Apply operating system hardening best practices following CIS Benchmarks'
    ],
    estimatedHours: 25,
    prerequisites: [],
    modules: [
      {
        title: 'Windows Fundamentals',
        duration: '3.5 hours',
        overview: 'This module introduces the Windows operating system architecture, core components, and management tools essential for cybersecurity professionals. You will learn how Windows organizes its kernel, user space, registry, and security subsystems, providing the foundation for understanding Windows-based attacks and defenses.',
        topics: [
          {
            heading: 'Windows Architecture: Kernel Mode vs. User Mode',
            detail: 'Windows separates operations into kernel mode (Ring 0) and user mode (Ring 3) for stability and security. The kernel mode includes the Windows NT kernel (ntoskrnl.exe), the Hardware Abstraction Layer (HAL), and device drivers that have direct hardware access. User mode runs applications through subsystem processes like csrss.exe and environment subsystems. This separation prevents user applications from directly accessing hardware or corrupting kernel memory. Understanding this architecture is crucial for malware analysis — kernel-mode rootkits operate at Ring 0 to hide from user-mode security tools, while most applications and malware run in user mode.'
          },
          {
            heading: 'Windows Registry Deep Dive',
            detail: 'The Windows Registry is a hierarchical database storing system configuration, user preferences, and application settings. Key hives include HKEY_LOCAL_MACHINE (system-wide settings), HKEY_CURRENT_USER (current user settings), HKEY_CLASSES_ROOT (file associations), and HKEY_USERS (all user profiles). Critical security locations include Run/RunOnce keys (HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run) where malware achieves persistence, and the SAM hive (HKLM\\SAM) storing local account password hashes. Tools like regedit (GUI) and reg.exe (CLI) manage registry entries. In forensics, registry analysis using tools like Registry Explorer reveals user activity, installed software, and malware artifacts.'
          },
          {
            heading: 'User Account Management and UAC',
            detail: 'Windows implements a local security accounts database (SAM) and integrates with Active Directory for domain environments. Account types include Administrator (full system access), Standard User (limited privileges), and built-in accounts like SYSTEM (highest privilege), Local Service, and Network Service. User Account Control (UAC) prompts for elevation when standard users attempt privileged operations, reducing the risk of unauthorized changes. Security best practices include disabling the built-in Administrator account, renaming it if active, enforcing strong password policies via Local Security Policy (secpol.msc), and implementing the principle of least privilege. The net user and net localgroup commands manage accounts from the command line.'
          },
          {
            heading: 'Windows Security Features: Defender, Firewall, and BitLocker',
            detail: 'Modern Windows includes built-in security tools that provide layered defense. Windows Defender Antivirus offers real-time protection, cloud-delivered protection, and controlled folder access for ransomware mitigation. Windows Defender Firewall (wf.msc) provides inbound/outbound traffic filtering with advanced rules supporting application-level filtering. BitLocker provides full-disk encryption using AES-128 or AES-256, with key storage in a TPM (Trusted Platform Module) chip. Windows also includes Credential Guard (using virtualization-based security to protect LSASS), AppLocker for application whitelisting, and Windows Sandbox for testing untrusted software. These features form the baseline defense that CIS Benchmarks recommend configuring properly.'
          },
          {
            heading: 'Essential Windows Administration Tools',
            detail: 'Effective Windows administration requires familiarity with key management consoles. Task Manager (taskmgr.exe) monitors processes, performance, and startup programs. Computer Management (compmgmt.msc) consolidates user management, disk management, device manager, and event viewer. Group Policy Editor (gpedit.msc) configures security policies, software restrictions, and audit settings. Services console (services.msc) manages Windows services and their startup types. Resource Monitor (resmon.exe) provides detailed CPU, memory, disk, and network utilization per process. Performance Monitor (perfmon.exe) creates custom performance counters and data collector sets for baseline monitoring. Mastering these tools is essential for incident response and system hardening.'
          },
          {
            heading: 'Windows Update and Patch Management',
            detail: 'Keeping Windows patched is one of the most critical security practices. Microsoft releases security updates on Patch Tuesday (second Tuesday of each month), with out-of-band patches for critical zero-day vulnerabilities. Windows Update (wuapp) handles consumer updates, while enterprise environments use Windows Server Update Services (WSUS) or Microsoft Endpoint Configuration Manager (MECM/SCCM) for centralized patch deployment. Each update is identified by a KB (Knowledge Base) number and can be managed via the wusa.exe command-line tool. Vulnerability databases like CVE and Microsoft\'s Security Update Guide help administrators prioritize patches based on severity (Critical, Important, Moderate, Low). Unpatched systems are the most common entry point for attackers.'
          }
        ],
        keyTakeaways: [
          'Windows separates kernel mode (Ring 0) and user mode (Ring 3) to protect system integrity',
          'The Windows Registry is a critical data source for both system administration and forensic investigation',
          'UAC, Windows Defender, BitLocker, and Credential Guard provide layered built-in security',
          'Management consoles like Task Manager, Event Viewer, and Group Policy Editor are essential for administration and incident response',
          'Patch management is the single most impactful security measure for Windows environments'
        ],
        practiceExercises: [
          'Navigate the Windows Registry to find all programs configured to run at startup (check Run, RunOnce, and Startup folders) — document each entry and research whether it is legitimate',
          'Use the Local Security Policy (secpol.msc) to configure a password policy requiring 12+ characters, complexity, and 90-day maximum age, then verify the settings with net accounts',
          'Enable and configure Windows Defender Firewall to block all inbound connections except RDP (port 3389) from a specific IP range — test the rules using telnet or Test-NetConnection'
        ],
        resources: [
          { name: 'Windows Internals by Mark Russinovich, David Solomon, and Alex Ionescu' },
          { name: 'CIS Microsoft Windows Benchmarks', url: 'https://www.cisecurity.org/benchmark/microsoft_windows_desktop' },
          { name: 'Microsoft Security Documentation', url: 'https://learn.microsoft.com/en-us/security/' }
        ]
      },
      {
        title: 'Windows Command Line & PowerShell',
        duration: '3.5 hours',
        overview: 'Command-line proficiency is essential for cybersecurity professionals working in Windows environments. This module covers the traditional Command Prompt (CMD) and the powerful PowerShell scripting environment, teaching you to perform system administration, forensic triage, and security automation tasks efficiently.',
        topics: [
          {
            heading: 'CMD Essentials for Security Professionals',
            detail: 'The Windows Command Prompt (cmd.exe) provides direct access to system commands essential for troubleshooting and incident response. Key networking commands include ipconfig /all (network configuration), netstat -ano (active connections with PIDs), nslookup (DNS queries), tracert (route tracing), and arp -a (ARP cache). System commands include systeminfo (OS details, patches, and hotfixes), tasklist (running processes), taskkill /PID (terminate processes), wmic (Windows Management Instrumentation queries), and schtasks (scheduled task management). File operations include dir, copy, move, del, attrib (file attributes), and icacls (permissions). During incident response, commands like netstat -ano reveal suspicious network connections, and tasklist /svc shows which services are running under each process.'
          },
          {
            heading: 'Introduction to PowerShell',
            detail: 'PowerShell is a task-based command-line shell and scripting language built on the .NET framework. Unlike CMD which outputs text, PowerShell outputs objects with properties and methods, enabling powerful data manipulation. The cmdlet naming convention follows Verb-Noun patterns: Get-Process, Stop-Service, Set-ExecutionPolicy, New-Item. The pipeline (|) passes objects between cmdlets: Get-Process | Where-Object {$_.CPU -gt 100} | Sort-Object CPU -Descending filters and sorts processes by CPU usage. PowerShell supports aliases (ls, dir, cat all work), variables ($variable = "value"), and automatic variables like $PSVersionTable and $env:USERNAME. PowerShell is the primary tool for Windows automation, Active Directory management, and increasingly, for both offensive (PowerShell Empire, PowerSploit) and defensive (threat hunting, log analysis) cybersecurity operations.'
          },
          {
            heading: 'PowerShell for System Administration',
            detail: 'PowerShell provides comprehensive system administration capabilities. Get-Service lists all services and their states; Start-Service and Stop-Service manage them. Get-EventLog or Get-WinEvent queries Windows Event Logs for security monitoring. Get-LocalUser and Get-LocalGroup manage user accounts. Get-ChildItem -Recurse searches file systems, while Get-Content reads file contents. Test-NetConnection replaces telnet for connectivity testing. Invoke-WebRequest retrieves web content. Get-HotFix lists installed patches. Get-WmiObject (or Get-CimInstance in PowerShell 5+) queries system hardware, software, and configuration. Remote management via Enter-PSSession and Invoke-Command enables executing commands on remote systems using WinRM (Windows Remote Management), which is essential for managing enterprise environments.'
          },
          {
            heading: 'PowerShell Scripting Fundamentals',
            detail: 'PowerShell scripts (.ps1 files) enable automation of complex tasks. Execution policies (Restricted, AllSigned, RemoteSigned, Unrestricted, Bypass) control which scripts can run — check with Get-ExecutionPolicy and set with Set-ExecutionPolicy. Scripts support variables, arrays, hash tables, conditional logic (if/elseif/else), loops (foreach, while, for), functions, and error handling (try/catch/finally). A basic security script might enumerate running processes, check for unsigned executables, and export results to CSV: Get-Process | Select-Object Name, Path, Company | Where-Object {$_.Company -eq $null} | Export-Csv -Path "unsigned_processes.csv". PowerShell profiles ($PROFILE) customize the shell environment and can be exploited for persistence by attackers.'
          },
          {
            heading: 'PowerShell for Security Operations',
            detail: 'PowerShell is invaluable for security monitoring and incident response. Querying security logs: Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4625} retrieves failed login attempts (Event ID 4625). Checking for persistence mechanisms: Get-ItemProperty "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" lists auto-start programs. Network analysis: Get-NetTCPConnection | Where-Object {$_.State -eq "Established"} shows active connections. File integrity monitoring: Get-FileHash -Algorithm SHA256 computes file hashes for comparison. PowerShell also integrates with Windows Defender: Get-MpThreatDetection lists detected threats, and Start-MpScan initiates scans. However, PowerShell is also heavily used by attackers — techniques like Invoke-Expression (IEX), encoded commands (-EncodedCommand), and AMSI bypass make PowerShell a double-edged sword. PowerShell logging (Script Block Logging, Module Logging, and Transcription) should always be enabled for detection.'
          },
          {
            heading: 'WMIC and System Information Gathering',
            detail: 'Windows Management Instrumentation Command-line (WMIC) provides a powerful interface for system querying and management. Key WMIC commands include: wmic process list brief (running processes), wmic startup list full (startup programs), wmic service list config (service configurations), wmic useraccount list full (user accounts), wmic qfe list (installed updates), and wmic logicaldisk get size,freespace,caption (disk information). WMIC can query remote systems: wmic /node:"192.168.1.10" process list brief. While Microsoft is deprecating WMIC in favor of PowerShell CIM cmdlets (Get-CimInstance), WMIC remains available on older systems and is frequently used during incident response for rapid system enumeration. The equivalent PowerShell commands using Get-CimInstance -ClassName Win32_Process provide the same data with richer object manipulation.'
          }
        ],
        keyTakeaways: [
          'CMD commands like netstat, tasklist, and systeminfo are essential for rapid incident response triage',
          'PowerShell outputs objects (not text), enabling powerful filtering, sorting, and data manipulation through the pipeline',
          'PowerShell remoting (WinRM) enables centralized management of enterprise Windows environments',
          'PowerShell is used by both defenders (log analysis, threat hunting) and attackers (post-exploitation, persistence)',
          'Enabling PowerShell Script Block Logging and Transcription is critical for detecting malicious PowerShell activity'
        ],
        practiceExercises: [
          'Write a PowerShell script that collects system information (hostname, OS version, IP addresses, logged-in users, running services, and installed hotfixes) and exports it to a formatted HTML report',
          'Use PowerShell to query the Security event log for Event ID 4624 (successful logons) and 4625 (failed logons) from the past 24 hours — group results by username and count occurrences',
          'Create a PowerShell script that scans all running processes, checks their file paths, computes SHA256 hashes, and flags any processes running from temporary directories or without a digital signature'
        ],
        resources: [
          { name: 'Learn PowerShell in a Month of Lunches by Don Jones and Jeffrey Hicks' },
          { name: 'PowerShell Documentation', url: 'https://learn.microsoft.com/en-us/powershell/' },
          { name: 'SANS PowerShell Cheat Sheet', url: 'https://www.sans.org/blog/sans-powershell-cheat-sheet/' }
        ]
      },
      {
        title: 'Linux Fundamentals',
        duration: '3.5 hours',
        overview: 'Linux powers the majority of servers, cloud infrastructure, and cybersecurity tools worldwide. This module introduces Linux distributions, architecture, the file system hierarchy, package management, and essential system administration concepts that every cybersecurity professional must understand.',
        topics: [
          {
            heading: 'Linux Distributions and Their Security Use Cases',
            detail: 'Linux comes in hundreds of distributions (distros), each tailored for specific use cases. Ubuntu and Debian are popular general-purpose server and desktop distros with extensive package repositories. CentOS/Rocky Linux and RHEL (Red Hat Enterprise Linux) dominate enterprise server environments. Kali Linux is the premier penetration testing distribution, preloaded with tools like Nmap, Burp Suite, Metasploit, John the Ripper, and Aircrack-ng. Parrot OS offers similar security tools with a focus on privacy. SIFT Workstation (SANS Investigative Forensic Toolkit) is purpose-built for digital forensics. Security Onion provides a complete network security monitoring suite with Suricata, Zeek, and Elasticsearch. Choosing the right distro depends on your role — a SOC analyst might use Security Onion, while a pentester uses Kali.'
          },
          {
            heading: 'Linux Architecture: Kernel, Shell, and User Space',
            detail: 'Linux architecture consists of the hardware layer, the kernel (managing CPU scheduling, memory management, device drivers, and system calls), system libraries (glibc providing the interface between applications and the kernel), and user space applications. The shell (Bash, Zsh, Fish) provides the command-line interface for interacting with the system. The kernel communicates with hardware through device drivers and exposes information through the /proc and /sys virtual filesystems — for example, /proc/cpuinfo shows CPU details and /proc/meminfo shows memory usage. Understanding this architecture helps with kernel module analysis (detecting rootkits), system call tracing (using strace), and performance troubleshooting.'
          },
          {
            heading: 'Linux File System Hierarchy Standard (FHS)',
            detail: 'Linux organizes files following the Filesystem Hierarchy Standard. Key directories include: / (root of the filesystem), /bin and /sbin (essential user and system binaries), /etc (system configuration files — a prime target for attackers), /home (user home directories), /var (variable data including logs in /var/log), /tmp (temporary files, world-writable — common malware staging area), /opt (optional software), /usr (user programs and libraries), /dev (device files), /proc (process and kernel information as virtual files), and /root (root user\'s home directory). Security-relevant files include /etc/passwd (user accounts), /etc/shadow (hashed passwords), /etc/sudoers (sudo privileges), and /etc/ssh/sshd_config (SSH server configuration). Knowing where critical files reside is essential for both system administration and forensic investigation.'
          },
          {
            heading: 'Package Management: APT, YUM/DNF, and Compilation',
            detail: 'Linux distributions use package managers to install, update, and remove software. Debian-based systems (Ubuntu, Kali) use APT: apt update (refresh repositories), apt upgrade (update all packages), apt install <package> (install software), and apt remove (uninstall). RHEL-based systems (CentOS, Rocky Linux) use YUM or DNF: dnf install, dnf update, dnf remove. Package managers resolve dependencies automatically and verify package integrity using GPG signatures. For software not in repositories, you may compile from source (./configure, make, make install) or use language-specific managers like pip (Python) or npm (Node.js). Keeping packages updated is critical — unpatched software is the leading cause of Linux server compromises. Tools like unattended-upgrades automate security updates.'
          },
          {
            heading: 'User and Group Management',
            detail: 'Linux is a multi-user system with robust access control. The useradd command creates users (useradd -m -s /bin/bash username), usermod modifies them, and userdel removes them. Groups organize users for permission management: groupadd, usermod -aG <group> <user>. The /etc/passwd file contains user account information (username, UID, GID, home directory, shell), while /etc/shadow stores password hashes (using algorithms like SHA-512 identified by $6$ prefix). The root account (UID 0) has unrestricted access. The sudo mechanism (/etc/sudoers, edited with visudo) grants specific users elevated privileges for specific commands. Best practices include disabling root login via SSH, using sudo instead of su, implementing strong password policies with PAM modules, and auditing sudo usage through /var/log/auth.log.'
          },
          {
            heading: 'Essential Linux Networking Commands',
            detail: 'Linux provides powerful networking tools. ip addr show (or ifconfig on older systems) displays network interface configuration. ip route show displays the routing table. ss -tulnp (replacing netstat) shows listening ports and associated processes. ping and traceroute test connectivity and path. nmap performs network scanning and service detection. tcpdump captures network traffic from the command line (tcpdump -i eth0 -w capture.pcap). curl and wget retrieve web content and test HTTP services. dig performs DNS lookups. iptables (or nftables) configures the Linux firewall. ssh enables secure remote access. These commands are fundamental for network troubleshooting, security monitoring, and penetration testing — most cybersecurity tools run on Linux, making CLI proficiency non-negotiable.'
          }
        ],
        keyTakeaways: [
          'Different Linux distributions serve different security roles — Kali for pentesting, Security Onion for monitoring, SIFT for forensics',
          'The Linux FHS defines where critical system files, configurations, and logs are stored',
          'Package managers (APT, DNF) handle software installation and updates with dependency resolution and integrity verification',
          'User and group management with proper sudo configuration is essential for the principle of least privilege',
          'Linux CLI networking tools (ss, tcpdump, nmap, iptables) are fundamental for cybersecurity operations'
        ],
        practiceExercises: [
          'Install a Linux distribution (Ubuntu Server or Kali) in a virtual machine — explore the file system hierarchy and document the purpose of each major directory',
          'Create three users and two groups on a Linux system — assign users to groups, configure sudo access for one user to run only specific commands, and verify the configuration',
          'Use tcpdump to capture 2 minutes of network traffic, save it to a pcap file, then open it in Wireshark to identify the top 10 talkers and most common protocols'
        ],
        resources: [
          { name: 'The Linux Command Line by William Shotts (free online)', url: 'https://linuxcommand.org/tlcl.php' },
          { name: 'Linux Journey — Interactive Linux Learning', url: 'https://linuxjourney.com/' },
          { name: 'OverTheWire Bandit Wargame (Linux CLI Practice)', url: 'https://overthewire.org/wargames/bandit/' }
        ]
      },
      {
        title: 'Linux Terminal Mastery',
        duration: '4 hours',
        overview: 'This module elevates your Linux command-line skills from basic navigation to advanced text processing, scripting, and automation. Mastering the terminal is essential for cybersecurity professionals who need to analyze logs, process data, and automate security tasks efficiently in environments where GUI tools are unavailable.',
        topics: [
          {
            heading: 'Advanced File Operations and Navigation',
            detail: 'Beyond basic commands, Linux provides powerful tools for file management. The find command searches for files by name, type, size, modification time, and permissions: find / -name "*.log" -mtime -7 -type f finds all log files modified in the last 7 days. locate uses a pre-built database for faster searches (update with updatedb). which and whereis locate executable paths. ln creates hard and symbolic links. rsync synchronizes files locally or remotely with incremental transfer. tar creates archives (tar -czf archive.tar.gz directory/), while gzip, bzip2, and xz provide compression. The dd command creates disk images (dd if=/dev/sda of=disk.img bs=4M) — essential for forensic imaging. Understanding these tools enables efficient file management, evidence collection, and data processing.'
          },
          {
            heading: 'Text Processing: grep, sed, awk, and Regular Expressions',
            detail: 'Text processing tools are indispensable for log analysis and data extraction. grep searches text using patterns: grep -ri "failed password" /var/log/auth.log finds failed SSH login attempts case-insensitively and recursively. Regular expressions (regex) enable complex pattern matching: grep -E "([0-9]{1,3}\\.){3}[0-9]{1,3}" extracts IP addresses. sed (stream editor) performs text transformations: sed \'s/old/new/g\' replaces text inline. awk is a pattern-scanning language: awk \'{print $1, $4}\' /var/log/auth.log extracts specific columns from log entries. Combining these with pipes creates powerful analysis chains: cat access.log | awk \'{print $1}\' | sort | uniq -c | sort -rn | head -20 shows the top 20 IP addresses by request count. These skills are essential for SOC analysts and incident responders processing large volumes of log data.'
          },
          {
            heading: 'Input/Output Redirection and Pipes',
            detail: 'Linux uses three standard streams: stdin (0), stdout (1), and stderr (2). Redirection operators control where output goes: > writes stdout to a file (overwriting), >> appends, 2> redirects stderr, and &> redirects both. The pipe operator (|) chains commands by sending one command\'s stdout to the next command\'s stdin. tee writes output to both a file and stdout simultaneously. Here documents (<<EOF) provide inline input. Process substitution (<(command)) treats command output as a file. Examples: nmap -sV 192.168.1.0/24 2>&1 | tee scan_results.txt captures both output streams while displaying results. Understanding I/O redirection is fundamental for building complex command pipelines and automating analysis workflows.'
          },
          {
            heading: 'Bash Scripting for Security Automation',
            detail: 'Bash scripts automate repetitive tasks and create custom security tools. Scripts start with a shebang (#!/bin/bash) and support variables, conditionals (if/elif/else/fi), loops (for, while, until), functions, arrays, and command substitution ($(command)). A basic host discovery script might iterate through an IP range: for i in $(seq 1 254); do ping -c 1 -W 1 192.168.1.$i &>/dev/null && echo "192.168.1.$i is alive"; done. Exit codes ($?) indicate success (0) or failure (non-zero). Useful constructs include reading files line-by-line (while IFS= read -r line; do ... done < file), parsing command output, and handling arguments ($1, $2, $@). Script security requires proper quoting to prevent injection, avoiding running with unnecessary privileges, and validating all input.'
          },
          {
            heading: 'Job Control, Cron, and Task Scheduling',
            detail: 'Linux provides robust job control and scheduling. Background processes run with & (command &), Ctrl+Z suspends a foreground process, bg resumes it in the background, and fg brings it to the foreground. jobs lists current jobs, and nohup prevents jobs from terminating when the shell exits. screen and tmux create persistent terminal sessions that survive disconnections — essential for long-running security scans. Cron schedules recurring tasks using crontab -e with the format: minute hour day month weekday command. A security-relevant cron job might run a daily log analysis script: 0 2 * * * /opt/scripts/analyze_logs.sh >> /var/log/analysis.log 2>&1. Attackers frequently use cron for persistence, making crontab review (/var/spool/cron/ and /etc/cron.*) a standard part of incident response.'
          },
          {
            heading: 'SSH and Remote System Administration',
            detail: 'SSH (Secure Shell) is the standard protocol for secure remote access to Linux systems. Basic usage: ssh user@hostname connects to a remote host. Key-based authentication (ssh-keygen to generate keys, ssh-copy-id to deploy public keys) is more secure than password authentication and should be the standard. SSH configuration in /etc/ssh/sshd_config allows hardening: disable root login (PermitRootLogin no), disable password authentication (PasswordAuthentication no), change the default port, and limit allowed users (AllowUsers). SCP (scp file user@host:/path) and SFTP transfer files securely. SSH tunneling creates encrypted tunnels: local port forwarding (ssh -L 8080:internal:80 bastion) accesses internal services through a bastion host, and dynamic port forwarding (ssh -D 1080 host) creates a SOCKS proxy. SSH agent forwarding and ProxyJump (-J) simplify multi-hop access.'
          }
        ],
        keyTakeaways: [
          'find, grep, sed, and awk are essential for searching files, analyzing logs, and extracting data from the command line',
          'I/O redirection and pipes enable powerful command chaining for complex analysis workflows',
          'Bash scripting automates security tasks from host discovery to log analysis and system hardening',
          'Cron jobs schedule recurring tasks and are a common persistence mechanism for attackers',
          'SSH key-based authentication, configuration hardening, and tunneling are critical for secure remote administration'
        ],
        practiceExercises: [
          'Write a Bash script that analyzes /var/log/auth.log (or /var/log/secure) to extract all unique IP addresses with failed SSH login attempts, count attempts per IP, and block any IP with more than 10 failures using iptables',
          'Create a cron job that runs every 6 hours to check for new SUID/SGID files on the system (find / -perm -4000 -o -perm -2000), compare against a known-good baseline, and email alerts for any changes',
          'Set up SSH key-based authentication between two Linux VMs, harden the SSH configuration following CIS Benchmarks, and create an SSH tunnel to access a web service on the remote machine through a forwarded port'
        ],
        resources: [
          { name: 'Linux Bible by Christopher Negus' },
          { name: 'OverTheWire Wargames (Bandit, Leviathan, Natas)', url: 'https://overthewire.org/wargames/' },
          { name: 'Bash Scripting Guide (TLDP)', url: 'https://tldp.org/LDP/abs/html/' }
        ]
      },
      {
        title: 'File Systems & Permissions',
        duration: '3.5 hours',
        overview: 'File systems and permissions are the gatekeepers of data security on any operating system. This module covers how Windows NTFS and Linux file systems manage data storage, access control, and integrity, providing the knowledge needed to properly secure files, detect unauthorized access, and perform forensic analysis.',
        topics: [
          {
            heading: 'NTFS File System Architecture',
            detail: 'NTFS (New Technology File System) is the primary file system for modern Windows. It uses a Master File Table (MFT) that stores metadata for every file and directory as records. Key NTFS features include support for files up to 16 EB, journaling for crash recovery (the $LogFile tracks changes), Alternate Data Streams (ADS) that allow hidden data attached to files (detected with dir /R or streams.exe from Sysinternals), and the $Bitmap file tracking cluster allocation. NTFS timestamps include Created, Modified, Accessed, and MFT Entry Modified (MACE) — critical for forensic timeline analysis. Understanding NTFS internals helps with data recovery, forensic investigation using tools like FTK Imager or Autopsy, and detecting malware that hides in ADS.'
          },
          {
            heading: 'Linux File Systems: ext4, XFS, and Btrfs',
            detail: 'Linux supports multiple file systems. ext4 (Fourth Extended Filesystem) is the most common, supporting files up to 16 TB, volumes up to 1 EB, journaling for crash recovery, and extents for efficient large file handling. XFS is a high-performance 64-bit journaling file system favored for large-scale storage and is the default in RHEL/CentOS. Btrfs (B-tree File System) offers advanced features like snapshots, checksums for data integrity, RAID support, and copy-on-write. File system information is viewed with df -hT (disk usage with file system type) and lsblk (block device listing). Forensic tools like Sleuth Kit (fls, icat, ils) and Autopsy analyze Linux file systems for deleted files and timeline artifacts.'
          },
          {
            heading: 'Windows NTFS Permissions and ACLs',
            detail: 'NTFS uses Access Control Lists (ACLs) to manage file and folder permissions. Each object has a Security Descriptor containing a DACL (Discretionary ACL — controls access) and SACL (System ACL — controls auditing). DACL entries (ACEs) grant or deny permissions: Full Control, Modify, Read & Execute, List Folder Contents, Read, and Write. Permissions are cumulative (multiple group memberships combine), except Deny which overrides Allow. Inheritance flows from parent folders to children unless explicitly blocked. The icacls command manages permissions from the command line: icacls file.txt /grant Users:R grants read access. The effective permissions tab in file properties shows the resulting permissions for a specific user after all ACEs are evaluated. Misconfigured NTFS permissions are a common vulnerability leading to privilege escalation.'
          },
          {
            heading: 'Linux File Permissions: rwx, chmod, chown, and ACLs',
            detail: 'Linux uses a three-tiered permission model: Owner, Group, and Others, each with Read (r/4), Write (w/2), and Execute (x/1) permissions. The ls -la command displays permissions in the format -rwxr-xr-- (owner: rwx, group: r-x, others: r--). chmod changes permissions using symbolic (chmod u+x file) or octal (chmod 755 file) notation. chown changes ownership (chown user:group file). For more granular control, POSIX ACLs extend the basic model: setfacl -m u:username:rw file grants specific user access, and getfacl file displays ACL entries. Default ACLs (setfacl -d -m g:devteam:rwx directory/) set permissions for new files created within a directory. Proper permission configuration prevents unauthorized file access and is a key hardening measure.'
          },
          {
            heading: 'Special Permissions: SUID, SGID, and Sticky Bit',
            detail: 'Linux special permissions modify execution behavior. SUID (Set User ID, mode 4xxx) causes a program to execute with the file owner\'s privileges — for example, /usr/bin/passwd runs as root to update /etc/shadow even when executed by a normal user. SGID (Set Group ID, mode 2xxx) on executables runs the program with the group\'s privileges; on directories, new files inherit the directory\'s group. Sticky Bit (mode 1xxx) on directories prevents users from deleting files they don\'t own — applied to /tmp (mode 1777). SUID binaries are a major privilege escalation vector: attackers search for misconfigured SUID programs using find / -perm -4000 -type f and exploit them using techniques documented on GTFOBins (gtfobins.github.io). Regular SUID audits are essential for system security.'
          },
          {
            heading: 'File Integrity Monitoring and Hashing',
            detail: 'File integrity monitoring (FIM) detects unauthorized changes to critical system files. Hash algorithms (MD5, SHA-1, SHA-256) generate unique fingerprints of file contents — any modification changes the hash. On Linux, sha256sum file.txt generates a SHA-256 hash, and sha256sum -c hashfile.txt verifies files against stored hashes. Tools like AIDE (Advanced Intrusion Detection Environment) create baseline databases of file hashes and attributes, alerting on changes during subsequent scans. On Windows, Get-FileHash in PowerShell computes hashes, and Tripwire provides enterprise FIM capabilities. OSSEC (open-source HIDS) performs real-time file integrity monitoring on both platforms. FIM is required by compliance frameworks including PCI DSS (Requirement 11.5) and is a critical detective control for identifying compromised or tampered files.'
          }
        ],
        keyTakeaways: [
          'NTFS uses ACLs with DACLs and SACLs for granular access control; Linux uses the simpler owner/group/others model with optional POSIX ACLs',
          'NTFS Alternate Data Streams can hide data and malware — always check with dir /R or Sysinternals streams.exe',
          'Linux SUID binaries are a primary privilege escalation vector and should be regularly audited',
          'File integrity monitoring using hashing (SHA-256) and tools like AIDE, Tripwire, or OSSEC detects unauthorized file modifications',
          'Proper permission configuration on both Windows and Linux is a foundational security control'
        ],
        practiceExercises: [
          'On a Linux system, create a directory structure for a team project — set up SGID on the project directory so all new files inherit the team group, configure proper permissions, and test with multiple user accounts',
          'Find all SUID binaries on a Linux system using find / -perm -4000, research each on GTFOBins, and document which ones could be exploited for privilege escalation and why',
          'Set up AIDE on a Linux system — initialize the baseline database, make intentional changes to monitored files, run a check, and analyze the AIDE report to identify the modifications'
        ],
        resources: [
          { name: 'GTFOBins — Unix Binaries for Privilege Escalation', url: 'https://gtfobins.github.io/' },
          { name: 'AIDE — Advanced Intrusion Detection Environment', url: 'https://aide.github.io/' },
          { name: 'Sysinternals Suite by Mark Russinovich', url: 'https://learn.microsoft.com/en-us/sysinternals/' }
        ]
      },
      {
        title: 'Process & Service Management',
        duration: '3.5 hours',
        overview: 'Understanding how processes and services operate is critical for system administration, performance monitoring, and incident response. This module covers process lifecycle management, service configuration, and resource monitoring on both Windows and Linux, with emphasis on identifying suspicious activity and malicious processes.',
        topics: [
          {
            heading: 'Linux Process Management',
            detail: 'In Linux, every running program is a process with a unique Process ID (PID). The init/systemd process (PID 1) is the parent of all processes. ps aux lists all running processes with details: USER, PID, %CPU, %MEM, command. The /proc filesystem provides detailed process information — /proc/PID/cmdline shows the full command, /proc/PID/fd/ lists open file descriptors, and /proc/PID/maps shows memory mappings. top and htop provide real-time interactive process monitoring. kill sends signals to processes: SIGTERM (15, graceful shutdown), SIGKILL (9, force kill), SIGHUP (1, reload configuration). Process priorities are managed with nice (launch with priority) and renice (change priority). During incident response, examining processes for suspicious activity — unexpected parent-child relationships, processes running from /tmp, or unusual network connections — is a critical first step.'
          },
          {
            heading: 'Linux Service Management with systemd',
            detail: 'systemd is the modern init system and service manager for most Linux distributions. Services are defined in unit files (typically in /etc/systemd/system/ or /usr/lib/systemd/system/) with sections for [Unit] (dependencies), [Service] (execution parameters), and [Install] (boot integration). Key commands: systemctl start/stop/restart/reload <service> manages service state, systemctl enable/disable <service> controls boot startup, systemctl status <service> shows current state and recent logs, and systemctl list-units --type=service --state=running lists active services. journalctl queries the systemd journal: journalctl -u sshd --since "1 hour ago" shows recent SSH logs. From a security perspective, attackers create malicious systemd services for persistence — reviewing new or modified unit files is part of incident response. The systemctl mask command completely disables a service, preventing even manual starts.'
          },
          {
            heading: 'Windows Process Analysis',
            detail: 'Windows process analysis is essential for malware detection and incident response. Task Manager provides basic process visibility, but Process Explorer (Sysinternals) offers detailed information including DLLs loaded, handles opened, network connections, and the complete process tree showing parent-child relationships. Key Windows processes to understand: System (PID 4), smss.exe (Session Manager), csrss.exe (Client/Server Runtime), wininit.exe, services.exe (Service Control Manager), lsass.exe (Local Security Authority — stores credentials, targeted by Mimikatz), svchost.exe (hosts multiple services — always has services.exe as parent), and explorer.exe (user shell). Suspicious indicators include: processes with unusual parent-child relationships (e.g., Word spawning PowerShell), misspelled process names (svch0st.exe), processes running from wrong directories, and svchost.exe without services.exe as parent.'
          },
          {
            heading: 'Windows Service Configuration and Security',
            detail: 'Windows services run in the background as long-running processes managed by the Service Control Manager (SCM). Services are configured in the Services console (services.msc) or via sc.exe command: sc query lists services, sc qc <service> shows configuration, sc config <service> start= disabled modifies startup type. Services run under specific accounts: LocalSystem (highest privilege), LocalService, NetworkService, or dedicated service accounts. Service startup types include Automatic, Automatic (Delayed), Manual, and Disabled. Security risks include: services running with excessive privileges, unquoted service paths (enabling DLL injection), weak service binary permissions (allowing binary replacement), and services configured to run as domain admin. The accesschk tool (Sysinternals) audits service permissions: accesschk.exe -uwcqv "Users" * identifies services modifiable by standard users.'
          },
          {
            heading: 'Resource Monitoring and Performance Baselines',
            detail: 'Establishing performance baselines enables detection of anomalies that may indicate compromise. On Linux, tools include vmstat (virtual memory and CPU statistics), iostat (I/O statistics), sar (System Activity Reporter for historical data), lsof (list open files — lsof -i shows network connections), and nethogs (per-process bandwidth monitoring). On Windows, Performance Monitor (perfmon) creates Data Collector Sets tracking CPU, memory, disk, and network metrics over time. Resource Monitor (resmon) provides real-time per-process resource usage. Anomalies like sudden CPU spikes (cryptomining), unusual network traffic patterns (data exfiltration), disk I/O to unexpected locations (ransomware encryption), or memory usage growth (memory-resident malware) can indicate compromise. Regular baseline collection and comparison is a proactive security practice.'
          },
          {
            heading: 'Identifying Malicious Processes and Persistence',
            detail: 'Cybersecurity professionals must identify malicious processes and persistence mechanisms. On Linux, check: unusual processes (ps auxf), hidden processes (comparing ps output with /proc entries), suspicious network connections (ss -tulnp), crontab entries (crontab -l, /etc/cron.*), systemd services (/etc/systemd/system/), and startup scripts (/etc/rc.local, ~/.bashrc). On Windows, check: startup programs (msconfig, autoruns from Sysinternals — the most comprehensive tool), scheduled tasks (schtasks /query), services (sc query), registry Run keys, WMI event subscriptions, and DLL search order hijacking. Process Hacker or Process Explorer show detailed process information including network connections, strings in memory, and VirusTotal integration. The Sysinternals Autoruns tool is considered the gold standard for enumerating all Windows persistence mechanisms.'
          }
        ],
        keyTakeaways: [
          'Linux processes are monitored with ps, top, htop, and the /proc filesystem; services are managed with systemctl',
          'Windows process analysis using Sysinternals tools (Process Explorer, Autoruns) is essential for malware detection',
          'Understanding normal process trees helps identify anomalies — unexpected parent-child relationships indicate potential compromise',
          'Performance baselines enable detection of anomalies like cryptomining, data exfiltration, and ransomware activity',
          'Persistence mechanism enumeration (cron, systemd, registry Run keys, scheduled tasks) is a critical incident response skill'
        ],
        practiceExercises: [
          'Document the normal process tree on a clean Windows installation using Process Explorer — screenshot and label every expected process, its parent, and its running account, then compare this baseline with a running system to identify anomalies',
          'Write a Linux script that captures a system snapshot including running processes (with parent PIDs), open network connections, crontab entries, systemd services, and open files — use this for daily system state comparison',
          'Use Windows Performance Monitor to create a Data Collector Set tracking CPU usage, memory, disk I/O, and network throughput for 24 hours — establish a baseline and identify any unusual patterns'
        ],
        resources: [
          { name: 'Sysinternals Suite (Process Explorer, Autoruns, Process Monitor)', url: 'https://learn.microsoft.com/en-us/sysinternals/' },
          { name: 'SANS Hunt Evil Poster — Know Normal, Find Evil', url: 'https://www.sans.org/posters/hunt-evil/' },
          { name: 'How Linux Works by Brian Ward (No Starch Press)' }
        ]
      },
      {
        title: 'System Logging Basics',
        duration: '3.5 hours',
        overview: 'System logs are the primary data source for detecting security incidents, troubleshooting issues, and maintaining compliance. This module covers logging mechanisms on both Windows and Linux, teaching you how to configure, query, and analyze logs to identify security-relevant events and build effective monitoring practices.',
        topics: [
          {
            heading: 'Windows Event Logging Architecture',
            detail: 'Windows uses the Windows Event Log service to record system events in structured XML format stored in .evtx files (typically in C:\\Windows\\System32\\winevt\\Logs\\). Key log channels include Security (authentication, authorization, audit events), System (hardware, driver, service events), Application (software events), and PowerShell operational logs. Each event has an Event ID, source, level (Information, Warning, Error, Critical), timestamp, and detailed message. Event Viewer (eventvwr.msc) provides a GUI for browsing and filtering logs, while wevtutil.exe and PowerShell\'s Get-WinEvent offer command-line access. Windows Event Forwarding (WEF) centralizes logs from multiple systems for SIEM ingestion. Understanding the event log architecture is fundamental for Windows security monitoring and forensic investigation.'
          },
          {
            heading: 'Critical Windows Security Event IDs',
            detail: 'Certain Event IDs are essential for security monitoring. Authentication events: 4624 (successful logon — note Logon Type: 2=Interactive, 3=Network, 10=RemoteInteractive/RDP), 4625 (failed logon), 4634 (logoff), 4648 (logon with explicit credentials). Account management: 4720 (user account created), 4732 (member added to security group), 4728 (member added to global group). Process events: 4688 (new process created — requires audit policy configuration to include command line), 4689 (process exited). Policy changes: 4719 (audit policy changed), 4739 (domain policy changed). Privilege use: 4672 (special privileges assigned — admin logon), 4673 (privileged service called). Object access: 4663 (attempt to access an object). Configuring Windows Advanced Audit Policy (auditpol.exe or GPO) to log these events is the foundation of Windows security monitoring.'
          },
          {
            heading: 'Linux Logging with syslog and journald',
            detail: 'Linux uses two primary logging systems. Traditional syslog (rsyslog or syslog-ng) writes text-based logs to /var/log/ with files including: auth.log or secure (authentication events), syslog or messages (general system events), kern.log (kernel messages), dpkg.log or yum.log (package management), and application-specific logs. Syslog messages have facility (auth, kern, mail, local0-7) and severity levels (emerg, alert, crit, err, warning, notice, info, debug). Configuration in /etc/rsyslog.conf defines routing rules. Modern systemd distributions also use journald, which stores binary logs queried with journalctl: journalctl -u sshd --since "2 hours ago" -p err shows SSH errors from the last 2 hours. journalctl supports filtering by unit, priority, time range, and boot session. Both systems can forward logs to centralized SIEM platforms.'
          },
          {
            heading: 'Log Analysis Techniques and Tools',
            detail: 'Effective log analysis combines automated tools with manual investigation skills. Command-line techniques: grep "Failed password" /var/log/auth.log | awk \'{print $11}\' | sort | uniq -c | sort -rn identifies the most frequent sources of failed SSH logins. On Windows, PowerShell: Get-WinEvent -FilterHashtable @{LogName="Security";Id=4625} | Group-Object -Property {$_.Properties[5].Value} groups failed logons by account name. Centralized log analysis uses SIEM platforms like Splunk (Search Processing Language — SPL), Elastic Stack (ELK — Elasticsearch, Logstash, Kibana), or Graylog. These platforms aggregate logs from multiple sources, enable correlation across systems, provide alerting on suspicious patterns, and create dashboards for visualization. Developing proficiency in at least one SIEM platform is essential for SOC analyst roles.'
          },
          {
            heading: 'Audit Policy Configuration and Compliance',
            detail: 'Proper audit configuration ensures that security-relevant events are captured. On Windows, Advanced Audit Policy Configuration (auditpol /set /category:"Logon/Logoff" /success:enable /failure:enable) provides granular control over which events are logged. Enable Process Creation auditing with command-line logging for detecting malicious executions. On Linux, the auditd daemon provides kernel-level auditing: auditctl -w /etc/shadow -p wa -k shadow_changes monitors the shadow file for writes and attribute changes. Compliance frameworks mandate specific logging requirements: PCI DSS Requirement 10 requires logging all access to cardholder data, HIPAA requires audit controls for electronic PHI, and NIST 800-53 AU controls define comprehensive audit requirements. Log retention policies must balance storage costs with regulatory requirements — typically 90 days to 7 years depending on the framework.'
          },
          {
            heading: 'Log Forwarding and Centralized Monitoring',
            detail: 'Enterprise environments centralize logs for efficient analysis and compliance. On Linux, rsyslog forwards logs to remote servers: *.* @@siem.company.com:514 sends all logs via TCP to a central syslog server. Filebeat (from Elastic) and Fluentd are modern log shippers that parse, enrich, and forward logs to centralized platforms. On Windows, Windows Event Forwarding (WEF) configures source computers to send events to a collector using WinRM. Sysmon (System Monitor from Sysinternals) enhances Windows logging by recording process creation with full command lines, network connections, file creation times, and driver/image loading — it dramatically improves visibility beyond default Windows logging. A well-architected centralized logging solution combines log collection, secure transport (TLS), normalized storage, retention management, and alerting capabilities.'
          }
        ],
        keyTakeaways: [
          'Windows Event IDs 4624, 4625, 4688, 4720, and 4672 are essential for security monitoring',
          'Linux logs reside in /var/log/ with rsyslog routing by facility and severity; journalctl queries systemd journal',
          'SIEM platforms (Splunk, ELK, Graylog) centralize and correlate logs from multiple sources for security monitoring',
          'Audit policies must be explicitly configured — default logging on both Windows and Linux is insufficient for security',
          'Sysmon dramatically enhances Windows logging and should be deployed on all Windows endpoints for security visibility'
        ],
        practiceExercises: [
          'Configure Windows Advanced Audit Policy to log successful and failed logon events, process creation with command-line logging, and object access — generate test events and verify they appear in Event Viewer',
          'Set up rsyslog on a Linux system to forward authentication logs to a remote syslog server (another VM), then generate failed SSH login attempts and verify they are received and stored remotely',
          'Install and configure Sysmon on a Windows machine using the SwiftOnSecurity configuration file — execute various commands and programs, then query Sysmon logs to trace the activity including process trees and network connections'
        ],
        resources: [
          { name: 'Windows Security Log Encyclopedia', url: 'https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/' },
          { name: 'Sysmon — Sysinternals', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon' },
          { name: 'SANS SEC555: SIEM with Tactical Analytics', url: 'https://www.sans.org/cyber-security-courses/siem-with-tactical-analytics/' }
        ]
      }
    ]
  },
  {
    id: 'intro-cybersec',
    tier: 'beginner',
    title: 'Introduction to Cybersecurity Concepts',
    description: 'This foundational course provides a comprehensive introduction to the principles, threats, and practices that define the cybersecurity field. From the CIA triad to modern attack vectors, cryptographic fundamentals, and industry frameworks, this course prepares you to think like a security professional and understand the landscape you will be working to protect.',
    objectives: [
      'Define cybersecurity and explain its importance in modern organizations',
      'Apply the CIA triad (Confidentiality, Integrity, Availability) to real-world scenarios',
      'Identify common threat actors, attack vectors, and their motivations',
      'Explain fundamental cryptographic concepts including symmetric and asymmetric encryption',
      'Describe major security frameworks including NIST CSF, ISO 27001, and CIS Controls',
      'Explore cybersecurity career paths and certification roadmaps'
    ],
    estimatedHours: 15,
    prerequisites: [],
    modules: [
      {
        title: 'What is Cybersecurity?',
        duration: '2 hours',
        overview: 'This opening module defines cybersecurity, traces its evolution from early computer security to today\'s complex threat landscape, and establishes why cybersecurity is critical for organizations of all sizes. You will learn the core principles that guide security decisions and understand the scope of the cybersecurity discipline.',
        topics: [
          {
            heading: 'Defining Cybersecurity and Information Security',
            detail: 'Cybersecurity encompasses the practices, technologies, and processes designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access. While often used interchangeably, information security (InfoSec) is broader — covering all forms of information (digital and physical) — while cybersecurity specifically focuses on protecting digital assets in cyberspace. The field encompasses multiple domains: network security, application security, endpoint security, cloud security, identity and access management, data security, and security operations. NIST defines cybersecurity as "the ability to protect or defend the use of cyberspace from cyber attacks," emphasizing both prevention and resilience.'
          },
          {
            heading: 'The Evolution of Cyber Threats',
            detail: 'Cybersecurity has evolved dramatically from the early days of computing. The Morris Worm (1988) was one of the first internet worms, affecting approximately 10% of internet-connected computers. The ILOVEYOU virus (2000) demonstrated the power of social engineering, infecting millions through email. Stuxnet (2010) marked the era of nation-state cyber weapons, targeting Iranian nuclear centrifuges. WannaCry (2017) showed how ransomware combined with leaked NSA exploit (EternalBlue) could cause global disruption, affecting hospitals, banks, and government agencies. The SolarWinds supply chain attack (2020) demonstrated the devastating impact of compromising trusted software vendors. Each era brought new threat categories and forced the evolution of defensive strategies.'
          },
          {
            heading: 'Why Cybersecurity Matters: Impact and Cost',
            detail: 'Cybersecurity breaches have severe financial, operational, and reputational consequences. According to IBM\'s Cost of a Data Breach Report, the average breach costs millions of dollars, with healthcare being the most expensive sector. Beyond direct costs (forensic investigation, notification, legal fees), organizations face regulatory fines (GDPR penalties up to 4% of global revenue), business disruption, customer loss, and lasting reputational damage. Critical infrastructure attacks can have life-safety implications — ransomware attacks on hospitals have delayed patient care, and attacks on power grids (Ukraine 2015, 2016) caused widespread outages. Understanding these impacts helps justify security investments and communicate risk to non-technical stakeholders.'
          },
          {
            heading: 'Defense in Depth Strategy',
            detail: 'Defense in Depth is a layered security strategy inspired by military doctrine, ensuring that if one security control fails, others remain in place. Layers include: physical security (locks, cameras, biometrics), perimeter security (firewalls, DMZ, IDS/IPS), network security (segmentation, VLANs, NAC), host security (antivirus, EDR, patching, hardening), application security (secure coding, WAF, input validation), data security (encryption, DLP, access controls), and user awareness (security training, phishing simulations). No single security control is sufficient — defense in depth creates multiple barriers that an attacker must overcome, significantly increasing the cost and difficulty of a successful breach. This concept is fundamental to the NIST Cybersecurity Framework and every security architecture.'
          },
          {
            heading: 'Security Mindset: Think Like an Attacker',
            detail: 'Developing a security mindset means systematically thinking about how systems can be abused, misused, or broken. The attacker\'s perspective considers every input as a potential injection point, every trust relationship as an exploitation opportunity, and every assumption as a potential weakness. This mindset is formalized in threat modeling methodologies like STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) developed by Microsoft. Security professionals must balance this adversarial thinking with risk-based prioritization — not every vulnerability requires immediate attention, and resources must be focused on the threats most likely to impact the organization\'s critical assets.'
          }
        ],
        keyTakeaways: [
          'Cybersecurity protects digital assets from attack, damage, and unauthorized access across multiple domains',
          'Cyber threats have evolved from simple worms to sophisticated nation-state campaigns and supply chain attacks',
          'The financial, operational, and reputational impact of breaches justifies organizational security investment',
          'Defense in Depth creates multiple security layers so that the failure of any single control does not lead to compromise',
          'A security mindset involves thinking adversarially about how systems can be exploited'
        ],
        practiceExercises: [
          'Research three major cybersecurity breaches from the past five years — document the attack vector, impact (financial, operational, reputational), root cause, and lessons learned for each',
          'Create a defense-in-depth diagram for a small business with 50 employees — include at least one control at each layer (physical, perimeter, network, host, application, data, user) and justify your choices',
          'Perform a basic threat model using STRIDE on a web application login page — identify at least one threat for each STRIDE category and propose a mitigation'
        ],
        resources: [
          { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
          { name: 'Cybersecurity and Cyberwar: What Everyone Needs to Know by P.W. Singer & Allan Friedman' },
          { name: 'Krebs on Security (Blog)', url: 'https://krebsonsecurity.com/' }
        ]
      },
      {
        title: 'The CIA Triad',
        duration: '2 hours',
        overview: 'The CIA triad — Confidentiality, Integrity, and Availability — is the foundational model for information security. This module explores each pillar in depth, demonstrating how they guide security decisions, conflict with each other in practice, and extend into related concepts like non-repudiation, authenticity, and accountability.',
        topics: [
          {
            heading: 'Confidentiality: Protecting Sensitive Information',
            detail: 'Confidentiality ensures that information is accessible only to authorized individuals. Controls include encryption (AES-256 for data at rest, TLS 1.3 for data in transit), access controls (role-based access control — RBAC, mandatory access control — MAC, discretionary access control — DAC), authentication mechanisms (multi-factor authentication combining something you know, have, and are), and data classification schemes (Public, Internal, Confidential, Restricted). Data Loss Prevention (DLP) tools monitor and prevent unauthorized data transfers. Confidentiality breaches can result from external attacks (data exfiltration), insider threats (unauthorized data sharing), or poor practices (sending sensitive data via unencrypted email). Real-world examples include the Equifax breach (2017) exposing 147 million records due to an unpatched web application vulnerability.'
          },
          {
            heading: 'Integrity: Ensuring Data Accuracy and Trustworthiness',
            detail: 'Integrity guarantees that data has not been altered in an unauthorized or undetected manner. Controls include cryptographic hash functions (SHA-256 produces a unique fingerprint — any change alters the hash), digital signatures (combining hashing with asymmetric encryption to verify both integrity and authenticity), checksums for file verification, version control systems (Git), and database transaction controls (ACID properties). File Integrity Monitoring (FIM) tools like AIDE and Tripwire detect unauthorized modifications to critical system files. Input validation prevents injection attacks that corrupt data. Integrity violations can be catastrophic — modifying financial records, altering medical data, or tampering with voting systems. The SolarWinds attack compromised integrity by inserting malicious code into trusted software updates.'
          },
          {
            heading: 'Availability: Maintaining System Uptime',
            detail: 'Availability ensures that systems, services, and data are accessible to authorized users when needed. Controls include redundancy (RAID storage, failover clusters, load balancers), disaster recovery (backup strategies following the 3-2-1 rule: 3 copies, 2 different media, 1 offsite), high availability architectures (active-active and active-passive configurations), and DDoS protection (content delivery networks like Cloudflare, rate limiting, traffic scrubbing). Service Level Agreements (SLAs) define availability targets — "five nines" (99.999%) allows only 5.26 minutes of downtime per year. Availability threats include DDoS attacks (volumetric, protocol, and application-layer), ransomware (encrypting data to deny access), hardware failures, natural disasters, and power outages. Business Continuity Planning (BCP) and Disaster Recovery Planning (DRP) formalize availability strategies.'
          },
          {
            heading: 'Beyond CIA: Non-Repudiation, Authenticity, and Accountability',
            detail: 'While the CIA triad forms the foundation, modern security adds related principles. Non-repudiation ensures that actions cannot be denied — digital signatures provide cryptographic proof that a specific party signed a document or message. Authenticity verifies that data and communications originate from their claimed source, preventing spoofing and forgery. Accountability ensures that user actions can be traced back to the individual through logging, auditing, and unique user identification — shared accounts undermine accountability. The AAA framework (Authentication, Authorization, Accounting) implemented through protocols like RADIUS and TACACS+ enforces these principles in network access control. These extended principles are addressed in ISO 27001 and are tested on the CompTIA Security+ exam.'
          },
          {
            heading: 'Balancing CIA: Security Trade-offs',
            detail: 'In practice, the three pillars of the CIA triad often conflict, requiring risk-based trade-offs. Increasing confidentiality through strong encryption may reduce availability (encrypted systems are slower and key loss means permanent data loss). Maximizing availability through multiple access paths may weaken confidentiality (more entry points to secure). Real-time integrity checking adds processing overhead that impacts performance and availability. Security controls often conflict with usability — excessive authentication requirements frustrate users and lead to workarounds. Risk management frameworks help organizations make informed trade-offs by evaluating the likelihood and impact of threats against the cost and effectiveness of controls. The goal is not perfect security (which is unattainable) but rather appropriate security that aligns with business objectives and risk tolerance.'
          }
        ],
        keyTakeaways: [
          'Confidentiality protects information from unauthorized disclosure through encryption, access controls, and DLP',
          'Integrity ensures data accuracy through hashing, digital signatures, and file integrity monitoring',
          'Availability maintains system access through redundancy, disaster recovery, and DDoS protection',
          'Non-repudiation, authenticity, and accountability extend the CIA triad for comprehensive security',
          'CIA pillars often conflict in practice, requiring risk-based trade-offs aligned with business objectives'
        ],
        practiceExercises: [
          'Classify ten common security controls (firewall, encryption, backup, MFA, IDS, DLP, RAID, patching, access control lists, security awareness training) by which CIA pillar(s) they primarily support — some controls support multiple pillars',
          'Analyze a recent major security breach and explain how each CIA pillar was violated — document what controls could have prevented the breach',
          'Design a security architecture for a small e-commerce website that addresses all three CIA pillars — specify at least two controls for each pillar and explain how they work together'
        ],
        resources: [
          { name: 'NIST SP 800-12: An Introduction to Information Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-12/rev-1/final' },
          { name: 'CompTIA Security+ Get Certified Get Ahead: SY0-701 Study Guide by Darril Gibson' },
          { name: 'ISO/IEC 27001 Information Security Management', url: 'https://www.iso.org/isoiec-27001-information-security.html' }
        ]
      },
      {
        title: 'Threat Landscape Overview',
        duration: '2 hours',
        overview: 'Understanding who attacks, why they attack, and how they attack is essential for building effective defenses. This module maps the modern threat landscape, covering threat actor categories, their motivations and capabilities, the cyber kill chain methodology, and the MITRE ATT&CK framework for understanding adversary behavior.',
        topics: [
          {
            heading: 'Threat Actor Categories',
            detail: 'Threat actors are classified by their resources, motivations, and capabilities. Nation-state actors (APT groups) are the most sophisticated, with examples like APT28 (Fancy Bear — Russia), APT41 (China), and Lazarus Group (North Korea) — they conduct espionage, intellectual property theft, and destructive attacks. Cybercriminals are financially motivated, operating ransomware-as-a-service (RaaS) operations like LockBit and BlackCat. Hacktivists (e.g., Anonymous) pursue political or social agendas through website defacement, data leaks, and DDoS attacks. Insider threats — both malicious (disgruntled employees) and negligent (untrained users) — account for a significant percentage of breaches. Script kiddies use pre-built tools without deep understanding, while organized crime groups run sophisticated criminal enterprises rivaling legitimate businesses in structure.'
          },
          {
            heading: 'The Cyber Kill Chain',
            detail: 'Developed by Lockheed Martin, the Cyber Kill Chain models the stages of a targeted attack: (1) Reconnaissance — gathering information about the target using OSINT, port scanning, and social engineering; (2) Weaponization — creating a deliverable payload (malware-laced document, exploit kit); (3) Delivery — transmitting the weapon via email (phishing), web, USB, or watering hole attacks; (4) Exploitation — triggering the vulnerability to execute code; (5) Installation — establishing persistence on the compromised system; (6) Command and Control (C2) — establishing a channel for remote control; (7) Actions on Objectives — achieving the goal (data exfiltration, ransomware deployment, lateral movement). Defenders use this model to identify detection and prevention opportunities at each stage — disrupting the chain at any point stops the attack.'
          },
          {
            heading: 'MITRE ATT&CK Framework',
            detail: 'MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a comprehensive knowledge base of adversary behavior based on real-world observations. It organizes techniques into tactical categories: Initial Access (phishing, exploiting public-facing apps), Execution (PowerShell, scripting), Persistence (registry Run keys, scheduled tasks), Privilege Escalation (exploitation, access token manipulation), Defense Evasion (obfuscation, disabling security tools), Credential Access (credential dumping, brute force), Discovery (network scanning, account discovery), Lateral Movement (pass-the-hash, remote services), Collection (data staging, screen capture), Exfiltration (encrypted channels, cloud storage), and Impact (data destruction, ransomware). ATT&CK is used for threat intelligence, red team operations, gap analysis of security controls, and SOC detection engineering. The ATT&CK Navigator tool helps visualize coverage.'
          },
          {
            heading: 'Current Threat Trends',
            detail: 'The threat landscape evolves rapidly. Ransomware has become the most impactful cybercrime category, with double extortion (encrypting data and threatening to leak it) and triple extortion (adding DDoS or contacting victims\' customers) becoming standard tactics. Supply chain attacks (SolarWinds, Kaseya, Log4Shell) compromise trusted vendors to reach thousands of downstream targets. Business Email Compromise (BEC) causes billions in annual losses through invoice fraud and CEO impersonation. Cloud security threats grow as organizations migrate to AWS, Azure, and GCP — misconfigured S3 buckets, excessive IAM permissions, and container vulnerabilities are common. AI-powered attacks enable more convincing phishing, deepfake social engineering, and automated vulnerability discovery. Staying current with threat intelligence from sources like CISA alerts, Mandiant reports, and CrowdStrike threat reports is essential.'
          },
          {
            heading: 'Threat Intelligence and Information Sharing',
            detail: 'Threat intelligence transforms raw data into actionable insights about threats. Strategic intelligence informs leadership about risk trends, tactical intelligence guides security teams on attacker TTPs (Tactics, Techniques, and Procedures), and operational intelligence provides real-time indicators of compromise (IOCs) like malicious IP addresses, domain names, file hashes, and YARA rules. Sharing frameworks include STIX (Structured Threat Information Expression) for standardized threat data format and TAXII (Trusted Automated Exchange of Intelligence Information) for automated sharing. ISACs (Information Sharing and Analysis Centers) facilitate sector-specific sharing. Open-source threat intelligence platforms like MISP (Malware Information Sharing Platform), AlienVault OTX, and VirusTotal provide community-driven intelligence. Integrating threat intelligence into SIEM and firewall rules enables proactive defense.'
          }
        ],
        keyTakeaways: [
          'Threat actors range from nation-state APT groups to script kiddies, each with different motivations and capabilities',
          'The Cyber Kill Chain provides a seven-stage model for understanding and disrupting targeted attacks',
          'MITRE ATT&CK catalogs real-world adversary techniques and is used for detection engineering and gap analysis',
          'Ransomware, supply chain attacks, and BEC are the most impactful current threat categories',
          'Threat intelligence sharing through STIX/TAXII, ISACs, and open platforms enables proactive defense'
        ],
        practiceExercises: [
          'Research a specific APT group using the MITRE ATT&CK website — document their known TTPs, targeted sectors, and map their techniques on the ATT&CK Navigator',
          'Analyze a recent ransomware attack using the Cyber Kill Chain framework — identify what happened at each of the seven stages and where the attack could have been disrupted',
          'Sign up for AlienVault OTX (free) and explore threat pulses related to a current campaign — identify IOCs (IPs, domains, hashes) and explain how you would use them to create detection rules'
        ],
        resources: [
          { name: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
          { name: 'Lockheed Martin Cyber Kill Chain', url: 'https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html' },
          { name: 'CISA Cybersecurity Alerts and Advisories', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' }
        ]
      },
      {
        title: 'Common Attack Vectors',
        duration: '2.5 hours',
        overview: 'This module examines the most prevalent attack vectors used by threat actors to compromise systems and networks. From social engineering and phishing to malware, web application attacks, and network-based exploits, you will learn how each attack works, see real-world examples, and understand the defenses that mitigate them.',
        topics: [
          {
            heading: 'Social Engineering and Phishing',
            detail: 'Social engineering exploits human psychology rather than technical vulnerabilities. Phishing emails impersonate trusted entities to trick victims into clicking malicious links, opening infected attachments, or revealing credentials. Spear phishing targets specific individuals with personalized messages (researched via LinkedIn, social media, and company websites). Whaling targets senior executives with high-value requests. Vishing (voice phishing) uses phone calls, and smishing uses SMS messages. Business Email Compromise (BEC) involves compromising or spoofing executive email accounts to authorize fraudulent wire transfers. Pretexting creates fabricated scenarios to extract information. Defenses include security awareness training, phishing simulations (using tools like GoPhish or KnowBe4), email filtering with SPF/DKIM/DMARC verification, and multi-factor authentication to limit credential theft impact.'
          },
          {
            heading: 'Malware Types and Delivery Mechanisms',
            detail: 'Malware encompasses all malicious software designed to damage, disrupt, or gain unauthorized access. Key types include: viruses (self-replicating code that attaches to legitimate programs), worms (self-propagating without user interaction — like WannaCry using EternalBlue), trojans (malware disguised as legitimate software), ransomware (encrypts files and demands payment — Ryuk, Conti, LockBit), spyware (covertly monitors user activity — keyloggers, screen capture), adware (unwanted advertising software), rootkits (hide deep in the OS to evade detection), and fileless malware (operates in memory using legitimate tools like PowerShell, leaving no files on disk). Delivery mechanisms include email attachments, drive-by downloads, malicious websites, USB drives, and software supply chain compromise. Anti-malware defenses include EDR (Endpoint Detection and Response) solutions, application whitelisting, and sandboxing.'
          },
          {
            heading: 'Web Application Attacks',
            detail: 'Web applications are among the most targeted assets. The OWASP Top 10 catalogs the most critical web application risks. SQL Injection (SQLi) inserts malicious SQL queries into input fields to extract, modify, or delete database data — for example, entering \' OR 1=1 -- in a login field to bypass authentication. Cross-Site Scripting (XSS) injects malicious JavaScript into web pages viewed by other users, enabling session hijacking and credential theft. Cross-Site Request Forgery (CSRF) tricks authenticated users into performing unintended actions. Server-Side Request Forgery (SSRF) makes the server initiate requests to internal resources. Broken authentication, insecure direct object references, and security misconfigurations round out common vulnerabilities. Tools like Burp Suite, OWASP ZAP, and sqlmap are used for testing these vulnerabilities.'
          },
          {
            heading: 'Network-Based Attacks',
            detail: 'Network attacks target the communication infrastructure. Man-in-the-Middle (MitM) attacks intercept communications between two parties — ARP spoofing (using tools like Ettercap or Bettercap) redirects local network traffic through the attacker. DNS poisoning redirects users to malicious sites by corrupting DNS cache entries. Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks overwhelm targets with traffic — volumetric attacks flood bandwidth, protocol attacks exploit TCP/IP weaknesses (SYN floods), and application-layer attacks target specific services (HTTP floods). Password attacks include brute force (trying every combination), dictionary attacks (using wordlists with tools like Hydra or John the Ripper), credential stuffing (using leaked credentials from other breaches), and password spraying (trying common passwords across many accounts). Network segmentation, encryption, and IDS/IPS provide primary defense.'
          },
          {
            heading: 'Privilege Escalation and Lateral Movement',
            detail: 'After initial access, attackers escalate privileges and move laterally through the network. Vertical privilege escalation gains higher-level access — exploiting SUID binaries on Linux, unquoted service paths on Windows, or kernel vulnerabilities. Horizontal privilege escalation accesses other accounts at the same privilege level. Credential harvesting uses tools like Mimikatz (extracting passwords from Windows LSASS memory), LaZagne (extracting stored passwords), or credential dumping from /etc/shadow on Linux. Lateral movement techniques include Pass-the-Hash (using NTLM hashes without knowing the password), Pass-the-Ticket (using Kerberos tickets), remote service exploitation (PSExec, WMI, WinRM), and RDP pivoting. Defenses include the principle of least privilege, network segmentation, Privileged Access Management (PAM) solutions, credential guard, and LAPS (Local Administrator Password Solution) for unique local admin passwords.'
          }
        ],
        keyTakeaways: [
          'Social engineering and phishing remain the most successful initial access vectors, exploiting human trust',
          'Modern malware includes fileless variants that use legitimate tools to evade detection',
          'OWASP Top 10 web application vulnerabilities (SQLi, XSS, CSRF) are critical to understand for both offense and defense',
          'Network attacks like MitM, DNS poisoning, and DDoS exploit fundamental protocol weaknesses',
          'Privilege escalation and lateral movement techniques allow attackers to expand access after initial compromise'
        ],
        practiceExercises: [
          'Set up a vulnerable web application (DVWA or WebGoat) and practice SQL injection and XSS attacks in the provided safe environment — document each vulnerability, how it works, and how to remediate it',
          'Create a phishing awareness presentation for a non-technical audience — include examples of real phishing emails, red flags to identify them, and steps to take when receiving suspicious messages',
          'In a lab environment, use Hydra to perform a dictionary attack against an SSH service with a weak password — then implement defenses (fail2ban, SSH key authentication, rate limiting) and verify they prevent the attack'
        ],
        resources: [
          { name: 'OWASP Top 10 Web Application Security Risks', url: 'https://owasp.org/www-project-top-ten/' },
          { name: 'DVWA — Damn Vulnerable Web Application', url: 'https://github.com/digininja/DVWA' },
          { name: 'The Web Application Hacker\'s Handbook by Dafydd Stuttard and Marcus Pinto' }
        ]
      },
      {
        title: 'Cryptography Basics',
        duration: '2.5 hours',
        overview: 'Cryptography is the science of securing communication and data through mathematical algorithms. This module covers the fundamental concepts of encryption, hashing, digital signatures, and public key infrastructure that underpin modern cybersecurity — from HTTPS and VPNs to blockchain and secure messaging.',
        topics: [
          {
            heading: 'Symmetric Encryption',
            detail: 'Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient for encrypting large volumes of data. AES (Advanced Encryption Standard) is the current gold standard, operating on 128-bit blocks with key sizes of 128, 192, or 256 bits. AES-256 is used by governments for classified information. Older algorithms include DES (56-bit key — broken and deprecated) and 3DES (three rounds of DES — being phased out). Block ciphers (AES) process fixed-size blocks, while stream ciphers (ChaCha20, RC4) encrypt data byte-by-byte. The main challenge with symmetric encryption is key distribution — how do you securely share the key with the other party? This problem is solved by using asymmetric encryption for key exchange and symmetric encryption for data transfer, as implemented in TLS.'
          },
          {
            heading: 'Asymmetric Encryption and Key Exchange',
            detail: 'Asymmetric encryption uses a mathematically related key pair: a public key (shared freely) for encryption and a private key (kept secret) for decryption. RSA (Rivest-Shamir-Adleman) is the most widely known algorithm, with key sizes of 2048 or 4096 bits recommended. ECC (Elliptic Curve Cryptography) provides equivalent security with much smaller keys — a 256-bit ECC key equals approximately a 3072-bit RSA key — making it preferred for mobile and IoT devices. The Diffie-Hellman key exchange protocol enables two parties to establish a shared secret over an insecure channel without transmitting the secret itself. ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) provides perfect forward secrecy — even if the server\'s private key is later compromised, past session keys cannot be recovered. Asymmetric encryption is computationally expensive, so it is typically used only for key exchange and digital signatures, not bulk data encryption.'
          },
          {
            heading: 'Hashing Algorithms and Integrity Verification',
            detail: 'Hash functions produce a fixed-size digest (fingerprint) from any input — they are one-way (irreversible) and collision-resistant (two different inputs should not produce the same output). MD5 (128-bit) and SHA-1 (160-bit) are deprecated due to known collision attacks — Google demonstrated a practical SHA-1 collision in 2017 (SHAttered). SHA-256 and SHA-512 (SHA-2 family) are currently standard, and SHA-3 provides an alternative design. Hashing is used for password storage (never store plaintext passwords), file integrity verification (comparing before and after hashes), digital signatures, and blockchain (Bitcoin uses SHA-256). Password hashing requires specialized algorithms like bcrypt, scrypt, or Argon2 that include salting (adding random data to prevent rainbow table attacks) and key stretching (slowing computation to resist brute force).'
          },
          {
            heading: 'Digital Signatures and Certificates',
            detail: 'Digital signatures combine hashing and asymmetric encryption to provide integrity, authentication, and non-repudiation. The signer hashes the message and encrypts the hash with their private key. The recipient decrypts the signature with the signer\'s public key and compares it with their own hash of the message — if they match, the message is unaltered and authentically from the signer. Digital certificates bind a public key to an identity, issued by Certificate Authorities (CAs) in a hierarchical trust model called Public Key Infrastructure (PKI). X.509 certificates contain the subject name, public key, issuer CA, validity period, and the CA\'s digital signature. Certificate chains validate trust from the server certificate through intermediate CAs to a trusted root CA stored in browsers and operating systems. Certificate transparency logs provide public auditability.'
          },
          {
            heading: 'Applied Cryptography: TLS, VPNs, and Disk Encryption',
            detail: 'Cryptographic principles are applied across many security technologies. TLS (Transport Layer Security) secures web communication (HTTPS), email (SMTPS, IMAPS), and other protocols using a combination of asymmetric encryption for key exchange, symmetric encryption for data, and hashing for integrity — the cipher suite (e.g., TLS_AES_256_GCM_SHA384) specifies the exact algorithms. VPNs use IPsec (IKEv2 for key exchange, ESP for encryption) or WireGuard (modern, using ChaCha20 and Curve25519) to create encrypted tunnels. Full-disk encryption (BitLocker on Windows, LUKS on Linux, FileVault on macOS) protects data at rest. PGP/GPG encrypts emails and files using the web of trust model. Understanding how these technologies implement cryptographic primitives helps you configure them correctly and identify weaknesses.'
          },
          {
            heading: 'Cryptographic Attacks and Post-Quantum Considerations',
            detail: 'Cryptographic systems face various attacks. Brute force tries every possible key — infeasible for AES-256 (2^256 possible keys) but practical for short passwords. Dictionary and rainbow table attacks target hashed passwords — salting prevents rainbow tables, and key stretching slows brute force. Side-channel attacks extract key information through timing, power consumption, or electromagnetic emissions. Implementation flaws are more common than algorithm breaks — Heartbleed (2014) exploited a buffer over-read in OpenSSL, not a flaw in TLS itself. Quantum computing threatens current asymmetric algorithms — Shor\'s algorithm could break RSA and ECC. NIST has standardized post-quantum algorithms including CRYSTALS-Kyber (key encapsulation) and CRYSTALS-Dilithium (digital signatures). Organizations should begin planning for quantum-resistant cryptography migration.'
          }
        ],
        keyTakeaways: [
          'Symmetric encryption (AES) is fast for bulk data; asymmetric encryption (RSA, ECC) solves the key distribution problem',
          'SHA-256 is the standard hash algorithm; MD5 and SHA-1 are deprecated due to collision vulnerabilities',
          'Digital signatures provide integrity, authentication, and non-repudiation using hash + private key encryption',
          'TLS, VPNs, and disk encryption combine multiple cryptographic primitives for comprehensive protection',
          'Post-quantum cryptography is an emerging concern as quantum computing advances threaten current algorithms'
        ],
        practiceExercises: [
          'Use OpenSSL to generate an RSA key pair, encrypt a file with the public key, and decrypt it with the private key — then repeat with AES-256-CBC symmetric encryption and compare the performance',
          'Hash a file using MD5, SHA-1, and SHA-256 (using sha256sum or openssl dgst) — modify one character in the file and re-hash to demonstrate the avalanche effect where any change completely changes the hash',
          'Use openssl s_client to connect to five popular websites and document the TLS version, cipher suite, certificate issuer, and certificate expiration date for each — identify any security concerns'
        ],
        resources: [
          { name: 'Crypto 101 (Free Cryptography Course)', url: 'https://www.crypto101.io/' },
          { name: 'Serious Cryptography by Jean-Philippe Aumasson (No Starch Press)' },
          { name: 'NIST Post-Quantum Cryptography Standardization', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' }
        ]
      },
      {
        title: 'Security Policies & Frameworks',
        duration: '2 hours',
        overview: 'Security governance provides the structure that guides an organization\'s cybersecurity program. This module covers essential security frameworks, policies, standards, and compliance requirements that security professionals must understand to implement and maintain effective security programs.',
        topics: [
          {
            heading: 'NIST Cybersecurity Framework (CSF)',
            detail: 'The NIST CSF provides a flexible, risk-based approach to managing cybersecurity risk, organized into five core functions: Identify (asset management, risk assessment, business environment), Protect (access control, training, data security, maintenance), Detect (continuous monitoring, anomaly detection, security event analysis), Respond (response planning, communications, analysis, mitigation), and Recover (recovery planning, improvements, communications). Each function contains categories and subcategories mapping to specific outcomes. Implementation tiers (Partial, Risk Informed, Repeatable, Adaptive) describe organizational maturity. The framework is voluntary but widely adopted across industries and is required for US federal contractors. NIST CSF 2.0 added a sixth function — Govern — emphasizing organizational context and risk management strategy.'
          },
          {
            heading: 'ISO 27001 and the Information Security Management System',
            detail: 'ISO/IEC 27001 is an international standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It requires organizations to assess information security risks and apply appropriate controls from Annex A (93 controls in the 2022 version, organized into organizational, people, physical, and technological categories). Key requirements include: management commitment and leadership, risk assessment methodology definition, Statement of Applicability (SoA) documenting selected controls, internal audits, and management reviews. ISO 27001 certification is achieved through third-party audits and demonstrates to customers and partners that the organization follows internationally recognized security practices. ISO 27002 provides implementation guidance for the Annex A controls.'
          },
          {
            heading: 'CIS Controls and Benchmarks',
            detail: 'The Center for Internet Security (CIS) provides two key resources. CIS Critical Security Controls (v8) are 18 prioritized security actions organized into three Implementation Groups (IG1 for basic cyber hygiene, IG2 for moderate-complexity organizations, IG3 for mature security programs). The controls are: 1-Inventory and Control of Enterprise Assets, 2-Inventory and Control of Software Assets, 3-Data Protection, 4-Secure Configuration, 5-Account Management, and continuing through incident response and penetration testing. CIS Benchmarks provide detailed, consensus-based hardening guides for specific technologies (Windows, Linux, AWS, Azure, Docker, Kubernetes) with specific configuration recommendations. CIS-CAT Pro automates benchmark assessment. The CIS Controls are particularly valued because they are prescriptive, actionable, and prioritized — unlike broader frameworks, they tell you exactly what to implement and in what order.'
          },
          {
            heading: 'Compliance Regulations: GDPR, HIPAA, and PCI DSS',
            detail: 'Regulatory compliance imposes legal obligations for data protection. GDPR (General Data Protection Regulation) governs personal data of EU residents, requiring lawful processing basis, data minimization, breach notification within 72 hours, Data Protection Officer appointment, and granting individuals rights to access, rectify, and erase their data — violations can result in fines up to €20 million or 4% of global revenue. HIPAA (Health Insurance Portability and Accountability Act) protects electronic Protected Health Information (ePHI) in US healthcare, requiring administrative, physical, and technical safeguards defined in the Security Rule. PCI DSS (Payment Card Industry Data Security Standard) protects cardholder data with 12 requirements including network segmentation, encryption, vulnerability management, access control, monitoring, and regular testing. Understanding which regulations apply to your organization is essential for compliance and risk management.'
          },
          {
            heading: 'Security Policies, Standards, Procedures, and Guidelines',
            detail: 'Organizational security governance follows a document hierarchy. Policies are high-level statements of management intent and direction — for example, an Acceptable Use Policy defines permitted use of company resources. Standards specify mandatory technical requirements — for example, "all passwords must be at least 14 characters." Procedures provide step-by-step instructions for implementing standards — for example, a vulnerability patching procedure detailing how to test and deploy patches. Guidelines are recommended practices that are not mandatory. Key security policies include: Information Security Policy (overarching), Acceptable Use Policy (AUP), Access Control Policy, Incident Response Policy, Data Classification Policy, Remote Work Policy, BYOD (Bring Your Own Device) Policy, and Password Policy. Policies should be reviewed annually, approved by executive management, and acknowledged by all employees.'
          }
        ],
        keyTakeaways: [
          'NIST CSF organizes cybersecurity into six functions: Govern, Identify, Protect, Detect, Respond, and Recover',
          'ISO 27001 provides a certifiable ISMS standard with 93 controls in four categories',
          'CIS Controls offer prioritized, actionable security measures organized by implementation group maturity level',
          'GDPR, HIPAA, and PCI DSS impose legal data protection requirements with significant penalties for non-compliance',
          'Security governance documents follow a hierarchy: policies → standards → procedures → guidelines'
        ],
        practiceExercises: [
          'Map the CIS Critical Security Controls (at least IG1) to the NIST CSF functions — identify which controls support Identify, Protect, Detect, Respond, and Recover',
          'Draft an Acceptable Use Policy for a fictional 200-person company covering internet usage, email, social media, personal devices, and remote work — include enforcement and violation consequences',
          'Select a CIS Benchmark for an operating system you use — download the benchmark document, identify 10 critical hardening recommendations, and check whether your system complies'
        ],
        resources: [
          { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
          { name: 'CIS Critical Security Controls', url: 'https://www.cisecurity.org/controls/' },
          { name: 'SANS Security Policy Templates', url: 'https://www.sans.org/information-security-policy/' }
        ]
      },
      {
        title: 'Career Paths in Cybersecurity',
        duration: '2 hours',
        overview: 'The cybersecurity field offers diverse career paths spanning technical and non-technical roles. This module explores the major career domains, essential certifications, skill development strategies, and practical advice for entering and advancing in the cybersecurity profession.',
        topics: [
          {
            heading: 'Security Operations and Analysis (Blue Team)',
            detail: 'Blue team roles focus on defending organizations from cyber threats. SOC Analyst (Tier 1/2/3) is the most common entry point, monitoring SIEM alerts, triaging security events, and escalating incidents. Typical daily tasks include analyzing alerts from tools like Splunk, CrowdStrike, or Microsoft Sentinel, investigating phishing reports, reviewing firewall logs, and documenting incidents. Incident Responders handle confirmed security incidents — containment, eradication, recovery, and post-incident analysis. Threat Hunters proactively search for undetected threats using hypothesis-driven approaches and the MITRE ATT&CK framework. Security Engineers design and implement security infrastructure (firewalls, IDS/IPS, SIEM, EDR). Relevant certifications include CompTIA Security+, CompTIA CySA+ (Cybersecurity Analyst), GIAC GSEC, and BTL1 (Blue Team Level 1).'
          },
          {
            heading: 'Penetration Testing and Red Team (Offensive Security)',
            detail: 'Red team and penetration testing roles simulate real-world attacks to find and exploit vulnerabilities before malicious actors do. Penetration testers perform authorized assessments of networks, web applications, and systems using methodologies like PTES (Penetration Testing Execution Standard) and OWASP Testing Guide. Red team operators conduct adversary simulation exercises that test the organization\'s detection and response capabilities. Bug bounty hunters find vulnerabilities in programs run by companies like HackerOne and Bugcrowd. Essential skills include networking fundamentals, operating system expertise, scripting (Python, Bash, PowerShell), web application security, and familiarity with tools like Burp Suite, Metasploit, Nmap, and BloodHound. Key certifications include CompTIA PenTest+, Offensive Security OSCP (considered the gold standard for pentesters), GIAC GPEN, and eJPT (eLearnSecurity Junior Penetration Tester) as an entry-level option.'
          },
          {
            heading: 'Governance, Risk, and Compliance (GRC)',
            detail: 'GRC roles bridge technical security and business objectives. GRC analysts assess organizational risk, ensure compliance with regulations (GDPR, HIPAA, PCI DSS, SOX), conduct security audits, and develop security policies and procedures. Risk managers use frameworks like NIST RMF (Risk Management Framework) and ISO 31000 to identify, analyze, and prioritize security risks, then recommend controls proportionate to the risk level. Security auditors evaluate control effectiveness through internal and external assessments, testing whether documented policies are actually followed. These roles require strong communication skills to translate technical findings into business language for executive audiences. Certifications include ISACA CISA (Certified Information Systems Auditor), CRISC (Certified in Risk and Information Systems Control), ISC2 CISSP (for experienced professionals), and CompTIA Security+ as a foundation.'
          },
          {
            heading: 'Digital Forensics and Incident Response (DFIR)',
            detail: 'DFIR professionals investigate security incidents and analyze digital evidence. Digital forensics examiners preserve and analyze evidence from computers, mobile devices, networks, and cloud environments using tools like EnCase, FTK (Forensic Toolkit), Autopsy, Volatility (memory forensics), and Cellebrite (mobile forensics). The forensic process follows strict procedures: identification, preservation, collection, examination, analysis, and reporting — maintaining chain of custody documentation throughout. Incident response teams follow frameworks like NIST SP 800-61 (Incident Handling Guide): preparation, detection and analysis, containment and eradication, and post-incident activity. Malware analysts (reverse engineers) dissect malware using tools like IDA Pro, Ghidra, x64dbg, and sandbox environments to understand its behavior and develop detection signatures. Certifications include GIAC GCFE, GCFA, GNFA, and EnCE.'
          },
          {
            heading: 'Building Your Cybersecurity Career',
            detail: 'Breaking into cybersecurity requires a combination of knowledge, hands-on skills, and demonstrated initiative. Build technical skills through home labs (VirtualBox/VMware with vulnerable VMs like HackTheBox, TryHackMe, VulnHub), CTF competitions (Capture The Flag events), and open-source contributions. Certifications validate knowledge — start with CompTIA Security+ as the industry-standard entry certification, then specialize based on your interests. Networking through local security meetups (BSides, OWASP chapters, DEF CON groups), LinkedIn engagement, and cybersecurity communities (Reddit r/cybersecurity, Discord servers) opens doors. Create a portfolio: document projects on a blog or GitHub, share write-ups of CTF challenges, and build tools or scripts. Many professionals transition from IT support, network administration, or software development. The cybersecurity skills gap means qualified candidates are in high demand across all career paths.'
          }
        ],
        keyTakeaways: [
          'Cybersecurity careers span blue team (defense), red team (offense), GRC, DFIR, and many specialized domains',
          'SOC Analyst is the most common entry-level role, requiring SIEM, log analysis, and incident triage skills',
          'CompTIA Security+ is the foundational certification; OSCP is the gold standard for penetration testing',
          'Hands-on practice through CTFs, home labs, and platforms like TryHackMe and HackTheBox is essential',
          'The cybersecurity skills gap creates strong career opportunities for motivated and skilled professionals'
        ],
        practiceExercises: [
          'Create a 12-month cybersecurity career development plan — identify your target role, required skills, certifications to pursue, labs to build, and communities to join, with monthly milestones',
          'Complete the TryHackMe "Pre Security" or "Complete Beginner" learning path and document three key things you learned from each room',
          'Set up a cybersecurity home lab with VirtualBox — install Kali Linux, a Windows VM, and a vulnerable VM (Metasploitable or DVWA) — document the network configuration and perform your first vulnerability scan with Nmap'
        ],
        resources: [
          { name: 'TryHackMe — Guided Cybersecurity Learning', url: 'https://tryhackme.com/' },
          { name: 'HackTheBox — Cybersecurity Labs', url: 'https://www.hackthebox.com/' },
          { name: 'Cybersecurity Career Roadmap by Paul Jerimy', url: 'https://pauljerimy.com/security-certification-roadmap/' }
        ]
      }
    ]
  },
  {
    id: 'security-plus-prep',
    tier: 'beginner',
    title: 'Security+ Exam Prep',
    description: 'A comprehensive preparation course for the CompTIA Security+ SY0-701 certification exam. This course covers all five exam domains with detailed explanations, real-world examples, and exam-focused practice to help you pass the Security+ exam and establish the foundational cybersecurity certification recognized across the industry.',
    objectives: [
      'Master all five Security+ SY0-701 exam domains',
      'Understand general security concepts including zero trust and AAA',
      'Identify and mitigate threats, vulnerabilities, and common attacks',
      'Design secure network and cloud architectures',
      'Apply security operations including incident response and digital forensics',
      'Manage security programs including risk management, governance, and compliance'
    ],
    estimatedHours: 40,
    prerequisites: ['net-fundamentals', 'os-basics', 'intro-cybersec'],
    modules: [
      {
        title: 'General Security Concepts',
        duration: '7 hours',
        overview: 'This domain covers the foundational security concepts tested on the Security+ exam, including security controls, the AAA framework, zero trust architecture, cryptographic solutions, and gap analysis. Mastering these concepts provides the theoretical foundation for understanding all other exam domains.',
        topics: [
          {
            heading: 'Security Controls: Categories and Types',
            detail: 'Security controls are safeguards designed to reduce risk. They are categorized by function: Preventive (stop threats — firewalls, encryption, access controls), Detective (identify threats — IDS, log monitoring, SIEM), Corrective (remediate after incidents — patching, restoring backups), Deterrent (discourage threats — warning banners, security cameras, fences), Compensating (alternative controls when primary controls are infeasible), and Directive (guide behavior — policies, procedures, training). Controls are also classified by implementation type: Technical/Logical (hardware/software — firewalls, encryption, ACLs), Administrative/Managerial (policies, procedures, training, risk assessments), Physical (locks, guards, cameras, bollards), and Operational (day-to-day security activities). The exam tests your ability to classify controls and select appropriate types for given scenarios. Understanding that layered controls across categories provides defense in depth is essential.'
          },
          {
            heading: 'AAA Framework: Authentication, Authorization, and Accounting',
            detail: 'The AAA framework governs identity and access management. Authentication verifies identity through factors: something you know (passwords, PINs), something you have (smart cards, hardware tokens, authenticator apps), something you are (biometrics — fingerprint, facial recognition, iris scan), somewhere you are (geolocation, IP-based), and something you do (behavioral biometrics, typing patterns). Multi-factor authentication (MFA) combines two or more different factor types. Authorization determines what authenticated users can access, implemented through models like RBAC (Role-Based Access Control), ABAC (Attribute-Based Access Control), MAC (Mandatory Access Control using security labels), and DAC (Discretionary Access Control). Accounting logs user activities for audit trails. RADIUS (port 1812/1813) and TACACS+ (port 49, encrypts entire payload) are the primary AAA protocols for network access control.'
          },
          {
            heading: 'Zero Trust Architecture',
            detail: 'Zero Trust follows the principle of "never trust, always verify" — no entity (user, device, or network) is implicitly trusted regardless of location. Core tenets include: verify explicitly (authenticate and authorize based on all available data points), use least privilege access (JIT — Just-In-Time and JEA — Just-Enough-Access), and assume breach (minimize blast radius through segmentation and encryption). Key components include: the Policy Engine (decides access), the Policy Administrator (establishes/shuts down communication paths), the Policy Enforcement Point (enables/monitors/terminates connections), identity-based microsegmentation, continuous validation (not just at login), and device health checks. NIST SP 800-207 defines the architecture. Implementation technologies include Software-Defined Perimeter (SDP), identity-aware proxies (Google BeyondCorp), microsegmentation (Illumio, VMware NSX), and Conditional Access policies (Azure AD/Entra ID). Expect multiple exam questions on Zero Trust principles.'
          },
          {
            heading: 'Cryptographic Solutions for the Exam',
            detail: 'The Security+ exam tests cryptographic concepts thoroughly. Key topics include: symmetric algorithms (AES — current standard, 3DES — legacy, ChaCha20 — modern stream cipher), asymmetric algorithms (RSA — key exchange and digital signatures, ECC — efficient alternative, Diffie-Hellman — key agreement), hashing (SHA-256/SHA-3 — integrity verification, bcrypt/PBKDF2/Argon2 — password hashing), and digital signatures (hash + private key = non-repudiation). PKI concepts are heavily tested: Certificate Authorities (CA), Registration Authorities (RA), Certificate Revocation Lists (CRL), Online Certificate Status Protocol (OCSP), certificate pinning, certificate stapling, and wildcard vs. SAN certificates. Key management includes key escrow, key rotation, and key stretching. Know the differences between encryption modes (CBC, GCM, ECB) and when to use symmetric vs. asymmetric encryption. Post-quantum cryptography concepts may appear as emerging topics.'
          },
          {
            heading: 'Security Gap Analysis and Change Management',
            detail: 'Gap analysis compares current security posture against a desired framework or standard to identify deficiencies. The process involves: selecting a target framework (NIST CSF, CIS Controls, ISO 27001), assessing current controls and capabilities, documenting gaps between current and target states, prioritizing remediation based on risk, and developing a roadmap for implementation. Change management ensures that modifications to systems don\'t introduce vulnerabilities. Key elements include: documented change requests, impact and risk assessment, approval workflows (Change Advisory Board — CAB), testing in non-production environments, rollback procedures, and post-implementation review. Configuration management using baselines and tools like SCCM, Ansible, or Puppet ensures systems remain in a known-good state. The exam may present scenarios requiring you to identify gaps and recommend appropriate change management processes.'
          },
          {
            heading: 'Physical Security Controls',
            detail: 'Physical security protects hardware, facilities, and personnel from physical threats. Access control vestibules (mantraps) prevent tailgating by allowing only one person through at a time. Fencing and bollards provide perimeter defense (bollards specifically prevent vehicle-borne attacks). Badge readers and biometric locks control facility access. Security cameras (CCTV) with motion detection provide surveillance and deterrence. Environmental controls protect against non-human threats: fire suppression (wet pipe, dry pipe, pre-action, clean agent/FM-200), HVAC for temperature and humidity control, and UPS (Uninterruptible Power Supply) with generators for power continuity. Faraday cages block electromagnetic emanations. Sensor types include infrared, pressure, microwave, and ultrasonic for intrusion detection. Visitor management logs and escorts control non-employee access. The exam tests both the purpose and appropriate placement of these controls.'
          }
        ],
        keyTakeaways: [
          'Security controls are classified by function (preventive, detective, corrective, deterrent, compensating, directive) and type (technical, administrative, physical, operational)',
          'AAA encompasses authentication factors, authorization models, and accounting through RADIUS or TACACS+',
          'Zero Trust eliminates implicit trust — "never trust, always verify" with continuous validation and microsegmentation',
          'PKI, symmetric/asymmetric encryption, hashing, and digital signatures are heavily tested on the exam',
          'Gap analysis identifies security deficiencies; change management prevents security degradation during system modifications'
        ],
        practiceExercises: [
          'Create a study matrix of all security control categories and types — for each combination (e.g., preventive-technical, detective-administrative), list at least three real-world examples',
          'Design a zero trust architecture for a company with remote workers, cloud applications, and on-premises servers — identify the policy engine, enforcement points, and technologies you would implement',
          'Take a 20-question practice quiz covering Domain 1 topics — review each incorrect answer and create flashcards for the concepts you missed'
        ],
        resources: [
          { name: 'CompTIA Security+ SY0-701 Exam Objectives', url: 'https://www.comptia.org/certifications/security' },
          { name: 'Professor Messer Security+ Course (Free)', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' },
          { name: 'NIST SP 800-207: Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
        ]
      },
      {
        title: 'Threats, Vulnerabilities & Mitigations',
        duration: '8 hours',
        overview: 'This domain covers the broadest range of exam content — threat actors, attack techniques, vulnerability types, and mitigation strategies. You will learn to identify social engineering tactics, analyze malware categories, understand application and network vulnerabilities, and apply indicators of compromise to detect security incidents.',
        topics: [
          {
            heading: 'Threat Actors and Motivations',
            detail: 'The exam categorizes threat actors by attributes: Nation-state actors have the highest sophistication with virtually unlimited resources, motivated by espionage, sabotage, and influence operations (associated with APT designations). Organized crime is financially motivated, running ransomware-as-a-service, credential marketplaces, and BEC operations. Insider threats include both malicious (data theft, sabotage from disgruntled employees) and unintentional (negligent clicking on phishing, misconfiguration). Hacktivists pursue ideological goals through DDoS, defacement, and data leaks. Unskilled attackers (script kiddies) use pre-built tools without deep understanding. Shadow IT represents internal risk from unauthorized technology use. Motivations span: financial gain, espionage, disruption/chaos, philosophical/political beliefs, revenge, and warfare. Threat actor attributes include internal vs. external, level of sophistication/capability, resources/funding, and intent.'
          },
          {
            heading: 'Social Engineering Techniques',
            detail: 'Social engineering exploits human psychology. Phishing is the most common — mass emails impersonating trusted entities. Vishing (voice phishing) uses phone calls with urgency and authority. Smishing delivers phishing via SMS/text messages. Spear phishing targets specific individuals with personalized content. Whaling targets executives for high-value fraud. Business Email Compromise (BEC) involves compromising or spoofing executive accounts to authorize payments. Pretexting creates a false scenario to gain trust and extract information. Watering hole attacks compromise websites frequently visited by the target group. Typosquatting (URL hijacking) registers domains similar to legitimate ones (gogle.com vs. google.com). Brand impersonation creates fake social media profiles or websites. Misinformation and disinformation campaigns manipulate through false information. The exam tests recognition of each technique and appropriate defenses — primarily user awareness training, email filtering, and verification procedures.'
          },
          {
            heading: 'Malware Categories and Indicators',
            detail: 'The exam tests detailed malware knowledge. Ransomware encrypts files and demands payment (WannaCry, LockBit) — mitigations include offline backups, EDR, and network segmentation. Trojans disguise as legitimate software (Remote Access Trojans — RATs — provide persistent remote control). Worms self-propagate without user interaction through network vulnerabilities. Rootkits embed in the OS kernel or firmware to hide malicious activity — detected through offline boot scanning or integrity monitoring. Viruses require user action to activate and attach to host programs. Spyware/keyloggers covertly monitor activity and capture credentials. Bloatware/PUPs (Potentially Unwanted Programs) consume resources without being clearly malicious. Fileless malware operates entirely in memory using legitimate tools (PowerShell, WMI) — detected through behavior-based analysis rather than file signatures. Logic bombs trigger based on conditions (date, event). Indicators of compromise include unexpected outbound traffic, new/modified files, registry changes, unusual process behavior, and anomalous authentication patterns.'
          },
          {
            heading: 'Application Vulnerabilities',
            detail: 'Application-layer attacks are heavily tested. Injection attacks insert malicious input: SQL injection (manipulating database queries), XSS (Cross-Site Scripting — injecting client-side scripts, with Reflected, Stored, and DOM-based variants), LDAP injection, XML injection, and command injection. Buffer overflows write data beyond allocated memory boundaries, potentially allowing code execution — mitigated by ASLR (Address Space Layout Randomization) and DEP (Data Execution Prevention). Race conditions occur when timing-dependent code produces unexpected results (TOCTOU — Time of Check to Time of Use). Privilege escalation exploits misconfigurations or vulnerabilities to gain elevated access. API vulnerabilities include broken authentication, excessive data exposure, and lack of rate limiting. Improper error handling reveals internal information. Insecure coding practices include hard-coded credentials, lack of input validation, and improper certificate validation. OWASP Top 10 is the authoritative reference for web application risks.'
          },
          {
            heading: 'Network-Based Vulnerabilities and Attacks',
            detail: 'Network attacks exploit protocol and infrastructure weaknesses. On-path (man-in-the-middle) attacks intercept communications — ARP poisoning (Layer 2, using tools like Ettercap), DNS poisoning (redirecting name resolution), SSL stripping (downgrading HTTPS to HTTP using tools like sslstrip). DDoS attack types: volumetric (UDP floods, amplification using DNS, NTP, or memcached reflectors), protocol (SYN floods exhausting connection tables), and application-layer (HTTP slowloris, HTTP floods). Wireless attacks: evil twin (rogue AP mimicking legitimate SSID), deauthentication (forged 802.11 management frames), and WPA cracking. Bluetooth attacks: bluejacking (unsolicited messages), bluesnarfing (unauthorized data access). DNS attacks: zone transfer exploitation, domain hijacking, DNS tunneling. Password attacks: brute force, dictionary, password spraying, credential stuffing. The exam expects you to identify attack types from scenario descriptions and recommend appropriate mitigations.'
          },
          {
            heading: 'Vulnerability Management and Mitigation Techniques',
            detail: 'Vulnerability management is a continuous lifecycle. Vulnerability scanning tools (Nessus, Qualys, OpenVAS) identify known vulnerabilities using CVE identifiers and CVSS (Common Vulnerability Scoring System) scores for prioritization (0-10 scale: Low 0.1-3.9, Medium 4.0-6.9, High 7.0-8.9, Critical 9.0-10.0). Penetration testing validates exploitability — types include black box (no prior knowledge), white box (full knowledge), and gray box (partial knowledge). Mitigation techniques include: patching (highest priority for critical vulnerabilities), configuration hardening using CIS Benchmarks, network segmentation to limit blast radius, application firewalls (WAF) for virtual patching, input validation and parameterized queries for injection prevention, encryption for data protection, and compensating controls when direct remediation isn\'t immediately possible. Responsible disclosure involves reporting vulnerabilities to vendors and allowing a remediation window before public disclosure. Bug bounty programs incentivize responsible vulnerability discovery.'
          }
        ],
        keyTakeaways: [
          'Threat actors are characterized by sophistication, resources, motivation, and whether they are internal or external',
          'Social engineering targets human psychology — phishing, vishing, smishing, pretexting, and BEC are key exam topics',
          'Understand each malware type (ransomware, trojans, worms, rootkits, fileless) and their indicators of compromise',
          'Application attacks (SQLi, XSS, buffer overflow) and their mitigations are heavily tested',
          'Vulnerability management includes scanning (Nessus), scoring (CVSS), and remediation prioritization'
        ],
        practiceExercises: [
          'Create a threat actor comparison table with columns for type, sophistication, resources, motivation, and example — populate for nation-state, organized crime, insider, hacktivist, and unskilled attacker',
          'Take a 30-question practice quiz covering Domain 2 (Threats, Vulnerabilities, and Mitigations) — review incorrect answers and identify knowledge gaps',
          'Set up DVWA or WebGoat and practice identifying and exploiting SQL injection and XSS vulnerabilities at different security levels — document the payloads used and why they work'
        ],
        resources: [
          { name: 'CompTIA Security+ Study Guide: Exam SY0-701 by Mike Chapple and David Seidl (Sybex)' },
          { name: 'OWASP Top 10 (2021)', url: 'https://owasp.org/www-project-top-ten/' },
          { name: 'MITRE ATT&CK for Enterprise', url: 'https://attack.mitre.org/matrices/enterprise/' }
        ]
      },
      {
        title: 'Security Architecture',
        duration: '7 hours',
        overview: 'This domain covers the design and implementation of secure network architectures, cloud security, identity management, and resilience strategies. You will learn to compare security implications of different architecture models, apply secure design principles, and protect data across infrastructure types.',
        topics: [
          {
            heading: 'Secure Network Architecture',
            detail: 'Secure network design implements defense in depth through segmentation and controlled access. Network segmentation divides the network into security zones using firewalls, VLANs, and subnets. The DMZ (Demilitarized Zone) hosts public-facing services between external and internal firewalls. Jump servers (bastion hosts) provide controlled access to internal systems from external networks. Network Access Control (NAC) enforces endpoint compliance before granting network access using 802.1X authentication. Software-Defined Networking (SDN) separates the control plane from the data plane, enabling centralized, programmable network management and microsegmentation. Intrusion Detection/Prevention Systems (IDS/IPS) monitor traffic — NIDS monitors network segments while HIDS monitors individual hosts. Placement of security devices is critical: IDS/IPS typically behind the firewall, WAF in front of web servers, and DLP at network egress points. The exam tests architectural decisions for given scenarios.'
          },
          {
            heading: 'Cloud Security Concepts',
            detail: 'Cloud computing introduces shared responsibility models. In IaaS (Infrastructure as a Service — AWS EC2, Azure VMs), the customer manages OS, applications, and data while the provider manages hardware and hypervisors. In PaaS (Platform as a Service — AWS Lambda, Azure App Service), the provider additionally manages the OS and runtime. In SaaS (Software as a Service — Microsoft 365, Salesforce), the provider manages nearly everything, and the customer manages only data and access. Cloud security concerns include: data sovereignty (knowing where data is physically stored), vendor lock-in, insecure APIs, misconfigured storage (publicly accessible S3 buckets have caused massive breaches), insufficient identity management, and shared tenancy risks. Cloud-native security tools include AWS GuardDuty, Azure Defender, and GCP Security Command Center. Cloud Access Security Brokers (CASBs) provide visibility and control over cloud service usage.'
          },
          {
            heading: 'Identity and Access Management (IAM)',
            detail: 'IAM controls who can access what resources under what conditions. Federation allows users to authenticate once and access resources across multiple domains using standards like SAML (Security Assertion Markup Language — XML-based, used for SSO to web applications), OAuth 2.0 (authorization framework — grants limited access without sharing credentials), and OpenID Connect (OIDC — authentication layer built on OAuth 2.0). Single Sign-On (SSO) reduces credential fatigue and password reuse. Privileged Access Management (PAM) provides just-in-time elevated access with session recording and approval workflows. Directory services (Active Directory, LDAP) centralize identity management. Conditional Access policies evaluate context (device health, location, risk level) before granting access. Multi-factor authentication (MFA) should be mandatory for all privileged access and strongly recommended for all users. Account lifecycle management covers provisioning, review, and deprovisioning — orphaned accounts are a significant security risk.'
          },
          {
            heading: 'Secure Infrastructure Design',
            detail: 'Secure infrastructure implements hardening, monitoring, and resilience at every layer. Server hardening includes: removing unnecessary services, applying CIS Benchmarks, disabling unused ports, implementing host-based firewalls, and deploying EDR agents. Endpoint protection strategies include application whitelisting (allow only approved software), host-based firewalls, disk encryption (BitLocker, LUKS), and Mobile Device Management (MDM) for BYOD devices. Embedded and IoT device security requires network isolation (dedicated VLANs), firmware updates, changing default credentials, and disabling unnecessary services. Industrial Control Systems (ICS) and SCADA security follows NIST SP 800-82 guidelines with air-gapping where possible and monitoring with specialized tools. Containerization (Docker) and orchestration (Kubernetes) introduce new security considerations: image scanning, runtime protection, secrets management, and pod security policies.'
          },
          {
            heading: 'Data Protection and Privacy',
            detail: 'Data protection spans the entire data lifecycle: creation, storage, use, sharing, archiving, and destruction. Data classification (Public, Internal, Confidential, Restricted/Secret) determines the appropriate protection level. Encryption protects data at rest (AES-256, full disk encryption, database encryption) and in transit (TLS 1.3, IPsec VPN). Data Loss Prevention (DLP) tools monitor and prevent unauthorized data transfers across email, web, USB, and cloud storage — operating through content inspection (regex patterns for credit card numbers, SSNs), context analysis, and policy enforcement. Data masking and tokenization protect sensitive data in non-production environments. Rights management (DRM/IRM) controls how documents can be used, forwarded, or printed. Data destruction methods include cryptographic erasure (destroying encryption keys), degaussing (magnetic media), physical destruction (shredding), and secure overwriting (NIST 800-88 guidelines). Privacy-enhancing technologies and privacy by design principles align with GDPR and other privacy regulations.'
          },
          {
            heading: 'Resilience and Recovery Architecture',
            detail: 'Resilience ensures systems can withstand and recover from disruptions. High availability architectures use: load balancers distributing traffic across servers, clustering (active-active or active-passive), geographic distribution across availability zones and regions, and redundant network paths. Backup strategies follow the 3-2-1 rule (3 copies, 2 media types, 1 offsite) with RPO (Recovery Point Objective — maximum acceptable data loss) and RTO (Recovery Time Objective — maximum acceptable downtime) defining recovery requirements. Backup types include full (complete copy), incremental (changes since last backup), and differential (changes since last full backup). Site types for disaster recovery: hot site (fully operational duplicate — minutes to activate), warm site (hardware in place, needs data — hours to activate), cold site (empty facility — days to activate), and cloud-based DR. Business Continuity Planning (BCP) addresses maintaining operations during a disaster, while Disaster Recovery Planning (DRP) focuses on restoring IT systems. Both require regular testing through tabletop exercises, walkthroughs, and full-scale simulations.'
          }
        ],
        keyTakeaways: [
          'Secure network architecture uses segmentation, DMZ, NAC, and proper placement of security devices',
          'Cloud shared responsibility models vary by service type (IaaS vs. PaaS vs. SaaS)',
          'IAM includes federation (SAML, OAuth, OIDC), SSO, PAM, and conditional access',
          'Data protection spans the lifecycle with classification, encryption, DLP, and proper destruction',
          'Resilience requires HA architecture, backup strategy (3-2-1), and tested disaster recovery plans'
        ],
        practiceExercises: [
          'Design a secure network architecture diagram for a company migrating to a hybrid cloud environment — include on-premises segments, DMZ, cloud VPC, VPN connectivity, and appropriate security controls at each boundary',
          'Compare SAML, OAuth 2.0, and OpenID Connect — create a table listing the purpose, typical use case, data format, and protocol flow for each',
          'Take a 25-question practice quiz on Domain 3 (Security Architecture) — track your score by topic area and focus study on weak areas'
        ],
        resources: [
          { name: 'CompTIA Security+ Certification Practice Exams by Daniel Lachance (Sybex)' },
          { name: 'AWS Well-Architected Framework — Security Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/' },
          { name: 'NIST SP 800-82: Guide to ICS Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-82/rev-3/final' }
        ]
      },
      {
        title: 'Security Operations',
        duration: '8 hours',
        overview: 'This domain covers the operational aspects of cybersecurity — monitoring, detection, incident response, digital forensics, and automation. These skills form the daily work of security operations center (SOC) analysts and incident responders, making this domain critical for both the exam and practical cybersecurity careers.',
        topics: [
          {
            heading: 'Security Monitoring and SIEM',
            detail: 'Security monitoring provides visibility into organizational security posture through continuous collection and analysis of security data. SIEM (Security Information and Event Management) platforms aggregate logs from firewalls, IDS/IPS, endpoints, servers, and applications into a centralized platform for correlation, alerting, and investigation. Key SIEM capabilities include: log aggregation and normalization, real-time correlation rules (e.g., alert when 10 failed logins from the same IP in 5 minutes), dashboards and visualization, compliance reporting, and threat intelligence integration. SOAR (Security Orchestration, Automation, and Response) extends SIEM by automating incident response playbooks — for example, automatically blocking an IP address that triggers a correlation rule. Popular platforms include Splunk, Microsoft Sentinel, IBM QRadar, and Elastic Security. The exam tests understanding of SIEM concepts, log sources, and how correlation rules detect threats.'
          },
          {
            heading: 'Incident Response Process',
            detail: 'Incident response follows a structured methodology, typically based on NIST SP 800-61. Phase 1 — Preparation: developing IR plans, establishing communication channels, building IR toolkits, and training the team. Phase 2 — Detection and Analysis: identifying incidents through monitoring, determining scope and impact, classifying severity, and documenting findings. Phase 3 — Containment: short-term containment (isolating affected systems), evidence preservation (forensic imaging before changes), long-term containment (applying temporary fixes). Phase 4 — Eradication: removing the threat (malware removal, closing attack vectors, resetting compromised credentials). Phase 5 — Recovery: restoring systems from clean backups, verifying system integrity, monitoring for re-infection. Phase 6 — Post-Incident Activity (Lessons Learned): documenting timeline and actions taken, identifying root cause, updating detection rules and procedures, and reporting to stakeholders. The exam heavily tests scenario-based questions about appropriate actions at each phase.'
          },
          {
            heading: 'Digital Forensics Fundamentals',
            detail: 'Digital forensics involves the preservation, collection, analysis, and reporting of digital evidence. Legal hold notifications preserve relevant data during litigation. The order of volatility dictates evidence collection priority: CPU registers/cache (most volatile) → RAM → swap/page files → disk → remote logs → physical media (least volatile). Chain of custody documentation tracks evidence handling from collection through presentation, ensuring admissibility. Forensic imaging creates bit-for-bit copies using tools like dd (Linux), FTK Imager (Windows), or specialized hardware write blockers that prevent evidence modification. Analysis tools include Autopsy (disk forensics), Volatility (memory analysis — extracting running processes, network connections, and injected code from RAM dumps), and Wireshark (network forensics). Forensic analysis typically follows a timeline approach — reconstructing events chronologically using file system timestamps, log entries, and registry artifacts to tell the story of what happened.'
          },
          {
            heading: 'Endpoint Detection and Response (EDR) and XDR',
            detail: 'EDR solutions provide continuous monitoring and response capabilities on endpoints. Key capabilities include: real-time process monitoring and behavioral analysis, threat detection using indicators of attack (IOAs) and indicators of compromise (IOCs), automated response actions (process termination, file quarantine, network isolation), and forensic data collection for investigation. EDR goes beyond traditional antivirus by detecting fileless malware, living-off-the-land techniques, and advanced persistent threats through behavioral analysis rather than signature matching. XDR (Extended Detection and Response) extends EDR by correlating data across endpoints, network, email, cloud, and identity sources for unified threat detection. MDR (Managed Detection and Response) outsources monitoring and response to specialized providers. Major EDR/XDR solutions include CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, and Carbon Black. The exam tests understanding of how these solutions detect and respond to threats.'
          },
          {
            heading: 'Vulnerability Management Operations',
            detail: 'Operational vulnerability management is a continuous process. Vulnerability scanning occurs on regular schedules (weekly/monthly) and ad-hoc after major changes, using credentialed scans (authenticated, deeper visibility) and non-credentialed scans (external perspective). Results are prioritized using CVSS scores combined with asset criticality, exploitability (is a public exploit available?), and business context. Patch management follows a defined workflow: vulnerability identification, patch testing in non-production environments, staged deployment (pilot group then broad rollout), and verification. When patches cannot be immediately applied, compensating controls include WAF rules (virtual patching), network ACLs to limit exposure, disabling affected features, and enhanced monitoring. Configuration management using tools like Ansible, Puppet, or Chef ensures systems maintain secure baselines. Penetration testing validates the effectiveness of vulnerability management — scheduled tests and red team exercises provide real-world validation.'
          },
          {
            heading: 'Security Automation and Scripting',
            detail: 'Automation increases efficiency and consistency in security operations. Use cases include: automated alert triage (enriching alerts with threat intelligence lookups), automated incident response (blocking malicious IPs, isolating compromised hosts), automated vulnerability scanning and reporting, automated compliance checks against baselines, and automated user provisioning/deprovisioning. Scripting languages commonly used in security operations include Python (most versatile — libraries for API integration, log parsing, and automation), PowerShell (Windows-centric — Active Directory management, log analysis), and Bash (Linux automation — system administration, log processing). SOAR platforms (Splunk SOAR, Palo Alto XSOAR, Microsoft Sentinel Playbooks) provide low-code/no-code automation with pre-built integrations. Infrastructure as Code (IaC) tools like Terraform and CloudFormation enable reproducible, version-controlled infrastructure deployment. The exam tests understanding of automation benefits and appropriate use cases rather than specific coding knowledge.'
          }
        ],
        keyTakeaways: [
          'SIEM aggregates and correlates security logs for threat detection; SOAR automates incident response playbooks',
          'Incident response follows six phases: Preparation, Detection, Containment, Eradication, Recovery, and Lessons Learned',
          'Digital forensics preserves evidence integrity through chain of custody and follows the order of volatility',
          'EDR detects endpoint threats through behavioral analysis; XDR extends this across multiple security domains',
          'Security automation through scripting and SOAR increases efficiency and reduces human error in security operations'
        ],
        practiceExercises: [
          'Create an incident response playbook for a ransomware attack — document specific actions at each NIST phase including communication plans, containment strategies, and recovery procedures',
          'Practice forensic analysis by creating a memory dump from a test system using a tool like DumpIt, then analyze it with Volatility to identify running processes, network connections, and loaded DLLs',
          'Take a 30-question practice quiz on Domain 4 (Security Operations) — identify areas where you need additional study and create a targeted review plan'
        ],
        resources: [
          { name: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
          { name: 'Blue Team Field Manual (BTFM) by Alan White and Ben Clark' },
          { name: 'Splunk Free Training', url: 'https://www.splunk.com/en_us/training/free-courses.html' }
        ]
      },
      {
        title: 'Security Program Management',
        duration: '6 hours',
        overview: 'This domain covers the governance, risk management, and compliance aspects of cybersecurity program management. You will learn how to conduct risk assessments, implement governance structures, ensure regulatory compliance, manage third-party risk, and develop security awareness programs — skills essential for aligning security with business objectives.',
        topics: [
          {
            heading: 'Risk Management Concepts and Process',
            detail: 'Risk management identifies, assesses, and treats risks to organizational assets. Risk = Likelihood × Impact. Risk assessment methodologies include quantitative (using monetary values: SLE = Single Loss Expectancy, ALE = Annual Loss Expectancy = SLE × ARO, where ARO is Annualized Rate of Occurrence) and qualitative (using scales: High/Medium/Low based on expert judgment and risk matrices). Risk treatment options are: mitigate/reduce (implement controls to reduce likelihood or impact), transfer/share (insurance, outsourcing — note that accountability cannot be transferred), accept (when the cost of mitigation exceeds the risk — requires management sign-off and documentation), and avoid (eliminate the activity creating the risk). Risk appetite defines the overall level of risk an organization is willing to accept. Risk tolerance specifies the acceptable deviation from the risk appetite for specific situations. Risk registers document identified risks, their assessment, treatment decisions, owners, and review dates. The exam tests scenario-based risk assessment and treatment selection.'
          },
          {
            heading: 'Governance and Policy Framework',
            detail: 'Security governance establishes the organizational framework for managing cybersecurity. Key governance elements include: security policies (mandatory requirements approved by leadership), standards (specific technical requirements — e.g., minimum encryption strength), procedures (step-by-step implementation instructions), and guidelines (recommended practices). Important policies for the exam include: Acceptable Use Policy (AUP), Information Security Policy, Data Classification Policy, Incident Response Policy, Change Management Policy, and Remote Access Policy. Governance roles include: CISO (Chief Information Security Officer — overall security strategy), Data Owner (business leader responsible for data classification), Data Custodian (IT staff implementing controls), Data Processor (entity processing data on behalf of the controller), and Data Protection Officer (DPO — required under GDPR). Governance committees (security steering committee, change advisory board) provide oversight and decision-making authority. Board of directors engagement ensures security alignment with business strategy.'
          },
          {
            heading: 'Compliance and Legal Considerations',
            detail: 'Compliance ensures adherence to laws, regulations, and industry standards. Key regulations: GDPR (EU data privacy — 72-hour breach notification, right to erasure, DPO requirement, fines up to 4% global revenue or €20M), HIPAA (US healthcare — PHI protection, Business Associate Agreements, breach notification requirements), PCI DSS (payment card data — 12 requirements across 6 domains, quarterly vulnerability scans by ASV, annual penetration testing), SOX (Sarbanes-Oxley — financial reporting controls for publicly traded companies), and CCPA/CPRA (California consumer privacy — right to know, delete, opt-out of data sales). Industry frameworks: NIST CSF (voluntary, widely adopted), ISO 27001 (certifiable ISMS standard), SOC 2 (Trust Services Criteria for service organizations — Type I point-in-time vs. Type II over a period). Audit types include internal audits (self-assessment), external audits (third-party verification), and regulatory examinations. Non-compliance consequences include financial penalties, legal liability, loss of business, and reputational damage.'
          },
          {
            heading: 'Third-Party Risk Management',
            detail: 'Organizations must manage risks introduced by vendors, suppliers, and partners. The third-party risk management lifecycle includes: due diligence (assessing vendor security posture before engagement through questionnaires, SOC 2 reports, and security certifications), contractual requirements (SLAs defining security expectations, right-to-audit clauses, breach notification requirements, data handling and destruction obligations), ongoing monitoring (continuous assessment of vendor risk through security ratings services like BitSight or SecurityScorecard, periodic audits, and reviewing SOC reports), and offboarding (ensuring data return or destruction, revoking access, and contract termination procedures). Supply chain risk management addresses risks from hardware and software providers — verifying component integrity, requiring Software Bill of Materials (SBOM), and monitoring for supply chain compromises. The SolarWinds and Kaseya attacks demonstrated catastrophic supply chain risk. Vendor risk assessments should evaluate: data access, security certifications, incident history, geographic location, and business continuity capabilities.'
          },
          {
            heading: 'Security Awareness and Training',
            detail: 'Human factors are the most exploited vulnerability. Effective security awareness programs include: role-based training (executives receive different training than developers or general users), regular phishing simulations (using tools like GoPhish or KnowBe4 to test and train employees — track metrics like click rate, report rate, and time to report), onboarding security training for new employees, annual refresher training with updated content on current threats, gamification and engagement strategies (CTF competitions, security champions programs), and targeted training triggered by security events (additional training for employees who fail phishing tests). Training topics should cover: password hygiene and MFA usage, phishing recognition and reporting procedures, social engineering awareness, data handling and classification, physical security practices, acceptable use policies, and incident reporting procedures. Metrics to track include: phishing simulation results over time, training completion rates, security incident trends, and help desk security-related ticket volumes.'
          },
          {
            heading: 'Exam Strategy and Review',
            detail: 'The CompTIA Security+ SY0-701 exam contains up to 90 questions (multiple choice and performance-based) with 90 minutes allotted. A score of 750 on a scale of 100-900 is required to pass. Performance-based questions (PBQs) appear first and simulate real-world scenarios — tasks like configuring a firewall, analyzing logs, or matching threats to mitigations. Strategy: skip PBQs initially and return to them after completing multiple-choice questions, which may provide contextual hints. For multiple-choice questions: read the entire question including all answer choices, identify keywords like "BEST," "MOST," "FIRST," and "LEAST," eliminate obviously wrong answers, and consider the business context in scenario questions. Study resources should include official CompTIA objectives (know every bullet point), a primary study guide, video courses, and extensive practice exams. Practice exams from multiple sources (CompTIA CertMaster, Dion Training, Professor Messer) provide the best preparation — aim for consistently scoring 85%+ before scheduling the exam.'
          }
        ],
        keyTakeaways: [
          'Risk treatment options are mitigate, transfer, accept, and avoid — the exam tests scenario-based selection',
          'Security governance follows a hierarchy: policies → standards → procedures → guidelines',
          'Compliance regulations (GDPR, HIPAA, PCI DSS) impose specific security requirements with significant penalties',
          'Third-party risk management addresses vendor, supplier, and supply chain security through the entire relationship lifecycle',
          'Security awareness training with phishing simulations measurably reduces human-factor risk'
        ],
        practiceExercises: [
          'Calculate the ALE for three risk scenarios using quantitative risk assessment — determine the Asset Value, Exposure Factor, SLE, ARO, and ALE for each, then recommend risk treatment based on the cost of available controls',
          'Take a full-length Security+ practice exam (90 questions, 90 minutes) under exam conditions — review all incorrect answers and create a focused study plan for your weakest domains',
          'Create a vendor risk assessment questionnaire with at least 20 questions covering security controls, compliance certifications, incident response capabilities, data handling practices, and business continuity'
        ],
        resources: [
          { name: 'CompTIA Security+ SY0-701 Official Study Guide' },
          { name: 'Dion Training Security+ Practice Exams', url: 'https://www.diontraining.com/' },
          { name: 'Professor Messer Security+ Practice Exams', url: 'https://www.professormesser.com/' }
        ]
      }
    ]
  }
];
