import img from './images/logo-pdd.jpg';

export const Pdd = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-full rounded overflow-hidden"
      style={{ backgroundImage: `url("${img.src}")` }}
    />
  );
};
