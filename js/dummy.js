function openDistrictMap(){
    document.getElementById("districtMapDiv").style.display = "inline";
}

function closeDistrictMap(){
  document.getElementById("districtMapDiv").style.display = "none";
}

//FOR MAP
funtion loadMap(){
  var myMap = new MapsLib({
    fusionTableId:      "1CQYIqVOK-A1Ho-cYv9wl3p4XTfrJKcIOM0GehOHG",
    googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
    locationColumn:     "geometry",
    map_center:         [30.2672, -97.7431],
    locationScope:      "austin"
  });
}

var countDistrict = 0;

function showDistricts(){
  countDistrict++;

  if(countDistrict%2 === 1){
    myMap= new MapsLib({
      fusionTableId:      "1o_NBmKAHnbtyUqOWsQselwKFRxmiaQ_PJmkdQdU2",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
  } else{
    myMap = new MapsLib({
      fusionTableId:      "1CQYIqVOK-A1Ho-cYv9wl3p4XTfrJKcIOM0GehOHG",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
  }
}

var countAffordable = 0;

function showAffordableHousing(){
  countAffordable++;

  if(countAffordable%2 === 1){
    myMap= new MapsLib({
      fusionTableId:      "1rT5PH2EnnmXf5VMdkLW5SD141MQP6tZToAZ9612Y",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
  } else{
    myMap = new MapsLib({
      fusionTableId:      "1CQYIqVOK-A1Ho-cYv9wl3p4XTfrJKcIOM0GehOHG",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
  }
}

$(function() {
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search_address'));

  $(':checkbox').click(function(){
    myMap.doSearch();
  });

  $(':radio').click(function(){
    myMap.doSearch();
  });

  $('#search_radius').change(function(){
    myMap.doSearch();
  });

  $('#search').click(function(){
    myMap.doSearch();
  });

  $('#find_me').click(function(){
    myMap.findMe();
    return false;
  });

  $('#reset').click(function(){
    myMap.reset();
    return false;
  });

  $(":text").keydown(function(e){
      var key =  e.keyCode ? e.keyCode : e.which;
      if(key === 13) {
          $('#search').click();
          return false;
      }
  });
});

//SIDE BAR
function changeSideBar(){

  document.getElementById('zipCode').innerHTML = 'Some Zip Code';
  document.getElementById('sideBarPercent').innerHTML = '12' + "%";

}
