import "./App.css";
import Banner from "./Components/Banner";
import Experience from "./Components/Experience";
import Headers from "./Components/Headers";
import Info from "./Components/Info";
import Treat from "./Components/Treat";
import Reviews from "./Components/Reviews";
import AppointmentFee from "./Components/AppointmentFee";

function App() {
  return (
    <>
      <Headers />
      <Banner />
      <Info />
      <Treat />
      <Experience />
      <Reviews />

      <AppointmentFee />
    </>
  );
}

export default App;
