# Gooz

Send the old sh*tty browsers away from your website as simple as a Gooz


## Installation

You can install it from [NPM](https://www.npmjs.com/package/gooz):

```bash
npm install --save gooz
```


Or grab `build/bundle.js` and load it in your page. The `Gooz` class is now loaded as `Gooz` in the global scope (`window.Gooz`).

```html
<script src="bundle.js"></script>
<script>
// Gooz is ready here! xD
</script>
```

## Usage

```js
// 1
const gooz = new Gooz({redirect: true}); // if it's gooz, it will redirect to 'http://outdatedbrowser.com'

// 2
const gooz = new Gooz(); // or using var instead of const
gooz.isGooz(); // true or false

// 3
const options = {
  features: ['SVGElement', 'localStorage'], // passing window global object you want to check
  globalObject: window, // global object (window)
  redirect: true, // auto redirect on class instance creation
  timeout: 7000, // redirect timeout (ms)
  uri: 'http://outdatedbrowser.com' // redirect uri
}
const gooz = new Gooz(options); // auto redirect if gooz and nothing if not

// 4
const gooz = new Gooz();
gooz.goozate(); // redirect if it's gooz

// 5
const gooz = new Gooz();
gooz.redirect({
  timeout: 1500,
  uri: 'http://mozilla.org/firefox'
});

```



## Ideas || Issues
Just fill an issue and describe it. I'll check it ASAP!


## Contribution

You can fork the repository, improve or fix some part of it and then send the pull requests back if you want to see them here. I really appreciate that. :heart:

Pleas run `grunt` before sending PRs to run grunt tasks, lint your code and build it.
