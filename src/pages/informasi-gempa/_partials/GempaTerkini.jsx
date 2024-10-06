import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GempaTerkini = () => {
  const TABLE_HEAD = [
    '#',
    'Tanggal',
    'Jam',
    'Magnitude',
    'Wilayah',
    'Kedalaman',
    'Koordinat',
    'Lintang',
    'Bujur',
    'Potensi',
  ];

  const [gempaDirasakan, setGempaDirasakan] = useState([]);

  useEffect(() => {
    const fetchGempaDirasakan = async () => {
      try {
        const response = await axios.get(
          'https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json'
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
      <div className="p-5">
        <h1 className="mb-5 text-lg font-bold text-black">
          Gempa Terkini Magnitude 5.0 +
        </h1>
        <div className="w-full overflow-x-auto border border-gray-300 rounded-lg scrollbar-hide">
          <table className="w-full overflow-hidden text-left border rounded-lg table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-4 text-center text-white bg-green-800 border border-b"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gempaDirasakan.length > 0 ? (
                gempaDirasakan.map((gempa, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-500 text-start ${
                      index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <td className="p-3 text-center text-black border border-gray-300">
                      {index + 1}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Tanggal}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Jam}
                    </td>
                    <td className="p-3 text-center text-black border border-gray-300">
                      {gempa.Magnitude}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Wilayah}
                    </td>
                    <td className="p-3 text-center text-black border border-gray-300">
                      {gempa.Kedalaman}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Coordinates}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Lintang}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Bujur}
                    </td>
                    <td className="p-3 text-black border border-gray-300">
                      {gempa.Potensi}
                    </td>
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
      </div>
    </>
  );
};

export default GempaTerkini;
