import "@/styles/globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
    <Head>
      

      


<meta
  name='viewport'
  content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
/>
      
      
      {/* Add Bootstrap CSS */}
      <link 
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      </Head>

      <main className={inter.className}>
          {getLayout(<Component {...pageProps} />)}
      </main>

      {/* Load Bootstrap JavaScript using next/script */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      
    </>
  );
}
