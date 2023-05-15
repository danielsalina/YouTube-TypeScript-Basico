// import * as dayjs from 'dayjs';
// console.log(dayjs);
// console.log(dayjs.unix(21321));

import { faker } from '@faker-js/faker';

type Usuario = unknown;

export const Usuarios: Usuario[] = [];

export const crearUsuarios = (): Usuario => {
  return {
    usuarioId: faker.datatype.uuid(),
    nombreUsuario: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.cats(),
    password: faker.internet.password(),
    fechaDeCumple: faker.date.birthdate(),
    fechaDeAlta: faker.date.past(),
  };
};

Array.from({ length: 3 }).forEach(() => {
  Usuarios.push(crearUsuarios());
});

console.log(Usuarios);
