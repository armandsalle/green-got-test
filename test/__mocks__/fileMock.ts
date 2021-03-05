export const isTextWellFormatedTests = [
  { params: 'apld1', result: false },
  { params: 'apkoeojf', result: true },
  { params: 'aR', result: true },
  { params: 3 as any, result: false },
  { params: 'plop.4.5', result: false },
  { params: '', result: true },
  { params: '<span>hello</span>', result: false },
  { params: 'armand', result: true },
  { params: 'armand sallé', result: true },
  { params: 'jean-marc', result: true },
]

export const capitalizeTests = [
  { params: 'a', result: 'A' },
  { params: 'A', result: 'A' },
  { params: 'aR', result: 'Ar' },
  { params: 3 as any, result: '' },
  { params: 'plop', result: 'Plop' },
  { params: 'pLoP', result: 'Plop' },
  { params: 'pLoP', result: 'Plop' },
  { params: 'armand', result: 'Armand' },
  { params: 'armand jean', result: 'Armand Jean' },
  { params: 'ArMand JeaN', result: 'Armand Jean' },
  { params: 'ArMand-JeaN', result: 'Armand-Jean' },
  { params: 'ArMand-JeaN àndré', result: 'Armand-Jean Àndré' },
  { params: '   plop  ', result: 'Plop' },
  { params: '   pLoP plip  ', result: 'Plop Plip' },
  { params: '   pLoP plip anDré-quEntin ', result: 'Plop Plip André-Quentin' },
]

export const greetingsTests = [
  {
    params: 3 as any,
    result: {
      message: 'Please provide a string',
      error: true,
    },
  },
  {
    params: 'hello3',
    result: {
      message: 'Please provide a string',
      error: true,
    },
  },
  {
    params: '42',
    result: {
      message: 'Please provide a string',
      error: true,
    },
  },
  {
    params: '',
    result: {
      message: 'Hello Anonymous',
      error: false,
    },
  },
  {
    params: ' Armand   ',
    result: {
      message: 'Hello Armand',
      error: false,
    },
  },
  {
    params: 'armand',
    result: {
      message: 'Hello Armand',
      error: false,
    },
  },
  {
    params: 'Armand',
    result: {
      message: 'Hello Armand',
      error: false,
    },
  },
  {
    params: 'ARMAND',
    result: {
      message: 'Hello Armand',
      error: false,
    },
  },
  {
    params: 'ARMAND Jean',
    result: {
      message: 'Hello Armand Jean',
      error: false,
    },
  },
  {
    params: 'ARMAND-Jean',
    result: {
      message: 'Hello Armand-Jean',
      error: false,
    },
  },
  {
    params: 'armand-Jean andré',
    result: {
      message: 'Hello Armand-Jean André',
      error: false,
    },
  },
]
