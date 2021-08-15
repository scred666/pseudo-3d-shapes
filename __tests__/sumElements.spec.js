import { sumElements } from '@/utils'

describe('Sum of array items tests', () => {
  test('[1, 2, 3] must return 6', () => {
    expect(sumElements([1, 2, 3])).toBe(6)
  })

  test('[] must return 0', () => {
    expect(sumElements([])).toBe(0)
  })

  test('non object argument must crash function :)', () => {
    expect(() => {
      sumElements('qwe')
    }).toThrow(TypeError)

    expect(() => {
      sumElements('..............')
    }).toThrow(TypeError)
  })
})
