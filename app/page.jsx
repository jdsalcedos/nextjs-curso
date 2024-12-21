"use client"; // esto es si se quiere manejar el onClick en frontend, sino se quita el onClick ya que lo manejaría el b.e

import Users from "../components/Users";

export default function HomePage() {
  return (
    <section>
      <h1>Hello world</h1>
      {/* no se podría poner el onClick sin el 'use client' */}
      <button
        onClick={() => {
          alert("hello");
        }}
      >
        Click
      </button>
      <Users />
    </section>
  );
}
