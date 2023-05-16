import { faker } from '@faker-js/faker';
import { Producto } from './producto.model';
import { ActualizarProductoDTO, BuscarProductoDTO, CrearProductoDTO } from './producto.dto';

export const productos: Producto[] = [];

export const agregarProducto = (data: CrearProductoDTO): Producto => {
  const nuevoProducto = {
    ...data,
    id: faker.datatype.uuid(),
    fecha_de_creacion: faker.date.recent(),
    fecha_de_actualizacion: faker.date.recent(),
    categoria: {
      id: data.categoriaID,
      fecha_de_creacion: faker.date.recent(),
      fecha_de_actualizacion: faker.date.recent(),
      nombre: faker.commerce.department(),
    },
  };

  productos.push(nuevoProducto);
  return nuevoProducto;
};

export const actualizarProducto = (id: string, cambios: ActualizarProductoDTO): Producto => {
  const productoAActualizar = productos.findIndex((producto) => producto.id === id);
  const dataPrevia = productos[productoAActualizar];

  productos[productoAActualizar] = {
    ...dataPrevia,
    ...cambios,
  };

  return productos[productoAActualizar];
};

export const buscarProducto = (producto: BuscarProductoDTO) => {};

export const deleteProducto = (id: string): string => {
  const productoAActualizar = productos.findIndex((producto) => producto.id === id);

  return 'El producto fue eliminado';
};
