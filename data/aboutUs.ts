import ContinuousLearningIcon from "../images/aboutUsImages/continuous-learning.png"
import CareerGrowthIcon from "../images/aboutUsImages/career.png"
import ExpertTeamIcon from "../images/aboutUsImages/experts.png"
import GlobalReachIcon from "../images/aboutUsImages/globalization.png"

interface SocialLinks {
    linkedin: string;
    twitter: string;
    github: string;
  }
  
  interface TeamMember {
    name: string;
    position: string;
    image: string;
    bio: string;
    socials: SocialLinks;
  }
  
  interface Feature {
    icon: any;
    title: string;
    description: string;
    color: string;
  }
export const teamMembers : TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "15+ years experience in HR and talent acquisition",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Former tech lead at Fortune 500 companies",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Streamlining processes for optimal efficiency",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Full-stack developer with AI expertise",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];
  
  
 export const features : Feature[] = [
    {
      icon: GlobalReachIcon,
      title: "Global Reach",
      description: "Access opportunities worldwide",
      color: "bg-pink-600"
    },
    {
      icon: ExpertTeamIcon,
      title: "Expert Team",
      description: "Industry veterans at your service",
      color: "bg-purple-600"
    },
    {
      icon: CareerGrowthIcon,
      title: "Career Growth",
      description: "Personalized development plans",
      color: "bg-cyan-500"
    },
    {
      icon: ContinuousLearningIcon,
      title: "Continuous Learning",
      description: "Regular workshops and training",
      color: "bg-yellow-500"
    }
  ];