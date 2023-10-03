function printFunction(){
    var element1 = document.getElementById("fname");
    var element2 = document.getElementById("lname");
    var element3 = document.getElementById("age");
    var element4 = document.getElementsByName("Sex");
    var element5 = document.getElementsByName("Hobby");
          
    for(i = 0; i < element4.length; i++) {
            if(element4[i].checked)
            var result =element4[i].value;
     }
    var result1="";
     for(i = 0; i < element5.length; i++) {
        
            if(element5[i].checked)
            var result1 =result1+", "+element5[i].value;
     }
    
    alert("Data insert: \n"+"First Name: " + element1.value +"\n"+"Last Name: " + element2.value +"\n"+"Age: "+ element3.value +"\n"+"Sex: "+ result+"\n"+"Hobby: "+result1 );
}
function clearFunction(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("age").value="";
}