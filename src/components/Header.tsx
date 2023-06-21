import { BiSearchAlt2, BiMenu } from 'react-icons/bi';

function Header() {
  return (
    <div className="flex text-[#fbfcff] absolute mx-6 gap-20 my-4 items-center">
      <div className="">
        <BiMenu className="w-6 h-6" />
      </div>
      <div>
        <a href="/">
          <img src="/rick-and-morty.png" alt="Logo" className="w-16" />
        </a>
      </div>
      <div>
        <BiSearchAlt2 className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Header;
