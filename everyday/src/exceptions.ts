function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  try {
    const root = sqrt(x);
    return root;
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return -1;
    } else {
      throw e;
    }
  }
}