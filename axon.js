(function(){

	//call the UI page "home"
	App.load('home');


	var data_x = [];
	var data_y = [];

	//setup graph, using plotly js: https://plot.ly/javascript/plotlyjs-function-reference/
  var graphDiv = document.getElementById('mygraph');
	Plotly.plot( graphDiv, [{
		x: data_x,
		y: data_y }], {
		margin: { t: 0 }
	});

	//poll gyro
	setInterval(function(){

		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Gyroscope", function( data ) {

			data_x.push(data_x.length);
			data_y.push(data.x);
			Plotly.redraw(graphDiv);

		});


	}, 500);


})();
