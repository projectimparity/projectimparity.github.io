//INTRO
function skip(position){
  document.getElementById("blur").setAttribute("style","-webkit-filter: blur(0px)");
  document.getElementsByClassName("instructions")[position].style.display = "none";
}

function next(position){
  document.getElementsByClassName("instructions")[position].style.display = "none";
  document.getElementById("blur").setAttribute("style","-webkit-filter: blur(0px)");
  document.getElementsByClassName("instructions")[position + 1].style.display = "block";
}

//FOR MAP
var myMap = new MapsLib({
  fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
  googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
  locationColumn:     "geometry",
  map_center:         [30.2672, -97.7431],
  locationScope:      "austin"
});

var dummyMap = new MapsLib({
  fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
  googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
  locationColumn:     "geometry",
  map_center:         [30.2672, -97.7431],
  locationScope:      "austin"
});

function loadMap(){
  myMap = new MapsLib({
    fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
    googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
    locationColumn:     "geometry",
    map_center:         [30.2672, -97.7431],
    locationScope:      "austin"
  });
}

function loadSearchMap(){
  myMap.doSearch();
}


function showGentrification(){

  if(myMap.fusionTableId !== "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE"){
    myMap= new MapsLib({
      fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
    document.getElementById("mainOptionDiv").style.background = "#fced1c";
    document.getElementById("locateOptionDiv").style.background = "white";
    document.getElementById("callOptionDiv").style.background = "white";
    document.getElementById("meetingOptionDiv").style.background = "white";
    document.getElementById("housingDiv").style.display = "none";
    document.getElementById("legend").style.display = "block";
  } else{
    myMap = new MapsLib({
      fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
    document.getElementById("mainOptionDiv").style.background = "#fced1c";
    document.getElementById("locateOptionDiv").style.background = "white";
    document.getElementById("legend").style.display = "block";
  }

}

function showDistricts(){

  if(myMap.fusionTableId !== "1o_NBmKAHnbtyUqOWsQselwKFRxmiaQ_PJmkdQdU2"){
    myMap= new MapsLib({
      fusionTableId:      "1o_NBmKAHnbtyUqOWsQselwKFRxmiaQ_PJmkdQdU2",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
    document.getElementById("callOptionDiv").style.background = "#fced1c";
    document.getElementById("locateOptionDiv").style.background = "white";
    document.getElementById("meetingOptionDiv").style.background = "white";
    document.getElementById("mainOptionDiv").style.background = "white";
    document.getElementById("calendarDiv").style.display = "none";
    document.getElementById("legend").style.display = "none";
    document.getElementById("housingDiv").style.display = "none";

  } else{
    myMap = new MapsLib({
      fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
    document.getElementById("callOptionDiv").style.background = "white";
    document.getElementById("legend").style.display = "block";
  }


}

function showAffordableHousing(){

  if(myMap.fusionTableId !== "1lKb9R5voQO7geXSokjiFA2LGYimbySjVVVR77VXx"){
    myMap= new MapsLib({
      fusionTableId:      "1lKb9R5voQO7geXSokjiFA2LGYimbySjVVVR77VXx",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });

    document.getElementById("locateOptionDiv").style.background = "#fced1c";
    document.getElementById("legend").style.display = "none";
    document.getElementById("housingDiv").style.display = "block";
    document.getElementById("mainOptionDiv").style.background = "white";
    document.getElementById("callOptionDiv").style.background = "white";
    document.getElementById("meetingOptionDiv").style.background = "white";
    document.getElementById("calendarDiv").style.display = "none";
    document.getElementById("sideBar").style.height = "200%";
  } else{
    myMap = new MapsLib({
      fusionTableId:      "1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE",
      googleApiKey:       "AIzaSyAWnB_I7OITzZAyCWNQEAOQaQ1TREUUXEk",
      locationColumn:     "geometry",
      map_center:         [30.2672, -97.7431],
      locationScope:      "austin"
    });
    document.getElementById("locateOptionDiv").style.background = "white";
    document.getElementById("housingDiv").style.display = "none";
    document.getElementById("legend").style.display = "block";
  }
}

function showCalendar(){
  var cal = document.getElementById("calendarDiv");
  if(cal.style.display !== "block"){
    cal.style.display = "block";
    document.getElementById("sideBar").style.height = "250%";
    document.getElementById("meetingOptionDiv").style.background = "#fced1c";
    document.getElementById("housingDiv").style.display = "none";
    document.getElementById("locateOptionDiv").style.background = "white";
  } else{
    cal.style.display = "none";
    document.getElementById("meetingOptionDiv").style.background = "white";
    document.getElementById("sideBar").style.height = "200%";
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

function showInfo(){
    if(myMap.fusionTableId === '1EHig2fLqGlw_259sUar_n8BKrn5-l5NL-oNzpNkE'){
    setTimeout(function(){
        document.getElementById("sideBarInfoDiv").innerHTML = document.getElementsByClassName("googft-info-window")[0].innerHTML;
        document.getElementById("zipCodeDiv").innerHTML = document.getElementsByTagName("center")[0].innerHTML;
        document.getElementById("sideBarPercentDiv").innerHTML = document.getElementsByTagName("center")[1].innerHTML;
    }, 1000);
  }
}
