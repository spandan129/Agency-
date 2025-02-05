"use client"
import React from 'react';
import { Building2, Target, Users2, Globe2, Award, Briefcase, GraduationCap, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import ValuesIcon from "../../images/aboutUsImages/instructions.png";
import VisionIcon from "../../images/aboutUsImages/targeted.png";
import MissionIcon from "../../images/aboutUsImages/building.png"
import AnimatedNumbers from "../_components/AboutUs/AnimatedNumbers"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { features, teamMembers } from "../../data/aboutUs"


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

function About() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="parallax h-[50vh] md:h-[60vh] relative bg-black/60 bg-blend-multiply"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070&h=1200')"
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <div className="text-center space-y-6 animate-fade-in max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-luxora">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-luxora">
              At Trulinkpro Staffing Solutions, we bridge the gap between businesses and top-tier talent.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-md transition-all duration-300">
              <img src={MissionIcon.src} alt='Mission Icon' className="h-12 w-12 mb-4" />
              <h3 className="text-xl mb-2 font-luxora">Our Mission</h3>
              <p className="text-gray-600 font-luxora">
                To revolutionize the way people find and secure their dream careers through innovative solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-md transition-all duration-300">
              <img src={VisionIcon.src} alt='Vision Icon' className="h-12 w-12 mb-4" />
              <h3 className="text-xl mb-2 font-luxora">Our Vision</h3>
              <p className="text-gray-600 font-luxora">
                To become the world's most trusted platform for career development and professional growth.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-md transition-all duration-300">
              <img src={ValuesIcon.src} alt='Values Icon' className="h-12 w-12 mb-4" />
              <h3 className="text-xl mb-2 font-luxora">Our Values</h3>
              <p className="text-gray-600 font-luxora">
                We uphold integrity, foster innovation, and maintain an unwavering commitment to excellence in every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedNumbers />

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 rounded-full translate-x-32 translate-y-32" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-luxora tracking-tight mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why <span className='text-[#cf479b]'>Choose Us</span>
            </motion.h2>
            <div className="h-[0.1rem] w-16 bg-gradient-to-r from-green-500 via-[#cf479b] to-pink-700 mb-5" />
            <motion.p
              className="text-md text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We combine technology with human expertise to deliver exceptional results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gray-100 -rotate-2 transform transition-transform group-hover:rotate-0 rounded-xl" />
                  <div className="relative p-6 md:p-8 bg-white border-[1px] border-gray-300 hover:translate-x-2 hover:-translate-y-2 transition-transform rounded-xl">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 ${feature.color} rounded-sm`}>
                        <img src={Icon.src} alt="Feature Icon" className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl mb-2 font-luxora">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-luxora">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-luxora mb-4">Meet <span className='text-[#cf479b]'>Our Team</span></h2>
              <p className="text-gray-600">
                The passionate individuals behind CareerConnect
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-md transition-all duration-300 font-luxora"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg mb-1">{member.name}</h3>
                  <p className="text-[#cf479b] mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cyan-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-purple-50 via-white to-pink-50 flex justify-center">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-luxora mb-6">
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

export default About;