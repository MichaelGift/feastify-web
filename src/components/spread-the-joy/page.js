import { Link } from 'react-router-dom';
import food from "../../assets/aboutus/platefood.jpg"

export default function SpreadJoyPage() {
  return (
    <div className="py-4">
      <section className="bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Spread</h1>
        <h1 className="text-3xl font-bold mb-4">Joy with</h1>
        <h1 className="text-3xl text-color font-bold mb-4">Feastify</h1>
      </section>

      <section>
      <p className="mb-6">A heartfelt initiative where you can make a difference through the power of culinary experiences. Feastify aims to spread happiness by curating and delivering unforgettable meals to those in need. Join us in sharing the joy of luxury dining with families in need, children&apos;s homes, and beyond.</p>
      </section>

      <section className="space">
        <div class="card" style={{width: '18rem '}}>
        <img src={food} class="card-img-top" alt="..."/>
        <div class="joy-body">
        <h2 className="text-xl font-bold">Package Type</h2>
          <p className="mb-4">Your share experience package includes a team of three
            talented chefs, ready to create a memorable 
            event filled with delicious Italian cuisine.</p>
          <div className="text-xl font-bold mb-4">KSH 40,000.00</div>
          <Link href="/share-the-joy">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-3xl">
            <span className="font-bold block">Share</span>
          </button>
          </Link>
        </div>
      </div>
      <div class="card" style={{width: '18rem '}}>
        <img src={food} class="card-img-top" alt="..."/>
        <div class="joy-body">
        <h2 className="text-xl font-bold">Package Type</h2>
          <p className="mb-4">Your share experience package includes a team of three
            talented chefs, ready to create a memorable 
            event filled with delicious Italian cuisine.</p>
          <div className="text-xl font-bold mb-4">KSH 40,000.00</div>
          <Link href="/share-the-joy">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-3xl">
            <span className="font-bold block">Share</span>
          </button>
          </Link>
        </div>
      </div>
      </section>
    </div>
  );
}