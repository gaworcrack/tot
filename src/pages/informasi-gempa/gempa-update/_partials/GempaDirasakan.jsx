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
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-center table-auto min-w-max">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-white bg-red-700 border border-b"
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
                  <td className="p-3">{gempa.Tanggal}</td>
                  <td className="p-3">{gempa.Jam}</td>
                  <td className="p-3 text-center">{gempa.Magnitude}</td>
                  <td className="p-3">{gempa.Wilayah}</td>
                  <td className="p-3 text-center">{gempa.Kedalaman}</td>
                  <td className="p-3">{gempa.Coordinates}</td>
                  <td className="p-3">{gempa.Dirasakan}</td>
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
