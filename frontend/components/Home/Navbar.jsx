import { BsArrowRightShort } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

const Navbar = () => {
  const { address } = useAccount();
  const router = useRouter();

  return (
    <nav
      className={`flex justify-between px-20 py-4 border-b border-gray-900 ${
        router.pathname === '/' ? 'bg-black' : 'bg-[#18181A]'
      }`}>
      <p
        onClick={() => {
          router.push('/');
        }}
        className={`font-semibold font-Poppins text-2xl cursor-pointer ${
          router.pathname === '/' ? 'text-white' : 'text-[#EDEDEF]'
        }`}>
        ZkVote
      </p>
      <div className='flex gap-8 items-center font-Poppins'>
        <button
          onClick={() => router.push('/dashboard')}
          className={`flex items-center justify-center font-Poppins gap-2 py-2 px-4 ${
            router.pathname === '/' ? 'bg-[#6635F1] ' : 'bg-[#443592]'
          }  rounded-xl text-[#EDEDEF]`}>
          {router.pathname === '/dashboard' ? (
            <p>
              {address
                ? `${address?.slice(0, 5)}...${address?.slice(
                    address?.length - 3
                  )}`
                : 'Connect'}
            </p>
          ) : (
            'Go to Dashboard'
          )}

          <span>
            <BsArrowRightShort size={22} />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
