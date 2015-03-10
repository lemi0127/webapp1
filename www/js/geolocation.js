function reportGPS( position ){ 
	 
	var canvasdiv = document.getElementById("mapoutput");
	var dimensions = 350;
	var coordinates = position.coords.latitude + ',' + position.coords.longitude;
	
	var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
	mapUrl = mapUrl + coordinates 
			+ '&zoom=14&size=' + dimensions + 'x' + dimensions 
			+ '&maptype=terrain&sensor=true&markers=size:mid%7Ccolor:red%7C' 
			+ coordinates;

	var imgsrc = new Image;
	imgsrc.height = dimensions;
	imgsrc.width = dimensions;
	imgsrc.src = mapUrl;
	
	if (canvasdiv.childElementCount == 0)
		canvasdiv.appendChild(imgsrc);
}


function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
};