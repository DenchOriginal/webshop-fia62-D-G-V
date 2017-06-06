$(document).ready(function(){
    $('.modal').modal();
  });

$.getJSON( "js/produkte.json", function( data ) {
  var items = [];
  $.each( data["produkte"]["gerichte"], function( key, val ) {
    $("#card-template").clone().attr("id","gericht_"+key).appendTo("#kacheln").show();
	$("#gericht_"+key).find(".card-content p").html(val["description"]);
	$("#gericht_"+key).find(".image").attr("src","img/products/"+val["image"]);
	$("#gericht_"+key).find(".card-title").html(val["name"]);
  });
 
});