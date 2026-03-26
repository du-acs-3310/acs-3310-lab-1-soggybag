export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function isBetween(value: number, min: number, max: number): boolean {
  return value > min && value < max
}

export function first<T>(array: T[]): T | undefined {
  return array[0]
}

export function pluckNames(items: { name: string }[]): string[] {
  return items.map(item => item.name)
}

export function repeat(text: string, count: number): string {
  return text.repeat(count)
}
