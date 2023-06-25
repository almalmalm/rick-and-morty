import MenuButton from './MenuButton';
import { useState } from 'react';
import CloseButton from './CloseButton';
import MenuItems from './MenuItems';
import Search from './Search';
import SearchModal from './SearchModal';

type Props = {
  position: string;
};

const Header: React.FC<Props> = ({ position }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [searchIsOpened, setSearchIsOpened] = useState(false);

  const menuHandler = (status: boolean) => {
    setMenuIsOpened(!status);
  };

  const searchHandler = (status: boolean) => {
    setSearchIsOpened(!status);
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
        {searchIsOpened && (
          <div className="absolute top-0 z-20">
            <SearchModal
              onClick={() => {
                searchHandler(searchIsOpened);
              }}
            />
          </div>
        )}
        <Search
          onClick={() => {
            searchHandler(searchIsOpened);
          }}
        />
      </div>
    </>
  );
};

export default Header;
