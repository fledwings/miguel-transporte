function getMask(scroll) {
  // Map scroll 0 -> 800
  // blackPoint: 100 -> -50
  // transparentPoint: 100 -> 50
  let bp = 100 - (scroll / 800) * 150;
  let tp = 100 - (scroll / 800) * 50;
  return `linear-gradient(to bottom, black ${bp}%, transparent ${tp}%)`;
}

console.log(getMask(0));
console.log(getMask(200));
console.log(getMask(400));
console.log(getMask(600));
console.log(getMask(800));
