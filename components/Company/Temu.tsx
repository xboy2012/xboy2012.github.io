import img from './images/logo-temu.jpg';

export const Temu = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-full rounded overflow-hidden"
      style={{ backgroundImage: `url("${img.src}")` }}
    />
  );
};
