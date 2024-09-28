import { Card } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import dataSigBmkg from './dataSigBmkg';
import { Link } from 'react-router-dom';

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

  const SIG_HEAD = [
    'Skala SIG BMKG',
    'Warna',
    'Deskripsi Sederhana',
    'Deskripsi Rinci',
    'Skala MMI',
    'PGA (gal)',
  ];

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
              <div className="grid grid-cols-12 gap-5 ">
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md ">
                    Tanggal
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Tanggal}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Jam
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Jam}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Magnitude
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Magnitude} SR
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Kedalaman
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Kedalaman}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Wilayah
                  </Card>
                  <span className="mt-2 text-base font-semibold text-black ">
                    {gempaTerkini.Wilayah}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Koordinat
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Coordinates}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Lintang
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Lintang}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Bujur
                  </Card>
                  <span className="mt-5 text-lg font-bold text-black">
                    {gempaTerkini.Bujur}
                  </span>
                </Card>

                <Card className="flex items-center justify-center col-span-3 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Potensi
                  </Card>
                  <span className="mt-2 text-base font-semibold text-justify text-black">
                    {gempaTerkini.Potensi}
                  </span>
                </Card>
                <Card className="flex items-center justify-center col-span-9 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Dirasakan
                  </Card>
                  <span className="mt-5">
                    {gempaTerkini.Dirasakan.split(',').map((area, index) => (
                      <span
                        key={index}
                        className="p-2 text-sm text-white bg-orange-600 rounded-md"
                      >
                        {area.trim()}
                      </span>
                    ))}
                  </span>
                </Card>

                <Card className="flex items-center justify-center col-span-6 p-2 border bg-blue-gray-50">
                  <Card className="w-full p-1 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Shakemap
                  </Card>
                  <img
                    src={`${baseURL}/${gempaTerkini.Shakemap}`}
                    alt="Posisi Gempa"
                    className="my-2 "
                  />
                </Card>
                <Card className="col-span-6 p-2 border h-fit bg-blue-gray-50">
                  <Card className="w-full p-1 mb-3 text-base font-medium text-center text-white bg-green-800 rounded-md">
                    Skala Intensitas Gempabumi (SIG) BMKG
                  </Card>
                  <div className="w-full overflow-x-auto border border-gray-300 rounded-lg scrollbar-hide">
                    <table className="w-full overflow-hidden text-left border rounded-lg table-auto min-w-max">
                      <thead>
                        <tr>
                          {SIG_HEAD.map((head) => (
                            <th
                              key={head}
                              className="p-4 text-center text-white bg-blue-500 border border-b"
                            >
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataSigBmkg.map((sig, index) => (
                          <tr
                            key={index}
                            className="text-sm border-b border-gray-500 text-start"
                            style={{ backgroundColor: sig.hexa }}
                          >
                            <td className="p-3 text-center text-black border border-gray-300">
                              {sig.skala}
                            </td>
                            <td className="p-3 text-black border border-gray-300">
                              {sig.warna}
                            </td>
                            <td className="p-3 text-black border border-gray-300">
                              {sig.deskripsiSederhana}
                            </td>
                            <td className="p-3 text-black border border-gray-300">
                              {sig.deskripsiRinci}
                            </td>
                            <td className="p-3 text-black border border-gray-300">
                              {sig.skalaMmi}
                            </td>
                            <td className="p-3 text-center text-black border border-gray-300">
                              {sig.pga}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="my-5 text-black">
                    Sumber :{' '}
                    <Link
                      to={
                        'https://www.bmkg.go.id/gempabumi/skala-intensitas-gempabumi.bmkg'
                      }
                      className="text-blue-600"
                    >
                      https://www.bmkg.go.id/gempabumi/skala-intensitas-gempabumi.bmkg
                    </Link>
                  </span>
                </Card>

                {/* <span className="flex justify-center col-span-6 text-lg font-bold">
                  <img
                    src={`${baseURL}/${gempaTerkini.Shakemap}`}
                    alt="Posisi Gempa"
                    // className="size-[500px]"
                  />
                </span> */}
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
