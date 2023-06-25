import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';

type Props = {
  onClick: (status: boolean) => void;
};

const SearchModal: React.FC<Props> = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="h-24 w-screen bg-white absolute">
      <div className="flex relative left-10 top-8">
        <input
          type="text"
          className="h-8 border-zinc-700 border-2 w-56 text-zinc-700"
          value={searchQuery}
          onChange={searchHandler}
        />
        <BiX className="w-8 h-8 text-zinc-700" onClick={onClick} />
      </div>
    </div>
  );
};

export default SearchModal;
