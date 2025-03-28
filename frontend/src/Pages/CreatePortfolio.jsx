import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Link, 
  Layout,
  ChevronRight
} from 'lucide-react';

const CreatePortfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    biodata: '',
    skills: '',
    projects: '',
    socialLinks: '',
    template: 'modern'
  });

  const templates = [
    {
      name: 'Modern',
      value: 'modern',
      description: 'Sleek design',
      color: 'text-blue-600'
    },
    {
      name: 'Classic',
      value: 'classic',
      description: 'Timeless layout',
      color: 'text-green-600'
    },
    {
      name: 'Minimal',
      value: 'minimal',
      description: 'Simple style',
      color: 'text-purple-600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Portfolio Generation Data:', formData);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <FileText className="mr-3 text-blue-600" size={28} />
            Create Your Portfolio
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Professional Email"
                      className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Professional Bio
                </label>
                <textarea
                  name="biodata"
                  value={formData.biodata}
                  onChange={handleInputChange}
                  placeholder="Brief summary"
                  className="w-full px-3 py-2 text-sm border border-gray-300 
                  rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
                  resize-none"
                  rows="3"
                  required
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Skills
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Key skills"
                  className="w-full px-3 py-2 text-sm border border-gray-300 
                  rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
                  resize-none"
                  rows="3"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Projects */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Projects
                </label>
                <textarea
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  placeholder="Project highlights"
                  className="w-full px-3 py-2 text-sm border border-gray-300 
                  rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
                  resize-none"
                  rows="4"
                  required
                />
              </div>

              {/* Social Links */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Social Links
                </label>
                <div className="relative">
                  <Link className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    name="socialLinks"
                    value={formData.socialLinks}
                    onChange={handleInputChange}
                    placeholder="LinkedIn, GitHub"
                    className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 
                    rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Choose Template
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {templates.map((template) => (
                    <div 
                      key={template.value}
                      onClick={() => setFormData(prev => ({...prev, template: template.value}))}
                      className={`
                        cursor-pointer border rounded-lg p-2 text-center
                        transition-all duration-300 group
                        ${formData.template === template.value 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'}
                      `}
                    >
                      <div className={`${template.color} mb-1 flex justify-center`}>
                        <Layout size={24} />
                      </div>
                      <h3 className="text-xs font-semibold text-gray-800">{template.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-4">
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white 
              rounded-full text-sm font-semibold 
              hover:bg-blue-700 transition-all duration-300
              flex items-center justify-center 
              space-x-2"
            >
              <span>Generate Portfolio</span>
              <ChevronRight 
                size={20} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolio;