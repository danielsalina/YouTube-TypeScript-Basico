(() => {
  // type data = { nombre: string; correo: string; telefono: number; password: number };
  let usuarios: any = [];

  function registro(data: { nombre: string; correo: string; telefono: number; password: number }) {
    usuarios.push(data);
  }

  registro({ nombre: 'JUAN', correo: 'PEPE@CORRE.COM', telefono: 1234, password: 123456 });
  console.log(usuarios);
})();
