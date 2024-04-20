import { useState } from "react"

const AppointmentFee = () => {

  const[Fee,SetFee] = useState(699);
  const[Slots,SetSlots] = useState(10);
  SetSlots()
  SetFee()
  return (




    <>

    <div>
        Appointment Free {Fee}
    </div>

    <div>
      <h3>Select your mode of session</h3>

      <button>In-Clinic 45Mins</button>
      <button>Video 45Mins</button>
      <button>Chat 10Mins</button>
    </div>

    <div>
      <h3>Pick a time slot</h3>
      tag of calendar

      <div>
        <button>Mon,10 Oct {Slots} </button>
        <button>Mon,11 Oct {Slots} </button>
        <button>Mon,12 Oct {Slots} </button>
      </div>
    </div>



<div><h4>
  Morning  condtion basess par hoga
</h4>
<button>09:00 AM</button>
<button>09:30 AM</button>
<button>10:00 AM</button>
<button>10:15 AM</button>
<button>10:45 AM</button>
<button>11:00 AM</button>

</div>




<div><h4>
  Evening  condtion basess par hoga
</h4>
<button>04:00 PM</button>
<button>04:15 PM</button>
<button>04:30 PM</button>
<button>04:45 PM</button>
<button>05:15 PM</button>


</div>


<div>
  <button onSubmit={console.log("there are going for submit")}></button>
</div>







    </>
  )
}

export default AppointmentFee