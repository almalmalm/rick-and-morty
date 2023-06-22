import React from 'react';
import { BiMenu } from 'react-icons/bi';

type Props = {
  onClick: (status: boolean) => void;
};

const MenuButton: React.FC<Props> = ({ onClick }) => {
  return <BiMenu className="w-6 h-6 ml-6 cursor-pointer" onClick={onClick} />;
};

export default MenuButton;
