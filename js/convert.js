function validate()
{
var x = document.getElementById("num").value;
if (x == "")
	{
	alert("You haven't entered anything");
	}
else if	(x = isNaN(x))
	{
	alert("Entry must be a whole numerical value");
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
