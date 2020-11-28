import { FAQ, Newsletter } from "sharedSections";
import { ProductDetails } from "./sections";

function Products() {
  return (
    <>
      <ProductDetails />
      <Newsletter />
      <FAQ />
    </>
  );
}

export default Products;
