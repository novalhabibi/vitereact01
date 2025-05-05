import HeroSlider from "../../components/HeroSlider";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const dummyProducts = [
  { name: 'Aki GS 35Ah', price: 450000, image: '/images/aki1.jpg' },
  { name: 'Aki Yuasa 45Ah', price: 550000, image: '/images/aki2.jpg' },
  { name: 'Aki Incoe 60Ah', price: 700000, image: '/images/aki3.jpg' },
];

export default function Catalog() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Katalog Produk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProducts.map((p, idx) => (
            <ProductCard key={idx} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
