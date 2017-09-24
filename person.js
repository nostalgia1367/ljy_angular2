var Person = function(p_name, p_age, p_gender, p_address){
    // this.name = p_name;
    var name  = p_name;
    var age = p_age;
    var gender = p_gender;
    var address = p_address;

    this.alertName = function(){
        //alert(this.name);
       alert(name);
       
    }

    this.writePersonInfo = function(){
        //alert(this.name);
        //alert(name);
        var str = "<br>이름 : "+ name+"<br>";
        str += "나이 : " + age+"<br>";
        str += "성별 : " + gender+"<br>";
        str += "주소 : " + address+"<br>";
        
        document.write(str);
    }

    this.setName = function(p_name){
        name = p_name;
    }
    this.getName = function(){
        return name;
    }

    this.play = function(){
        document.write("<br>"+name+"님께서 놀고 있습니다");
    }

}