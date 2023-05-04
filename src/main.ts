import { desconocido } from './tipos_avanzados/unknown';

if (typeof desconocido === 'number') {
  desconocido.toString();
}

function get(data: string): unknown {
  return JSON.parse(data);
}

if (typeof desconocido === 'number') {
  let numeros: number = desconocido;
}
