import { DayPlanner } from './day-planner/planner';
import { CurrentInventory } from './inventory/current-inventory';
import { Sidebar } from './layout/sidebar';
import { ContactsMap } from './map/contacts-map';
import { IMPressionsCard } from './stats/impressions';

const mockData = {
  impressions: {
    total: 137,
    virtual: 45,
    live: 92
  },
  contacts: [
    { id: 1, lat: 49.8951, lng: -97.1384 } // Winnipeg coordinates
    // Add more contact coordinates as needed
  ],
  inventory: [
    { id: '1', name: 'Pfacto 5ml', quantity: 130 },
    { id: '2', name: 'Besophil', quantity: 346 },
    { id: '3', name: 'Ig Sol', quantity: 200 },
    { id: '4', name: 'Relixxa', quantity: 146 }
  ]
};

export function Dashboard() {
  return (
    <div className='flex h-screen bg-background'>
      <Sidebar />
      <div className='flex-1 overflow-auto'>
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <DayPlanner />
          </div>
          <div>
            <IMPressionsCard data={mockData.impressions} />
          </div>
          <div className='lg:col-span-2'>
            <ContactsMap contacts={mockData.contacts} />
          </div>
          <div>
            <CurrentInventory items={mockData.inventory} />
          </div>
        </div>
      </div>
    </div>
  );
}
