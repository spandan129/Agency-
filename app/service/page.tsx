'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/service';

export default function Services() {
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
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section
                className="relative bg-black/60 bg-blend-multiply min-h-[400px] lg:min-h-[500px] 2xl:min-h-[600px]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070&h=1200')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8 lg:p-12">
                    <div className="text-center space-y-4 md:space-y-6 animate-fade-in max-w-4xl px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-luxora">
                            Our Services
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-luxora max-w-3xl mx-auto">
                            Comprehensive staffing solutions tailored to your unique needs. From temporary staffing to executive search, we've got you covered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section  */}
            <section className="py-12 md:py-16 lg:py-24 bg-background flex justify-center">
                <div className="container px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="space-y-16 md:space-y-24 lg:space-y-32"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="relative"
                            >
                                {/* Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl -z-10" />
                                <div
                                    className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10`}
                                />

                                {/* Content Layout */}
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                    {/* Image Side */}
                                    <div className="relative group">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 h-[500px] sm:h-[500px] md:h-[400px] overflow-hidden rounded-lg">
                                            {service?.images.map((image, imgIndex) => (
                                                <div
                                                    key={imgIndex}
                                                    className={`
                    ${imgIndex === 0
                                                            ? 'col-span-2 row-span-1 sm:col-span-3'
                                                            : imgIndex === 1
                                                                ? 'col-span-2 sm:col-span-1'
                                                                : 'hidden sm:block sm:col-span-1'}
                    relative overflow-hidden rounded-lg
                `}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${service.title} image ${imgIndex + 1}`}
                                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                                            {service?.icon && (
                                                <Image
                                                    src={service.icon}
                                                    width={40}
                                                    height={40}
                                                    className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
                                                    alt='service icon'
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`space-y-4 md:space-y-6 lg:pl-12 px-4 sm:px-6 lg:px-0`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-luxora mb-3 md:mb-4 text-[#cf479b]">
                                                {service?.title}
                                            </h3>
                                            <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8">
                                                {service?.description}
                                            </p>

                                            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                                {service?.features.map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        viewport={{ once: true }}
                                                        className="flex items-center space-x-3"
                                                    >
                                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                                        <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <Button
                                                asChild
                                                className="group relative bg-[#cf479b] text-white border border-[#f7cce7] rounded-3xl overflow-hidden transition-all duration-300 text-sm sm:text-base h-10 sm:h-12"
                                            >
                                                <Link
                                                    href={`/services/${service?.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="flex items-center gap-2 relative z-10 px-4 sm:px-6"
                                                >
                                                    <span className="relative overflow-hidden">
                                                        <span className="block transition-transform group-hover:-translate-y-full">
                                                            Explore {service?.title}
                                                        </span>
                                                        <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform">
                                                            Explore {service?.title}
                                                        </span>
                                                    </span>
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:rotate-45 group-hover:scale-125" />
                                                    <div className="absolute inset-0 bg-[#81175a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-purple-50 via-white to-pink-50 flex justify-center">
                <div className="container px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-luxora mb-4 md:mb-6">
                            Ready to Find Your
                            <span className="bg-gradient-to-r from-green-500 via-purple-500 to-pink-700 bg-clip-text text-transparent"> Solution?</span>
                        </h2>
                        <p className="text-muted-foreground mb-6 md:mb-8 text-base sm:text-lg">
                            Let's discuss how our services can help you achieve your staffing goals.
                        </p>
                        <Button
                            size="lg"
                            asChild
                            className="group relative bg-transparent text-[#cf479b] bg-[#fff6f6] border border-[#cf479b] rounded-3xl overflow-hidden hover:text-white transition-colors duration-300 h-10 sm:h-12 text-sm sm:text-base"
                        >
                            <Link href="/contact" className="flex items-center gap-2 relative z-10 px-4 sm:px-6">
                                Contact Us Today
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 w-full h-full bg-[#cf479b] -z-10 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}