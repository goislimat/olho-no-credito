import { FAQ, FooterWithoutForm, Newsletter } from "sharedSections";
import { Navbar } from "ui";
import { ProductDetails } from "./sections";

function Products() {
  return (
    <>
      <Navbar />
      <ProductDetails />
      <Newsletter />
      <FAQ />
      <FooterWithoutForm />
    </>
  );
}

export default Products;
