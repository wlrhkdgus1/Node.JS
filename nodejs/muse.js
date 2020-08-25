
/*var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}*/

var part = require('./mpart.js') //같은 디렉토리에 있기떄문에 = 현재 디렉토리
part.f(); // = M.f(); 값은 둘다 v