export function distance(myLong: number, myLat: number, scooterLong: number, scooterLat: number): number {
    const dx = scooterLong - myLong;
    const dy = scooterLat - myLat;
    return Math.sqrt(dx * dx + dy * dy);
};