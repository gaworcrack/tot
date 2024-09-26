import React from 'react';
import bg_home from '../../../public/assets/images/climate.jpg';
import Menu from './_partials/Menu';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const menus = [
    {
      id: 1,
      image: '/public/assets/images/gempa.png',
      title: 'Informasi Gempa',
      href: '/informasi-gempa',
    },
    {
      id: 2,
      image: '/public/assets/images/cuaca.png',
      title: 'Informasi Cuaca',
      href: '/informasi-cuaca',
    },
  ];
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-screen p-4">
        <img
          src={bg_home}
          alt="Bg home"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute text-center">
          <span className="my-10 text-2xl font-bold text-white md:text-4xl">
            Informasi Gempa dan Cuaca
          </span>

          <div className="flex flex-col items-center justify-center w-full gap-3 my-10 md:flex-row ">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.href}
                className="w-full"
              >
                <Menu
                  image={menu.image}
                  title={menu.title}
                />
              </Link>
            ))}
          </div>

          <div className="text-lg font-medium text-white">
            Data bersumber dari BMKG
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
