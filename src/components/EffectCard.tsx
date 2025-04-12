
import React from 'react';
import { Brain, Heart, Wind, Pill, Skull } from 'lucide-react';
import { Effect, bodySystems } from '@/data/substances';
import { cn } from '@/lib/utils';

interface EffectCardProps {
  effect: Effect;
  onClick: () => void;
}

const EffectCard: React.FC<EffectCardProps> = ({ effect, onClick }) => {
  const renderSystemIcon = () => {
    const system = bodySystems[effect.bodySystem];
    
    switch (system?.icon) {
      case 'heart':
        return (
          <div className="bg-health-red/10 body-system-icon">
            <Heart size={20} className="text-health-red" />
          </div>
        );
      case 'brain':
        return (
          <div className="bg-health-purple/10 body-system-icon">
            <Brain size={20} className="text-health-purple" />
          </div>
        );
      case 'lungs':
        return (
          <div className="bg-health-blue/10 body-system-icon">
            <Wind size={20} className="text-health-blue" />
          </div>
        );
      case 'bone':
        return (
          <div className="bg-health-yellow/10 body-system-icon">
            <Skull size={20} className="text-health-yellow" />
          </div>
        );
      default:
        return (
          <div className="bg-health-green/10 body-system-icon">
            <Pill size={20} className="text-health-green" />
          </div>
        );
    }
  };

  return (
    <div
      className="effect-card animate-fade-in"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        {renderSystemIcon()}
        <div>
          <h3 className="font-medium text-gray-900 mb-1">{effect.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{effect.description}</p>
          <div className="mt-2">
            <span className={cn(
              "text-xs font-medium py-1 px-2 rounded-full",
              effect.type === 'short-term' 
                ? "bg-blue-100 text-blue-700" 
                : "bg-purple-100 text-purple-700"
            )}>
              {effect.type === 'short-term' ? 'Short-term' : 'Long-term'}
            </span>
            <span className="text-xs text-gray-500 ml-2">
              {bodySystems[effect.bodySystem]?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectCard;
