"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfIntervals = void 0;
function sumOfIntervals(intervals) {
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
exports.sumOfIntervals = sumOfIntervals;
const isIntersecate = (arr1, arr2) => {
    return arr1[1] > arr2[0];
};
const newItem = (arr1, arr2) => {
    return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
};
