import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Web3Modal } from "@/context/Web3Modal";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Web3Modal>
        <Component {...pageProps} />
      </Web3Modal>
    </Layout>
  );
}
