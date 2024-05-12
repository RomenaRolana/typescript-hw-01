function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

merge({ a: 1, b: 2 }, { c: 3, d: 4 });
