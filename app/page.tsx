import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        {/* Import Montserrat font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="nav-bar">
        <a href="">Event</a>
        <a href="">Who We Are</a>
        <a href="">Sponsors</a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <button className="filled-button">Register</button>
      </div>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
    </div>
  );
}
