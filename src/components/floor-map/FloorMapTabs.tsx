import React from 'react';

interface FloorMapTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function FloorMapTabs({ activeTab, onTabChange }: FloorMapTabsProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    // { id: 'amenities', label: 'Amenities' },
    { id: 'map', label: 'Building Map' }
  ];

  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === tab.id
              ? 'text-[#15302d] border-b-2 border-[#b48c2e]'
              : 'text-gray-500 hover:text-[#15302d]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}