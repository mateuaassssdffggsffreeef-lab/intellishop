import Link from "next/link";

export default function Header(){
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><a className="text-xl font-bold">IntelliShop</a></Link>
        <nav className="space-x-4">
          <Link href="/"><a className="text-sm opacity-90">Produtos</a></Link>
          <a className="text-sm opacity-90">Sobre</a>
          <a className="text-sm opacity-90">Contato</a>
        </nav>
      </div>
    </header>
  );
}
