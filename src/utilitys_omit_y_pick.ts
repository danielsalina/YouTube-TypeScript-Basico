import { ROLES } from './tipos_avanzados/enum';

export interface Usuario {
  id: string | number;
  nombre: string;
  correo: string;
  departamento: string;
  rol: ROLES;
  fecha_de_creacion: string;
  fecha_de_modificacion: string;
}

/////////////////////////////////////////  Omit   /////////////////////////////////////////
export interface AltaDeUsuario
  extends Omit<Usuario, 'id' | 'fecha_de_creacion' | 'fecha_de_modificacion'> {
  password: string;
}

export const nuevo_usuario: AltaDeUsuario = {
  nombre: 'PEPE',
  correo: 'correo@depepe.com',
  departamento: 'IT',
  rol: ROLES.ADMINISTRADOR,
  password: 'DSC1CS1655S1D',
};

console.log('Omit', nuevo_usuario);

/////////////////////////////////////////  Pick   /////////////////////////////////////////
export interface AltaDeUsuario2 extends Pick<Usuario, 'correo' | 'departamento' | 'rol'> {
  password: string;
}

export const nuevo_usuario2: AltaDeUsuario2 = {
  correo: 'correo@dejuan.com',
  departamento: 'IT',
  rol: ROLES.OPERADOR,
  password: 'wqdwqd564161dw',
};

console.log('Pick', nuevo_usuario2);
