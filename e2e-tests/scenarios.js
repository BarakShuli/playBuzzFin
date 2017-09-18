'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index");
  });


  describe('index', function() {

    beforeEach(function() {
      browser.get('index.html#!/index');
    });


    it('should render index when user navigates to /index', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for index/);
    });

  });


});
