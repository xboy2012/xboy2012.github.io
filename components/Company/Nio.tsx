import img from './images/logo-nio.svg';

export const Nio = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className="bg-center bg-no-repeat bg-contain h-full"
        style={{ backgroundImage: `url("${img.src}")` }}
      />
    </div>
  );
};
