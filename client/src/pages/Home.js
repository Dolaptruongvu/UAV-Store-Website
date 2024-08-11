import MyNavbar from "../components/navbar";
import ProductList from "../components/productList";
import ControlledCarousel from "../components/carousels";
function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <ControlledCarousel></ControlledCarousel>
      <ProductList></ProductList>
    </>
  );
}

export default Home;
