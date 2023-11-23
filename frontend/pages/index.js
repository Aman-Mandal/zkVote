import Image from 'next/image';
import { Inter } from 'next/font/google';
import About from '@/components/Home/About';
import Footer from '@/components/Home/Footer';
import Banner from '@/components/Home/Banner';
import Header from '@/components/Home/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-black'>
      <Header />
      <About />
      <Banner />
      <Footer />
    </div>
  );
}
