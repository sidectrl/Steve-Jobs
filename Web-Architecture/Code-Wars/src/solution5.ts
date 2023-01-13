export function duplicateCount(text: string): number {
    text = text.toLowerCase();
    let count = 0;
    let charCount: { [key: string]: number } = {}
    for (let char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) count++;
    }
    return count;
}