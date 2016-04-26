simpleCart ({
			checkout: {
				type: "PayPal" ,
				email: "payment@eatcomida.com",
				success: "success.html"
			},
            tax: 0.08,
            currency: "USD",
			taxRate: 0.08,
            cartColumns: [
                { attr: "name" , label: "Name" , },
                { attr: "price" , label: "Price", view: 'currency' },
                { view: "decrement" , label: false },
                { attr: "quantity" , label: "Qty" },
                { view: "increment" , label: false },
                { attr: "total" , label: "SubTotal", view: 'currency' },
                { view: "remove" , text: "Remove" , label: false }
		    ],
		});

		$(document).ready(function () {
		  $(".ddnav").click(function(event) {
		    $(".navbar-collapse").collapse('hide');
		  });
		});

		var request = "img/gps1.json";
		console.log(request);

		$.get(request, function( data ) {
			if (data.status === "OK") {
				console.log("RECEIVED OK!");
			}
		});
