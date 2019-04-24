//generates random links
  function surprise(){
    var current= $("#surprise").attr("href");
    var pageArray = new Array("#mapView","#slideShow","#listThumbnails","#imageGallery");
    var num = Math.floor(Math.random()*pageArray.length);
    var link = pageArray[num];
    //in case random page is same as current page:
    while(current==link){
      num = Math.floor(Math.random()*pageArray.length);
      link = pageArray[num];
    }

    counter++;
    if (counter%10==0) link="#hidden";
    //so only change href if it is to a different page
    $("#surprise").attr("href",link);
  }

  //generate photo gallery
  function createImgs(){
    var code = "";
    for (i=1; i<15; i++){
      // code = "<img class = \"pics\" id = \""+i+"\" src = \"images/"+i+".jpg\" onclick=\"hideGallery(this.id)\">";
      code = "<a class=\"selectImg\" href=\"#popupInfo\" data-rel=\"popup\" data-transition=\"pop\"> <img class = \"pics\" id = \""+i+"\" src = \"images/"+i+".jpg\" onclick='hideGallery(this.id);zoomIn("+i+");'></a>";
      $("#gallery").append(code);
    }
  }

//hide the gallery, move selected image
  function hideGallery(i){
    $(".pics").fadeTo(100,0.3);
    $("#"+i).fadeTo(100,1);
  }

//use 1 for east and 2 for west
  function populateList(divider){
    var list;
    var src;
    var head;
    var descr;
    if (divider==1) list = [5];
    else list = [1,3,7,9,11,13];

    for (i=0;i<list.length;i++){

      src="images/"+list[i]+".jpg";

      if (list[i]==1) {
        head="Davis Museum";
        descr=davisDescription;
      }

      else if (list[i]==3) {
        head="Clapp Library";
        descr=clappDescription;
      }

      else if (list[i]==5) {
        head="Science Center";
        descr=scienceDescription;
      }

      else if (list[i]==7) {
        head="Tower Court";
        descr=towerDescription;
      }

      else if (list[i]==9) {
        head="Lulu Chow Wang Campus Center";
        descr=luluDescription;
      }

      else if (list[i]==11) {
        head="Lake Waban";
        descr=wabanDescription;
      }

      else {
        head="Jewett Arts Center";
        descr=jewettDescription;
      }

      code='<div class="lists">'+
      '<li data-icon="false">'+'<img class="listThumb" src=\"'+src+'\">'+
      '<h3 class="ui-li-jeading">'+head+'</h3>'+'<p class="ui-li-desc">'+descr+
      '</p>'+'</li>'+'</div>';

      if (divider==1) $("#east").append(code);
      else $("#west").append(code);

    }
  }

function zoomIn(imageId){
  var tooltip = "";

  if (imageId==1 | imageId==2) tooltip= davisDescription;
  else if (imageId==3 | imageId==4) tooltip=clappDescription;
  else if (imageId==5 | imageId==6) tooltip=scienceDescription;
  else if (imageId==7 | imageId==8) tooltip=towerDescription;
  else if (imageId==9 | imageId==10) tooltip=luluDescription;
  else if (imageId==11 | imageId==12) tooltip=wabanDescription;
  else tooltip=jewettDescription;
  var element = document.getElementById("popuptext");
  element.innerHTML=tooltip;
}
