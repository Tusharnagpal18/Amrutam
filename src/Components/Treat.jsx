import { BiBorderRadius } from "react-icons/bi";
import './treat.css'; 
const Treat = () => {
 
  return (
    <>
      <div className="w-1/2 text-left font-bold mt-2 mb-2 bg-green-200 p-1">The Concerns I Treat</div>
      <div className="text-left">

        <button> Skin Treatment</button>
        <button>Pregnancy</button>
        <button>Period Doubts</button>
        <button>Endometriosis</button> <br />
        <button>Pelvic Pain</button>
        <button>Ovarian Cysts</button>
        <button>+5 More</button>
      
      </div>
    </>
  );
};

export default Treat;
