import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Testimonials />
      <Footer />
    </div>
  );
}
