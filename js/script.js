$(document).ready(function()
{
var menu = document.getElementById("menuIs");

var MenuItem = document.getElementsByClassName("linkClose");

function ClosedMenu()
{
	
	menu.style.display = none;
	
}

MenuItem.onclick = ClosedMenu;

$('#burger').click(function(e){
		$('#menuIs').fadeOut(400);		   
				   })
	
})