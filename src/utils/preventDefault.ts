interface Preventable {
  preventDefault(): void;
}

export const preventDefault = (event: Preventable) => {
  event.preventDefault();
};
