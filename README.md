# aurelia-bootstrap-datepicker

Since I'm not using bootstrap anymore (in favour of [Faceman](http://www.faceman.io)) this will not be maintained. You are however free to fork and make it your own!

This is an aurelia port of the bootstrap-datpicker found [here](https://github.com/eternicode/bootstrap-datepicker)

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Dependencies

This library has external dependencies:

* jquery
* bootstrap-datepicker

## Used By

This library is a plugin and is not used by the core framework.

## How to install this plugin?

1. In your project install the plugin with following commands:

  * jspm

    ```shell
    jspm install npm:aurelia-bootstrap-datepicker
    ```

  * npm

    ```shell
    npm install aurelia-bootstrap-datepicker --save
    ```


2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

```html
  <body aurelia-app="main">
  ...
```
3. Create (if you haven't already) a file `main.js` in your `src` folder with following content:

```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-bootstrap-datepicker');

    aurelia.start().then(a => a.setRoot());
  }
```

## Using the plugin

Simply use the tag 

```html
  <bootstrap-datepicker value.bind="'mm-dd-yyyy'" dp-options.bind="dpOptions" changedate.delegate="mychangedatefunction($event)"></bootstrap-datepicker>
```

You can use the following properties:

* value - string - a date string, default format is 'mm-dd-yyyy'. otherwise the format specified in your dp-options
* dp-options - object - an object containing the options for the datepicker. All possibilities are found [here](http://bootstrap-datepicker.readthedocs.io/en/stable/options.html).

## Events

You can subscribe to the following events:

* changedate - event - Fired when the date is changed.
