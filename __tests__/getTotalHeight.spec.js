import { getTotalHeight } from '@/utils/drawing'

const cases = [
  {
    layers: [{ height: 100 }],
    offset: 16,
    result: 264
  },
  {
    layers: [{ height: 19 }],
    offset: 666,
    result: 183
  },
  {
    layers: [{ height: 0 }],
    offset: 0,
    result: 164
  }
]

describe('Get total figure height test', () => {
  test('test with 3 layers and offset enabled', () => {
    const layers = [
      {
        height: 100
      },
      {
        height: 200
      },
      {
        height: 0
      }
    ]
    const offset = 6
    expect(getTotalHeight(layers, offset)).toBe(476)
  })
  test.each(cases)('test with 1 layer variant: %#', ({ layers, offset, result }) => {
    expect(getTotalHeight(layers, offset)).toBe(result)
  })
  test('test without offset', () => {
    const layers = [
      {
        height: 10
      },
      {
        height: 456
      }
    ]
    const offset = 0
    expect(getTotalHeight(layers, offset)).toBe(630)
  })
  test('test without layers', () => {
    const layers = []
    const offset = 0
    expect(getTotalHeight(layers, offset)).toBe(0)
  })
})
