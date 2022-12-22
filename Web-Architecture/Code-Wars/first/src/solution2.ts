export function sumOfIntervals(intervals: [number, number][]){
    /*return intervals.reduce((acc,item,_) => {
        const index = acc.findIndex((itemIesime) =>isIntersecate(itemIesime, item));
        if(index ===-1 ){
            acc.push(item);
        } else {
            acc[index] = newItem(item, acc[index]);
        }
        return acc;
    });*/
    
    return 0;
}
const isIntersecate = (arr1: [number, number], arr2 : [number, number]): boolean => {
    return arr1[1] > arr2[0];
}
const newItem = (arr1: [number, number], arr2 : [number, number]) => {
    return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
}