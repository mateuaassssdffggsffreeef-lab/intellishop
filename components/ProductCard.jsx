import Link from "next/link";

export default function ProductCard({ product }){
  return (
    <article className="bg-gray-800 rounded-xl p-4 shadow-md">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h4 className="font-semibold text-lg">{product.title}</h4>
      <p className="text-blue-400 font-bold mt-2">{product.price}</p>
      <div className="mt-4 flex gap-2">
        <Link href={`/product/${product.id}`}>
          <a className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-center">Comprar</a>
        </Link>
        <Link href={`/product/${product.id}`}><a className="px-4 py-2 border border-gray-700 rounded-md">Detalhes</a></Link>
      </div>
    </article>
  );
}
