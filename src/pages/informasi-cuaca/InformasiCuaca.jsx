import { Card } from '@material-tailwind/react';
import React from 'react';
import Select from 'react-select';
import SelectWilayah from '../../components/inputs/SelectWilayah';

const InformasiCuaca = () => {
  return (
    <>
      <div className="w-full p-2">
        <Card className="w-full py-10 text-center text-white bg-green-700">
          <h1 className="text-3xl font-bold">Informasi Cuaca</h1>
        </Card>

        <SelectWilayah />
      </div>
    </>
  );
};

export default InformasiCuaca;
