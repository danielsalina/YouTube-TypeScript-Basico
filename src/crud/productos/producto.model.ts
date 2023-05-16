import { ModeloBase } from '../base.model';
import { Categoria } from '../categorias/categoria.model';

export type Tallas = 'S' | 'L' | 'M' | 'XL' | 'XXL';

export interface Producto extends ModeloBase {
  titulo: string;
  imagen: string;
  descripcion: string;
  stock: number;
  talla?: Tallas[];
  color: string;
  precio: number;
  categoria: Categoria;
}
