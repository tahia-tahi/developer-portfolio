import { 
  Home, 
  Briefcase, 
  Code2, 
  History, 
  User, 
  MessageSquare, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react"

export const navLinks = [
  { label: 'Home', link: '#home', icon: Home },
  { label: 'About', link: '#about', icon: User },
  { label: 'Projects', link: '#projects', icon: Briefcase },
  { label: 'Services', link: '#services', icon: Code2 },
  { label: 'Experience', link: '#experience', icon: History },
  { label: 'Reviews', link: '#reviews', icon: MessageSquare },
  { label: 'Contact', link: '#contact', icon: Mail },
]

export const socialLinks = [
  { 
    label: 'GitHub', 
    link: 'https://github.com/your-username', 
    icon: Github 
  },
  { 
    label: 'LinkedIn', 
    link: 'https://linkedin.com/in/your-username', 
    icon: Linkedin 
  },
  { 
    label: 'Twitter', 
    link: 'https://twitter.com/your-username', 
    icon: Twitter 
  },
  { 
    label: 'Resume', 
    link: '/resume.pdf', 
    icon: ExternalLink 
  },
]