import React from 'react';

type Props = {
  img: string;
  name: string;
};

const Character: React.FC<Props> = ({ img, name }) => {
  return (
    <div className="h-screen">
      <div className="my-0 mx-auto w-64 relative">
        <img src={img} alt="Character image" className="rounded-lg" />
        <div className="font-bold text-[#fbfcff] text-xl text-center absolute bottom-0 p-4 bg-gradient-to-t from-[#04061c80] tablet:from-[#1c1f1a80] rounded-lg to-transparent w-full ">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Character;
