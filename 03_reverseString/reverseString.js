const reverseString = function(String) {
    let reverseArray = [], stringArray=[];
    stringArray = String.split('');
    let i = 0, j = stringArray.length-1;
    while(i<=j){
        reverseArray[i] = stringArray[j];
        reverseArray[j] = stringArray[i];
        i++, j--;
    }
    let reversedString = reverseArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
