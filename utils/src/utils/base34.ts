const BASE34_CHARS = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Excludes 'I' and 'O'
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

/**
 * Encodes a number to a Base34 string.
 * Only supports numbers within the range of MAX_SAFE_INTEGER.
 */
export const encodeBase34 = (value: number): string => {
    if (value < 0) {
        throw new Error("Negative values are not supported.");
    }

    if (value > MAX_SAFE_INTEGER) {
        throw new Error(`Value exceeds MAX_SAFE_INTEGER: ${MAX_SAFE_INTEGER}`);
    }

    const base = 34;
    let encoded = "";

    while (value > 0) {
        const index = value % base;
        encoded = BASE34_CHARS[index] + encoded;
        value = Math.floor(value / base);
    }

    return encoded || "0";
};

/**
 * Decodes a Base34 string to a number.
 */
export const decodeBase34 = (input: string): number => {
    const base = 34;
    let value = 0;

    for (const char of input) {
        const index = BASE34_CHARS.indexOf(char);
        if (index === -1) {
            throw new Error(`Invalid Base34 character: ${char}`);
        }

        value = value * base + index;

        if (value > MAX_SAFE_INTEGER) {
            throw new Error(`Decoded value exceeds MAX_SAFE_INTEGER: ${MAX_SAFE_INTEGER}`);
        }
    }

    return value;
};
