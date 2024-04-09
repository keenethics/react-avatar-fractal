/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { drawFractal } from './utils';

type AvatarFractalProps = {
  value: string;
  size?: number;
  scale?: number;
};
export default function AvatarFractal({ value, size = 100, scale = 0.45, ...props }: AvatarFractalProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawFractal(value, ctx, size, scale);
    }
  }, [size, value, scale]);

  return <canvas ref={canvasRef} width={size} height={size} {...props}></canvas>;
}
