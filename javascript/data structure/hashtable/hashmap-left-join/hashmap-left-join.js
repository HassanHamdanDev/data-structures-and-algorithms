'use strict';


function leftJoin(hashOne, hashTwo) {
    let result = [];

    hashOne.table.forEach(elem => {
        Object.keys(elem.head.value).forEach( (key)=> {
            result.push([key, hashOne.get(key), hashTwo.get(key)]);
        });
    });
    return result;
}


module.exports = leftJoin;
