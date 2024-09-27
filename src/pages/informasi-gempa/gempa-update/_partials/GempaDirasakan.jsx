import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GempaDirasakan = () => {
  const TABLE_HEAD = [
    'Tanggal',
    'Jam',
    'Magnitude',
    'Wilayah',
    'Kedalaman',
    'Koordinat',
    'Dirasakan',
  ];

  const [gempaDirasakan, setGempaDirasakan] = useState([]);

  useEffect(() => {
    const fetchGempaDirasakan = async () => {
      try {
        const response = await axios.get(
          'https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json'
        );
        setGempaDirasakan(response.data.Infogempa.gempa);
      } catch (errors) {
        console.error('Error fetch gempa terkini:', errors);
      }
    };
    fetchGempaDirasakan();
  }, []);

  return (
    <>
      <h1 className="mb-5 text-lg font-bold text-black">Gempa Dirasakan</h1>
      <div className="w-full overflow-x-auto border border-gray-300 rounded-lg scrollbar-hide">
        <table className="w-full overflow-hidden text-left border rounded-lg table-auto min-w-max">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-white bg-green-800 border border-b"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gempaDirasakan.length > 0 ? (
              gempaDirasakan.map((gempa) => (
                <tr className="border-b border-gray-500 text-start">
                  <td className="p-3 text-black border">{gempa.Tanggal}</td>
                  <td className="p-3 text-black border">{gempa.Jam}</td>
                  <td className="p-3 text-center text-black border">
                    {gempa.Magnitude}
                  </td>
                  <td className="p-3 text-black border">{gempa.Wilayah}</td>
                  <td className="p-3 text-center text-black border">
                    {gempa.Kedalaman}
                  </td>
                  <td className="p-3 text-black border">{gempa.Coordinates}</td>
                  <td className="p-3 text-black border">{gempa.Dirasakan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={TABLE_HEAD.length}
                  className="p-4"
                >
                  Data gempa belum tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GempaDirasakan;
