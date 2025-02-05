'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    MapPin,
    Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { jobListings, jobCategories, jobLocations, steps } from '@/data/jobs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CareersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');



    const filteredJobs = jobListings.filter(job =>
        (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (category === '' || job.category === category) &&
        (location === '' || job.location === location)
    );

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section*/}
            <section
                className="relative bg-black/60 bg-blend-multiply min-h-[400px] lg:min-h-[500px] 2xl:min-h-[600px]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071&h=1200')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8 lg:p-12">
                    <div className="text-center space-y-6 animate-fade-in max-w-4xl px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-luxora">
                            Find Your Dream Career
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-luxora max-w-3xl mx-auto">
                            Discover exciting opportunities and take the next step in your professional journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Job Search Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-background flex justify-center">
                <div className="container px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                        className="space-y-8 md:space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Job Title"
                                    className="pl-10 h-12 text-base md:text-lg"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select
                                value={category}
                                onValueChange={setCategory}
                            >
                                <SelectTrigger className="h-12 text-base md:text-lg">
                                    <SelectValue placeholder="Job Category">
                                        {category || 'Select Category'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {jobCategories.map((cat) => (
                                        <SelectItem key={cat} value={cat} className="text-base md:text-lg">{cat}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select
                                value={location}
                                onValueChange={setLocation}
                            >
                                <SelectTrigger className="h-12 text-base md:text-lg">
                                    <SelectValue placeholder="Location">
                                        {location || 'Select Location'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {jobLocations.map((loc) => (
                                        <SelectItem key={loc} value={loc} className="text-base md:text-lg">{loc}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Job Listings */}
                        <div className="space-y-4 md:space-y-6">
                            {filteredJobs.map((job, index) => (
                                <div key={index} className="flex justify-center px-4 md:px-0">
                                    <motion.div
                                        variants={fadeIn}
                                        className="bg-white border rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-4xl shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-luxora text-[#cf479b]">{job.title}</h3>
                                            <div className="flex flex-wrap gap-2 text-muted-foreground items-center text-sm md:text-base">
                                                <Briefcase className="h-4 w-4" />
                                                <MapPin className="h-4 w-4" />
                                                <span>{job.type} • {job.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{job.description}</p>
                                        <Button
                                            variant="outline"
                                            className="mt-4 text-base md:text-lg hover:bg-[#cf479b] hover:text-white transition-colors"
                                        >
                                            View Details
                                        </Button>
                                    </motion.div>
                                </div>
                            ))}
                            {filteredJobs.length === 0 && (
                                <div className="text-center text-muted-foreground py-12 text-lg md:text-xl">
                                    No jobs match your search criteria.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-gray-50 flex justify-center">
                <div className="container px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                        className="text-center max-w-7xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-luxora mb-8 md:mb-12">
                            How <span className="text-[#cf479b]">Our Process</span> Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-center">
                                        <img src={step.icon} alt={step.title} className="h-16 w-16 md:h-20 md:w-20" />
                                    </div>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-luxora mt-4 mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resume Upload CTA */}
            <section className="py-12 md:py-16 lg:py-24 bg-background flex justify-center">
                <div className="container px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        variants={fadeIn}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 md:p-8 lg:p-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-luxora mb-4 md:mb-6">
                            Upload Your Resume
                        </h2>
                        <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                            Not seeing the perfect job? Upload your resume and we'll match you with opportunities.
                        </p>

                        <div className="max-w-lg mx-auto">
                            <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="mb-4 h-12 text-base md:text-lg"
                            />
                            <Button
                                size="lg"
                                className="w-full bg-[#cf479b] hover:bg-[#81175a] transition-colors text-base md:text-lg h-12"
                            >
                                Submit Resume
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}