import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] 
        bg-cover bg-center"
      >
        <div className="backdrop-blur-md bg-glassgrey/30 w-3/4 h-3/4 rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col justify-center items-center text-center">
          <h1 className="text-8xl big-shoulders mb-20">BUILD A BEY</h1>
          <div className="text-3xl font-inter">
            Choose parts, Cusomise colours and compare with
          </div>
          <div className="text-3xl font-inter mb-8">popular builds online</div>
          <button
            onClick={() => navigate("/create")}
            className="bg-blue-800 px-8 py-3 rounded-xl text-xl hover:bg-blue-700 transition"
          >
            Create Beyblade
          </button>
        </div>
      </div>
    </>
  );
}
