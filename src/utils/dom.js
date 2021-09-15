export function getOffsetTop(elem) {
    const bounds = elem.getBoundingClientRect();
    const bodyTop = window.scrollY || document.documentElement.scrollTop;
  
    return bounds.top + bodyTop;
  }
  
  export function isWindowDefined() {
    return typeof window !== 'undefined';
  }