import img from './images/logo-microsoft.svg';

export const Microsoft = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className="bg-center bg-no-repeat bg-cover mx-3 h-full"
        style={{ backgroundImage: `url("${img.src}")` }}
      />
    </div>
  );
};
