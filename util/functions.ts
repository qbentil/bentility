
const percentToHex = (p:number) => {
    const percent = Math.max(0, Math.min(100, p)); // bound percent from 0 to 100
    const intValue = Math.round(percent / 100 * 255); // map percent to nearest integer (0 - 255)
    const hexValue = intValue.toString(16); // get hexadecimal representation
    return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
}

export const ColorOpacity = (color: string, percent: number) => {
    return `${color}${percentToHex(percent)}`;
}