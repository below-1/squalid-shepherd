export function range(start: number, end?: number, step: number = 1): number[] {
  let result: number[] = [];

  // Handle case where only one argument is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error("Step cannot be 0");
  }

  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > (end ?? 0); i += step) {
      result.push(i);
    }
  }

  return result;
}
