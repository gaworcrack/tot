import { useState } from 'react';
import GempaUpdate from './_partials/GempaUpdate';
import GempaDirasakan from './_partials/GempaDirasakan';
import GempaTerkini from './_partials/GempaTerkini';
import { Card } from '@material-tailwind/react';
import RealTimeClock from '../../components/RealTimeClock';

const InformasiGempa = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="p-2">
        <Card className="w-full py-10 text-center text-white bg-[url('/assets/images/gempa-wp.jpg')] object-cover bg-black/60 bg-blend-overlay">
          <h1 className="text-3xl font-bold">Informasi Gempa</h1>
        </Card>
        <Card className="w-full mx-auto my-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex p-2">
                <button
                  className={`py-2 px-4 font-semibold border-b border-green-800 rounded-t-lg ${
                    activeTab === 1
                      ? 'text-white bg-green-800'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  Gempa Update
                </button>
                <button
                  className={`py-2 px-4 font-semibold  border-b border-green-800 rounded-t-lg ${
                    activeTab === 2
                      ? 'text-white bg-green-800'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Gempa Dirasakan
                </button>
                <button
                  className={`py-2 px-4 font-semibold border-b border-green-800 rounded-t-lg ${
                    activeTab === 3
                      ? ' text-white bg-green-800'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  Gempa Terkini
                </button>
              </div>
            </div>
            <div>
              <RealTimeClock />
            </div>
          </div>

          <div className="flex justify-between">
            {activeTab === 1 ? (
              <GempaUpdate />
            ) : activeTab === 2 ? (
              <GempaDirasakan />
            ) : (
              <GempaTerkini />
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default InformasiGempa;
