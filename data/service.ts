import HealtCareIcon from "../images/serviceImage/healthcare.png";
import StaffingIcon from "../images/serviceImage/staffing.png";
import DirectHireIcon from "../images/serviceImage/hired.png";
import ExecutiveSearchIcon from "../images/serviceImage/search.png";
import ITIcon from "../images/serviceImage/technical-support.png";
import WorkFromHomeIcon from "../images/serviceImage/teleworking.png";

interface Service {
  icon: any;
  title: string;
  description: string;
  images: string[];
  features: string[];
}

export const services: Service[] = [
  {
    icon: StaffingIcon,
    title: "Temporary Staffing",
    description:
      "Flexible workforce solutions to meet your temporary and seasonal staffing needs. Our extensive talent pool ensures quick placement of qualified professionals.",
    images: [
      "https://i.pinimg.com/736x/ad/35/ed/ad35edbfcd2a9c982696fdbe740435e0.jpg",
      "https://i.pinimg.com/736x/ac/9a/99/ac9a99e7532449f661f3a59b08214a5b.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
    ],
    features: ["Rapid deployment", "Flexible contracts", "Quality-vetted professionals"],
  },
  {
    icon: DirectHireIcon,
    title: "Direct Hire Placements",
    description:
      "End-to-end recruitment solutions for permanent positions. We handle everything from sourcing to screening to ensure the perfect match for your team.",
    images: [
      "https://i.pinimg.com/736x/f9/98/f3/f998f3e170a8553c7a8db832ea2aa61b.jpg",
      "https://i.pinimg.com/736x/34/fe/c7/34fec76d05f6421825547d50abd27f56.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
    ],
    features: ["Comprehensive screening", "Culture fit assessment", "Industry expertise"],
  },
  {
    icon: ExecutiveSearchIcon,
    title: "Executive Search",
    description:
      "Strategic leadership recruitment for senior and executive positions. Our network includes top-tier talent across various industries.",
    images: [
      "https://i.pinimg.com/736x/58/c3/04/58c304078af1ed201870ebc5c6b20c28.jpg",
      "https://i.pinimg.com/736x/45/f8/17/45f817fe3660d5c4f60aab33bc30b04f.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
    ],
    features: ["Confidential search", "Leadership assessment", "Market insights"],
  },
  {
    icon: ITIcon,
    title: "IT & Tech Staffing",
    description:
      "Specialized recruitment for technical roles across all levels. From developers to CTOs, we connect you with top tech talent.",
    images: [
      "https://i.pinimg.com/736x/1e/8c/0b/1e8c0be98fe6a772c9edd1b0b4d4a840.jpg",
      "https://i.pinimg.com/736x/db/a6/01/dba601e9bed6e8856ea8cc18f16cd50f.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
    ],
    features: ["Technical assessment", "Skill validation", "Industry certifications"],
  },
  {
    icon: HealtCareIcon,
    title: "Healthcare Staffing",
    description:
      "Dedicated healthcare staffing solutions for medical facilities. We provide qualified healthcare professionals for both temporary and permanent positions.",
    images: [
      "https://i.pinimg.com/736x/cf/2e/94/cf2e942324b45812a11a02ae3e6b3b1c.jpg",
      "https://i.pinimg.com/736x/18/73/d4/1873d4b929cace2ce8d13539e5075016.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
    ],
    features: ["Credential verification", "Compliance management", "24/7 support"],
  },
  {
    icon: WorkFromHomeIcon,
    title: "Remote Work Solutions",
    description:
      "Comprehensive remote hiring and management solutions. We help you build and maintain effective remote teams across time zones.",
    images: [
      "https://i.pinimg.com/736x/ce/3b/a4/ce3ba4db191704df6229c9d45ee4078f.jpg",
      "https://i.pinimg.com/736x/a7/61/1a/a7611ae2d8b56b50df71607c1816e022.jpg",
      "https://i.pinimg.com/736x/e1/01/72/e101720110b371d826e1b05786360a93.jpg",
      "https://i.pinimg.com/736x/eb/7e/ed/eb7eed2376e233cfdc1f1ac82e6240ad.jpg",
      "https://i.pinimg.com/736x/ea/90/da/ea90da7e7f1c944fc07bbfad51c51cc9.jpg",
      "https://i.pinimg.com/736x/c0/e7/42/c0e7427c13d17acdbf1a1d2ce8a2ed90.jpg",
      
    ],
    features: ["Global talent pool", "Remote onboarding", "Virtual team building"],
  },
];
