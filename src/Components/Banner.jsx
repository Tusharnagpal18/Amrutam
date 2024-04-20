import './banner.css'
const Banner = () => {
  return (
    <>
      <div className="bannerdiv">
        <div>
          <div className="image"></div>
          <h4>Dr. Bruce Wills tag</h4>
          <h6>Gynecologist</h6>
          <div>4.2 rating tag</div>
        </div>

          <div>
            <ul className='bannerul'>
              <li>Follower</li>
              <li>Following</li>
              <li>Posts</li>
            </ul>
          </div>
          <div>
            <button>Book an Appointment</button>
          </div>
      </div>
    </>
  );
};

export default Banner;
