// this file contains some tool involving experimental features

export const isExperimental = () => {
  return localStorage.getItem('exp') === '1';
};

export const enableExperimental = () => {
  localStorage.setItem('exp', '1');
};
