export const singleton = <T>(fn: () => T): (() => T) => {
  let value: T;
  let invoked = false;

  return () => {
    if (!invoked) {
      value = fn();
      invoked = true;
    }
    return value;
  };
};
