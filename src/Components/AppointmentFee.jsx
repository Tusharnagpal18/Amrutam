import { useState } from "react";
import { FaClock } from "react-icons/fa";

const AppointmentFee = () => {
  const [Fee, SetFee] = useState(699);
  const [Slots, SetSlots] = useState(10);
  // SetSlots();
  // SetFee();
  return (
    <>
      <div className="w-1/2 border-2 border-lime-200  p-3 pt-0 rounded-lg mt-4">
        <div className="text-left mt-2">
          <div className="flex justify-between border-gray-200 border-2 rounded-md p-2">
            <span className="font-bold ">Appointment Fee </span>
            <span>{Fee}</span>
          </div>
          <br />
          <div>
            <h3 className="font-bold">Select your mode of session</h3>

            <button className="py-2 px-6 border-2 border-lime-600 bg-lime-100">
              In-Clinic <br />
              45 mins
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              Video <br /> 45 mins
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              Chat <br /> 10 mins
            </button>
          </div>
          <div>
            <h3 className="font-bold">Pick a time slot</h3>
            <div className="flex">
              <FaClock className="mt-4" />
              <button className="py-2 px-6 border-2 border-lime-600 bg-lime-100">
                Mon,10 Oct {Slots}{" "}
              </button>
              <button className="py-2 px-6 border-2 border-lime-600 bg-white">
                Mon,11 Oct {Slots}{" "}
              </button>
              <button className="py-2 px-6 border-2 border-lime-600 bg-white">
                Mon,12 Oct {Slots}{" "}
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Morning </h4>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              09:00 AM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              09:30 AM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              10:00 AM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              10:15 AM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              10:45 AM
            </button>
            <button className="py-2 px-6 border-2 bg-green-700 text-white">
              11:00 AM
            </button>
          </div>

          <div>
            <h4 className="font-bold">Evening</h4>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              04:00 PM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              04:15 PM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              04:30 PM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              04:45 PM
            </button>
            <button className="py-2 px-6 border-2 border-lime-600 bg-white">
              05:15 PM
            </button>
          </div>

          <div className="flex justify-center ">
            <button
              className="w-3/4 bg-green-800 text-center text-white rounded p-2"
              onSubmit={console.log("there are going for submit")}
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentFee;
