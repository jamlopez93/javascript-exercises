const sumAll = function(x, y) {
    if(typeof x != 'number' || typeof y != 'number'){
        return 'ERROR';
    }
    if (x < 0 || y < 0){
        return 'ERROR';
    }else{
        arr =[];
        arr.push(x, y);
        let max = Math.max(arr[0], arr[1]);
        let min = Math.min(arr[0], arr[1]);
        let sumBetween = 0;
        for (let i = min; i <= max; i++) {
            sumBetween += i;
        }
        return sumBetween;
    }
};

// Do not edit below this line
module.exports = sumAll;
