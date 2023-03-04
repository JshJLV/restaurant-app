import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function FormReservation() {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    fecha: "",
    hora: "",
    personas: "",
  };

  const [form, setForm] = useState(initialForm);

  const createReservation = async () => {
    try {
      const coleccion = collection(db, "reservas");
      await addDoc(coleccion, form);
    } catch (error) {
      alert("Ha ocurrido un error, no se ha podido realizar la reserva");
    }
  };

  return (
    <div className="xl:w-1/4 xl:px-3 xl:mr-5">
      <h1 className="text-4xl text-center">Reserva</h1>
      <form
        className="xl:flex-1 xl:pl-4 xl:flex xl:flex-col xl:justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-xl mt-3 block">Nombre: </label>
        <input
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-lg"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <label className="text-xl block mt-3">Apellido: </label>
        <input
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-lg"
          placeholder="Apellido"
          value={form.apellido}
          onChange={(e) => setForm({ ...form, apellido: e.target.value })}
        />
        <label className="text-xl block mt-3">Email: </label>
        <input
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-lg"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label className="text-xl block mt-3">Fecha: </label>
        <input
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-l"
          type="date"
          value={form.fecha}
          onChange={(e) => setForm({ ...form, fecha: e.target.value })}
        />
        <label className="text-xl block mt-3">Hora: </label>
        <select
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-lg"
          value={form.hora}
          onChange={(e) => setForm({ ...form, hora: e.target.value })}
        >
          <option>10:00</option>
          <option>10:30</option>
          <option>11:00</option>
        </select>
        <label className="text-xl block mt-3">Personas: </label>
        <select
          className="bg-gray-100 rounded-md mt-2 p-2 w-full text-l"
          value={form.personas}
          onChange={(e) => setForm({ ...form, personas: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>+10</option>
        </select>
        <button
          className="bg-green-600 hover:bg-green-400 text-white 
        text-xl w-full mt-3 px-2 py-2 rounded-md"
          onClick={async () => {
            await createReservation();
            setForm(initialForm);
            alert(
              `Se ha realizado con exito la confirmacion de la reserva: ${form.nombre} ${form.apellido}`
            );
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormReservation;
