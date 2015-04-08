var monaliza = {
	options: {
		isGray: false,
		imageWidth: 640,
		imageHeigth: 480,
	},
	getImage: function(){
		var gray = this.options.isGray ? 'g/' : '';
		return 'http://lorempixel.com/' + gray + this.options.imageWidth + '/' + this.options.imageHeigth
	}
}