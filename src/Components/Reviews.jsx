import {useState} from 'react'
const Reviews = () => {
    const [Reviewscount , ReviewsSetCount ]= useState(120);
    ReviewsSetCount ()
    
    
  return (
    <>
        <div>
            Featured Reviews {Reviewscount} 
            
        </div>

    </>
  )
}

export default Reviews