export const capitalizeTests = [
  { params: 'a', result: 'A' },
  { params: 'A', result: 'A' },
  { params: 'aR', result: 'Ar' },
  { params: 3 as any, result: '' },
  { params: 'plop', result: 'Plop' },
  { params: 'pLoP', result: 'plop' },
]

export const greetingsTests = [
  {
    params: 3 as any,
    result: {
      message: 'Please provide a string as paramater for greetings(firstName)',
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
]
