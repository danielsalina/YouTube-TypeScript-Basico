(() => {
  ///////////////////// EXPLICACIÓN DE REST PARAMS /////////////////////
  function sumar(...valores: number[]) {
    // let suma = 0;

    // EXPLICACIÓN CON REDUCE
    let sumar = valores.reduce((item, valor) => (valor = item + valor), 0);

    // EXPLICACIÓN CON FOR
    // for (let index = 0; index < valores.length; index++) {
    //   suma += valores[index];
    // }

    return sumar;
  }

  console.log(sumar(1, 2, 3, 4, 5, 516, 1, 651, 61651));
  console.log(sumar(1, 2));
  console.log(sumar());

  ///////////////////// EXPLICACIÓN DE SPREAD OPERATOR /////////////////////
  function sumar2(...valores: number[]) {
    let sumar = valores.reduce((item, valor) => (valor = item + valor), 0);
    return sumar;
  }

  let argumentos: number[] = [1, 1418];
  let resultado = sumar2(...argumentos);
  console.log(resultado);
})();
