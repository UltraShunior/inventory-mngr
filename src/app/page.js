import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/favicon.ico";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between w-full p-24">
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <nav className="flex items-center justify-between">
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href="/productos">
            Productos
          </Link>
          <Link href="/ventas">
            Ventas
          </Link>
          <Link href="/abastecimento">
            Abastecimento
          </Link>
          <Link href="/proveedores">
            Proveedores
          </Link>
          <Link href="/proveedor">
            Proveedor
          </Link>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
