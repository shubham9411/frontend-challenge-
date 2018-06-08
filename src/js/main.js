/*
Function for rendering map
*/
function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(29.643362, 79.432182),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
window.onload = function () {
	myMap();
};