window.onresize = function() {
  getRem(1000, 14);
};

function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
