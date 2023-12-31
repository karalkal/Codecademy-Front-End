import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, onAddAppointment: addAppointmentToList }) => {
   // MIGHT BE WRONG BUT IT SEEMS THEY MEAN NAME AS APPOINTMENT NAME. NOT PERSON NAME, HENCE WE HAVE CONTACT SEPARATELY
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if([name, contact, date, time].some(val => val ==="")) {
      alert("No, no, no!!!");
      return;
    }
    addAppointmentToList(name, contact, date, time);
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name} setName={setName}
          contact={contact} setContact={setContact}
          date={date} setDate={setDate}
          time={time} setTime={setTime}
          onSubmit={handleSubmit}
          contacts={contacts}
          // need to pass contacts further to ContactPicker
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />

      </section>
    </div>
  );
};