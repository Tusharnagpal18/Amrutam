import "./info.css";
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
function Info() {
  return (
    <>
      <div className="w-1/2 border-2 border-lime-200  pt-0 rounded-lg">
        <div className="font-bold text-left mb-2 p-4 bg-lime-100 w-full">A Little About me tag</div>
        <div className="text-justify p-2">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
          <span className="font-bold underline">Read More </span>
        </div>

     
          <div className="text-left mt-5 p-2">
            <span>Language Spoken</span>
            <button className="bg-gray-200 rounded-lg m-1 p-1">English</button>
            <button className="bg-gray-200 rounded-lg m-1 p-1">Hindi</button>
            <button className="bg-gray-200 rounded-lg m-1 p-1">Telugu</button>
          </div>
      
        <div className="flex gap-4 mt-2 p-2"><FaFacebook/> <FaTwitter/>  <FaInstagram/>  <FaYoutube/> </div>
      </div>
    </>
  );
}

export default Info;
