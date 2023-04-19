(() => {
  type Nombre = string | number | boolean;

  function name(nombre: Nombre) {
    return nombre;
  }

  type Año = number;
  type Marca = string;
  type Modelo = string;

  type Auto = {
    año_auto: Año;
    marca_auto: Marca;
    modelo_auto: Modelo;
  };

  const auto_año: Año = 1998;
  const auto_marca: Marca = 'Ford';
  const auto_modelo: Modelo = 'Festiva';

  const mi_primer_auto: Auto = {
    año_auto: auto_año,
    marca_auto: auto_marca,
    modelo_auto: auto_modelo,
  };

  console.log(mi_primer_auto.modelo_auto);
})();
