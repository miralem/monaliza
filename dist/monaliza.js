/*! monaliza - v1.0.0 - 2015-04-16
* https://github.com/miralem/monaliza
* Copyright (c) 2015 ; Licensed  */
//Get random image URL
//by Miralem Halilović <miralem@gmail.com


var monaliza = {
	//options
	options: {
		useGrayImage: false,
		imageWidth: 640,
		imageHeigth: 480,	
		category: null
	},
	
	//used to reload an uncached image
	imageReloadId: 0,
	
	//get a single image
	getImage: function(){		
		var useGrayImage = this.options.useGrayImage ? 'g/' : '';		
		var url = 'http://lorempixel.com/' + useGrayImage + this.options.imageWidth + '/' + this.options.imageHeigth + '?r=' + (new Date().getTime()) + '-' + this.imageReloadId;
		this.imageReloadId += 1;
		
		return url;
	},
	
	//get multiple images
	getMultiple: function(size){	
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
