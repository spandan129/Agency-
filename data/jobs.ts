import ProfileIcon from "../images/jobsImage/profile.png";
import EasyApplyIcon from "../images/jobsImage/touch.png";
import SearchIcon from "../images/jobsImage/online-search.png";

export type JobCategory = 'IT & Technology' | 'Healthcare' | 'Finance' | 'Marketing' | 'Sales' | 'Customer Support';

export type JobLocation = 'Remote' | 'New York' | 'San Francisco' | 'Chicago' | 'Dallas' | 'Boston';

export interface JobListing {
    title: string;
    category: JobCategory;
    location: JobLocation;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    description: string;
}

export interface Step {
    icon: string;
    title: string;
    description: string;
}

export const jobCategories: JobCategory[] = [
    'IT & Technology',
    'Healthcare',
    'Finance',
    'Marketing',
    'Sales',
    'Customer Support'
];

export const jobLocations: JobLocation[] = [
    'Remote',
    'New York',
    'San Francisco',
    'Chicago',
    'Dallas',
    'Boston'
];

export const jobListings: JobListing[] = [
    {
        title: 'Senior Software Engineer',
        category: 'IT & Technology',
        location: 'San Francisco',
        type: 'Full-time',
        description: 'Lead development of cutting-edge web applications with modern tech stack.'
    },
    {
        title: 'Registered Nurse',
        category: 'Healthcare',
        location: 'New York',
        type: 'Contract',
        description: 'Provide compassionate patient care in a fast-paced hospital environment.'
    },
    {
        title: 'Digital Marketing Specialist',
        category: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'Drive digital marketing strategies and campaign performance.'
    }
];

export const steps: Step[] = [
    {
        icon: ProfileIcon.src,
        title: 'Create Profile',
        description: 'Build a comprehensive professional profile highlighting your skills and experience.'
    },
    {
        icon: SearchIcon.src,
        title: 'Explore Jobs',
        description: 'Browse and filter job opportunities that match your career goals.'
    },
    {
        icon: EasyApplyIcon.src,
        title: 'Apply Easily',
        description: 'Submit your application with a single click and track your progress.'
    }
];
