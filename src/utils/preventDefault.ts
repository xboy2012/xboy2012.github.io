interface Preventable {
  preventDefault(): void;
}

export const preventDefault = (e: Preventable) => {
  e.preventDefault();
};
