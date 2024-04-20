import "./header.css";
function Headers() {
  return (
    <div className="Header">
      <div className="title">AMRUTAM</div>

      <div>
        <ul className="myul">
          <li>Home</li>
          <li>Find Doctors</li>
          <li>About US</li>
        </ul>
      </div>
      <div className="mybtn">
        <button>login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Headers;
