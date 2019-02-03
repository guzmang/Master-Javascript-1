$(document).ready(function() {

	// Slider - (manual: https://bxslider.com/options/)
	if(window.location.href.indexOf("index") > -1) {
		$('.galeria').bxSlider({
			mode: 'fade',			// efecto con el que cambia de una foto a otra
			captions: true,			// pone el atributo title como pie de foto
			slideWidth: 1200
		});
	}

	// Posts
	if(window.location.href.indexOf("index") > -1) {
		var posts = [
			{
				title: "Prueba de titulo 1",	// weekday() o day() nro de dia de la semana
				date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " +
					  moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, mi vitae" + 
						 " scelerisque consectetur, arcu massa volutpat purus, vel dignissim dui odio id enim." +
						 " Nullam vel ipsum sit amet ligula cursus iaculis. Pellentesque habitant morbi tristique" +
						 " senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sollicitudin" +
						 " laoreet. Donec sit amet velit a nulla tristique maximus. Vestibulum tortor erat, gravida" +
						 " id justo id, dignissim ultrices dolor. Donec dignissim laoreet diam, eget viverra metus" +
						 " tristique vel. Nulla ornare, felis cursus molestie aliquam, quam dolor sagittis justo," +
						 " in auctor erat velit sed mi. Morbi at augue mauris. Donec vitae purus velit. Aliquam" +
						 " accumsan lectus ut velit laoreet, quis scelerisque ipsum semper."
			},
			{
				title: "Prueba de titulo 2",
				date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " +
					  moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, mi vitae" + 
						 " scelerisque consectetur, arcu massa volutpat purus, vel dignissim dui odio id enim." +
						 " Nullam vel ipsum sit amet ligula cursus iaculis. Pellentesque habitant morbi tristique" +
						 " senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sollicitudin" +
						 " laoreet. Donec sit amet velit a nulla tristique maximus. Vestibulum tortor erat, gravida" +
						 " id justo id, dignissim ultrices dolor. Donec dignissim laoreet diam, eget viverra metus" +
						 " tristique vel. Nulla ornare, felis cursus molestie aliquam, quam dolor sagittis justo," +
						 " in auctor erat velit sed mi. Morbi at augue mauris. Donec vitae purus velit. Aliquam" +
						 " accumsan lectus ut velit laoreet, quis scelerisque ipsum semper."
			},
			{
				title: "Prueba de titulo 3",
				date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " +
					  moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, mi vitae" + 
						 " scelerisque consectetur, arcu massa volutpat purus, vel dignissim dui odio id enim." +
						 " Nullam vel ipsum sit amet ligula cursus iaculis. Pellentesque habitant morbi tristique" +
						 " senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sollicitudin" +
						 " laoreet. Donec sit amet velit a nulla tristique maximus. Vestibulum tortor erat, gravida" +
						 " id justo id, dignissim ultrices dolor. Donec dignissim laoreet diam, eget viverra metus" +
						 " tristique vel. Nulla ornare, felis cursus molestie aliquam, quam dolor sagittis justo," +
						 " in auctor erat velit sed mi. Morbi at augue mauris. Donec vitae purus velit. Aliquam" +
						 " accumsan lectus ut velit laoreet, quis scelerisque ipsum semper."
			},
			{
				title: "Prueba de titulo 4",
				date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " +
					  moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, mi vitae" + 
						 " scelerisque consectetur, arcu massa volutpat purus, vel dignissim dui odio id enim." +
						 " Nullam vel ipsum sit amet ligula cursus iaculis. Pellentesque habitant morbi tristique" +
						 " senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sollicitudin" +
						 " laoreet. Donec sit amet velit a nulla tristique maximus. Vestibulum tortor erat, gravida" +
						 " id justo id, dignissim ultrices dolor. Donec dignissim laoreet diam, eget viverra metus" +
						 " tristique vel. Nulla ornare, felis cursus molestie aliquam, quam dolor sagittis justo," +
						 " in auctor erat velit sed mi. Morbi at augue mauris. Donec vitae purus velit. Aliquam" +
						 " accumsan lectus ut velit laoreet, quis scelerisque ipsum semper."
			},
			{
				title: "Prueba de titulo 5",
				date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " +
					  moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, mi vitae" + 
						 " scelerisque consectetur, arcu massa volutpat purus, vel dignissim dui odio id enim." +
						 " Nullam vel ipsum sit amet ligula cursus iaculis. Pellentesque habitant morbi tristique" +
						 " senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sollicitudin" +
						 " laoreet. Donec sit amet velit a nulla tristique maximus. Vestibulum tortor erat, gravida" +
						 " id justo id, dignissim ultrices dolor. Donec dignissim laoreet diam, eget viverra metus" +
						 " tristique vel. Nulla ornare, felis cursus molestie aliquam, quam dolor sagittis justo," +
						 " in auctor erat velit sed mi. Morbi at augue mauris. Donec vitae purus velit. Aliquam" +
						 " accumsan lectus ut velit laoreet, quis scelerisque ipsum semper."
			}
		];

		console.log(posts);

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			console.log(post);

			$("#posts").append(post);
		});
	}

	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function() {
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function() {
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function() {
		theme.attr("href", "css/blue.css");
	});

	// Scroll arriba de la web
	$(".subir").click(function(e) {		// solo queremos que se ejecute la funcion sin ir a otra pag
		e.preventDefault();				// para que el link no haga su funcion fundamental que seria redirigir

		$("html, body").animate({		// usamos animate sobre los elementos html y body de la pag
			scrollTop: 0				// va hacia el pixel 0 de la web, lo mas arriba posible
		}, 500);						// velocidad de la animacion

//		return false;
	});

	// Login falso
	$("#login form").submit(function() {
		let form_name = $("#form-name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined") {
		$("#about p").html("<br><strong>Bienvenido, " + form_name + "</strong> ")
					 .append("<a href='#' id='logout'>(Cerrar sesión)</a>");
		$("#login").hide();

		$("#logout").click(function() {
			localStorage.clear();
			location.reload();
		});
	}

	// Acordeon
	if(window.location.href.indexOf("about") > -1) {
		$("#acordeon").accordion();
	}

	// Reloj
	if(window.location.href.indexOf("reloj") > -1) {

		setInterval(function() {
			var reloj = moment().format("hh:mm:ss a");
			$("#reloj").html(reloj);
		}, 1000);

	}

	// Reloj
	if(window.location.href.indexOf("contact") > -1) {

		$("form input[name='date']").datepicker({
			dateFormat: "dd-mm-yy"
		});

		// activar validaciones
		$.validate({
//			form: "#form_contact",	// en que formularios quiero la validacion
			lang: "es",
			errorMessagePosition: "top",
			scrollToTopOnError: true
		});

	}

});