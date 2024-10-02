import React, { useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dayName = days[currentTime.getDay()];
  const day = currentTime.getDate();
  const monthName = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const time = currentTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <>
      <div className="flex items-center pr-5 space-x-5 text-base font-semibold text-gray-800">
        <span className="flex items-center gap-2">
          <FaRegCalendarAlt className="text-green-800 size-5" /> {dayName},{' '}
          {day} {monthName} {year}
        </span>
        <span className="flex items-center gap-2">
          <FaRegClock className="text-green-800 size-5" /> {time}
        </span>
      </div>
    </>
  );
};

export default RealTimeClock;
