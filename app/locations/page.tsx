"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { branches } from '@/data/locations';

const LocationSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBranches = branches.filter(branch =>
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f2f2f2]">
            {/* Header Section */}
            <section
                className="parallax h-[50vh] md:h-[60vh] relative bg-black/60 bg-blend-multiply"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070&h=1200')"
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <div className="text-center space-y-6 animate-fade-in max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-luxora">
                            Find Our Branches
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-luxora">
                            Discover our locations across the city and find the branch nearest to you
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto text-center">

                    <p className='text-3xl font-luxora'>You can Search by branch name or location</p>
                    {/* Search Section */}
                    <div className=" rounded-xl  p-6 mb-12  flex justify-center">

                        <div className="flex gap-3 w-full max-w-4xl">
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-white border-2 border-[#f2f2f2] focus:border-[#cf479b] focus:ring-[#cf479b] h-12 text-lg"
                            />
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {filteredBranches.map((branch) => (
                            <Card key={branch.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={branch.image}
                                        alt={branch.name}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#7a2964]/50 to-transparent" />
                                </div>
                                <CardHeader className="bg-white">
                                    <CardTitle className="text-2xl font-bold text-[#333333] -mb-2 font-luxora text-start">
                                        {branch.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="bg-white space-y-4 pt-2">
                                    <div className="flex items-start space-x-2">
                                        <svg className="w-5 h-5 text-[#cf479b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-gray-600 flex-1 font-luxora text-start" >{branch.address}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-[#cf479b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <p className="font-medium text-[#333333] font-luxora">
                                            Branch Manager: <span className="text-[#7a2964]">{branch.manager}</span>
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredBranches.length === 0 && (
                        <div className="text-center py-12 rounded-xl ">
                            <p className="text-lg text-black">No branches found matching your search.</p>
                            <Button
                                className="mt-4 bg-[#cf479b] hover:bg-[#7a2964] transition-colors duration-300"
                                onClick={() => setSearchQuery('')}
                            >
                                Clear Search
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationSearch;