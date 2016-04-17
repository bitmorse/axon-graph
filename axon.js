(function(){

	//call the UI page "home"

	App.load('home');

	var data_x, data_y;

TESTER = document.getElementById('mygraph');
	Plotly.plot( TESTER, [{
	x: data_x,
	y: data_y }], {
	margin: { t: 0 } } );

	//poll gyro
	setInterval(function(){

		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Gyroscope", function( data ) {

			data_x.push(data_x.length);
			data_y.push(3);

		});


	}, 1000);


})();
