
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Effect, bodySystems } from '@/data/substances';
import { Brain, Heart, Wind, Pill, Skull } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoModalProps {
  effect: Effect | null;
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ effect, isOpen, onClose }) => {
  if (!effect) {
    return null;
  }

  const renderSystemIcon = () => {
    const system = bodySystems[effect.bodySystem];
    
    switch (system?.icon) {
      case 'heart':
        return (
          <div className="bg-health-red/10 p-4 rounded-full">
            <Heart size={32} className="text-health-red" />
          </div>
        );
      case 'brain':
        return (
          <div className="bg-health-purple/10 p-4 rounded-full">
            <Brain size={32} className="text-health-purple" />
          </div>
        );
      case 'lungs':
        return (
          <div className="bg-health-blue/10 p-4 rounded-full">
            <Wind size={32} className="text-health-blue" />
          </div>
        );
      case 'bone':
        return (
          <div className="bg-health-yellow/10 p-4 rounded-full">
            <Skull size={32} className="text-health-yellow" />
          </div>
        );
      default:
        return (
          <div className="bg-health-green/10 p-4 rounded-full">
            <Pill size={32} className="text-health-green" />
          </div>
        );
    }
  };

  const systemName = bodySystems[effect.bodySystem]?.name || 'Body System';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {renderSystemIcon()}
            <div>
              <DialogTitle>{effect.title}</DialogTitle>
              <DialogDescription className="mt-1">
                {systemName} • {effect.type === 'short-term' ? 'Short-term effect' : 'Long-term effect'}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="mt-2">
          <p className="text-gray-700">{effect.description}</p>
        </div>
        <div className="mt-4">
          <span className={cn(
            "text-xs font-medium py-1 px-3 rounded-full",
            effect.type === 'short-term' 
              ? "bg-blue-100 text-blue-700" 
              : "bg-purple-100 text-purple-700"
          )}>
            {effect.type === 'short-term' ? 'Short-term' : 'Long-term'}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
