export interface RectanguloInterface {
  altura: number;
  readonly ancho: number;
}

export interface RectanguloConBorde extends RectanguloInterface {
  color: string;
}

export const miRectangulo: RectanguloConBorde = {
  altura: 30,
  ancho: 20,
  color: 'amarillo',
};

console.log((miRectangulo.altura = 848));
console.log(miRectangulo);
