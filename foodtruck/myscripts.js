simpleCart ({
			checkout: {
				type: "PayPal" ,
				email: "you@yours.com",
				success: "success.html"
			},
            tax: 0.08,
            currency: "USD",
			taxRate: 0.08,
            cartColumns: [
                { attr: "name" , label: "Name" },
                { attr: "price" , label: "Price", view: 'currency' },
                { view: "decrement" , label: false },
                { attr: "quantity" , label: "Qty" },
                { view: "increment" , label: false },
                { attr: "total" , label: "SubTotal", view: 'currency' },
                { view: "remove" , text: "Remove" , label: false }
		    ],
		});
