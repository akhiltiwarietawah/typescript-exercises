export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export function decodedValue(bands:string[]): number {
  // create a mapping color names to index
  const colorMap: Record<string, number> = COLORS.reduce<Record<string, number>>((acc, color, index) => {
    acc[color]= index;
    return acc;
  }, {});

  // calculate the decimal value of the bands
  return bands.reduce((acc, band) => acc * 10 + colorMap[band], 0);
}
