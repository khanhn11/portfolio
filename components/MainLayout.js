import { React } from "react";
import Navbar from "./Navbar";
import Head from "next/head";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Romantiko Barbershop</title>
        <meta
          name="description"
          content="Khanh Nguyen's Official Portfolio Website"
        />
        {/** Need to change ico - lenard */}
        <link rel="icon" href={"/logo.jpeg"} />
      </Head>

      <Navbar />
      <div id="mainContainer">{children}</div>
    </>
  );
}

export default MainLayout;
