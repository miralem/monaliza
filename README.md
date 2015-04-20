# monaliza
Monaliza is a image faker library used to test all sorts of applications where it comes to use of images...

Installation
====
```
bower install monaliza
```

How to use
====
```
//instantiate monaliza
var mon = new monaliza();

//get multiple images
var imagesArray = mon.getMultiple(10);

//print to console
console.log(imagesArray);

//do some configuration
var options =  {
	imageHeight: 200, //set image height
	category: 'business' //set category
};

//create monaliza with options
var mon = new monaliza(options);

//get multiple images
var imagesArray = mon.getMultiple(10);

//print to console
console.log(imagesArray);

```