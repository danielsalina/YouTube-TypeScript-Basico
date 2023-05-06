//////////////////////////    ENUM      //////////////////////////
/* import {Usuario, ROLES} from "./tipos_avanzados/enum.ts";

let user: Usuario = {
  correo: 'correo@correo.com',
  roles: ROLES.ADMINISTRADOR,
};

console.log(user);*/

//////////////////////////    TUPLAS      //////////////////////////
/*import { userID, db_sql, db_nosql } from './tipos_avanzados/tuplas';

console.log(userID);
console.log(typeof db_sql, db_sql);
console.log(typeof db_nosql, db_nosql);*/

//////////////////////////    UNKNOWN      //////////////////////////
/*import { desconocido, desconocido2 } from './tipos_avanzados/unknown';

if (typeof desconocido === 'number') {
  desconocido.toString();
}

function get(data: string): unknown {
  return JSON.parse(data);
}

if (typeof desconocido === 'number') {
  let numeros: number = desconocido;
  console.log(numeros);
}

console.log(get('SUSCRIBETE A MI CANAL 😉'));*/

//////////////////////////    NEVER      //////////////////////////
import { obtenerExcusas } from './tipos_avanzados/never';

console.log(obtenerExcusas('Tengo flojera'));
console.log(obtenerExcusas([18518]));
console.log(obtenerExcusas(true));
console.log(obtenerExcusas('Tengo sueño'));
