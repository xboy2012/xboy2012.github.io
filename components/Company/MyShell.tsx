import img from './images/logo-myshell.jpg';

export const MyShell = () => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-full rounded overflow-hidden"
      style={{ backgroundImage: `url("${img.src}")` }}
    />
  );
};
