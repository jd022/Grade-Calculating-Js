function calculate(){
    var subjOne = parseInt(document.getElementById('subjOne').value);
    var subjTwo = parseInt(document.getElementById('subjTwo').value);
    var subjThree = parseInt(document.getElementById('subjThree').value);
    var subjFour = parseInt(document.getElementById('subjFour').value);
    var subjFive = parseInt(document.getElementById('subjFive').value);

    if (subjOne > 100 || subjTwo > 100 || subjThree > 100 || subjFour > 100 || subjFive > 100){
        alert("Please input the correct value");
    }
    else{
        var obtain = subjOne + subjTwo + subjThree + subjFour + subjFive;
        document.getElementById('obtain').innerHTML = obtain;

        var percentage = obtain/500*100;
        document.getElementById('percentage').innerHTML = percentage;

        if (percentage >= 75){
            document.getElementById('remarks').innerHTML = "<span style='color:#292'>Pass</span>";
        }else{
            document.getElementById('remarks').innerHTML = "<span style='color:red'>Fail</span>";
        }
        if (percentage >= 80){
            document.getElementById('grade').innerHTML = "A";
        }
        else if (percentage >= 70){
            document.getElementById('grade').innerHTML = "B";
        }
        else if (percentage >= 60){
            document.getElementById('grade').innerHTML = "C";
        }
        else if (percentage >= 50){
            document.getElementById('grade').innerHTML = "D";
        }
        else if (percentage >= 40){
            document.getElementById('grade').innerHTML = "E";
        }
        else{
            document.getElementById('grade').innerHTML = "F";
        }
    }
}