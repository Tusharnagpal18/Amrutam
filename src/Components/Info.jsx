import "./info.css";
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
function Info() {
  return (
    <>
      <div className="w-1/2">
        <div className="font-bold text-left mt-2 mb-2">A Little About me tag</div>
        <div className="text-justify">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
          <span className="font-bold underline">Read More </span>
        </div>

     
          <div className="text-left mt-5">
            <span>Language Spoken</span>
            <button className="bg-gray-200 rounded-lg m-1 p-1">English</button>
            <button className="bg-gray-200 rounded-lg m-1 p-1">Hindi</button>
            <button className="bg-gray-200 rounded-lg m-1 p-1">Telugu</button>
          </div>
      
        <div className="flex gap-4 mt-2"><FaFacebook/> <FaTwitter/>  <FaInstagram/>  <FaYoutube/> </div>
      </div>
    </>
  );
}

export default Info;
