import React, { useState } from 'react';
import { beybladeCollection } from '../components/BeyCollectionData';
import { Navbar } from '../components/NavBarFix';
import UserBeyModel from '../components/UserBeyModel';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';  // <-- import navigate

type BeyName = "leone_self"| "leone_opp" | "pegasus_opp" | "pegasus_self" | "ldrago_self" | "ldrago_opp" | "custom_self";

const MODEL_NAME_MAP: Record<number, string> = {
  1: "custom",          // Custom Bey 1
  2: "pegasus_self",    // Pegasus
  3: "leone_self",      // Leone Storm
  4: "ldrago_self",     // L-Drago Destroy
  5: "custom",          // Capricorn or other
};

const TiltedRotator = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Continuous spin
    }
  });

  return (
    <group rotation={[0.2, 0, 0.2]} ref={ref}>
      {children}
    </group>
  );
};

const SceneCanvas = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <Canvas
      camera={{ position: [0, 2, 3], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <TiltedRotator>
        {children}
      </TiltedRotator>
    </Canvas>
  </div>
);

const PAGE_SIZE = 9; // 3x3 grid

export default function CollectionPage() {
  const navigate = useNavigate();  // <-- get navigate
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

  // Handler for Compare button click
  const handleCompare = (bey: typeof beybladeCollection[number]) => {
    const modelName = MODEL_NAME_MAP[bey.id] ?? 'custom_self';
    navigate(`/compare?model=${modelName}`);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-10 p-6 w-screen h-screen relative"
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
          <div className="grid grid-cols-3 gap-8 mb-6 w-full max-w-lg">
            {paddedBeys.map((bey, index) => {
              const isSelected = selected?.id === bey?.id;
              return (
                <div
                  key={bey?.id || `empty-${index}`}
                  className={`backdrop-blur-md bg-gray-100/5 w-40 h-40 rounded-xl p-4 border border-gray-500/50 shadow-lg shadow-inner
                    flex flex-col items-center justify-center
                    transition-transform duration-300 ${bey ? 'cursor-pointer hover:scale-105' : 'bg-gray-100'}
                    ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
                  {...(bey && { onClick: () => setSelected(bey) })}
                >
                  {bey ? (
                    <>
                      <img
                        src={bey.image}
                        alt={bey.name}
                        className="w-25 h-30 object-cover bg-transparent"
                      />
                      <button
                        className="mt-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent selecting bey when clicking compare
                          handleCompare(bey);
                        }}
                      >
                        Compare
                      </button>
                    </>
                  ) : (
                    <div className="w-24 h-24 bg-transparent" />
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

        {/* Right: 3D Model View */}
        <div className="flex flex-1 flex-col justify-center items-center h-full">
          {selected ? (
            <>
              <SceneCanvas>
                <Suspense fallback={null}>
                  <UserBeyModel modelName={MODEL_NAME_MAP[selected.id] ?? 'custom_self'} />
                </Suspense>
              </SceneCanvas>
              <h2 className="text-xl font-bold text-center mt-6 text-white">{selected.name}</h2>
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
