import { FaHome } from "react-icons/fa";
const Experience = () => {
  return (
    <div className="w-1/2 text-left">
      <div className="font-bold mt-2 mb-2 bg-yellow-600 p-1">
        My Work Experience
      </div>
      <div className="text-green-900 font-bold uppercase">
        I Have Been in Practice for: 7+ YEARS
      </div>
      <div>
        <div className="flex items-center">
          <FaHome />
          <h6 className="ml-4 ">Midtown Medical Clinic</h6>
        </div>
        <p className="ml-7">Senior doctor</p>
        <div className="flex">
          <FaHome />
          <h6 className="ml-4 ">Midtown Medical Clinic</h6>{" "}
        </div>
        <p className="ml-7">Senior doctor</p>
      </div>
    </div>
  );
};

export default Experience;
