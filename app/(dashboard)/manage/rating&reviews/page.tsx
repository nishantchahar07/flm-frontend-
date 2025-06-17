import React, { useState } from 'react';
import { Search, Filter, Share2, Star, Users, Clock, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  shareCount: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  duration: string;
  badge?: string;
  hasRatingsToggle: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

const CourseDashboardMain: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [ratingsEnabled, setRatingsEnabled] = useState<{ [key: string]: boolean }>({
    'course-1': true
  });

  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'Resume to Interview Preparation:',
      subtitle: 'Free 5 Day Bootcamp',
      image: '/api/placeholder/300/200',
      shareCount: 55,
      rating: 4.8,
      reviewsCount: 234,
      studentsCount: 1250,
      duration: '5 days',
      badge: 'FREE',
      hasRatingsToggle: true
    },
    {
      id: 'course-2',
      title: 'Full Stack Web Development',
      subtitle: 'Complete MERN Stack Course',
      image: '/api/placeholder/300/200',
      shareCount: 89,
      rating: 4.9,
      reviewsCount: 456,
      studentsCount: 2340,
      duration: '12 weeks',
      badge: 'PREMIUM',
      hasRatingsToggle: false
    },
    {
      id: 'course-3',
      title: 'Data Science & Analytics',
      subtitle: 'Python for Data Analysis',
      image: '/api/placeholder/300/200',
      shareCount: 67,
      rating: 4.7,
      reviewsCount: 189,
      studentsCount: 890,
      duration: '8 weeks',
      hasRatingsToggle: false
    }
  ];

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Courses', count: 25 },
    { id: 'free', label: 'Free Courses', count: 8 },
    { id: 'premium', label: 'Premium Courses', count: 17 },
    { id: 'bootcamp', label: 'Bootcamps', count: 5 },
    { id: 'live', label: 'Live Classes', count: 12 }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const toggleRatings = (courseId: string): void => {
    setRatingsEnabled(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Course Image */}
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">RESUME TO INTERVIEW</div>
            <div className="text-lg font-semibold">PREPARATION: FREE</div>
            <div className="text-sm mt-1">5-DAY BOOTCAMP</div>
            <div className="mt-4 bg-orange-500 text-white px-3 py-1 rounded text-sm inline-block">
              REGISTER NOW
            </div>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded px-2 py-1">
            <Share2 className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">{course.shareCount}</span>
          </div>
          {course.badge && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
              Share {course.badge}
            </div>
          )}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{course.subtitle}</p>

        {/* Ratings & Reviews Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Ratings & Reviews</span>
            {course.hasRatingsToggle && (
              <button
                onClick={() => toggleRatings(course.id)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  ratingsEnabled[course.id] ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    ratingsEnabled[course.id] ? 'translate-x-4' : 'translate-x-0.5'
                  }`}
                />
              </button>
            )}
          </div>
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-900">{course.rating}</span>
              <span>({course.reviewsCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.studentsCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Courses by title or tags"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  className="flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">{option.label}</span>
                  {option.count && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {option.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Course Grid */}
      <div className="px-6 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Courses</h2>
          <p className="text-gray-600">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500 text-center">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDashboardMain;