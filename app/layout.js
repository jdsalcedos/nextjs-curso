import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google"; //importar las fuentes de Google

export const metadata = {
  title: "Mi tienda con Next",
  description: "pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
};
//fuentes
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
