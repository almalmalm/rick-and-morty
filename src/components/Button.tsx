import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
  color: string;
};

const Button: React.FC<Props> = ({ text, onClick, color }) => {
  return (
    <button
      className={`absolute bottom-8 left-0 right-0 mr-auto ml-auto text-[${color}] w-64 border-2 rounded h-14 font-semibold
  mobile-md:w-80 mobile-lg:w-96 tablet:w-32 tablet:ml-0 tablet:left-8`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
