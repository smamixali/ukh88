function validate() {
    var result = 0;
    var error = "";

    if (document.forms[0].UserInfo.value == "") {
        error += "Please enter your name\n";
        document.getElementById("UserInfo").style.backgroundColor = "Yellow";
    }
    //if the name is written
    else {
        document.getElementById("UserInfo").style.backgroundColor = "white";
        var name = document.forms[0].UserInfo.value;
    }
    //Q1 and also if the user didnt select anything
    if (document.forms[0].Q1.value == "") {
        error += "Please select an answer for Q1\n";
        document.getElementById("Q1").style.backgroundColor = "Yellow";
    }
    else {
        document.getElementById("Q1").style.backgroundColor = "white";
        //if the answer is correct
        if (document.forms[0].Q1.value == "c") {
            result++;
        }
        //if the answer is incorrect
        else {
            error += "Please select the correct answer for Q1\n";
        }

    }

    //question 2

    var tick = 0;
    if (document.forms[0].Q2a.checked == true) {
        tick++;
    }
    if (document.forms[0].Q2b.checked == true) {
        tick++;
    }
    if (document.forms[0].Q2c.checked == true) {
        tick++;
    }
    if (document.forms[0].Q2d.checked == true) {
        tick++;
    }
    if (tick == 0) {
        error += "Please select at least one answer for Q2\n";
        document.getElementById("Q2").style.backgroundColor = "Yellow";
    }
    else {
        document.getElementById("Q2").style.backgroundColor = "white";
        //if the answer is correct
        var node_list = document.forms[0].elements;
        for (var i = 0; i < node_list.length; i++) {
            var node = node_list[i];
            if (node.getAttribute('type') == 'checkbox') {
                if (node_list[i].checked == true) {
                    var answer2 = new Array(node_list[i].id);


                }

            }
        }
        if (document.forms[0].Q2a.checked == true) {
            result++;
        }
        if (document.forms[0].Q2b.checked == true) {
            result++;
        }
        if (document.forms[0].Q2c.checked == true) {
            result = result - 0.5;
        }
        if (document.forms[0].Q2d.checked == true) {
            result = result - 0.5;
        }

    }

    //-----------------------------------
    if ((document.forms[0].Q3a.checked==false)&&
    (document.forms[0].Q3b.checked==false)&&
    (document.forms[0].Q3c.checked==false)&&
    (document.forms[0].Q3d.checked==false)){
        error += "Please select an answer for Q3\n";
        document.getElementById("Q3").style.backgroundColor = "Yellow";
    }

    //----------------------------------------------------

    if(document.forms[0].Q4.value ==""){
        error += "Please select at least two for Q4\n";
        document.getElementById("Q4").style.backgroundColor = "Yellow";
    }
    else{
        if(document.forms[0].value.toLowerCase()=="vexillology"){
        document.getElementById("Q4").style.backgroundColor = "white";
        result+=1;
        }
    }


    //-------------------------------------------------------
    document.forms[0].thisScore.value = result;
    if (error == "") {

        alert('your score is: ' + result + 'the answer and scores will be sent to the server');
        return true;
    } else {
        alert(error);
        return false;
    }


}