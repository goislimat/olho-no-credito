import { Navbar } from "ui";
import {
  FAQ,
  Footer,
  HowEasyIsToQuery,
  Newsletter,
  PlansSection,
  WhatTheProductDelivers,
} from "./components";

function Plans() {
  return (
    <>
      <Navbar />
      <PlansSection />
      <HowEasyIsToQuery />
      <WhatTheProductDelivers />
      <Newsletter />
      <FAQ />
      <Footer />
    </>
  );
}

export default Plans;
