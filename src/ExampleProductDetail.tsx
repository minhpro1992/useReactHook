import { Advertisement } from "./components/advertisement";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction";
import { Product } from "./components/product";

export default function ProductDetail() {
  return (
    <>
      <div className="items-center mb-4">
        <Advertisement />
      </div>
      <div className="md:p-0 container mx-auto my-2 p-4">
        <Header />
        <Product />
        <Introduction />
      </div>
    </>
  );
}
