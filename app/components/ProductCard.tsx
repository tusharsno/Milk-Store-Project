/* eslint-disable @next/next/no-img-element */
export default function ProductCard({ title, price, img }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img 
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-1">{price}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
}
