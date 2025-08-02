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
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-8 p-6 w-screen h-screen relative"
        style={{
          backgroundImage: "url('/images/Background3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left: Grid with pagination */}
        <div className="flex flex-1 flex-col justify-center items-center h-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Beyblade Collection</h1>
          <div className="grid grid-cols-3 gap-6 mb-6 w-full max-w-lg">
            {paddedBeys.map((bey, index) => {
              const isSelected = selected?.id === bey?.id;
              return (
                <div
                  key={bey?.id || `empty-${index}`}
                  className={`border rounded-xl overflow-hidden shadow-md transition-transform duration-300 ${
                    bey ? 'cursor-pointer hover:scale-105' : 'bg-gray-100'
                  } ${isSelected ? 'ring-2 ring-blue-500' : ''} flex items-center justify-center h-32`}
                  {...(bey && { onClick: () => setSelected(bey) })}
                >
                  {bey ? (
                    <img
                      src={bey.image}
                      alt={bey.name}
                      className="w-24 h-24 object-contain bg-white"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white flex items-center justify-center text-gray-400 text-sm">
                      {/* Empty slot */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Pagination controls */}
          <div className="flex gap-2 mt-2">
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
        <div className="flex flex-1 flex-col justify-center items-center h-full">
          {selected ? (
            <>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-80 h-80 object-contain bg-white rounded-xl shadow-lg mb-6"
              />
              <h2 className="text-xl font-bold text-center">{selected.name}</h2>
            </>
          ) : (
            <div className="text-gray-500 text-center">
              Select a Beyblade to view details
            </div>
          )}
        </div>
      </div>
    </>
  );
}
