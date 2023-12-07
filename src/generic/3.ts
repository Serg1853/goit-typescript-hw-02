/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return <T & U>{ ...objA, ...objB };
}

export {};
console.log(merge<string, string>("1234", "qwerty"));
