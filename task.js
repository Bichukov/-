        function myFunction() {
            var x, text;
        
           
            x = document.getElementById("numb").value;
        
          
            if (x=='') {
                text = "Введите число";
            } 
            if (x>7) {text = "Привет!"}
    if (x<7  && x!='')      {text = "Введенное число меньше или равно 7"}
            document.getElementById("demo").innerHTML = text;
        }
        function clearBox(demo2)
{
    document.getElementById(demo2).innerHTML = "";
}

        function myFunction2() {
            
            var x, text;
        
           
            x = document.getElementById("numb2").value;
        
          
            if (x=='') {
                text = "Введите имя";
            } 
            if (x=="Вячеслав") {text = "Привет, Вячеслав!"}
    if (x !="Вячеслав"  && x!='')      {text = "Нет такого имени"}
            document.getElementById("demo2").innerHTML = text;}
            function clearBox(demo2)
{
    document.getElementById(demo2).innerHTML = "";}


    function myFunction3() {
        var  text= "Ответ выведен консоль";
        var a = new Array();
        var count = document.getElementById("numb3").value;
        for (var i=0; i<count; i++)
        
            a[i]=parseInt(prompt("Введите целое число:", ""));
            document.getElementById("n4").value = a;
            a.forEach(function(i) {
                if (i % 3 === 0)          console.log(i + "  кратно 3");
                document.getElementById("demo3").innerHTML = text;
              });
            }
          
        
        

        

