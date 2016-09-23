# Cool Climate Calculator Widget

This widget can be used to embed the Cool Climate Calculator UI in your site.

## Installation

Make sure the following packages are installed on your machine
* node.js
* npm


### Install dependencies

```
$ npm i
```

### Production build

Compile into a minified bundle with external stylesheets.
```
$ gulp build
```

### Development

Watch for changes:
```
$ gulp watch
```

## Usage

The compiled bundle needs to be referenced within the HTML file.
```
<script charset="utf-8" src="dist/bundle.min.js"></script>
```

A div including the id tag (equivalent to the `container_id` parameter) needs to be created within the body tag.

The widget can be instantiated within a `<script>` tag.
(for an example, see: [dist/index.html](dist/index.html) )

```
<script>
new window.Widget({
    container_id: 'widget_goes_here',
    source: 'nature.org',
    campaign: 'carboncalculator',
    user_platform: false,
    banner_url: "https://clipartion.com/wp-content/uploads/2016/03/green-banner-transparent-png-image.png",
    banner_style: {'maxHeight': '60px'},
    cta: {
      title: 'Offset your impact on nature',
      show_equation: true,
      description: 'Your support will fund forest conservation and help reduce or slow the worst consequences of climate change.',
      carbon_price_per_ton: 45,
      offset_url: 'http://www.nature.org/offset',
      button_title: 'Offset now!'
    }
  });
</script>
```



### Parameters

The UI of the CC Calculator is currently set to: http://calculator.coolclimatenetwork.net/

| property | description |
| -------- | ----------- |
| *container_id*  | The identifier for the container which the iframe is inserted into. |
| *source*  | String to set `utm_source` on iframe URL parameter for Google Analytics. |
| *campaign*  | String to set `utm_campaign` on iframe URL parameter for Google Analytics. |
| *user_platform*  | Boolean which can be set to false in order to hide Settings menu item and disable connection to user platform (optional). |
| *banner_url*  | Set the URL of the top banner image for the calculator. |
| *banner_style*  | Set the style of the banner image within the the calculator (ie so you can position it properly) - expects an object. |
| *max_width*  | Sets maximum width of iframe. If not given, defaults to '1200px'. |
| *height*  | Sets height of iframe. If not given, updates responsively. |
| * cta: {* | *The following parameters need to be placed within this 'cta' object property.* |
| *title*  | The title that shows up above the offset section on the Take Action page. |
| *show_equation*  | Boolean which decides whether the monthly gift equation is shown. |
| *description* | Sets the description text displayed above the CTA button. |
| *carbon_price_per_ton*  | The carbon price per ton for calculating the offset amount. |
| *offset_url* | The URL that the call to action button is linked to. |
| *button_title* | The text on the call to action button. |
| * }* | |
