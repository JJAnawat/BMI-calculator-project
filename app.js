function SetBMIStatus(status){
    document.getElementById("bmi_status").innerHTML = status;
}

function Calculate(){
    var height = document.getElementById("height_input").value;
    var weight = document.getElementById("weight_input").value;
    height/=100;

    var result = weight /(height**2);

    if(result<0||height==0)
        alert("Invalid input!!");
    else{
        document.getElementById("bmi_output").innerHTML = result;
        if(result < 18.5){
            SetBMIStatus("น้ำหนักน้อย / ผอม");
        }
        else if(result < 23){
            SetBMIStatus("ปกติ / สุขภาพดี");
        }
        else{
            SetBMIStatus("น้ำหนักเกิน / อ้วน");
        }
    }
}