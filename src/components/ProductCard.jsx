export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition-all p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">
        Rp {product.price.toLocaleString()}
      </p>
    </div>
  );
}
