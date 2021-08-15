import { drawLayer } from '@/utils/drawing'

const startPoint = 0

const keys = {
  shape: 'shape',
  decor: 'decor',
  circuit: 'circuit',
  polygonRight: 'polygonRight',
  polygonLeft: 'polygonLeft',
  polygonTop: 'polygonTop',
  polygonRightTop: 'polygonRightTop'
}

describe('layers drawing tests', () => {
  describe('draw a cube layer tests', () => {
    const layer = {
      id: 'id',
      height: 40,
      [keys.shape]: 'cube'
    }

    const expectedObjectStructure = {
      [keys.shape]: expect.any(String),
      [keys.decor]: {
        [keys.circuit]: expect.any(String),
        [keys.polygonLeft]: expect.any(String),
        [keys.polygonRight]: expect.any(String),
        [keys.polygonTop]: expect.any(String)
      }
    }
    const expectedValues = {
      [keys.shape]: new RegExp(
        '(M168 0[\\s\\S]*?L0 82[\\s\\S]*?V122[\\s\\S]*?L168 204[\\s\\S]*?L336 122[\\s\\S]*?V82Z)'
      ),
      [keys.circuit]: new RegExp(
        '(M0 82[\\s\\S]*?V122[\\s\\S]*?L168 204[\\s\\S]*?V164Z[\\s\\S]*?L168 0[\\s\\S]*?L336 82[\\s\\S]*?V122[\\s\\S]*?L168 204[\\s\\S]*?M168 164[\\s\\S]*?L336 82)'
      ),
      [keys.polygonLeft]: new RegExp('(M0 82[\\s\\S]*?V122[\\s\\S]*?L168 204[\\s\\S]*?164Z)'),
      [keys.polygonRight]: new RegExp('(M336 82[\\s\\S]*?V122[\\s\\S]*?L168 204[\\s\\S]*?V164Z)'),
      [keys.polygonTop]: new RegExp('(M168 0[\\s\\S]*?L336 82[\\s\\S]*?L168 164[\\s\\S]*?L0 82Z)')
    }

    const { shape, decor } = drawLayer(layer, startPoint)
    const simplifiedResult = {
      [keys.shape]: shape,
      ...decor
    }
    test('test object structure', () => {
      expect(drawLayer(layer, startPoint)).toEqual(expectedObjectStructure)
    })
    Object.entries(simplifiedResult).forEach(([key, val]) => {
      test(`test for ${key}`, () => {
        expect(val).toMatch(expectedValues[key])
      })
    })
  })

  describe('draw a low pyramid layer tests', () => {
    const layer = {
      id: 'id',
      height: 40,
      [keys.shape]: 'pyramid'
    }

    const expectedObjectStructure = {
      [keys.shape]: expect.any(String),
      [keys.decor]: {
        [keys.circuit]: expect.any(String),
        [keys.polygonLeft]: expect.any(String),
        [keys.polygonRight]: expect.any(String),
        [keys.polygonRightTop]: expect.any(String)
      }
    }

    const expectedValues = {
      [keys.shape]: new RegExp(
        '(M168 82[\\s\\S]*?L0 122[\\s\\S]*?L168 204[\\s\\S]*?L336 122Z[\\s\\S]*?M168 40[\\s\\S]*?L0 122[\\s\\S]*?L168 204[\\s\\S]*?L336 122Z)'
      ),
      [keys.circuit]: new RegExp(
        '(M168 40[\\s\\S]*?L0 122[\\s\\S]*?L168 204[\\s\\S]*?L336 122Z[\\s\\S]*?V 204[\\s\\S]*?M0 122[\\s\\S]*?L168 82[\\s\\S]*?L336 122)'
      ),
      [keys.polygonLeft]: new RegExp('(M168 82[\\s\\S]*?L0 122[\\s\\S]*?L168 204Z)'),
      [keys.polygonRight]: new RegExp('(M168 82[\\s\\S]*?L336 122[\\s\\S]*?L168 204Z)'),
      [keys.polygonRightTop]: new RegExp('(M168 40[\\s\\S]*?L336 122[\\s\\S]*?L168 82Z)')
    }
    const { decor, shape } = drawLayer(layer, startPoint)
    const simplifiedResult = {
      [keys.shape]: shape,
      ...decor
    }

    test('test object structure', () => {
      expect(drawLayer(layer, startPoint)).toEqual(expectedObjectStructure)
    })

    Object.entries(simplifiedResult).forEach(([key, val]) => {
      test(`test for ${key}`, () => {
        expect(val).toMatch(expectedValues[key])
      })
    })
  })

  describe('draw a high pyramid layer tests', () => {
    const layer = {
      id: 'id',
      height: 160,
      [keys.shape]: 'pyramid'
    }

    const expectedObjectStructure = {
      [keys.shape]: expect.any(String),
      [keys.decor]: {
        [keys.circuit]: expect.any(String),
        [keys.polygonLeft]: expect.any(String),
        [keys.polygonRight]: expect.any(String)
      }
    }

    const expectedValues = {
      [keys.shape]: new RegExp(
        '(M168 82[\\s\\S]*?L0 242[\\s\\S]*?L168 324[\\s\\S]*?L336 242Z[\\s\\S]*?M168 160[\\s\\S]*?L0 242[\\s\\S]*?L168 324[\\s\\S]*?L336 242Z)'
      ),
      [keys.circuit]: new RegExp(
        '(M168 82[\\s\\S]*?L0 242[\\s\\S]*?L168 324[\\s\\S]*?L336 242Z[\\s\\S]*?V 324)'
      ),
      [keys.polygonLeft]: new RegExp('(M168 82[\\s\\S]*?L0 242[\\s\\S]*?L168 324Z)'),
      [keys.polygonRight]: new RegExp('(M168 82[\\s\\S]*?L336 242[\\s\\S]*?L168 324Z)')
    }
    const { decor, shape } = drawLayer(layer, startPoint)
    const simplifiedResult = {
      [keys.shape]: shape,
      ...decor
    }
    test('test object structure', () => {
      expect(drawLayer(layer, startPoint)).toEqual(expectedObjectStructure)
    })
    Object.entries(simplifiedResult).forEach(([key, val]) => {
      test(`test for ${key}`, () => {
        expect(val).toMatch(expectedValues[key])
      })
    })
  })
})
