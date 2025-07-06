"use client";

import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/magicui/terminal";

export const FeatureSection = () => {
  const certifications = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "June 2024" },
    { title: "Google Professional Cloud Architect", issuer: "Google Cloud", date: "April 2024" },
    { title: "Certified Kubernetes Administrator (CKA)", issuer: "The Linux Foundation", date: "February 2024" },
    { title: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft", date: "May 2024" },
    { title: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", date: "January 2024" },
    { title: "Red Hat Certified Engineer (RHCE)", issuer: "Red Hat", date: "March 2024" },
    { title: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC2", date: "December 2023" },
    { title: "CompTIA Security+", issuer: "CompTIA", date: "November 2023" },
    { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "October 2023" },
    { title: "Docker Certified Associate", issuer: "Docker", date: "September 2023" },
    { title: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services", date: "August 2023" },
    { title: "Google Associate Cloud Engineer", issuer: "Google Cloud", date: "July 2023" },
    { title: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", date: "June 2023" },
    { title: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", date: "May 2023" },
    { title: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", date: "April 2023" },
    { title: "ITIL Foundation v4", issuer: "AXELOS", date: "March 2023" },
    { title: "Professional Cloud Security Engineer", issuer: "Google Cloud", date: "February 2023" },
    { title: "AWS Certified Security – Specialty", issuer: "Amazon Web Services", date: "January 2023" },
    { title: "Microsoft Certified: DevOps Engineer Expert", issuer: "Microsoft", date: "December 2022" },
    { title: "Kubernetes and Cloud Native Associate (KCNA)", issuer: "The Linux Foundation", date: "November 2022" },
  ];

  const networkStack = [
    "Cisco IOS / NX-OS",
    "Juniper Junos OS",
    "Fortinet FortiOS",
    "pfSense",
    "MikroTik RouterOS",
    "Ubiquiti UniFi Controller",
    "ArubaOS",
    "Palo Alto PAN-OS",
    "OpenVPN / WireGuard",
    "BGP / OSPF / EIGRP",
    "VLAN / STP / EtherChannel",
    "Firewall Rules / NAT / ACLs",
    "SNMP / NetFlow / Syslog",
    "RADIUS / TACACS+",
    "Network Monitoring (Zabbix, PRTG)",
    "Cloud Networking (AWS VPC, Azure VNets)",
    "SD-WAN",
    "802.1X Authentication",
    "Network Automation (Ansible, Netmiko)",
    "Wireshark / Packet Analysis",
  ];

  const initialDelay = 5000;
  const delayPerLine = 1000;

  return (
    <section id="feature" className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">📜 Certifications & 🧠 Network Stack</h2>
          <p className="text-muted-foreground text-lg">
            These certifications and tools represent a strong foundation in cloud and networking.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Terminal: Certifications */}
          <div className="flex-1">
            <Terminal>
              <TypingAnimation delay={initialDelay}>
                &gt; list certifications
              </TypingAnimation>

              {certifications.map((cert, idx) => (
                <TypingAnimation
                  key={idx}
                  delay={initialDelay + (idx + 1) * delayPerLine}
                  className="pl-2"
                >
                  {`- ${cert.title} (${cert.issuer}, ${cert.date})`}
                </TypingAnimation>
              ))}

              <AnimatedSpan
                delay={initialDelay + (certifications.length + 1) * delayPerLine}
                className="text-green-500"
              >
                ✔ Certification list displayed successfully
              </AnimatedSpan>
            </Terminal>
          </div>

          {/* Right Terminal: Network Stack */}
          <div className="flex-1">
            <Terminal>
              <TypingAnimation delay={initialDelay}>
                &gt; list network tech stack
              </TypingAnimation>

              {networkStack.map((tech, idx) => (
                <TypingAnimation
                  key={idx}
                  delay={initialDelay + (idx + 1) * delayPerLine}
                  className="pl-2"
                >
                  {`- ${tech}`}
                </TypingAnimation>
              ))}

              <AnimatedSpan
                delay={initialDelay + (networkStack.length + 1) * delayPerLine}
                className="text-green-500"
              >
                ✔ Network stack displayed successfully
              </AnimatedSpan>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};
