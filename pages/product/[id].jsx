import { useRouter } from "next/router";
import Header from "../../components/Header";

const all = {
  "1": { id: "1", title: "Luminária Smart RGB", price: "R$ 129,90", img: "/images/lamp.jpg", description: "Luz inteligente com controle por app e modos RGB." },
  "2": { id: "2", title: "Carregador 3 em 1 Wireless", price: "R$ 199,90", img: "/images/charger.jpg", description: "Carrega celular, fone e relógio ao mesmo tempo." },
  "3": { id: "3", title: "Mini Aspirador USB", price: "R$ 89,90", img: "/images/vacuum.jpg", description: "Compacto para limpar mesas e teclados, recarregável USB." }
};

export default function ProductPage(){
  const router = useRouter();
  const { id } = router.query;
  const p = all[id];

  if(!p) return (<div><Header /><main className='container mx-auto p-8'>Produto não encontrado</main></div>);

  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={p.img} alt={p.title} className="rounded-lg w-full object-cover" />
          <div>
            <h1 className="text-3xl font-bold">{p.title}</h1>
            <p className="text-2xl text-blue-400 mt-4">{p.price}</p>
            <p className="mt-6 text-gray-300">{p.description}</p>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">Comprar</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
