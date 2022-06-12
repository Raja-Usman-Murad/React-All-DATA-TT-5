import react, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setimg] = useState("");

  let inputEvent = (e) => {
    const data = e.target.value;
    setimg(data);
    console.log(data);
  };
  return (
    <>
      <div className='mainSEARCH'>
        <input
        className='inputSEARCH'
          type="text"
          placeholder="search any thing"
          value={img}
          onChange={inputEvent}
        />
      </div>
      {img === "" ? null : <Sresult imgp={img} />}
    </>
  );
};
export default Search;
