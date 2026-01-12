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
  heroImage: string;
}
export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  subServices: SubService[];
  icon: string;
  heroImage: string;
  bottomImage?: string; // ✅ add this
}

export const services: Service[] = [
  {
    id: "operation-maintenance",
    title: "Operation & Maintenance (O&M)",
    shortTitle: "O&M",
    description: "Maximizing system efficiency, reliability, and performance with expert maintenance solutions",
    icon: "Settings",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2232&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
  description:
    "Affordable and accessible solar rooftop solutions under government initiatives",
  icon: "Home",
  heroImage:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
  bottomImage:
    "https://i.ibb.co/jvYKS0bL/pms.jpg", // ✅ new image
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
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    subServices: [
      { title: "Smart Residential EV Charging", isPopular: true },
      { title: "Commercial & Public EV Charging Stations", isPopular: true },
      { title: "Fast & Ultra-Fast Charging Solutions" },
      { title: "Integrated Energy Management" },
    ],
  },
  {
    id: "battery-energy-storage",
    title: "Battery Energy Storage Systems (BESS)",
    shortTitle: "BESS",
    description: "Advanced battery energy storage solutions for grid stability, peak shaving, and renewable energy integration. Our BESS solutions provide reliable backup power and optimize energy consumption for maximum efficiency and cost savings.",
    icon: "Battery",
    heroImage: "https://cdn.prod.website-files.com/64d891332f7859038cf0db9c/6822b37731e64a3eb12b4ec6_webflow%20cover%20pic%20BESS.jpg",
    subServices: [
      { title: "Grid-Scale BESS", isPopular: true },
      { title: "Commercial & Industrial BESS", isPopular: true },
      { title: "Residential Battery Storage" },
      { title: "Peak Shaving Solutions", isPopular: true },
      { title: "Renewable Energy Integration" },
      { title: "Backup Power Systems" },
    ],
  },
];

export const companyInfo = {
  name: "Kriya Cleantech Services",
  phone: "+91 91829 76494",
  email: "services@kriyacleantech.com",
  address: "Krishna Block, Shanthigram Indraprastha, Vatluru, Eluru, Andhra Pradesh 534007",
  timing: "9:30AM to 5:30PM (Mon - Sat)",
  whatsappNumber: "919182976494",
};