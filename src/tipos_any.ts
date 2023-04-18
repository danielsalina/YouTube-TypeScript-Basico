let cualquiera: any;
cualquiera = 'TS';
cualquiera = 5156165;
cualquiera = {};
cualquiera = [];

cualquiera = 'La imaginación es la facultad del descubrimiento';
console.log((cualquiera as string).toUpperCase());

cualquiera = 515.61651135135;
console.log((<number>cualquiera).toFixed(5));
