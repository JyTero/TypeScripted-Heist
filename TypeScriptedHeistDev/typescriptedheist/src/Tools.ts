export function GetRandomInt(min: number, max: number): number {
    const low = Math.ceil(min);
    const high = Math.floor(max);
    return Math.floor(Math.random() * (high - low + 1)) + low;
}
export function Delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}