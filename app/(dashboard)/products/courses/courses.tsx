'use client'
import { Eye, Users, Edit3, Info } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  duration: string;
  isNew?: boolean;
}

interface MainContentProps {
  courses?: Course[];
}

const MainContent: React.FC<MainContentProps> = ({ 
  courses = [
    {
      id: '1',
      title: 'Resume to Interview Preparation: Free 5 Day Bootcamp',
      instructor: 'Usha Mallapudi',
      instructorAvatar: '/api/placeholder/32/32',
      thumbnail: '/api/placeholder/400/200',
      duration: '11 months ago'
    },
    {
      id: '2',
      title: 'Resume to Interview Preparation: Free 5 Day Bootcamp',
      instructor: 'Usha Mallapudi',
      instructorAvatar: '/api/placeholder/32/32',
      thumbnail: '/api/placeholder/400/200',
      duration: '11 months ago'
    },
    {
      id: '3',
      title: 'How to become a YouTuber',
      instructor: 'Usha Mallapudi',
      instructorAvatar: '/api/placeholder/32/32',
      thumbnail: '/api/placeholder/400/200',
      duration: '11 months ago',
      isNew: true
    },
    {
      id: '4',
      title: 'Resume to Interview Preparation: Free 5 Day Bootcamp',
      instructor: 'Usha Mallapudi',
      instructorAvatar: '/api/placeholder/32/32',
      thumbnail: '/api/placeholder/400/200',
      duration: '11 months ago'
    }
  ]
}) => {
  const handleCourseAction = (courseId: string, action: 'view' | 'share' | 'edit' | 'info') => {
    console.log(`${action} course:`, courseId);
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Your Courses
          </h1>
          <p className="text-gray-600">
            Manage and view your course content
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onAction={handleCourseAction}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

interface CourseCardProps {
  course: Course;
  onAction: (courseId: string, action: 'view' | 'share' | 'edit' | 'info') => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onAction }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Course Thumbnail */}
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h3 className="font-bold text-lg mb-2">
              {course.title.includes('Resume') ? 'RESUME TO INTERVIEW PREPARATION' : 
               course.title.includes('YouTuber') ? 'HOW TO BECOME A YOUTUBER' : course.title.toUpperCase()}
            </h3>
            {course.title.includes('Bootcamp') && (
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm font-medium">
                FREE
              </span>
            )}
            {course.title.includes('YouTuber') && (
              <span className="bg-orange-400 text-orange-900 px-2 py-1 rounded text-sm font-medium">
                NEW
              </span>
            )}
          </div>
        </div>
        {course.isNew && (
          <div className="absolute top-2 right-2">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              NEW
            </span>
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-3 line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor Info */}
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
            <span className="text-sm font-medium text-gray-600">
              {course.instructor.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-700 font-medium">{course.instructor}</p>
            <p className="text-xs text-gray-500">{course.duration}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex space-x-2">
            <ActionButton
              icon={Info}
              onClick={() => onAction(course.id, 'info')}
              tooltip="Course Info"
            />
            <ActionButton
              icon={Eye}
              onClick={() => onAction(course.id, 'view')}
              tooltip="View Course"
            />
            <ActionButton
              icon={Users}
              onClick={() => onAction(course.id, 'share')}
              tooltip="Share Course"
            />
            <ActionButton
              icon={Edit3}
              onClick={() => onAction(course.id, 'edit')}
              tooltip="Edit Course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ElementType;
  onClick: () => void;
  tooltip: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, onClick, tooltip }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-150"
      title={tooltip}
    >
      <Icon size={16} />
    </button>
  );
};

export default MainContent;