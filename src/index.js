import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { drawFractal } from './utils'


AvatarFractal.propTypes = {
  size: PropTypes.number,
  scale: PropTypes.number,
  value: PropTypes.string.isRequired,
}

AvatarFractal.defaultProps = {
  size: 100,
  scale: 0.45,
}

export default function AvatarFractal({ value, size, scale, ...props }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    drawFractal(value, ctx, size, scale)
  }, [size, value, scale])

  return (
    <canvas ref={canvasRef} width={size} height={size} {...props}></canvas>
  )
}
