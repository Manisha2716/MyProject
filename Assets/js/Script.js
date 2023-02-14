let text = "abcd";
        let length = text.length;
        document.write("<br>" + length);

        // replace//
        let t = "Please visit Microsoft and Microsoft!";
 
        let newText = t.replace("Microsoft" , "W3Schools");
        document.write("<br>" + newText);
        document.write("<br>" + t);

        var text1 = "Hello World!";
        var text2 = text1.toUpperCase();
        document.write("<br>" + text2);

        var text1 = "Hello";
        var text2 = "World!";
        var text3 = text1.concat(" ", text2);
        document.write("<br>" + text3);

        var students = ["ram ", "shyam", "sita"];
        var address = ["pkr ", "ktm", "mnr"];
        var age = ["30 ", "18", "17"];

        for (var i = 0; i<3; i++){
            document.write("<br><br>" +" The student name is "+ students[i] + "<br>" + "The student address is "+ address[i] + "<br>" +"The student age is " + age[i]);
        }

        function myFunction(){
            for (var i = 0; i<3; i++){
            document.write("<br><br>" +" The student name is "+ students[i] + "<br>" + "The student address is "+ address[i] + "<br>" +"The student age is " + age[i]);
        } 
        }
        myFunction();

        function myFunction(x, y){
            return x+y;
        }
        document.write("<br>" + myFunction(20, 10));

        // replace//

        //crating object
        var Laptop = {
            name: "DELL",
            price: "2lakh",
            color: "black",
            RAM: "8GM"
        }
        document.write("<br> The Laptop name is " +Laptop.name);
        document.write("<br> The Laptop price is " +Laptop.price);
        document.write("<br> The Laptop color is " +Laptop.color);
        document.write("<br> The Laptop RAM is " +Laptop.RAM);

        //crating object


        function onMouseOver(){
            document.getElementById("onMouseOver").innerHTML = "This is onMouseOver";
        }

        function onMouseOut(){
            document.getElementById("onMouseOver").innerHTML = "This is onMouseOut";
        }
        function onMouseDown(){
            document.getElementById("onMouseOver").innerHTML = "This is onMouseDown";
        }
        function onChange(){
            document.getElementById("onChange").innerHTML = "This is onChange";
        }

        function onChange(){
            var x = document.getElementById("onchange");
            x.style.color="red";
            x.style.fontSize="1rem";
            x.style.backgroundColor="green";
        }

        document.getElementById("demo").style.cssText="color:white; backdround-color:blue; padding: 1rem;";

    var loading = document.getElementById(loading);
    setInterval(function onload(){
        loading.style.display = "none";

    }, 1000);
  
