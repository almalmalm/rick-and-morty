import { BiSearchAlt2, BiMenu } from 'react-icons/bi';

function Header() {
  return (
    <div className="flex text-[#fbfcff] my-4 items-center justify-between absolute w-full">
      <div className="ml-6">
        <BiMenu className="w-6 h-6" />
      </div>
      <div className="">
        <a href="/">
          <img src="/rick-and-morty.png" alt="Logo" className="w-16" />
        </a>
      </div>
      <div className="mr-6">
        <BiSearchAlt2 className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Header;
