import { Producto } from './producto.model';

export interface CrearProductoDTO
  extends Omit<Producto, 'id' | 'fecha_de_creacion' | 'fecha_de_actualizacion' | 'categoria'> {
  categoriaID: string;
}

export interface ActualizarProductoDTO extends Partial<CrearProductoDTO> {}

export interface BuscarProductoDTO extends Readonly<Partial<Producto>> {}
