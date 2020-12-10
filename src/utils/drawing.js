export const rhombusHeight = 164
const triangleHeight = rhombusHeight / 2
const rhombusWidth = 336
const triangleWidth = rhombusWidth / 2
const x1 = 0
const x2 = triangleWidth
const x3 = rhombusWidth
// const a = Math.sqrt(((rhombusWidth / 2) ** 2) + ((rhombusHeight / 2) ** 2))
// const cylinderRadius = (rhombusWidth * rhombusHeight) / (4 * a)

const d1 = rhombusHeight
const d2 = rhombusWidth
const cr = (d1 * d2) / Math.sqrt((d1 ** 2) + (d2 ** 2))
const triangleHypotenuse = Math.sqrt((triangleHeight ** 2) + (triangleWidth ** 2))
const rhombusAcuteAngle = Math.acos((d2 ** 2 / (2 * triangleHypotenuse ** 2)) - 1) * (180 / Math.PI)
const rhombusObtuseAngle = (360 - (rhombusAcuteAngle * 2)) / 2
const angle = rhombusObtuseAngle - ((180 - (90 + rhombusAcuteAngle)) * 2)
const side = 2 * cr * Math.sin((angle / 2) * Math.PI / 180)
const side2 = rhombusHeight - Math.sqrt((cr ** 2) - ((side ** 2) / 4))
const ratio = triangleHeight / (triangleHeight - side2)
// const side3 = (side / 2) / ratio
const crr = cr / ratio

export const getTotalHeight = layers => layers.reduce((acc, val) => acc + val.height, 0) + rhombusHeight

export const calculateStartPoints = (totalHeight, layers) => {
  let startPoint = totalHeight - rhombusHeight
  return layers.map(layer => (startPoint -= layer.height))
}

const drawHexagonShape = (layer, startPoint) => {
  const { y1, y2, y4, y5 } = getPoints(layer, startPoint)
  return `M${x2} ${y1},
          L${x1} ${y2}
          V${y4}
          L${x2} ${y5}
          L${x3} ${y4}
          V${y2}Z`
}

const drawHexagonShape2 = (layer, startPoint) => {
  console.log(crr)
  const { y1, y5 } = getPoints(layer, startPoint)
  return `M${x2 - side / 2} ${y1 + side2},
          A ${cr} ${cr} 0 0 1 ${x2 + side / 2} ${y1 + side2}
          A ${crr} ${crr} 0 0 1 ${x2 + side / 2} ${y5 - side2}
          A ${cr} ${cr} 0 0 1 ${x2 - side / 2} ${y5 - side2}
          A ${crr} ${crr} 0 0 1 ${x2 - side / 2} ${y1 + side2}
          Z
          M${x2 + crr} ${y1 + 50}
          V ${y1 + 100}
          H ${x2 - crr}
          V ${y1 + 50}Z`
}

// M${x2 - cylinderRadius} ${y2}
// A ${cylinderRadius} ${cylinderRadius} 0 0 0 ${x2 + cylinderRadius} ${y2}Z

const drawHexagonDecor = (layer, startPoint) => {
  const { y1, y2, y3, y4, y5 } = getPoints(layer, startPoint)
  const circuit = drawHexagonCircuit(y1, y2, y3, y4, y5)
  const polygonTop = drawHexagonPolygonTop(y1, y2, y3)
  const polygonRight = drawHexagonPolygonRight(y2, y3, y4, y5)
  const polygonLeft = drawHexagonPolygonLeft(y2, y3, y4, y5)
  return { circuit, polygonTop, polygonRight, polygonLeft }
}

const drawHexagonCircuit = (y1, y2, y3, y4, y5) => {
  return `M${x1} ${y2},
          L${x2} ${y3}
          L${x3} ${y2}
          L${x2} ${y1}Z
          V${y4}
          M${x2} ${y3}
          V${y5}
          M${x3} ${y2}
          V${y4}`
}

const drawHexagonPolygonTop = (y1, y2, y3) => {
  return `M${x2} ${y1},
          L${x3} ${y2}
          L${x2} ${y3}
          L${x1} ${y2}Z`
}

const drawHexagonPolygonRight = (y2, y3, y4, y5) => {
  return `M${x3} ${y2}
          V${y4}
          L${x2} ${y5}
          V${y3}Z`
}

