export interface SubService {
  title: string;
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  subServices: SubService[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "operation-maintenance",
    title: "Operation & Maintenance (O&M)",
    shortTitle: "O&M",
    description: "Maximizing system efficiency, reliability, and performance with expert maintenance solutions",
    icon: "Settings",
    subServices: [
      { title: "Preventive & Corrective Maintenance", isPopular: true },
      { title: "Remote Monitoring & Diagnostics", isPopular: true },
      { title: "Fault Detection & Troubleshooting" },
      { title: "Regulatory Compliance & Safety Inspections" },
    ],
  },
  {
    id: "engineering-procurement-construction",
    title: "Engineering, Procurement & Construction (EPC)",
    shortTitle: "EPC",
    description: "End-to-end solar solutions from concept to commissioning, tailored for maximum efficiency and reliability.",
    icon: "Building2",
    subServices: [
      { title: "Customized Solar Design & Engineering", isPopular: true },
      { title: "Premium-Quality Procurement", isPopular: true },
      { title: "Expert Installation & Commissioning" },
      { title: "Grid Integration & Net Metering" },
    ],
  },
  {
    id: "asset-management",
    title: "Asset Management",
    shortTitle: "Asset Management",
    description: "Enhancing the financial and operational efficiency of renewable energy investments.",
    icon: "BarChart3",
    subServices: [
      { title: "Real-Time Asset Performance Tracking", isPopular: true },
      { title: "Risk & Compliance Management", isPopular: true },
      { title: "Financial & Technical Optimization" },
      { title: "Lifecycle Analysis & Maintenance Planning" },
    ],
  },
  {
    id: "performance-monitoring",
    title: "Performance Assessment & Monitoring Solutions",
    shortTitle: "Monitoring",
    description: "Data-driven monitoring solutions for enhanced solar system performance and reliability.",
    icon: "Activity",
    subServices: [
      { title: "24/7 Live Performance Monitoring", isPopular: true },
      { title: "AI-Based Fault Detection", isPopular: true },
      { title: "Energy Yield Optimization" },
      { title: "Custom Reporting & Analytics" },
    ],
  },
  {
    id: "pm-suryaghar",
    title: "PM Suryaghar",
    shortTitle: "PM Suryaghar",
    description: "Affordable and accessible solar rooftop solutions under government initiatives",
    icon: "Home",
    subServices: [
      { title: "Subsidy Assistance & Documentation", isPopular: true },
      { title: "Seamless Rooftop Solar Installation", isPopular: true },
      { title: "Net Metering & Energy Savings" },
      { title: "Flexible Financing & Loan Options" },
    ],
  },
  {
    id: "ev-charging",
    title: "EV Charging Solutions",
    shortTitle: "EV Charging",
    description: "Building a future-ready electric vehicle (EV) charging network for homes, businesses, and public infrastructure.",
    icon: "Zap",
    subServices: [
      { title: "Smart Residential EV Charging", isPopular: true },
      { title: "Commercial & Public EV Charging Stations", isPopular: true },
      { title: "Fast & Ultra-Fast Charging Solutions" },
      { title: "Integrated Energy Management" },
    ],
  },
];

export const companyInfo = {
  name: "Kriya Cleantech Services",
  phone: "9182976494",
  email: "services@kriyacleantech.com",
  address: "Krishna Block, Shanthigram Indraprastha, 201, Vatluru, Eluru, Andhra Pradesh 534007",
  timing: "9AM to 6PM",
  whatsappNumber: "919182976494",
};
