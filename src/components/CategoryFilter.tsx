
import { Users, Gamepad2, Book, Coffee, Music, Camera, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const categories = [
  { id: 'all', name: '전체', icon: null, color: 'bg-toss-gray-100 text-toss-gray-700' },
  { id: 'sports', name: '스포츠', icon: Users, color: 'bg-baemin-mint-light text-baemin-mint' },
  { id: 'basketball', name: '농구', icon: Users, color: 'bg-baemin-orange-light text-baemin-orange' },
  { id: 'game', name: '게임', icon: Gamepad2, color: 'bg-purple-100 text-purple-600' },
  { id: 'book', name: '독서', icon: Book, color: 'bg-green-100 text-green-600' },
  { id: 'cafe', name: '카페', icon: Coffee, color: 'bg-amber-100 text-amber-600' },
  { id: 'music', name: '음악', icon: Music, color: 'bg-pink-100 text-pink-600' },
  { id: 'photo', name: '사진', icon: Camera, color: 'bg-blue-100 text-blue-600' },
  { id: 'cycling', name: '자전거', icon: Bike, color: 'bg-teal-100 text-teal-600' },
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-white py-4 border-b border-gray-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200
                  ${isSelected 
                    ? 'bg-toss-blue text-white shadow-sm' 
                    : `${category.color} hover:scale-105`
                  }
                `}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span className="font-medium">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
