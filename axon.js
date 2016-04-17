(function(){

	//call the UI page "home"

	App.load('home');

			var graphinstance = new Graph( $('#graph') );

			var data = {
			  x: 0.5,
			  dx: 0.2,
			  y: []
			};
			for ( var i = 1, l = 30; i < l; i += 1 ) {
			  data.y.push( Math.sin( i * 0.2 + 0.5 ) );
			}

			graphinstance.newSerie( "serieTest" )
			  .setLabel( "My serie" )
			  .autoAxis()
			  .setData( data )
			  .setMarkers();

			graphinstance.redraw();
			graphinstance.drawSeries();



	//poll gyro
	setInterval(function(){

		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Gyroscope", function( data ) {



		});


	}, 1000);


})();
