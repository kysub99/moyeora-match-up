
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import MeetingCard from '@/components/MeetingCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, MapPin, Users, Zap } from 'lucide-react';

const Index = () => {
  // Sample data
  const meetings = [
    {
      id: '1',
      title: '토요일 4시 성수 풋살 3명 구해요',
      description: '초중급 수준이시면 됩니다! 재밌게 운동해요 ⚽️',
      category: '스포츠',
      location: '성수동 풋살장',
      time: '7월 6일 토요일 16:00',
      currentMembers: 5,
      maxMembers: 8,
      tags: ['풋살', '초중급', '20대환영'],
      rating: 4.8,
      authorName: '조로',
      isUrgent: true
    },
    {
      id: '2',
      title: '오늘 밤 10시 골드~플래티넘 듀오 구해요',
      description: '서폿 가능하신 분? 저는 원딜합니다 🎮',
      category: '게임',
      location: '온라인',
      time: '오늘 22:00',
      currentMembers: 1,
      maxMembers: 2,
      tags: ['롤', '듀오', '골드', '플래티넘'],
      rating: 4.6,
      authorName: '윌슨'
    },
    {
      id: '3',
      title: '강남 북카페에서 독서모임 어떠세요?',
      description: '이번 달 책은 "아몬드" 읽어요. 차 마시며 이야기해요 📚',
      category: '독서',
      location: '강남역 북카페',
      time: '7월 8일 일요일 14:00',
      currentMembers: 4,
      maxMembers: 6,
      tags: ['독서', '북카페', '아몬드', '토론'],
      rating: 4.9,
      authorName: '책벌레'
    },
    {
      id: '4',
      title: '홍대 클럽에서 농구 같이 하실 분!',
      description: '실력 상관없어요. 재밌게 즐기는 게 목표입니다 🏀',
      category: '스포츠',
      location: '홍대 농구장',
      time: '7월 7일 일요일 18:00',
      currentMembers: 6,
      maxMembers: 10,
      tags: ['농구', '홍대', '초보환영', '재미위주'],
      rating: 4.7,
      authorName: '농구왕'
    },
    {
      id: '5',
      title: '이태원 재즈바에서 음악 감상회',
      description: '좋은 음악과 분위기에서 이야기 나눠요 🎵',
      category: '음악',
      location: '이태원 재즈바',
      time: '7월 9일 금요일 19:30',
      currentMembers: 3,
      maxMembers: 5,
      tags: ['재즈', '음악감상', '이태원', '감성'],
      rating: 4.8,
      authorName: '멜로디'
    },
    {
      id: '6',
      title: '성북동 카페에서 보드게임 하실 분',
      description: '다양한 보드게임 준비되어 있어요! 초보자도 환영 🎲',
      category: '카페',
      location: '성북동 보드게임카페',
      time: '7월 6일 토요일 15:00',
      currentMembers: 2,
      maxMembers: 4,
      tags: ['보드게임', '카페', '초보환영', '재미'],
      rating: 4.5,
      authorName: '게임러버'
    }
  ];

  const stats = [
    { icon: Users, label: '총 회원수', value: '12,487명', color: 'text-baemin-mint' },
    { icon: TrendingUp, label: '이달의 모임', value: '1,248개', color: 'text-baemin-orange' },
    { icon: MapPin, label: '활동 지역', value: '25개 지역', color: 'text-purple-600' },
    { icon: Zap, label: '성사율', value: '94.2%', color: 'text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-toss-gray-50">
      <Header />
      <CategoryFilter />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            취미 활동, 혼자 하지 마세요
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            지역 기반으로 관심사를 공유하는 사람들과 빠르게 연결되세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-white text-toss-blue hover:bg-gray-50 font-semibold px-8 py-3">
              지금 시작하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              모임 둘러보기
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-toss-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-toss-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Meetings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-toss-gray-900 mb-2">🔥 지금 핫한 모임</h2>
              <p className="text-toss-gray-600">곧 시작되는 인기 모임들을 확인해보세요</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              전체 보기
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings.map((meeting, index) => (
              <div 
                key={meeting.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MeetingCard {...meeting} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 font-medium px-8 py-3"
            >
              더 많은 모임 보기
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-toss-gray-900 mb-4">
            나만의 모임을 만들어보세요
          </h2>
          <p className="text-lg text-toss-gray-600 mb-8 max-w-2xl mx-auto">
            원하는 시간과 장소에서 관심사를 공유하는 사람들과 함께할 수 있습니다
          </p>
          <Button 
            size="lg" 
            className="gradient-bg text-white hover:opacity-90 font-medium px-8 py-3"
          >
            모임 만들기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-toss-gray-900 text-white py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">모</span>
                </div>
                <span className="text-xl font-bold">모여라잇</span>
              </div>
              <p className="text-gray-400 mb-4">
                지역 기반 취미 활동 매칭 서비스<br />
                취미를 통해 새로운 인연을 만들어보세요
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  서울시 인증 서비스
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>모임 만들기</li>
                <li>모임 참여하기</li>
                <li>매너 평가</li>
                <li>이용 가이드</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">고객지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li>공지사항</li>
                <li>FAQ</li>
                <li>고객센터</li>
                <li>신고하기</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 모여라잇. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
