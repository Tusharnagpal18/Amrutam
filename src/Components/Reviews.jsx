import { useState } from "react";
const Reviews = () => {
  const [Reviewscount, ReviewsSetCount] = useState(110);
  // ReviewsSetCount();

  return (
    <>
    <div className="w-1/2 border-2 border-lime-200  pt-0 rounded-lg mt-4">
      <div className="font-bold text-left mb-2 p-4 bg-lime-100 w-full">Featured Reviews ({Reviewscount})</div>
      <h2 className="text-gray-400 font-bold uppercase font-mono text-2xl">review 1 </h2>
      <h2 className="text-gray-400 font-bold uppercase font-mono text-2xl">review 2 </h2>
      <h2 className="text-gray-400 font-bold uppercase font-mono text-2xl">review 3 </h2>
    </div>
    </>
  );
};

export default Reviews;
