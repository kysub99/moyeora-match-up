
import { Search, Bell, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">모</span>
              </div>
              <span className="text-xl font-bold text-toss-gray-900">모여라잇</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-toss-gray-400 w-4 h-4" />
              <Input 
                placeholder="찾고 싶은 활동을 검색해보세요"
                className="pl-10 bg-toss-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-toss-blue/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden md:flex items-center space-x-2 text-toss-gray-600 hover:text-toss-blue hover:bg-toss-blue-light"
            >
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button 
              className="gradient-bg text-white hover:opacity-90 font-medium px-4 py-2 rounded-xl"
            >
              <Plus className="w-4 h-4 mr-2" />
              모임 만들기
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-toss-gray-600 hover:text-toss-blue hover:bg-toss-blue-light p-2"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
