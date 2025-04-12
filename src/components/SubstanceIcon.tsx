
import React from 'react';
import { Beer, Brain, Cannabis, Cigarette, Coffee, Pill, Candy, Soup } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SubstanceIconProps {
  icon: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const SubstanceIcon: React.FC<SubstanceIconProps> = ({ icon, name, isActive, onClick }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'coffee':
        return <Coffee size={24} />;
      case 'beer':
        return <Beer size={24} />;
      case 'cigarette':
        return <Cigarette size={24} />;
      case 'cannabis':
        return <Cannabis size={24} />;
      case 'pill':
        return <Pill size={24} />;
      case 'candy':
        return <Candy size={24} />;
      case 'soup':
        return <Soup size={24} />;
      default:
        return <Pill size={24} />;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              'substance-icon',
              isActive ? 'active' : ''
            )}
          >
            <div className="mb-2">{renderIcon()}</div>
            <span className="text-sm font-medium">{name}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
