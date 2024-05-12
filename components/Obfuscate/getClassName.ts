let classCount = 0;
let classCache: Map<string, string> | undefined;

export const getClassName = (text: string) => {
  if (!classCache) {
    classCache = new Map();
  }
  let className = classCache.get(text);
  if (!className) {
    classCount++;
    className = `obfuscate-${classCount}`;
    classCache.set(text, className);
    const style = document.createElement('style');
    const length = text.length;
    // split the text into two parts to avoid detected.
    const p = length >> 1;
    const leftText = text.substring(0, p);
    const rightText = text.substring(p);
    style.innerHTML = `.${className}::before{content:${JSON.stringify(leftText)};display:inline}.${className}::after{content:${JSON.stringify(rightText)};display:inline}`;
    document.head.appendChild(style);
  }
  return className;
};
