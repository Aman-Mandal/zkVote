const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className='top-0 left-0 fixed bg-black/50 backdrop-blur-sm h-screen w-screen z-20'></div>
  );
};
export default Backdrop;
