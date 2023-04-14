(() => {
  let nulo: null = null;
  let undefinida: undefined = undefined;

  let numeros: number | null = null;
  let frase: string | undefined = undefined;

  function cafecito(tipo: string | null) {
    let cafe = '';
    if (tipo) {
      cafe = `${tipo}`;
    } else {
      cafe = 'Ninguno';
    }

    console.log(cafe);
  }

  function cafecito2(tipo: string | null) {
    let cafe = '';
    cafe = tipo?.concat() || 'Ninguno';
    console.log(cafe);
  }

  cafecito2('Guayoyo');
  cafecito2(null);
})();
