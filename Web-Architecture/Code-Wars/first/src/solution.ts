export function narcissistic(value: number): boolean {
    return value === String(value).split('').reduce((acc, item, _, { length }) => acc = Math.pow(Number(item), length), 0);
}


