import img from './images/logo-leetcode.svg';

export const LeetCode = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className="bg-center bg-no-repeat bg-contain mx-3 h-full"
        style={{ backgroundImage: `url("${img.src}")` }}
      />
    </div>
  );
};
