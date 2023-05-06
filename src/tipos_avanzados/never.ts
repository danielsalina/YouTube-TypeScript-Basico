const buzzLightYear = (): never => {
  while (true) {
    console.log('Al infito y más allááááá');
  }
};

export const error = (error: string): never => {
  throw new Error(error);
};

export const obtenerExcusas = (excusas: unknown) => {
  if (typeof excusas === 'string') {
    return 'Deja la flojera';
  } else if (Array.isArray(excusas)) {
    return 'La verdad... Me da pena contigo....';
  }

  return error('Benditas excusas...');
};
