import { FAQ, FooterWithoutForm, Newsletter } from "sharedSections";
import { ProductDetails } from "./sections";

function Products() {
  return (
    <>
      <ProductDetails />
      <Newsletter />
      <FAQ />
      <FooterWithoutForm />
    </>
  );
}

export default Products;
