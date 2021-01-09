export const sumElements = arr => {
  if (arr.length === 0) {
    return 0
  } else {
    return arr.reduce((acc, val) => acc + val)
  }
}
export const isValidNumber = number => !isNaN(parseFloat(number)) && number >= 0

export const getRandomId = () => Math.random().toString(36).substr(2, 9)
