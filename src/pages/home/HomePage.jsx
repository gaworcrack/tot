import React from 'react';
import bg_home from '../../../public/assets/images/climate.jpg';
import Menu from './_partials/Menu';

const HomePage = () => {
  const menus = [
    {
      id: 1,
      image: '/public/assets/images/gempa.png',
      title: 'Informasi Gempa',
      href: '',
    },
    {
      id: 1,
      image: '/public/assets/images/cuaca.png',
      title: 'Informasi Cuaca',
      href: '',
    },
  ];
  return (
    <>
      <div className="w-full h-screen relative flex items-center justify-center p-4">
        <img
          src={bg_home}
          alt="Bg home"
          className="object-cover w-full h-full absolute"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute text-center">
          <span className="text-2xl md:text-4xl font-bold text-white my-10">
            Informasi Gempa dan Cuaca
          </span>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full my-10 ">
            {menus.map((menu) => (
              <Menu
                key={menu.id}
                image={menu.image}
                title={menu.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
