(() => {
  let array: string[] = [];
  let array2: Array<string> = [];

  let numeros: number[] = [];
  let numeros2: Array<number> = [];

  let booleano: boolean[] = [];
  let booleano2: Array<boolean> = [];

  let nombre: string[] = ['TS'];
  nombre.push('');

  let palabra = ['palabra1', true];
  console.log(palabra);

  let mixto: (string | boolean | number)[] = ['palabra2', false];
  mixto.push(5161816);
  mixto.forEach((el) => console.log(el));
})();
