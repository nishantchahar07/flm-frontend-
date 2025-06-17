'use client'

import React, { useState } from 'react';
import { Search, Filter, Plus, Info, Eye, Users, Edit, Clock } from 'lucide-react';

// Types
interface Course {
  id: string;
  title: string;
  subtitle: string;
  courseCount: number;
  lastUpdated: string;
  technologies: Technology[];
  instructor: Instructor;
  stats: CourseStats;
}

interface Technology {
  name: string;
  color: string;
  textColor: string;
}

interface Instructor {
  name: string;
  avatar: string;
}

interface CourseStats {
  info: number;
  views: number;
  users: number;
  edits: number;
}

// Header Component
const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Courses by title or tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            New Package
          </button>
        </div>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Course Header with Background */}
      <div className="relative bg-gradient-to-r from-black to-gray-800 h-40 flex items-center justify-between p-6">
        {/* Share Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
            Share
          </span>
        </div>
        
        {/* Course Title */}
        <div className="text-white">
          <h2 className="text-2xl font-bold leading-tight">
            BUILD<br />
            <span className="text-yellow-400">REST API</span>
          </h2>
        </div>
        
        {/* Instructor Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-16 h-16 rounded-full border-3 border-white object-cover"
          />
        </div>
        
        {/* Technology Badges */}
        <div className="absolute bottom-4 left-6 flex items-center gap-2">
          {course.technologies.map((tech, index) => (
            <div 
              key={index}
              className={`w-8 h-8 ${tech.color} rounded-md flex items-center justify-center`}
            >
              <span className={`text-xs font-bold ${tech.textColor}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {course.subtitle}
        </p>
        
        {/* Course Meta */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-blue-600">
            <span className="text-sm font-medium">● {course.courseCount} Courses</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{course.lastUpdated}</span>
          </div>
        </div>
        
        {/* Action Icons */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Info className="w-4 h-4 text-gray-600" />
          </button>
          
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Users className="w-4 h-4 text-gray-600" />
          </button>
          
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Content Area Component
const MainContent: React.FC = () => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Complete Backend Development:',
      subtitle: 'Zero to Hero',
      courseCount: 3,
      lastUpdated: '11 months ago',
      technologies: [
        { name: 'JS', color: 'bg-green-600', textColor: 'text-white' },
        { name: 'M', color: 'bg-green-500', textColor: 'text-white' }
      ],
      instructor: {
        name: 'Krishna Kumar',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b192?w=80&h=80&fit=crop&crop=face'
      },
      stats: {
        info: 0,
        views: 0,
        users: 0,
        edits: 0
      }
    }
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <Header />
      
      {/* Content Area */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {/* Empty State */}
        {courses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Dashboard Component (excluding sidebar)
const CourseDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar space - your existing sidebar component goes here */}
        <div className="w-64 bg-gray-900 text-white">
          {/* Your sidebar component will be placed here */}
        </div>
        
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default CourseDashboard;