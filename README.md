## MMM-NatureCalendar

* Simple calendar
* Optional Rotating Nature Scenes
* Optional color schemes
* 17 different languages

## Examples

![](images/1.png) ![](images/2.png) ![](images/3.png)

## Installation

* `git clone https://github.com/mykle1/MMM-NatureCalendar` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

```
    {
      disabled: false,
    module: "MMM-NatureCalendar",
    position: "middle_center",
    config: {
      calendarType: "today", // today, month and monthPlus
      lang: "all", // See language chart below. "all" for English.
      colorCode: "4", // see color codes below
    }
  },
```

## No language or color options for calendarType: "today"


## Language codes for config
* ar = Arabic
* zh_cn = Chinese (Simplified)
* zh_tw = Chinese (Traditional)
* nl = Dutch
* all = English
* fr = French
* de = German
* el = Greek
* id = Indonesian
* it = Italian
* ja = Japanese
* ko = Korean
* pt = Portuguese
* sv = Swediah
* ru = Russian
* es = Spanish
* th = Thai

## Color codes for config

* 1 = Aqua
* 2 = Blue #1
* 3 = Blue #2
* 4 = Gray (Dark)
* 5 = Gray (Light)
* 6 = Green
* 7 = Purple
* 8 = Red
* 9 = Yellow

## Thanks go to @sdetweil for his z-index magic
