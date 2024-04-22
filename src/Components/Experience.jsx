import { FaHome } from "react-icons/fa";
const Experience = () => {
  return (
    <div  className="w-1/2 border-2 border-lime-200  pt-0 rounded-lg mt-4">
      <div className="font-bold text-left mb-2 p-4 bg-lime-100 w-full">
        My Work Experience
      </div>
      <div className="text-green-900 font-bold uppercase">
        I Have Been in Practice for: 7+ YEARS
      </div>
      <div className="ml-2">
        <div className="flex items-center">
          <FaHome />
          <h6 className="ml-4 ">Midtown Medical Clinic</h6>
        </div>
        <div className="text-left ml-8 mt-1 text-gray-500 font-bold">Senior doctor</div>
        <div className="flex">
          <FaHome />
          <h6 className="ml-4 ">Midtown Medical Clinic</h6>{" "}
        </div>
        <h3  className="text-left ml-8 mt-1 text-gray-500 font-bold">Senior doctor</h3>
      </div>
    </div>
  );
};

export default Experience;
