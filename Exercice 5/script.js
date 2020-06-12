function getLocation() { 
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        
    }
}

function geoSuccess (positionInfo){
    document.getElementById("longitude").innerHTML = positionInfo.coords.longitude;
    document.getElementById("latitude").innerHTML = positionInfo.coords.latitude;
    document.getElementById("precision").innerHTML = positionInfo.coords.accuracy;
    document.getElementById("altitude").innerHTML = positionInfo.coords.altitude;
    document.getElementById("precisionAltitude").innerHTML = positionInfo.coords.altitudeAccuracy;
    document.getElementById("cap").innerHTML = positionInfo.coords.heading;
    document.getElementById("vitesse").innerHTML = positionInfo.coords.speed;
    var Esirem={"longitude":5.0039326,"latitude":47.3121519};
   
}


function geoError (positionError){
if (errorInfo.code == 1)
    alert("L’utilisateur ne souhaite pas partager sa position");
else if (errorInfo.code == 2)
         alert("Impossible de déterminer une position")
else if ( errorInfo.code == 3)
    alert("Délai de recherche de position trop long");
}


 
window.onload = getLocation;