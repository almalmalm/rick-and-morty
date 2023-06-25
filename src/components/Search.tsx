import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

type Props = {
  onClick: (status: boolean) => void;
};

const Search: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <BiSearchAlt2 className="w-6 h-6 mr-6" onClick={onClick} />
    </>
  );
};

export default Search;
