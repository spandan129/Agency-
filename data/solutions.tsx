import { Globe, Users, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

export interface Industry {
    name: string;
    description: string;
    challenges: string[];
    solutions: string[];
}

export const industries: Industry[] = [
    {
        name: "Technology",
        description: "Specialized workforce solutions for tech companies and digital transformation.",
        challenges: ["Rapid skill evolution", "Talent shortage", "Global competition"],
        solutions: ["Targeted tech talent acquisition", "Skill bridge programs", "Global recruitment networks"]
    },
    {
        name: "Healthcare",
        description: "Comprehensive staffing strategies for medical and healthcare institutions.",
        challenges: ["Credential verification", "Shift coverage", "Specialized role recruitment"],
        solutions: ["Credential management system", "Flexible staffing models", "Specialized healthcare talent pool"]
    },
    {
        name: "Finance",
        description: "Strategic workforce planning for financial services and institutions.",
        challenges: ["Regulatory compliance", "Risk management", "Talent retention"],
        solutions: ["Compliance-focused recruitment", "Executive search specialization", "Performance-driven talent acquisition"]
    }
];

export interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: <Globe className="h-10 w-10 lg:h-12 lg:w-12 mx-auto text-[#cf479b]" />,
        title: "Global Reach",
        description: "Tap into a worldwide talent pool with our expansive recruitment network."
    },
    {
        icon: <Users className="h-10 w-10 lg:h-12 lg:w-12 mx-auto text-[#cf479b]" />,
        title: "Talent Optimization",
        description: "Advanced matching algorithms to connect the right talent with the right opportunity."
    },
    {
        icon: <TrendingUp className="h-10 w-10 lg:h-12 lg:w-12 mx-auto text-[#cf479b]" />,
        title: "Performance Driven",
        description: "Data-backed strategies to enhance workforce productivity and engagement."
    }
];

export interface Stat {
    label: string;
    value: string;
}

export const stats: Stat[] = [
    { label: "Placement Rate", value: "92%" },
    { label: "Client Satisfaction", value: "4.8/5" },
    { label: "Industries Served", value: "15+" },
    { label: "Countries Global Reach", value: "50+" }
];
