import React from 'react';
import { FunnelData } from '../types';

interface FunnelProps {
  data: FunnelData[];
}

const Funnel: React.FC<FunnelProps> = ({ data }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-center">Funil de Conversão</h2>
      <div className="relative w-full max-w-md mx-auto">
        {data.map((item, index) => {
          const width = 100 - (index * 20);
          return (
            <div
              key={item.name}
              className="relative mb-2"
              style={{ width: `${width}%`, marginLeft: `${(100-width)/2}%` }}
            >
              <div
                className={`h-12 flex items-center justify-between px-4 text-white ${
                  index === 0 ? 'bg-blue-600' :
                  index === 1 ? 'bg-blue-500' :
                  'bg-yellow-400'
                }`}
              >
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Funnel;