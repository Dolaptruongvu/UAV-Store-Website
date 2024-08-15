import MyNavbar from "../components/navbar";
import ProductList from "../components/productList";
import ControlledCarousel from "../components/carousels";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <ControlledCarousel></ControlledCarousel>
      <ProductList></ProductList>
      <Footer></Footer>
    </>
  );
}

export default Home;
