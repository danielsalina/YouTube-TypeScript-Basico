function sumar(a: number, b: number) {
  return console.log(a + b);
}
sumar(1, 5);

//// Funciones con parámetros opcionales
function sumar2(a: number, b: number, c?: number) {
  return console.log(a + b + (c || 0));
}
sumar2(1, 5, 5);

//// Funciones con parámetros predeterminados
function sumar3(a: number, b: number, c: number = 0) {
  return console.log(a + b + c);
}
sumar3(1, 5, 5);

function potencia(valor: number, exponente: number = 10) {
  console.log(valor ** exponente);
}
potencia(7);
