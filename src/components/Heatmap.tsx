import React from 'react';
import { HeatmapData } from '../types';

interface HeatmapProps {
  data: HeatmapData[];
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const hours = ['8 h', '9 h', '12 h', '15 h', '18 h'];

  const getColor = (value: number) => {
    if (value <= 2) return 'bg-yellow-100';
    if (value <= 4) return 'bg-yellow-200';
    if (value <= 6) return 'bg-yellow-300';
    if (value <= 8) return 'bg-orange-400';
    return 'bg-orange-500';
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="grid grid-cols-[auto_repeat(6,1fr)] gap-2">
        <div className=""></div>
        {days.map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
        
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            <div className="text-right pr-2">{hour}</div>
            {days.map((day) => {
              const cellData = data.find((d) => d.day === day && d.hour === hour);
              return (
                <div
                  key={`${day}-${hour}`}
                  className={`h-8 ${getColor(cellData?.value || 0)} rounded`}
                >
                  {cellData?.value > 0 && (
                    <div className="text-center text-xs pt-2">
                      {cellData.value}
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;