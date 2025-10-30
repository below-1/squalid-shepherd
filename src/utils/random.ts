export function getRandomElement<T>(arr: T[], seed?: number): T {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  // Use seeded or default random generator
  const random = seed !== undefined
    ? (() => {
        // Simple linear congruential generator (LCG)
        const a = 1664525;
        const c = 1013904223;
        const m = 2 ** 32;
        let state = seed >>> 0; // Ensure unsigned 32-bit integer
        state = (a * state + c) % m;
        return state / m;
      })()
    : Math.random();

  const randomIndex = Math.floor(random * arr.length);
  return arr[randomIndex];
}
