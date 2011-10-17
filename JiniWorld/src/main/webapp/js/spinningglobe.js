	function init(){
			var el = document.getElementById("map");
			var ctx;
			if(!el.getContext) {
				alert("HTML5 is needed for the purposes of the demo! Please view this demo in a recent version of an updated browser (basically take your pick apart from pretty much any popular browser without the words Internet and Explorer in the name)");
			} else {
				ctx = el.getContext("2d");
			}

			var imgs = [{src:'images/earth.png',property: 'fill2'}];
			var loaded = 0;
			globalOptions.fill = "#0C7137"
			for(var i = 0; i < imgs.length; i++) {
				var data = imgs[i];
				var img = document.createElement("img");
				img.onload = function() {
					globalOptions[data.property] = ctx.createPattern(img, 'repeat');
					globalOptions[data.property + "-image"] = img;
					loaded +=1;
					if(loaded == imgs.length) { // we are ready to begin
						var map = new canvasMap(geojson);

						if(globalOptions.projection == projections.globe) {
							globalOptions.angle.x = 360;
							var animation = setInterval(function() {
								globalOptions.angle.x += 1;
								map.render();
								}, 50);
						}
					}
				};
				img.src = data.src;
			}
		}
		init();