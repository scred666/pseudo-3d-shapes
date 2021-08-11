export const rhombusHeight = 164
const triangleHeight = rhombusHeight / 2
const rhombusWidth = 336
const triangleWidth = rhombusWidth / 2
const x1 = 0
const x2 = triangleWidth
const x3 = rhombusWidth

export const getTotalHeight = (layers, figureShift) => {
  const additionalHeight = rhombusHeight + (layers.length - 1) * figureShift
  return layers.reduce((acc, val) => acc + val.height, 0) + additionalHeight
}

export const calculateStartPoints = (totalHeight, layers, figureShift) => {
  let startPoint = totalHeight - rhombusHeight + figureShift
  // return layers.map(layer => (startPoint -= layer.height + figureShift))
  return Object.assign(
    {},
    ...layers.map(layer => {
      return {
        [layer.id]: (startPoint -= layer.height + figureShift)
      }
    })
  )
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

const drawHexagonDecor = (layer, startPoint) => {
  const { y1, y2, y3, y4, y5 } = getPoints(layer, startPoint)
  const circuit = drawHexagonCircuit(y1, y2, y3, y4, y5)
  const polygonTop = drawHexagonPolygonTop(y1, y2, y3)
  const polygonRight = drawHexagonPolygonRight(y2, y3, y4, y5)
  const polygonLeft = drawHexagonPolygonLeft(y2, y3, y4, y5)
  return { circuit, polygonTop, polygonRight, polygonLeft }
}

const drawHexagonCircuit = (y1, y2, y3, y4, y5) => {
  // return `M${x1} ${y2},
  //         L${x2} ${y3}
  //         L${x3} ${y2}
  //         L${x2} ${y1}Z
  //         V${y4}
  //         M${x2} ${y3}
  //         V${y5}
  //         M${x3} ${y2}
  //         V${y4}`
  return `M${x1} ${y2}
          V${y4}
          L${x2} ${y5}
          V${y3}Z
          L${x2} ${y1}
          L${x3} ${y2}
          V${y4}
          L${x2} ${y5}
          M${x2} ${y3}
          L${x3} ${y2}`
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
  // const circuitExtend = `M${x2} ${y2}
  //                        L${x1} ${y4}
  //                        M${x3} ${y4}
  //                        L${x2} ${y2}
  //                        V ${y5}
  //                        M${x2} ${yPyramid}
  //                        L${x1} ${y4}
  //                        M${x2} ${yPyramid}
  //                        L${x3} ${y4}Z
  //                        V ${y2}`
  const circuitExtend = `M${x2} ${yPyramid}
                         L${x1} ${y4}
                         L${x2} ${y5}
                         L${x3} ${y4}Z
                         V ${y5}
                         M${x1} ${y4}
                         L${x2} ${y2}
                         L${x3} ${y4}
                         `
  // const circuit = `M${x2} ${y2}
  //                  L${x1} ${y4}
  //                  M${x3} ${y4}
  //                  L${x2} ${y2}
  //                  V ${y5}`
  const circuit = `M${x2} ${y2}
                   L${x1} ${y4}
                   L${x2} ${y5}
                   L${x3} ${y4}Z
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
  return getLayer[layer.shape](layer, startPoint)
}

const drawHexagon = (layer, startPoint) => {
  const { circuit, polygonTop, polygonRight, polygonLeft } = drawHexagonDecor(layer, startPoint)
  return {
    shape: drawHexagonShape(layer, startPoint),
    decor: { circuit, polygonTop, polygonRight, polygonLeft }
  }
}

const drawPyramid = (layer, startPoint) => {
  const { circuit, polygonRight, polygonLeft, polygonRightTop } = drawPyramidDecor(
    layer,
    startPoint
  )
  return {
    shape: drawPyramidShape(layer, startPoint),
    decor: { circuit, polygonRight, polygonLeft, polygonRightTop }
  }
}

export const layerShapes = {
  cube: 'cube',
  pyramid: 'pyramid'
}

const getLayer = {
  [layerShapes.cube]: (layer, startPoint) => drawHexagon(layer, startPoint),
  [layerShapes.pyramid]: (layer, startPoint) => drawPyramid(layer, startPoint)
}

export const generateRandomHEX = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const layerParams = {
  id: 'id',
  fill: 'fill',
  height: 'height',
  shape: 'shape'
}

export const initialLayers = [
  {
    [layerParams.id]: 'wn2pf9ruh',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 160,
    [layerParams.shape]: 'pyramid'
  },
  {
    [layerParams.id]: '5e5kvp9zq',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 100,
    [layerParams.shape]: 'cube'
  },
  {
    [layerParams.id]: 'mafj776kg',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 50,
    [layerParams.shape]: 'cube'
  },
  {
    [layerParams.id]: '9luxy76ua',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 70,
    [layerParams.shape]: 'cube'
  },
  {
    [layerParams.id]: 'egi0z6zdg',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 10,
    [layerParams.shape]: 'cube'
  },
  {
    [layerParams.id]: 'kgl48aakt',
    [layerParams.fill]: generateRandomHEX(),
    [layerParams.height]: 40,
    [layerParams.shape]: 'cube'
  }
]

export const defaultLayer = {
  [layerParams.id]: null,
  [layerParams.fill]: null,
  [layerParams.height]: 100,
  [layerParams.shape]: 'cube'
}
