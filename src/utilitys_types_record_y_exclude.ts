/////////////////////////////////////////  Record   /////////////////////////////////////////
export const personas: Record<string, null> = {
  pepe: null,
};

export interface CrearPersona extends Record<string, number> {
  pepe: 56161;
}

export type nombreDeGatos = 'Fulano' | 'Suntano' | 'Mengano';

export interface gatos {
  años: number;
  color: string;
}

export const gatitos: Record<nombreDeGatos, gatos> = {
  Fulano: { años: 5, color: 'Marrón' },
  Suntano: { años: 15, color: 'Gris' },
  Mengano: { años: 1, color: 'Blanco y Negro' },
};

console.log('Record', gatitos);

/////////////////////////////////////////  Primitivos   /////////////////////////////////////////
export type Primitivos = string | number | boolean | object;

export const excluido: Exclude<Primitivos, object> = '{}';

console.log('Primitivos', typeof excluido);
