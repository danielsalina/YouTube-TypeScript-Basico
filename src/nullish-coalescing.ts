// 0 === "false"
// "" === "false"
// false === "false"

(() => {
  function auto(año: number, marca: string, cantidad?: number, inStock?: boolean) {
    return {
      año,
      marca,
      cantidad: cantidad ?? 7,
      inStock: inStock ?? true,
    };
  }

  let test1 = auto(1998, 'FORD', 5, true);
  let test2 = auto(1998, 'FORD');
  let test3 = auto(1998, 'FORD', 0, false);

  console.log(test1);
  console.log(test2);
  console.log(test3);
})();
