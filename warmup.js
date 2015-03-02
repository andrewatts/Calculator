//Build a function my_max() which takes and array an returns the maximum number

function my_max(a) {
    for (var i=0, j=1; i<a.length-1; i++, j++) {
        if (a[i] > a[j]) {
            a.splice(j,1);
            i=0;
            j=1;
        } else {
            a.splice(i,1);
            i=0;
            j=1;
        }
    }
    a[0]>a[1] ? a.splice(1,1) : a.splice(0,1);
    return Number(a);
}

var testScores = [86,70,61,99,105];
var stats = [47,22,99,156,200,66,347,291];

//my_max(testScores);
//my_max(stats);

//Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY)

function vowel_count(str) {
    var re = /[aeiouy]/gi;
    var vowels = str.match(re);
    var count = vowels.length;
    return count;
}

var words = "Hey there, just practicing JavaScript.";
//vowel_count(words);


//Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"

function reverse(str) {
    var separate = str.split("");
    var backwards = separate.reverse();
    var reversedStr = backwards.join([separator = ""]);
    return reversedStr;
}

var statement = "Is this string backwards?";
//reverse(statement);