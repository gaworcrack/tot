import { Button, Card } from '@material-tailwind/react';
import React from 'react';

const Menu = ({ image, title }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Button
          className="flex flex-col items-center justify-center w-full p-2 text-lg font-bold text-black capitalize capi"
          color="white"
        >
          <img
            src={image}
            alt="Image gempa"
            className="w-20 mb-3"
          />
          {title}
        </Button>
      </div>
    </>
  );
};

export default Menu;
