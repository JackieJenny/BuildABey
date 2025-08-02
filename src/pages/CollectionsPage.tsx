import React, { useState } from 'react';
import { beybladeCollection } from '../components/BeyCollectionData';
import { Navbar } from '../components/NavBarFix';

const PAGE_SIZE = 9; // 3x3 grid

export default function CollectionPage() {
  const [selected, setSelected] = useState(beybladeCollection[0] || null);
  const [page, setPage] = useState(0);

  const startIdx = page * PAGE_SIZE;
  const pagedBeys = beybladeCollection.slice(startIdx, startIdx + PAGE_SIZE);

  // Pad with nulls to ensure 9 slots
  const paddedBeys = [...pagedBeys];
  while (paddedBeys.length < PAGE_SIZE) {
    paddedBeys.push(null);
  }

  const totalPages = Math.ceil(beybladeCollection.length / PAGE_SIZE);

  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row gap-8 p-6 min-h-screen">
        {/* Left: Grid with pagination */}
        <div className="flex flex-col items-center md:w-1/2 w-full">
          <h1 className="text-2xl font-bold mb-4">Beyblade Collection</h1>

          <div className="grid grid-cols-3 gap-4 mb-4 w-full">
            {paddedBeys.map((bey, index) => {
              const isSelected = selected?.id === bey?.id;

              return (
                <div
                  key={bey?.id || `empty-${index}`}
                  className={`border rounded-xl overflow-hidden shadow-md transition-transform duration-300 ${
                    bey ? 'cursor-pointer hover:scale-105' : 'bg-gray-100'
                  } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                  {...(bey && { onClick: () => setSelected(bey) })}
                >
                  {bey ? (
                    <img
                      src={bey.image}
                      alt={bey.name}
                      className="w-full h-24 object-contain bg-white"
                    />
                  ) : (
                    <div className="w-full h-24 bg-white flex items-center justify-center text-gray-400 text-sm">
                  
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination controls */}
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              Prev
            </button>
            <span className="px-2">
              {page + 1} / {totalPages}
            </span>
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right: Enlarged selected beyblade */}
        <div className="md:w-1/2 w-full flex flex-col items-center">
          {selected ? (
            <>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mb-4"
              />
              <h2 className="text-xl font-bold">{selected.name}</h2>
              {/* Add more details here if needed */}
            </>
          ) : (
            <div className="text-gray-500">
              Select a Beyblade to view details
            </div>
          )}
        </div>
      </div>
    </>
  );
}
