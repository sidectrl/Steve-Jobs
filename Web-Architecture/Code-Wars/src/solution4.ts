export function findOutlier(integers: number[]): number {
    let evens = integers.filter(element => element % 2 === 0);
    let odds = integers.filter(element => element % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
}