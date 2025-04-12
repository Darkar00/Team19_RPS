
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultSubstance, substances, Effect } from '@/data/substances';
import Sidebar from '@/components/Sidebar';
import EffectsGrid from '@/components/EffectsGrid';
import InfoModal from '@/components/InfoModal';
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const [activeSubstance, setActiveSubstance] = useState(defaultSubstance);
  const [selectedEffect, setSelectedEffect] = useState<Effect | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubstanceChange = (substance: typeof activeSubstance) => {
    setActiveSubstance(substance);
    toast({
      title: `Selected: ${substance.name}`,
      description: `Showing health effects of ${substance.name}`,
      duration: 2000,
    });
  };

  const handleEffectClick = (effect: Effect) => {
    setSelectedEffect(effect);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row min-h-screen bg-background">
      <Sidebar
        substances={substances}
        activeSubstance={activeSubstance}
        onSubstanceChange={handleSubstanceChange}
      />
      <main className="flex-grow overflow-auto">
        <div className="flex justify-end p-4">
          <Link 
            to="/citations" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            Sources & Citations
            <ExternalLink size={16} className="ml-1" />
          </Link>
        </div>
        <EffectsGrid
          substance={activeSubstance}
          onEffectClick={handleEffectClick}
        />
      </main>
      <InfoModal
        effect={selectedEffect}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
