
import React from 'react';
import { Effect, Substance } from '@/data/substances';
import EffectCard from './EffectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EffectsGridProps {
  substance: Substance;
  onEffectClick: (effect: Effect) => void;
}

const EffectsGrid: React.FC<EffectsGridProps> = ({ substance, onEffectClick }) => {
  const shortTermEffects = substance.effects.filter(effect => effect.type === 'short-term');
  const longTermEffects = substance.effects.filter(effect => effect.type === 'long-term');

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{substance.name}</h1>
        <p className="text-gray-600">{substance.description}</p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="all">All Effects</TabsTrigger>
          <TabsTrigger value="short-term">Short-Term</TabsTrigger>
          <TabsTrigger value="long-term">Long-Term</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {substance.effects.map((effect) => (
              <EffectCard 
                key={effect.id} 
                effect={effect} 
                onClick={() => onEffectClick(effect)} 
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="short-term" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {shortTermEffects.map((effect) => (
              <EffectCard 
                key={effect.id} 
                effect={effect} 
                onClick={() => onEffectClick(effect)} 
              />
            ))}
            {shortTermEffects.length === 0 && (
              <p className="text-center text-gray-500 py-8">No short-term effects listed for this substance.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="long-term" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {longTermEffects.map((effect) => (
              <EffectCard 
                key={effect.id} 
                effect={effect} 
                onClick={() => onEffectClick(effect)} 
              />
            ))}
            {longTermEffects.length === 0 && (
              <p className="text-center text-gray-500 py-8">No long-term effects listed for this substance.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EffectsGrid;
