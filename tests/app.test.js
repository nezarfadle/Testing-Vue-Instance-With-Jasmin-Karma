import app from '../App.js'

describe('App Vue Instance', function() {
  
  it('should have an initial name as John Doe', function() {
    	expect(app.name).toEqual("John Doe");
  });

  it('user should be able to change the name', function() {
  		app.changeName("Nezar Fadle")
    	expect(app.name).toEqual("Nezar Fadle");
  });

  it('should start with no posts', function() {
    	expect(app.posts.length).toEqual(0);
  });

  it('should be able to load posts', function(done) {
  		app.load().then( () => {
	 		expect(app.posts.length).toBeGreaterThan(1);
	 		done()
  		})
  });

});