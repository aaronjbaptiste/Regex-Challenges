/*
* week 1: http://callumacrae.github.com/regex-tuesday/challenge1.html
*
* summary: This weeks Regex Tuesday challenge, the first challenge, is to make 
* a regex which finds and highlights repeated words in a body of text.
*
* result: http://callumacrae.github.com/regex-tuesday/challenge1.html?find=%2F(%5Cb%5CS%2B)%20(%5C1%5Cb)%2Fig&replace=%241%20%3Cstrong%3E%242%3C%2Fstrong%3E
*/

var search = /(\b\S+) (\1\b)/ig;
var replace = "$1 <strong>$2</strong>";

/*
* week 2: http://callumacrae.github.com/regex-tuesday/challenge2.html
*
* summary: In this challenge, you are aiming to match a grayscale CSS colour.
*
* result: http://callumacrae.github.com/regex-tuesday/challenge2.html?find=%2F(%3F%3A%5E%23(%5B%5Cda-f%5D%7B1%2C2%7D)%5C1%7B2%7D%24)%7C(%3F%3A%5Ergba%3F(%3F!.*257)%5C((%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%25%3F)(%2C%20*0*%5C2)%7B2%7D(%2C%20*%5Cd(%5C.%5Cd*)%3F%25%3F)%3F%20*%5C)%24)%7C(%3F%3A%5Ehsla%3F%5C(%5Cd%2B(%5C.%3F%5Cd%2B)%3F%25%3F%2C%20*((%5Cd%2B(%5C.%3F%5Cd%2B)%3F%25%3F%2C%20*(100%7C0))%7C(0%25%3F%2C%20*%5Cd%2B(%5C.%3F%5Cd%2B)%3F))%25%3F(%2C%20*%5Cd%2B(%5C.%3F%5Cd%2B)%3F)%3F%5C)%24)%2Fi
*/

var hex = /^#([\da-f]{1,2})\1{2}$/i;
var rgb = /^rgba?(?!.*257)\((\d{1,3}(\.\d+)?%?)(, *0*\2){2}(, *\d(\.\d*)?%?)? *\)$/i;
var hsl = /^hsla?\(\d+(\.?\d+)?%?, *((\d+(\.?\d+)?%?, *(100|0))|(0%?, *\d+(\.?\d+)?))%?(, *\d+(\.?\d+)?)?\)$/i;

var allgrey = /(?:^#([\da-f]{1,2})\1{2}$)|(?:^rgba?(?!.*257)\((\d{1,3}(\.\d+)?%?)(, *0*\2){2}(, *\d(\.\d*)?%?)? *\)$)|(?:^hsla?\(\d+(\.?\d+)?%?, *((\d+(\.?\d+)?%?, *(100|0))|(0%?, *\d+(\.?\d+)?))%?(, *\d+(\.?\d+)?)?\)$)/i;

