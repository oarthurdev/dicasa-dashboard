import React from 'react';
import { Broker } from '../types';
import { Trophy, Target, ThumbsUp } from 'lucide-react';

interface RankingListProps {
  brokers: Broker[];
}

const RankingList: React.FC<RankingListProps> = ({ brokers }) => {
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'trophy':
        return <Trophy size={16} className="text-white" />;
      case 'target':
        return <Target size={16} className="text-white" />;
      case 'thumbsUp':
        return <ThumbsUp size={16} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      {brokers.map((broker, index) => (
        <div
          key={broker.id}
          className={`flex items-center p-3 rounded-lg ${
            index === 0 ? 'bg-orange-500' : 'bg-yellow-400'
          } text-white`}
        >
          <span className="text-2xl font-bold w-12">{index + 1}</span>
          <img
            src={broker.avatar}
            alt={broker.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 flex-grow text-xl">{broker.name}</span>
          <div className="flex items-center space-x-2">
            {broker.badges.map((badge, badgeIndex) => (
              <div key={badgeIndex} className="p-1">
                {getBadgeIcon(badge)}
              </div>
            ))}
            <span className="text-xl font-bold">{broker.points}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;