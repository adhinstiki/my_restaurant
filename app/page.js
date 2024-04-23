import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import  Header from "@/components/header";
import Features from "@/components/Features";
import Parallax from "@/components/Parallax";
import CardGrid from "@/components/CardGrid";

export default function Home() {
  return (
    <div className="mb-5">
      <Navbar />
      <Header />
      <Features />
      <Parallax />
      <CardGrid />
    </div>
  );
}
