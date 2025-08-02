import { beybladeCollection } from '../components/BeyCollectionData';
import { Navbar } from '../components/NavBarFix';

export default function CollectionsPage() {
  return (
    <>
    <Navbar />
    <div className="backdrop-blur-md bg-glassgrey/30 w-3/4 h-3/4 rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col justify-center items-center">
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
    </>
  );
}
