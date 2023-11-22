import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Home/Header';
import About from '@/components/Home/About';
import Tagline from '@/components/Home/Tagline';
import Footer from '@/components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Tagline />
      <Footer />
    </div>
  );
}
