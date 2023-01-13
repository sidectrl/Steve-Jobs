export function rgb(r: number, g: number, b: number): string {
    r = clamp(r, 0, 255);
    g = clamp(g, 0, 255);
    b = clamp(b, 0, 255);
    return (r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase();
}
function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}