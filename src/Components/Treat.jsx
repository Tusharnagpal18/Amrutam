import { BiBorderRadius } from "react-icons/bi";
import "./treat.css";
const Treat = () => {
  return (
    <>
      <div className="w-1/2 border-2 border-lime-200 mt-4 pt-0 rounded-lg">
        <div  className="font-bold text-left mb-2 p-4 bg-lime-100 w-full">
          The Concerns I Treat
        </div>
        <div className="text-left">
          <button className="rounded-full p-2"> Skin Treatment</button>
          <button className="rounded-full p-2">Pregnancy</button>
          <button className="rounded-full p-2">Period Doubts</button>
          <button className="rounded-full p-2">Endometriosis</button> <br />
          <button className="rounded-full p-2">Pelvic Pain</button>
          <button className="rounded-full p-2">Ovarian Cysts</button>
          <button className="rounded-full p-2">+5 More</button>
        </div>
      </div>
    </>
  );
};

export default Treat;
