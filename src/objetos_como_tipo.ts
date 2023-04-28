(() => {
  type data = { nombre: string; correo: string; telefono: number; password: number };
  let usuarios: data[] = [];

  function registro(data: data) {
    usuarios.push(data);
  }

  registro({ nombre: 'JUAN', correo: 'PEPE@CORRE.COM', telefono: 1234, password: 123456 });
  registro({ nombre: 'PEPITO', correo: 'PEPITO@CORRE.COM', telefono: 1234, password: 123456 });
  registro({
    nombre: 'PETROLINA',
    correo: 'PETROLINA@CORRE.COM',
    telefono: 1234,
    password: 123456,
  });

  console.log(usuarios);
})();
