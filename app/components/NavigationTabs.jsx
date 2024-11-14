'use client';

import React from 'react';
import { Frontend, UserAuth } from '@/components/index';

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = React.useState('Tab1');
  const handleTabChange = (newTab) => setActiveTab(newTab);

  return (
    <section>
      <nav className="">
        {[
          ['Tab1', 'front-end'],
          ['Tab2', 'user auth'],
        ].map(([tab, title]) => (
          <button
            key={tab}
            className={`cursor-pointer px-6 py-2 font-bold transition duration-300 ${activeTab === tab ? 'border-b border-blck/40' : 'opacity-40 hover:opacity-100'}`}
            onClick={() => handleTabChange(tab)}
          >
            {title}
          </button>
        ))}
      </nav>

      <div className={activeTab === 'Tab1' ? 'px-3 py-10' : 'hidden'}>
        <Frontend />
      </div>
      <div className={activeTab === 'Tab2' ? 'px-3 py-10' : 'hidden'}>
        <UserAuth />
      </div>
    </section>
  );
}
