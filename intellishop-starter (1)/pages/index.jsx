import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", title: "Luminária Smart RGB", price: "R$ 129,90", img: "/images/lamp.jpg", description: "Luz inteligente com controle por app e modos RGB." },
  { id: "2", title: "Carregador 3 em 1 Wireless", price: "R$ 199,90", img: "/images/charger.jpg", description: "Carrega celular, fone e relógio ao mesmo tempo." },
  { id: "3", title: "Mini Aspirador USB", price: "R$ 89,90", img: "/images/vacuum.jpg", description: "Compacto para limpar mesas e teclados, recarregável USB." }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>IntelliShop — Produtos Inteligentes</title>
        <meta name="description" content="IntelliShop — gadgets inteligentes para sua casa" />
      </Head>
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl mb-8">
          <h1 className="text-4xl font-bold">Tecnologia e estilo para o seu dia a dia ⚡</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">Gadgets inteligentes que facilitam sua rotina. Entrega rápida no Brasil.</p>
        </section>

        <h2 className="text-2xl font-semibold mb-4">Produtos em destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </>
  );
}
