export const rhombusHeight = 164
const triangleHeight = rhombusHeight / 2

export const getTotalHeight = layers => layers.reduce((acc, val) => acc + val.height, 0) + rhombusHeight

const drawHexagon = (layer, startPoint) => {
  const { y1, y2, y4, y5 } = getPoints(layer, startPoint)
  return `M168 ${y1},
          L0 ${y2}
          V${y4}
          L168 ${y5}
          L336 ${y4}
          V${y2}Z`
}

const drawCircuit = (layer, startPoint) => {
  const { y1, y2, y3, y4, y5 } = getPoints(layer, startPoint)
  return `M0 ${y2},
          L168 ${y3}
          L336 ${y2}
          L168 ${y1}Z
          V${y4}
          M168 ${y3}
          V${y5}
          M336 ${y2}
          V${y4}`
}

const drawPolygonTop = (layer, startPoint) => {
  const { y1, y2, y3 } = getPoints(layer, startPoint)
  return `M168 ${y1},
          L336 ${y2}
          L168 ${y3}
          L0 ${y2}Z`
}

const drawPolygonRight = (layer, startPoint) => {
  const { y2, y3, y4, y5 } = getPoints(layer, startPoint)
  return `M336 ${y2}
          V${y4}
          L168 ${y5}
          V${y3}Z`
}

const drawPolygonLeft = (layer, startPoint) => {
  const { y2, y3, y4, y5 } = getPoints(layer, startPoint)
  return `M0 ${y2}
          V${y4}
          L168 ${y5}
          V${y3}Z`
}

const getPoints = (layer, startPoint) => {
  const y1 = startPoint
  const y2 = y1 + triangleHeight
  const y3 = y1 + rhombusHeight
  const y4 = y2 + layer.height
  const y5 = y4 + triangleHeight
  return { y1, y2, y3, y4, y5 }
}

export function drawLayer (layer, startPoint) {
  return {
    shape: drawHexagon(layer, startPoint),
    circuit: drawCircuit(layer, startPoint),
    polygonTop: drawPolygonTop(layer, startPoint),
    polygonRight: drawPolygonRight(layer, startPoint),
    polygonLeft: drawPolygonLeft(layer, startPoint)
  }
}
