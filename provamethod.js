turnpage: function(setting, thepage, autocall) {
    var currentpage = setting.currentpage; //current page # before change
    var totalpages = setting.contentdivs.length;
    var turntopage = (/prev/i.test(thepage)) ? currentpage - 1 : (/next/i.test(thepage)) ? currentpage + 1 : parseInt(thepage);
    turntopage = (turntopage < 1) ? totalpages : (turntopage > totalpages) ? 1 : turntopage; //test for out of bound and adjust
    if (turntopage == setting.currentpage && typeof autocall == "undefined") //if a pagination link is clicked on repeatedly
      return;
    setting.currentpage = turntopage;
    setting.contentdivs[turntopage - 1].style.zIndex = ++setting.topzindex;
    clearTimeout(window["fcsfade" + setting.id]);
    setting.cacheprevpage = setting.prevpage;
    if (setting.enablefade[0] == true) {
      setting.curopacity = 0;
      $(setting.contentdivs[setting.prevpage - 1]).fadeOut(setting.fadeduration, function() {
        $(setting.contentdivs[turntopage - 1]).fadeIn(setting.fadeduration, function() {
          if (setting.prevpage <= setting.toclinks.length) //make sure pagination link exists (may not if manually defined via "markup", and user omitted)
            this.css(setting.toclinks[setting.prevpage - 1], "selected", "remove");
          if (turntopage <= setting.toclinks.length) //make sure pagination link exists (may not if manually defined via "markup", and user omitted)
            this.css(setting.toclinks[turntopage - 1], "selected", "add");
          setting.prevpage = turntopage;
          if (this.enablepersist)
            this.setCookie("fcspersist" + setting.id, turntopage);
          try {
            setting.onChange(setting.prevpage - 1, setting.currentpage - 1, setting.contentdivs);
          } catch (e) {
            console.log(e.message);
          }
        });
      });
    } else { //if fade is disabled, fire onChange event immediately (versus after fade is complete)
      $(setting.contentdivs[setting.prevpage - 1]).hide(); //collapse last content div shown (it was set to "block")
      $(setting.contentdivs[turntopage - 1]).show();
      if (setting.prevpage <= setting.toclinks.length) //make sure pagination link exists (may not if manually defined via "markup", and user omitted)
        this.css(setting.toclinks[setting.prevpage - 1], "selected", "remove");
      if (turntopage <= setting.toclinks.length) //make sure pagination link exists (may not if manually defined via "markup", and user omitted)
        this.css(setting.toclinks[turntopage - 1], "selected", "add");
      setting.prevpage = turntopage;
      if (this.enablepersist)
        this.setCookie("fcspersist" + setting.id, turntopage);
      try {
        setting.onChange(setting.prevpage - 1, setting.currentpage - 1, setting.contentdivs);
      } catch (e) {
        console.log(e.message);
      }
    }
}