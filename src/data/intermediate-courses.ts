import { Course } from '../types';

export const intermediateCourses: Course[] = [
  {
    id: 'siem-log-analysis',
    tier: 'intermediate',
    title: 'SIEM & Log Analysis',
    description: 'Master Security Information and Event Management (SIEM) systems and log analysis techniques used by SOC analysts and security engineers. This course covers industry-leading platforms including Splunk and the ELK Stack, teaching you to ingest, parse, search, correlate, and visualize security log data to detect and investigate threats in enterprise environments.',
    objectives: [
      'Understand SIEM architecture, deployment models, and data flow pipelines',
      'Configure and operate Splunk for security monitoring and investigation',
      'Deploy and use the ELK Stack (Elasticsearch, Logstash, Kibana) for log analysis',
      'Parse and normalize logs from diverse sources including firewalls, endpoints, and cloud services',
      'Write advanced search queries using SPL and KQL to hunt for threats',
      'Create correlation rules and alerts to detect suspicious activity patterns',
      'Build operational dashboards for real-time security monitoring',
      'Conduct end-to-end incident investigations using SIEM data'
    ],
    estimatedHours: 30,
    prerequisites: ['security-plus-prep'],
    modules: [
      {
        title: 'Introduction to SIEM',
        duration: '3 hours',
        overview: 'This module introduces Security Information and Event Management (SIEM) systems, their role in modern security operations centers, and how they aggregate and correlate log data from across an enterprise. You will learn about different SIEM architectures, deployment models, and how SIEM fits into the broader security monitoring ecosystem.',
        topics: [
          {
            heading: 'What is SIEM and Why It Matters',
            detail: 'SIEM systems aggregate log data from network devices, servers, applications, and endpoints into a centralized platform for real-time analysis and historical investigation. Modern SOCs rely on SIEM as their primary tool for threat detection, compliance reporting, and incident response. Without centralized logging, security teams face blind spots that adversaries exploit during lateral movement and data exfiltration.'
          },
          {
            heading: 'SIEM Architecture & Components',
            detail: 'A typical SIEM architecture includes log collectors (agents or agentless forwarders), a message bus or queue (such as Kafka or RabbitMQ), a parsing and normalization engine, a storage backend (hot/warm/cold tiers), and a search and visualization layer. Understanding the data pipeline from ingestion to indexing is critical for troubleshooting performance issues and ensuring complete visibility.'
          },
          {
            heading: 'SIEM Deployment Models',
            detail: 'SIEM solutions can be deployed on-premises, in the cloud (cloud-native SIEM like Microsoft Sentinel or Google Chronicle), or as hybrid architectures. Each model has trade-offs in terms of cost, scalability, data sovereignty, and operational complexity. Cloud-native SIEMs offer elastic scaling and reduced infrastructure overhead but may raise concerns about data residency and vendor lock-in.'
          },
          {
            heading: 'Key SIEM Platforms in the Industry',
            detail: 'The SIEM market includes commercial leaders like Splunk Enterprise Security, IBM QRadar, Microsoft Sentinel, and LogRhythm, alongside open-source options like the ELK Stack (Elasticsearch, Logstash, Kibana) and Wazuh. Each platform has distinct strengths in areas like threat intelligence integration, user behavior analytics (UBA), and SOAR automation capabilities.'
          },
          {
            heading: 'Log Management vs. SIEM vs. XDR',
            detail: 'Log management focuses on collection and retention for compliance, while SIEM adds real-time correlation and alerting. Extended Detection and Response (XDR) platforms extend SIEM capabilities by natively integrating endpoint, network, and cloud telemetry with automated response actions. Understanding these distinctions helps organizations choose the right tooling for their security maturity level.'
          },
          {
            heading: 'SIEM Use Cases & ROI',
            detail: 'Common SIEM use cases include detecting brute-force attacks, identifying anomalous user behavior, monitoring privileged access, tracking lateral movement, and generating compliance reports for standards like PCI DSS, HIPAA, and SOX. Demonstrating SIEM ROI requires mapping detections to risk reduction and showing mean-time-to-detect (MTTD) and mean-time-to-respond (MTTR) improvements.'
          }
        ],
        keyTakeaways: [
          'SIEM is the central nervous system of a SOC, aggregating and correlating logs from across the enterprise',
          'Understanding SIEM architecture (collectors, parsers, indexers, dashboards) is essential for effective deployment',
          'Cloud-native SIEM platforms offer scalability advantages but require careful evaluation of data residency requirements',
          'SIEM ROI is measured through improved detection rates, reduced MTTD/MTTR, and compliance coverage'
        ],
        practiceExercises: [
          'Diagram a SIEM architecture for a mid-sized enterprise with on-premises servers, cloud workloads, and remote endpoints, identifying all log sources and data flows',
          'Compare three SIEM platforms (Splunk, ELK Stack, Microsoft Sentinel) across five criteria: cost, scalability, ease of use, integration ecosystem, and threat detection capabilities',
          'Write a one-page business justification for implementing a SIEM solution, including expected ROI metrics and compliance benefits'
        ],
        resources: [
          { name: 'The Practice of Network Security Monitoring by Richard Bejtlich' },
          { name: 'Splunk Documentation - Getting Started', url: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial' },
          { name: 'SANS SEC555: SIEM with Tactical Analytics' }
        ]
      },
      {
        title: 'Splunk Fundamentals',
        duration: '4.5 hours',
        overview: 'Dive deep into Splunk, the industry-leading SIEM platform used by thousands of organizations worldwide. This module covers Splunk architecture, data ingestion, the Search Processing Language (SPL), and essential security use cases that SOC analysts encounter daily.',
        topics: [
          {
            heading: 'Splunk Architecture & Data Pipeline',
            detail: 'Splunk consists of forwarders (universal and heavy), indexers, and search heads. Universal forwarders are lightweight agents installed on endpoints that send raw log data to indexers. Heavy forwarders can parse and filter data before forwarding. Indexers process incoming data through a pipeline of parsing, merging, and typing phases before storing events in indexes organized by time.'
          },
          {
            heading: 'Installing and Configuring Splunk',
            detail: 'Splunk can be installed on Linux, Windows, or macOS, and is also available as Splunk Cloud. Key configuration files include inputs.conf (data inputs), props.conf (parsing rules), transforms.conf (field extractions), and outputs.conf (forwarding targets). Understanding the configuration file hierarchy (default, local, app) is essential for maintaining clean deployments.'
          },
          {
            heading: 'Data Ingestion & Source Types',
            detail: 'Splunk ingests data through file monitoring, network inputs (TCP/UDP syslog on port 514), scripted inputs, HTTP Event Collector (HEC), and modular inputs. Source types tell Splunk how to parse incoming data — built-in source types handle common formats like syslog, WinEventLog, and JSON, while custom source types can be created for proprietary log formats using regex-based field extractions.'
          },
          {
            heading: 'Search Processing Language (SPL) Basics',
            detail: 'SPL is Splunk\'s powerful query language that uses a pipe-delimited syntax similar to Unix commands. Basic commands include search, where, table, stats, chart, timechart, eval, rex, and dedup. A typical SPL query starts with a search term, filters results, transforms data through statistical commands, and presents output in tables or visualizations. Example: index=firewall sourcetype=paloalto action=blocked | stats count by src_ip | sort -count | head 10.'
          },
          {
            heading: 'SPL for Security Analysis',
            detail: 'Security-focused SPL queries leverage commands like transaction (to group related events), eventstats (to add statistical context), and streamstats (for running calculations). Detecting brute-force attacks might use: index=auth sourcetype=linux_secure failed | stats count by src_ip, user | where count > 10. Hunting for lateral movement involves correlating authentication events across multiple hosts within time windows.'
          },
          {
            heading: 'Lookups, Macros, and Knowledge Objects',
            detail: 'Splunk knowledge objects extend search capabilities. Lookups enrich events with external data (e.g., mapping IP addresses to asset owners using CSV files). Search macros store reusable SPL snippets that can be invoked with backtick notation. Calculated fields, event types, and tags help standardize data across different log sources using Splunk\'s Common Information Model (CIM).'
          },
          {
            heading: 'Splunk Enterprise Security (ES) Overview',
            detail: 'Splunk ES is the premium security app that provides pre-built correlation searches, notable events, investigation workbenches, and risk-based alerting (RBA). It uses the CIM data model to normalize events from different sources. Adaptive Response actions can automatically trigger containment steps like blocking IPs on a firewall or disabling user accounts when high-fidelity alerts fire.'
          }
        ],
        keyTakeaways: [
          'Splunk\'s forwarder-indexer-search head architecture enables scalable log collection and analysis',
          'SPL is a powerful pipe-based query language essential for security investigations',
          'Proper source type configuration and field extraction are critical for accurate search results',
          'Splunk Enterprise Security adds pre-built security content and risk-based alerting on top of core Splunk',
          'Knowledge objects like lookups, macros, and CIM compliance improve search efficiency and data consistency'
        ],
        practiceExercises: [
          'Install Splunk Free on a local VM, ingest sample firewall logs, and write five SPL queries to identify top talkers, blocked connections, and geographic anomalies',
          'Create a lookup table mapping internal IP ranges to department names and use it to enrich authentication log searches',
          'Write an SPL query that detects potential brute-force attacks by identifying more than 10 failed login attempts from a single IP within 5 minutes',
          'Build a search macro that encapsulates a multi-step threat hunting query and invoke it with different parameters'
        ],
        resources: [
          { name: 'Splunk Search Reference Documentation', url: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference' },
          { name: 'Splunk Fundamentals 1 (Free Training)', url: 'https://education.splunk.com/catalog' },
          { name: 'SANS SEC555: SIEM with Tactical Analytics' }
        ]
      },
      {
        title: 'ELK Stack Overview',
        duration: '4 hours',
        overview: 'Explore the open-source ELK Stack (Elasticsearch, Logstash, Kibana) as a powerful alternative for security log management and analysis. This module covers the architecture of each component, deployment considerations, and how to use the stack for security monitoring and threat hunting.',
        topics: [
          {
            heading: 'Elasticsearch Architecture & Concepts',
            detail: 'Elasticsearch is a distributed search and analytics engine built on Apache Lucene. It stores data in indices composed of shards (primary and replica) distributed across nodes in a cluster. Key concepts include documents (JSON records), mappings (schema definitions), and analyzers (text processing pipelines). For security use cases, Elasticsearch excels at full-text search across millions of log events with sub-second query response times.'
          },
          {
            heading: 'Logstash Pipeline Configuration',
            detail: 'Logstash processes data through three stages: input, filter, and output. Input plugins receive data from sources like Beats agents, syslog, Kafka, or file monitoring. Filter plugins transform data using grok patterns (regex-based field extraction), mutate (field manipulation), date (timestamp parsing), and geoip (geographic enrichment). Output plugins send processed data to Elasticsearch, files, or other destinations.'
          },
          {
            heading: 'Kibana for Security Visualization',
            detail: 'Kibana provides the visualization layer for the ELK Stack, offering Discover (ad-hoc log exploration), Visualize (charts, graphs, and maps), Dashboard (combined visualizations), and Lens (drag-and-drop analytics). The Elastic Security app within Kibana includes SIEM features like timeline investigation, detection rules, and case management, bringing SIEM-grade functionality to the open-source stack.'
          },
          {
            heading: 'Beats & Elastic Agent',
            detail: 'Beats are lightweight data shippers installed on endpoints. Filebeat collects log files, Winlogbeat captures Windows Event Logs, Packetbeat analyzes network traffic, Auditbeat monitors file integrity and system auditing, and Metricbeat gathers system performance metrics. Elastic Agent is a unified agent that replaces individual Beats and is managed centrally through Fleet in Kibana.'
          },
          {
            heading: 'Index Management & Data Lifecycle',
            detail: 'Managing Elasticsearch indices is critical for performance and cost. Index Lifecycle Management (ILM) policies automatically transition indices through hot, warm, cold, and delete phases based on age or size. Data streams simplify time-series data management by automatically creating backing indices. Proper shard sizing (target 10-50 GB per shard) prevents cluster performance degradation.'
          },
          {
            heading: 'KQL and Lucene Query Syntax',
            detail: 'Kibana Query Language (KQL) provides a simplified syntax for filtering data in Kibana: source.ip: "192.168.1.100" and event.action: "denied". Lucene query syntax offers more advanced capabilities including wildcards, fuzzy matching, and proximity searches. For security analysis, combining KQL filters with Elasticsearch aggregations enables rapid threat hunting across billions of log events.'
          }
        ],
        keyTakeaways: [
          'The ELK Stack provides enterprise-grade log analysis capabilities as an open-source solution',
          'Logstash grok patterns are essential for parsing unstructured log data into searchable fields',
          'Elastic Security brings SIEM-grade detection and investigation features to the ELK Stack',
          'Proper index lifecycle management is critical for maintaining cluster performance at scale',
          'Beats and Elastic Agent provide lightweight, centrally managed data collection from endpoints'
        ],
        practiceExercises: [
          'Deploy an ELK Stack using Docker Compose, configure Filebeat to ingest auth.log, and explore events in Kibana Discover',
          'Write a Logstash pipeline with grok patterns to parse Apache access logs, extracting client IP, HTTP method, URI, status code, and response size',
          'Create a Kibana dashboard with visualizations showing top source IPs, failed authentication trends over time, and a geographic map of connection origins'
        ],
        resources: [
          { name: 'Elastic Documentation', url: 'https://www.elastic.co/guide/index.html' },
          { name: 'Elasticsearch: The Definitive Guide', url: 'https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html' },
          { name: 'Elastic Security Guide', url: 'https://www.elastic.co/guide/en/security/current/index.html' }
        ]
      },
      {
        title: 'Log Sources & Parsing',
        duration: '3.5 hours',
        overview: 'Understanding where security-relevant logs originate and how to parse them into structured, searchable data is fundamental to effective SIEM operations. This module covers the most critical log sources in enterprise environments, log formats, normalization strategies, and common parsing challenges.',
        topics: [
          {
            heading: 'Windows Event Logs',
            detail: 'Windows Event Logs are a goldmine for security monitoring. Key channels include Security (Event IDs 4624/4625 for logon success/failure, 4688 for process creation, 4720 for account creation), System, and PowerShell (Script Block Logging Event ID 4104). Enabling advanced audit policies and Sysmon provides deeper visibility into process creation, network connections, registry modifications, and file creation events critical for detecting malware and lateral movement.'
          },
          {
            heading: 'Linux System Logs',
            detail: 'Linux systems generate logs through syslog (rsyslog or syslog-ng) and systemd journal. Key log files include /var/log/auth.log (authentication events), /var/log/syslog (system events), /var/log/secure (RHEL/CentOS authentication), and application-specific logs. Auditd provides fine-grained system call logging configured through audit rules. The Linux Audit Framework can monitor file access, privilege escalation, and process execution with detailed context.'
          },
          {
            heading: 'Network Device Logs',
            detail: 'Firewalls (Palo Alto, Fortinet, pfSense), routers, switches, and proxies generate critical network telemetry. Firewall logs capture connection attempts (allow/deny), NAT translations, and threat detections. Proxy logs (Squid, Zscaler, BlueCoat) reveal web browsing activity, blocked URLs, and potential C2 communication. NetFlow/IPFIX data from routers provides network traffic metadata including source/destination IPs, ports, protocols, byte counts, and session duration.'
          },
          {
            heading: 'Cloud Service Logs',
            detail: 'AWS CloudTrail logs API calls across all AWS services, VPC Flow Logs capture network traffic metadata, and GuardDuty generates threat findings. Azure Activity Log, Azure AD Sign-in Logs, and Microsoft Defender logs provide similar visibility in Azure environments. GCP Cloud Audit Logs and VPC Flow Logs cover Google Cloud. Ingesting cloud logs typically requires configuring S3 bucket exports, Event Hub streaming, or API-based collection.'
          },
          {
            heading: 'Log Formats & Normalization',
            detail: 'Logs arrive in diverse formats: CEF (Common Event Format), LEEF (Log Event Extended Format), JSON, key-value pairs, CSV, and unstructured text. Normalization maps disparate field names to a common schema — for example, mapping src, source_ip, and SrcAddr all to source.address. Frameworks like Elastic Common Schema (ECS) and Splunk CIM provide standardized field mappings that enable cross-source correlation.'
          },
          {
            heading: 'Parsing Techniques & Regex',
            detail: 'Parsing transforms raw log text into structured fields using regular expressions (regex), delimiters, or JSON parsing. Grok patterns in Logstash/Elasticsearch combine named regex groups with pre-built patterns (e.g., %{IP:client_ip} %{WORD:action}). Splunk uses props.conf and transforms.conf with regex for field extraction. Testing parsers against sample data is essential — tools like regex101.com and Grok Debugger help validate patterns before deployment.'
          }
        ],
        keyTakeaways: [
          'Windows Event IDs (4624, 4625, 4688, 4720) and Sysmon logs are critical for endpoint visibility',
          'Network device logs from firewalls, proxies, and NetFlow provide essential east-west and north-south traffic visibility',
          'Cloud audit logs (CloudTrail, Azure Activity Log, GCP Audit Logs) are essential for monitoring cloud workloads',
          'Normalization using frameworks like ECS or CIM enables cross-source correlation and consistent querying',
          'Regular expressions and grok patterns are the primary tools for parsing unstructured log data'
        ],
        practiceExercises: [
          'Configure Windows Advanced Audit Policy and Sysmon on a test system, then identify and collect the five most security-relevant Event IDs',
          'Write regex patterns to parse three different log formats: a Palo Alto firewall log, an Apache access log, and a JSON-formatted AWS CloudTrail event',
          'Create a field mapping table that normalizes source IP, destination IP, username, action, and timestamp fields across Windows, Linux, and firewall log sources'
        ],
        resources: [
          { name: 'Windows Security Log Encyclopedia', url: 'https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/' },
          { name: 'Sysmon Documentation', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon' },
          { name: 'Elastic Common Schema Reference', url: 'https://www.elastic.co/guide/en/ecs/current/index.html' }
        ]
      },
      {
        title: 'Writing Search Queries',
        duration: '4 hours',
        overview: 'Effective security analysis depends on the ability to write precise, efficient search queries that surface threats from massive volumes of log data. This module teaches advanced query techniques across major SIEM platforms, focusing on security-specific search patterns used in real-world threat hunting and investigations.',
        topics: [
          {
            heading: 'SPL Advanced Techniques',
            detail: 'Beyond basic search commands, advanced SPL leverages subsearches (to dynamically filter based on related data), the map command (iterating over results), and the tstats command (accelerated searches against data models). Time-based correlation uses the transaction command or join operations to link events across time windows. Example: finding login success immediately after multiple failures uses eventstats and where clauses to calculate failure counts per user before successful authentication.'
          },
          {
            heading: 'KQL & Elasticsearch Queries',
            detail: 'Kibana Query Language supports field-based filtering, boolean operators, and nested queries. For deeper analysis, Elasticsearch Query DSL uses JSON-based queries including bool (must, should, must_not), range (timestamp filtering), and wildcard queries. Aggregations in Elasticsearch (terms, date_histogram, cardinality, significant_terms) provide powerful statistical analysis. ES|QL is Elastic\'s newer pipe-based query language offering SPL-like syntax within the Elastic ecosystem.'
          },
          {
            heading: 'Query Optimization & Performance',
            detail: 'Poorly written queries can overwhelm SIEM infrastructure and delay investigations. Optimization techniques include narrowing time ranges (always specify the smallest relevant window), filtering on indexed fields early in the query pipeline, avoiding wildcards at the beginning of search terms, using summary indexes or data model acceleration for frequently run searches, and leveraging bloom filters for rare term searches in Splunk.'
          },
          {
            heading: 'Threat Hunting Query Patterns',
            detail: 'Effective threat hunting uses hypothesis-driven queries targeting specific TTPs from the MITRE ATT&CK framework. Common patterns include stack counting (finding rare values among common ones), long-tail analysis (identifying statistical outliers), time-series anomaly detection (spotting unusual spikes or patterns), and join-based correlation (linking events across data sources). Example: hunting for DNS exfiltration by identifying domains with unusually high query volumes or long subdomain strings.'
          },
          {
            heading: 'Sigma Rules & Cross-Platform Detection',
            detail: 'Sigma is an open standard for writing detection rules in a platform-agnostic YAML format that can be converted to SPL, KQL, or other query languages using tools like sigmac or pySigma. A Sigma rule specifies log source, detection logic, and metadata (severity, MITRE ATT&CK mapping, false positive conditions). The SigmaHQ repository on GitHub contains thousands of community-contributed detection rules that can be directly deployed to your SIEM.'
          },
          {
            heading: 'Building Reusable Search Libraries',
            detail: 'Mature SOCs maintain libraries of curated search queries organized by MITRE ATT&CK tactic and technique. These libraries include detection queries (automated alerts), hunting queries (analyst-driven exploration), and investigation queries (incident-specific deep dives). Documenting each query with its purpose, expected false positives, and required log sources ensures consistency across analyst shifts and reduces onboarding time for new team members.'
          }
        ],
        keyTakeaways: [
          'Advanced SPL techniques like subsearches, tstats, and transaction enable complex security correlation',
          'Elasticsearch aggregations and ES|QL provide powerful analytical capabilities for threat hunting',
          'Query optimization is critical for maintaining SIEM performance during investigations',
          'Sigma rules enable platform-agnostic detection logic that can be shared across SIEM platforms',
          'Maintaining curated query libraries organized by MITRE ATT&CK improves SOC consistency and efficiency'
        ],
        practiceExercises: [
          'Write a Sigma rule to detect a suspicious PowerShell download cradle (IEX with WebClient) and convert it to both SPL and KQL using pySigma',
          'Create an SPL query using tstats against the Authentication data model to identify accounts logging into more than five unique hosts within one hour',
          'Build an Elasticsearch aggregation query that identifies the top 20 rare process names executed across all endpoints in the last 24 hours, sorted by host count',
          'Write a threat hunting query to detect potential DNS tunneling by identifying DNS queries with subdomain lengths exceeding 50 characters'
        ],
        resources: [
          { name: 'SigmaHQ Detection Rules Repository', url: 'https://github.com/SigmaHQ/sigma' },
          { name: 'Splunk Security Essentials App', url: 'https://splunkbase.splunk.com/app/3435' },
          { name: 'SANS Threat Hunting with Splunk Course (SEC497)' }
        ]
      },
      {
        title: 'Alert Rules & Correlation',
        duration: '4 hours',
        overview: 'Transform raw log data into actionable security alerts through correlation rules, risk-based alerting, and tuning methodologies. This module teaches you to design detection logic that catches real threats while minimizing false positives, a critical skill that separates effective SOCs from overwhelmed ones.',
        topics: [
          {
            heading: 'Alert Rule Design Principles',
            detail: 'Effective alert rules balance detection coverage with operational feasibility. The Detection Engineering lifecycle includes identifying the threat (based on threat intelligence or MITRE ATT&CK), defining the detection logic, testing against known-good and known-bad data, deploying to production, and continuously tuning based on feedback. Alert fidelity is paramount — a rule that generates 500 false positives per day is worse than no rule at all because it creates alert fatigue.'
          },
          {
            heading: 'Correlation Rules & Multi-Event Detection',
            detail: 'Single-event alerts (e.g., any failed login) generate excessive noise. Correlation rules combine multiple events to identify meaningful patterns: multiple failed logins followed by a success (credential stuffing), a new user account created followed immediately by privilege escalation (insider threat or compromised admin), or outbound traffic to a known-bad IP after a suspicious email attachment was opened (phishing-to-C2 chain). Time windows and event sequencing are critical parameters.'
          },
          {
            heading: 'Risk-Based Alerting (RBA)',
            detail: 'Risk-Based Alerting assigns risk scores to individual events based on their severity, the criticality of the affected asset, and the reliability of the detection. Instead of alerting on every suspicious event, RBA accumulates risk scores per entity (user or host) and triggers an alert only when the cumulative score exceeds a threshold within a time window. Splunk ES implements RBA through Risk Notable events, dramatically reducing alert volume while improving detection of complex attack chains.'
          },
          {
            heading: 'Threshold, Anomaly, and Behavior-Based Detection',
            detail: 'Threshold-based rules fire when a count exceeds a static value (e.g., more than 50 failed logins in 5 minutes). Anomaly-based detection uses statistical baselines to identify deviations (e.g., a user downloading 10x their normal data volume). Behavior-based detection (UEBA) builds profiles of normal entity behavior and flags departures. Each approach has strengths: thresholds are simple and predictable, anomalies catch novel attacks, and behavior-based detection excels at insider threats.'
          },
          {
            heading: 'Alert Tuning & False Positive Reduction',
            detail: 'Alert tuning is an iterative process of reviewing triggered alerts, identifying false positive patterns, and refining detection logic. Common tuning techniques include adding allowlists for known-good activity (service accounts, scheduled tasks), narrowing scope to high-value assets, adjusting time windows and thresholds, and adding negative conditions to exclude benign patterns. Document all tuning decisions in the alert documentation to maintain institutional knowledge.'
          },
          {
            heading: 'Detection-as-Code & Version Control',
            detail: 'Modern detection engineering treats alert rules as code, storing them in Git repositories with version history, peer review through pull requests, and automated testing using CI/CD pipelines. Tools like Splunk\'s ESCU (Enterprise Security Content Update), Elastic\'s Detection Rules repository, and custom frameworks enable detection-as-code workflows. This approach ensures consistency, accountability, and the ability to roll back problematic changes.'
          }
        ],
        keyTakeaways: [
          'Correlation rules combining multiple events dramatically reduce false positives compared to single-event alerts',
          'Risk-Based Alerting accumulates risk scores per entity, surfacing complex attack chains that individual alerts miss',
          'Alert tuning is an ongoing process that requires documented decisions and regular review cycles',
          'Detection-as-Code practices bring software engineering rigor to alert rule management',
          'Balancing detection coverage with alert volume is the core challenge of security operations'
        ],
        practiceExercises: [
          'Design a correlation rule that detects a potential brute-force attack followed by successful lateral movement: multiple failed logins from one source, then a successful login, then authentication to a different host within 30 minutes',
          'Implement a risk-based alerting schema for a small environment: assign risk scores to ten common security events and define entity risk thresholds that trigger investigation',
          'Take an existing noisy alert rule (e.g., "any outbound connection to a foreign IP") and document five specific tuning steps to reduce false positives while maintaining detection of actual C2 communication'
        ],
        resources: [
          { name: 'Splunk Risk-Based Alerting Documentation', url: 'https://docs.splunk.com/Documentation/ES/latest/User/RiskScoring' },
          { name: 'Elastic Detection Rules Repository', url: 'https://github.com/elastic/detection-rules' },
          { name: 'The Detection Engineering Handbook by Alex Teixeira' }
        ]
      },
      {
        title: 'Dashboard Building',
        duration: '3.5 hours',
        overview: 'Create effective security dashboards that provide SOC teams with real-time situational awareness, executive stakeholders with risk summaries, and analysts with investigation tools. This module covers dashboard design principles, implementation in Splunk and Kibana, and techniques for building actionable visual interfaces.',
        topics: [
          {
            heading: 'Dashboard Design Principles for Security',
            detail: 'Security dashboards must communicate the right information to the right audience at the right time. SOC analyst dashboards need real-time event streams, alert queues, and drill-down investigation capabilities. Executive dashboards require high-level risk metrics, trend analysis, and compliance status indicators. Design principles include progressive disclosure (overview to detail), consistent color coding (red/yellow/green for severity), and limiting each dashboard to a single purpose to prevent information overload.'
          },
          {
            heading: 'Building Dashboards in Splunk',
            detail: 'Splunk offers two dashboard frameworks: Classic Dashboards (Simple XML) and Dashboard Studio (JSON-based). Classic Dashboards support panels with tables, charts, maps, and single-value indicators, connected by drilldown actions and token-based interactivity. Dashboard Studio provides a modern canvas layout with layering, absolute positioning, and dynamic data sources. Both support scheduled searches for heavy queries and real-time searches for live monitoring panels.'
          },
          {
            heading: 'Building Dashboards in Kibana',
            detail: 'Kibana dashboards combine visualizations created in Lens (drag-and-drop), TSVB (time-series), Vega (custom), and Maps into unified views. Filters and KQL queries applied at the dashboard level propagate to all panels. Kibana Canvas provides presentation-grade displays for SOC wall monitors. Controls (dropdown selectors, range sliders) add interactivity, allowing analysts to filter by host, severity, or time range without modifying queries.'
          },
          {
            heading: 'Key Security Metrics & KPIs',
            detail: 'Essential security dashboard metrics include: alert volume by severity and category, mean time to detect (MTTD) and respond (MTTR), open incidents by status and priority, top attacked assets and users, geographic distribution of threats, vulnerability remediation progress, and compliance control status. These KPIs should be tracked over time to demonstrate security program maturity and justify budget requests.'
          },
          {
            heading: 'Real-Time Monitoring & SOC Displays',
            detail: 'SOC wall displays require dashboards optimized for large-screen viewing with auto-refresh intervals, high contrast colors, and clear visual hierarchy. Implement rotating dashboard playlists that cycle through different views (network security, endpoint alerts, authentication anomalies). Real-time data feeds should use accelerated data models or summary indexes to avoid performance impact on the SIEM cluster.'
          }
        ],
        keyTakeaways: [
          'Dashboard design should match the audience: operational detail for analysts, high-level metrics for executives',
          'Splunk Dashboard Studio and Kibana Lens provide modern, interactive visualization capabilities',
          'Key security KPIs (MTTD, MTTR, alert volume, open incidents) should be tracked and trended over time',
          'SOC wall displays require specific design considerations: auto-refresh, high contrast, and performance optimization'
        ],
        practiceExercises: [
          'Build a SOC analyst dashboard in Splunk or Kibana with panels showing: top 10 alert sources, alert trend over 24 hours, recent critical alerts table with drilldown to raw events, and a geographic map of attack origins',
          'Create an executive security summary dashboard showing monthly trends in incident count, MTTD, MTTR, and compliance posture with red/yellow/green indicators',
          'Design a real-time authentication monitoring dashboard that highlights failed login spikes, locked accounts, and after-hours privileged access'
        ],
        resources: [
          { name: 'Splunk Dashboard Studio Documentation', url: 'https://docs.splunk.com/Documentation/Splunk/latest/DashStudio' },
          { name: 'Kibana Dashboard Guide', url: 'https://www.elastic.co/guide/en/kibana/current/dashboard.html' },
          { name: 'Information Dashboard Design by Stephen Few' }
        ]
      },
      {
        title: 'Incident Investigation with SIEM',
        duration: '3.5 hours',
        overview: 'Apply all previously learned SIEM skills in realistic incident investigation scenarios. This module walks through end-to-end investigations of common attack types using SIEM data, teaching the analytical methodology and query techniques that experienced SOC analysts use to triage alerts, scope incidents, and build investigation timelines.',
        topics: [
          {
            heading: 'Investigation Methodology & Workflow',
            detail: 'Effective SIEM investigations follow a structured workflow: alert triage (validate the alert, assess initial severity), enrichment (add context from threat intelligence, asset inventory, and user directory), scoping (identify all affected systems and accounts), timeline reconstruction (build a chronological narrative of attacker activities), and documentation (record findings, IOCs, and recommended actions). Each step involves specific SIEM queries and correlation techniques.'
          },
          {
            heading: 'Investigating Phishing Attacks',
            detail: 'Phishing investigation in a SIEM starts with email gateway logs to identify the malicious message (sender, subject, attachment hash, URLs). Pivot to web proxy logs to find users who clicked malicious links, endpoint logs to identify payload execution (suspicious process creation events from Office applications), and DNS logs to detect C2 callback domains. Use the email attachment hash to search across all endpoints for additional compromised hosts.'
          },
          {
            heading: 'Investigating Malware Infections',
            detail: 'Malware investigation leverages endpoint detection logs (Sysmon, EDR telemetry) to identify patient zero, map the execution chain (parent-child process relationships), and discover persistence mechanisms (registry modifications, scheduled tasks, services). Network logs reveal C2 communication patterns (beaconing intervals, unusual DNS queries, encrypted traffic to uncommon ports). File integrity monitoring logs show dropped files and modifications to system binaries.'
          },
          {
            heading: 'Investigating Lateral Movement',
            detail: 'Lateral movement detection focuses on authentication events across multiple hosts. Key indicators include: unusual RDP connections (Event ID 4624 Type 10), PsExec/SMB-based remote execution (Event ID 7045 for new service installation), WMI remote process creation, and Pass-the-Hash/Pass-the-Ticket attacks (Event ID 4624 with LogonType 9 and elevated tokens). SIEM queries should correlate authentication events across hosts within time windows to build movement maps.'
          },
          {
            heading: 'Investigating Data Exfiltration',
            detail: 'Data exfiltration investigation examines DLP alerts, proxy logs (large uploads to cloud storage or paste sites), DNS logs (DNS tunneling via long TXT record queries), and endpoint logs (archive tool execution like 7zip or WinRAR followed by large outbound transfers). Network flow data reveals anomalous data volumes leaving the environment. Correlating the timeline of data staging (file access, compression) with network exfiltration provides the complete picture for incident reporting.'
          },
          {
            heading: 'Building Investigation Timelines',
            detail: 'Timeline construction is the culmination of an investigation. Gather all relevant events from SIEM queries, normalize timestamps to UTC, and arrange events chronologically to tell the story of the attack from initial access through actions on objectives. Tools like Splunk\'s timeline visualization, Elastic\'s Timeline feature in Security, or external tools like Timesketch help visualize complex multi-source timelines. The final timeline becomes the foundation for the incident report and lessons learned.'
          }
        ],
        keyTakeaways: [
          'Structured investigation methodology (triage, enrich, scope, timeline, document) ensures thorough and consistent analysis',
          'Pivoting between log sources (email, proxy, endpoint, DNS, network) is essential for complete incident scoping',
          'Understanding Windows Event IDs and Sysmon events is critical for investigating endpoint compromises',
          'Timeline construction provides the narrative foundation for incident reports and remediation planning',
          'Practice with realistic scenarios builds the pattern recognition skills that distinguish experienced analysts'
        ],
        practiceExercises: [
          'Using the BOTS (Boss of the SOC) dataset in Splunk, investigate a simulated attack: identify the initial access vector, compromised accounts, lateral movement path, and data exfiltration method',
          'Build a complete investigation timeline for a phishing-to-ransomware scenario using provided log data from email gateway, proxy, endpoint, and Active Directory sources',
          'Create an investigation playbook template with pre-written SIEM queries for each phase of a malware infection investigation'
        ],
        resources: [
          { name: 'Splunk BOTS Dataset', url: 'https://github.com/splunk/botsv3' },
          { name: 'SANS FOR508: Advanced Incident Response, Threat Hunting, and Digital Forensics' },
          { name: 'Crafting the InfoSec Playbook by Jeff Bollinger, Brandon Enright, and Matthew Valites' }
        ]
      }
    ]
  },
  {
    id: 'incident-response',
    tier: 'intermediate',
    title: 'Incident Response Fundamentals',
    description: 'Develop the skills and knowledge to effectively respond to cybersecurity incidents from initial detection through recovery and lessons learned. This course covers the complete incident response lifecycle based on NIST SP 800-61 and SANS frameworks, teaching practical techniques for handling malware outbreaks, data breaches, insider threats, and ransomware attacks in enterprise environments.',
    objectives: [
      'Understand the complete incident response lifecycle as defined by NIST SP 800-61 and SANS',
      'Build and maintain an incident response plan with defined roles, communication procedures, and escalation paths',
      'Apply detection and analysis techniques to identify, validate, and classify security incidents',
      'Implement containment strategies that limit damage while preserving forensic evidence',
      'Execute eradication and recovery procedures to restore normal operations securely',
      'Conduct post-incident reviews that drive measurable security improvements',
      'Create comprehensive incident documentation and reports for technical and executive audiences'
    ],
    estimatedHours: 25,
    prerequisites: ['security-plus-prep'],
    modules: [
      {
        title: 'IR Lifecycle Overview',
        duration: '3 hours',
        overview: 'This module provides a comprehensive overview of the incident response lifecycle, covering the major frameworks that guide IR processes, the evolution of incident response as a discipline, and how modern organizations structure their IR capabilities to handle the increasing volume and sophistication of cyber threats.',
        topics: [
          {
            heading: 'NIST SP 800-61 Incident Response Framework',
            detail: 'NIST Special Publication 800-61 (Computer Security Incident Handling Guide) defines four phases: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity. This framework provides a structured approach that ensures consistency across incidents regardless of type or severity. Most enterprise IR programs are built on this foundation, with customizations for industry-specific requirements like HIPAA for healthcare or PCI DSS for payment processing.'
          },
          {
            heading: 'SANS Incident Response Process',
            detail: 'The SANS Institute defines six phases: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned (PICERL). While conceptually aligned with NIST, the SANS model explicitly separates Eradication and Recovery as distinct phases, emphasizing the importance of completely removing attacker presence before restoring systems. The SANS model is widely used in certification training (GCIH, GCFA) and practical IR operations.'
          },
          {
            heading: 'Types of Security Incidents',
            detail: 'Security incidents span a wide range of scenarios: malware infections (ransomware, trojans, worms), unauthorized access (credential theft, privilege escalation), data breaches (exfiltration of PII, trade secrets, or financial data), denial of service attacks, insider threats (malicious or negligent), web application attacks (SQL injection, XSS), and supply chain compromises. Each incident type requires different detection methods, containment strategies, and recovery procedures.'
          },
          {
            heading: 'Incident Severity Classification',
            detail: 'Incidents are classified by severity to prioritize response efforts and trigger appropriate escalation. A common four-tier system includes: Critical (active data breach, ransomware spreading), High (confirmed compromise with potential for data loss), Medium (suspicious activity requiring investigation), and Low (policy violations, failed attacks). Severity determines SLA response times, who gets notified, and what resources are allocated to the response.'
          },
          {
            heading: 'Building an Incident Response Team',
            detail: 'An effective CSIRT (Computer Security Incident Response Team) includes IR analysts (triage and investigation), forensic specialists (evidence collection and analysis), threat intelligence analysts (context and attribution), IT operations (containment and recovery), legal counsel (regulatory compliance and law enforcement coordination), and communications (internal and external messaging). Team structures can be dedicated, virtual (drawn from other roles), or hybrid.'
          },
          {
            heading: 'IR Maturity Models',
            detail: 'Organizations progress through IR maturity levels from ad-hoc (no formal process) through defined (documented procedures), managed (metrics and KPIs tracked), to optimized (continuous improvement with automation). Assessing IR maturity using frameworks like the CMMI-based IR maturity model helps identify capability gaps and prioritize investments. Mature IR programs conduct regular tabletop exercises, maintain updated playbooks, and integrate threat intelligence into detection and response workflows.'
          }
        ],
        keyTakeaways: [
          'NIST SP 800-61 and SANS PICERL provide the foundational frameworks for structured incident response',
          'Incident severity classification drives response priorities, SLAs, and escalation procedures',
          'A cross-functional CSIRT with defined roles is essential for effective incident response',
          'IR maturity assessment helps organizations identify capability gaps and plan improvements'
        ],
        practiceExercises: [
          'Map the NIST SP 800-61 four-phase model to the SANS six-phase model, identifying where each SANS phase falls within the NIST framework and noting the practical differences',
          'Define a four-tier incident severity classification scheme for your organization, including criteria, SLA response times, escalation contacts, and example scenarios for each tier',
          'Assess an organization\'s IR maturity using the CMMI model and create a 12-month improvement roadmap'
        ],
        resources: [
          { name: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
          { name: 'SANS Incident Handler\'s Handbook', url: 'https://www.sans.org/white-papers/33901/' },
          { name: 'SANS FOR508: Advanced Incident Response, Threat Hunting, and Digital Forensics' }
        ]
      },
      {
        title: 'Preparation & Planning',
        duration: '3.5 hours',
        overview: 'Preparation is the most critical phase of incident response — the work you do before an incident determines how effectively you respond during one. This module covers building IR plans, establishing communication procedures, preparing technical infrastructure, and conducting exercises to validate readiness.',
        topics: [
          {
            heading: 'Developing an Incident Response Plan',
            detail: 'An IR plan documents the organization\'s approach to detecting, responding to, and recovering from security incidents. Key components include: purpose and scope, incident definitions and classification criteria, roles and responsibilities (RACI matrix), communication procedures (internal escalation and external notification), evidence handling procedures, and integration with business continuity and disaster recovery plans. The plan must be approved by executive leadership and reviewed at least annually.'
          },
          {
            heading: 'IR Playbooks & Standard Operating Procedures',
            detail: 'Playbooks provide step-by-step procedures for handling specific incident types. A ransomware playbook might include: isolate affected systems from the network, preserve encrypted file samples and ransom notes, check for data exfiltration before encryption, identify the ransomware variant using ID Ransomware, assess backup integrity, and engage legal counsel regarding payment and reporting obligations. Effective playbooks include decision trees, checklists, and links to relevant tools and commands.'
          },
          {
            heading: 'Communication & Escalation Procedures',
            detail: 'Clear communication procedures prevent confusion during high-pressure incidents. Define escalation paths (analyst → team lead → CISO → CEO), notification triggers (when to involve legal, HR, PR, law enforcement), and communication channels (out-of-band channels like Signal or dedicated IR phone bridges in case primary systems are compromised). Prepare template notifications for stakeholders, customers, regulators, and media to accelerate response when minutes matter.'
          },
          {
            heading: 'Technical Readiness & IR Toolkit',
            detail: 'Technical preparation includes maintaining a forensic toolkit (write blockers, forensic workstations with tools like Autopsy, FTK, and Volatility), deploying endpoint detection and response (EDR) solutions for remote containment, ensuring centralized logging is operational, and maintaining network diagrams and asset inventories. A jump bag with portable drives, network taps, cables, and documentation should be ready for on-site response. Digital toolkits should include KAPE, CyLR, or Velociraptor for rapid evidence collection.'
          },
          {
            heading: 'Tabletop Exercises & Simulations',
            detail: 'Tabletop exercises walk the IR team through hypothetical scenarios to test plans and identify gaps without impacting production systems. Scenarios should cover diverse incident types (ransomware, insider threat, supply chain compromise, cloud breach) and involve cross-functional participants including IT, legal, communications, and executive leadership. After each exercise, document findings, update playbooks, and assign action items for identified gaps. Purple team exercises add technical depth by simulating real attack techniques.'
          },
          {
            heading: 'Legal & Regulatory Considerations',
            detail: 'IR preparation must account for legal requirements including breach notification laws (GDPR\'s 72-hour requirement, state breach notification laws), evidence preservation obligations (litigation hold), law enforcement engagement procedures, and cyber insurance policy requirements. Work with legal counsel to pre-approve response actions, establish relationships with law enforcement (FBI, Secret Service, CISA), and understand contractual notification obligations to customers and partners.'
          }
        ],
        keyTakeaways: [
          'A comprehensive IR plan with executive approval is the foundation of effective incident response',
          'Playbooks provide repeatable, step-by-step procedures for handling specific incident types consistently',
          'Out-of-band communication channels are essential when primary systems may be compromised',
          'Technical readiness includes forensic tools, EDR deployment, centralized logging, and evidence collection capabilities',
          'Regular tabletop exercises identify gaps in plans and build team confidence before real incidents occur'
        ],
        practiceExercises: [
          'Draft a ransomware incident response playbook with step-by-step procedures, decision points, tool references, and escalation criteria',
          'Design a two-hour tabletop exercise scenario for a supply chain compromise that involves IT, legal, communications, and executive participants, including inject cards and discussion questions',
          'Create an IR toolkit inventory listing required hardware, software, and documentation for both on-site and remote incident response'
        ],
        resources: [
          { name: 'NIST SP 800-61 Rev. 2', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
          { name: 'Incident Response & Computer Forensics, Third Edition by Jason Luttgens, Matthew Pepe, and Kevin Mandia' },
          { name: 'CISA Tabletop Exercise Packages', url: 'https://www.cisa.gov/cisa-tabletop-exercises-packages' }
        ]
      },
      {
        title: 'Detection & Analysis',
        duration: '4 hours',
        overview: 'Detection and analysis is where incidents are identified, validated, and characterized. This module teaches the analytical skills needed to distinguish real attacks from false positives, assess incident scope and impact, and make critical triage decisions under pressure using SIEM data, endpoint telemetry, and network evidence.',
        topics: [
          {
            heading: 'Detection Sources & Indicators',
            detail: 'Incidents are detected through multiple sources: SIEM alerts, IDS/IPS notifications (Snort, Suricata), EDR detections (CrowdStrike, SentinelOne, Microsoft Defender for Endpoint), user reports, threat intelligence feeds, and external notifications (law enforcement, security researchers, ISAC alerts). Indicators of Compromise (IOCs) include file hashes, IP addresses, domain names, registry keys, and mutex names. Indicators of Attack (IOAs) focus on adversary behaviors rather than specific artifacts.'
          },
          {
            heading: 'Alert Triage & Validation',
            detail: 'Alert triage involves rapidly assessing incoming alerts to determine if they represent genuine security incidents. The triage process includes: verifying the alert fired correctly (check the raw log data), assessing the affected asset\'s criticality (crown jewel vs. test system), checking for known false positive patterns, enriching with threat intelligence (is the IP/domain in threat feeds?), and making a triage decision (true positive, false positive, or needs further investigation). Document triage rationale for every alert.'
          },
          {
            heading: 'Incident Scoping & Impact Assessment',
            detail: 'Once an incident is confirmed, scoping determines its full extent. Key questions include: How many systems are affected? Which accounts are compromised? What data may have been accessed or exfiltrated? How long has the adversary been present (dwell time)? Scoping uses SIEM queries to search for IOCs across all log sources, EDR tools to sweep endpoints for malicious artifacts, and network monitoring to identify C2 communication. Incomplete scoping leads to re-infections during recovery.'
          },
          {
            heading: 'Evidence Collection & Chain of Custody',
            detail: 'Digital evidence must be collected following forensically sound procedures to maintain admissibility. Key principles include: collect volatile evidence first (memory before disk), create forensic images using write blockers (or tools like FTK Imager and dc3dd), document every action with timestamps, maintain chain of custody logs (who handled what evidence, when, and why), and store evidence securely with hash verification (MD5/SHA256). In cloud environments, evidence includes snapshots, API logs, and metadata exports.'
          },
          {
            heading: 'Memory & Disk Forensics Fundamentals',
            detail: 'Memory forensics using tools like Volatility 3 reveals running processes, network connections, loaded DLLs, and injected code that may not be visible on disk. Key Volatility plugins include pslist/pstree (process listing), netscan (network connections), malfind (code injection detection), and dlllist (loaded libraries). Disk forensics examines file system artifacts including prefetch files, jump lists, shellbags, $MFT entries, and USN journal records to reconstruct user and attacker activity.'
          },
          {
            heading: 'Network Traffic Analysis',
            detail: 'Network forensics involves analyzing packet captures (PCAPs) and flow data to identify malicious communication. Wireshark is the primary tool for deep packet inspection — useful filters include tcp.flags.syn==1 (connection attempts), http.request (HTTP requests), and dns.qry.name (DNS queries). Zeek (formerly Bro) provides higher-level network analysis generating structured logs for connections, DNS, HTTP, SSL/TLS, and files extracted from network traffic. Look for beaconing patterns, DNS tunneling, and unusual protocol usage.'
          }
        ],
        keyTakeaways: [
          'Multiple detection sources (SIEM, EDR, IDS, user reports) provide defense-in-depth visibility',
          'Structured alert triage with documented rationale ensures consistent incident identification',
          'Thorough incident scoping prevents incomplete remediation and adversary persistence',
          'Evidence collection must follow forensic best practices to maintain chain of custody and admissibility',
          'Memory forensics with Volatility and network analysis with Wireshark/Zeek are essential IR skills'
        ],
        practiceExercises: [
          'Triage five simulated SIEM alerts of varying severity, documenting your analysis, enrichment steps, and triage decision for each',
          'Perform memory analysis on a provided memory dump using Volatility 3: identify suspicious processes, network connections, and injected code',
          'Analyze a PCAP file in Wireshark to identify C2 communication: extract the C2 domain, beaconing interval, and any exfiltrated data',
          'Create an evidence collection checklist for a compromised Windows workstation, listing each evidence source, collection tool, and order of volatility'
        ],
        resources: [
          { name: 'The Art of Memory Forensics by Michael Hale Ligh, Andrew Case, Jamie Levy, and AAron Walters' },
          { name: 'Volatility 3 Documentation', url: 'https://volatility3.readthedocs.io/' },
          { name: 'SANS FOR500: Windows Forensic Analysis' }
        ]
      },
      {
        title: 'Containment Strategies',
        duration: '3.5 hours',
        overview: 'Containment is the critical phase where responders take action to stop an active attack from spreading while preserving evidence for investigation. This module covers short-term and long-term containment strategies, network isolation techniques, and the decision-making frameworks that guide containment actions under pressure.',
        topics: [
          {
            heading: 'Short-Term vs. Long-Term Containment',
            detail: 'Short-term containment focuses on immediately stopping the attack\'s spread: isolating compromised hosts from the network, blocking malicious IPs/domains at the firewall, disabling compromised user accounts, and killing malicious processes. Long-term containment implements more sustainable controls while the team prepares for eradication: deploying additional monitoring on affected segments, applying emergency patches, implementing network segmentation, and setting up honeypots to detect continued adversary activity.'
          },
          {
            heading: 'Network Isolation Techniques',
            detail: 'Network isolation can be implemented at multiple layers: EDR-based host isolation (CrowdStrike network containment, Microsoft Defender isolation), VLAN reassignment to quarantine networks, firewall rule updates to block lateral movement paths, DNS sinkholing of C2 domains, and physical disconnection for critical situations. Each technique has trade-offs — EDR isolation maintains remote investigation capability while VLAN changes may disrupt business operations. Always coordinate with IT operations before implementing network changes.'
          },
          {
            heading: 'Account & Identity Containment',
            detail: 'Compromised accounts require immediate action: disable or reset credentials for confirmed compromised accounts, revoke active sessions and OAuth tokens, rotate service account passwords and API keys, and implement conditional access policies to restrict authentication from untrusted locations. In Active Directory environments, be aware that Kerberos tickets remain valid for their lifetime (default 10 hours) even after password resets — forcing ticket expiration through krbtgt password rotation may be necessary in severe compromises.'
          },
          {
            heading: 'Containment Decision Framework',
            detail: 'Containment decisions balance security needs against business impact. Factors include: the severity and spread of the attack, the criticality of affected systems (production database vs. development server), the potential for evidence destruction if the attacker detects response activity, business continuity requirements, and legal obligations to preserve evidence. Document all containment decisions with timestamps, rationale, and approving authority. In some cases, monitoring the attacker\'s activity (controlled containment) provides more intelligence than immediate isolation.'
          },
          {
            heading: 'Cloud Containment Strategies',
            detail: 'Cloud environments require different containment approaches: modifying security group rules and NACLs to isolate compromised instances, revoking IAM credentials and session tokens, disabling compromised Lambda functions or container workloads, implementing AWS Organizations SCPs or Azure Policy to restrict actions across accounts, and leveraging cloud-native tools like AWS Systems Manager or Azure Automation for rapid response at scale. Snapshot affected instances before containment for forensic preservation.'
          }
        ],
        keyTakeaways: [
          'Short-term containment stops immediate spread while long-term containment enables sustained monitoring during eradication',
          'EDR-based host isolation maintains remote investigation capability while effectively quarantining compromised systems',
          'Account containment must address Kerberos ticket lifetime and OAuth token revocation beyond simple password resets',
          'Containment decisions require balancing security urgency with business impact and evidence preservation',
          'Cloud containment leverages security groups, IAM policies, and cloud-native automation tools'
        ],
        practiceExercises: [
          'Develop a containment decision matrix for five scenarios of varying severity (from single compromised workstation to domain controller compromise), documenting the recommended containment actions, business impact assessment, and required approvals for each',
          'Practice EDR-based network isolation using a test environment: isolate a host, verify it cannot communicate laterally but remains accessible for remote investigation, then release isolation',
          'Write a cloud containment runbook for an AWS environment that addresses compromised EC2 instances, IAM credentials, and Lambda functions'
        ],
        resources: [
          { name: 'NIST SP 800-61 Rev. 2, Section 3.3: Containment, Eradication, and Recovery', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
          { name: 'AWS Security Incident Response Guide', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/welcome.html' },
          { name: 'SANS Incident Response: Containment Phase Best Practices' }
        ]
      },
      {
        title: 'Eradication & Recovery',
        duration: '3.5 hours',
        overview: 'After containment stops the bleeding, eradication removes all traces of the adversary from the environment, and recovery restores systems to normal operations. This module covers root cause analysis, malware removal, system rebuilding, hardening measures, and the validation steps needed to confirm the threat is fully eliminated.',
        topics: [
          {
            heading: 'Root Cause Analysis',
            detail: 'Before eradication can succeed, the team must identify how the adversary gained initial access and maintained persistence. Root cause analysis examines the attack chain from initial vector (phishing email, exploited vulnerability, compromised credentials) through privilege escalation and lateral movement to actions on objectives. Without understanding the root cause, the same attack vector remains open for re-compromise. Map findings to the MITRE ATT&CK framework to ensure all techniques are addressed during eradication.'
          },
          {
            heading: 'Malware Removal & Persistence Elimination',
            detail: 'Eradication requires removing all adversary footholds: malware binaries and scripts, scheduled tasks and cron jobs, registry run keys and startup folder entries, malicious services and drivers, backdoor accounts, web shells, modified system binaries (rootkits), and implanted SSH keys. Use tools like Autoruns (Windows) to review all persistence locations, and compare system binaries against known-good hashes. In many cases, reimaging compromised systems from known-clean backups is more reliable than attempting manual cleanup.'
          },
          {
            heading: 'System Rebuilding & Hardening',
            detail: 'For severely compromised systems, rebuilding from scratch with hardened configurations is preferred over cleaning. Rebuild using hardened OS images based on CIS Benchmarks, apply all current security patches before reconnecting to the network, implement application whitelisting (AppLocker, WDAC) on critical systems, enable enhanced logging (Sysmon, PowerShell Script Block Logging), and deploy EDR agents. Restore data from verified clean backups, validating backup integrity with hash comparisons before restoration.'
          },
          {
            heading: 'Credential Reset & Active Directory Recovery',
            detail: 'If Active Directory is compromised, credential reset must be comprehensive: reset all user and service account passwords, rotate the krbtgt account password twice (to invalidate all existing Kerberos tickets), reset DSRM passwords on domain controllers, review and clean up group memberships (especially Domain Admins, Enterprise Admins), check for backdoor accounts and modified Group Policy Objects, and verify trust relationships with partner domains. Tools like BloodHound can help identify residual attack paths.'
          },
          {
            heading: 'Recovery Validation & Monitoring',
            detail: 'Before declaring an incident resolved, validate that eradication is complete through enhanced monitoring. Implement additional SIEM alerts for known attacker TTPs, deploy canary files and honeytokens to detect re-access attempts, conduct vulnerability scans to verify patches are applied, review network traffic for residual C2 communication, and perform follow-up endpoint sweeps for IOCs. Maintain enhanced monitoring for at least 30 days after recovery to catch any adversary attempts to re-establish access.'
          }
        ],
        keyTakeaways: [
          'Root cause analysis must identify the initial access vector to prevent re-compromise through the same path',
          'Reimaging compromised systems from clean backups is more reliable than manual malware removal',
          'Active Directory recovery requires comprehensive credential rotation including the krbtgt account',
          'Recovery validation through enhanced monitoring for 30+ days catches adversary re-entry attempts',
          'CIS Benchmarks provide hardening baselines for rebuilt systems'
        ],
        practiceExercises: [
          'Given a scenario with identified IOCs (file hashes, registry keys, scheduled tasks, and compromised accounts), create a comprehensive eradication checklist that addresses every persistence mechanism',
          'Develop an Active Directory recovery plan for a scenario where a domain admin account was compromised, including the specific commands for krbtgt password rotation and group membership audit',
          'Create a 30-day enhanced monitoring plan with specific SIEM queries, honeytokens, and validation checks to confirm successful eradication'
        ],
        resources: [
          { name: 'CIS Benchmarks', url: 'https://www.cisecurity.org/cis-benchmarks' },
          { name: 'Microsoft: Incident Response Guide for Active Directory', url: 'https://learn.microsoft.com/en-us/security/operations/incident-response-overview' },
          { name: 'SANS Windows Forensic Analysis Poster', url: 'https://www.sans.org/posters/windows-forensic-analysis/' }
        ]
      },
      {
        title: 'Post-Incident Activities',
        duration: '3.5 hours',
        overview: 'Post-incident activities transform individual incidents into organizational learning opportunities. This module covers conducting effective lessons learned sessions, updating security controls based on findings, measuring IR performance through metrics, and building a continuous improvement cycle that strengthens the organization\'s security posture over time.',
        topics: [
          {
            heading: 'Lessons Learned Sessions',
            detail: 'Lessons learned (also called post-mortem or after-action review) meetings should occur within one to two weeks of incident closure while details are fresh. Facilitate a blameless discussion covering: what happened (timeline review), what worked well, what could be improved, what was the root cause, and what specific actions will prevent recurrence. Include all stakeholders (IR team, IT operations, management, legal) and document findings in a structured format. Assign action items with owners and deadlines.'
          },
          {
            heading: 'Updating Security Controls & Policies',
            detail: 'Every incident should result in concrete security improvements. Common post-incident actions include: deploying new detection rules targeting observed TTPs, implementing additional monitoring for identified blind spots, hardening configurations based on exploited weaknesses, updating access controls and segmentation, patching identified vulnerabilities, enhancing email filtering and web proxy rules, and updating security awareness training to address the specific attack vector (e.g., adding phishing simulations based on the actual phishing email used).'
          },
          {
            heading: 'IR Metrics & KPIs',
            detail: 'Tracking IR metrics enables data-driven improvement of the incident response program. Key metrics include: Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), Mean Time to Contain (MTTC), number of incidents by type and severity, percentage of alerts that are true positives (alert fidelity), time from detection to containment, and cost per incident. Track these metrics over time to demonstrate security program maturity and justify budget requests. Industry benchmarks from reports like the Verizon DBIR and Mandiant M-Trends provide comparison points.'
          },
          {
            heading: 'Knowledge Management & Case Database',
            detail: 'Maintain a searchable database of past incidents including incident details, investigation steps, containment actions, eradication procedures, IOCs, and lessons learned. This knowledge base accelerates future investigations by providing analysts with reference cases for similar incidents. Tools like TheHive, RTIR, or even well-organized wiki systems serve this purpose. Tag cases by MITRE ATT&CK technique, affected systems, and attack vector to enable pattern analysis across incidents.'
          },
          {
            heading: 'Continuous Improvement Cycle',
            detail: 'Mature IR programs implement a continuous improvement cycle: conduct regular tabletop exercises and purple team assessments, review and update playbooks quarterly, test detection rules against new threat intelligence, measure and trend IR metrics, benchmark against industry standards and peer organizations, and invest in team training and certification. The goal is to reduce dwell time, improve detection coverage, and increase response efficiency with each iteration of the cycle.'
          }
        ],
        keyTakeaways: [
          'Blameless lessons learned sessions within two weeks of incident closure capture the most actionable insights',
          'Every incident should result in specific, assigned security improvements with deadlines',
          'IR metrics (MTTD, MTTR, alert fidelity) enable data-driven program improvement and budget justification',
          'A searchable case database accelerates future investigations and enables cross-incident pattern analysis',
          'Continuous improvement through regular exercises, playbook updates, and metric trending builds organizational resilience'
        ],
        practiceExercises: [
          'Facilitate a mock lessons learned session for a simulated ransomware incident, producing a structured after-action report with timeline, findings, root cause analysis, and assigned improvement actions',
          'Design an IR metrics dashboard that tracks MTTD, MTTR, incidents by type, alert fidelity, and cost per incident, including data sources and calculation methods',
          'Create a post-incident improvement tracker that maps incident findings to specific security control enhancements with assigned owners, deadlines, and status tracking'
        ],
        resources: [
          { name: 'Verizon Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir/' },
          { name: 'Mandiant M-Trends Report', url: 'https://www.mandiant.com/m-trends' },
          { name: 'The Phoenix Project by Gene Kim, Kevin Behr, and George Spafford' }
        ]
      },
      {
        title: 'IR Documentation & Reporting',
        duration: '4 hours',
        overview: 'Effective documentation and reporting transform technical findings into actionable intelligence for diverse audiences. This module covers evidence documentation standards, timeline construction, technical report writing, executive briefings, and regulatory notification requirements that every incident responder must master.',
        topics: [
          {
            heading: 'Evidence Documentation Standards',
            detail: 'Every piece of evidence must be documented with: unique identifier, description, source system, collection method and tool, collector\'s name and timestamp, hash values (MD5 and SHA-256), storage location, and chain of custody log. Use standardized evidence collection forms and maintain a master evidence log throughout the investigation. Digital evidence documentation should include screenshots of tool output, exported query results, and preserved raw data files. Follow your organization\'s evidence retention policy and legal hold requirements.'
          },
          {
            heading: 'Investigation Timeline Construction',
            detail: 'The investigation timeline is the central artifact of any incident report. Construct timelines by correlating events from multiple sources (SIEM logs, EDR telemetry, email logs, authentication records, network captures) and arranging them chronologically with UTC timestamps. Include both adversary actions and defender responses. Tools like Timesketch, Plaso (log2timeline), or even structured spreadsheets help organize complex timelines. The timeline should tell a complete story from initial access through containment.'
          },
          {
            heading: 'Technical Incident Reports',
            detail: 'Technical incident reports target the IR team and security engineers. Structure includes: executive summary, incident classification and severity, detailed timeline of events, analysis of adversary TTPs (mapped to MITRE ATT&CK), IOCs (file hashes, IP addresses, domains, registry keys), affected systems and accounts, containment and eradication actions taken, root cause analysis, and recommended security improvements. Include appendices with raw evidence, query results, and tool output for reference.'
          },
          {
            heading: 'Executive Briefings & Summaries',
            detail: 'Executive audiences need concise, business-focused communication. Structure executive briefings around: what happened (one paragraph), business impact (financial, operational, reputational), what we did about it (response summary), current status, and what we need to do next (investment requests). Avoid technical jargon — translate TTPs into business risk language. Use visual aids: timeline graphics, impact heat maps, and before/after security posture comparisons. Prepare for questions about cost, customer impact, and recurrence prevention.'
          },
          {
            heading: 'Regulatory & Legal Reporting',
            detail: 'Data breaches may trigger notification requirements under multiple regulations: GDPR (72-hour notification to supervisory authorities), HIPAA (60-day notification to HHS and affected individuals), PCI DSS (notification to card brands and acquiring banks), state breach notification laws (varying requirements across US states), and SEC cyber incident disclosure rules for public companies. Reports to regulators must include: nature of the breach, categories and approximate number of affected individuals, likely consequences, and measures taken to address the breach.'
          },
          {
            heading: 'IOC Sharing & Community Reporting',
            detail: 'Sharing IOCs and threat intelligence with the broader security community helps others defend against the same threats. Use structured formats like STIX (Structured Threat Information eXpression) and TAXII (Trusted Automated eXchange of Intelligence Information) for automated sharing. Participate in ISACs (Information Sharing and Analysis Centers) relevant to your industry. Platforms like MISP (Malware Information Sharing Platform) facilitate IOC sharing with trusted partners. Always sanitize reports to remove sensitive organizational details before sharing.'
          }
        ],
        keyTakeaways: [
          'Evidence documentation with hash verification and chain of custody is essential for legal admissibility',
          'Investigation timelines correlating multiple data sources tell the complete story of an incident',
          'Technical reports should map adversary TTPs to MITRE ATT&CK and include actionable IOCs',
          'Executive briefings must translate technical findings into business impact and investment requests',
          'Regulatory notification requirements vary by jurisdiction and must be tracked proactively'
        ],
        practiceExercises: [
          'Write a complete incident report for a simulated phishing-to-ransomware scenario including executive summary, timeline, MITRE ATT&CK mapping, IOCs, and recommendations',
          'Create an executive briefing presentation (5 slides maximum) summarizing a data breach incident for the board of directors, focusing on business impact and remediation investment',
          'Draft a GDPR-compliant breach notification to a supervisory authority for a scenario involving the exposure of 10,000 EU customer records, ensuring all required elements are addressed within the 72-hour timeframe'
        ],
        resources: [
          { name: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
          { name: 'STIX/TAXII Documentation', url: 'https://oasis-open.github.io/cti-documentation/' },
          { name: 'Writing Quality Investigation Reports by SANS' }
        ]
      }
    ]
  },
  {
    id: 'threat-intel',
    tier: 'intermediate',
    title: 'Introduction to Threat Intelligence',
    description: 'Learn to collect, analyze, and operationalize threat intelligence to proactively defend against cyber threats. This course covers the intelligence lifecycle, the MITRE ATT&CK framework, indicators of compromise, open source intelligence techniques, and how to produce actionable intelligence reports that drive security decisions across the organization.',
    objectives: [
      'Understand the threat intelligence lifecycle and its role in proactive defense',
      'Apply the MITRE ATT&CK framework to map adversary tactics, techniques, and procedures',
      'Identify, validate, and manage indicators of compromise from multiple sources',
      'Conduct open source intelligence gathering using structured methodologies',
      'Evaluate and deploy threat intelligence platforms for automated IOC management',
      'Produce actionable threat intelligence reports for technical and strategic audiences'
    ],
    estimatedHours: 20,
    prerequisites: ['siem-log-analysis'],
    modules: [
      {
        title: 'What is Threat Intelligence?',
        duration: '2.5 hours',
        overview: 'This module introduces the discipline of cyber threat intelligence (CTI), its evolution from military intelligence concepts, and how organizations leverage threat intelligence to make informed security decisions. You will learn the different types of threat intelligence and how they serve various stakeholders across the organization.',
        topics: [
          {
            heading: 'Defining Cyber Threat Intelligence',
            detail: 'Cyber threat intelligence is evidence-based knowledge about existing or emerging threats that informs security decisions. It goes beyond raw data (IP addresses, hashes) to provide context: who is attacking (threat actor), why (motivation), how (TTPs), and what is targeted (victim profile). CTI transforms reactive security operations into proactive defense by enabling organizations to anticipate attacks, prioritize defenses, and allocate resources based on relevant threat landscapes.'
          },
          {
            heading: 'Types of Threat Intelligence',
            detail: 'Threat intelligence operates at four levels: Strategic (high-level trends and geopolitical context for executive decision-making), Operational (details about specific campaigns and adversary capabilities for security managers), Tactical (TTPs and attack patterns for SOC analysts and detection engineers), and Technical (IOCs like IP addresses, domains, and file hashes for automated blocking and detection). Each level serves a different audience and drives different security actions.'
          },
          {
            heading: 'Threat Actors & Motivations',
            detail: 'Understanding threat actors helps predict targets and TTPs. Categories include: nation-state actors (APT groups like APT28/Fancy Bear, APT29/Cozy Bear, Lazarus Group) motivated by espionage or disruption, cybercriminal organizations (FIN7, REvil) motivated by financial gain, hacktivists (Anonymous) driven by ideology, insider threats motivated by grievance or financial pressure, and opportunistic attackers exploiting low-hanging fruit. Tracking named threat actors through reports from Mandiant, CrowdStrike, and Microsoft helps predict targeting patterns.'
          },
          {
            heading: 'The Diamond Model of Intrusion Analysis',
            detail: 'The Diamond Model provides a framework for analyzing intrusions through four core features: Adversary (who), Infrastructure (what resources they use), Capability (what tools and techniques they employ), and Victim (who they target). Every intrusion event connects these four elements. Analyzing relationships between elements helps cluster activity, attribute campaigns to threat actors, and predict future targets based on adversary patterns and infrastructure reuse.'
          },
          {
            heading: 'Threat Intelligence in the Security Operations Lifecycle',
            detail: 'Threat intelligence integrates into every phase of security operations: prevention (blocking known-bad IOCs, prioritizing patching based on exploited vulnerabilities), detection (creating SIEM rules based on adversary TTPs), response (understanding attacker playbooks during investigations), and recovery (predicting re-compromise attempts based on threat actor persistence patterns). Mature organizations embed CTI analysts within SOC teams to provide real-time context during incident investigations.'
          }
        ],
        keyTakeaways: [
          'Threat intelligence transforms raw data into actionable knowledge with context about who, why, and how',
          'Four intelligence levels (strategic, operational, tactical, technical) serve different audiences and drive different actions',
          'Understanding threat actor motivations helps predict targeting patterns and prioritize defenses',
          'The Diamond Model provides a structured framework for analyzing and clustering intrusion activity',
          'CTI integrates into prevention, detection, response, and recovery phases of security operations'
        ],
        practiceExercises: [
          'Research a named APT group (e.g., APT28, Lazarus, FIN7) and create a one-page threat actor profile including attribution, motivation, known targets, preferred TTPs, and notable campaigns',
          'Classify five real-world threat intelligence examples into strategic, operational, tactical, or technical categories, explaining why each classification is appropriate',
          'Apply the Diamond Model to a published incident report, identifying the adversary, infrastructure, capability, and victim elements'
        ],
        resources: [
          { name: 'Intelligence-Driven Computer Network Defense by Lockheed Martin', url: 'https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf' },
          { name: 'SANS FOR578: Cyber Threat Intelligence' },
          { name: 'The Diamond Model of Intrusion Analysis Paper' }
        ]
      },
      {
        title: 'Intelligence Lifecycle',
        duration: '2.5 hours',
        overview: 'The intelligence lifecycle provides a systematic methodology for producing actionable threat intelligence from raw data. This module walks through each phase of the cycle — from planning and direction through collection, processing, analysis, dissemination, and feedback — with practical examples relevant to cybersecurity operations.',
        topics: [
          {
            heading: 'Planning & Direction',
            detail: 'The intelligence cycle begins with defining Priority Intelligence Requirements (PIRs) based on organizational risk profile and stakeholder needs. PIRs answer specific questions: Which threat actors target our industry? What vulnerabilities in our technology stack are actively exploited? Are any of our credentials for sale on dark web marketplaces? PIRs should be reviewed quarterly and aligned with business objectives, regulatory requirements, and the current threat landscape. Document PIRs formally and prioritize them by business impact.'
          },
          {
            heading: 'Collection',
            detail: 'Collection gathers raw data from diverse sources: open source intelligence (OSINT) from public reports, blogs, social media, and paste sites; commercial threat intelligence feeds (Recorded Future, Mandiant Advantage, CrowdStrike Falcon Intelligence); government feeds (CISA alerts, FBI Flash reports); dark web monitoring (Tor forums, criminal marketplaces); technical collection from malware sandboxes (Any.Run, Hybrid Analysis), honeypots, and network sensors; and human intelligence from industry contacts and ISACs. Establish collection plans that map sources to PIRs.'
          },
          {
            heading: 'Processing & Exploitation',
            detail: 'Raw collected data must be processed into usable formats: extracting IOCs from unstructured reports using tools like IOC Parser or CyberChef, normalizing data into structured formats (STIX 2.1), deduplicating indicators across sources, enriching IOCs with context (geolocation, WHOIS data, passive DNS history), and storing processed intelligence in a centralized Threat Intelligence Platform (TIP). Automation is critical at this stage — manual processing cannot scale to the volume of available threat data.'
          },
          {
            heading: 'Analysis & Production',
            detail: 'Analysis transforms processed data into intelligence by applying human judgment and analytical frameworks. Techniques include structured analytic techniques (SATs) like Analysis of Competing Hypotheses (ACH), link analysis to map relationships between IOCs and threat actors, temporal analysis to identify campaign patterns, and TTP mapping to MITRE ATT&CK. Avoid cognitive biases: confirmation bias (seeking only supporting evidence), anchoring bias (over-relying on first information received), and mirror imaging (assuming adversaries think like you).'
          },
          {
            heading: 'Dissemination & Feedback',
            detail: 'Intelligence must reach the right consumers in the right format at the right time. Technical IOCs go to SIEM/firewall/EDR systems via automated feeds (TAXII servers). Tactical TTP analysis goes to detection engineering teams for rule creation. Operational intelligence goes to IR teams for investigation context. Strategic assessments go to executives as briefing documents. Collect feedback from consumers to evaluate intelligence quality, timeliness, and actionability. Use this feedback to refine PIRs and improve collection and analysis in the next cycle.'
          }
        ],
        keyTakeaways: [
          'Priority Intelligence Requirements (PIRs) drive the intelligence cycle and must align with organizational risk',
          'Collection plans should map diverse sources to specific PIRs for efficient intelligence gathering',
          'Automated processing and enrichment is essential for handling the volume of available threat data',
          'Structured analytic techniques reduce cognitive biases in intelligence analysis',
          'Dissemination must match the format and detail level to each consumer audience'
        ],
        practiceExercises: [
          'Develop five Priority Intelligence Requirements for a financial services organization, including collection sources, expected products, and review frequency for each',
          'Process an unstructured threat report by extracting all IOCs, normalizing them to STIX 2.1 format, and enriching with context from VirusTotal and WHOIS lookups',
          'Conduct an Analysis of Competing Hypotheses (ACH) exercise to evaluate three possible attributions for a simulated cyber attack, documenting evidence for and against each hypothesis'
        ],
        resources: [
          { name: 'Psychology of Intelligence Analysis by Richards Heuer', url: 'https://www.cia.gov/static/9a5f1162fd0932c29bfed1c030edf4ae/Psych-of-tic-Analysis-fulltext.pdf' },
          { name: 'STIX/TAXII Documentation', url: 'https://oasis-open.github.io/cti-documentation/' },
          { name: 'SANS FOR578: Cyber Threat Intelligence' }
        ]
      },
      {
        title: 'MITRE ATT&CK Framework',
        duration: '3 hours',
        overview: 'The MITRE ATT&CK framework is the de facto standard for describing adversary behavior in cybersecurity. This module provides deep, practical knowledge of the framework\'s structure, how to use it for threat modeling, detection engineering, gap analysis, and how to integrate ATT&CK into daily security operations.',
        topics: [
          {
            heading: 'ATT&CK Framework Structure & Navigation',
            detail: 'MITRE ATT&CK organizes adversary behavior into a matrix of Tactics (the adversary\'s goals, like Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Exfiltration, Command and Control, and Impact) and Techniques (how those goals are achieved, like T1566 Phishing or T1059 Command and Scripting Interpreter). Sub-techniques provide additional granularity (T1566.001 Spearphishing Attachment). Each technique includes descriptions, procedures, detection guidance, and mitigations.'
          },
          {
            heading: 'ATT&CK for Threat Modeling',
            detail: 'Use ATT&CK to model threats relevant to your organization. Start by identifying threat actors that target your industry using ATT&CK Groups, then map their known techniques to the ATT&CK matrix. Overlay your detection capabilities to identify gaps — techniques used by your adversaries that you cannot currently detect. This produces a prioritized list of detection engineering investments. Tools like the ATT&CK Navigator provide visual heat maps of adversary coverage and detection gaps.'
          },
          {
            heading: 'ATT&CK for Detection Engineering',
            detail: 'Each ATT&CK technique includes detection guidance specifying what data sources and components to monitor. For example, detecting T1053.005 (Scheduled Task) requires monitoring Windows Event ID 4698 (task creation), Sysmon Event ID 1 (process creation for schtasks.exe), and file creation in C:\\Windows\\System32\\Tasks. Map your SIEM detection rules to ATT&CK techniques to measure coverage. Use Sigma rules tagged with ATT&CK IDs to rapidly deploy community-developed detections for specific techniques.'
          },
          {
            heading: 'ATT&CK Navigator & Visualization',
            detail: 'The ATT&CK Navigator is a web-based tool for creating custom ATT&CK matrix visualizations (layers). Create layers showing: threat actor coverage (which techniques your adversaries use), detection coverage (which techniques your SIEM can detect), team skill coverage (which techniques your analysts can investigate), and gap analysis (overlay adversary and detection layers to highlight blind spots). Export layers as JSON for version control and share them across teams for collaborative threat modeling.'
          },
          {
            heading: 'ATT&CK-Based Reporting & Communication',
            detail: 'Use ATT&CK as a common language for communicating about threats across technical and non-technical audiences. Incident reports that map observed adversary actions to ATT&CK techniques are more actionable than narrative descriptions. Red team reports mapped to ATT&CK enable direct comparison with blue team detection coverage. CTI reports structured around ATT&CK techniques facilitate automated ingestion into security tools. This standardized vocabulary eliminates ambiguity in threat communication.'
          },
          {
            heading: 'ATT&CK for Cloud, Mobile, and ICS',
            detail: 'Beyond Enterprise ATT&CK, MITRE maintains matrices for Cloud (covering AWS, Azure, GCP, SaaS, and Office 365), Mobile (Android and iOS), and ICS (Industrial Control Systems). Cloud ATT&CK includes techniques specific to cloud environments like T1078.004 (Cloud Accounts), T1537 (Transfer Data to Cloud Account), and T1580 (Cloud Infrastructure Discovery). ICS ATT&CK covers operational technology threats like T0816 (Device Restart/Shutdown) and T0831 (Manipulation of Control), critical for organizations with OT environments.'
          }
        ],
        keyTakeaways: [
          'MITRE ATT&CK provides a standardized taxonomy of adversary tactics, techniques, and procedures',
          'ATT&CK Navigator layers enable visual gap analysis between threat actor TTPs and detection coverage',
          'Detection engineering should be driven by ATT&CK technique coverage mapped to relevant threat actors',
          'ATT&CK serves as a common language for threat communication across technical and non-technical audiences',
          'Separate ATT&CK matrices for Cloud, Mobile, and ICS address environment-specific threats'
        ],
        practiceExercises: [
          'Using the ATT&CK Navigator, create a layer mapping the known techniques of APT29, then create a second layer mapping your hypothetical detection capabilities, and overlay them to identify the top five coverage gaps',
          'Write SIEM detection rules for three ATT&CK techniques (T1053 Scheduled Task, T1059.001 PowerShell, T1021.001 RDP) and document the required data sources for each',
          'Map a published incident report to ATT&CK techniques, creating a complete attack chain visualization from Initial Access through Impact'
        ],
        resources: [
          { name: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
          { name: 'ATT&CK Navigator', url: 'https://mitre-attack.github.io/attack-navigator/' },
          { name: 'MITRE ATT&CK Defender (MAD) Training', url: 'https://mad.mitre-engenuity.org/' }
        ]
      },
      {
        title: 'Indicators of Compromise (IoCs)',
        duration: '2.5 hours',
        overview: 'Indicators of Compromise are the observable artifacts that signal a potential security breach. This module teaches how to identify, validate, manage, and operationalize IoCs across security tools, while understanding their limitations and the shift toward behavior-based detection.',
        topics: [
          {
            heading: 'Types of Indicators of Compromise',
            detail: 'IoCs span multiple categories: network indicators (IP addresses, domains, URLs, SNORT signatures), host indicators (file hashes — MD5, SHA-1, SHA-256 — registry keys, file paths, mutex names, scheduled tasks), email indicators (sender addresses, subject lines, attachment names and hashes), and behavioral indicators (process trees, command-line patterns, API call sequences). The Pyramid of Pain (by David Bianco) illustrates that blocking hash values is trivial for attackers to bypass, while detecting TTPs causes the most adversary pain.'
          },
          {
            heading: 'IoC Validation & Confidence Scoring',
            detail: 'Not all IoCs are created equal — false positives waste analyst time and erode trust in threat intelligence. Validate IoCs through multiple sources: check IP addresses against VirusTotal, AbuseIPDB, and Shodan; verify domains using DomainTools, PassiveTotal, and historical WHOIS data; submit file hashes to VirusTotal and malware sandboxes (Any.Run, Hybrid Analysis). Assign confidence scores based on source reliability, corroboration across multiple sources, age (IoCs decay in value as infrastructure changes), and contextual relevance to your environment.'
          },
          {
            heading: 'IoC Lifecycle Management',
            detail: 'IoCs have a lifecycle from creation through operationalization to expiration. New IoCs are ingested from threat feeds, internal investigations, and community sharing. They are enriched with context, scored for confidence, and deployed to security tools (SIEM watchlists, firewall block lists, EDR detection rules). Over time, IoCs lose relevance as attackers abandon infrastructure — implement expiration policies (e.g., IP indicators expire after 90 days unless refreshed). Regular review and pruning prevent IoC bloat that degrades security tool performance.'
          },
          {
            heading: 'Operationalizing IoCs in Security Tools',
            detail: 'IoCs are most valuable when automatically operationalized across the security stack. Feed IP and domain IoCs to firewalls and DNS sinkholes for blocking, hash IoCs to EDR solutions for detection and prevention, URL IoCs to web proxies for filtering, and email IoCs to email gateways for quarantine. SIEM integration enables retroactive searching — when a new IoC is published, search historical logs to identify if the indicator was seen in your environment before it was known to be malicious. Automate this process through threat intelligence platform (TIP) integrations.'
          },
          {
            heading: 'Beyond IoCs: Indicators of Attack (IoAs)',
            detail: 'While IoCs represent static artifacts (point-in-time evidence), Indicators of Attack (IoAs) describe adversary behaviors that are harder to change. An IoA might be "PowerShell spawning from a Microsoft Office process making an outbound connection" — this pattern persists even as specific files, IPs, and domains change across campaigns. IoAs map directly to MITRE ATT&CK techniques and form the basis for behavior-based detection rules that catch novel attacks and zero-day exploits that IoC-based detection misses.'
          }
        ],
        keyTakeaways: [
          'The Pyramid of Pain illustrates that detecting TTPs causes more adversary disruption than blocking simple IoCs',
          'IoC validation through multiple sources and confidence scoring prevents false positive overload',
          'IoCs have a lifecycle requiring expiration policies to prevent performance-degrading bloat',
          'Automated operationalization across the security stack (SIEM, firewall, EDR, proxy) maximizes IoC value',
          'Behavior-based Indicators of Attack (IoAs) complement IoCs by detecting novel attack patterns'
        ],
        practiceExercises: [
          'Given a list of 20 IoCs from a threat report, validate each using VirusTotal and WHOIS data, assign confidence scores, and recommend which should be deployed to blocking vs. monitoring',
          'Create a SIEM watchlist from a threat intelligence feed and write queries to retroactively search 30 days of historical logs for any matches',
          'Write three behavior-based detection rules (IoAs) that detect the same attack technique regardless of specific file hashes, IPs, or domains used'
        ],
        resources: [
          { name: 'The Pyramid of Pain by David Bianco', url: 'http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html' },
          { name: 'VirusTotal', url: 'https://www.virustotal.com/' },
          { name: 'SANS Cyber Threat Intelligence Consumption Guide' }
        ]
      },
      {
        title: 'Open Source Intelligence (OSINT)',
        duration: '3 hours',
        overview: 'Open Source Intelligence is the collection and analysis of publicly available information for security purposes. This module covers OSINT methodologies, tools, and techniques used by threat intelligence analysts to research threat actors, investigate infrastructure, and gather information about an organization\'s external attack surface.',
        topics: [
          {
            heading: 'OSINT Methodology & Frameworks',
            detail: 'Effective OSINT follows structured methodologies to ensure completeness and avoid rabbit holes. The OSINT cycle mirrors the intelligence lifecycle: define requirements, identify sources, collect data, process and analyze, and report findings. The OSINT Framework (osintframework.com) provides a categorized directory of tools and techniques. Establish collection boundaries before starting research — unlimited OSINT can consume infinite time. Document your research trail for reproducibility and to support attribution confidence assessments.'
          },
          {
            heading: 'Domain & Infrastructure Research',
            detail: 'Investigating adversary infrastructure involves querying WHOIS records (historical data through DomainTools), analyzing DNS records (MX, NS, TXT, A, CNAME), exploring passive DNS databases (Farsight DNSDB, SecurityTrails) to find historical IP-to-domain mappings, examining SSL/TLS certificates (crt.sh, Censys) for certificate transparency logs, and scanning internet-facing infrastructure using Shodan or Censys to identify services, technologies, and potential relationships between assets. Pivoting between these data points reveals adversary infrastructure clusters.'
          },
          {
            heading: 'Threat Actor Research & Attribution',
            detail: 'Researching threat actors combines technical and non-technical OSINT: reviewing published APT reports from security vendors (Mandiant, CrowdStrike, Kaspersky), tracking threat actor discussions on dark web forums and Telegram channels, analyzing malware samples on VirusTotal and malware repositories, and monitoring code repositories for leaked tools. Attribution is challenging and often uncertain — use structured analytic techniques and clearly communicate confidence levels. Track adversary naming conventions across vendors (e.g., APT28 = Fancy Bear = Strontium = Forest Blizzard).'
          },
          {
            heading: 'Social Media & Dark Web Intelligence',
            detail: 'Social media platforms contain valuable intelligence: threat actors boast about attacks on Twitter/X and Telegram, vulnerability researchers publish proof-of-concept code on GitHub, and data breach dumps appear on paste sites and criminal forums. Dark web intelligence involves monitoring Tor-based marketplaces and forums for stolen credentials, exploits for sale, and discussions of target organizations. Use tools like Maltego for relationship mapping, SpiderFoot for automated reconnaissance, and specialized dark web monitoring services for criminal marketplace tracking. Always maintain operational security during dark web research.'
          },
          {
            heading: 'Attack Surface Discovery',
            detail: 'OSINT helps organizations understand their external attack surface — what an adversary sees from the outside. Techniques include: subdomain enumeration (Subfinder, Amass, Certificate Transparency logs), technology fingerprinting (Wappalyzer, BuiltWith), exposed credential discovery (Have I Been Pwned API, dehashed), leaked code and secrets on GitHub (GitLeaks, TruffleHog), exposed cloud storage (GrayhatWarfare for open S3 buckets), and employee information gathering from LinkedIn for social engineering assessment. Regular attack surface assessments help proactively identify and remediate exposures.'
          },
          {
            heading: 'OSINT Operational Security',
            detail: 'OSINT collection must be conducted with proper operational security (OPSEC) to avoid tipping off adversaries or exposing your investigation. Use dedicated research VMs or Tails OS, separate browsers with clean profiles, VPNs or Tor for anonymity, and sock puppet accounts that cannot be traced to your organization. Never interact with adversary infrastructure from corporate networks. Be aware of tracking pixels in documents, canary tokens in leaked data, and JavaScript-based browser fingerprinting on adversary websites. Document your OPSEC procedures and enforce them consistently.'
          }
        ],
        keyTakeaways: [
          'Structured OSINT methodologies prevent scope creep and ensure reproducible research',
          'Pivoting between WHOIS, DNS, certificate, and scanning data reveals adversary infrastructure clusters',
          'Attack surface discovery using OSINT techniques proactively identifies organizational exposures',
          'Dark web monitoring provides early warning of stolen credentials, exploits, and targeting discussions',
          'Operational security during OSINT collection protects investigations and organizational identity'
        ],
        practiceExercises: [
          'Conduct a passive infrastructure investigation of a practice domain: enumerate subdomains, query DNS records, check certificate transparency logs, and map the full digital footprint without active scanning',
          'Perform an attack surface assessment of your organization (or a practice target): identify exposed services, leaked credentials, code repositories, and cloud storage using only OSINT tools',
          'Research a named APT group using only open sources, producing a structured intelligence report with IOCs, TTPs mapped to ATT&CK, and infrastructure analysis'
        ],
        resources: [
          { name: 'OSINT Framework', url: 'https://osintframework.com/' },
          { name: 'Open Source Intelligence Techniques by Michael Bazzell' },
          { name: 'SANS SEC487: Open-Source Intelligence (OSINT) Gathering and Analysis' }
        ]
      },
      {
        title: 'Threat Intel Platforms',
        duration: '3 hours',
        overview: 'Threat Intelligence Platforms (TIPs) are the operational backbone of mature CTI programs, enabling automated collection, enrichment, analysis, and sharing of threat intelligence. This module covers platform selection, deployment, integration with security tools, and best practices for managing threat intelligence at scale.',
        topics: [
          {
            heading: 'TIP Architecture & Core Features',
            detail: 'Threat Intelligence Platforms provide centralized management of threat data with core capabilities: feed aggregation (ingesting from multiple commercial, open source, and internal sources), indicator enrichment (automatic context addition via API integrations), deduplication and correlation (linking related indicators across sources), confidence scoring (assessing indicator reliability), SIEM/SOAR integration (automated deployment to detection and response tools), and collaboration features (sharing intelligence with trusted partners). Major TIPs include MISP (open source), OpenCTI (open source), Anomali ThreatStream, Recorded Future, and ThreatConnect.'
          },
          {
            heading: 'MISP (Malware Information Sharing Platform)',
            detail: 'MISP is the leading open-source TIP used by governments, CERTs, and enterprises worldwide. It supports structured threat data using MISP objects (malware samples, network indicators, financial fraud indicators), taxonomies (standardized classification tags), galaxies (knowledge base clusters linked to ATT&CK, threat actors, and tools), and sharing groups (controlling who sees what data). MISP\'s REST API enables automation, and its built-in correlation engine automatically links related events. Deploy MISP using Docker for rapid setup and connect it to your SIEM for automated IoC detection.'
          },
          {
            heading: 'OpenCTI Platform',
            detail: 'OpenCTI is a modern open-source CTI platform that natively supports STIX 2.1 objects and provides rich relationship visualization. It excels at connecting tactical indicators to strategic-level entities (threat actors, campaigns, attack patterns) through a knowledge graph. OpenCTI integrates with MISP, MITRE ATT&CK, and various OSINT connectors for automated data enrichment. Its dashboard provides visual analytics on threat landscape trends, campaign timelines, and indicator distribution. OpenCTI\'s GraphQL API supports custom integrations and automation.'
          },
          {
            heading: 'Feed Management & Integration',
            detail: 'Effective TIP deployment requires careful feed management: evaluate feed quality (false positive rates, timeliness, relevance to your industry), configure feed scoring (weight indicators based on source reliability), implement aging and expiration policies (automatically expire stale indicators), and monitor feed health (alerts when feeds stop updating). Integrate the TIP with SIEM (push IoCs to watchlists), SOAR (trigger automated playbooks on high-confidence matches), firewalls (automated blocking), and EDR (endpoint detection rules).'
          },
          {
            heading: 'Intelligence Sharing Communities',
            detail: 'Participating in intelligence sharing communities multiplies your CTI capability. ISACs (Information Sharing and Analysis Centers) serve specific industries — FS-ISAC for financial services, H-ISAC for healthcare, IT-ISAC for technology. Government programs like CISA\'s AIS (Automated Indicator Sharing) provide free threat feeds. FIRST (Forum of Incident Response and Security Teams) connects global CERT communities. Configure your TIP to both consume and contribute intelligence, establishing your organization as a trusted sharing partner while benefiting from collective defense.'
          }
        ],
        keyTakeaways: [
          'TIPs automate the collection, enrichment, and distribution of threat intelligence at scale',
          'MISP and OpenCTI provide enterprise-grade CTI capabilities as open-source platforms',
          'Feed management including quality assessment, scoring, and expiration policies prevents IoC bloat',
          'TIP integration with SIEM, SOAR, firewall, and EDR operationalizes intelligence automatically',
          'Intelligence sharing through ISACs and government programs provides collective defense benefits'
        ],
        practiceExercises: [
          'Deploy MISP using Docker, configure three open-source threat feeds, and create an event with IoCs from a published threat report including proper tagging and classification',
          'Configure a MISP-to-Splunk integration that automatically creates lookup tables from high-confidence IoCs, then write correlation searches that alert on matches in firewall and proxy logs',
          'Evaluate three threat intelligence feeds (one commercial, two open source) over 30 days, measuring false positive rates, update frequency, and relevance to your environment'
        ],
        resources: [
          { name: 'MISP Project', url: 'https://www.misp-project.org/' },
          { name: 'OpenCTI Documentation', url: 'https://docs.opencti.io/' },
          { name: 'FIRST (Forum of Incident Response and Security Teams)', url: 'https://www.first.org/' }
        ]
      },
      {
        title: 'Writing Intel Reports',
        duration: '3.5 hours',
        overview: 'The ability to produce clear, actionable threat intelligence reports is what transforms raw analysis into organizational value. This module covers report structures for different audiences, analytical writing techniques, confidence language, and best practices for delivering intelligence that drives security decisions.',
        topics: [
          {
            heading: 'Intelligence Report Types & Audiences',
            detail: 'Different audiences require different report formats: Flash Reports (immediate alerts about active threats, 1-2 pages, for SOC and IR teams), Technical Analysis Reports (deep dives into malware, infrastructure, or attack campaigns for detection engineers and threat hunters), Threat Assessments (evaluations of threats to specific assets or initiatives for security managers), and Strategic Intelligence Briefings (trend analysis and geopolitical context for executive leadership). Each format has distinct structures, detail levels, and actionable recommendations appropriate to its audience.'
          },
          {
            heading: 'Report Structure & Best Practices',
            detail: 'Professional intelligence reports follow a consistent structure: Executive Summary (bottom-line-up-front — the most important finding in one paragraph), Key Findings (3-5 bullet points), Background/Context, Analysis (the detailed body with evidence and reasoning), IOCs/Observables (structured list for operationalization), Recommendations (specific, actionable steps), and Appendices (raw data, methodology notes). Use the inverted pyramid style — put the most important information first so readers who stop early still get the key message.'
          },
          {
            heading: 'Analytical Confidence & Estimative Language',
            detail: 'Intelligence assessments must communicate confidence levels using standardized language. The Intelligence Community\'s estimative language scale ranges from "Almost No Chance" (< 5%) through "Unlikely" (5-20%), "Roughly Even Chance" (45-55%), "Likely" (55-80%), to "Almost Certain" (> 95%). State the basis for your confidence: number and reliability of sources, corroboration across sources, analytical method used, and known intelligence gaps. Phrases like "We assess with moderate confidence that..." clearly communicate both the finding and its reliability to consumers.'
          },
          {
            heading: 'MITRE ATT&CK Mapping in Reports',
            detail: 'Map adversary activities to MITRE ATT&CK techniques throughout intelligence reports. This provides a standardized vocabulary, enables automated ingestion by security tools, allows comparison across incidents and campaigns, and facilitates gap analysis against detection capabilities. Include ATT&CK technique IDs (e.g., T1566.001) alongside descriptive text. Provide an ATT&CK Navigator layer as a visual appendix showing the complete mapping of observed techniques. This practice bridges the gap between intelligence production and detection engineering consumption.'
          },
          {
            heading: 'Actionable Recommendations & STIX Packaging',
            detail: 'Every intelligence report should include specific, actionable recommendations: detection signatures (Sigma, YARA, Snort rules), blocking actions (IP/domain/hash lists for firewalls and EDR), hunting queries (SPL, KQL, or Sigma for proactive searching), mitigation steps (specific configurations, patches, or architecture changes), and monitoring guidance (what to watch for going forward). Package IOCs and detection rules in machine-readable formats (STIX 2.1, CSV, JSON) alongside the narrative report so consumers can immediately operationalize the intelligence.'
          }
        ],
        keyTakeaways: [
          'Different report types (flash, technical, assessment, strategic) serve different audiences with appropriate detail levels',
          'The inverted pyramid structure ensures key findings reach readers regardless of how much they read',
          'Standardized estimative language clearly communicates confidence levels and analytical certainty',
          'MITRE ATT&CK mapping in reports enables standardized communication and automated ingestion',
          'Actionable recommendations with machine-readable IOC packages maximize intelligence operationalization'
        ],
        practiceExercises: [
          'Write a Flash Report (1-2 pages) about an active phishing campaign targeting your industry, including IOCs, MITRE ATT&CK mapping, and immediate recommended actions',
          'Produce a Technical Analysis Report on a malware sample or attack campaign from a public case study, including full TTP analysis, IOC table, detection signatures, and ATT&CK Navigator layer',
          'Create a Strategic Intelligence Briefing (executive format) assessing the top three cyber threats to a specific industry sector for the next 12 months, using proper estimative language and confidence levels'
        ],
        resources: [
          { name: 'A Structured Approach to Strategic Threat Assessment by ENISA' },
          { name: 'SANS FOR578: Cyber Threat Intelligence' },
          { name: 'Writing with Intelligence by James Major' }
        ]
      }
    ]
  },
  {
    id: 'scripting-security',
    tier: 'intermediate',
    title: 'Scripting for Security (Python/Bash)',
    description: 'Develop practical programming skills in Python and Bash to automate security tasks, build custom tools, and streamline day-to-day operations. This course takes security professionals from scripting fundamentals to building real-world tools including port scanners, log parsers, API integrators, and automated security check frameworks used in SOC and penetration testing environments.',
    objectives: [
      'Write Python scripts to automate common security analysis and investigation tasks',
      'Interact with files, APIs, and databases programmatically for security data processing',
      'Build network security tools using Python socket programming and Scapy',
      'Write Bash scripts for system administration, log analysis, and security hardening',
      'Create custom log parsing and analysis scripts that process diverse security log formats',
      'Build a functional port scanner with service detection and output reporting',
      'Develop automated security compliance checking scripts for infrastructure auditing'
    ],
    estimatedHours: 35,
    prerequisites: ['security-plus-prep'],
    modules: [
      {
        title: 'Python Basics for Security',
        duration: '5 hours',
        overview: 'This module introduces Python programming fundamentals through a security lens, teaching core language concepts using security-relevant examples and exercises. You will learn data types, control flow, functions, error handling, and object-oriented basics with practical applications in cybersecurity.',
        topics: [
          {
            heading: 'Python Environment Setup & Security Libraries',
            detail: 'Set up a Python development environment with security-focused tools: install Python 3.x with pip, configure virtual environments (venv) for project isolation, and install essential security libraries including requests (HTTP interactions), scapy (packet manipulation), python-nmap (network scanning), paramiko (SSH automation), cryptography (encryption operations), and pefile (PE file analysis). Use an IDE like VS Code or PyCharm with linting (pylint, flake8) and configure a Jupyter notebook for interactive analysis. Virtual environments prevent dependency conflicts across different security tool projects.'
          },
          {
            heading: 'Data Types & Structures for Security Data',
            detail: 'Security scripting relies heavily on specific data structures: strings for IP addresses, domains, and hash values (with regex matching using the re module); lists for collections of IOCs; dictionaries for key-value mappings of log fields; sets for deduplicating indicators; and tuples for immutable data records. Understanding bytes vs. strings is critical when handling network packets, binary file analysis, and encoding/decoding operations. Practice converting between hex strings and bytes, a common task when analyzing malware or network captures.'
          },
          {
            heading: 'Control Flow & Logic for Security Automation',
            detail: 'Build security logic using conditionals, loops, and comprehensions. Examples include: iterating through log files to filter suspicious events, using conditional logic to classify network connections by risk level, implementing rate limiting with time.sleep() for API queries, and using try/except blocks to handle network timeouts and API errors gracefully. List comprehensions provide concise syntax for filtering: suspicious_ips = [ip for ip in all_ips if ip not in whitelist]. Generator expressions handle large log files memory-efficiently.'
          },
          {
            heading: 'Functions & Modular Security Scripts',
            detail: 'Well-structured security scripts use functions for reusability and clarity. Design functions with clear inputs and outputs: validate_ip(address) returns True/False, enrich_ioc(indicator) returns enrichment data, parse_log_line(line) returns a structured dictionary. Use type hints for documentation (def scan_port(host: str, port: int) -> bool), docstrings for usage guidance, and default parameters for flexible configuration. Organize related functions into modules that can be imported across different security scripts.'
          },
          {
            heading: 'File I/O & Data Processing',
            detail: 'Security analysts constantly work with files: reading log files, processing CSV exports from SIEM tools, parsing JSON API responses, and writing reports. Master file operations using context managers (with open()), csv module for structured data, json module for API interactions, and the pathlib module for cross-platform file path handling. Handle large files efficiently using line-by-line iteration rather than reading entire files into memory. Example: process a 10GB firewall log file to extract all unique source IPs that triggered deny rules.'
          },
          {
            heading: 'Regular Expressions for Security',
            detail: 'Regular expressions are indispensable for security scripting. Common patterns include: extracting IP addresses (\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b), matching email addresses from phishing headers, parsing CVE identifiers (CVE-\\d{4}-\\d{4,7}), extracting URLs from malicious scripts, and identifying hash values by type (MD5: 32 hex chars, SHA-256: 64 hex chars). The re module supports compiled patterns for performance, named groups for readable extraction, and findall/finditer for scanning large text blocks. Practice with tools like regex101.com before implementing in code.'
          }
        ],
        keyTakeaways: [
          'Virtual environments and security-specific libraries form the foundation of a Python security toolkit',
          'Understanding bytes vs. strings is critical for network packet analysis and binary file handling',
          'Functions with type hints and modular design make security scripts reusable and maintainable',
          'File I/O with context managers and line-by-line processing handles large security log files efficiently',
          'Regular expressions are essential for extracting IOCs, parsing logs, and pattern matching in security data'
        ],
        practiceExercises: [
          'Write a Python script that reads a text file containing mixed IOCs (IPs, domains, hashes, URLs), classifies each by type using regex, and outputs a structured JSON report with counts and deduplicated lists',
          'Create a function library (ioc_utils.py) with functions for IP validation, CIDR range checking, hash type identification, domain defanging/refanging, and timestamp normalization',
          'Build a log file processor that reads a CSV export from a SIEM, filters events by severity and time range, and generates a summary report with statistics'
        ],
        resources: [
          { name: 'Violent Python by TJ O\'Connor' },
          { name: 'Black Hat Python, 2nd Edition by Justin Seitz and Tim Arnold' },
          { name: 'Python Documentation', url: 'https://docs.python.org/3/' }
        ]
      },
      {
        title: 'Working with Files & APIs',
        duration: '5 hours',
        overview: 'Modern security operations require integrating with APIs and processing diverse file formats. This module covers interacting with security APIs (VirusTotal, Shodan, AbuseIPDB), handling common security file formats, and building automated enrichment pipelines that add context to security investigations.',
        topics: [
          {
            heading: 'HTTP Requests & REST API Fundamentals',
            detail: 'The requests library is Python\'s standard for HTTP interactions. Understand HTTP methods (GET for retrieval, POST for submission, PUT/PATCH for updates, DELETE for removal), status codes (200 OK, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Rate Limited), headers (Authorization, Content-Type, User-Agent), and request/response bodies. Security APIs typically use API key authentication via headers or query parameters. Implement proper error handling for network timeouts, rate limiting (respect 429 responses with exponential backoff), and API quota management.'
          },
          {
            heading: 'VirusTotal API Integration',
            detail: 'VirusTotal\'s API enables automated IOC lookups: submit file hashes for multi-engine scan results (GET /files/{hash}), check IP reputation and passive DNS (GET /ip_addresses/{ip}), query domain reports (GET /domains/{domain}), and submit URLs for scanning. The free API tier allows 4 requests per minute with 500 per day. Build a Python wrapper class that handles rate limiting, caches results to avoid duplicate queries, and parses the JSON response to extract detection ratios, threat labels, and community comments.'
          },
          {
            heading: 'Shodan API for Infrastructure Analysis',
            detail: 'Shodan\'s API provides internet-wide scan data for infrastructure reconnaissance. Query hosts by IP for open ports, services, and technologies (api.host(ip)). Search for exposed assets using Shodan dorks (api.search(\'org:"Target Corp" port:3389\')). Monitor your organization\'s attack surface by querying for your IP ranges and alerting on new exposed services. Build scripts that check if IOC IP addresses are associated with known malicious infrastructure, Tor exit nodes, or compromised IoT devices.'
          },
          {
            heading: 'Working with Security File Formats',
            detail: 'Security professionals encounter diverse file formats: PCAP files (analyzed with scapy or pyshark), PE executables (parsed with pefile to extract headers, imports, sections, and resources), PDF documents (analyzed with PyPDF2 or pdfminer for embedded objects and JavaScript), YARA rules (compiled and matched using yara-python), STIX/TAXII feeds (parsed with python-stix2), and Sigma rules (processed with pySigma). Build file analysis scripts that automatically extract indicators and metadata from suspicious files submitted for investigation.'
          },
          {
            heading: 'Building Automated Enrichment Pipelines',
            detail: 'Combine multiple API sources into automated enrichment pipelines that process IOC lists. Given a list of IP addresses from a SIEM alert, automatically: query VirusTotal for reputation, check AbuseIPDB for abuse reports, look up geographic location using ipinfo.io, check against internal threat intelligence feeds, and compile results into a formatted report. Use asyncio or concurrent.futures for parallel API queries to process large IOC lists efficiently. Store enrichment results in a SQLite database for historical tracking and deduplication.'
          },
          {
            heading: 'Database Operations for Security Data',
            detail: 'Use SQLite3 (built-in) or SQLAlchemy for persistent storage of security data: IOC databases with enrichment history, investigation case tracking, scan result archives, and vulnerability management data. Design schemas that support efficient querying: index frequently searched fields (IP addresses, hashes, timestamps), use appropriate data types, and implement TTL-based cleanup for time-limited data. For larger deployments, connect to PostgreSQL or Elasticsearch using appropriate Python drivers for production-grade security data management.'
          }
        ],
        keyTakeaways: [
          'REST API integration with proper error handling and rate limiting is essential for security automation',
          'VirusTotal, Shodan, and AbuseIPDB APIs provide critical context for IOC enrichment',
          'Automated enrichment pipelines with parallel processing efficiently handle large IOC lists',
          'Understanding security file formats (PCAP, PE, YARA, STIX) enables automated analysis',
          'Database storage enables historical tracking and deduplication of security intelligence'
        ],
        practiceExercises: [
          'Build a VirusTotal IOC checker that accepts a file of hashes, IPs, or domains, queries the VT API with proper rate limiting, and outputs a CSV report with detection ratios and threat classifications',
          'Create an automated enrichment pipeline that takes a list of IP addresses and queries VirusTotal, AbuseIPDB, and ipinfo.io, then generates a formatted HTML report with color-coded risk ratings',
          'Write a PE file analyzer using pefile that extracts file header information, imported functions, section names, and suspicious indicators (high entropy sections, known malicious imports)'
        ],
        resources: [
          { name: 'VirusTotal API Documentation', url: 'https://docs.virustotal.com/reference/overview' },
          { name: 'Shodan API Documentation', url: 'https://shodan.readthedocs.io/' },
          { name: 'Automate the Boring Stuff with Python by Al Sweigart', url: 'https://automatetheboringstuff.com/' }
        ]
      },
      {
        title: 'Network Scripting with Python',
        duration: '5 hours',
        overview: 'Network programming is a core skill for security professionals. This module covers socket programming, packet crafting and analysis with Scapy, network protocol implementation, and building custom network security tools that enable active reconnaissance, traffic analysis, and vulnerability testing.',
        topics: [
          {
            heading: 'Socket Programming Fundamentals',
            detail: 'Python\'s socket module provides low-level network access for building custom tools. Understand TCP vs. UDP socket types, the client-server connection lifecycle (socket, bind, listen, accept, connect, send, recv, close), and how to implement timeout handling. Build a basic TCP client that connects to services and receives banners, a TCP server that accepts connections (useful for building honeypots), and a UDP client for DNS queries. Socket programming forms the foundation for custom port scanners, service enumerators, and network tools.'
          },
          {
            heading: 'Scapy for Packet Crafting & Analysis',
            detail: 'Scapy is Python\'s most powerful packet manipulation library, enabling security professionals to craft, send, receive, and analyze network packets at any protocol layer. Construct packets by stacking layers: IP(dst="target")/TCP(dport=80, flags="S") creates a SYN packet. Use sr() and sr1() for send-and-receive operations, sniff() for packet capture with custom filters, and rdpcap() to read PCAP files. Scapy enables SYN scanning, ARP discovery, DNS enumeration, traceroute implementation, and custom protocol testing that would require multiple specialized tools.'
          },
          {
            heading: 'Network Reconnaissance Scripts',
            detail: 'Build automated reconnaissance tools: ARP scanner to discover hosts on local network segments (scapy.arping()), TCP SYN scanner for port discovery, service banner grabbing to identify running applications, DNS enumeration scripts that query multiple record types (A, AAAA, MX, NS, TXT, CNAME), and SSL/TLS certificate analysis to extract certificate details and check for common misconfigurations. Integrate with python-nmap for comprehensive scanning with NSE script execution.'
          },
          {
            heading: 'Packet Capture Analysis',
            detail: 'Analyze network captures programmatically using Scapy or PyShark (a Python wrapper for tshark/Wireshark). Extract conversation flows, identify DNS queries to suspicious domains, detect cleartext credentials in HTTP/FTP/SMTP traffic, analyze TLS handshakes for weak cipher suites, and identify potential C2 beaconing patterns by analyzing connection intervals. Build scripts that process large PCAP files to generate network forensic reports with statistics on protocols, top talkers, and anomalous patterns.'
          },
          {
            heading: 'SSH & Remote Command Execution',
            detail: 'Paramiko enables secure remote operations: establish SSH connections to manage remote systems, execute commands for security checks (checking running processes, verifying configurations, collecting forensic artifacts), transfer files via SFTP for evidence collection, and build multi-host automation scripts that perform security audits across server fleets. Implement key-based authentication, handle connection errors gracefully, and log all remote actions for audit purposes. Combine with threading for parallel execution across multiple hosts.'
          },
          {
            heading: 'Building a Network Monitor',
            detail: 'Combine socket programming and Scapy skills to build a lightweight network monitor that captures traffic on specified interfaces, parses protocol headers, identifies anomalous patterns (port scans, ARP spoofing, DNS tunneling), and generates alerts. Implement packet filtering using BPF syntax, protocol parsing for common protocols (HTTP, DNS, SMTP), and configurable alert thresholds. Store captured metadata in a SQLite database for historical analysis and trend detection.'
          }
        ],
        keyTakeaways: [
          'Socket programming provides the foundation for building custom network security tools',
          'Scapy enables packet-level control for scanning, crafting, and analyzing network traffic',
          'Automated reconnaissance scripts combine multiple techniques for comprehensive network discovery',
          'PCAP analysis scripts can process large captures to extract forensic indicators at scale',
          'Paramiko enables secure remote automation for multi-host security auditing'
        ],
        practiceExercises: [
          'Build a TCP banner grabber that connects to a list of host:port combinations, collects service banners with a 3-second timeout, and identifies the service type based on banner patterns',
          'Using Scapy, build an ARP scanner that discovers all live hosts on a /24 network segment, resolves their MAC addresses, and identifies the manufacturer using an OUI lookup',
          'Write a PCAP analyzer that reads a capture file and produces a report including: top 10 talkers by volume, DNS queries to non-standard TLDs, any cleartext credentials detected, and connections to known-bad IPs from a provided IOC list'
        ],
        resources: [
          { name: 'Scapy Documentation', url: 'https://scapy.readthedocs.io/' },
          { name: 'Black Hat Python, 2nd Edition by Justin Seitz and Tim Arnold' },
          { name: 'Paramiko Documentation', url: 'https://www.paramiko.org/' }
        ]
      },
      {
        title: 'Bash Scripting Fundamentals',
        duration: '5 hours',
        overview: 'Bash scripting is essential for security professionals working in Linux environments, which dominate server infrastructure, cloud platforms, and security tooling. This module covers Bash fundamentals through a security lens, teaching you to automate system administration tasks, process security data, and build hardening scripts.',
        topics: [
          {
            heading: 'Bash Basics & Shell Environment',
            detail: 'Understand the Bash shell environment: variables (local and environment), command substitution ($() syntax), exit codes ($? for success/failure checking), input/output redirection (>, >>, 2>&1, |), and shell expansion (globbing, brace expansion, parameter expansion). Learn the difference between interactive and non-interactive shells, login vs. non-login shells, and how to write portable scripts with proper shebangs (#!/bin/bash vs. #!/usr/bin/env bash). Security scripts often run as cron jobs or in CI/CD pipelines where the shell environment differs from interactive sessions.'
          },
          {
            heading: 'Text Processing with grep, sed, and awk',
            detail: 'The Unix text processing trinity is essential for security log analysis. grep filters lines matching patterns (grep -E for extended regex, grep -v for inversion, grep -c for counting, grep -r for recursive search). sed performs stream editing (sed \'s/old/new/g\' for substitution, sed -n \'5,10p\' for line ranges). awk provides field-based processing (awk \'{print $1, $4}\' for column extraction, awk -F: for custom delimiters, awk with pattern matching for conditional processing). Chain these tools with pipes for powerful one-liners: cat auth.log | grep "Failed password" | awk \'{print $11}\' | sort | uniq -c | sort -rn | head -20.'
          },
          {
            heading: 'Control Flow & Functions in Bash',
            detail: 'Build logic into Bash scripts with conditionals (if/elif/else with test expressions using [[ ]]), loops (for iterating over lists/files, while for conditional repetition, until for inverse conditions), and case statements for multi-branch decisions. Functions encapsulate reusable logic: define with function_name() { }, pass arguments via $1, $2, etc., and return values via echo or return codes. Use local variables in functions to prevent scope pollution. Implement getopts for command-line argument parsing in professional security tools.'
          },
          {
            heading: 'System Information Gathering',
            detail: 'Build Bash scripts that gather security-relevant system information: running processes (ps aux, /proc filesystem), network connections (ss -tulpn, netstat), installed packages (dpkg -l, rpm -qa), user accounts and groups (/etc/passwd, /etc/shadow permissions, /etc/group), scheduled tasks (crontab -l, /etc/cron.*), system services (systemctl list-units), kernel parameters (sysctl -a), and open file handles (lsof). These scripts form the basis of system auditing and incident response data collection in Linux environments.'
          },
          {
            heading: 'Error Handling & Logging',
            detail: 'Production security scripts require robust error handling: use set -euo pipefail for strict error mode (exit on error, unset variables, and pipe failures), implement trap for cleanup on exit or signal handling, validate inputs before processing, and log actions with timestamps using logger (to syslog) or custom log functions. Security scripts that modify system configurations must log every change for audit purposes and implement rollback capabilities. Test error handling paths as thoroughly as success paths.'
          },
          {
            heading: 'Cron Jobs & Scheduled Security Tasks',
            detail: 'Automate recurring security checks using cron: schedule daily log review scripts, weekly vulnerability scan initiators, hourly IOC feed updates, and monthly compliance audit reports. Understand crontab syntax (minute hour day month weekday), environment differences between cron and interactive shells (set PATH explicitly), output redirection for logging (>> /var/log/security-check.log 2>&1), and lock files to prevent overlapping executions. Use systemd timers as a modern alternative with better logging and dependency management.'
          }
        ],
        keyTakeaways: [
          'grep, sed, and awk form the essential text processing toolkit for security log analysis in Linux',
          'Strict error mode (set -euo pipefail) and proper logging are mandatory for production security scripts',
          'System information gathering scripts provide the foundation for auditing and incident response',
          'Cron jobs automate recurring security checks but require careful environment configuration',
          'Functions with getopts argument parsing create professional, reusable security tools'
        ],
        practiceExercises: [
          'Write a Bash one-liner pipeline that extracts the top 20 source IPs from failed SSH login attempts in /var/log/auth.log, showing count and IP address sorted by frequency',
          'Create a system audit script that collects: all listening services, SUID/SGID binaries, world-writable files, users with UID 0, empty password accounts, and cron jobs for all users, outputting a formatted report',
          'Build a Bash script with getopts that accepts command-line flags for different security checks (-p for processes, -n for network, -u for users) and generates a timestamped report file'
        ],
        resources: [
          { name: 'The Linux Command Line by William Shotts', url: 'https://linuxcommand.org/tlcl.php' },
          { name: 'Advanced Bash-Scripting Guide', url: 'https://tldp.org/LDP/abs/html/' },
          { name: 'SANS SEC504: Hacker Tools, Techniques, and Incident Handling' }
        ]
      },
      {
        title: 'Log Parsing & Analysis Scripts',
        duration: '5 hours',
        overview: 'Log analysis is a daily activity for security professionals, and scripting dramatically accelerates this work. This module teaches you to build custom log parsers in Python and Bash that handle real-world log formats, extract security-relevant events, perform statistical analysis, and generate actionable reports.',
        topics: [
          {
            heading: 'Log Format Analysis & Parser Design',
            detail: 'Before writing a parser, analyze the log format: identify field delimiters (spaces, commas, tabs, or fixed-width), timestamp formats (ISO 8601, epoch, custom), and recurring patterns. Design parsers that handle format variations, corrupted lines, and encoding issues gracefully. Use Python\'s re module for regex-based parsing with named groups: pattern = r\'(?P<timestamp>\\S+ \\S+) (?P<hostname>\\S+) (?P<service>\\S+): (?P<message>.*)\'. For structured formats (JSON, CSV, XML), use built-in parsers (json.loads, csv.DictReader, xml.etree.ElementTree) instead of regex.'
          },
          {
            heading: 'Parsing Common Security Log Formats',
            detail: 'Build parsers for the most common security log formats: Apache/Nginx access logs (Combined Log Format with IP, timestamp, method, URI, status, size, referrer, user-agent), Windows Event Log XML exports, syslog format (RFC 3164 and RFC 5424), CEF (Common Event Format with pipe-delimited header and key-value extension), and JSON-structured logs from cloud services and modern applications. Each format requires specific parsing strategies and field extraction patterns. Create a parser library that handles all common formats.'
          },
          {
            heading: 'Statistical Analysis of Log Data',
            detail: 'Transform parsed log data into security insights using statistical analysis: frequency analysis (most common source IPs, most triggered rules, most targeted URIs), time-series analysis (events per hour/day to identify spikes), baseline comparison (is today\'s failed login count significantly above the 30-day average?), and outlier detection (users with data transfer volumes > 3 standard deviations from the mean). Use Python\'s collections.Counter for frequency counting, statistics module for basic stats, and pandas for advanced time-series analysis and groupby operations.'
          },
          {
            heading: 'Multi-Log Correlation in Scripts',
            detail: 'Real investigations require correlating data across multiple log sources. Build scripts that: join authentication logs with VPN logs to identify successful logins from unusual locations, correlate web server access logs with WAF logs to find bypass attempts, link DNS query logs with proxy logs to identify domains accessed before and after resolution, and merge endpoint logs with network flow data to build complete user activity timelines. Use timestamps and common fields (IP address, username, hostname) as join keys. Handle time zone differences and clock skew between sources.'
          },
          {
            heading: 'Report Generation & Visualization',
            detail: 'Generate professional reports from parsed log data: use Python\'s string formatting or Jinja2 templates for HTML reports, matplotlib or plotly for charts and graphs (time-series plots, bar charts, heatmaps), and csv or openpyxl for spreadsheet exports. Create automated daily security reports that summarize: total events by category, top sources and destinations, new IOC matches, anomalous patterns detected, and compliance-relevant metrics. Schedule report generation via cron and distribute via email using smtplib.'
          },
          {
            heading: 'Performance Optimization for Large Logs',
            detail: 'Security environments generate massive log volumes that require optimized processing. Techniques include: memory-efficient line-by-line processing (never load entire files), compiled regex patterns (re.compile() for patterns used repeatedly), generator functions for pipeline-style processing, multiprocessing for CPU-bound analysis across multiple log files, and memory-mapped files (mmap) for random access to large files. For very large datasets, consider using pandas with chunked reading (chunksize parameter) or switching to purpose-built tools like DuckDB for SQL-based log analysis.'
          }
        ],
        keyTakeaways: [
          'Analyzing log format structure before writing parsers ensures robust and reliable extraction',
          'Named regex groups and built-in parsers (json, csv) provide clean field extraction from diverse formats',
          'Statistical analysis transforms raw log data into actionable security insights',
          'Multi-log correlation using timestamps and common fields enables comprehensive investigation',
          'Performance optimization is essential when processing enterprise-scale log volumes'
        ],
        practiceExercises: [
          'Build a Python log parser that handles Apache access logs, extracts all fields into dictionaries, and generates a security report including: top 20 client IPs, HTTP status code distribution, most requested URIs, and potential web scanning indicators (high 404 rates from single IPs)',
          'Create a multi-source correlation script that joins authentication logs (CSV format) with VPN connection logs (syslog format) to identify successful logins from previously unseen source IPs or geographic locations',
          'Write a Bash script using awk and sort that processes a week of firewall logs to identify: top denied source IPs, most targeted destination ports, hourly connection volume trends, and any sources that appeared on more than three days'
        ],
        resources: [
          { name: 'Data Analysis with Python and Pandas by Wes McKinney' },
          { name: 'Python re Module Documentation', url: 'https://docs.python.org/3/library/re.html' },
          { name: 'SANS SEC573: Automating Information Security with Python' }
        ]
      },
      {
        title: 'Building a Port Scanner',
        duration: '5 hours',
        overview: 'Building a port scanner from scratch is a rite of passage for security professionals that teaches network programming, protocol behavior, and scanning techniques. This module walks through building a progressively more sophisticated scanner, from basic TCP connect scanning to SYN scanning with service detection.',
        topics: [
          {
            heading: 'TCP Connect Scanner',
            detail: 'The simplest scanner uses full TCP connections: create a socket, attempt connect() to the target host and port, and determine port state based on the result (connection success = open, connection refused = closed, timeout = filtered). Implement with socket.setdefaulttimeout() for consistent timing. This approach completes the full three-way handshake (SYN, SYN-ACK, ACK) making it reliable but detectable in logs. Build a basic version first, then add threading for concurrent port scanning across the full 65535 port range.'
          },
          {
            heading: 'Multi-Threaded & Async Scanning',
            detail: 'Sequential port scanning is too slow for practical use. Implement concurrent scanning using threading (concurrent.futures.ThreadPoolExecutor with configurable worker counts), asyncio (async socket connections with asyncio.open_connection()), or multiprocessing for CPU-bound analysis. Control scan rate to avoid overwhelming the target or triggering IDS alerts. Implement a scan queue with configurable concurrency limits (e.g., 100 concurrent connections), timeout handling per connection, and progress reporting. Compare performance of threading vs. asyncio approaches.'
          },
          {
            heading: 'SYN Scanning with Scapy',
            detail: 'SYN scanning (half-open scanning) sends SYN packets without completing the handshake, making it faster and stealthier than connect scanning. Using Scapy: send IP(dst=target)/TCP(dport=port, flags="S") and analyze responses — SYN-ACK indicates open, RST indicates closed, no response suggests filtered. Send RST after receiving SYN-ACK to tear down the half-open connection. SYN scanning requires root/administrator privileges for raw socket access. Implement SYN scanning alongside connect scanning as a fallback for non-privileged execution.'
          },
          {
            heading: 'Service Detection & Banner Grabbing',
            detail: 'Port state alone is insufficient — identifying the running service provides critical context. Implement service detection through: banner grabbing (connect and read the initial service response for SSH, FTP, SMTP, HTTP), probe-based detection (send specific data to trigger identifiable responses, similar to Nmap\'s service probes), and HTTP-specific analysis (parse Server headers, check common paths like /robots.txt, identify web technologies). Build a service signature database that maps banner patterns to service names and versions using regex matching.'
          },
          {
            heading: 'Output Formatting & Reporting',
            detail: 'Professional scanning tools produce structured, parseable output. Implement multiple output formats: console output with color coding (using colorama) for interactive use, CSV export for spreadsheet analysis, JSON output for programmatic consumption and integration with other tools, and HTML reports with summary statistics and tables. Include scan metadata (target, port range, start/end time, scan type, packets sent/received) in all output formats. Add Nmap-compatible XML output for integration with vulnerability management tools.'
          },
          {
            heading: 'Evasion Techniques & Ethical Considerations',
            detail: 'Understand scanning evasion techniques and defensive detection: randomize port scan order (avoid sequential scanning patterns), implement configurable scan delays (slow scanning to avoid rate-based detection), use decoy source addresses with Scapy (though this prevents receiving responses), fragment packets to bypass simple firewall rules, and vary TTL values. Always obtain written authorization before scanning — unauthorized port scanning may violate computer fraud laws (CFAA in the US, Computer Misuse Act in the UK). Document scope, authorization, and rules of engagement before any scanning activity.'
          }
        ],
        keyTakeaways: [
          'TCP connect scanning is reliable but detectable; SYN scanning is faster and stealthier but requires elevated privileges',
          'Concurrent scanning with threading or asyncio is essential for practical scan performance',
          'Service detection through banner grabbing adds critical context beyond port state identification',
          'Multiple output formats (console, CSV, JSON, HTML) make scanners useful across different workflows',
          'Written authorization is legally required before conducting port scans against any network'
        ],
        practiceExercises: [
          'Build a TCP connect scanner that scans the top 1000 ports of a target using ThreadPoolExecutor with 100 workers, displays results in real-time, and outputs a JSON report with port number, state, and response time',
          'Add service detection to your scanner by implementing banner grabbing for SSH, HTTP, FTP, SMTP, and MySQL, with a signature database that identifies service names and version numbers',
          'Implement SYN scanning using Scapy as an alternative scan mode, comparing results and performance against your TCP connect scanner on the same target',
          'Add an HTML report generator that produces a professional scan report with executive summary, open port table, service details, and scan metadata'
        ],
        resources: [
          { name: 'Nmap Network Scanning by Gordon "Fyodor" Lyon', url: 'https://nmap.org/book/' },
          { name: 'Scapy Documentation', url: 'https://scapy.readthedocs.io/' },
          { name: 'SANS SEC560: Enterprise Penetration Testing' }
        ]
      },
      {
        title: 'Automating Security Checks',
        duration: '5 hours',
        overview: 'Automation transforms manual security processes into consistent, repeatable workflows. This module covers building automated security checking frameworks that audit system configurations, verify compliance controls, scan for vulnerabilities, and integrate with CI/CD pipelines for continuous security validation.',
        topics: [
          {
            heading: 'Security Compliance Checking Framework',
            detail: 'Build a modular compliance checking framework in Python that evaluates systems against security baselines. Design the framework with a plugin architecture: each check is a separate module that returns pass/fail/warning with evidence. Implement checks based on CIS Benchmarks: password policy settings, audit policy configuration, unnecessary services disabled, file permissions on sensitive directories, SSH configuration hardening, and firewall rule validation. Generate compliance reports showing overall score, individual check results, and remediation guidance for failures.'
          },
          {
            heading: 'Vulnerability Scanning Automation',
            detail: 'Automate vulnerability scanning workflows: schedule Nmap scans with python-nmap and parse results programmatically, integrate with OpenVAS/GVM API for comprehensive vulnerability assessment, query the NIST NVD API to match installed software versions against known CVEs, and build custom vulnerability checks for organization-specific applications. Implement scan result comparison (diff previous scan vs. current) to identify new vulnerabilities, remediated issues, and recurring findings. Prioritize findings by CVSS score, exploit availability, and asset criticality.'
          },
          {
            heading: 'Cloud Security Posture Checks',
            detail: 'Automate cloud security auditing using provider SDKs: AWS boto3 (check S3 bucket public access, IAM password policies, security group rules, CloudTrail status, EBS encryption), Azure SDK (verify NSG rules, storage account security, Azure AD conditional access, Key Vault access policies), and GCP client libraries (check firewall rules, IAM policies, logging configuration). Map checks to cloud security benchmarks (CIS AWS Foundations Benchmark, CIS Azure Foundations Benchmark) and generate compliance reports with remediation commands.'
          },
          {
            heading: 'CI/CD Security Integration',
            detail: 'Integrate security checks into CI/CD pipelines for shift-left security: run dependency vulnerability scanning (safety for Python, npm audit for Node.js, Snyk for multi-language), perform static code analysis (bandit for Python, semgrep for multi-language), scan container images (Trivy, Grype) for OS and library vulnerabilities, check Infrastructure-as-Code templates (Checkov, tfsec for Terraform) for misconfigurations, and validate secrets are not committed to repositories (GitLeaks, TruffleHog). Configure pipeline gates that block deployments when critical findings are detected.'
          },
          {
            heading: 'Automated Incident Response Actions',
            detail: 'Build scripts that automate common incident response actions: isolate compromised hosts via API calls to EDR platforms (CrowdStrike, Microsoft Defender for Endpoint), block malicious IPs on firewalls via API (Palo Alto, Fortinet), disable compromised user accounts in Active Directory using ldap3 or Microsoft Graph API, collect forensic artifacts from endpoints using Velociraptor or custom collection scripts, and quarantine malicious emails using Exchange or Google Workspace APIs. Implement approval workflows for high-impact actions (e.g., require confirmation before isolating a production server).'
          },
          {
            heading: 'Building a Security Automation Platform',
            detail: 'Combine individual automation scripts into a cohesive platform: implement a task scheduler for recurring checks, build a web dashboard using Flask or FastAPI for status monitoring and manual triggering, create an alerting system that sends notifications via email (smtplib), Slack (webhook), or PagerDuty (API), maintain an audit log of all automated actions, and implement role-based access control for sensitive operations. This platform forms the foundation of a lightweight SOAR (Security Orchestration, Automation, and Response) capability.'
          }
        ],
        keyTakeaways: [
          'Modular compliance checking frameworks with plugin architectures enable extensible security auditing',
          'Cloud security posture checks mapped to CIS Benchmarks automate cloud compliance monitoring',
          'CI/CD security integration enables shift-left security with automated pipeline gates',
          'Automated incident response actions accelerate containment but require approval workflows for high-impact operations',
          'Combining automation scripts into a platform with scheduling, alerting, and dashboards builds lightweight SOAR capability'
        ],
        practiceExercises: [
          'Build a Linux security audit script that checks 15 CIS Benchmark controls (password policy, SSH config, file permissions, running services, firewall status), generates a scored compliance report, and outputs remediation commands for failures',
          'Create a Python script using boto3 that audits an AWS account against five security controls: S3 public access, IAM password policy, CloudTrail enabled, default VPC security groups, and EBS encryption, with HTML report output',
          'Implement a CI/CD security gate script that runs dependency scanning, secret detection, and Dockerfile security checks, producing a pass/fail decision with detailed findings report'
        ],
        resources: [
          { name: 'CIS Benchmarks', url: 'https://www.cisecurity.org/cis-benchmarks' },
          { name: 'AWS boto3 Documentation', url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html' },
          { name: 'SANS SEC573: Automating Information Security with Python' }
        ]
      }
    ]
  },
  {
    id: 'cloud-security-basics',
    tier: 'intermediate',
    title: 'Cloud Security Basics',
    description: 'Understand the security challenges, architectures, and best practices for protecting workloads in cloud environments. This course covers the major cloud service providers (AWS, Azure, GCP), the shared responsibility model, identity and access management, network security controls, data protection strategies, security monitoring, and compliance frameworks specific to cloud computing.',
    objectives: [
      'Explain cloud computing service models and the security implications of each',
      'Apply the shared responsibility model to determine security obligations in IaaS, PaaS, and SaaS',
      'Configure identity and access management controls following least privilege principles',
      'Design and implement network security architectures in cloud environments',
      'Implement data protection strategies including encryption at rest and in transit',
      'Deploy cloud-native security monitoring and logging solutions',
      'Map cloud security controls to compliance frameworks and regulatory requirements'
    ],
    estimatedHours: 25,
    prerequisites: ['security-plus-prep'],
    modules: [
      {
        title: 'Cloud Computing Overview',
        duration: '3 hours',
        overview: 'This module provides a comprehensive introduction to cloud computing concepts, service models, deployment models, and the security landscape. Understanding cloud architecture and terminology is essential before diving into specific security controls and best practices.',
        topics: [
          {
            heading: 'Cloud Service Models (IaaS, PaaS, SaaS)',
            detail: 'Cloud computing is delivered through three primary service models, each with different levels of provider and customer responsibility. Infrastructure as a Service (IaaS) provides virtualized computing resources — virtual machines, storage, and networking — where customers manage everything from the OS up (AWS EC2, Azure VMs, GCP Compute Engine). Platform as a Service (PaaS) provides managed runtime environments for application deployment where customers manage only the application and data (AWS Elastic Beanstalk, Azure App Service, Google App Engine). Software as a Service (SaaS) delivers fully managed applications (Microsoft 365, Salesforce, Google Workspace). Security responsibility increases as you move from SaaS to IaaS.'
          },
          {
            heading: 'Cloud Deployment Models',
            detail: 'Organizations deploy cloud resources across four models: Public cloud (shared infrastructure operated by a third-party provider), Private cloud (dedicated infrastructure for a single organization, either on-premises or hosted), Hybrid cloud (combination of public and private clouds with orchestration between them), and Multi-cloud (using services from multiple public cloud providers). Each model presents unique security considerations: public cloud requires trust in provider controls, private cloud offers more control but higher cost, hybrid requires securing data flows between environments, and multi-cloud introduces complexity from managing disparate security tools.'
          },
          {
            heading: 'Cloud Architecture & Virtualization',
            detail: 'Understanding cloud architecture helps identify security boundaries. Cloud infrastructure relies on hypervisor-based virtualization (Type 1 hypervisors like KVM, Xen, Hyper-V), containerization (Docker containers orchestrated by Kubernetes), and serverless computing (AWS Lambda, Azure Functions). Each technology creates different isolation boundaries: VMs provide strong hardware-level isolation, containers share the host kernel (weaker isolation), and serverless functions run in provider-managed micro-VMs. Security professionals must understand these boundaries to assess risk and implement appropriate controls.'
          },
          {
            heading: 'Cloud Security Challenges & Threat Landscape',
            detail: 'Cloud environments face unique security challenges: expanded attack surface (internet-facing APIs and management consoles), misconfiguration as the leading cause of breaches (publicly exposed S3 buckets, overly permissive security groups), identity-based attacks (credential theft, privilege escalation through IAM misconfigurations), data sovereignty and residency requirements, shadow IT and unauthorized SaaS adoption, supply chain risks from cloud marketplace offerings, and shared infrastructure side-channel risks. The CSA Cloud Security Alliance identifies top threats annually in their "Treacherous 12" and "Top Threats" reports.'
          },
          {
            heading: 'Cloud Security Frameworks & Standards',
            detail: 'Multiple frameworks guide cloud security implementation: CSA Cloud Controls Matrix (CCM) maps cloud-specific controls to regulatory requirements, NIST SP 800-144 provides cloud computing security guidelines, ISO 27017 extends ISO 27001 with cloud-specific controls, CIS Benchmarks provide platform-specific hardening guides for AWS, Azure, and GCP, and the Cloud Security Alliance STAR program certifies cloud provider security. Use these frameworks to establish security baselines, assess cloud providers during procurement, and demonstrate due diligence to auditors and regulators.'
          }
        ],
        keyTakeaways: [
          'Cloud service models (IaaS, PaaS, SaaS) determine the division of security responsibility between provider and customer',
          'Deployment models (public, private, hybrid, multi-cloud) each present unique security challenges',
          'Understanding virtualization, containerization, and serverless isolation boundaries is critical for risk assessment',
          'Misconfiguration is the leading cause of cloud security breaches, not sophisticated attacks',
          'Cloud security frameworks (CSA CCM, CIS Benchmarks, NIST SP 800-144) provide structured security guidance'
        ],
        practiceExercises: [
          'Create a comparison matrix showing the security responsibilities for a web application deployed on IaaS (EC2), PaaS (Elastic Beanstalk), and SaaS (Salesforce), covering OS patching, network security, application security, data encryption, and identity management',
          'Research and document three major cloud security breaches from the past two years, identifying the root cause, cloud service model involved, and controls that would have prevented the breach',
          'Map the CIS AWS Foundations Benchmark sections to corresponding NIST 800-53 controls and CSA CCM domains'
        ],
        resources: [
          { name: 'CSA Cloud Controls Matrix', url: 'https://cloudsecurityalliance.org/research/cloud-controls-matrix/' },
          { name: 'NIST SP 800-144: Guidelines on Security and Privacy in Public Cloud Computing' },
          { name: 'CCSK (Certificate of Cloud Security Knowledge) Study Guide', url: 'https://cloudsecurityalliance.org/education/ccsk/' }
        ]
      },
      {
        title: 'Shared Responsibility Model',
        duration: '3 hours',
        overview: 'The shared responsibility model is the foundational concept of cloud security, defining which security controls the cloud provider manages and which the customer must implement. This module provides deep practical understanding of responsibility boundaries across service models, common misconceptions, and how to audit compliance with your responsibilities.',
        topics: [
          {
            heading: 'Provider vs. Customer Responsibilities',
            detail: 'Cloud providers are responsible for security "of" the cloud — physical facilities, hypervisors, network infrastructure, and managed services. Customers are responsible for security "in" the cloud — what they build, configure, and deploy. In AWS, Amazon secures the global infrastructure (data centers, hardware, hypervisor) while customers secure their VPC configurations, IAM policies, EC2 instances, S3 bucket permissions, and data encryption. In Azure, Microsoft secures the physical hosts, network, and data centers while customers secure their VMs, applications, data, and identity configurations.'
          },
          {
            heading: 'Responsibility Shifts Across Service Models',
            detail: 'Responsibilities shift significantly across IaaS, PaaS, and SaaS. In IaaS, customers handle OS patching, middleware, runtime, application, and data security — the provider handles hardware and virtualization. In PaaS, the provider additionally handles OS, middleware, and runtime — customers focus on application and data security. In SaaS, the provider handles almost everything — customers manage user access, data classification, and configuration settings. Common mistake: assuming the provider handles more than they do. Example: in AWS RDS (PaaS), Amazon patches the database engine, but customers must configure encryption, access controls, and backup policies.'
          },
          {
            heading: 'Shared Responsibility for Identity',
            detail: 'Identity is uniquely shared: providers secure the identity platform (AWS IAM, Azure AD/Entra ID, GCP IAM) while customers configure identities, roles, and policies. Customers must implement MFA for all human users, enforce least privilege in IAM policies, rotate access keys and service account credentials, implement conditional access policies (location-based, device-based), and monitor identity-related events for suspicious activity. Identity misconfiguration is the most common and highest-impact customer-side failure in cloud security.'
          },
          {
            heading: 'Auditing Your Responsibilities',
            detail: 'Verify your organization is meeting its shared responsibility obligations through automated compliance checking: use AWS Config rules to monitor configuration compliance, Azure Policy for governance and compliance enforcement, GCP Organization Policy for constraint enforcement, and third-party CSPM (Cloud Security Posture Management) tools like Prisma Cloud, Wiz, or Lacework for multi-cloud visibility. Regularly review provider compliance reports (AWS Artifact, Azure Compliance Manager, GCP Compliance Reports Center) to verify provider-side responsibilities are met.'
          },
          {
            heading: 'Third-Party & Managed Service Considerations',
            detail: 'The shared responsibility model becomes more complex with managed services and third-party integrations. Each managed service has its own responsibility boundary: AWS EKS manages the Kubernetes control plane but customers manage worker nodes, pod security, and network policies; AWS Lambda manages the execution environment but customers manage function code, IAM roles, and environment variables. Third-party marketplace solutions introduce additional shared responsibility layers. Document responsibility boundaries for every service in use and ensure coverage through your security program.'
          }
        ],
        keyTakeaways: [
          'The shared responsibility model defines that providers secure the cloud infrastructure while customers secure their workloads within it',
          'Responsibility boundaries shift significantly between IaaS, PaaS, and SaaS service models',
          'Identity configuration is the most critical customer responsibility and the most common source of cloud breaches',
          'CSPM tools automate compliance monitoring for customer-side responsibilities across cloud environments',
          'Each managed service has its own unique responsibility boundary that must be documented and covered'
        ],
        practiceExercises: [
          'Create a detailed shared responsibility matrix for a three-tier web application on AWS (EC2 for compute, RDS for database, S3 for storage, CloudFront for CDN), documenting specific provider and customer responsibilities for each component',
          'Using the AWS Shared Responsibility Model documentation, identify five commonly misconfigured customer responsibilities and write automated checks (AWS Config rules or CLI scripts) to detect each misconfiguration',
          'Audit a sample cloud environment against the shared responsibility model: verify provider compliance documentation (SOC 2, ISO 27001), check customer IAM configuration, review network security settings, and verify encryption controls'
        ],
        resources: [
          { name: 'AWS Shared Responsibility Model', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
          { name: 'Microsoft Shared Responsibility in the Cloud', url: 'https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility' },
          { name: 'CIS Cloud Security Guides', url: 'https://www.cisecurity.org/benchmark' }
        ]
      },
      {
        title: 'Identity & Access Management',
        duration: '4 hours',
        overview: 'Identity and Access Management (IAM) is the cornerstone of cloud security — controlling who can access what resources under what conditions. This module covers IAM architecture across major cloud providers, policy design, least privilege implementation, federation, and advanced topics like service accounts and cross-account access.',
        topics: [
          {
            heading: 'IAM Architecture & Principals',
            detail: 'Cloud IAM systems define principals (entities that can make requests), resources (cloud objects being accessed), and policies (rules governing access). In AWS, principals include IAM users, IAM roles, federated identities, and AWS services. In Azure, principals include Entra ID users, service principals, managed identities, and groups. In GCP, principals include Google accounts, service accounts, Google groups, and domains. Understanding the principal hierarchy and inheritance model is essential: permissions flow down from organization to account/subscription to resource group to individual resource.'
          },
          {
            heading: 'Policy Design & Least Privilege',
            detail: 'Cloud IAM policies define permissions using a structured format. AWS uses JSON policies with Effect (Allow/Deny), Action (service:operation), Resource (ARN), and optional Conditions. Azure uses role definitions with Actions, NotActions, DataActions, and assignable scopes. Best practice is deny by default with explicit allows for required permissions only. Implement least privilege iteratively: start with read-only access, analyze access patterns using CloudTrail (AWS), Azure AD sign-in logs, or GCP audit logs, then grant specific permissions based on observed needs. Use tools like IAM Access Analyzer (AWS), Azure AD Access Reviews, or GCP IAM Recommender.'
          },
          {
            heading: 'Multi-Factor Authentication & Conditional Access',
            detail: 'MFA is mandatory for all human identities accessing cloud environments. Configure MFA for the root/global admin account first, then enforce for all IAM users. Azure Entra ID Conditional Access provides context-aware access control: require MFA only for risky sign-ins, block access from unauthorized countries, require compliant devices for accessing sensitive applications, and enforce session controls (sign-in frequency, persistent browser sessions). AWS supports MFA through virtual MFA devices, hardware tokens (YubiKey), or SMS. Implement break-glass accounts with hardware MFA stored securely for emergency access.'
          },
          {
            heading: 'Service Accounts & Machine Identities',
            detail: 'Service accounts and machine identities present unique security challenges because they cannot use MFA and often have broad permissions. In AWS, use IAM roles instead of access keys wherever possible — EC2 instance profiles, Lambda execution roles, and ECS task roles provide temporary credentials automatically. In Azure, use Managed Identities (system-assigned or user-assigned) to eliminate credential management. In GCP, use service accounts with Workload Identity Federation for external workloads. Never embed access keys in code — use secrets managers (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) when roles are not possible.'
          },
          {
            heading: 'Federation & Single Sign-On',
            detail: 'Enterprise cloud deployments use identity federation to extend corporate identities to cloud environments. Configure SAML 2.0 or OIDC federation between your Identity Provider (Okta, Azure AD, Ping Identity) and cloud providers. AWS IAM Identity Center (successor to AWS SSO) provides centralized access management across multiple AWS accounts. Azure AD supports seamless SSO for Microsoft and thousands of third-party SaaS applications. Implement SCIM (System for Cross-domain Identity Management) for automated user provisioning and deprovisioning when employees join or leave the organization.'
          },
          {
            heading: 'IAM Security Monitoring & Governance',
            detail: 'Continuously monitor IAM activity for security issues: detect unused credentials and over-permissioned roles (AWS IAM Credential Report, Access Analyzer), alert on root account usage (CloudTrail + CloudWatch alarms), monitor for privilege escalation attempts (iam:CreatePolicyVersion, iam:AttachUserPolicy actions), detect anomalous access patterns (GuardDuty for AWS, Sentinel for Azure), and implement automated remediation for common findings (auto-revoke unused access keys after 90 days). Conduct quarterly IAM access reviews with business owners to validate that permissions align with current job responsibilities.'
          }
        ],
        keyTakeaways: [
          'IAM is the most critical security control in cloud environments — misconfigurations lead directly to breaches',
          'Least privilege should be implemented iteratively using access pattern analysis and provider recommendation tools',
          'MFA is mandatory for all human identities, with conditional access providing context-aware enforcement',
          'Service accounts should use provider-managed identity mechanisms (roles, managed identities) instead of static credentials',
          'Continuous IAM monitoring and quarterly access reviews maintain security posture over time'
        ],
        practiceExercises: [
          'Design and implement an AWS IAM policy structure for a development team with three roles (developer, lead, admin), each with appropriate permissions for EC2, S3, RDS, and Lambda resources, following least privilege principles',
          'Configure a conditional access policy in Azure Entra ID that requires MFA for all users, blocks access from high-risk countries, requires compliant devices for accessing sensitive applications, and allows break-glass emergency access',
          'Write a Python script using boto3 that audits an AWS account\'s IAM configuration: identify users without MFA, access keys older than 90 days, policies with wildcard (*) permissions, and unused roles, generating a remediation report'
        ],
        resources: [
          { name: 'AWS IAM Best Practices', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html' },
          { name: 'Azure Entra ID Documentation', url: 'https://learn.microsoft.com/en-us/entra/identity/' },
          { name: 'SANS SEC510: Cloud Security Controls and Mitigations' }
        ]
      },
      {
        title: 'Network Security in the Cloud',
        duration: '4 hours',
        overview: 'Cloud network security differs fundamentally from traditional on-premises networking. This module covers virtual network architecture, segmentation strategies, firewall controls, traffic inspection, and secure connectivity options across major cloud providers.',
        topics: [
          {
            heading: 'Virtual Private Cloud Architecture',
            detail: 'Virtual Private Clouds (VPCs/VNets) provide isolated network segments within cloud environments. In AWS, a VPC defines a CIDR block with subnets distributed across Availability Zones. Public subnets route traffic through an Internet Gateway, while private subnets use NAT Gateways for outbound-only internet access. In Azure, Virtual Networks (VNets) use subnets with Network Security Groups (NSGs) for traffic filtering. In GCP, VPC networks are global with regional subnets. Design multi-tier architectures: web tier in public subnets, application tier in private subnets, database tier in isolated subnets with no internet route.'
          },
          {
            heading: 'Security Groups & Network ACLs',
            detail: 'Cloud providers offer layered network filtering. AWS Security Groups are stateful firewalls applied to individual resources (EC2 instances, RDS databases, Lambda functions) — they evaluate rules based on source/destination, protocol, and port, with implicit deny. AWS Network ACLs are stateless and operate at the subnet level, supporting both allow and deny rules. Azure NSGs combine both concepts with priority-based rules applied to subnets or NICs. Best practices: use Security Groups for granular instance-level control, minimize allowed CIDR ranges (never use 0.0.0.0/0 for management ports), and reference other security groups instead of IP ranges for internal traffic.'
          },
          {
            heading: 'Traffic Inspection & Monitoring',
            detail: 'Monitor and inspect cloud network traffic using provider-native tools: VPC Flow Logs (AWS), NSG Flow Logs (Azure), and VPC Flow Logs (GCP) capture metadata about network connections (source/destination IP, ports, protocol, bytes, action). Enable flow logs for all VPCs and send them to SIEM for analysis. For deeper inspection, deploy network-based IDS/IPS: AWS Network Firewall or third-party solutions (Palo Alto VM-Series, Fortinet FortiGate) via Gateway Load Balancer. AWS Traffic Mirroring copies packet data for full PCAP analysis. Implement DNS logging (Route 53 query logs) to detect C2 and data exfiltration via DNS.'
          },
          {
            heading: 'Secure Connectivity Options',
            detail: 'Connect cloud environments securely to on-premises networks and other clouds. VPN connections (AWS Site-to-Site VPN, Azure VPN Gateway) provide encrypted tunnels over the internet with IPsec — suitable for moderate bandwidth requirements. Direct connections (AWS Direct Connect, Azure ExpressRoute, GCP Cloud Interconnect) provide dedicated private links for high-bandwidth, low-latency requirements. VPC/VNet peering connects cloud networks within the same or different accounts/subscriptions. Transit Gateway (AWS) or Virtual WAN (Azure) provides hub-and-spoke network architectures for managing connectivity at scale across many VPCs.'
          },
          {
            heading: 'Web Application Firewalls & DDoS Protection',
            detail: 'Protect internet-facing applications with cloud-native WAF services: AWS WAF integrates with CloudFront, ALB, and API Gateway to filter malicious HTTP requests using managed rule sets (OWASP Top 10, known bad inputs, bot control) and custom rules. Azure WAF on Application Gateway or Front Door provides similar protection. Configure WAF rules to block SQL injection, cross-site scripting, path traversal, and known exploit patterns. Implement DDoS protection (AWS Shield, Azure DDoS Protection) for volumetric, protocol, and application-layer attack mitigation. Combine WAF with rate limiting and geographic restrictions for defense in depth.'
          },
          {
            heading: 'Zero Trust Network Architecture in Cloud',
            detail: 'Cloud environments are ideal for implementing Zero Trust principles because identity is already central to access control. Move beyond perimeter-based security: authenticate and authorize every request regardless of network location, use micro-segmentation with security groups allowing only required communication paths between services, implement Private Link/Private Endpoints to access cloud services without traversing the public internet, use VPC endpoints for AWS service access without internet routes, and deploy service mesh (Istio, AWS App Mesh) for mutual TLS between microservices. Zero Trust in the cloud means no implicit trust from being "inside the network."'
          }
        ],
        keyTakeaways: [
          'Multi-tier VPC architecture with public, private, and isolated subnets provides network segmentation',
          'Security groups provide stateful instance-level filtering while Network ACLs add stateless subnet-level control',
          'VPC Flow Logs combined with SIEM analysis enable network threat detection in cloud environments',
          'WAF services with managed rule sets protect internet-facing applications from OWASP Top 10 attacks',
          'Zero Trust network architecture eliminates implicit trust and enforces per-request authentication and authorization'
        ],
        practiceExercises: [
          'Design a three-tier VPC architecture for a web application: create public, private, and database subnets across two availability zones, configure security groups allowing only required traffic flows between tiers, and implement NAT Gateway for private subnet internet access',
          'Enable VPC Flow Logs on a test VPC, generate traffic (web browsing, SSH, port scans), then analyze the flow log data to identify: top talkers, denied connections, and potential security anomalies',
          'Configure AWS WAF on an Application Load Balancer with rules to block SQL injection, XSS, path traversal, and requests from specific geographic regions, then test each rule with simulated malicious requests'
        ],
        resources: [
          { name: 'AWS VPC Documentation', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/' },
          { name: 'Azure Network Security Best Practices', url: 'https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices' },
          { name: 'NIST SP 800-207: Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
        ]
      },
      {
        title: 'Data Protection & Encryption',
        duration: '4 hours',
        overview: 'Protecting data in cloud environments requires understanding encryption mechanisms, key management services, data classification strategies, and data loss prevention controls. This module covers practical implementation of data protection across storage, databases, and data in transit in cloud environments.',
        topics: [
          {
            heading: 'Encryption at Rest',
            detail: 'Cloud providers offer multiple encryption options for stored data. Server-Side Encryption (SSE) encrypts data automatically: AWS S3 supports SSE-S3 (Amazon-managed keys), SSE-KMS (customer-managed keys in KMS), and SSE-C (customer-provided keys). Azure Storage supports Microsoft-managed keys or customer-managed keys in Key Vault. EBS volumes, RDS databases, and most managed services support encryption at rest with provider or customer-managed keys. Enable default encryption for all storage services — in AWS, enable S3 default encryption and EBS encryption by default at the account level. Customer-managed keys provide additional control including the ability to revoke access by disabling keys.'
          },
          {
            heading: 'Encryption in Transit',
            detail: 'All data moving between cloud services, between cloud and on-premises, or between cloud and end users must be encrypted. Enforce TLS 1.2+ for all API calls and web traffic — configure minimum TLS versions on load balancers and API gateways. Use certificate management services (AWS Certificate Manager, Azure App Service Certificates) for automated certificate provisioning and renewal. Internal service-to-service communication should use mutual TLS (mTLS) through service mesh implementations or VPC endpoint private connectivity. VPN and Direct Connect connections provide encrypted connectivity for hybrid environments.'
          },
          {
            heading: 'Key Management Services',
            detail: 'Cloud key management services (AWS KMS, Azure Key Vault, GCP Cloud KMS) provide centralized cryptographic key lifecycle management. Create customer-managed keys (CMKs) for sensitive workloads, define key policies controlling who can use and manage keys, enable automatic key rotation (annual in AWS KMS, configurable in Azure Key Vault), and audit key usage through cloud logging services. For highest security requirements, use Hardware Security Modules (HSMs): AWS CloudHSM, Azure Dedicated HSM, or GCP Cloud HSM provide FIPS 140-2 Level 3 validated hardware for key storage. Implement key policies that separate key administrators from key users.'
          },
          {
            heading: 'Data Classification & Discovery',
            detail: 'Effective data protection starts with knowing what data you have and its sensitivity. Use cloud-native data discovery tools: AWS Macie scans S3 buckets for PII, financial data, and credentials using machine learning and pattern matching. Azure Purview (Microsoft Purview) catalogs and classifies data across Azure, on-premises, and multi-cloud environments. GCP DLP API identifies sensitive data in Cloud Storage, BigQuery, and Datastore. Implement a data classification policy (Public, Internal, Confidential, Restricted) and tag all cloud resources with their data classification level for automated policy enforcement.'
          },
          {
            heading: 'Data Loss Prevention Controls',
            detail: 'Prevent unauthorized data exfiltration through layered DLP controls: S3 bucket policies and Block Public Access settings prevent accidental public exposure, VPC endpoints prevent data from traversing the internet, AWS Organizations Service Control Policies (SCPs) restrict data transfer to unauthorized regions or accounts, Azure Information Protection labels and policies control document sharing, and network-based DLP monitors outbound traffic for sensitive data patterns. Implement data perimeter controls that restrict data movement to authorized networks, identities, and resources only.'
          },
          {
            heading: 'Backup, Recovery & Data Lifecycle',
            detail: 'Data protection includes ensuring data availability through backup and recovery strategies. Configure automated backups: AWS Backup provides centralized backup management across services (EC2, RDS, EFS, DynamoDB), Azure Backup handles VMs, databases, and file shares, and cross-region replication provides geographic redundancy. Implement backup encryption using customer-managed keys and restrict backup access through separate IAM policies. Define data lifecycle policies that automatically transition data to cheaper storage tiers (S3 Glacier, Azure Cool/Archive) and delete data after retention periods expire, reducing both cost and attack surface.'
          }
        ],
        keyTakeaways: [
          'Enable default encryption at rest for all storage services using customer-managed keys for sensitive workloads',
          'Enforce TLS 1.2+ for all data in transit and implement mTLS for internal service communication',
          'Key management services with automatic rotation and separated admin/user roles secure cryptographic operations',
          'Data discovery and classification tools automatically identify sensitive data for targeted protection',
          'Layered DLP controls combining bucket policies, VPC endpoints, SCPs, and monitoring prevent data exfiltration'
        ],
        practiceExercises: [
          'Configure encryption for a complete AWS storage stack: S3 bucket with SSE-KMS and customer-managed key, EBS volume with encryption, and RDS instance with encryption at rest, documenting the key policy for each',
          'Set up AWS Macie to scan an S3 bucket containing sample data, review the findings for PII and sensitive data, and create automated remediation actions for public access findings',
          'Design a data lifecycle policy for a healthcare organization that addresses classification (PHI, PII, internal, public), encryption requirements per classification, retention periods, and automated lifecycle transitions'
        ],
        resources: [
          { name: 'AWS KMS Documentation', url: 'https://docs.aws.amazon.com/kms/latest/developerguide/' },
          { name: 'Azure Key Vault Documentation', url: 'https://learn.microsoft.com/en-us/azure/key-vault/' },
          { name: 'NIST SP 800-57: Recommendation for Key Management' }
        ]
      },
      {
        title: 'Cloud Security Monitoring',
        duration: '4 hours',
        overview: 'Effective security monitoring in cloud environments requires leveraging cloud-native logging, detection, and response capabilities. This module covers configuring comprehensive logging, implementing threat detection services, building security dashboards, and establishing cloud incident response procedures.',
        topics: [
          {
            heading: 'Cloud-Native Logging Services',
            detail: 'Enable comprehensive logging across all cloud services. AWS CloudTrail logs all API calls (management events and optionally data events like S3 object access), CloudWatch Logs centralizes application and system logs, VPC Flow Logs capture network metadata, and Route 53 query logs track DNS activity. Azure Monitor collects metrics and logs from all Azure resources, Activity Log tracks subscription-level events, and Diagnostic Settings route resource logs to Log Analytics, Storage, or Event Hubs. Centralize all logs in a SIEM (Splunk, Sentinel, Chronicle) for correlation and long-term retention beyond provider default retention periods.'
          },
          {
            heading: 'Cloud Threat Detection Services',
            detail: 'Major cloud providers offer managed threat detection: AWS GuardDuty uses machine learning and threat intelligence to detect account compromise, instance compromise, malicious reconnaissance, and cryptocurrency mining — enable it in all regions and all accounts. Azure Sentinel (Microsoft Sentinel) is a cloud-native SIEM and SOAR with built-in analytics rules, threat intelligence integration, and automated response playbooks. GCP Security Command Center aggregates findings from multiple security services. These services detect threats that traditional security tools miss because they analyze cloud-specific telemetry (API calls, IAM activity, network flows).'
          },
          {
            heading: 'Security Information & Event Management in Cloud',
            detail: 'Cloud SIEM deployment requires cloud-specific considerations: ingest cloud-native logs (CloudTrail, Azure Activity Log, GCP Audit Logs) alongside traditional sources, build detection rules for cloud-specific attack patterns (impossible travel for identity, unusual API calls, security group modifications), implement cloud-aware correlation rules (link IAM activity to network events to data access), and manage log volume costs (cloud environments generate massive log volumes — filter and tier appropriately). Use cloud-native SIEM offerings (Azure Sentinel, Chronicle) or deploy traditional SIEM (Splunk) with cloud-specific data inputs and analytics.'
          },
          {
            heading: 'Security Automation & Orchestration',
            detail: 'Cloud environments excel at automated security response. Implement automated remediation: AWS Lambda functions triggered by GuardDuty findings to isolate compromised instances (modify security groups), Azure Logic Apps triggered by Sentinel alerts to disable compromised accounts, automated snapshots of compromised instances for forensic analysis, and auto-remediation of non-compliant configurations (AWS Config auto-remediation, Azure Policy DeployIfNotExists). Build incident response playbooks as code using AWS Step Functions or Azure Logic Apps that orchestrate multi-step response procedures with human approval gates for high-impact actions.'
          },
          {
            heading: 'Cloud Forensics & Investigation',
            detail: 'Cloud forensics differs from traditional disk forensics. Evidence collection includes: creating EBS snapshots or VM disk snapshots of compromised instances, exporting CloudTrail logs for the investigation time period, capturing memory dumps using SSM Run Command or custom scripts, preserving network flow logs and DNS query logs, and documenting the chain of custody for all collected evidence. Cloud-specific investigation techniques: analyze IAM access patterns to determine blast radius, review CloudTrail for persistence mechanisms (new IAM users, modified roles, created access keys), and check for data exfiltration through S3 access logs or VPC endpoint logs.'
          },
          {
            heading: 'Security Dashboards & Reporting',
            detail: 'Build security dashboards that provide visibility into cloud security posture. Key metrics include: GuardDuty/Sentinel finding trends (count, severity, type over time), IAM security score (MFA coverage, unused credentials, overprivileged roles), encryption coverage (percentage of encrypted EBS volumes, S3 buckets, RDS instances), public exposure metrics (public S3 buckets, security groups allowing 0.0.0.0/0, public IP addresses), and compliance scores against CIS Benchmarks. Use AWS Security Hub, Azure Defender for Cloud, or GCP Security Command Center as aggregated security posture dashboards, supplemented with custom dashboards in Grafana or Kibana for specific operational needs.'
          }
        ],
        keyTakeaways: [
          'Comprehensive logging (CloudTrail, Flow Logs, DNS logs) provides the foundation for cloud security monitoring',
          'Cloud-native threat detection services (GuardDuty, Sentinel) detect cloud-specific attacks that traditional tools miss',
          'Automated remediation using serverless functions enables rapid response to security findings at cloud scale',
          'Cloud forensics requires cloud-specific evidence collection techniques including API log analysis and disk snapshots',
          'Security dashboards aggregating posture metrics provide continuous visibility into cloud security health'
        ],
        practiceExercises: [
          'Configure a complete AWS security monitoring stack: enable CloudTrail (multi-region, with data events), VPC Flow Logs, GuardDuty, and Security Hub, then generate sample findings and verify they appear in the centralized view',
          'Build an automated remediation pipeline: create a Lambda function triggered by a GuardDuty finding that automatically isolates the affected EC2 instance by replacing its security group and sends a Slack notification to the security team',
          'Conduct a simulated cloud forensic investigation: given a scenario of compromised AWS credentials, collect and analyze CloudTrail logs to determine what the attacker accessed, what persistence mechanisms they created, and what data they may have exfiltrated'
        ],
        resources: [
          { name: 'AWS Security Hub Documentation', url: 'https://docs.aws.amazon.com/securityhub/latest/userguide/' },
          { name: 'Microsoft Sentinel Documentation', url: 'https://learn.microsoft.com/en-us/azure/sentinel/' },
          { name: 'SANS SEC510: Cloud Security Controls and Mitigations' }
        ]
      },
      {
        title: 'Compliance in the Cloud',
        duration: '3 hours',
        overview: 'Cloud compliance requires understanding how traditional regulatory requirements translate to cloud environments, leveraging provider compliance programs, implementing governance controls, and continuously monitoring compliance posture. This module covers major compliance frameworks, cloud governance tools, and practical compliance implementation strategies.',
        topics: [
          {
            heading: 'Regulatory Frameworks in Cloud Context',
            detail: 'Major regulations apply differently in cloud environments. HIPAA requires Business Associate Agreements (BAAs) with cloud providers, encryption of Protected Health Information (PHI), access logging, and breach notification. PCI DSS requires network segmentation, encryption of cardholder data, access controls, and regular vulnerability scanning — cloud providers offer PCI-compliant infrastructure, but customers must secure their card data environments. GDPR imposes data sovereignty requirements (data processing location), right to erasure (challenging with backups), data processing agreements, and breach notification within 72 hours. SOX requires audit trails and segregation of duties in financial systems.'
          },
          {
            heading: 'Cloud Provider Compliance Programs',
            detail: 'Major cloud providers maintain extensive compliance certifications: AWS Compliance Programs include SOC 1/2/3, ISO 27001/27017/27018, PCI DSS Level 1, FedRAMP, HIPAA eligibility, and GDPR compliance. Access provider audit reports through AWS Artifact, Azure Compliance Manager, or GCP Compliance Reports Center. Understand that provider certifications cover the infrastructure — customers must still achieve compliance for their workloads. Use provider compliance documentation in your own audit evidence packages and leverage provider-certified services to reduce your compliance scope.'
          },
          {
            heading: 'Cloud Governance & Policy Enforcement',
            detail: 'Implement governance controls that enforce compliance automatically. AWS Organizations with Service Control Policies (SCPs) restrict actions at the organizational level — prevent launching instances in non-approved regions, block disabling CloudTrail, or require encryption on all new resources. Azure Policy evaluates resource configurations against compliance rules and can audit, deny, or auto-remediate non-compliance. GCP Organization Policies provide constraint enforcement across projects. Implement tagging policies that require data classification, environment (prod/dev), and owner tags on all resources for cost allocation and compliance tracking.'
          },
          {
            heading: 'Compliance as Code',
            detail: 'Treat compliance requirements as code that can be versioned, tested, and automatically enforced. Define compliance rules using AWS Config Rules (managed and custom), Azure Policy definitions, or Open Policy Agent (OPA) for multi-cloud environments. Implement compliance checks in Infrastructure-as-Code (IaC) pipelines: scan Terraform, CloudFormation, or ARM templates with Checkov, tfsec, or cfn-nag before deployment. Store compliance rules in version control alongside infrastructure code, review changes through pull requests, and automatically test rules against sample configurations. This approach ensures compliance is consistent, auditable, and scalable.'
          },
          {
            heading: 'Audit Preparation & Evidence Collection',
            detail: 'Cloud environments can simplify audit preparation through automated evidence collection. Configure continuous compliance monitoring (AWS Config, Azure Policy Compliance, GCP Security Command Center) to provide real-time compliance posture. Generate evidence packages automatically: CloudTrail logs prove access control enforcement, Config snapshots demonstrate configuration compliance, IAM credential reports show password policy compliance, and encryption settings verify data protection controls. Maintain a compliance evidence repository that maps each control requirement to its cloud implementation and automated evidence source. Practice creating audit-ready documentation that auditors can verify independently.'
          },
          {
            heading: 'Multi-Cloud & Cross-Border Compliance',
            detail: 'Organizations using multiple cloud providers face additional compliance challenges: maintaining consistent security controls across AWS, Azure, and GCP with different services and policy mechanisms, managing data residency requirements across providers and regions, ensuring unified audit logging and monitoring, and handling different provider certifications and compliance attestations. Use cloud-agnostic tools (Prisma Cloud, Wiz, Lacework) for multi-cloud compliance monitoring. Address cross-border data transfer requirements (EU Standard Contractual Clauses, APEC CBPR) when data moves between cloud regions in different jurisdictions.'
          }
        ],
        keyTakeaways: [
          'Cloud provider compliance certifications cover infrastructure — customers must achieve compliance for their workloads',
          'Governance tools (SCPs, Azure Policy, GCP Organization Policies) automate compliance enforcement at scale',
          'Compliance as Code integrates compliance checks into IaC pipelines for proactive violation prevention',
          'Automated evidence collection from cloud-native services simplifies audit preparation',
          'Multi-cloud and cross-border compliance requires cloud-agnostic tools and careful data residency management'
        ],
        practiceExercises: [
          'Create an AWS Organization structure with SCPs that enforce: encryption on all new EBS volumes and S3 buckets, restrict instance launches to approved regions only, prevent deletion of CloudTrail logs, and require tagging on all resources',
          'Build a compliance dashboard that monitors 10 critical controls from the CIS AWS Foundations Benchmark using AWS Config Rules, displaying current compliance percentage and remediation status for each control',
          'Prepare a mock audit evidence package for a HIPAA-regulated workload on AWS: document the BAA, encryption controls, access logging, breach notification procedures, and collect automated evidence from AWS Config and CloudTrail'
        ],
        resources: [
          { name: 'AWS Compliance Center', url: 'https://aws.amazon.com/compliance/' },
          { name: 'Azure Compliance Documentation', url: 'https://learn.microsoft.com/en-us/azure/compliance/' },
          { name: 'CSA STAR Registry', url: 'https://cloudsecurityalliance.org/star/' }
        ]
      }
    ]
  }
];
