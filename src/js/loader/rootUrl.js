const pathname = location.pathname;
const docName = 'index.html';
const l1 = pathname.length - docName.length;
const hasFile = pathname.substring(l1) === docName;
const url = hasFile ? pathname.substring(0, l1) : pathname;
const l2 = url.length - 1;
const ROOT_URL = url.substring(l2) === '/' ? url.substring(0, l2) : url;

export default ROOT_URL;