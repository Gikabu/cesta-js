import { decodeBase34 } from "./utils/base34";
import {toDateString, unixDaysToDate} from "./utils/date";

export const parseB34Date = (
    encoded: string,
): Date => {
    return unixDaysToDate(decodeBase34(encoded))
};

export const b34DateToString = (
    encoded: string,
): string => {
    return toDateString(decodeBase34(encoded) * 86400);
};
