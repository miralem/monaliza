//Get random image URL
var monaliza = function(optionsObj){
  	this.initialize(optionsObj);
}

monaliza.prototype = {
	//options
	options: {
		useGrayImage: false,
		imageWidth: 640,
		imageHeight: 480,	
		category: null
		
	},
	
	//available categories
	categories : ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife' ,'people', 'nature', 'sports', 'technics', 'transport'],
	
	//used to reload an uncached image
	imageReloadId: 0,
	
	//default number of images for getMultiple()
	defaultMultipleImagesCount: 10,
	
	//init
	initialize: function(optionsObj){
		if(!optionsObj)
			return; 
		
		if(typeof optionsObj.useGrayImage  !== 'undefined'){			
			this.options.useGrayImage = optionsObj.useGrayImage;
		}
		
		if(typeof optionsObj.imageWidth  !== 'undefined'){
			if( this.isNumber(optionsObj.imageWidth))
				this.options.imageWidth = optionsObj.imageWidth;
		}
		
		if(typeof optionsObj.imageHeight !== 'undefined'){
			if(this.isNumber(optionsObj.imageHeight))
				this.options.imageHeight = optionsObj.imageHeight;
		}
		
		if(optionsObj.category != null){
			if(this.categories.indexOf(optionsObj.category) > -1){
				this.options.category = optionsObj.category;
			} else {
				console.log("Category doesn't exists.");
			}
 		}
	},
	
	//check if number
	isNumber : function (n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	},
	
	//get a single image
	getImage: function(){		
			//use color
			var useGrayImage = this.options.useGrayImage ? 'g/' : '';		
			
			//use category
			var useCategory = this.options.category ? '/' + this.options.category : '';
			
			var url = 'http://lorempixel.com/' 
				+ useGrayImage 
				+ this.options.imageWidth 
				+ '/' + this.options.imageHeight 
				+ useCategory 
				+ '?r=' + (new Date().getTime()) + '-' + this.imageReloadId;
				
			this.imageReloadId += 1;
		
			return url;
	},

	//get multiple images
	getMultiple: function(size){	
		var size = size || this.defaultMultipleImagesCount;
	
		var images = [];
				
		for(var i = 1; i <= size; i++){
			images.push(this.getImage());
		}
		
		return images;
	},
	//download image
	downloadImage: function(){

		var link = document.createElement('a');
		link.href = this.getImage();
		link.download = 'image.png';
		link.click();
	},
	//download multiple images
	downloadImages: function(size){
		var images = [];
		images = this.getMultiple(size);
		for(var i=0; i<images.length; i++){
			
			var link = document.createElement('a');
			link.href = images[i];
			link.download = 'image' +  i + '.png';
			link.click();
		}
	}
};
