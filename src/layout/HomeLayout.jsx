import Navbar from "../components/Navbar";
import HeroSwiper from "../components/HeroSwiper";
import PropertyDiscover from "../components/PropertyDiscover";
import Footer from "../components/Footer";
import Properties from "../components/Properties";

export default function HomeLayout() {
  return (
    <>
      <header className="max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main>
        <section>
          <HeroSwiper />
        </section>
        <section className="max-w-7xl mx-auto">
          <PropertyDiscover />
        </section>
        <section className="max-w-7xl mx-auto">
          <Properties />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
