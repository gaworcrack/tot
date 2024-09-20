import { Badge, Card } from '@material-tailwind/react';
import React from 'react';

const GempaUpdate = () => {
  return (
    <>
      <div className="w-full p-2 ">
        <Card className="w-full p-5 text-center text-white bg-[#3B3030]">
          <h1 className="text-3xl font-bold">Informasi Gempa</h1>
        </Card>

        <div className="grid gap-3 my-5 grid-col-1 lg:grid-cols-3">
          <Card className="p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            quaerat, dolor, odio modi ea deserunt molestiae nostrum, voluptatem
            repellendus recusandae suscipit consectetur sapiente. Quaerat, eaque
            corporis iusto architecto quisquam deleniti?
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-center">
              <span className="absolute bg-red-500 rounded-full -top-1 -right-1 animate-ping size-5"></span>
              <span className="absolute -top-0.5 animate-ping -right-0.5 bg-red-500 rounded-full size-4"></span>
              <span className="absolute top-0 right-0 inline-flex bg-red-500 rounded-full size-3"></span>
            </div>
            <h1>Update Gempa Terkini</h1>
          </Card>

          <Card className="p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            quaerat, dolor, odio modi ea deserunt molestiae nostrum, voluptatem
            repellendus recusandae suscipit consectetur sapiente. Quaerat, eaque
            corporis iusto architecto quisquam deleniti?
          </Card>
        </div>
      </div>
    </>
  );
};

export default GempaUpdate;
