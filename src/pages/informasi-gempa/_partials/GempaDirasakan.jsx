import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GempaDirasakan = () => {
  const TABLE_HEAD = [
    '#',
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
      <div className="p-5">
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
                      {gempa.Dirasakan.split(',').map((area, index) => (
                        <span
                          key={index}
                          className="block px-2 py-1 mb-1 mr-2 text-white bg-orange-500 rounded-md w-fit "
                        >
                          {area.trim()}
                        </span>
                      ))}
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

export default GempaDirasakan;