'use strict';

function collectSameElements(collectionA, objectB) {
    var result = [];
    var k = 0;


    for(let i=0;i<collectionA.length;i++){
      if(objectB.value.indexOf(collectionA[i])!=-1){
        result[k++] = collectionA[i]
      }
    }
    return result;
}
