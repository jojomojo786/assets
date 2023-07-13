  console.log("V4 ad units");
  
  var scriptId = "649eccaec5d9b001b60d2807";
  
  if (!localStorage.getItem(scriptId)) {
    var script = document.createElement('script');
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=649eccaec5d9b001b60d2807&AV_PUBLISHERID=61bb50b4ad11e83d79154566";
    document.body.appendChild(script);

    localStorage.setItem(scriptId, 'loaded');
  }
