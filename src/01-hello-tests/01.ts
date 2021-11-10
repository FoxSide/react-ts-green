export const sum = (a: number, b: number) => {
  return a + b;
}
export const mult = (a: number, b: number) => {
  return a * b;
}

export const splitintoWord = (sentense: string) => {
  const word = sentense.toLocaleLowerCase().split(' ')
  return word.filter(w => w !== '' && w !== '-')
    .map(w => w
      .replace('!', '')
      .replace('.', '')
      .replace(',', ''))
}