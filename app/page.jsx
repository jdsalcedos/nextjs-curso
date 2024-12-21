import Users from "../components/Users";

//solo funciona si esta del lado del Servidor
export const metadata = {
  title: "mi pagina especial",
};

export default function HomePage() {
  // server component
  return (
    <section>
      <h1>Hello world</h1>
      {/* client component */}
      <Users />
    </section>
  );
}
