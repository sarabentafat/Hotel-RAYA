import React from 'react'
import ReservationForm from './Registration'
import Navbar from '../components/Navbar';

const Reservation = () => {
  return (
    <div>
      <div className="mx-20 my-10 ">
        <div className="text-3xl font-bold mb-4"> Reserver une chambre</div>

        <ReservationForm></ReservationForm>
      </div>
    </div>
  );
}

export default Reservation