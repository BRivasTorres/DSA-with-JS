// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function (s) {
	return s.trim().split(" ").at(-1).length;
};
