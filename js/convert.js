function enter() 
{
	
	var input = document.getElementById("num"); // Get the input field

	input.addEventListener("keyup", function(event)	// Execute a function when the user releases a key on the keyboard
	{ 

		event.preventDefault();   // Cancel the default action, if needed
	  
		if (event.keyCode === 13) {   // Keycode "13" is the "Enter" key on the keyboard
	
			document.getElementById("myBtn").click(); // Trigger the button element with a click

		}
	});
}

function validate()
{
var x = document.getElementById("num").value;
	
	if (x == "")
	{
		alert("You haven't entered anything");
	}
	else
	{
		monsToYrs();
	}
}



function monsToYrs() 
{

	var x=document.getElementById("num").value;
	var y=x%12;
	var z=Math.floor(x/12);
	var answer=document.getElementById("answerDisp");
	var mon = "month.";
	var yr = "year";
		if (y == 0 || y >= 2) 
	{
			var mon = "months.";
	}	
		if (z == 0 || z >= 2) 
	{
			var yr = "years";
	}

	answerDisp.innerHTML = "The number above converts to " + z + " " + yr + " and " + parseInt(y) + " " + mon;

}
