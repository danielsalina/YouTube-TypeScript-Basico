(() => {
  function calcularFecha(): number {
    return new Date().getTime();
  }

  function solicitarFecha(): void {
    console.log(calcularFecha());
  }

  solicitarFecha();
})();
