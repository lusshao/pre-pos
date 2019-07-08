'use strict';

function countSameElements(collection) {
  var re = [];
  var k = 0;
  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if(re.length == 0){
      var reit = {
        name:rv[1],
        summary:(rv[2] ? parseInt(rv[2], 10) : 1)
      }
      //alert(reit.key+ "" +reit.count)
      re[k++] = reit;
      continue;
    }
    let sign = 0;
    for(let j =0;j<re.length;j++){
      //alert(1)
      if(re[j].name === rv[1]){
        //alert(2)
        re[j].summary += rv[2] ? parseInt(rv[2], 10) : 1;
        sign = 1;
        break;
      }
    }
    if(sign == 0){
      var reit = {
        name:rv[1],
        summary:(rv[2] ? parseInt(rv[2], 10) : 1)
      }
      //alert(reit.key+ "" +reit.count)
      re[k++] = reit;
    }

  }
  return re;
}
