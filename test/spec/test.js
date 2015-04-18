/*global describe, it */
'use strict';

(function () {
    describe('Test for monaliza library', function () {
        describe('testing image fetch', function () {
            it('fetch one image', function () {
            	var url = monaliza.getImage();
        		expect(url).toBeDefined();

            });
        });
    });
})();
