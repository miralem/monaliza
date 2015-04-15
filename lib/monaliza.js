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
	}
};