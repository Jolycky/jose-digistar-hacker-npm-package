// lib/index.js

/**
 * Check if two strings are anagrams
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if strings are anagrams, false otherwise
 */
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const sortString = str => str.split('').sort().join('');
    return sortString(str1) === sortString(str2);
}

module.exports = areAnagrams;