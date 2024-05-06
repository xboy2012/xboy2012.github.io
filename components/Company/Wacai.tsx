import img from './images/logo-wacai.png';

export const Wacai = () => {
  return (
    <div className="w-full h-full bg-black rounded overflow-hidden">
      <div
        className="bg-center bg-contain bg-no-repeat mx-3 h-full"
        style={{ backgroundImage: `url("${img.src}")` }}
      />
    </div>
  );
};
