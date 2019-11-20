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

		var pic = document.createElement("div");
		var img = document.createElement("img");
		img.className = 'image';
		img.src = "modules/MMM-NatureCalendar/images/left.png";
		pic.appendChild(img);
		wrapper.appendChild(img);

		return wrapper;


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
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

		return iframe;

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
