let mainDiv = document.createElement("div");
var dragZone = document.querySelector("body");

mainDivProperties={right:0,bottom:0,width:0,height:0};

function changeSizeMainDiv(newW, newH) {
  change_widthMainDiv(newW);
  change_heightMainDiv(newH);
  refreshDrag();
}

function change_rightMainDiv(newR){
  mainDivProperties.right=newR;
  mainDiv.style.right=`${newR}`+"px";
}

function change_bottomMainDiv(newB){
  mainDivProperties.bottom=newB;
  mainDiv.style.bottom=`${newB}`+"px";
}

function change_widthMainDiv(newW){
  mainDivProperties.width=newW;
  mainDiv.style.width=`${newW}`+"px";
}

function change_heightMainDiv(newH){
  mainDivProperties.height=newH;
  mainDiv.style.height=`${newH}`+"px";
}

var active = false;

dragZone.addEventListener("mousedown", dragStart, false);
dragZone.addEventListener("mouseup", dragEnd, false);
dragZone.addEventListener("mousemove", drag, false);

function dragStart(e) {
  var dragStabbed = document.querySelector("#dragbar");
  if (e.target === dragStabbed) {
    active = true;
  }
}

function dragEnd(e) {
  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();

    if ( (e.clientX + mainDivProperties.width) > window.innerWidth){
      change_rightMainDiv(0);
    } else if (e.clientX < 0){
      change_rightMainDiv((window.innerWidth - mainDivProperties.width));
    } else {
      change_rightMainDiv((window.innerWidth - e.clientX - mainDivProperties.width));
    }

    if ( (e.clientY + mainDivProperties.height) > window.innerHeight){
      change_bottomMainDiv(0);
    } else if (e.clientY < 0){
      change_bottomMainDiv((window.innerHeight - mainDivProperties.height));
    } else {
      change_bottomMainDiv((window.innerHeight - e.clientY - mainDivProperties.height));
    }
  }
}

function refreshDrag(){
  if ( (mainDivProperties.width + mainDivProperties.right) > window.innerWidth){
    change_rightMainDiv((window.innerWidth - mainDivProperties.width ));
  }
  if ( (mainDivProperties.height + mainDivProperties.bottom) > window.innerHeight){
    change_bottomMainDiv((window.innerHeight - mainDivProperties.height ));
  }
}