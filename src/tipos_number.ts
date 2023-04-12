(() => {
  let numeros: number = 123;
  numeros = numeros + 4;
  console.log(numeros);

  let edad: number;
  edad = 37;
  if (edad < 18) {
    console.log('Dale pá tu casa menor');
  } else {
    console.log("Bienvenido a la vida pa'");
  }

  let numeros_raros = parseInt('fff0188');
  console.log('numeros_raros', numeros_raros);
  console.log('numeros_raros', typeof numeros_raros);

  if (numeros_raros < 18) {
    console.log('Efectivamente eres un número');
  } else {
    console.log('Efectivamente NO eres un número');
  }

  let hexadecimal = 0x00a;
  console.log(hexadecimal);

  let binary = 0b01101;
  console.log(binary);
})();
