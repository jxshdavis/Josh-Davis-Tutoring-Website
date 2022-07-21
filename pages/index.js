import Head from "next/head";
import Image from "next/image";
import styled from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
  font-family: "Roboto", sans-serif;
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Testimonials />
      <Footer />
    </Container>
  );
}
