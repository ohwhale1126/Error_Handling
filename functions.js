/**
 * Raises a base to a specified power
 * @param {number} base The base to raise
 * @param {number} exponent The exponent of the base
 * @return {number} The numerical result
 */
function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        return undefined;
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        return undefined;
    }
    return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {
    var areaCode = between(phoneNum, "(", ")");
    if (areaCode == undefined) {
        return undefined;
    }
    return areaCode;
}
