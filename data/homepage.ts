
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}
export const testimonials : Testimonial[] = [
    {
      quote: "CareerConnect helped me land my dream job in tech within just 2 weeks. The process was seamless and professional.",
      author: "Sarah M.",
      role: "Software Engineer",
      image: "https://i.pinimg.com/736x/6c/55/07/6c5507dcf80e561055ec2ff456c2ac84.jpg"
    },
    {
      quote: "I was impressed by how well-matched the job recommendations were to my skills and experience. Found the perfect role!",
      author: "Michael P.",
      role: "Marketing Director",
      image: "https://i.pinimg.com/736x/8f/0b/2e/8f0b2ec5e74f39b4f7fbc791e7420f3e.jpg"
    },
    {
      quote: "The platform's ease of use and quick application process made job hunting much less stressful.",
      author: "James R.",
      role: "Project Manager",
      image: "https://i.pinimg.com/736x/b7/f1/4f/b7f14f4f6e747cfcee4a18569c25bce7.jpg"
    }
  ];
  export interface Partner {
    name: string;
    logo: string;
  }
  export const partners : Partner[] = [
    {
      name: "TechCorp",
      logo: "https://i.pinimg.com/736x/7f/cd/ab/7fcdabb28eaf8ca6974de7ede05239fe.jpg"
    },
    {
      name: "InnovateHub",
      logo: "https://i.pinimg.com/736x/ea/09/13/ea09138c2b8867668141e75f4c643a24.jpg"
    },
    {
      name: "GlobalTech",
      logo: "https://i.pinimg.com/736x/7c/aa/d3/7caad3da78bdae25772de7cbe8f459f8.jpg"
    },
    {
      name: "FutureWorks",
      logo: "https://i.pinimg.com/736x/5c/00/e5/5c00e519ad324b8ae46e6c91bd3bdecc.jpg"
    }
  ];