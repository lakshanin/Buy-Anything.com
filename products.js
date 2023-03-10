function getRadioValue(radioArray) {
    let i;
    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

//function to select color and design of product
function CheckColor(src, pic) {
	
	document.getElementById(pic).src= src;
}

//functions to increase and decrease quantity
function incrementValue(quantity){
    let value = parseInt(document.getElementById(quantity).value);
	if( value < 10000){
		value++;
		document.getElementById(quantity).value = value;
    }
}

function decrementValue(quantity){
    let value = parseInt(document.getElementById(quantity).value);
	if( value > 0){
		value--;
		document.getElementById(quantity).value = value;
    }
}

// Display Order Summary 
function displayOrder(formRef, quantityId, name, priceId){
	
	let chosenColor = getRadioValue(formRef.color);
	let quantity  = parseInt(document.getElementById(quantityId).value);
	let productName = name;
	let orderSummary = document.getElementById("summary");
	let price = parseFloat(document.getElementById(priceId).getAttribute("value"));
	
	
	  
	let points = localStorage.points;
	
	
	
	if (quantity != 0 && chosenColor !="" && quantity != ""){
		if (quantityId == "OnesiesQuantity" || quantityId == "hoodieQuantity" ){
			let Size = getRadioValue(formRef.size);
			if(Size != 0){
				orderSummary.innerHTML += "<h4 style='position: relative; left: 25px; color: white;'>"+quantity+"&nbsp;"+productName+"&nbsp;-&nbsp;"+chosenColor+"&nbsp;-&nbsp;"+Size+"&nbsp;-&nbsp;&nbsp;$"+quantity*price+"&nbsp; & &nbsp;</h4>";
			}
			else{
				alert("Please select an option");
			}
		}
		else{
			orderSummary.innerHTML += "<h4 style='position: relative; left: 25px; color: white;'>"+quantity+"&nbsp;"+productName+"&nbsp;-&nbsp;"+chosenColor+"&nbsp;-&nbsp; $"+quantity*price+"&nbsp; & &nbsp;</h4>";
		}
	}
	else{
		alert("Please select an option");
	}
	let total = parseFloat(document.getElementById("total").innerHTML) + price*quantity;
	let discount = total*points*1*0.01;
	document.getElementById("total").innerHTML = total - discount;
	document.getElementById("discount").innerHTML = discount;
}

//reset summary
function resetSummary(){
	
	document.getElementById("summary").innerHTML = " ";
	document.getElementById("total").innerHTML = 0;
	document.getElementById("discount").innerHTML = 0;
}

//alert message
function alertMsg(summaryId ,totalId){
	let Fname = document.forms["orderForm"].fname.value;
	let Lname = document.forms["orderForm"].lname.value;
	let Address = document.forms["orderForm"].address.value;
	let Phone = document.forms["orderForm"].phone.value;
	let Email = document.forms["orderForm"].email.value;
	let summary = document.getElementById(summaryId).textContent;
	let total = document.getElementById(totalId).innerHTML;
	let x = fieldInputs(Fname, Lname, Address, Phone, Email);
	let y = phoneValidation(Phone);
	let z = emailValidation(Email);
	
	if(x==true && y==true && z==true){
		alert(Fname + " " + Lname + " you have ordered  " + summary + "your total bill is $" + total+". Thank You!");
	}
}

//validations
function phoneValidation(phone){
	if (phone.match(/^\d{10}$/)){
		return (true);
	}
	else{
		alert("Please enter a valid number!");
	}
}

function fieldInputs(Fname, Lname, Address, Phone, Email){
	if (Fname=="" || Lname=="" || Address=="" || Phone=="" || Email==""){
		alert("Please fill out all fields!");
	}
	else{
		return (true);
	}
}

function emailValidation(Email){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){
		return (true);
	}
	else{
		alert("Please enter a valid email address!");
    }
}

//Changing Font Size
function increaseFont(element){
	
	let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	let fontSize = parseFloat(style); 
    element.style.fontSize= (fontSize + 0.5) + 'px';
	
    for(let i=0; i < element.children.length; i++){
        increaseFont(element.children[i]);
    }
}

function decreaseFont(element){
	
	let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	let fontSize = parseFloat(style); 
    element.style.fontSize= (fontSize - 0.5) + 'px';
	
    for(let i=0; i < element.children.length; i++){
        decreaseFont(element.children[i]);
    }
}
