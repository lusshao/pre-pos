'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var k = 0;


  for(let i=0;i<collectionA.length;i++){
    //alert(collectionA[i].key);
    if(objectB.value.indexOf(collectionA[i].key)!=-1){
      result[k++] = collectionA[i].key;
    }
  }
  // alert(result);
  return result;
}
