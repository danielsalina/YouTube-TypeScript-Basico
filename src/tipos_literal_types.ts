(() => {
  type PuntosCardinales = 'N' | 'S' | 'E' | 'O';

  let coordenadas: PuntosCardinales;

  coordenadas = 'N';
  coordenadas = 'S';
  coordenadas = 'E';
  coordenadas = 'O';

  function ubicar_tu_norte(norte: PuntosCardinales) {
    return norte;
  }

  console.log(ubicar_tu_norte('N'));
})();
