
import React from 'react';
import { beybladeCollection } from '../components/BeyCollectionData';

export default function CollectionPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Beyblade Collection</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {beybladeCollection.map((bey) => (
          <div
            key={bey.id}
            className="border rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <img
              src={bey.image}
              alt={bey.name}
              className="w-full h-32 object-contain bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
