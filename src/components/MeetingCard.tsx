
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MeetingCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  time: string;
  currentMembers: number;
  maxMembers: number;
  tags: string[];
  rating: number;
  authorName: string;
  isUrgent?: boolean;
}

const MeetingCard = ({
  title,
  description,
  category,
  location,
  time,
  currentMembers,
  maxMembers,
  tags,
  rating,
  authorName,
  isUrgent = false
}: MeetingCardProps) => {
  const getCategoryStyle = (category: string) => {
    const styles = {
      '스포츠': 'bg-baemin-mint-light text-baemin-mint',
      '게임': 'bg-purple-100 text-purple-600',
      '독서': 'bg-green-100 text-green-600',
      '카페': 'bg-amber-100 text-amber-600',
      '음악': 'bg-pink-100 text-pink-600'
    };
    return styles[category as keyof typeof styles] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Badge className={`${getCategoryStyle(category)} font-medium`}>
              {category}
            </Badge>
            {isUrgent && (
              <Badge className="bg-red-100 text-red-600 animate-pulse">
                긴급
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-1 text-sm text-toss-gray-500">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-toss-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-toss-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Location & Time */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-toss-gray-500">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-toss-gray-50 text-toss-gray-600 text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-sm">
              <Users className="w-4 h-4 text-toss-gray-400" />
              <span className="text-toss-blue font-medium">{currentMembers}</span>
              <span className="text-toss-gray-400">/ {maxMembers}명</span>
            </div>
            <span className="text-xs text-toss-gray-400">by {authorName}</span>
          </div>
          
          <Button 
            size="sm"
            className="bg-toss-blue hover:bg-toss-blue-dark text-white font-medium px-4 py-2 rounded-lg"
          >
            참여하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
