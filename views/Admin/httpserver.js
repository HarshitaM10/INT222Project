<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Armstrong no checker</h1>
    <h3>Enter a number :</h3><input type="number" id="check"/>
    <button onclick=check()>check</button>
    <p id="demo"></p>
    <script>
function check()
{
   let temp = n;
   while (temp > 0) {
       // finding the one's digit
       let remainder = temp % 10;
   
       sum += remainder * remainder * remainder;
   
       // removing last digit from the number
       temp = parseInt(temp / 10); 
   }
                 // Check and display alert message
             if (flag == true)
             document.getElementById("demo").innerHTML="<h4>n is an Armstrong number</h4>";

             else
             document.getElementById("demo").innerHTML="<h4>n is not an Armstrong number</h4>";

}
    </script>
</body>
</html>