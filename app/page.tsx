import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="mt-10 flex-1">
        <ProductList />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
