function AreaTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return area;
}
AreaTriangle(5, 6, 7);
