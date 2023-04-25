(() => {
  function division({ dividendo, divisor }: { dividendo: number; divisor: number }) {
    return divisor / dividendo;
  }

  console.log(division({ dividendo: 10, divisor: 2 }));
})();
