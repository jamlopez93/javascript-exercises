
const repeatString = function(string, num) {
    let repeat = "";
    if (num >= 0){
        while(num > 0){
            repeat += string;
            num--;
        }
        return repeat;
    } else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
