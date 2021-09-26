// Google Jobs Title Class: nJlQNd sMzDkb
/*
    Add this back into manifest.json for the popup window: 
    "browser_action": {
        "default_title": "Sus",
        "default_popup": "popup.html"
    },
*/


window.addEventListener('load', (event) => {
  console.log("Popup DOM fully loaded and parsed");

  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      const site = document.URL;
      console.log(site);
      if(site.includes("linkedin.com/jobs/view/")) {
        console.log('Tab script:');
        var companyName = document.getElementsByClassName("jobs-unified-top-card__subtitle-primary-grouping mr2 t-black")[0].children[0].textContent.trim();
        console.log(companyName);
        
        var num = 1;
        var div=document.createElement("div");

        div.style = "font-family: 'Courier New', monospace; font-weight: bold; font-size: 20px; "
        if (num) {
            if (num > 4) {
                div.innerText="Susmeter Score: " + num;
                div.style.color = "green";
            } else if (num > 3) {
                div.innerText="Susmeter Score: " + num;
                div.style.color = "greenyellow";
            } else if (num > 2) {
                div.innerText="Susmeter Score: " + num;
                div.style.color = "yellow";
            } else if (num > 1) {
                div.innerText="Susmeter Score: " + num;
                div.style.color = "orange";
            } else {
                div.innerText="Susmeter Score: " + num;
                div.style.color = "red";
            }
        } else {
            div.innerText="Susmeter Score: Not Found";
            div.style.color = "silver";
        }
        
        const nextDiv = document.getElementsByClassName("mt5 mb2")[0];
        document.getElementsByClassName("p5")[0].insertBefore(div, nextDiv);
      } else {
          console.log("Program not optimized for this Page Type")
      }
      return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
      code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      //Here we have just the innerHTML and not DOM structure
      console.log('Popup script:')
      console.log(results[0]);
  });
});