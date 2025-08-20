import { useState } from 'react';
import Button from '../composants/Button';

// Onglets passés en props (dynamique)
export default function barreDeDefilement({ className, setTab, tabs, icons}: { className?: string; setTab: (tab: number) => void; tabs: string[]; icons?: (string[]);}) {
  return (
    <div className={className}>
      {tabs.map((name, index) => (
        <Button
          key={index}
          name={name}
          icon={icons?.[index]}
          onClick={() => setTab(index)}
          uncolor={true}/>
      ))}
    </div>
  );
}
