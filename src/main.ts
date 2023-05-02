import { Usuario, ROLES } from './tipos_avanzados/enum';

let user: Usuario = {
  correo: 'correo@correo.com',
  roles: ROLES.ADMINISTRADOR,
};

console.log(user);
