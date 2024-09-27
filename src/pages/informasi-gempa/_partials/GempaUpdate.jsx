import { Card } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaDeezer, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { RiEarthquakeLine } from 'react-icons/ri';
import { WiEarthquake } from 'react-icons/wi';

const GempaUpdate = () => {
  const baseURL = 'https://data.bmkg.go.id/DataMKG/TEWS/';
  const [gempaTerkini, setGempaTerkini] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGempa = async () => {
      try {
        const response = await axios.get(
          'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json'
        );
        setGempaTerkini(response.data.Infogempa.gempa);
        console.log(response.data.Infogempa.gempa);
        setLoading(false);
      } catch (errors) {
        console.error('Error fetch data:', errors);
        console.error('Error fetching data:', errors.response);
        setLoading(false);
      }
    };
    fetchGempa();
  }, []);

  return (
    <>
      <div className="w-full">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-black">
              Update Gempa Terkini
            </h1>
            <div className="flex items-center justify-center">
              <span className="bg-red-500 rounded-full size-3"></span>
              <span className="absolute bg-red-500 rounded-full size-5 animate-ping"></span>
            </div>
          </div>

          <div className="my-5 text-black">
            {loading ? (
              <div className="text-center">
                <p>Loading data gempa...</p>
              </div>
            ) : gempaTerkini ? (
              <div className="flex flex-col">
                <span className="flex items-center gap-2 text-base font-medium ">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <FaRegCalendarAlt />
                  </span>
                  Tanggal
                </span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Tanggal}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <FaRegClock />
                  </span>{' '}
                  Jam
                </span>
                <span className="text-lg font-bold">{gempaTerkini.Jam}</span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-1.5 text-white bg-green-800 rounded-lg">
                    <WiEarthquake size={20} />
                  </span>{' '}
                  Magnitude
                </span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Magnitude} SR
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <FaDeezer />
                  </span>{' '}
                  Kedalaman
                </span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Kedalaman}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <IoLocationOutline />
                  </span>{' '}
                  Wilayah
                </span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Wilayah}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <PiMapPinAreaBold />
                  </span>{' '}
                  Koordinat
                </span>
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

                <span className="text-base font-medium">Potensi</span>
                <span className="text-lg font-bold">
                  {gempaTerkini.Potensi}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="p-2 text-white bg-green-800 rounded-lg">
                    <RiEarthquakeLine />
                  </span>{' '}
                  Dirasakan
                </span>
                <span className="">
                  {gempaTerkini.Dirasakan.split(',').map((area, index) => (
                    <span
                      key={index}
                      className="p-2 text-sm text-white bg-orange-500 rounded-md"
                    >
                      {area.trim()}
                    </span>
                  ))}
                </span>
                <hr className="my-2 border border-gray-400" />
                <span className="text-lg font-bold">
                  <img
                    src={`${baseURL}/${gempaTerkini.Shakemap}`}
                    alt="Posisi Gempa"
                    // className="size-[500px]"
                  />
                </span>
                <hr className="my-2 border border-gray-400" />
              </div>
            ) : (
              <div className="text-center text-red-500">
                <p>Data gempa tidak tersedia.</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default GempaUpdate;
