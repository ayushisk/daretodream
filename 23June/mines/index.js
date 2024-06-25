var jms = null, timeHandle = null;
window.onload = function () {
    console.log('here');
    var radios = document.getElementsByName("level");
    for (var i=0, j=radios.length; i<j; i++)
    {
        radios[i].onclick = function () {
          if (jms!=null)
              if(jms.landMineCount>0)
                  if(!confirm("End Gane?")) return false;
          var value = this.value;
          init(value, value, (value * value) / 5 - value, (value * value) / 5);
          document.getElementById("JMS_main").style.width = value * 40 + 180 + 60 + "px";
        };
    }
    init(10,10);
};

function init(rowCount, colCount, minLandMineCount, maxLandMineCount){
    var doc = document,
        landMineCountElement = doc.getElementById("landMineCount"),
        timeshow = doc.getElementById("costTime"),
        beginButton = doc.getElementById("begin");
    if (jms!=null)
    {
        clearInterval(timeHandle)
        timeshow.innerHTML = 0;
        landMineCountElement.innerHTML = 0;
    }
    jms = JMS("landmine", rowCount, colCount, minLandMineCount, maxLandMineCount);

    jms.endCallBack = function () {
      clearInterval(timeHandle);
    };
    jms.landMineCallBack = function (count) {
      landMineCountElement.innerHTML = count;
    };

    beginButton.onclick = function () {
      jms.play();
      landMineCountElement.innerHTML = jms.landMineCount;
      jms.begin();
      timeHandle = setInterval(function () {
        timeshow.innerHTML = parseInt((new Date() - jms.beginTime) / 1000);
      }, 1000);
    };
}