import { isValidNumber } from '@/utils'

describe('Is valid number tests', () => {
  test('2 must be valid', () => {
    expect(isValidNumber(2)).toBeTruthy()
  })

  test('0 must be valid', () => {
    expect(isValidNumber(0)).toBeTruthy()
  })

  test('13.666 must be valid', () => {
    expect(isValidNumber(13.666)).toBeTruthy()
  })

  test('13..3 must be invalid', () => {
    expect(isValidNumber('13..3')).toBeFalsy()
  })

  test('(NaN|null|undefined, ..etc) must be invalid', () => {
    expect(isValidNumber(null)).toBeFalsy()
    expect(isValidNumber(NaN)).toBeFalsy()
    expect(isValidNumber(undefined)).toBeFalsy()
    expect(isValidNumber([])).toBeFalsy()
    expect(isValidNumber({})).toBeFalsy()
    expect(isValidNumber('')).toBeFalsy()
  })
})
