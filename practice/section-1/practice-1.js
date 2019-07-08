'use strict';

function collectSameElements(collectionA, collectionB) {
  
  var result = [];
  var k = 0;

  for(let i=0;i<collectionA.length;i++){
    if(collectionB.indexOf(collectionA[i])!=-1){
      result[k++] = collectionA[i];
    }
  }
  return result;
}
