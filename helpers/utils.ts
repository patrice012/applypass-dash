export function generateRandomFourDigit() {
  const min = 1;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
