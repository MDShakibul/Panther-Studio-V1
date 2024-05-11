import Head from "next/head";
import { Inter } from "next/font/google";
import RootLayout from "./components/Layouts/RootLayout";

export default function Home() {
  return (
    <>
      <Head>
				<title>Home - Panther Studio</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>

      <div className="container">
      <p>home</p>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};
