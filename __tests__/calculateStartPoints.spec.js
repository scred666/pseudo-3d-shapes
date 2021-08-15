import { calculateStartPoints, getTotalHeight } from '@/utils/drawing'

const layers = [
  {
    id: 'q',
    height: 100
  },
  {
    id: 'qq',
    height: 50
  },
  {
    id: 'qqq',
    height: 20
  }
]

const reversedLayers = [...layers].reverse()

const cases = [
  {
    layers,
    reversedLayers,
    offset: 6,
    expectedResult: {
      qqq: 162,
      qq: 106,
      q: 0
    }
  },
  {
    layers,
    reversedLayers,
    offset: 0,
    expectedResult: {
      qqq: 150,
      qq: 100,
      q: 0
    }
  }
]

test.each(cases)(
  'Is start points correctly calculate variant: %#',
  ({ layers, reversedLayers, offset, expectedResult }) => {
    const totalHeight = getTotalHeight(layers, offset)
    expect(calculateStartPoints(totalHeight, reversedLayers, offset)).toEqual(expectedResult)
  }
)
