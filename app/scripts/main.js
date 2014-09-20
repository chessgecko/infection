//$( "#taggedText" ).css("top", "50px");

var killerNum = 0;
var myNum = 1;
var myName;
var killerName;
var url = document.URL;

// alert(url);

while(!isNaN(parseInt(url.charAt(url.length-1)))) {
	killerNum*=10;
	killerNum+=parseInt(url.charAt(url.length-1));
	url = url.substring(0,url.length-1);
}
alert(killerNum);

// $.get("http://myrighttoplay.com/hackathon/zombie.php?killer=1"/* + killerNum*/).done(function(data){
// 	killerNum = data.killNum;
// 	killerName = data.killerName;
// 	setupText();
// });

$.getJSON('http://myrighttoplay.com/hackathon/zombie.php?killer=1', function(data) {
    console.log(data);
});


function setupText(){
	if(killerName){
		$('#KillerNamed').html('Zombie #' + killerNum + ' AKA ' + killerName + ' HAS EATEN YOUR BRAINS');
	} else {
		$('#KillerNamed').html('Zombie #' + killerNum + ' AKA ' + " Jake the Ripper" + ' HAS EATEN YOUR BRAINS');
	}

	$('#myLink').html("http://SUPERORGANDONOR.org/"+killerNum);
	$("#myProgress").html("http://SUPERORGANDONOR.org/progress/"+killerNum);
	$("#YouNamed").html("Welcome to the winning team zombie #" + myNum + " or better yet...");

}


$('#taggedName').keypress(function(e) {
	if(e.which == 13) {
		$('#YouNamed').html("Welcome to the winning team " + $("#taggedName" ).val() + ". You are Zombie #" + myNum + ".");
		myName = $("#taggedName" ).val();
		$('#taggedName').css("visibility", "hidden");
	}
});
