import React from "react";
import{GiImpLaugh} from 'react-icons/gi'

const Header = () => {
  return (
      <div className="flex justify-center items-center flex-col my-5 h-1/5">
        <span className="text-7xl"><GiImpLaugh /></span>
        <h1 className="font-thin italic">I be funny sometimes.</h1>
      </div>
  );
};

export default Header;
