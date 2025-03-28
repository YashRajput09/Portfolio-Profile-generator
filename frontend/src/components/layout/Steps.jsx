import React from 'react';
import { 
  FileText, 
  Layout, 
  Check 
} from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: FileText,
      color: 'text-blue-600',
      title: 'Enter Your Info',
      description: 'Provide your professional details, skills, and achievements',
      delay: 'delay-100'
    },
    {
      icon: Layout,
      color: 'text-green-600',
      title: 'Choose Template',
      description: 'Select from our AI-curated professional portfolio designs',
      delay: 'delay-200'
    },
    {
      icon: Check,
      color: 'text-purple-600',
      title: 'Portfolio Ready',
      description: 'Instantly generate a stunning, personalized portfolio',
      delay: 'delay-300'
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating your professional portfolio has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-xl 
                bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-2 
                ${step.delay}`}
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

              {/* Step Content */}
              <div className="relative p-6 z-10">
                <div className="flex items-center mb-4 space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                    <step.icon 
                      className={`${step.color} transform group-hover:rotate-12 transition-transform`} 
                      size={40} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base">
                  {step.description}
                </p>
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-blue-100 opacity-50">
                0{index + 1}
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
  );
};

export default StepsSection;