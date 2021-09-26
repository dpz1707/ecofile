console.log("Popup DOM fully loaded and parsed");
var actualCode = '('+ function modifyDOM() {
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
            div.innerText="Susmeter Score: Not Found ඞ";
            div.style.color = "silver";
        }
        
        const nextDiv = document.getElementsByClassName("mt5 mb2")[0];
        document.getElementsByClassName("p5")[0].insertBefore(div, nextDiv);
    } else if (site.includes("google.com/search")) {
        console.log('Tab script:');
        var companyName;

        const boxes = document.getElementsByClassName("tJ9zfc");

        var nextDiv;

        for(var i = 0; i < boxes.length; i++) {
            companyName = boxes[i].childNodes[0].textContent;
            console.log(companyName);

            var num = 1;
            var div=document.createElement("div");
            
    
            div.style = "font-family: 'Courier New', monospace; font-weight: bold; font-size: 15px; "
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
                div.innerText="Susmeter Score: Not Found ඞ";
                div.style.color = "silver";
            }
            
            nextDiv = boxes[i].childNodes[1];
            boxes[i].insertBefore(div, nextDiv);
                        
        }

        /*
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
        */
    } else {
        console.log("Program not optimized for this Page Type")
    }
    return document.body.innerHTML;
} + ")();";

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();