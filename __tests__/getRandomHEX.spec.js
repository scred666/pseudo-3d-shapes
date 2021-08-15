import { generateRandomHEX } from '@/utils/drawing'

const expectedResult = '#7fffff'

describe('generate random HEX tests', () => {
  test('generated HEX must starts with #', () => {
    expect(generateRandomHEX()).toMatch(/^(#)/gm)
  })

  test(`random HEX must be equal to "${expectedResult}"`, () => {
    global.Math.random = () => 0.5
    expect(generateRandomHEX()).toBe(expectedResult)
  })
})
