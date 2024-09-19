import { Card } from '@material-tailwind/react';
import React from 'react';

const Menu = ({ image, title }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Card className="p-2 flex items-center justify-center flex-col w-full text-black font-bold text-lg">
          <img
            src={image}
            alt="Image gempa"
            className="w-20"
          />
          {title}
        </Card>
      </div>
    </>
  );
};

export default Menu;
