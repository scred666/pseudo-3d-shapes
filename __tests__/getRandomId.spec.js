import { getRandomId } from '@/utils'

const expectedResult = '4fzzzxtll'

test(`random id must be equal to "${expectedResult}"`, () => {
  global.Math.random = () => 0.123456789123
  expect(getRandomId()).toBe(expectedResult)
})
