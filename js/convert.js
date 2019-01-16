function enter() 
{
	// Get the input field
var input = document.getElementById("num");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) 
	{
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
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