const drawHexagonPolygonLeft = (y2, y3, y4, y5) => {
  return `M${x1} ${y2}
          V${y4}
          L${x2} ${y5}
          V${y3}Z`
}

const drawPyramidShape = (layer, startPoint) => {
  const { y2, y4, y5, yPyramid } = getPoints(layer, startPoint)
  return `M${x2} ${y2}
          L${x1} ${y4}
          L${x2} ${y5}
          L${x3} ${y4}Z
          M${x2} ${yPyramid}
          L${x1} ${y4}
          L${x2} ${y5}
          L${x3} ${y4}Z`
}

const drawPyramidDecor = (layer, startPoint) => {
  const isNeedAddons = layer.height <= triangleHeight
  const { y2, y4, y5, yPyramid } = getPoints(layer, startPoint)
  const circuit = drawPyramidCircuit(y2, y4, y5, yPyramid, isNeedAddons)
  const polygonRight = drawPyramidPolygonRightBottom(y2, y4, y5)
  const polygonLeft = drawPyramidPolygonLeftBottom(y2, y4, y5)
  let decor = { circuit, polygonRight, polygonLeft }
  if (isNeedAddons) {
    const polygonRightTop = drawPyramidPolygonRightTop(y2, y4, yPyramid)
    decor = { ...decor, polygonRightTop }
  }
  return decor
}

const drawPyramidCircuit = (y2, y4, y5, yPyramid, isNeedAddons) => {
  const circuitExtend = `M${x2} ${y2}
                         L${x1} ${y4}
                         M${x3} ${y4}
                         L${x2} ${y2}
                         V ${y5}
                         M${x2} ${yPyramid}
                         L${x1} ${y4}
                         M${x2} ${yPyramid}
                         L${x3} ${y4}Z
                         V ${y2}`
  const circuit = `M${x2} ${y2}
                   L${x1} ${y4}
                   M${x3} ${y4}
                   L${x2} ${y2}
                   V ${y5}`
  return isNeedAddons ? circuitExtend : circuit
}

const drawPyramidPolygonLeftBottom = (y2, y4, y5) => {
  return `M${x2} ${y2},
          L${x1} ${y4}
          L${x2} ${y5}Z`
}

const drawPyramidPolygonRightBottom = (y2, y4, y5) => {
  return `M${x2} ${y2},
          L${x3} ${y4}
          L${x2} ${y5}Z`
}

const drawPyramidPolygonRightTop = (y2, y4, yPyramid) => {
  return `M${x2} ${yPyramid},
          L${x3} ${y4}
          L${x2} ${y2}Z`
}

const getPoints = (layer, startPoint) => {
  const y1 = startPoint
  const y2 = y1 + triangleHeight
  const y3 = y1 + rhombusHeight
  const y4 = y2 + layer.height
  const y5 = y4 + triangleHeight
  const yPyramid = y1 + layer.height
  return { y1, y2, y3, y4, y5, yPyramid }
}

export const drawLayer = (layer, startPoint) => {
  return getLayer[layer.type](layer, startPoint)
}

const drawHexagon = (layer, startPoint) => {
  const { circuit, polygonTop, polygonRight, polygonLeft } = drawHexagonDecor(layer, startPoint)
  return {
    shape: drawHexagonShape(layer, startPoint),
    decor: { circuit, polygonTop, polygonRight, polygonLeft }
  }
}

const drawPyramid = (layer, startPoint) => {
  const { circuit, polygonRight, polygonLeft, polygonRightTop } = drawPyramidDecor(layer, startPoint)
  return {
    shape: drawPyramidShape(layer, startPoint),
    decor: { circuit, polygonRight, polygonLeft, polygonRightTop }
  }
}

const drawCylinder = (layer, startPoint) => {
  // const { circuit, polygonTop, polygonRight, polygonLeft } = drawHexagonDecor(layer, startPoint)
  return {
    shape: drawHexagonShape2(layer, startPoint),
    decor: { }
  }
}

const types = {
  cube: 'cube',
  pyramid: 'pyramid',
  cylinder: 'cylinder'
}

const getLayer = {
  [types.cube]: (layer, startPoint) => drawHexagon(layer, startPoint),
  [types.pyramid]: (layer, startPoint) => drawPyramid(layer, startPoint),
  [types.cylinder]: (layer, startPoint) => drawCylinder(layer, startPoint)
}
