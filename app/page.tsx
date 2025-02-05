'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, Quote, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { partners, testimonials } from "../data/homepage"
import SucessIcon from "../images/success.png";
import CompaniesIcon from "../images/city.png";
import JobIcon from "../images/job-offer.png";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="flex flex-col min-h-screen" ref={ref}>
      {/* Hero Section with Parallax Effect */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative min-h-[650px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070&h=1200')"
        }}
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <motion.div
          variants={fadeIn}
          className="relative z-10 mx-auto max-w-5xl text-center px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-luxora text-white leading-tight sm:leading-[1.2]">
            Connecting Exceptional Talent with Leading Companies
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-white/90">
            Empowering careers, transforming businesses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="group relative bg-transparent text-white bg-gradient-to-r from-[#cf479b] to-[#a83a7f] border-2 border-[#cf479b] rounded-3xl overflow-hidden hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-[#cf479b]/50"
            >
              <Link
                href="/jobs"
                className="flex gap-2 relative z-10 p-4"
              >
                <span className="relative z-20">Find Your Dream Job</span>
                <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 w-full h-full bg-[#a83a7f] -z-10 transform translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cf479b] to-[#a83a7f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              className="group relative bg-transparent text-[#cf479b] bg-white border-2 border-[#cf479b] rounded-3xl overflow-hidden hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-[#cf479b]/50"
            >
              <Link
                href="/jobs"
                className="flex gap-2 relative z-10 p-4"
              >
                <span className="relative z-20">Hire Top Talent</span>
                <Info className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 w-full h-full bg-[#cf479b] -z-10 transform translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cf479b] to-[#ffd1e6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-12 sm:py-24 flex justify-center"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 font-luxora"
          >
            Why Choose <span className='text-[#cf479b]'>CareerConnect?</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: JobIcon,
                title: "Expert Recruiters",
                description: "Our team matches the right talent with the right job."
              },
              {
                icon: CompaniesIcon,
                title: "Industry-Specific Solutions",
                description: "Tailored staffing strategies for every business."
              },
              {
                icon: SucessIcon,
                title: "Seamless Hiring Process",
                description: "From sourcing to onboarding, we handle it all."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: [0.21, 1.02, 0.73, 0.96]
                }}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card transition-all hover:shadow-sm"
              >
                <div className="text-primary mb-4 bg-primary/5 p-3 rounded-full">
                  <img src={feature.icon.src} alt='no icons' className='h-10 w-10'></img>
                </div>
                <h3 className="text-xl font-luxora mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-12 sm:py-24 flex justify-center"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-luxora text-center mb-8 sm:mb-12"
          >
            Our <span className='text-[#cf479b]'>Success Stories</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: [0.21, 1.02, 0.73, 0.96]
                }}
                className="p-6 rounded-lg border bg-card relative transition-all hover:shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-offset-2 ring-offset-background"
                    />
                  </div>
                  <div>
                    <p className="font-luxora text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-4 h-4 text-primary mb-2" />
                <p className="text-muted-foreground leading-relaxed">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Clients & Partners Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-12 sm:py-24 bg-background flex justify-center"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-luxora text-center mb-8 sm:mb-12"
          >
            Our Trusted <span className='text-[#cf479b]'>Partners</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg transition-all flex items-center justify-center w-full h-full"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-[120px] h-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}

      <section className="py-12 sm:py-24 bg-gradient-to-r from-purple-50 via-white to-pink-50 flex justify-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-luxora mb-6">
              Ready to <span className="bg-gradient-to-r from-green-500 via-purple-500 to-pink-700 bg-clip-text text-transparent">Take the Next Step?</span>
            </h2>

            <p className="mb-8 text-muted-foreground">Join thousands of professionals who found their dream jobs through CareerConnect.</p>
            <Button
              size="lg"
              asChild
              className="group relative bg-transparent text-[#cf479b] bg-[#fff2f2] border border-[#cf479b] rounded-3xl overflow-hidden hover:text-white transition-colors duration-300"
            >
              <Link href="/jobs" className="flex gap-2 relative z-10">
                Browse Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 w-full h-full bg-[#cf479b] -z-10 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}