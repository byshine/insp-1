module.exports = function(grunt) {

	grunt.initConfig({
	  responsive_images: {
	    options: {
	      sizes: [{
	      	name: 'small',
	      	width: 400,
	      	quality: 80
	      }] 
	    },
	    files: {
	        expand: true,
	        src: ['images/*.{gif,jpg,png}'],
	        cwd: '',
	        dest: 'dist/'      
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};
