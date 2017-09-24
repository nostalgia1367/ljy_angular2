var Test = function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){
        return num1 + num2;
    }

    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        alert(plus());
        alert(str);
    }
}

var Test2 = function(){
    this.alerStr = function(){
        alert("Test2의 alertStr ");
    }
}

function test3(p1,p2,p3){
    alert(p1+":"+p2+":"+p3);
}

function test3(p1){
    alert(p1);
}
// this.alert(1234);

//test3(1,2,3);

var obj = {
    test2 : "2",
    test3 : "3"
};

obj["test"] = "1";  //맵 방식
// obj.test = 1; //<-위와 똑같은 방식의 초기화방식
//alert("Obj 텍스트형태로 호출: "+obj["test"]);
//alert("JSON>"+obj.test3); 