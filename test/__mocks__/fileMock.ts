export const hasNumberTests = [
  { params: 'apld1', result: true },
  { params: 'apkoeojf', result: false },
  { params: 'aR', result: false },
  { params: 3 as any, result: true },
  { params: 'plop.4.5', result: true },
  { params: '', result: false },
]

export const capitalizeTests = [
  { params: 'a', result: 'A' },
  { params: 'A', result: 'A' },
  { params: 'aR', result: 'Ar' },
  { params: 3 as any, result: '' },
  { params: 'plop', result: 'Plop' },
  { params: 'pLoP', result: 'Plop' },
]

export const createCapitalizedNamesTests = [
  { params: 'armand', result: 'Armand' },
  { params: 'armand jean', result: 'Armand Jean' },
  { params: 'ArMand JeaN', result: 'Armand Jean' },
  { params: '   plop  ', result: 'Plop' },
  { params: '   pLoP plip  ', result: 'Plop Plip' },
]

export const greetingsTests = [
  {
    params: 3 as any,
    result: {
      message: 'Please provide a string, without numbers',
      error: true,
    },
  },
  {
    params: 'hello3',
    result: {
      message: 'Please provide a string, without numbers',
      error: true,
    },
  },
  {
    params: '42',
    result: {
      message: 'Please provide a string, without numbers',
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
]
