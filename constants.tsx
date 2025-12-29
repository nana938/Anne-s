
import React from 'react';
import { 
  Briefcase, 
  Mail, 
  Calendar, 
  Plane, 
  Search, 
  Headphones,
  Layout,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';
import { Project, VAService, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive management portal for online retailers featuring real-time analytics and inventory management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: '',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Task Orchestrator',
    description: 'A Python-based automation tool for streamlining repetitive developer workflows.',
    tech: ['Python', 'FastAPI', 'Redis'],
    image: '',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Zen Landing Page',
    description: 'A minimalist, highly optimized landing page for a wellness startup with 99+ Lighthouse score.',
    tech: ['Next.js', 'Framer Motion', 'TypeScript'],
    image: '',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const VA_SERVICES: VAService[] = [
  {
    id: 'admin',
    title: 'Admin Support',
    description: 'Data entry, file organization, and document preparation to keep your operations smooth.',
    icon: 'Briefcase'
  },
  {
    id: 'email',
    title: 'Email & Calendar',
    description: 'Inbox zero strategies and meticulous schedule coordination for busy executives.',
    icon: 'Mail'
  },
  {
    id: 'travel',
    title: 'Travel Planning',
    description: 'End-to-end itinerary management, flight bookings, and local logistics research.',
    icon: 'Plane'
  },
  {
    id: 'research',
    title: 'Business Research',
    description: 'Comprehensive market analysis, competitor tracking, and lead generation reports.',
    icon: 'Search'
  },
  {
    id: 'customer',
    title: 'Customer Support',
    description: 'Professional handling of customer inquiries across email and chat platforms.',
    icon: 'Headphones'
  }
];

export const TOOLS: Tool[] = [
  { name: 'Google Workspace', icon: '📁', category: 'Admin' },
  { name: 'Notion', icon: '📓', category: 'Org' },
  { name: 'Trello', icon: '📋', category: 'Task' },
  { name: 'Slack', icon: '💬', category: 'Comm' },
  { name: 'Zoom', icon: '📹', category: 'Comm' },
  { name: 'Canva', icon: '🎨', category: 'Design' }
];

export const TECH_STACK = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: <Globe className="w-5 h-5" /> },
  { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'FastAPI'], icon: <Database className="w-5 h-5" /> },
  { name: 'Mobile/Design', items: ['React Native', 'Figma', 'UI/UX Principles'], icon: <Smartphone className="w-5 h-5" /> }
];
