var _training;

// PvE-------------------------------------------------------------------------------------------------------------

function blank(){
	(function($) {
		$("#buildlist").animate({height:"100%"});
		$(document).ready(function() {

		});
	})(jQuery);
}

function diel_pve_build1(){
	(function($) {
		$("#buildlist").animate({height:"0%"});
		$(document).ready(function() {
			_training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 12, \"character_job\" : \"SM\", \"json_slot_data\" : {\"27100\" : \"7\", \"27101\" : \"7\", \"27102\" : \"7\", \"27103\" : \"8\", \"27104\" : \"8\", \"27109\" : \"2\", \"27111\" : \"11\", \"27113\" : \"4\", \"27114\" : \"2\", \"27126\" : \"5\", \"27129\" : \"10\", \"27144\" : \"6\", \"27157\" : \"1\", \"27200\" : \"11\", \"27300\" : \"22\", \"27304\" : \"52\", \"27400\" : \"3\", \"27404\" : \"7\", \"27405\" : \"3\", \"27407\" : \"6\"}}");
		});
	})(jQuery);
}

// PvP-------------------------------------------------------------------------------------------------------------

function diel_pvp_build1(){
	(function($) {
		$("#buildlist").animate({height:"0%"});
		$(document).ready(function() {
			_training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 12, \"character_job\" : \"SM\", \"json_slot_data\" : {\"27103\" : \"11\", \"27104\" : \"8\", \"27109\" : \"2\", \"27111\" : \"4\", \"27113\" : \"4\", \"27114\" : \"2\", \"27126\" : \"5\", \"27129\" : \"10\", \"27144\" : \"6\", \"27157\" : \"1\", \"27200\" : \"7\", \"27202\" : \"4\", \"27300\" : \"13\", \"27304\" : \"23\", \"27307\" : \"4\", \"27400\" : \"5\", \"27404\" : \"7\", \"27405\" : \"5\", \"27407\" : \"6\"}}");
		});
	})(jQuery);
}