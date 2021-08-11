export const sumElements = arr => {
  return arr.length ? arr.reduce((acc, val) => acc + val, 0) : 0
}
export const isValidNumber = number => !isNaN(parseFloat(number)) && number >= 0

export const getRandomId = () => Math.random().toString(36).substr(2, 9)
