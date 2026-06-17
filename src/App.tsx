import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
