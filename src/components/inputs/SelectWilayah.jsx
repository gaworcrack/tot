import { Card } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const SelectWilayah = () => {
  const [options, setOptions] = useState([]); // Provinsi
  const [regencyOptions, setRegencyOptions] = useState([]); // Kabupaten/Kota
  const [districtOptions, setDistrictOptions] = useState([]); // Kecamatan
  const [villageOptions, setVillageOptions] = useState([]); // Kelurahan
  const [loading, setLoading] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Fetch provinsi saat komponen dimuat
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'
        );
        const provinces = response.data.map((province) => ({
          value: province.id, // ID provinsi
          label: province.name, // Nama provinsi
        }));
        setOptions(provinces);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching provinces:', error);
        setLoading(false);
      }
    };
    fetchProvinces();
  }, []);

  // Fetch kabupaten/kota berdasarkan provinsi yang dipilih
  const fetchRegencies = async (provinceId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
      );
      const regencies = response.data.map((regency) => ({
        value: regency.id, // ID kabupaten/kota
        label: regency.name, // Nama kabupaten/kota
      }));
      setRegencyOptions(regencies);
      setDistrictOptions([]); // Reset district options
      setVillageOptions([]); // Reset village options
      setSelectedRegency(null); // Reset selected regency
      setSelectedDistrict(null); // Reset selected district
    } catch (error) {
      console.error('Error fetching regencies:', error);
    }
  };

  // Fetch kecamatan berdasarkan kabupaten/kota yang dipilih
  const fetchDistricts = async (regencyId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
      );
      const districts = response.data.map((district) => ({
        value: district.id, // ID kecamatan
        label: district.name, // Nama kecamatan
      }));
      setDistrictOptions(districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  // Fetch kelurahan berdasarkan kecamatan yang dipilih
  const fetchVillages = async (districtId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
      );
      const villages = response.data.map((village) => ({
        value: village.id, // ID kelurahan
        label: village.name, // Nama kelurahan
      }));
      setVillageOptions(villages);
    } catch (error) {
      console.error('Error fetching villages:', error);
    }
  };

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption); // Simpan provinsi yang dipilih
    fetchRegencies(selectedOption.value); // Ambil kabupaten/kota berdasarkan provinsi
  };

  const handleRegencyChange = (selectedOption) => {
    setSelectedRegency(selectedOption); // Simpan kabupaten/kota yang dipilih
    fetchDistricts(selectedOption.value); // Ambil kecamatan berdasarkan kabupaten/kota
    setVillageOptions([]); // Reset village options when regency changes
    setSelectedDistrict(null); // Reset selected district
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption); // Simpan kecamatan yang dipilih
    fetchVillages(selectedOption.value); // Ambil kelurahan berdasarkan kecamatan
  };

  const handleVillageChange = (selectedOption) => {
    console.log('Selected village:', selectedOption);
    // Logika lain berdasarkan kelurahan yang dipilih
  };

  return (
    <>
      <div className="w-full p-2">
        <div className="container p-4 mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Pilih Provinsi</h1>
          {loading ? (
            <p>Loading provinces...</p>
          ) : (
            <Select
              options={options}
              onChange={handleProvinceChange}
              placeholder="Pilih Provinsi"
              className="basic-single"
              classNamePrefix="select"
            />
          )}
        </div>

        <div className="container p-4 mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Pilih Kabupaten / Kota</h1>
          <Select
            options={regencyOptions}
            onChange={handleRegencyChange}
            placeholder="Pilih Kabupaten / Kota"
            className="basic-single"
            classNamePrefix="select"
            isDisabled={!selectedProvince} // Nonaktifkan jika provinsi belum dipilih
          />
        </div>

        <div className="container p-4 mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Pilih Kecamatan</h1>
          <Select
            options={districtOptions}
            onChange={handleDistrictChange}
            placeholder="Pilih Kecamatan"
            className="basic-single"
            classNamePrefix="select"
            isDisabled={!selectedRegency} // Nonaktifkan jika kabupaten/kota belum dipilih
          />
        </div>

        <div className="container p-4 mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Pilih Kelurahan</h1>
          <Select
            options={villageOptions}
            onChange={handleVillageChange}
            placeholder="Pilih Kelurahan"
            className="basic-single"
            classNamePrefix="select"
            isDisabled={!selectedDistrict} // Nonaktifkan jika kecamatan belum dipilih
          />
        </div>
      </div>
    </>
  );
};

export default SelectWilayah;
