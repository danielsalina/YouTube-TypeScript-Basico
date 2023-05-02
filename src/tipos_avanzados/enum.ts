export enum ROLES {
  ADMINISTRADOR = 'administrador',
  OPERADOR = 'operador',
  VENDEDOR = 'vendedor',
}

export type Usuario = {
  correo: string;
  roles: ROLES;
};
