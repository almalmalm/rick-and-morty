import React from 'react';

// type Props = {
//   onClick: (status: boolean) => void;
// };

const MenuItems: React.FC = () => {
  return (
    <div className="absolute font-bold right-24 mt-32 text-zinc-700 text-2xl flex flex-col gap-8 mobile-md:right-32 mobile-lg:right-36 laptop:text-3xl laptop:mr-8 desktop:mr-32">
      <a href="/characters">Characters</a>
      <a href="/locations">Locations</a>
      <a href="/episodes">Episodes</a>
    </div>
  );
};

export default MenuItems;
