import React, { useState } from 'react';
import { 
 User, 
 Edit, 
 LogOut, 
 Plus, 
 Grid, 
 FileText, 
 Settings, 
 Layers, 
 Globe, 
 Lock 
} from 'lucide-react';

const Dashboard = () => {
 const [activeTab, setActiveTab] = useState('portfolios');
 const [user, setUser] = useState({
 name: 'Alex Rodriguez',
 email: 'alex.rodriguez@portfolioai.com',
 role: 'Software Engineer',
 profilePicture: '/api/placeholder/200/200',
 joinedDate: 'March 2024'
 });

 const [portfolios, setPortfolios] = useState([
 {
 id: 1,
 title: 'Web Development Portfolio',
 type: 'Professional',
 status: 'published',
 technologies: ['React', 'Node.js', 'Tailwind'],
 completionRate: 85
 },
 {
 id: 2,
 title: 'Design Portfolio',
 type: 'Creative',
 status: 'draft',
 technologies: ['Figma', 'Adobe XD'],
 completionRate: 45
 }
 ]);

 const renderSidebar = () => {
 const tabs = [
 { 
 id: 'portfolios', 
 icon: Grid, 
 label: 'My Portfolios' 
 },
 { 
 id: 'profile', 
 icon: User, 
 label: 'Profile' 
 },
 { 
 id: 'settings', 
 icon: Settings, 
 label: 'Settings' 
 }
 ];

 const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/dashboard/${tabId}`);
};

 return (
 <div className="bg-white border-r border-gray-200 p-4">
 <div className="flex items-center mb-8">
 <img 
 src={user.profilePicture} 
 alt={user.name} 
 className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-blue-100"
 />
 <div>
 <h2 className="text-sm font-semibold text-gray-800">{user.name}</h2>
 <p className="text-xs text-gray-500">{user.role}</p>
 </div>
 </div>

 <nav className="space-y-2">
 {tabs.map((tab) => (
 <button
 key={tab.id}
 onClick={() => handleTabClick(tab.id)}
 className={`w-full flex items-center px-3 py-2 rounded-lg transition-all 
 ${activeTab === tab.id 
 ? '!bg-indigo-500 text-White' 
 : '!bg-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800'}`}
 >
 <tab.icon className="mr-3" size={18} />
 <span className="text-sm">{tab.label}</span>
 </button>
 ))}

 <div className="pt-4 mt-4 border-t border-gray-200">
 <button 
 className="w-full flex !bg-gray-200 items-center px-3 py-2 rounded-lg 
 text-red-400 !hover:border-red-900 transition-all"
 >
 <LogOut className="mr-3" size={18} />
 <span className="text-sm">Logout</span>
 </button>
 </div>
 </nav>
 </div>
 );
 };

 const renderPortfolioContent = () => {
 return (
 <div className="p-6">
 <div className="flex justify-between items-center mb-6">
 <h1 className="!text-3xl font-semi-bold text-gray-800">My Portfolios</h1>
 <button 
 className="flex items-center !bg-indigo-500 text-white 
 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
 >
 <Plus className="mr-2" size={16} />
 Create Portfolio
 </button>
 </div>

 <div className="grid md:grid-cols-2 gap-4">
 {portfolios.map((portfolio, index) => (
 <div 
 key={index} 
 className="bg-white border border-gray-200 rounded-lg p-4 
 hover:shadow-md transition-shadow"
 >
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-sm font-semibold text-gray-800">
 {portfolio.title}
 </h3>
 <span 
 className={`text-xs px-2 py-1 rounded-full 
 ${portfolio.status === 'published' 
 ? 'bg-green-100 text-green-700' 
 : 'bg-yellow-100 text-yellow-700'}`}
 >
 {portfolio.status === 'published' ? 'Published' : 'Draft'}
 </span>
 </div>

 <div className="flex items-center justify-between mb-4">
 <div className="flex space-x-2">
 {portfolio.technologies.map((tech, index) => (
 <span 
 key={index} 
 className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
 >
 {tech}
 </span>
 ))}
 </div>
 <div className="text-sm text-gray-500">
 {portfolio.type}
 </div>
 </div>

 <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
 <div 
 className="bg-blue-600 h-2 rounded-full" 
 style={{width: `${portfolio.completionRate}%`}}
 />
 </div>
 <div className="flex justify-between text-xs text-gray-500">
 <span>Completion</span>
 <span>{portfolio.completionRate}%</span>
 </div>

 <div className="flex space-x-2 mt-4">
 <button 
 className="flex-1 !bg-blue-50 !text-blue-600 
 py-2 rounded-lg text-xs hover:bg-blue-100 transition-colors"
 >
 <Edit className="mr-2 inline" size={14} />
 Edit
 </button>
 <button 
 className="flex-1 !bg-gray-200 !text-gray-600 
 py-2 rounded-lg text-xs "
 >
 {portfolio.status === 'published' ? <Lock size={14} className="mr-2 inline" /> : <Globe size={14} className="mr-2 inline" />}
 {portfolio.status === 'published' ? 'Unpublish' : 'Publish'}
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
 };

 return (
 <div className="flex min-h-screen bg-gray-100">
 <div className="w-64 bg-white border-r border-gray-200">
 {renderSidebar()}
 </div>
 <div className="flex-1">
 <div className="bg-white border-b border-gray-200 px-6 py-4">
 <h1 className="!text-3xl font-bold text-gray-800">Dashboard</h1>
 </div>
 {activeTab === 'portfolios' && renderPortfolioContent()}
 </div>
 </div>
 );
};

export default Dashboard;