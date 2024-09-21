import { Badge, Card } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GempaUpdate = () => {
  const baseURL = 'https://data.bmkg.go.id/DataMKG/TEWS/';
  const [gempaTerkini, setGempaTerkini] = useState('');
  useEffect(() => {
    const fetchGempa = async () => {
      try {
        const response = await axios.get(
          'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json'
        );
        setGempaTerkini(response.data.Infogempa.gempa);
        console.log(response.data.Infogempa.gempa);
      } catch (errors) {
        console.errors('Error fetch data:', errors);
      }
    };
    fetchGempa();
  }, []);
  return (
    <>
      <div className="w-full p-2 ">
        <Card className="w-full p-5 text-center text-white bg-[#3B3030]">
          <h1 className="text-3xl font-bold">Informasi Gempa</h1>
        </Card>

        <div className="grid gap-3 my-5 grid-col-1 lg:grid-cols-2">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-black">
                Update Gempa Terkini
              </h1>
              <div className="flex items-center justify-center">
                <span className="bg-red-500 rounded-full size-3"></span>
                <span className="absolute bg-red-500 rounded-full size-4 animate-ping"></span>
              </div>
            </div>

            <div className="my-5 text-black">
              <div className="flex flex-col">
                <span className="text-base font-medium">Tanggal</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Tanggal}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Jam</span>
                <span className="text-lg font-bold">{gempaTerkini.Jam}</span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Magnitude</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Magnitude} SR
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Kedalaman</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Kedalaman}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Koordinat</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Coordinates}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Lintang</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Lintang}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Bujur</span>
                <span className="text-lg font-bold">{gempaTerkini.Bujur}</span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Wilayah</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Wilayah}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Potensi</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Potensi}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-base font-medium">Dirasakan</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Dirasakan}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-lg font-bold">
                  <img
                    src={`${baseURL}/${gempaTerkini.Shakemap}`}
                    alt="Posisi Gempa"
                  />
                </span>
                <hr className="my-2 border border-gray-400" />
              </div>
            </div>
          </Card>

          <Card className="p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            quaerat, dolor, odio modi ea deserunt molestiae nostrum, voluptatem
            repellendus recusandae suscipit consectetur sapiente. Quaerat, eaque
            corporis iusto architecto quisquam deleniti?
          </Card>

          <Card className="p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            quaerat, dolor, odio modi ea deserunt molestiae nostrum, voluptatem
            repellendus recusandae suscipit consectetur sapiente. Quaerat, eaque
            corporis iusto architecto quisquam deleniti?
          </Card>
        </div>
      </div>
    </>
  );
};

export default GempaUpdate;
