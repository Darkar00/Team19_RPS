
import React from 'react';
import { SubstanceIcon } from './SubstanceIcon';
import { Substance } from '@/data/substances';

interface SidebarProps {
  substances: Substance[];
  activeSubstance: Substance;
  onSubstanceChange: (substance: Substance) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  substances,
  activeSubstance,
  onSubstanceChange,
}) => {
  return (
    <div className="bg-sidebar h-full min-h-screen w-24 sm:w-28 flex flex-col items-center p-4 gap-6 border-r border-health-light-purple">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-health-dark-purple text-xs font-semibold mb-1">HEALTH</h2>
        <h2 className="text-health-purple text-xs font-semibold">EXPLORER</h2>
      </div>
      <div className="flex flex-col gap-4">
        {substances.map((substance) => (
          <SubstanceIcon
            key={substance.id}
            icon={substance.icon}
            name={substance.name}
            isActive={activeSubstance.id === substance.id}
            onClick={() => onSubstanceChange(substance)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
