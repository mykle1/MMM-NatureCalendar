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
			colorCode: "",        // Set in config.js
			border: "no",
	},

	start: function() {
			self = this;
			this.color = {
					'1': 'aqua0',
					'2': 'dblue0',
					'3': 'eblue0',
					'4': 'blk0',
					'5': 'nb0',
					'6': 'green0',
					'7': 'purple0',
					'8': 'dred0',
					'9': 'gold0',
				}
			},

	getStyles: function() {
        return ["MMM-NatureCalendar.css"];
    },

	getDom: function() {


    // The pin images and postitioning
		var wrapper = document.createElement("div");
		wrapper.style="display:inline-flex; flex-direction: row; justify-content:center;"
		var img = document.createElement("img");
		img.className = 'image';
		img.style.zorder=2;
		img.style.position='relative';
		img.style.top=-7+'px';
		img.style.left=15+'px';
		img.src = "modules/MMM-NatureCalendar/images/left.png";

		var img2 = document.createElement("img");
		img2.className = 'image2';
		img2.src = "modules/MMM-NatureCalendar/images/right.png";

		wrapper.appendChild(img);

    // the iframe for the calendars and calendar options
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "z-order:1;";
		if (this.config.border == "yes") {
			iframe.style.frameborder = "1";
		} else {
		iframe.style = "border:none"
		}
		iframe.scrolling="no";

	if (this.config.calendarType === "today") {
		iframe.height = "208px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/naturedigi";


	} else if (this.config.calendarType === "month") {
		iframe.height = "152px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/mcc/" + this.config.lang + "?skin=" + this.color[this.config.colorCode];


  } else if (this.config.calendarType === "monthPlus") {
		iframe.height = "365px";
		iframe.width = "320px";
		type="text/javascript";
		iframe.src="https://widgetscode.com/wc/nature/" + this.config.lang + "?skin=" + this.color[this.config.colorCode];
  }
	  img2.style.position='relative';
	  img2.style.left='-20px' // parseInt(iframe.width)-10+'px';
		img2.style.top="-7px";
		img2.style.zorder=2;
		wrapper.appendChild(iframe)
		wrapper.appendChild(img2);
		return wrapper;

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
