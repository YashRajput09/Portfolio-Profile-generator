import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Send 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      section: 'Product',
      links: [
        { name: 'Templates', link: '/templates', icon: Send, color: 'text-blue-600' },
        { name: 'How It Works', link: '/how-it-works', icon: Github, color: 'text-purple-600' },
        { name: 'Pricing', link: '/pricing', icon: Linkedin, color: 'text-green-600' }
      ]
    },
    {
      section: 'Company',
      links: [
        { name: 'About Us', link: '/about', icon: Twitter, color: 'text-indigo-600' },
        { name: 'Careers', link: '/careers', icon: Mail, color: 'text-red-600' },
        { name: 'Press', link: '/press', icon: Send, color: 'text-orange-600' }
      ]
    },
    {
      section: 'Resources',
      links: [
        { name: 'Blog', link: '/blog', icon: Send, color: 'text-blue-600' },
        { name: 'Help Center', link: '/help', icon: Github, color: 'text-purple-600' },
        { name: 'Community', link: '/community', icon: Linkedin, color: 'text-green-600' }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      link: 'https://github.com/portfolioai', 
      color: 'text-gray-800 hover:text-black',
      delay: 'delay-100'
    },
    { 
      icon: Linkedin, 
      link: 'https://linkedin.com/company/portfolioai', 
      color: 'text-blue-700 hover:text-blue-800',
      delay: 'delay-200'
    },
    { 
      icon: Twitter, 
      link: 'https://twitter.com/portfolioai', 
      color: 'text-blue-400 hover:text-blue-500',
      delay: 'delay-300'
    }
  ];

  return (
    <footer className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              <span className="text-xl font-bold text-indigo-600">
                Portfolio AI
              </span>
              <span className="ml-2 bg-indigo-100 text-indigo-800 text-[10px] px-1.5 py-0.5 rounded-full">
                Beta
              </span>
            </div>
            <p className="text-gray-600 text-xs">
              Revolutionizing professional portfolio creation with AI-powered design and personalization.
            </p>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 mb-3 text-sm">
                  {section.section}
                </h4>
                <div className="space-y-1.5">
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className={`relative group overflow-hidden rounded-lg 
                        bg-gray-50 hover:bg-white shadow-md hover:shadow-lg 
                        transition-all duration-300 transform hover:-translate-y-1 
                        px-2 py-1.5 flex items-center
                        ${`delay-${(index + 1) * 100 + index * 50}`}`}
                    >
                      <link.icon 
                        className={`${link.color} transform group-hover:rotate-6 transition-transform mr-2`} 
                        size={16} 
                      />
                      <span className="text-gray-800 text-xs font-medium">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social and Legal Links */}
        <div className="mt-6 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-2.5 mb-3 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group overflow-hidden rounded-full 
                  bg-gray-50 hover:bg-white shadow-md hover:shadow-lg 
                  transition-all duration-300 transform hover:-translate-y-1 
                  w-8 h-8 flex items-center justify-center
                  ${social.delay}`}
              >
                <social.icon 
                  className={`${social.color} transform group-hover:rotate-6 transition-transform`} 
                  size={16} 
                />
              </a>
            ))}
          </div>
          <div className="text-xs text-gray-600 flex flex-col md:flex-row items-center space-y-1.5 md:space-y-0 md:space-x-3">
            <span>&copy; 2024 Portfolio AI. All rights reserved.</span>
            <div className="flex space-x-3">
              <Link 
                to="/privacy" 
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-indigo-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;