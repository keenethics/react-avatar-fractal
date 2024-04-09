function hash(str: string) {
  let h = 0xdeadbeef;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 2654435761);
  }
  return (h ^ (h >>> 16)) >>> 0;
}

function getNumbersFromString(str: string) {
  return hash(str.replace(/\s/g, '').toLowerCase())
    .toString()
    .split('')
    .reduce<number[]>((arr, item) => (+item ? arr.concat([+item / 10]) : arr), []);
}

function drawLine(level: number, context: CanvasRenderingContext2D, spread: number, size: number) {
  if (level > 3) return;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(size, 0);
  context.stroke();
  for (let i = 0; i < 3; i++) {
    context.save();

    context.translate((size / 3) * i, 0);
    context.scale(0.5, 0.5);

    context.save();
    context.rotate(spread * 1);
    drawLine(level + 1, context, spread, size);
    context.restore();

    context.save();
    context.rotate(-spread * 2);
    drawLine(level + 1, context, spread, size);
    context.restore();

    context.restore();
  }
}

function drawFractal(string: string, context: CanvasRenderingContext2D, size: number, scale: number) {
  const values = getNumbersFromString(string);
  const sides = Math.floor(values[4] * 10 + 2);
  const color = 'hsl(' + values[2] * 360 + ', 100%, 50%)';
  const lineWidth = values[3] + size / 100 + 0.5;
  const spread = values[1] + 0.5;
  context.lineCap = 'round';
  context.shadowColor = 'rgba(0,0,0,0.4)';
  context.shadowBlur = size / 20;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.clearRect(0, 0, size, size);
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.save();
  context.translate(size / 2, size / 2);
  console.log(sides);
  for (let i = 0; i < sides; i++) {
    context.rotate((Math.PI * 2) / sides);
    drawLine(0, context, spread, size * scale);
  }
  context.restore();
}

export { drawFractal };
