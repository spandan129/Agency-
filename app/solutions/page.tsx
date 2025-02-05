'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { industries } from '@/data/solutions';
import { features, stats } from '@/data/solutions';

export default function SolutionsPage() {
    const [activeIndustry, setActiveIndustry] = useState('Technology');


    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col min-h-screen">
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
                            Workforce Solutions
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-luxora">
                            Innovative strategies tailored to your industry's unique workforce challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industry Solutions - Improved padding and responsive layout */}
            <section className="py-12 md:py-16 lg:py-24 bg-background">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                    >
                        <Tabs defaultValue="Technology" className="space-y-8 ">
                            <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
                                {industries.map((industry) => (
                                    <TabsTrigger
                                        key={industry.name}
                                        value={industry.name}
                                        onClick={() => setActiveIndustry(industry.name)}
                                        className="text-sm sm:text-base lg:text-lg h-8"
                                    >
                                        {industry.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {industries.map((industry) => (
                                <TabsContent key={industry.name} value={industry.name}>
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                        <div className="space-y-6">
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-luxora text-[#cf479b]">
                                                {industry.name} Solutions
                                            </h2>
                                            <p className="text-muted-foreground text-base lg:text-lg 2xl:text-xl">
                                                {industry.description}
                                            </p>

                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-luxora mb-4">Key Challenges</h3>
                                                    {industry.challenges.map((challenge) => (
                                                        <div
                                                            key={challenge}
                                                            className="flex items-center space-x-3 mb-3"
                                                        >
                                                            <div className="h-2 w-2 bg-[#cf479b] rounded-full" />
                                                            <span className="font-luxora text-base lg:text-lg 2xl:text-xl">{challenge}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div>
                                                    <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-luxora mb-4">Our Solutions</h3>
                                                    {industry.solutions.map((solution) => (
                                                        <div
                                                            key={solution}
                                                            className="flex items-center space-x-3 mb-3"
                                                        >
                                                            <div className="h-2 w-2 bg-green-500 rounded-full" />
                                                            <span className="font-luxora text-base lg:text-lg 2xl:text-xl">{solution}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8">
                                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-luxora mb-6">
                                                Talk to an Expert
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <label className="text-sm text-gray-600 mb-2 block">· Full Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                                                        placeholder="John Doe"
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <label className="text-sm text-gray-600 mb-2 block">· Email Address</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <label className="text-sm text-gray-600 mb-2 block">· Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                </div>

                                            
                                                <div className="relative">
                                                    <label className="text-sm text-gray-600 mb-2 block">· Qualifications</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                                                        placeholder="Degree Completed"
                                                    />
                                                </div>

                                                <Button
                                                    className="w-full bg-[#cf479b] hover:bg-[#81175a] text-base lg:text-lg h-12"
                                                >
                                                    Request Consultation
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </motion.div>
                </div>
            </section>

            {/* Solution Features - Improved spacing and responsive grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-luxora mb-12">
                            Our Strategic <span className="text-[#cf479b]">Workforce Solutions</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm"
                                >
                                    {feature.icon}
                                    <h3 className="text-lg lg:text-xl 2xl:text-2xl font-luxora mt-4 mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-base lg:text-lg">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resume Upload & Analytics - Improved spacing and responsive layout */}
            <section className="py-12 md:py-16 lg:py-24 bg-background">
                <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 md:p-8 lg:p-12"
                    >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-luxora flex items-center">
                                    <Shield className="mr-4 text-[#cf479b] h-8 w-8 lg:h-10 lg:w-10" />
                                    Secure Resume Upload
                                </h2>
                                <p className="text-muted-foreground text-base lg:text-lg 2xl:text-xl">
                                    Confidential and secure platform for professional profile submission.
                                </p>
                                <div className="space-y-4">
                                    <Input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="text-base lg:text-lg"
                                    />
                                    <Button
                                        size="lg"
                                        className="w-full bg-[#cf479b] hover:bg-[#81175a] transition-colors text-base lg:text-lg h-12"
                                    >
                                        Upload Resume
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-luxora flex items-center">
                                    <TrendingUp className="mr-4 text-[#cf479b] h-8 w-8 lg:h-10 lg:w-10" />
                                    Performance Analytics
                                </h2>
                                <p className="text-muted-foreground text-base lg:text-lg 2xl:text-xl">
                                    Comprehensive tracking and insights for data-driven workforce strategies.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="bg-white rounded-xl p-4 lg:p-6 text-center"
                                        >
                                            <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#cf479b] font-luxora">
                                                {stat.value}
                                            </h3>
                                            <p className="text-sm lg:text-base 2xl:text-lg text-muted-foreground font-luxora">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}