import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-container text-on-surface">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
