import { BiSearchAlt2, BiX } from 'react-icons/bi';
import Menu from './Menu';
import { useState } from 'react';

function Header() {
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
        <div
          className="absolute right-0 mt-8 mr-6 cursor-pointer"
          onClick={() => {
            menuHandler(menuIsOpened);
          }}
        >
          <BiX className="w-8 h-8 text-zinc-700" />
        </div>
      </div>

      <div className="flex text-[#fbfcff] my-4 items-center justify-between absolute w-full">
        <Menu
          onClick={() => {
            menuHandler(menuIsOpened);
          }}
        />
        <div>
          <a href="/">
            <img src="/rick-and-morty.png" alt="Logo" className="w-16" />
          </a>
        </div>
        <div className="mr-6">
          <BiSearchAlt2 className="w-6 h-6" />
        </div>
      </div>
    </>
  );
}

export default Header;
