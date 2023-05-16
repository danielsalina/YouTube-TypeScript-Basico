import { faker } from '@faker-js/faker';
import {
  actualizarProducto,
  agregarProducto,
  buscarProducto,
  deleteProducto,
  productos,
} from './productos/producto.services';

for (let index = 0; index < 20; index++) {
  agregarProducto({
    descripcion: faker.commerce.productDescription(),
    imagen: faker.image.cats(),
    color: faker.color.rgb(),
    precio: parseInt(faker.commerce.price()),
    titulo: faker.commerce.productName(),
    stock: faker.datatype.number(),
    categoriaID: faker.datatype.uuid(),
    talla: faker.helpers.arrayElements(['M', 'S', 'XL', 'L', 'XXL']),
  });
}

console.log(productos);

const producto = productos[0];
actualizarProducto(producto.id, {
  titulo: 'Nuevo nombre',
  precio: 777,
});

buscarProducto({
  precio: 777,
  stock: 77,
  titulo: 'Hola juan',
});

deleteProducto(producto.id);
