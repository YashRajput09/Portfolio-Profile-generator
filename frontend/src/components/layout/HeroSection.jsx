import React from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Rocket, 
  Database, 
  PenTool 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGeneratePortfolio = () => {
    navigate('/Portfolio/create');
  };

  const features = [
    {
      icon: Sparkles,
      color: 'text-blue-600',
      title: 'AI-Powered',
      description: 'Intelligent portfolio generation',
      delay: 'delay-100'
    },
    {
      icon: Rocket,
      color: 'text-green-600',
      title: 'Instant Customization',
      description: 'Professional templates at your fingertips',
      delay: 'delay-200'
    },
    {
      icon: Database,
      color: 'text-purple-600',
      title: 'Seamless Integration',
      description: 'Sync from multiple platforms',
      delay: 'delay-300'
    },
    {
      icon: PenTool,
      color: 'text-indigo-600',
      title: 'Design Flexibility',
      description: 'Customize every aspect of your portfolio',
      delay: 'delay-400'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full my-10 flex flex-col justify-center items-center 
        px-8 text-center">
        <div className="max-w-4xl w-full space-y-10">
          <div className="bg-blue-100 text-blue-800 inline-block px-4 py-2 rounded-full text-sm font-medium">
            AI Portfolio Generator
          </div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Transform Your <br />
            <span className="text-blue-600">Professional Identity</span> 
            <br /> in Seconds
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a stunning, personalized portfolio that showcases your unique 
            professional journey, skills, and achievements with our AI-powered generator.
          </p>

          <div className="pt-8">
            <button 
              onClick={handleGeneratePortfolio}
              className="group relative px-10 py-4 bg-blue-600 text-white 
                rounded-full text-lg font-semibold 
                hover:bg-blue-700 transition-all duration-300
                shadow-xl hover:shadow-2xl flex items-center justify-center 
                space-x-3 mx-auto"
            >
              <span>Generate Portfolio</span>
              <ChevronRight 
                size={24} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Innovative Feature Highlights */}
      <div className="w-full py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-xl 
                  bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:-translate-y-2 
                  ${feature.delay}`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg 
                    className="w-full h-full" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    <pattern 
                      id={`pattern-${index}`} 
                      x="0" 
                      y="0" 
                      width="20" 
                      height="20" 
                      patternUnits="userSpaceOnUse"
                    >
                      <path 
                        d="M0 0 L10 5 L20 0 L10 15 Z" 
                        fill={`url(#gradient-${index})`} 
                        fillOpacity="0.1"
                      />
                    </pattern>
                    <linearGradient 
                      id={`gradient-${index}`} 
                      x1="0%" 
                      y1="0%" 
                      x2="100%" 
                      y2="100%"
                    >
                      <stop 
                        offset="0%" 
                        stopColor={index % 2 === 0 ? '#3B82F6' : '#10B981'} 
                        stopOpacity="0.2"
                      />
                      <stop 
                        offset="100%" 
                        stopColor={index % 2 === 0 ? '#7C3AED' : '#6366F1'} 
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                    <rect 
                      width="100" 
                      height="100" 
                      fill={`url(#pattern-${index})`}
                    />
                  </svg>
                </div>

                {/* Feature Content */}
                <div className="relative p-6 z-10">
                  <div className="flex items-center mb-4 space-x-4">
                    <feature.icon 
                      className={`${feature.color} transform group-hover:rotate-12 transition-transform`} 
                      size={48} 
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 
                    opacity-0 group-hover:opacity-20 transition-opacity"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;