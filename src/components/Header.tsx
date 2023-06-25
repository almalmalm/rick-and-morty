import { BiSearchAlt2 } from 'react-icons/bi';
import MenuButton from './MenuButton';
import { useState } from 'react';
import CloseButton from './CloseButton';
import MenuItems from './MenuItems';

type Props = {
  position: string;
};

const Header: React.FC<Props> = ({ position }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const menuHandler = (status: boolean) => {
    setMenuIsOpened(!status);
  };

  return (
    <>
      <div
        className={`h-screen fixed left-0 top-0 bg-[#fbfcff] z-10 duration-500 w-0 ${
          menuIsOpened && 'w-screen tablet:w-1/2'
        }`}
      >
        <CloseButton
          onClick={() => {
            menuHandler(menuIsOpened);
          }}
        />
        <MenuItems />
      </div>

      <div
        className={`flex text-[#fbfcff] py-4 items-center justify-between ${position} w-full`}
      >
        <MenuButton
          onClick={() => {
            menuHandler(menuIsOpened);
          }}
        />
        <a href="/">
          <img src="/rick-and-morty.png" alt="Logo" className="w-16" />
        </a>
        <div className="mr-6">
          <BiSearchAlt2 className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default Header;
