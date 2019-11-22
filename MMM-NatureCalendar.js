/* Magic Mirror
 * Module: MMM-NatureCalendar

 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-NatureCalendar",{

	defaults: {
		  calendarType: "", // Set in config.js
			lang: "",         // Set in config.js
			color: "",        // Set in config.js
	},

	getStyles: function() {
        return ["MMM-NatureCalendar.css"];
    },

	getDom: function() {

		var wrapper = document.createElement("div");
		wrapper.style="display:inline-flex; flex-direction: row; justify-content:center;"
		//var pic = document.createElement("div");
		var img = document.createElement("img");
		img.className = 'image';
		img.style.zorder=2;
		img.style.position='relative';
		img.style.top=-7+'px'; 
		img.style.left=15+'px';
		
		img.src = "modules/MMM-NatureCalendar/images/left.png";
		var img2 = document.createElement("img");
		img2.className = 'image';
		img2.src = "modules/MMM-NatureCalendar/images/left.png";		

		//pic.appendChild(img);
		wrapper.appendChild(img);
		

		//return wrapper;


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none z-order:1;";
		//iframe.style = "padding-top: 170px";
		iframe.scrolling="no";

	if (this.config.calendarType === "day") {
		iframe.height = "205px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/naturedigi";


	} else if (this.config.calendarType === "month") {
		iframe.height = "153px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/mcc/" + this.config.lang + "?skin=" + this.config.color;


  } else if (this.config.calendarType === "monthly") {
		iframe.height = "365px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/nature/" + this.config.lang + "?skin=" + this.config.color;
  }
	  img2.style.position='relative';
	  img2.style.left='-20px' // parseInt(iframe.width)-10+'px';
		img2.style.top="-7px";
		img2.style.zorder=2;
		wrapper.appendChild(iframe)
		wrapper.appendChild(img2);		
		return wrapper;

		// var wrapper = document.createElement("div");
		//
		// var pic = document.createElement("div");
    // var img = document.createElement("img");
    // img.className = 'image';
		// img.src = "modules/MMM-NatureCalendar/images/left.png";
    // pic.appendChild(img);
    // wrapper.appendChild(img);
		//
		// return wrapper;

	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_CALENDAR') {
            this.hide(1000);
        }  else if (notification === 'SHOW_CALENDAR') {
            this.show(1000);
        }

    },

});
