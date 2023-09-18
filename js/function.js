function myMap() {
var mapProp= {
  center:new google.maps.LatLng(-15.487982, 28.348374),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}