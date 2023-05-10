export interface tecnologias {
  javascript?: string;
  webhook?: string;
  ruby?: string;
  token: string;
  sql: string;
  dto: string;
  php: string;
  logger: string;
  api: string;
  cloud: string;
  laravel: string;
  infra: string;
  debbug: string;
  tcp: string;
  go: string;
}

/////////////////////////////////////////  Partial   /////////////////////////////////////////
export interface lenguajes_de_programacion extends Partial<tecnologias> {}

export const lenguajes: lenguajes_de_programacion = {
  javascript: 'Front',
  ruby: 'Back',
  sql: 'Database',
  php: 'Back',
  go: 'Back',
};

console.log('Partial', lenguajes);

/////////////////////////////////////////  Required   /////////////////////////////////////////
export interface lenguajes extends Required<tecnologias> {}

/*export const lenguajes_de_backend: lenguajes = {
  ruby: 'Back',
  sql: 'Database',
  php: 'Back',
  go: 'Back',
};*/
