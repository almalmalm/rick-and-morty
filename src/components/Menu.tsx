import React from 'react';
import { BiMenu } from 'react-icons/bi';

type MenuProps = {
  onClick: (status: boolean) => void;
};

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <div className="ml-6 cursor-pointer">
      <BiMenu className="w-6 h-6" onClick={onClick} />
    </div>
  );
};

export default Menu;
