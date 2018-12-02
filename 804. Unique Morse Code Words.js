/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseDict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let wordToMorseSet = new Set();
    for (word of words) {
        let shouldInsert = true;
        let readyInsert = "";
        for (letter of word) {
            readyInsert += morseDict[letter.charCodeAt()%97];
        }
        wordToMorseSet.add(readyInsert);
    }
    return wordToMorseSet.size;
};