$(function(){
	$("#start").click(function(){
			$("#joueurAInit").show();
			$("#boutonValidation").show();
			remplirPlateau();
	});

	$("#reset").click(function(){
			$("i").remove();
	});

	function remplirPlateau () {
		$(".caseVide").click(function(){
			$(this).html('<i class="fa fa-fighter-jet fa-lg"></i>');
			$(this).attr("class", ".casePA");
		});
	}

	function init(identifiantTableau){

		// Cette partie permet de remplir le tableau dynamiquement en lui passant son identifiant.
		var tableau = document.getElementById(identifiantTableau);
		var tableauBody = document.createElement("tbody");
		for (var i = 0; i <= 9; i++) {
			var row = document.createElement("tr");
			for (var j = 0; j <= 9; j++) {
				var col = document.createElement("td");
				$(col).attr("class", "caseVide");
				$(col).attr("id", i+""+j);
				row.appendChild(col);
			}
			tableauBody.appendChild(row);
		}
		tableau.appendChild(tableauBody);
	}

	function hideAll () {
		$("#boutonValidation").hide();
		$("#joueurAInit").hide();
	    $("#joueurBInit").hide();
	    $("#joueurACache").hide();
	    $("#joueurBCache").hide();
	}

	$(document).ready(function() {
	init("joueurAInit");
	init("joueurBInit");
	init("joueurACache");
	init("joueurBCache");
    hideAll();
	});
});