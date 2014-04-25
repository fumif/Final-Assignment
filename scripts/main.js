	$(document).ready(function(){
		$("#count").TimeCircles({
			animation: "tick",
			bg_width:0.2,
			fg_width:0.04,
			circle_bg_color: "#666",
			time : {
					Days : {color:"#808080"},
					Hours : {color:"#808080"},
				Minutes :{color:"#808080"},
					Seconds : {color:"#808080"}
			}
		});
	
	$("#mobile").click(function(){
			$("#bar").toggle();
			});	
		});	
