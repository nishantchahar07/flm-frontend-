import React, { useState } from 'react';
import { Info, Grid3X3, Users, TrendingUp, Edit3, Settings, HelpCircle, BookOpen, User } from 'lucide-react';

interface CourseData {
  packageTitle: string;
  courseTags: string;
  packageDescription: string;
  whatYouLearn: string;
}

interface TabData {
  id: string;
  label: string;
  active: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-gray-700 text-white' 
        : 'text-gray-400 hover:text-white hover:bg-gray-700'
    }`}
  >
    <div className="w-5 h-5 flex-shrink-0">{icon}</div>
    {label && <span className="text-sm font-medium">{label}</span>}
  </button>
);

const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('main');

  const navigationItems: NavigationItem[] = [
    { id: 'main', icon: <Grid3X3 className="w-5 h-5" />, label: 'MAIN', active: activeNav === 'main' },
    { id: 'users', icon: <Users className="w-5 h-5" />, label: '', active: false },
    { id: 'trends', icon: <TrendingUp className="w-5 h-5" />, label: '', active: false },
    { id: 'edit', icon: <Edit3 className="w-5 h-5" />, label: '', active: false },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-screen">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-300" />
          </div>
          <div className="text-sm text-gray-300">User Profile</div>
        </div>
      </div>

      {/* Course Header */}
      <div className="px-4 py-3 border-b border-gray-700">
        <div className="bg-yellow-500 text-black px-3 py-2 rounded-lg">
          <div className="font-bold text-lg">BUILD</div>
          <div className="font-bold text-lg">FAST API</div>
          <div className="text-xs mt-1 opacity-75">Complete Backend Development</div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
          <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white font-bold">JS</div>
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <BookOpen className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={item.active}
              onClick={() => setActiveNav(item.id)}
            />
          ))}
        </div>

        {/* Course Sections */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-2 text-blue-400">
            <Info className="w-4 h-4" />
            <span className="text-sm">Package Information</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Settings className="w-4 h-4" />
            <span className="text-sm">Package Builder</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Complete Logs</span>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-gray-700">
        <div className="space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">SETTINGS</div>
          <SidebarItem icon={<Settings className="w-5 h-5" />} />
          <SidebarItem icon={<HelpCircle className="w-5 h-5" />} />
          <SidebarItem icon={<BookOpen className="w-5 h-5" />} />
        </div>
      </div>
    </div>
  );
};

const CourseInformationMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('details');
  const [courseData, setCourseData] = useState<CourseData>({
    packageTitle: 'Complete Backend Development: Zero to Hero',
    courseTags: '',
    packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    whatYouLearn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  });

  const tabs: TabData[] = [
    { id: 'details', label: 'Course Details', active: activeTab === 'details' },
    { id: 'pricing', label: 'Pricing', active: activeTab === 'pricing' },
    { id: 'advanced', label: 'Advanced', active: activeTab === 'advanced' }
  ];

  const handleInputChange = (field: keyof CourseData, value: string): void => {
    setCourseData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  const renderTextEditor = (value: string, placeholder: string, onChange: (value: string) => void) => (
    <div className="border border-gray-300 rounded-md">
      <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-200 bg-gray-50">
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded text-sm font-bold">B</button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded text-sm italic">I</button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded text-sm underline">U</button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded text-sm line-through">S</button>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded">
          <div className="w-4 h-3 border-l-2 border-b-2 border-gray-600"></div>
        </button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded">
          <div className="w-4 h-3 border-l-2 border-b-2 border-t-2 border-gray-600"></div>
        </button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded">
          <div className="w-4 h-3 border-2 border-gray-600"></div>
        </button>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded">
          <div className="flex gap-px">
            <div className="w-1 h-3 bg-gray-600"></div>
            <div className="w-1 h-3 bg-gray-600"></div>
            <div className="w-1 h-3 bg-gray-600"></div>
          </div>
        </button>
        <button type="button" className="p-1 text-gray-600 hover:bg-gray-200 rounded">
          <div className="flex gap-px">
            <div className="w-1 h-1 bg-gray-600"></div>
            <div className="w-1 h-2 bg-gray-600"></div>
            <div className="w-1 h-3 bg-gray-600"></div>
          </div>
        </button>
        <div className="ml-auto flex items-center gap-2">
          <select className="text-sm border-none bg-transparent text-gray-600">
            <option>11</option>
          </select>
          <button type="button" className="text-gray-600 hover:bg-gray-200 rounded px-1">+</button>
        </div>
      </div>
      <textarea
        className="w-full p-3 min-h-[120px] resize-none focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 bg-white">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Course Information</h1>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  tab.active
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {activeTab === 'details' && (
            <div className="space-y-6">
              {/* Package Details Header */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Package Details</h2>
                <p className="text-gray-600 text-sm">All the details that are visible to learners before they Purchase</p>
              </div>

              {/* Package Title */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Package Title
                </label>
                <input
                  type="text"
                  value={courseData.packageTitle}
                  onChange={(e) => handleInputChange('packageTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Course Tags */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course tags(Optional)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={courseData.courseTags}
                    onChange={(e) => handleInputChange('courseTags', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <div className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-md">
                    <span className="text-sm text-gray-600">Limited Seats</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Package Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Package Description/About Package
                </label>
                {renderTextEditor(
                  courseData.packageDescription,
                  'Enter package description...',
                  (value) => handleInputChange('packageDescription', value)
                )}
              </div>

              {/* What You'll Learn */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  What you'll learn
                </label>
                {renderTextEditor(
                  courseData.whatYouLearn,
                  'Enter what students will learn...',
                  (value) => handleInputChange('whatYouLearn', value)
                )}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pricing Configuration</h3>
                <p className="text-gray-500">Set up your course pricing options here</p>
              </div>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Settings</h3>
                <p className="text-gray-500">Configure advanced course settings</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInformationMain;