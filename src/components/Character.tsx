import React from 'react';

type Props = {
  img: string;
  name: string;
};

const Character: React.FC<Props> = ({ img, name }) => {
  return (
    <div className="h-screen">
      <div className="my-0 mx-auto w-72 py-8 relative">
        <img src={img} alt="Character image" className="rounded-lg" />
        <div className="font-bold text-[#fbfcff] text-xl text-center absolute bottom-8 p-4 bg-gradient-to-t from-zinc-600 rounded-lg to-transparent w-full ">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Character;
