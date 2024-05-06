import img from './images/logo-tencent.svg';

export const Tencent = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className="bg-center bg-no-repeat bg-contain mx-3 h-full"
        style={{ backgroundImage: `url("${img.src}")` }}
      />
    </div>
  );
};
