import React from 'react';
import { BiX } from 'react-icons/bi';

type Props = {
  onClick: (status: boolean) => void;
};

const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="absolute right-0 mt-8 mr-6 cursor-pointer">
      <BiX className="w-8 h-8 text-zinc-700" onClick={onClick} />
    </div>
  );
};

export default CloseButton;
