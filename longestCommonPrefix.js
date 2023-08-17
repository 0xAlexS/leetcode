/**
 * Module: longestCommonPrefix
 * Description: Write a function to find the longest common prefix string amongst an array of strings.
 *              If there is no common prefix, return an empty string ""
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let rowIndex = 0;
    let isSearching = true;
    let isEqual = false;
    let winners = "";

    if (strs.length == 1) {
        winners += strs;
        return winners;
    }

    while (isSearching) {
        let candidateChars = [];

        for (let i = 0; i < strs.length; i++) {
            if (strs[i][rowIndex])
                candidateChars.push(strs[i][rowIndex]);
            else
                return winners;
        }

        for (let x = 0; x < candidateChars.length - 1; x++) {
            if (candidateChars[x] == candidateChars[x+1])
                isEqual = true;
            else
                return winners;
        }

        if (isEqual == true) {
            winners += candidateChars[0];
            rowIndex++;
        } else
            isSearching = false;
    }
    return winners;
};

export default longestCommonPrefix;