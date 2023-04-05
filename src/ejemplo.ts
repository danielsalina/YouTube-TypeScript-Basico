//////////////////////////////// USANDO fetch CON FUNCIONES ASYNC AWAIT ////////////////////////////////////////////
async function miPeticion1() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users'),
      json = await response.json();
    console.log(
      '-------------------------------------------------------------'
    );
    console.log(
      '---------- USANDO fetch CON FUNCIONES ASYNC AWAIT -----------'
    );
    console.log(
      '-------------------------------------------------------------'
    );
    if (!response.ok && response.status != 200) {
      throw 'Hubo un error en la petición';
    }
    json.forEach((element: any) => {
      console.log(
        'Nombre: ',
        element.name,
        'Correo: ',
        element.email,
        'Teléfono: ',
        element.phone
      );
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Hola soy un finally si o si me voy a mostrar');
  }
}

miPeticion1();
