/** let testData = [
	{
		restaurant_name: "La Mestiza",
		restaurant_phone: "(608) 826-0178",
		restaurant_website: "",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4305597789494354,
		cuisines: ["Lunch Specials", "Mexican"],
		address: {
			city: "Madison",
			state: "WI",
			postal_code: "53719",
			street: "6644 Odana Road",
			formatted: "6644 Odana Road Madison, WI 53719",
		},
		geo: {
			lat: 43.055977,
			lon: -89.494354,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Appetizers",
						description: "",
						menu_items: [
							{
								name: "Guacamole",
								description:
									"Chunky hass avocados combined with jalapeno peppers, tomatoes, onion, salt, lime juice and cilantro.",
								pricing: [
									{
										price: 5.95,
										currency: "USD",
										priceString: "$5.95",
									},
								],
								price: 5.95,
							},
							{
								name: "Quesadillas de Rajas y Queso",
								description:
									"Freshly made corn turnovers filled with mozzarella cheese and roasted poblano peppers. Comes with a scoop of guacamole, sour cream and black beans.",
								pricing: [
									{
										price: 8.79,
										currency: "USD",
										priceString: "$8.79",
									},
								],
								price: 8.79,
							},
							{
								name: "Flautas de Pollo",
								description:
									"Seasoned shredded chicken rolled in crispy corn tortillas topped with queso fresco, sour cream and tomatillo salsa and comes with a scoop of guacamole.",
								pricing: [
									{
										price: 8.99,
										currency: "USD",
										priceString: "$8.99",
									},
								],
								price: 8.99,
							},
							{
								name: "Mexican Platter and Selection of Appetizers",
								description: "Chicken flauta, mexico city quesadilla style, chicken tinga tostada and guacamole.",
								pricing: [
									{
										price: 9.99,
										currency: "USD",
										priceString: "$9.99",
									},
								],
								price: 9.99,
							},
							{
								name: "Queso Fundido con Rajas y Chorizo",
								description: "Melted mozzarella cheese with roasted poblano strips and Mexican sausage.",
								pricing: [
									{
										price: 9.29,
										currency: "USD",
										priceString: "$9.29",
									},
								],
								price: 9.29,
							},
							{
								name: "Tostadas de Tinga Poblana",
								description:
									"Crispy corn tortillas topped with refried beans, chicken tinga, sour cream, cheese and black beans.",
								pricing: [
									{
										price: 7.99,
										currency: "USD",
										priceString: "$7.99",
									},
								],
								price: 7.99,
							},
							{
								name: "Combo Trio de Tacos",
								description:
									"Pastor- marinated pork, pollo-shredded chicken simmered in a chipotle tomato sauce. Steak seasoned with our house recipe.",
								pricing: [
									{
										price: 8.99,
										currency: "USD",
										priceString: "$8.99",
									},
								],
								price: 8.99,
							},
							{
								name: "Quesadila Nortena",
								description:
									"Flour tortilla filled with cheese and your choice of chicken or steak. Served with rice and pinto beans.",
								pricing: [
									{
										price: 8.29,
										currency: "USD",
										priceString: "$8.29",
									},
								],
								price: 8.29,
							},
							{
								name: "Fish Trio deTacos",
								description: "Tilapia fish tacos topped with pico de gallo and slice avocado.",
								pricing: [
									{
										price: 10.99,
										currency: "USD",
										priceString: "$10.99",
									},
								],
								price: 10.99,
							},
							{
								name: "Shrimp Ceviche Tostadas",
								description:
									"Cooked shrimp marinated with fresh lime juice, mixed with pico de gallo and topped with sliced avocado.",
								pricing: [
									{
										price: 9.59,
										currency: "USD",
										priceString: "$9.59",
									},
								],
								price: 9.59,
							},
						],
					},
					{
						section_name: "Entrees",
						description: "",
						menu_items: [
							{
								name: "Bistec con Salsa Guajillo Entree",
								description:
									"Strip steak beef simmered in a red guajillo sauce topped with chopped onion and cilantro, served with rice and refried pinto beans.",
								pricing: [
									{
										price: 15.59,
										currency: "USD",
										priceString: "$15.59",
									},
								],
								price: 15.59,
							},
							{
								name: "Puntas de Filete en Salsa de Tomatillo Entree",
								description:
									"Steak tips with sauteed vegetables simmered in green tomatillo sauce garnished with cilantro, served with rice and refried pinto beans.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Cochinita Pibil Entree",
								description:
									"Slow cooked marinated pork with achiote and citrus juices. Wrapped in banana leaves topped with pickled red onions. Served with rice and refried pinto beans.",
								pricing: [
									{
										price: 14.95,
										currency: "USD",
										priceString: "$14.95",
									},
								],
								price: 14.95,
							},
							{
								name: "Borrego en Chile Pasilla Entree",
								description:
									"Lamb shoulder simmered in a dark pungent pasilla sauce. Served with rice and refried pinto beans.",
								pricing: [
									{
										price: 14.99,
										currency: "USD",
										priceString: "$14.99",
									},
								],
								price: 14.99,
							},
							{
								name: "Carne Asada Entree",
								description:
									"Grilled strip steak, served with guacamole, grilled green onions, pinto beans and nopal cactus.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Camarones Enchilados Entree",
								description: "Jumbo shrimp sauteed in fiery hot chile de arbol sauce. Served with rice.",
								pricing: [
									{
										price: 15.59,
										currency: "USD",
										priceString: "$15.59",
									},
								],
								price: 15.59,
							},
							{
								name: "Salmon Entree",
								description:
									"Chipotle-honey glazed salmon, grilled and served with a fresh pineapple salsa, avocado and Mexican rice.",
								pricing: [
									{
										price: 14.99,
										currency: "USD",
										priceString: "$14.99",
									},
								],
								price: 14.99,
							},
						],
					},
					{
						section_name: "Enchiladas",
						description: "",
						menu_items: [],
					},
					{
						section_name: "Side Dishes",
						description: "",
						menu_items: [
							{
								name: "Refried Plantains",
								description: "",
								pricing: [
									{
										price: 2.99,
										currency: "USD",
										priceString: "$2.99",
									},
								],
								price: 2.99,
							},
							{
								name: "Verduras en Vinagre",
								description: "Pickled vegetables cauliflower, carrots, jalapeno, chayote and onions.",
								pricing: [
									{
										price: 2.99,
										currency: "USD",
										priceString: "$2.99",
									},
								],
								price: 2.99,
							},
							{
								name: "Refried Plantains",
								description: "",
								pricing: [
									{
										price: 3.29,
										currency: "USD",
										priceString: "$3.29",
									},
								],
								price: 3.29,
							},
							{
								name: "Cactus Nopal",
								description: "",
								pricing: [
									{
										price: 3.29,
										currency: "USD",
										priceString: "$3.29",
									},
								],
								price: 3.29,
							},
							{
								name: "Guacamole side",
								description: "",
								pricing: [
									{
										price: 3.29,
										currency: "USD",
										priceString: "$3.29",
									},
								],
								price: 3.29,
							},
							{
								name: "Cebollitas A la Parrilla",
								description: "",
								pricing: [
									{
										price: 2.29,
										currency: "USD",
										priceString: "$2.29",
									},
								],
								price: 2.29,
							},
							{
								name: "Jalapenos Toreados",
								description: "",
								pricing: [
									{
										price: 1.59,
										currency: "USD",
										priceString: "$1.59",
									},
								],
								price: 1.59,
							},
							{
								name: "Saute Vegetables",
								description: "",
								pricing: [
									{
										price: 3.29,
										currency: "USD",
										priceString: "$3.29",
									},
								],
								price: 3.29,
							},
							{
								name: "Side of Chips",
								description: "",
								pricing: [
									{
										price: 1.29,
										currency: "USD",
										priceString: "$1.29",
									},
								],
								price: 1.29,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-29T05:31:38.965Z",
	},
	{
		restaurant_name: "Qdoba Mexican Eats",
		restaurant_phone: "(608) 827-7720",
		restaurant_website: "http://www.qdoba.com",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4306143289496552,
		cuisines: ["Mexican"],
		address: {
			city: "Madison",
			state: "WI",
			postal_code: "53705",
			street: "6650 Mineral Point Rd",
			formatted: "6650 Mineral Point Rd Madison, WI 53705",
		},
		geo: {
			lat: 43.061432,
			lon: -89.496552,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "New Family Meals",
						description: "",
						menu_items: [
							{
								name: "Grilled Chicken Family Meal",
								description:
									"Grilled adobo chicken, cilantro lime rice, black beans, our signature 3-Cheese queso, pico de gallo, salsa verde or salsa roja, shredded cheese, tortillas and a large bag of chips. Serves 4-5. 30 minute prep time required.",
								pricing: [
									{
										price: 38.95,
										currency: "USD",
										priceString: "$38.95",
									},
								],
								price: 38.95,
							},
							{
								name: "Grilled Steak Family Meal",
								description:
									"Grilled steak, cilantro lime rice, black beans, our signature 3-Cheese queso, pico de gallo, salsa verde or salsa roja, shredded cheese, tortillas and a large bag of chips. Serves 4-5. 30 minute prep time required.",
								pricing: [
									{
										price: 43.95,
										currency: "USD",
										priceString: "$43.95",
									},
								],
								price: 43.95,
							},
						],
					},
					{
						section_name: "New Burrito Meal Deals",
						description: "",
						menu_items: [
							{
								name: "Chicken Burrito Meal Deal",
								description:
									"Grilled Chicken Burrito with cheese, pico de gallo, black beans and cilantro lime rice. Served with handmade tortilla chips, choice of salsa and dessert.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
							{
								name: "Steak Burrito Meal Deal",
								description:
									"Grilled Steak Burrito with cheese, pico de gallo, black beans, and cilantro lime rice. Served with handmade tortilla chips, choice of salsa and dessert.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
							{
								name: "Fajita Veggie Burrito Meal Deal",
								description:
									"A burrito made with sauteed bell peppers and onions, cheese, hand-smashed guac, pico de gallo, black beans and cilantro lime rice. Served with handmade tortilla chips, choice of salsa and dessert.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
							{
								name: "Impossible Burrito Meal Deal",
								description:
									"A burrito with IMPOSSIBLE? plant-based protein, cheese, pico de gallo, black beans and cilantro lime rice. Served with handmade tortilla chips, choice of salsa and dessert.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
						],
					},
					{
						section_name: "Most Popular",
						description: "",
						menu_items: [
							{
								name: "Adobo Chicken Burrito Bowl",
								description:
									"Freshly grilled adobo chicken with your choice of freshly prepared toppings, hand-smashed guacamole, 3-cheese queso, and salsas.",
								pricing: [
									{
										price: 8.97,
										currency: "USD",
										priceString: "$8.97",
									},
								],
								price: 8.97,
							},
							{
								name: "Pork and Queso Burrito (ARCHIVED)",
								description:
									"Pulled pork with your choice of freshly prepared toppings, hand-smashed guacamole, 3-cheese queso, and salsas.",
								pricing: [
									{
										price: 9.63,
										currency: "USD",
										priceString: "$9.63",
									},
								],
								price: 9.63,
							},
							{
								name: "Chips & Queso",
								description: "Warm 3-cheese queso with fresh made tortilla chips.",
								pricing: [
									{
										price: 4.73,
										currency: "USD",
										priceString: "$4.73",
									},
								],
								price: 4.73,
							},
							{
								name: "Impossible Bowl",
								description:
									"Made from plants tastes like beef - is prepared with a savory blend of smoky spices and onions.",
								pricing: [
									{
										price: 9.95,
										currency: "USD",
										priceString: "$9.95",
									},
								],
								price: 9.95,
							},
						],
					},
					{
						section_name: "Entrees",
						description: "",
						menu_items: [
							{
								name: "Burrito Bowl",
								description:
									"Customize your own burrito bowl with your choice of freshly prepared toppings, hand-smashed guacamole, 3-cheese queso, and salsas.",
								pricing: [
									{
										price: 8.36,
										currency: "USD",
										priceString: "$8.36",
									},
								],
								price: 8.36,
							},
							{
								name: "Burrito",
								description:
									"Customize your own burrito with your choice of freshly prepared toppings, hand-smashed guacamole, 3-cheese queso, and salsas.",
								pricing: [
									{
										price: 8.36,
										currency: "USD",
										priceString: "$8.36",
									},
								],
								price: 8.36,
							},
							{
								name: "3-Cheese Nachos",
								description:
									"Tortilla chips with 3-cheese queso and your choice of freshly prepared toppings, hand-smashed guacamole, and salsas. Chips will be served on the side to keep them crispy.",
								pricing: [
									{
										price: 8.36,
										currency: "USD",
										priceString: "$8.36",
									},
								],
								price: 8.36,
							},
							{
								name: "Grilled Quesadilla",
								description:
									"A lightly grilled flour tortilla filled with your choice of freshly prepared toppings, melted shredded cheese and fresh pico de gallo. Paired with guacamole and sour cream on the side.",
								pricing: [
									{
										price: 8.36,
										currency: "USD",
										priceString: "$8.36",
									},
								],
								price: 8.36,
							},
							{
								name: "Mini Bowl",
								description: "",
								pricing: [
									{
										price: 6.55,
										currency: "USD",
										priceString: "$6.55",
									},
								],
								price: 6.55,
							},
							{
								name: "Crispy Tortilla Bowl",
								description:
									"Lettuce topped with your choice of protein, salsas, toppings, and a signature dressing served in a bowl.",
								pricing: [
									{
										price: 9.1,
										currency: "USD",
										priceString: "$9.10",
									},
									{
										price: 9.75,
										currency: "USD",
										priceString: "$9.75",
									},
									{
										price: 9.1,
										currency: "USD",
										priceString: "$9.10",
									},
									{
										price: 9.78,
										currency: "USD",
										priceString: "$9.78",
									},
									{
										price: 10.95,
										currency: "USD",
										priceString: "$10.95",
									},
									{
										price: 8.4,
										currency: "USD",
										priceString: "$8.40",
									},
								],
								price: 9.1,
							},
						],
					},
					{
						section_name: "Chips and Dips",
						description: "",
						menu_items: [
							{
								name: "Chips & Queso",
								description: "Warm 3-cheese queso with fresh made tortilla chips.",
								pricing: [
									{
										price: 4.73,
										currency: "USD",
										priceString: "$4.73",
									},
								],
								price: 4.73,
							},
							{
								name: "Chips & Guacamole",
								description: "Hand smashed guacamole with our fresh made tortilla chips.",
								pricing: [
									{
										price: 3.96,
										currency: "USD",
										priceString: "$3.96",
									},
								],
								price: 3.96,
							},
							{
								name: "Salsa & Chips",
								description: "Your choice of salsa with fresh made tortilla chips.",
								pricing: [
									{
										price: 2.53,
										currency: "USD",
										priceString: "$2.53",
									},
								],
								price: 2.53,
							},
						],
					},
					{
						section_name: "Desserts",
						description: "",
						menu_items: [
							{
								name: "Chocolate Chip Cookie",
								description: "Baked in house daily and packed with chocolate chips.",
								pricing: [
									{
										price: 1.65,
										currency: "USD",
										priceString: "$1.65",
									},
								],
								price: 1.65,
							},
							{
								name: "Double Chocolate Brownie",
								description: "Baked chocolate brownie to complete your meal.",
								pricing: [
									{
										price: 1.93,
										currency: "USD",
										priceString: "$1.93",
									},
								],
								price: 1.93,
							},
						],
					},
					{
						section_name: "Beverages",
						description: "",
						menu_items: [
							{
								name: "Bottled Mexican Coke",
								description:
									"12 oz. Imported from Mexico, all-natural ingredients and made with real cane sugar. Note: bottle opener needed.",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "Bottled Mexican Sprite",
								description: "12 oz. Imported from Mexico and caffeine-free. Note: bottle opener needed.",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "Bottled Fanta Orange",
								description: "12 oz. Imported from Mexico and caffeine-free. Note: bottle opener needed.",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "20 oz. Bottle Coca Cola",
								description: "",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "20 oz. Bottle Diet Coke",
								description: "",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "16.9 oz. Dasani Bottled Water",
								description: "Great tasting purified water, enhanced with minerals for a pure, fresh taste.",
								pricing: [
									{
										price: 2.53,
										currency: "USD",
										priceString: "$2.53",
									},
								],
								price: 2.53,
							},
							{
								name: "Bottled Water",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Honest Tea Organic",
								description:
									"Refreshingly Honest organic teas that are Just a Tad Sweet. Choice of Peach Tea, Honey Green Tea or Half Tea/Half Lemonade.",
								pricing: [
									{
										price: 2.4,
										currency: "USD",
										priceString: "$2.40",
									},
								],
								price: 2.4,
							},
						],
					},
					{
						section_name: "Kid's Meal",
						description: "",
						menu_items: [
							{
								name: "Kid's Meal",
								description:
									"Kid's sized entree filled with your choice of protein, toppings and salsa. Includes your choice of one side and a kid beverage.",
								pricing: [
									{
										price: 5.5,
										currency: "USD",
										priceString: "$5.50",
									},
								],
								price: 5.5,
							},
						],
					},
					{
						section_name: "Allergen Notice",
						description: "",
						menu_items: [
							{
								name: "ATTENTION VALUED GUESTS: Although the staff at QDOBA takes precautions to safely handle ingredients and foods that may contain WHEAT, SOY, EGGS, MILK, TREE NUTS, PEANUTS, FISH, and SHELLFISH, cross-contact may occur.",
								description: "Please contact us if you have any questions.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-29T05:31:41.584Z",
	},
	{
		restaurant_name: "Taco Bell",
		restaurant_phone: "(608) 829-2797",
		restaurant_website: "http://www.tacobell.com",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4305659989503394,
		cuisines: ["Mexican"],
		address: {
			city: "MADISON",
			state: "WI",
			postal_code: "53719",
			street: "104 W Towne Mall",
			formatted: "104 W Towne Mall MADISON, WI 53719",
		},
		geo: {
			lat: 43.056599,
			lon: -89.503394,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Salads",
						description: "",
						menu_items: [
							{
								name: "Chicken Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with marinated all-white-meat chicken, and loaded with chunky beans, real cheddar cheese, seasoned rice, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips, reduced fat sour cream and served with citrus salsa on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with seasoned ground beef, seasoned rice, real cheddar cheese, hearty beans, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips and reduced fat sour cream. citrus salsa served on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Steak Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with carne asada steak, and loaded with chunky beans, real cheddar cheese, seasoned rice, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips, reduced fat sour cream and served with citrus salsa on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Tacos",
						description: "",
						menu_items: [
							{
								name: "Crispy Potato Soft Taco",
								description:
									"a warm, soft flour tortilla filled with crispy potato bites, pepper jack sauce, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Crunchy Taco",
								description:
									"a crunchy, corn taco, shell filled with seasoned ground beef, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Grilled Steak Soft Taco",
								description:
									"a warm, soft flour tortilla filled with authentic carne asada steak, crisp shredded lettuce, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Soft Taco",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Chicken Soft Taco",
								description:
									"a warm, soft flour tortilla filled with marinated and grilled all-white-meat chicken, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchy Taco",
								description:
									"a crunchy, corn taco shell filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Soft Taco Supreme",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, real cheddar cheese, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchy Taco Supreme",
								description:
									"a crunchy, corn taco shell filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, real cheddar cheese, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Soft Taco",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Volcano Taco",
								description:
									"a crunchy red corn tortilla shell, filled with seasoned beef, crisp shredded lettuce, real cheddar cheese and topped off with cheesy molten hot lava sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Double Decker Taco",
								description:
									"a warm, soft flour tortilla spread with hearty beans and wrapped around a crunchy, corn taco shell filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Double Decker Taco Supreme",
								description:
									"a warm, soft flour tortilla spread with hearty beans and wrapped around a crunchy corn taco shell filled with seasoned ground beef, real cheddar cheese, crisp shredded lettuce, diced ripe tomatoes and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Steak Soft Taco",
								description:
									"a warm, soft flour tortilla filled with authentic carne asada steak, real cheddar cheese, crisp shredded lettuce, diced ripe tomatoes, and avocado ranch sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Soft Taco",
								description:
									"a warm, soft flour tortilla filled with marinated all-white-meat chicken, topped with crisp shredded lettuce and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Burrito",
						description: "",
						menu_items: [
							{
								name: "Burrito Supreme",
								description:
									"a warm, soft flour tortilla wrapped around seasoned beef, hearty beans, tangy red sauce, crisp shredded lettuce, real cheddar cheese, diced onions, diced ripe tomatoes, and reduced-fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Bean Burrito",
								description:
									"a warm, soft flour tortilla wrapped around hearty beans, tangy red sauce, diced onions, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Burrito Supreme Chicken",
								description:
									"a warm, soft flour, tortilla wrapped around grilled, marinated all-white-meat chicken, hearty beans, tangy red sauce, crisp shredded lettuce, diced onions, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Burrito Supreme Steak",
								description:
									"a warm, soft flour tortilla wrapped around authentic carne asada steak, hearty beans, tangy red sauce, crisp shredded lettuce, diced onions, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Volcano Burrito",
								description:
									"a warm, soft flour tortilla that's packed with a double portion of seasoned ground beef, seasoned rice, crunchy red tortilla strips, real cheddar cheese, cool reduced-fat sour cream and cheesy, molten hot lava sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "1/2 Lb Combo Burrito",
								description:
									"a warm, soft flour tortilla loaded with a double portion of seasoned ground beef filled with hearty beans, onions, real cheddar cheese, and tangy red sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "1/2 Lb. Cheesy Potato Burrito",
								description:
									"a warm, soft flour tortilla loaded with a double portion of seasoned ground beef and filled with crispy potato bites, warm nacho cheese sauce, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Bean Burrito",
								description:
									"a warm, soft flour tortilla wrapped around hearty beans, real cheddar cheese, tangy red sauce and diced onions.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "New XXL Grilled Stuft Burrito Beef",
								description:
									"the new xxl, grilled stuff burrito is our biggest burrito yet, stuft full of our seasoned beef, a three cheese blend, flavorful seasoned rice, hearty beans, reduced-fat sour cream, chunky guacamole avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Grilled Stuft Burrito Chicken",
								description:
									"the new xxl, grilled stuft burrito is our biggest burrito yet, stuft full of all white-meat-chicken, a three cheese blend, hearty beans, reduced-fat sour cream, chunky guacamole, avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Grilled Stuft Burrito Steak",
								description:
									"the new xxl grilled stuft burrito is our biggest burrito yet, stuft full of grilled, marinated steak, a three cheese blend, flavorful seasoned rice, hearty beans, reduced-fat sour cream, chunky guacamole, avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Gorditas",
						description: "",
						menu_items: [
							{
								name: "Gordita Baja",
								description:
									"warm, pillowy flatbread filled with seasoned ground beef, creamy pepper jack sauce, crisp shredded lettuce, a three cheese and blend and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Gordita Supreme",
								description:
									"warm, pillow flatbread filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, a three cheese blend and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Gordita Nacho Cheese",
								description:
									"warm, pillowy flatbread filled with seasoned ground beef, warm nacho cheese sauce, crisp shredded lettuce, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Nachos",
						description: "",
						menu_items: [
							{
								name: "Volcano Nachos",
								description:
									"crunchy, freshly prepared tortilla chips covered with hearty beans, seasoned ground beef, warm nacho cheese sauce, red tortilla strips, cheesy molten hot lava sauce, jalapenos and topped with reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos Bellgrande",
								description:
									"a large platter of crisp, freshly prepared tortilla chips covered with hearty beans, seasoned ground beef, warm nacho cheese sauce, diced ripe tomatoes, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos Supreme",
								description:
									"a large platter of crisp, freshly prepared daily tortilla chips covered with hearty beans, seasoned beef, warm nacho cheese sauce, diced ripe tomatoes, and reduced-fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cheesy Nachos",
								description: "crisp, freshly prepared tortilla chips covered in warm nacho cheese sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Chalupas",
						description: "",
						menu_items: [
							{
								name: "XXL Chalupa - Beef",
								description:
									"a double portion of premium seasoned beef, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Chalupa - Chicken",
								description:
									"a double* portion of 100% marinated all-white-meat chicken, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell. also available with 100% usda select marinated, grilled steak or premium seasoned beef.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Chalupa - Steak",
								description:
									"a double portion of 100% usda select marinated, grilled steak, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell. also available with 100% marinated all-white-meat chicken or premium seasoned beef.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "New Bacon Ranch Chicken Flatbread Sandwich",
								description:
									"a warm, soft flatbread layered with 100% marinated all-white-meat chicken, a three cheese blend and topped with bacon ranch sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Original Chicken Flatbread Sandwich",
								description:
									"a warm, soft flatbread layered with 100% marinated all-white-meat chicken, a three cheese blend and topped with creamy chipotle sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Steak Quesadilla",
								description:
									"authentic carne asada steak combined with a three cheese blend and a creamy jalapeno sauce all folded in a freshly toasted tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Quesadilla",
								description:
									"grilled and marinated all-white-meat chicken combined with a three cheese blend and a creamy jalapeno sauce all folded in a freshly toasted tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Meximelt",
								description:
									"a warm, soft flour tortilla wrapped around seasoned ground beef, a three cheese blend and fiesta salsa, then melted to perfection.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mexican Pizza",
								description:
									"two crisp pizza shells filled with seasoned ground beef, hearty beans and then topped with pizza sauce, a three cheese blend melted to perfection, and topped with diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cheese Roll-Up",
								description: "a flour tortilla rolled up with a three cheese and blend melted to perfection.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Chicken Taquitos",
								description:
									"a warm, soft flour tortilla wrapped around grilled and marinated all-white-meat chicken and real cheddar cheese, then rolled up tightly and grilled to go. it comes with your choice of three available dips reduced fat sour cream, salsa or guacamole.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchwrap Supreme",
								description:
									"a warm, soft, flour tortilla filled with seasoned beef, warm nacho cheese sauce, a crunchy tostada shell, reduced-fat sour cream, lettuce and tomatoes and then wrapped up and grilled for maximum portability.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Steak Taquitos",
								description:
									"a warm, flour tortilla wrapped around authentic carne asada steak and real cheddar cheese, then rolled up tightly and grilled to go. it comes with your choice of three available dips reduced fat sour cream, salsa, or guacamole.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Enchirito",
								description:
									"a warm, soft flour tortilla wrapped around seasoned ground beef, hearty beans, diced onions, real cheddar cheese, and tangy red sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Featured",
						description: "",
						menu_items: [
							{
								name: "Chicken Flatbread Sandwich Big Box Meal",
								description:
									"a chicken flatbread sandwich (original or new bacon ranch), burrito supreme, crunchy taco and a medium fountain drink.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Taco 12 Pack",
								description:
									"a chicken flatbread sandwich (original or new bacon ranch), burrito supreme, crunchy taco and a medium fountain drink.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Sides",
						description: "",
						menu_items: [
							{
								name: "Mexican Rice",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Fiesta Potatoes",
								description: "golden potatoes topped with warm nacho cheese sauce, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Pintos N Cheese",
								description: "hearty beans, tangy red sauce, and a three cheese blend.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos",
								description: "crispy, freshly prepared tortilla chips served with warm nacho cheese sauce on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Caramel Apple Empanada",
								description: "a crispy golden pastry pocket filled with chunks of warm apples in creamy caramel sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cinnamon Twists",
								description: "crispy, puffed corn twists, sprinkled with cinnamon and sugar.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Beverages",
						description: "",
						menu_items: [
							{
								name: "Diet Pepsi",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Pepsi",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mountain Dew Baja Blast",
								description:
									"mountain dew baja blast is only available at taco bell because it was made specialty to go with our great tasting food.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mountain Dew",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Sierra Mist",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tropicana Fruit Punch",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cherry Creme Frutista Freeze",
								description:
									"a refreshing, frozen blend of bold cherry flavor and smooth vanilla flavor, swirled together to make one sweet treat. available in two thirst-quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Strawberry Frutista Freeze",
								description:
									"a refreshing, frozen blend of bold cherry flavor and smooth vanilla flavor, swirled together to make one sweet treat, available in two thirst-quenching sizes 16 oz, 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mango Strawberry Frutista Freeze",
								description:
									"a smooth, frozen mango-flavored drink topped with real strawberries. now available in two thirst-quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Classic Limeade Sparkler",
								description:
									"a refreshing mix of cool lemon-lime soda and real lime juice poured over ice and garnished with a real lime wedge, available in two thirst quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cherry Limeade Sparkler",
								description:
									"a refreshing mix of cool lemon-lime soda, real lime juice and natural cherry flavor poured lime wedge, available in two thirst quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-24T17:51:55.540Z",
	},
	{
		restaurant_name: "La Bamba Burritos",
		restaurant_phone: "(608) 442-7293",
		restaurant_website: "",
		hours: "",
		price_range: "$",
		price_range_num: 1,
		restaurant_id: 4304934389503914,
		cuisines: ["Mexican"],
		address: {
			city: "Madison",
			state: "WI",
			postal_code: "53719",
			street: "710 S Gammon Rd",
			formatted: "710 S Gammon Rd Madison, WI 53719",
		},
		geo: {
			lat: 43.049343,
			lon: -89.503914,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Main Menu",
						description: "",
						menu_items: [
							{
								name: "Carne Asada",
								description:
									"Mexican steak. Served with tortillas, beans, rice, avocado, lettuce, tomatoes, onion and La Bamba hot sauce.",
								pricing: [
									{
										price: 11.37,
										currency: "USD",
										priceString: "$11.37",
									},
								],
								price: 11.37,
							},
							{
								name: "Milanesa",
								description:
									"Breaded steak. Served with tortillas, beans, rice, avocado, lettuce, tomatoes, onion and La Bamba hot sauce.",
								pricing: [
									{
										price: 11.37,
										currency: "USD",
										priceString: "$11.37",
									},
								],
								price: 11.37,
							},
						],
					},
					{
						section_name: "Tortas",
						description:
							"Delicious Mexican sandwiches. All La Bamba tortas served with your choice of meat, lettuce, tomatoes, onion, cheese, sour cream and La Bamba hot sauce.",
						menu_items: [
							{
								name: "Tortas",
								description: "",
								pricing: [
									{
										price: 8.53,
										currency: "USD",
										priceString: "$8.53",
									},
								],
								price: 8.53,
							},
						],
					},
					{
						section_name: "Nachos",
						description: "",
						menu_items: [
							{
								name: "Chips and Salsa Nacho",
								description: "Homemade chips and La Bamba salsa.",
								pricing: [
									{
										price: 4.03,
										currency: "USD",
										priceString: "$4.03",
									},
								],
								price: 4.03,
							},
							{
								name: "Regular Nachos",
								description: "Includes cheese, beans, sour cream and La Bamba salsa.",
								pricing: [
									{
										price: 7.49,
										currency: "USD",
										priceString: "$7.49",
									},
								],
								price: 7.49,
							},
							{
								name: "Vegetarian Nachos",
								description: "Includes cheese, beans, tomatoes, lettuce, onions, sour cream and La Bamba salsa.",
								pricing: [
									{
										price: 8.25,
										currency: "USD",
										priceString: "$8.25",
									},
								],
								price: 8.25,
							},
							{
								name: "Super Nachos",
								description:
									"Includes choice of meat, cheese, beans, lettuce, tomatoes, onions, sour cream and La Bamba salsa.",
								pricing: [
									{
										price: 10.42,
										currency: "USD",
										priceString: "$10.42",
									},
								],
								price: 10.42,
							},
							{
								name: "Chips and Cheese Nacho",
								description: "",
								pricing: [
									{
										price: 4.97,
										currency: "USD",
										priceString: "$4.97",
									},
								],
								price: 4.97,
							},
						],
					},
					{
						section_name: "Tacos",
						description:
							"A traditional soft shell favorite. all La Bamba tacos served with your choice of meat, lettuce, tomatoes, onion and La Bamba hot salsa.",
						menu_items: [
							{
								name: "Tacos",
								description: "",
								pricing: [
									{
										price: 2.84,
										currency: "USD",
										priceString: "$2.84",
									},
								],
								price: 2.84,
							},
							{
								name: "Regular Taco",
								description:
									"Traditional soft shell favorite. Served with lettuce, tomatoe and onion. Ground beef only.",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
						],
					},
					{
						section_name: "Burritos",
						description:
							"Our famous La Bamba burritos are served with your choice of meat, beans, lettuce, tomatoes, onion, cheese and delicious La Bamba hot sauce.",
						menu_items: [
							{
								name: "Mini Burrito",
								description: "",
								pricing: [
									{
										price: 7.58,
										currency: "USD",
										priceString: "$7.58",
									},
								],
								price: 7.58,
							},
							{
								name: "Regular Burrito",
								description: "",
								pricing: [
									{
										price: 8.53,
										currency: "USD",
										priceString: "$8.53",
									},
								],
								price: 8.53,
							},
							{
								name: "Supper Burrito",
								description: "",
								pricing: [
									{
										price: 9.48,
										currency: "USD",
										priceString: "$9.48",
									},
								],
								price: 9.48,
							},
						],
					},
					{
						section_name: "Quesadillas",
						description: "Absolutely delicious.",
						menu_items: [
							{
								name: "Large Meat Quesadilla",
								description: "",
								pricing: [
									{
										price: 9.19,
										currency: "USD",
										priceString: "$9.19",
									},
								],
								price: 9.19,
							},
							{
								name: "Large Cheese Quesadilla",
								description:
									"Big flour tortilla with melted cheese, beans, lettuce, tomatoes, onions and La Bamba hot sauce.",
								pricing: [
									{
										price: 7.19,
										currency: "USD",
										priceString: "$7.19",
									},
								],
								price: 7.19,
							},
							{
								name: "Small Corn Cheese Quesadilla",
								description:
									"2 corn tortillas with melted cheese, beans, lettuce, tomatoes, onions and La Bamba hot sauce.",
								pricing: [
									{
										price: 2.61,
										currency: "USD",
										priceString: "$2.61",
									},
								],
								price: 2.61,
							},
						],
					},
					{
						section_name: "Fajitas",
						description: "Served with beans, rice and tortillas.",
						menu_items: [
							{
								name: "Steak Fajita",
								description: "",
								pricing: [
									{
										price: 10.99,
										currency: "USD",
										priceString: "$10.99",
									},
								],
								price: 10.99,
							},
							{
								name: "Chicken Fajita",
								description: "",
								pricing: [
									{
										price: 10.99,
										currency: "USD",
										priceString: "$10.99",
									},
								],
								price: 10.99,
							},
						],
					},
					{
						section_name: "Weekend Only",
						description: "",
						menu_items: [
							{
								name: "Tripe Soup",
								description: "",
								pricing: [
									{
										price: 9.98,
										currency: "USD",
										priceString: "$9.98",
									},
									{
										price: 14.72,
										currency: "USD",
										priceString: "$14.72",
									},
								],
								price: 9.98,
							},
						],
					},
					{
						section_name: "Vegetarian Items",
						description:
							"Meatless alternatives. Beans are slow cooked to perfection, no oils or lard added. All are served with lettuce, tomatoes, onion and La Bamba hot sauce on the side. Cheese included on burritos.",
						menu_items: [
							{
								name: "Mini Veggie Burrito",
								description: "Bean and rice.",
								pricing: [
									{
										price: 6.16,
										currency: "USD",
										priceString: "$6.16",
									},
								],
								price: 6.16,
							},
							{
								name: "Regular Veggie Burrito",
								description: "",
								pricing: [
									{
										price: 7.58,
										currency: "USD",
										priceString: "$7.58",
									},
								],
								price: 7.58,
							},
							{
								name: "Super Veggie Burrito",
								description: "",
								pricing: [
									{
										price: 8.53,
										currency: "USD",
										priceString: "$8.53",
									},
								],
								price: 8.53,
							},
							{
								name: "Veggie Tortas",
								description: "Includes sour cream.",
								pricing: [
									{
										price: 7.19,
										currency: "USD",
										priceString: "$7.19",
									},
								],
								price: 7.19,
							},
							{
								name: "Veggie Taco",
								description: "",
								pricing: [
									{
										price: 2.84,
										currency: "USD",
										priceString: "$2.84",
									},
								],
								price: 2.84,
							},
						],
					},
					{
						section_name: "Combos",
						description: "",
						menu_items: [
							{
								name: "1. Mini Burrito Combo",
								description: "Includes rice, beans and 22 oz. drink.",
								pricing: [
									{
										price: 10.19,
										currency: "USD",
										priceString: "$10.19",
									},
								],
								price: 10.19,
							},
							{
								name: "2. Cheese Quesadilla Combo",
								description: "Includes rice, beans and 22 oz. drink.",
								pricing: [
									{
										price: 10.19,
										currency: "USD",
										priceString: "$10.19",
									},
								],
								price: 10.19,
							},
							{
								name: "3. Two Tacos and 1 Quesadilla Combo",
								description: "Includes rice, beans and 22 oz. drink.",
								pricing: [
									{
										price: 10.19,
										currency: "USD",
										priceString: "$10.19",
									},
								],
								price: 10.19,
							},
							{
								name: "4. Taco Salad Combo",
								description: "Includes chips, salsa and 22 oz. drink.",
								pricing: [
									{
										price: 10.19,
										currency: "USD",
										priceString: "$10.19",
									},
								],
								price: 10.19,
							},
						],
					},
					{
						section_name: "Sides and Extras",
						description: "",
						menu_items: [
							{
								name: "Hot Tamales",
								description: "",
								pricing: [
									{
										price: 2.6,
										currency: "USD",
										priceString: "$2.60",
									},
								],
								price: 2.6,
							},
							{
								name: "Side of Rice",
								description: "",
								pricing: [
									{
										price: 2.37,
										currency: "USD",
										priceString: "$2.37",
									},
								],
								price: 2.37,
							},
							{
								name: "Side of Beans",
								description: "",
								pricing: [
									{
										price: 2.37,
										currency: "USD",
										priceString: "$2.37",
									},
								],
								price: 2.37,
							},
							{
								name: "Side of Extra Jalapenos",
								description: "",
								pricing: [
									{
										price: 0.95,
										currency: "USD",
										priceString: "$0.95",
									},
								],
								price: 0.95,
							},
							{
								name: "Side of Extra Sour Cream",
								description: "",
								pricing: [
									{
										price: 0.95,
										currency: "USD",
										priceString: "$0.95",
									},
								],
								price: 0.95,
							},
							{
								name: "Side of Extra Melted Cheese",
								description: "",
								pricing: [
									{
										price: 1.43,
										currency: "USD",
										priceString: "$1.43",
									},
								],
								price: 1.43,
							},
							{
								name: "Side of Avocado",
								description: "",
								pricing: [
									{
										price: 1.19,
										currency: "USD",
										priceString: "$1.19",
									},
								],
								price: 1.19,
							},
							{
								name: "Side of Grilled Onions",
								description: "",
								pricing: [
									{
										price: 1.9,
										currency: "USD",
										priceString: "$1.90",
									},
								],
								price: 1.9,
							},
							{
								name: "Extra Cheese Slice",
								description: "",
								pricing: [
									{
										price: 0.33,
										currency: "USD",
										priceString: "$0.33",
									},
								],
								price: 0.33,
							},
							{
								name: "Extra Avocado",
								description: "",
								pricing: [
									{
										price: 1.19,
										currency: "USD",
										priceString: "$1.19",
									},
								],
								price: 1.19,
							},
							{
								name: "Extra Meat",
								description: "",
								pricing: [
									{
										price: 3.33,
										currency: "USD",
										priceString: "$3.33",
									},
								],
								price: 3.33,
							},
						],
					},
					{
						section_name: "Kids",
						description: "Includes rice, beans and a small drink.",
						menu_items: [
							{
								name: "1. Kids Taco",
								description: "Choice of meat.",
								pricing: [
									{
										price: 8.05,
										currency: "USD",
										priceString: "$8.05",
									},
								],
								price: 8.05,
							},
							{
								name: "2. Kids Corn Cheese Kidsadilla",
								description: "",
								pricing: [
									{
										price: 8.05,
										currency: "USD",
										priceString: "$8.05",
									},
								],
								price: 8.05,
							},
							{
								name: "3. Kids Junior Chips and Cheese",
								description: "",
								pricing: [
									{
										price: 8.05,
										currency: "USD",
										priceString: "$8.05",
									},
								],
								price: 8.05,
							},
							{
								name: "4. Kids Mini Bean and Cheese Burrito",
								description: "",
								pricing: [
									{
										price: 8.05,
										currency: "USD",
										priceString: "$8.05",
									},
								],
								price: 8.05,
							},
						],
					},
					{
						section_name: "Drinks",
						description: "",
						menu_items: [
							{
								name: "Small Drink",
								description: "",
								pricing: [
									{
										price: 2.13,
										currency: "USD",
										priceString: "$2.13",
									},
								],
								price: 2.13,
							},
							{
								name: "Medium Drink",
								description: "",
								pricing: [
									{
										price: 2.37,
										currency: "USD",
										priceString: "$2.37",
									},
								],
								price: 2.37,
							},
							{
								name: "Large Drink",
								description: "",
								pricing: [
									{
										price: 2.61,
										currency: "USD",
										priceString: "$2.61",
									},
								],
								price: 2.61,
							},
							{
								name: "Bottled Drink",
								description: "",
								pricing: [
									{
										price: 2.37,
										currency: "USD",
										priceString: "$2.37",
									},
								],
								price: 2.37,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-29T05:31:40.465Z",
	},
	{
		restaurant_name: "Taco Bell",
		restaurant_phone: "(608) 827-6574",
		restaurant_website: "http://www.tacobell.com",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4305997589524361,
		cuisines: ["Mexican"],
		address: {
			city: "Madison",
			state: "WI",
			postal_code: "53719",
			street: "421 Commerce Dr",
			formatted: "421 Commerce Dr Madison, WI 53719",
		},
		geo: {
			lat: 43.059975,
			lon: -89.524361,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Breakfast",
						description: "",
						menu_items: [
							{
								name: "Cheesy Toasted Breakfast Burrito",
								description:
									"Fluffy eggs, nacho cheese sauce, and sausage wrapped up in a flour tortilla and toasted to perfection.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Cheesy Toasted Breakfast Burrito Potato",
								description:
									"Fluffy eggs, nacho cheese, and potato wrapped up in a flour tortilla and toasted to perfection.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Hash Brown Toasted Breakfast Burrito",
								description:
									"A toasted flour tortilla filled with fluffy eggs, three melted cheeses, bacon, and a perfectly flaky hash brown.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Hash Brown Toasted Breakfast Burrito Steak",
								description:
									"A toasted flour tortilla filled with fluffy eggs, three melted cheeses, steak, and a perfectly flaky hash brown.",
								pricing: [
									{
										price: 2.69,
										currency: "USD",
										priceString: "$2.69",
									},
								],
								price: 2.69,
							},
							{
								name: "Grande Toasted Breakfast Burrito",
								description:
									"Starts with sausage, then double the fluffy eggs, melted three-cheese blend, potato bites, and fresh pico de gallo. All wrapped up and toasted until melty.",
								pricing: [
									{
										price: 2.79,
										currency: "USD",
										priceString: "$2.79",
									},
								],
								price: 2.79,
							},
							{
								name: "Grande Toasted Breakfast Burrito Steak",
								description:
									"Starts with steak, then double the fluffy eggs, melted three-cheese blend, potato bites, and fresh pico de gallo. All wrapped up and toasted until melty.",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
							{
								name: "Breakfast Crunchwrap",
								description:
									"A warm flour tortilla layered with a crispy hashbrown, fluffy eggs, bacon, shredded cheddar cheese and creamy jalapeño sauce wrapped in our signature crunchwrap fold and grilled to perfection.",
								pricing: [
									{
										price: 2.99,
										currency: "USD",
										priceString: "$2.99",
									},
								],
								price: 2.99,
							},
							{
								name: "Grande Toasted Breakfast Burrito Combo",
								description: "Includes a Grande Toasted Breakfast Burrito with Sausage, Hash Brown, and a medium Drink",
								pricing: [
									{
										price: 4.99,
										currency: "USD",
										priceString: "$4.99",
									},
								],
								price: 4.99,
							},
							{
								name: "Hash Brown",
								description: "A warm freshly fried potato hashbrown.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Mini Skillet Bowl",
								description:
									"Eggs and fiesta potato bites topped with warm nacho cheese sauce and fresh pico de gallo.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Orange Juice",
								description: "15.2 oz Bottle of Tropicana® Orange Juice.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Premium Hot Coffee",
								description: "Rainforest alliance certified? coffee.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Regular Iced Coffee",
								description: "Rainforest alliance certified? coffee poured over ice.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Breakfast Salsa",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Featured",
						description: "",
						menu_items: [
							{
								name: "Taco & Burrito Cravings Pack",
								description: "Includes 4 Crunchy Tacos and 4 Beefy 5-layer Burritos",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Burrito Cravings Pack",
								description: "Includes 3 Beefy 5-Layer Burritos and 3 Shredded Chicken Burritos.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Nachos Cravings Pack",
								description:
									"Includes 2 Grande Nachos Boxes, with choice of seasoned beef or shredded chicken, and two medium drinks.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "At Home Taco Bar",
								description:
									"All the ingredients your crew needs to make their own custom tacos, nachos, and more. Use every crunchy, cheesy ingredient, and see what your crew can create.",
								pricing: [
									{
										price: 25,
										currency: "USD",
										priceString: "$25.00",
									},
								],
								price: 25,
							},
							{
								name: "Chalupa Cravings Box",
								description:
									"Includes a Chalupa Supreme, Beefy 5-Layer Burrito, Crunchy Taco, Cinnamon Twists, and a Drink.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Pineapple Whip Freeze",
								description: "A tropical pineapple freeze blended with sweet vanilla cream.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Pineapple Freeze",
								description: "A tropical pineapple freeze.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Tacos, Crunchy or Soft Taco Supremes®.",
								pricing: [
									{
										price: 14.49,
										currency: "USD",
										priceString: "$14.49",
									},
								],
								price: 14.49,
							},
							{
								name: "Variety Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Taco, or Nacho Cheese Doritos® Locos Tacos.",
								pricing: [
									{
										price: 16.99,
										currency: "USD",
										priceString: "$16.99",
									},
								],
								price: 16.99,
							},
							{
								name: "Supreme Taco Party Pack",
								description: "Your choice of 12 of the following tacos: Crunchy or Soft Taco Supremes®.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Supreme Variety Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Taco Supremes®, or Nacho Cheese Doritos® Locos Tacos Supremes®",
								pricing: [
									{
										price: 18.49,
										currency: "USD",
										priceString: "$18.49",
									},
								],
								price: 18.49,
							},
							{
								name: "Supreme Soft Taco Party Pack",
								description: "Includes 12 Soft Tacos Supreme®.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Soft Taco Party Pack 12",
								description: "Includes 12 Soft Tacos",
								pricing: [
									{
										price: 14.49,
										currency: "USD",
										priceString: "$14.49",
									},
								],
								price: 14.49,
							},
							{
								name: "Taco and Burrito Party Pack",
								description: "Your choice of 10 of the following: Bean Burritos, Soft or Crunchy Tacos.",
								pricing: [
									{
										price: 12.99,
										currency: "USD",
										priceString: "$12.99",
									},
								],
								price: 12.99,
							},
						],
					},
					{
						section_name: "Combos",
						description: "",
						menu_items: [
							{
								name: "Chalupa Cravings Box",
								description:
									"Includes a Chalupa Supreme, Beefy 5-Layer Burrito, Crunchy Taco, Cinnamon Twists, and a Drink.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "3 Crunchy Tacos Supreme® Combo",
								description: "Served with a large drink and 3 tacos.",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "3 Crunchy Tacos Combo",
								description: "Served with a large drink and 3 beef tacos.",
								pricing: [
									{
										price: 5.69,
										currency: "USD",
										priceString: "$5.69",
									},
								],
								price: 5.69,
							},
							{
								name: "3 Soft Tacos Supreme® Combo",
								description: "Three Soft Taco Supremes served with a large drink",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "3 Soft Tacos Combo",
								description: "Served with a drink and 3 beef tacos.",
								pricing: [
									{
										price: 5.69,
										currency: "USD",
										priceString: "$5.69",
									},
								],
								price: 5.69,
							},
							{
								name: "Burrito Supreme® Combo",
								description: "Served with a large drink, beef burrito supreme and crunchy taco supreme.",
								pricing: [
									{
										price: 6.89,
										currency: "USD",
										priceString: "$6.89",
									},
								],
								price: 6.89,
							},
							{
								name: "Crunchwrap Supreme® Combo",
								description: "Served with a large drink and a regular crunchy taco.",
								pricing: [
									{
										price: 6.79,
										currency: "USD",
										priceString: "$6.79",
									},
								],
								price: 6.79,
							},
							{
								name: "Nachos BellGrande® Combo",
								description: "Served with a large drink and a crunchy taco supreme.",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "2 Chicken Chalupas Supreme Combo",
								description: "Served with a drink, chicken quesadilla, regular crunchy taco.",
								pricing: [
									{
										price: 8.79,
										currency: "USD",
										priceString: "$8.79",
									},
								],
								price: 8.79,
							},
							{
								name: "Chicken Quesadilla Combo",
								description: "Served with large drink, chicken quesadilla, regular crunchy taco.",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "Mexican Pizza Combo",
								description: "Served with a large taco, 2 crunchy taco supreme and a Mexican pizza.",
								pricing: [
									{
										price: 7.29,
										currency: "USD",
										priceString: "$7.29",
									},
								],
								price: 7.29,
							},
						],
					},
					{
						section_name: "Party Packs",
						description: "",
						menu_items: [
							{
								name: "Taco & Burrito Cravings Pack",
								description: "Includes 4 Crunchy Tacos and 4 Beefy 5-layer Burritos",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Burrito Cravings Pack",
								description: "Includes 3 Beefy 5-Layer Burritos and 3 Shredded Chicken Burritos.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Nachos Cravings Pack",
								description:
									"Includes 2 Grande Nachos Boxes, with choice of seasoned beef or shredded chicken, and two medium drinks.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "At Home Taco Bar",
								description:
									"All the ingredients your crew needs to make their own custom tacos, nachos, and more. Use every crunchy, cheesy ingredient, and see what your crew can create.",
								pricing: [
									{
										price: 25,
										currency: "USD",
										priceString: "$25.00",
									},
								],
								price: 25,
							},
							{
								name: "Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Tacos, Crunchy or Soft Taco Supremes®.",
								pricing: [
									{
										price: 14.49,
										currency: "USD",
										priceString: "$14.49",
									},
								],
								price: 14.49,
							},
							{
								name: "Supreme Taco Party Pack",
								description: "Your choice of 12 of the following tacos: Crunchy or Soft Taco Supremes®.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Variety Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Taco, or Nacho Cheese Doritos® Locos Tacos.",
								pricing: [
									{
										price: 16.99,
										currency: "USD",
										priceString: "$16.99",
									},
								],
								price: 16.99,
							},
							{
								name: "Supreme Variety Taco Party Pack",
								description:
									"Your choice of 12 of the following tacos: Crunchy or Soft Taco Supremes®, or Nacho Cheese Doritos® Locos Tacos Supremes®",
								pricing: [
									{
										price: 18.49,
										currency: "USD",
										priceString: "$18.49",
									},
								],
								price: 18.49,
							},
							{
								name: "Supreme Soft Taco Party Pack",
								description: "Includes 12 Soft Tacos Supreme®.",
								pricing: [
									{
										price: 15.99,
										currency: "USD",
										priceString: "$15.99",
									},
								],
								price: 15.99,
							},
							{
								name: "Soft Taco Party Pack 12",
								description: "Includes 12 Soft Tacos",
								pricing: [
									{
										price: 14.49,
										currency: "USD",
										priceString: "$14.49",
									},
								],
								price: 14.49,
							},
							{
								name: "Taco and Burrito Party Pack",
								description: "Your choice of 10 of the following: Bean Burritos, Soft or Crunchy Tacos.",
								pricing: [
									{
										price: 12.99,
										currency: "USD",
										priceString: "$12.99",
									},
								],
								price: 12.99,
							},
						],
					},
					{
						section_name: "Sauce Packets",
						description: "",
						menu_items: [
							{
								name: "Fire Sauce Packet",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Hot Sauce Packet",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mild Sauce Packet",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Diablo Sauce Packet",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Specialties",
						description: "",
						menu_items: [
							{
								name: "Crunchwrap Supreme®",
								description:
									"A flour tortilla layered with seasoned beef, warm nacho cheese sauce, a crispy tostada shell, crispy lettuce, ripe tomatoes and topped with cool sour cream all wrapped in our signature crunchwrap fold and grilled to go.",
								pricing: [
									{
										price: 3.99,
										currency: "USD",
										priceString: "$3.99",
									},
								],
								price: 3.99,
							},
							{
								name: "Chalupa Supreme",
								description:
									"Chewy fried chalupa bread filled with seasoned beef, sour cream, crispy lettuce, three-cheese blend and ripe tomatoes.",
								pricing: [
									{
										price: 3.19,
										currency: "USD",
										priceString: "$3.19",
									},
								],
								price: 3.19,
							},
							{
								name: "Cheesy Gordita Crunch",
								description:
									"A warm flatbread layered with three-cheese blend and warm nacho cheese sauce and wrapped around a crunchy taco filled with seasoned beef, spicy ranch sauce, crispy lettuce and shredded cheddar cheese.",
								pricing: [
									{
										price: 3.79,
										currency: "USD",
										priceString: "$3.79",
									},
								],
								price: 3.79,
							},
							{
								name: "Mexican Pizza",
								description:
									"A fresh fried Mexican pizza shell layered with refried beans and seasoned beef, another Mexican pizza shell and then topped with our Mexican pizza sauce, three-cheese blend and ripe tomatoes.",
								pricing: [
									{
										price: 3.79,
										currency: "USD",
										priceString: "$3.79",
									},
								],
								price: 3.79,
							},
							{
								name: "Cheesy Roll Up",
								description:
									"A warm flour tortilla filled with our 3-cheese blend. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
						],
					},
					{
						section_name: "Tacos",
						description: "",
						menu_items: [
							{
								name: "Soft Taco",
								description:
									"A warm flour tortilla filled with seasoned beef, crispy lettuce and shredded cheddar cheese.",
								pricing: [
									{
										price: 1.39,
										currency: "USD",
										priceString: "$1.39",
									},
								],
								price: 1.39,
							},
							{
								name: "Soft Taco Supreme®",
								description:
									"A warm flour tortilla filled with seasoned beef, cool sour cream, crispy lettuce, shredded cheddar cheese and ripe tomatoes.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Crunchy Taco",
								description:
									"A crunchy taco shell filled with seasoned beef, crispy lettuce and shredded cheddar cheese.",
								pricing: [
									{
										price: 1.39,
										currency: "USD",
										priceString: "$1.39",
									},
								],
								price: 1.39,
							},
							{
								name: "Crunchy Taco Supreme®",
								description:
									"A crunchy taco shell filled with seasoned beef, cool sour cream, crispy lettuce, shredded cheddar cheese and ripe tomatoes.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Cheesy Gordita Crunch",
								description:
									"A warm flatbread layered with three-cheese blend and warm nacho cheese sauce and wrapped around a crunchy taco filled with seasoned beef, spicy ranch sauce, crispy lettuce and shredded cheddar cheese.",
								pricing: [
									{
										price: 3.79,
										currency: "USD",
										priceString: "$3.79",
									},
								],
								price: 3.79,
							},
							{
								name: "Chalupa Supreme",
								description:
									"Chewy fried chalupa bread filled with seasoned beef, sour cream, crispy lettuce, three-cheese blend and ripe tomatoes.",
								pricing: [
									{
										price: 3.19,
										currency: "USD",
										priceString: "$3.19",
									},
								],
								price: 3.19,
							},
							{
								name: "Nacho Cheese Doritos® Locos Tacos",
								description:
									"A crunchy taco shell made from Nacho Cheese Doritos® is filled with seasoned beef, crispy lettuce, and pico de gallo.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Nacho Cheese Doritos® Locos Tacos Supreme®",
								description:
									"A crunchy taco shell made from Nacho Cheese Doritos® is filled with seasoned beef, cool sour cream, crispy lettuce, shredded cheddar cheese and ripe tomatoes.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Grilled Steak Soft Taco",
								description:
									"A warm flour tortilla filled with flavorful grilled steak, avocado ranch sauce, crispy lettuce, shredded cheddar cheese and ripe tomatoes.",
								pricing: [
									{
										price: 2.69,
										currency: "USD",
										priceString: "$2.69",
									},
								],
								price: 2.69,
							},
							{
								name: "Chicken Soft Taco",
								description:
									"A warm flour tortilla filled with flavorful shredded chicken, crispy lettuce and shredded cheddar cheese.",
								pricing: [
									{
										price: 2.39,
										currency: "USD",
										priceString: "$2.39",
									},
								],
								price: 2.39,
							},
						],
					},
					{
						section_name: "Burritos",
						description: "",
						menu_items: [
							{
								name: "Quesarito",
								description:
									"A melty cheese quesadilla, with shredded cheddar cheese and warm nacho cheese sauce is opened and wrapped around a burrito filled with seasoned beef, seasoned rice, cool sour cream and creamy chipotle sauce.",
								pricing: [
									{
										price: 3.29,
										currency: "USD",
										priceString: "$3.29",
									},
								],
								price: 3.29,
							},
							{
								name: "Beefy Fritos® Burrito",
								description:
									"A warm flour tortilla filled with seasoned beef, crispy red strips and nacho cheese sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Bean Burrito",
								description:
									"Warm flour tortilla filled with refried beans, shredded cheddar cheese, flavorful red sauce and diced onions. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 1.39,
										currency: "USD",
										priceString: "$1.39",
									},
								],
								price: 1.39,
							},
							{
								name: "Beefy 5-Layer Burrito",
								description:
									"A warm tortilla is covered in a layer of warm nacho cheese and topped with seasoned beef, refried beans, cool sour cream and shredded cheddar cheese. Then it's wrapped creating a layer of nacho cheese all around the outside of the burrito.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Cheesy Bean and Rice Burrito",
								description:
									"A warm flour tortilla filled with refried beans, seasoned rice, nacho cheese sauce and creamy jalapeño sauce. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Shredded Chicken Burrito",
								description:
									"A warm flour tortilla loaded with shredded chicken, seasoned rice, Avocado Ranch sauce, and cheddar cheese.",
								pricing: [
									{
										price: 2.89,
										currency: "USD",
										priceString: "$2.89",
									},
								],
								price: 2.89,
							},
							{
								name: "Burrito Supreme®",
								description:
									"A warm flour tortilla loaded with seasoned beef, refried beans, tomatoes, onions, iceberg lettuce, reduced-fat sour cream, red sauce and cheddar cheese.",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
							{
								name: "Cheesy Potato Griller",
								description:
									"A warm flour tortilla is filled with fiesta potato bites, warm nacho cheese sauce and cool sour cream - rolled and grilled to perfection.",
								pricing: [
									{
										price: 2.29,
										currency: "USD",
										priceString: "$2.29",
									},
								],
								price: 2.29,
							},
							{
								name: "Beefy Nacho Griller",
								description:
									"A warm flour tortilla is filled with seasoned beef, crunchy tortilla strips and warm nacho cheese - rolled and grilled to perfection.",
								pricing: [
									{
										price: 2.29,
										currency: "USD",
										priceString: "$2.29",
									},
								],
								price: 2.29,
							},
							{
								name: "7-Layer Burrito",
								description:
									"Warm flour tortilla, refried beans, seasoned rice, three-cheese blend, guacamole, reduced fat sour cream, lettuce & tomatoes. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co.",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
							{
								name: "Chili Cheese Burrito",
								description: "",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
						],
					},
					{
						section_name: "Quesadillas",
						description: "",
						menu_items: [
							{
								name: "Chicken Quesadilla",
								description:
									"An extra flour tortilla filled with melty three-cheese blend, fire grilled chicken, creamy jalapeño sauce folded and grilled to perfection.",
								pricing: [
									{
										price: 4.39,
										currency: "USD",
										priceString: "$4.39",
									},
								],
								price: 4.39,
							},
							{
								name: "Chicken Quesadilla Combo",
								description: "Served with large drink, chicken quesadilla, regular crunchy taco.",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "Shredded Chicken Quesadilla Melt",
								description: "Comes with shredded chicken, 3 cheese blend, and chipotle sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Steak Quesadilla",
								description:
									"A warm flour tortilla filled with USDA Select Marinated Grilled Steak, Three Cheese Blend, Creamy Jalapeno Sauce, folded over and grilled.",
								pricing: [
									{
										price: 4.49,
										currency: "USD",
										priceString: "$4.49",
									},
								],
								price: 4.49,
							},
							{
								name: "Cheese Quesadilla",
								description:
									"Large flour tortilla filled with melty three-cheese blend, creamy jalapeño sauce, perfectly folded & grilled. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
						],
					},
					{
						section_name: "Nachos",
						description: "",
						menu_items: [
							{
								name: "Nachos BellGrande®",
								description:
									"A portion of crispy tortilla chips topped with warm nacho cheese sauce, refried beans, seasoned beef, ripe tomatoes and cool sour cream.",
								pricing: [
									{
										price: 4.39,
										currency: "USD",
										priceString: "$4.39",
									},
								],
								price: 4.39,
							},
							{
								name: "Nachos BellGrande® Combo",
								description: "Served with a large drink and a crunchy taco supreme.",
								pricing: [
									{
										price: 6.99,
										currency: "USD",
										priceString: "$6.99",
									},
								],
								price: 6.99,
							},
							{
								name: "Nachos Supreme",
								description:
									"Crispy tortilla chips topped with warm nacho cheese sauce, refried beans, seasoned beef, ripe tomatoes and cool sour cream.",
								pricing: [
									{
										price: 3.59,
										currency: "USD",
										priceString: "$3.59",
									},
								],
								price: 3.59,
							},
							{
								name: "Triple Layer Nachos",
								description: "Nacho chips topped with refried beans, our famous red sauce and nacho cheese sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Chips and Nacho Cheese Sauce",
								description: "Nacho chips with a side of warm nacho cheese sauce for dipping.",
								pricing: [
									{
										price: 1.69,
										currency: "USD",
										priceString: "$1.69",
									},
								],
								price: 1.69,
							},
							{
								name: "Chips and Guacamole",
								description: "Nacho chips served with a side of premium guacamole.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Chips and Pico De Gallo",
								description: "Nacho chips served with a side of pico de gallo.",
								pricing: [
									{
										price: 1.59,
										currency: "USD",
										priceString: "$1.59",
									},
								],
								price: 1.59,
							},
						],
					},
					{
						section_name: "Value Menu",
						description: "",
						menu_items: [
							{
								name: "Beefy Fritos® Burrito",
								description:
									"A warm flour tortilla filled with seasoned beef, crispy red strips and nacho cheese sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Cheesy Bean and Rice Burrito",
								description:
									"A warm flour tortilla filled with refried beans, seasoned rice, nacho cheese sauce and creamy jalapeño sauce. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Shredded Chicken Quesadilla Melt",
								description: "Comes with shredded chicken, 3 cheese blend, and chipotle sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Cheesy Roll Up",
								description:
									"A warm flour tortilla filled with our 3-cheese blend. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Cinnamon Twists",
								description: "Crispy, puffed corn twists sprinkled with cinnamon and sugar.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Spicy Potato Soft Taco",
								description:
									"A soft flour tortilla filled with Potato Bites, iceburg lettuce, cheddar cheese, and Creamy Chipotle sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Triple Layer Nachos",
								description: "Nacho chips topped with refried beans, our famous red sauce and nacho cheese sauce.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
						],
					},
					{
						section_name: "Sweets",
						description: "",
						menu_items: [
							{
								name: "Cinnamon Twists",
								description: "Crispy, puffed corn twists sprinkled with cinnamon and sugar.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
						],
					},
					{
						section_name: "Sides",
						description: "",
						menu_items: [
							{
								name: "Cheesy Fiesta Potatoes",
								description: "Potato bites topped with nacho cheese sauce and reduced-fat sour cream.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Cheesy Roll Up",
								description:
									"A warm flour tortilla filled with our 3-cheese blend. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Chips and Nacho Cheese Sauce",
								description: "Nacho chips with a side of warm nacho cheese sauce for dipping.",
								pricing: [
									{
										price: 1.69,
										currency: "USD",
										priceString: "$1.69",
									},
								],
								price: 1.69,
							},
							{
								name: "Chips and Guacamole",
								description: "Nacho chips served with a side of premium guacamole.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Chips and Pico De Gallo",
								description: "Nacho chips served with a side of pico de gallo.",
								pricing: [
									{
										price: 1.59,
										currency: "USD",
										priceString: "$1.59",
									},
								],
								price: 1.59,
							},
							{
								name: "Black Beans and Rice",
								description:
									"Black beans served with seasoned rice. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1.49,
										currency: "USD",
										priceString: "$1.49",
									},
								],
								price: 1.49,
							},
							{
								name: "Black Beans",
								description:
									"Savory black beans. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1.49,
										currency: "USD",
										priceString: "$1.49",
									},
								],
								price: 1.49,
							},
						],
					},
					{
						section_name: "Drinks",
						description: "",
						menu_items: [
							{
								name: "Pineapple Whip Freeze",
								description: "A tropical pineapple freeze blended with sweet vanilla cream.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Pineapple Freeze",
								description: "A tropical pineapple freeze.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Wild Strawberry Candy Freeze",
								description: "A refreshing strawberry freeze with candy seeds.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Wild Strawberry Freeze",
								description: "A refreshing Strawberry freeze.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Mountain Dew Baja Blast® Freeze",
								description: "Mountain Dew® Baja Blast in a frozen slushy drink.",
								pricing: [
									{
										price: 2.59,
										currency: "USD",
										priceString: "$2.59",
									},
								],
								price: 2.59,
							},
							{
								name: "Pepsi®",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Diet Pepsi®",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Mountain Dew®",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Mountain Dew Baja Blast®",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Mountain Dew® Kickstart? Orange Citrus",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Sierra Mist®",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "G2 Gatorade® Fruit Punch",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Tropicana® Pink Lemonade",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Brisk® Mango Fiesta",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Lipton® Unsweetened Iced Tea",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Orange Juice",
								description: "15.2 oz Bottle of Tropicana® Orange Juice.",
								pricing: [
									{
										price: 1.99,
										currency: "USD",
										priceString: "$1.99",
									},
								],
								price: 1.99,
							},
							{
								name: "Regular Iced Coffee",
								description: "Rainforest alliance certified? coffee poured over ice.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Premium Hot Coffee",
								description: "Rainforest alliance certified? coffee.",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Pepsi® Zero Sugar",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
							{
								name: "Mountain Dew® Baja Blast? Zero Sugar",
								description: "",
								pricing: [
									{
										price: 1.79,
										currency: "USD",
										priceString: "$1.79",
									},
								],
								price: 1.79,
							},
						],
					},
					{
						section_name: "Power Menu",
						description: "",
						menu_items: [
							{
								name: "Power Menu Bowl - Veggie",
								description:
									"Seasoned rice, black beans, pico de gallo, guacamole, reduced fat sour cream, lettuce, shredded cheese & avocado ranch sauce. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co.",
								pricing: [
									{
										price: 5.39,
										currency: "USD",
										priceString: "$5.39",
									},
								],
								price: 5.39,
							},
							{
								name: "Power Menu Bowl",
								description:
									"We start with a bed of seasoned rice and top it with fire grilled chicken, black beans, fresh pico de gallo, premium guacamole, sour cream, lettuce, shredded cheddar cheese and avocado ranch sauce.",
								pricing: [
									{
										price: 5.59,
										currency: "USD",
										priceString: "$5.59",
									},
								],
								price: 5.59,
							},
						],
					},
					{
						section_name: "Vegetarian",
						description:
							"Taco Bell's American Vegetarian Association certified vegetarian food items are lacto-ovo, allowing consumption of dairy and eggs but not animal byproducts. Vegetarian and meat ingredients are handled in common, and cross contact may occur, which may not be acceptable to certain types of vegetarian diets. Neither Taco Bell, our employees, franchisees, licensees nor the AVA assume any responsibility for such cross contact.",
						menu_items: [
							{
								name: "Cheese Quesadilla",
								description:
									"Large flour tortilla filled with melty three-cheese blend, creamy jalapeño sauce, perfectly folded & grilled. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
							{
								name: "Bean Burrito",
								description:
									"Warm flour tortilla filled with refried beans, shredded cheddar cheese, flavorful red sauce and diced onions. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 1.39,
										currency: "USD",
										priceString: "$1.39",
									},
								],
								price: 1.39,
							},
							{
								name: "7-Layer Burrito",
								description:
									"Warm flour tortilla, refried beans, seasoned rice, three-cheese blend, guacamole, reduced fat sour cream, lettuce & tomatoes. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co.",
								pricing: [
									{
										price: 3.49,
										currency: "USD",
										priceString: "$3.49",
									},
								],
								price: 3.49,
							},
							{
								name: "Cheesy Roll Up",
								description:
									"A warm flour tortilla filled with our 3-cheese blend. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details.",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Cheesy Bean and Rice Burrito",
								description:
									"A warm flour tortilla filled with refried beans, seasoned rice, nacho cheese sauce and creamy jalapeño sauce. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat. See ta.co for full details",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Black Bean Quesarito",
								description:
									"Cheese & nacho cheese sauce quesadilla wrapped around a black bean, seasoned rice, reduced fat source cream & chipotle sauce burrito. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation methods may lead to cross contact with meat.",
								pricing: [
									{
										price: 2.99,
										currency: "USD",
										priceString: "$2.99",
									},
								],
								price: 2.99,
							},
							{
								name: "Black Bean Crunchwrap Supreme®",
								description:
									"Flour tortilla, black beans, nacho cheese sauce, tostada shell, lettuce, tomatoes & reduced fat sour cream layers grilled in a crunchwrap. Item is lacto-ovo, allowing for dairy & egg consumption. Preparation method may lead to cross contact with meat",
								pricing: [
									{
										price: 3.69,
										currency: "USD",
										priceString: "$3.69",
									},
								],
								price: 3.69,
							},
						],
					},
					{
						section_name: "Happier Hour",
						description: "",
						menu_items: [
							{
								name: "Happier Hour® Beverage",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-24T17:51:55.526Z",
	},
	{
		restaurant_name: "Chipotle",
		restaurant_phone: "(608) 826-0919",
		restaurant_website: "http://www.chipotle.com",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4307486589534580,
		cuisines: ["Mexican"],
		address: {
			city: "MIDDLETON",
			state: "WI",
			postal_code: "53562",
			street: "8712 Old Sauk Rd",
			formatted: "8712 Old Sauk Rd MIDDLETON, WI 53562",
		},
		geo: {
			lat: 43.074865,
			lon: -89.53458,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Fillings - Meat/Vegetarian",
						description: "",
						menu_items: [
							{
								name: "Chicken",
								description: "Naturally raised, marinated in our chipotle adobo, then grilled.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Steak",
								description: "Marinated in our chipotle adobo, then grilled.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Barbacoa",
								description: "Naturally raised beef. Braised for hours, then shredded.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Carnitas",
								description: "Naturally raised pork. Braised for hours, then shredded.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Vegetarian",
								description: "Includes our freshly made guacamole and vegetarian black beans.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Burritos, Tacos & Salads",
						description: "",
						menu_items: [
							{
								name: "Burrito",
								description:
									"Tortilla, choice of rice, beans, meat, salsa and cheese or sour cream. Add peppers and onions instead of beans for a fajita burrito.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Burrito Bowl",
								description: "Just like a burrito, but served in a bowl with no tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tacos",
								description:
									"Your choice of three crispy corn or soft flour tortillas with meat, salsa, cheese or sour cream and romaine lettuce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Salad",
								description:
									"Chopped romaine lettuce with choice of beans, meat, salsa and cheese, with chipotle-honey vinaigrette.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Salsas",
						description: "",
						menu_items: [
							{
								name: "Fresh Tomato (Mild)",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Roasted Chili-Corn (Medium)",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tomatillo- Green Chili (Medium Hot)",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tomatillo- Red Chili (Hot)",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Extras & Drinks",
						description: "",
						menu_items: [
							{
								name: "Chips & Guacamole",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chips & Salsa",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Guacamole",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chips",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Bottled Drinks",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Soda",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-29T05:32:20.252Z",
	},
	{
		restaurant_name: "4B Cafe",
		restaurant_phone: "(608) 835-0327",
		restaurant_website: "http://www.4bcafe.com",
		hours: "",
		price_range: "$$",
		price_range_num: 2,
		restaurant_id: 4293811489383407,
		cuisines: ["American", "Mexican"],
		address: {
			city: "OREGON",
			state: "WI",
			postal_code: "53575",
			street: "787 N Main St",
			formatted: "787 N Main St OREGON, WI 53575",
		},
		geo: {
			lat: 42.938114,
			lon: -89.383407,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Appetizers",
						description: "Add guacamole or upgrade to steak $2.00.",
						menu_items: [
							{
								name: "Chips And Salsa",
								description: "",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
							{
								name: "Chips And Nacho Cheese Sauce",
								description: "",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
							{
								name: "Chips And White Queso And Chorizo Sauce",
								description: "",
								pricing: [
									{
										price: 3.25,
										currency: "USD",
										priceString: "$3.25",
									},
								],
								price: 3.25,
							},
							{
								name: "Chips And Guacamole",
								description: "",
								pricing: [
									{
										price: 3.25,
										currency: "USD",
										priceString: "$3.25",
									},
								],
								price: 3.25,
							},
							{
								name: "Onion Ring Basket",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "French Fry Basket",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "Cheese Curds With Marinara Sauce",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Jalapeno Poppers",
								description: "stuffed with cream cheese.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Chicken Tenders (5)",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Nachos",
								description:
									"our freshly fried corn tortilla chips topped with refried beans, lettuce, tomatoes, jalapenos, nacho cheese sauce, black olives and sour cream.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Loco Nachos",
								description: "served with ground beef, or chicken.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
						],
					},
					{
						section_name: "Soup",
						description: "",
						menu_items: [
							{
								name: "Homemade Soup Cup",
								description: "",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "Homemade Chili Bowl",
								description: "with onions, cheese and sour cream.",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
						],
					},
					{
						section_name: "Salads",
						description: "Add chicken or ground beef $1.50, add steak, shrimp, or guacamole $2.00.",
						menu_items: [
							{
								name: "Grilled Chicken Caesar Salad",
								description: "large caesar salad topped with a grilled and diced chicken breast.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Honey Mustard Crispy Chicken Salad",
								description:
									"our homemade lettuce mix, green bell peppers, diced bacon, diced chicken tenders, and topped with parmesan cheese.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Taco Salads",
								description:
									"a freshly fried flour tortilla bowl stuffed with our homemade lettuce mix and topped with refried beans, yellow and white american cheese, tomatoes, black olives and sour cream.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
						],
					},
					{
						section_name: "Hot Sandwiches",
						description: "Add french fries or onion rings for $1.50.",
						menu_items: [
							{
								name: "Grilled Cheese",
								description: "choice of cheese and bread (add bacon or canadian bacon $1.00).",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "BLT Bacon",
								description: "lettuce and tomato on choice of toasted bread (add egg $1.00).",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Patty Melt",
								description: "burger with swiss, cheddar and sauteed onions on choice of bread.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Rueben On Rye",
								description: "corned beef, swiss, sauerkraut, and thousand island dressing.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Grilled Chicken Breast",
								description: "served with lettuce and tomato on a kaiser roll.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Pulled BBQ Pork",
								description: "served with onions and pickles.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Fried Cod Sandwich",
								description: "served with lettuce and tomato on a kaiser roll.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Philly Cheese Steak Sub",
								description: "shredded sirloin steak, provolone cheese, onions and green peppers.",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Shrimp Po Boy Sub",
								description: "fried shrimp, cajun seasoning, spicy remoulade, lettuce, tomato and pickle.",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Meatball Sub",
								description: "homemade meatballs in marinara sauce, provolone and parmesan cheese.",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
						],
					},
					{
						section_name: "Burgers",
						description:
							"Ask for it crunchy and we will add some tortilla chips. All burgers are 1/3 lb. hand molded fresh beef patties served with lettuce, tomato and pickles raw or sauteed onions per request. Add french fries or onion rings for $1.50. Cheese choices: american, swiss, cheddar, pepper jack, provolone. Make it even tastier, guacamole or avocado slices $1.00, fried egg $1.00, jalapenos $0.50, add a patty $2.00, grilled mushrooms $1.00, ranchero sauce $0.50, bacon $1.00.",
						menu_items: [
							{
								name: "Hamburger",
								description: "",
								pricing: [
									{
										price: 4.5,
										currency: "USD",
										priceString: "$4.50",
									},
								],
								price: 4.5,
							},
							{
								name: "Cheeseburger",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Bacon Cheeseburger",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Mushroom And Swiss Burger",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
						],
					},
					{
						section_name: "Specialty Burgers",
						description:
							"Ask for it crunchy and we will add some tortilla chips. Add french fries or onion rings for $1.50.",
						menu_items: [
							{
								name: "Loco Burger",
								description: "(pepper jack cheese, bacon, green chili salsa, onions, lettuce, tomatoes, and pickles).",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Ranchero Burger",
								description: "(topped with hot ranchero sauce and white american cheese).",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Nacho Burger",
								description: "(topped with nacho cheese and pickled jalapenos).",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Mad Burger",
								description: "(fresh jalapenos in the patty, hot sauce, hot relish, jalapenos and pepper jack cheese).",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
							{
								name: "Chipotle Burger",
								description: "(topped with a chipotle cream sauce and guacamole).",
								pricing: [
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 6.5,
							},
						],
					},
					{
						section_name: "Pasta",
						description: "",
						menu_items: [
							{
								name: "Chicken Fettuccine",
								description: "diced chicken breast, fettuccine and alfredo sauce served with garlic bread.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Shrimp Fettuccine",
								description: "sauteed shrimp, fettuccine and alfredo sauce served with garlic bread.",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
							{
								name: "Shrimp Scampi Pasta",
								description: "sauteed shrimp and garlic butter over fettuccine served with garlic bread.",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
						],
					},
					{
						section_name: "American Comfort Food",
						description: "",
						menu_items: [
							{
								name: "Beef Stew",
								description: "large bowl of our homemade beef stew served with bread.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Spaghetti",
								description: "choice of 3 large homemade meatballs or meat sauce served with garlic bread.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Ham Steak",
								description: "full size ham steak served with mashed potatoes, peas and a roll.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Chicken N Biscuit Pot Pie",
								description: "made with chicken, celery, carrots, mushrooms and peas served over biscuits.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Mac And Cheese Plate",
								description: "large bowl of our homemade mac and cheese served with garlic bread.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Fried Shrimp Basket",
								description: "deep fried shrimp served with french fries, coleslaw and a roll.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Classic Meatloaf",
								description: "made with ground beef, onions, green peppers served with mashed potatoes and gravy.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Beef Pot Roast",
								description: "slow cooked beef roast served with mashed potatoes, peas and a roll.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Fried Cod Basket",
								description: "deep fried cod served with french fries, coleslaw and a roll.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
						],
					},
					{
						section_name: "Tortas",
						description: "",
						menu_items: [
							{
								name: "Our Fresh Baked Bollio Bread",
								description:
									"with refried beans, mayonnaise, lettuce, tomatoes, onions, jalapenos, white cheese and avocado slices. (steak, pork carnitas, chicken, veggie.).",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 8,
							},
							{
								name: "Cuban Loco",
								description: "(chicken, canadian bacon, hot dog & egg).",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
						],
					},
					{
						section_name: "Individual Items - Quesadillas",
						description:
							"Crispy grilled tortilla filled with cheese served with a bed of lettuce, tomatoes and sour cream. Add guacamole topping $2.00.",
						menu_items: [
							{
								name: "Cheese",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Chicken",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Sauteed Mushrooms",
								description: "onions and white cheese.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Steak",
								description: "onions and green peppers.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Shrimp",
								description: "onions and green peppers and white cheese.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
						],
					},
					{
						section_name: "Tacos",
						description:
							"(Add a side of refried beans and rice $1.99). Choose tortilla, soft corn, soft flour, crispy corn. Options, cheese may be substituted for tomatoes per request. Add ons cheese, sour cream, onions, cilantro, pico de gallo or jalapenos add $0.25. add guacamole $0.50.",
						menu_items: [
							{
								name: "Chicken, Lettuce and Tomato",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Ground Beef, Lettuce And Tomato",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Chorizo, Onions And Cilantro",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Steak, Onions And Cilantro",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Steak And Chorizo, Onions And Cilantro",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Pork Carnitas, Onions And Cilantro",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Cajun Grilled Shrimp And Pico De Gallo",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Sauteed Tilapia And Pico De Gallo",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
						],
					},
					{
						section_name: "Individual Items",
						description: "(Add a side of refried beans and rice $2.00). ",
						menu_items: [
							{
								name: "Huaraches",
								description:
									"large homemade oval corn tortilla topped with lettuce, tomato, cheese, sliced avocado and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Sopes",
								description:
									"thick homemade corn tortilla topped with refried beans, lettuce, tomato, cheese and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Gorditas",
								description:
									"thick homemade corn tortilla stuffed with refried beans, lettuce, tomato, cheese and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Vegetarian",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 5,
							},
							{
								name: "Marinated Chicken",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 6,
							},
							{
								name: "Seasoned Ground Beef",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 6,
							},
							{
								name: "Pork Carnitas",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
								],
								price: 7,
							},
							{
								name: "Marinated And Cubed Steak",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
								],
								price: 7,
							},
							{
								name: "Grilled Shrimp",
								description: "",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
									{
										price: 3.5,
										currency: "USD",
										priceString: "$3.50",
									},
								],
								price: 8,
							},
							{
								name: "Chorizo And Potato",
								description: "",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
						],
					},
					{
						section_name: "Ala Carte",
						description: "",
						menu_items: [
							{
								name: "Any Side",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "4 Avocado Slices",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Sour Cream",
								description: "",
								pricing: [
									{
										price: 0.5,
										currency: "USD",
										priceString: "$0.50",
									},
								],
								price: 0.5,
							},
							{
								name: "Add 3 Tortillas",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "4 Oz. Guacamole",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
						],
					},
					{
						section_name: "Combo Plates",
						description: "Served with a side of refried beans and rice.",
						menu_items: [
							{
								name: "Combo 1",
								description: "steak sope, ground beef taco and cheese enchilada.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
							{
								name: "Combo 2",
								description: "chicken tostada, ground beef gordita and cheese enchilada.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
						],
					},
					{
						section_name: "Mexican Plates",
						description:
							"Served with a side of refried beans and rice. Topped with enchilada, ranchero, white cheese sauce or nacho cheese sauce california style burrito - add guacamole, pico de gallo and rice inside (add $2).",
						menu_items: [
							{
								name: "Burritos",
								description:
									"a large 1' flour tortilla stuffed with refried beans, cheese, lettuce, tomatoes and onions and served with a bed of lettuce, tomatoes and sour cream..",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chimichangas",
								description:
									"a large 1' flour tortilla stuffed with refried beans, cheese, and onions then deep fried and topped with cheese with a bed of lettuce, tomatoes and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Enchiladas",
								description:
									"3 corn tortillas stuffed with cheese and rolled and topped with red sauce or green salsa, and topped with lettuce, tomato, cheese and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tostadas",
								description: "flat crispy corn tortillas topped with lettuce, tomato, cheese and sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "No Meat",
								description: "",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
									{
										price: 9,
										currency: "USD",
										priceString: "$9.00",
									},
									{
										price: 6.5,
										currency: "USD",
										priceString: "$6.50",
									},
								],
								price: 8,
							},
							{
								name: "Marinated Chicken",
								description: "",
								pricing: [
									{
										price: 9,
										currency: "USD",
										priceString: "$9.00",
									},
									{
										price: 9,
										currency: "USD",
										priceString: "$9.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 9,
							},
							{
								name: "Seasoned Ground Beef",
								description: "",
								pricing: [
									{
										price: 9,
										currency: "USD",
										priceString: "$9.00",
									},
									{
										price: 9,
										currency: "USD",
										priceString: "$9.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 9,
							},
							{
								name: "Pork Carnitas",
								description: "",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 10,
							},
							{
								name: "Marinated And Cubed Steak",
								description: "",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 10,
							},
							{
								name: "Grilled Shrimp",
								description: "",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 10,
							},
							{
								name: "Make It Wet",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
						],
					},
					{
						section_name: "Specialty Plates - Fajitas",
						description:
							"Sauteed with onions, red and green peppers served with a side bed of lettuce, tomatoes, cheese and sour cream and choice of flour or corn tortillas.",
						menu_items: [
							{
								name: "Chicken",
								description: "",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
							{
								name: "Steak",
								description: "",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
							{
								name: "Shrimp",
								description: "",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
							{
								name: "Trio",
								description: "",
								pricing: [
									{
										price: 13,
										currency: "USD",
										priceString: "$13.00",
									},
								],
								price: 13,
							},
						],
					},
					{
						section_name: "Specialty Plates",
						description: "Served with a side of refried beans and rice.",
						menu_items: [
							{
								name: "Drunken Shrimp",
								description:
									"shrimp in a spicy white wine sauce over a bed of rice and topped with pico de gallo and choice of flour or corn tortillas.",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
							{
								name: "Steak Mexicana",
								description:
									"8 oz. chopped steak, fresh jalapenos, onions and tomatoes served with a side bed of lettuce, tomatoes, cheese and sour cream and choice of flour or corn tortillas.",
								pricing: [
									{
										price: 12,
										currency: "USD",
										priceString: "$12.00",
									},
								],
								price: 12,
							},
							{
								name: "Meatloaf Ranchero",
								description:
									"made with ground beef, chorizo, onions, jalapenos, green peppers and topped with our homemade ranchero sauce.",
								pricing: [
									{
										price: 10,
										currency: "USD",
										priceString: "$10.00",
									},
								],
								price: 10,
							},
							{
								name: "Loco Chicken",
								description:
									"grilled chicken breast with sauteed onions and mushrooms and topped with white cheese sauce.",
								pricing: [
									{
										price: 11,
										currency: "USD",
										priceString: "$11.00",
									},
								],
								price: 11,
							},
						],
					},
					{
						section_name: "Kids Menu",
						description:
							"Served with a drink, and choice of a side and a treat. Choose a side: french fries, onion rings, mexican rice, refried beans, mashed potatoes, peas, corn, apple sauce or homemade mac and cheese.",
						menu_items: [
							{
								name: "Grilled Cheese",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Mac And Cheese",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "6 Mini Corn Dogs",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Chicken Tenders",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Spaghetti And Meat Sauce",
								description: "served with garlic bread. (no sides).",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Cheese Quesadilla",
								description: "with sour cream or salsa.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Crispy Ground Beef Taco",
								description: "w/ lettuce and cheese.",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
						],
					},
					{
						section_name: "Desserts",
						description: "",
						menu_items: [
							{
								name: "Brownie",
								description: "",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
							{
								name: "Brownie Sundae",
								description: "",
								pricing: [
									{
										price: 3.75,
										currency: "USD",
										priceString: "$3.75",
									},
								],
								price: 3.75,
							},
							{
								name: "Ice Cream",
								description: "cone or bowl.",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "Cherry Or Apple Dumplings",
								description: "with ice cream.",
								pricing: [
									{
										price: 3.75,
										currency: "USD",
										priceString: "$3.75",
									},
								],
								price: 3.75,
							},
							{
								name: "Cheesecake",
								description: "original, apple, blueberry or strawberry.",
								pricing: [
									{
										price: 3.75,
										currency: "USD",
										priceString: "$3.75",
									},
								],
								price: 3.75,
							},
							{
								name: "Apple Pie Dessert Nachos",
								description:
									"deep fried flour tortillas tossed in cinnamon sugar and topped with chocolate and caramel sauce and served with apple pie filling.",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 4,
							},
						],
					},
					{
						section_name: "Bakery Items",
						description: "(See our bakery menu).",
						menu_items: [
							{
								name: "Bakery Items",
								description:
									"assorted pies, cakes, cupcakes, pastry, donuts, cinnamon rolls, cream puffs, muffins, cookies, brownies, mexican pastry, artisanal breads and more.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
				],
			},
			{
				menu_name: "Breakfast",
				menu_sections: [
					{
						section_name: "...",
						description: "",
						menu_items: [
							{
								name: "Gyros And Egg Plate",
								description:
									"2 eggs, side of gyros, choice of hash browns or breakfast potatoes, choice of toast and tzatziki sauce.",
								pricing: [
									{
										price: 8.5,
										currency: "USD",
										priceString: "$8.50",
									},
								],
								price: 8.5,
							},
							{
								name: "3 Meat Skillet",
								description:
									"2 scrambled eggs with bacon, ham and sausage, white and american cheese served on top of a bed of breakfast potatoes with choice of toast.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Ranchero Skillet",
								description:
									"2 scrambled eggs with onions and green peppers topped with ranchero sauce and white cheese served on top of a bed of breakfast potatoes with choice of toast.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Chicken Skillet",
								description:
									"2 scrambled eggs with diced chicken tenders, bacon and pepper jack cheese served on top of a bed of breakfast potatoes with choice of toast.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Pancakes/ French Toast/ Belgian Waffles",
								description:
									"served with 2 pieces of bacon or sausage links or 1 sausage patty and topped with butter and powdered sugar. add $1.50 for apple, strawberry or blueberry compote, whipped cream and powdered sugar. (5 stack, 3 stack, 1 waffle, 2 waffles).",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
						],
					},
					{
						section_name: "Early Bird Specials",
						description: "(Monday - friday open - 10 am).",
						menu_items: [
							{
								name: "1 Egg, 2 Pieces Of Bacon And 1 Toast",
								description: "",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
							{
								name: "2 Eggs, 2 Pieces Of Bacon And 2 Pancakes",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "3 Pancakes And 2 Pieces Of Bacon",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "2 Breakfast Tacos",
								description:
									"choose: (potato and egg) (chorizo and egg), (sausage, egg and cheese) or (bacon, egg and cheese). ",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
						],
					},
					{
						section_name: "Breakfast Combination Plates",
						description: "",
						menu_items: [
							{
								name: "2 Eggs, 4 Pieces Of Meat",
								description: "breakfast potatoes or hash browns and choice of 2 pancakes or toast.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Homemade Biscuits And Sausage Gravy",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "1 Egg, 2 Pieces Of Meat",
								description: "breakfast potatoes or hash browns and choice of 2 pancakes or toast.",
								pricing: [
									{
										price: 5.5,
										currency: "USD",
										priceString: "$5.50",
									},
								],
								price: 5.5,
							},
							{
								name: "2 Eggs, 2 Pancakes, 2 Pieces Of Meat",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
							{
								name: "Corned Beef Hash And 2 Eggs",
								description: "and choice of 2 pancakes or toast.",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "6Oz Steak And 2 Eggs",
								description: "breakfast potatoes or hash browns and choice of 2 pancakes or toast.",
								pricing: [
									{
										price: 8.5,
										currency: "USD",
										priceString: "$8.50",
									},
								],
								price: 8.5,
							},
							{
								name: "Eggs Benedict",
								description:
									"2 basted eggs and canadian bacon smothered in a rich hollandaise sauce served on english muffins, with choice of breakfast potatoes or hash browns.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "4 Oz Ham Steak",
								description: "2 eggs, breakfast potatoes or hash browns and choice of 2 pancakes or toast.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
						],
					},
					{
						section_name: "Breakfast Sandwiches",
						description:
							"Served on your choice of toast or english muffin. on a toasted bagel add $0.50, add breakfast potatoes or hash browns for $1.50. Loco hash browns add $2.25.",
						menu_items: [
							{
								name: "Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
							{
								name: "Jalapeno, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
							{
								name: "Sausage, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "Canadian Bacon, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "Bacon, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "Chopped Steak, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 4,
										currency: "USD",
										priceString: "$4.00",
									},
								],
								price: 4,
							},
							{
								name: "Bacon, Egg, Lettuce And Tomato",
								description: "",
								pricing: [
									{
										price: 5,
										currency: "USD",
										priceString: "$5.00",
									},
								],
								price: 5,
							},
						],
					},
					{
						section_name: "2 Egg Omelet Plate",
						description:
							"Served with breakfast potatoes or hash browns and choice of toast, 3 tortillas or english muffin. Loco hash browns add $0.75. Add 1 to make it a 3 egg omelet.",
						menu_items: [
							{
								name: "3 Meat",
								description: "ham, bacon, sausage and american cheese.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Mexican",
								description: "ham, onion, tomato, jalapenos and pepper jack cheese.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Loco",
								description: "ham, onion, mushrooms, green peppers and pepper jack cheese.",
								pricing: [
									{
										price: 8,
										currency: "USD",
										priceString: "$8.00",
									},
								],
								price: 8,
							},
							{
								name: "Mushroom And Swiss",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Ham And American Cheese",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Build Your Own",
								description: "(3 items included).",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
						],
					},
					{
						section_name: "Breakfast Torta",
						description: "",
						menu_items: [
							{
								name: "Our Fresh Bollio Bread",
								description:
									"with refried beans, 2 eggs, cheese, and jalapenos choice of sausage patties or canadian bacon.",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
						],
					},
					{
						section_name: "Breakfast Specialties",
						description:
							"Served with breakfast potatoes or hash browns or loco hash browns add $0.75 refried beans and choice of corn or flour tortillas.",
						menu_items: [
							{
								name: "Chorizo And Eggs",
								description: "3 scrambled eggs mixed with mexican chorizo sausage.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Huevos Rancheros",
								description: "3 over easy eggs topped with our homemade ranchero sauce.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Chilaquiles",
								description: "diced corn tortillas, spicy green sauce, melted cheese and topped with eggs.",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
						],
					},
					{
						section_name: "Breakfast Burrito Plates",
						description:
							"Rolled into a large flour tortilla served on your choice of breakfast potatoes or hash browns or loco hash browns add $0.75.",
						menu_items: [
							{
								name: "Potatoes And Eggs",
								description: "",
								pricing: [
									{
										price: 6,
										currency: "USD",
										priceString: "$6.00",
									},
								],
								price: 6,
							},
							{
								name: "Chorizo (Mexican Sausage) And Eggs",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Ranchero Eggs And White Cheese",
								description: "",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
							{
								name: "Bacon, Ham, Sausage And Egg",
								description: "",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Steak And Eggs",
								description: "",
								pricing: [
									{
										price: 7.5,
										currency: "USD",
										priceString: "$7.50",
									},
								],
								price: 7.5,
							},
							{
								name: "Build Your Own",
								description: "(eggs and 2 items).",
								pricing: [
									{
										price: 7,
										currency: "USD",
										priceString: "$7.00",
									},
								],
								price: 7,
							},
						],
					},
					{
						section_name: "Breakfast Tacos",
						description: "Served wrapped in a flour tortilla.",
						menu_items: [
							{
								name: "Refried Beans And Cheese",
								description: "",
								pricing: [
									{
										price: 1.75,
										currency: "USD",
										priceString: "$1.75",
									},
								],
								price: 1.75,
							},
							{
								name: "Jalapeno, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Sausage, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Ham, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Bacon, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Egg, Onion And Tomato",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Chorizo, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Steak, Egg And Cheese",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Build Your Own",
								description: "(egg and 2 items).",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
						],
					},
					{
						section_name: "Build Your Own Choices",
						description: "",
						menu_items: [
							{
								name: "Meats",
								description: "bacon, sausage, diced ham, chorizo (mexican sausage), canadian bacon.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Veggies",
								description:
									"hash browns, breakfast, potatoes, refried beans, onions, green peppers, tomatoes, jalapenos.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cheeses",
								description: "yellow american, cheddar, swiss, pepper jack, provolone, white american cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Ala Carte",
						description: "",
						menu_items: [
							{
								name: "Oatmeal",
								description: "",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "Sausage Links (4)",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "4 Oz. Ham Steak",
								description: "",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
							{
								name: "Loco Hash Browns",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "Add (3) Tortillas",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
								],
								price: 1,
							},
							{
								name: "Refried Beans",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Add 1 Egg",
								description: "",
								pricing: [
									{
										price: 1.25,
										currency: "USD",
										priceString: "$1.25",
									},
								],
								price: 1.25,
							},
							{
								name: "Sausage Patty (2)",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "Breakfast Potatoes",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "English Muffin",
								description: "",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
							{
								name: "Bagel & Butter",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Jalapenos",
								description: "",
								pricing: [
									{
										price: 0.5,
										currency: "USD",
										priceString: "$0.50",
									},
								],
								price: 0.5,
							},
							{
								name: "Smoked Bacon (4)",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "Corned Beef Hash",
								description: "",
								pricing: [
									{
										price: 2.5,
										currency: "USD",
										priceString: "$2.50",
									},
								],
								price: 2.5,
							},
							{
								name: "Hash Browns",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Toast",
								description: "(2 slices).",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
							{
								name: "Bagel & Cream Cheese",
								description: "",
								pricing: [
									{
										price: 2.25,
										currency: "USD",
										priceString: "$2.25",
									},
								],
								price: 2.25,
							},
							{
								name: "Sour Cream",
								description: "",
								pricing: [
									{
										price: 0.5,
										currency: "USD",
										priceString: "$0.50",
									},
								],
								price: 0.5,
							},
						],
					},
					{
						section_name: "Kids Breakfast Menu",
						description: "Served with a drink.",
						menu_items: [
							{
								name: "1 Egg, 2 Pieces Of Bacon And 1 Toast",
								description: "",
								pricing: [
									{
										price: 4.75,
										currency: "USD",
										priceString: "$4.75",
									},
								],
								price: 4.75,
							},
							{
								name: "3 Mini Chocolate Chip Pancakes",
								description: "and 2 pieces of bacon.",
								pricing: [
									{
										price: 4.75,
										currency: "USD",
										priceString: "$4.75",
									},
								],
								price: 4.75,
							},
							{
								name: "3 Mini Rainbow Sprinkle Pancakes",
								description: "and 2 pieces of bacon. also see early bird specials.",
								pricing: [
									{
										price: 4.75,
										currency: "USD",
										priceString: "$4.75",
									},
								],
								price: 4.75,
							},
						],
					},
					{
						section_name: "Bakery Items",
						description: "(See our bakery menu).",
						menu_items: [
							{
								name: "Bakery Items",
								description:
									"assorted pies, cakes, cupcakes, pastry, donuts, cinnamon rolls, cream puffs, muffins, cookies, brownies, mexican pastry, artisanal breads and more.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Beverages",
						description: "",
						menu_items: [
							{
								name: "Soft Drinks",
								description: "coffee, decaf coffee, hot chocolate, hot tea.",
								pricing: [
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1.5,
							},
							{
								name: "Juice - Orange, Apple, Cranberry",
								description: "",
								pricing: [
									{
										price: 1,
										currency: "USD",
										priceString: "$1.00",
									},
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 1,
							},
							{
								name: "Milk Or Chocolate Milk",
								description: "",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
									{
										price: 1.5,
										currency: "USD",
										priceString: "$1.50",
									},
								],
								price: 2,
							},
							{
								name: "Soft Drinks",
								description:
									"(free refills). coke, diet coke, cherry coke, mello yello, sprite, barq's root beer, fanta orange, lemonade, raspberry iced tea, green iced tea, sweetened or unsweetened iced tea or arnold palmer.",
								pricing: [
									{
										price: 2,
										currency: "USD",
										priceString: "$2.00",
									},
								],
								price: 2,
							},
							{
								name: "Shakes & Malts",
								description: "chocolate, vanilla, strawberry, banana, chocolate banana.",
								pricing: [
									{
										price: 3.25,
										currency: "USD",
										priceString: "$3.25",
									},
								],
								price: 3.25,
							},
							{
								name: "Ice Cream Floats",
								description: "root beer, orange or coke and vanilla ice cream.",
								pricing: [
									{
										price: 2.75,
										currency: "USD",
										priceString: "$2.75",
									},
								],
								price: 2.75,
							},
							{
								name: "Fruit Smoothies",
								description: "strawberry, strawberry banana, mango, banana, tropical.",
								pricing: [
									{
										price: 3,
										currency: "USD",
										priceString: "$3.00",
									},
								],
								price: 3,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-24T17:47:58.354Z",
	},
	{
		restaurant_name: "Taco Bell",
		restaurant_phone: "(608) 825-2960",
		restaurant_website: "http://www.tacobell.com",
		hours: "",
		price_range: "",
		price_range_num: 0,
		restaurant_id: 4317538389248273,
		cuisines: ["Mexican"],
		address: {
			city: "SUN PRAIRIE",
			state: "WI",
			postal_code: "53590",
			street: "2005 Mccoy Rd",
			formatted: "2005 Mccoy Rd SUN PRAIRIE, WI 53590",
		},
		geo: {
			lat: 43.175383,
			lon: -89.248273,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Salads",
						description: "",
						menu_items: [
							{
								name: "Chicken Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with marinated all-white-meat chicken, and loaded with chunky beans, real cheddar cheese, seasoned rice, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips, reduced fat sour cream and served with citrus salsa on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with seasoned ground beef, seasoned rice, real cheddar cheese, hearty beans, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips and reduced fat sour cream. citrus salsa served on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Steak Fiesta Taco Salad",
								description:
									"a crispy tortilla bowl filled with carne asada steak, and loaded with chunky beans, real cheddar cheese, seasoned rice, crisp shredded lettuce, diced ripe tomatoes, red tortilla strips, reduced fat sour cream and served with citrus salsa on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Tacos",
						description: "",
						menu_items: [
							{
								name: "Crispy Potato Soft Taco",
								description:
									"a warm, soft flour tortilla filled with crispy potato bites, pepper jack sauce, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Crunchy Taco",
								description:
									"a crunchy, corn taco, shell filled with seasoned ground beef, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Grilled Steak Soft Taco",
								description:
									"a warm, soft flour tortilla filled with authentic carne asada steak, crisp shredded lettuce, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Soft Taco",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Chicken Soft Taco",
								description:
									"a warm, soft flour tortilla filled with marinated and grilled all-white-meat chicken, crisp shredded lettuce, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchy Taco",
								description:
									"a crunchy, corn taco shell filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Soft Taco Supreme",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, real cheddar cheese, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchy Taco Supreme",
								description:
									"a crunchy, corn taco shell filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, real cheddar cheese, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Soft Taco",
								description:
									"a warm, soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Volcano Taco",
								description:
									"a crunchy red corn tortilla shell, filled with seasoned beef, crisp shredded lettuce, real cheddar cheese and topped off with cheesy molten hot lava sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Double Decker Taco",
								description:
									"a warm, soft flour tortilla spread with hearty beans and wrapped around a crunchy, corn taco shell filled with seasoned ground beef, crisp shredded lettuce, and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Double Decker Taco Supreme",
								description:
									"a warm, soft flour tortilla spread with hearty beans and wrapped around a crunchy corn taco shell filled with seasoned ground beef, real cheddar cheese, crisp shredded lettuce, diced ripe tomatoes and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Steak Soft Taco",
								description:
									"a warm, soft flour tortilla filled with authentic carne asada steak, real cheddar cheese, crisp shredded lettuce, diced ripe tomatoes, and avocado ranch sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Soft Taco",
								description:
									"a warm, soft flour tortilla filled with marinated all-white-meat chicken, topped with crisp shredded lettuce and real cheddar cheese.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Burrito",
						description: "",
						menu_items: [
							{
								name: "Burrito Supreme",
								description:
									"a warm, soft flour tortilla wrapped around seasoned beef, hearty beans, tangy red sauce, crisp shredded lettuce, real cheddar cheese, diced onions, diced ripe tomatoes, and reduced-fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Bean Burrito",
								description:
									"a warm, soft flour tortilla wrapped around hearty beans, tangy red sauce, diced onions, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Burrito Supreme Chicken",
								description:
									"a warm, soft flour, tortilla wrapped around grilled, marinated all-white-meat chicken, hearty beans, tangy red sauce, crisp shredded lettuce, diced onions, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Fresco Burrito Supreme Steak",
								description:
									"a warm, soft flour tortilla wrapped around authentic carne asada steak, hearty beans, tangy red sauce, crisp shredded lettuce, diced onions, diced ripe tomatoes, and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Volcano Burrito",
								description:
									"a warm, soft flour tortilla that's packed with a double portion of seasoned ground beef, seasoned rice, crunchy red tortilla strips, real cheddar cheese, cool reduced-fat sour cream and cheesy, molten hot lava sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "1/2 Lb Combo Burrito",
								description:
									"a warm, soft flour tortilla loaded with a double portion of seasoned ground beef filled with hearty beans, onions, real cheddar cheese, and tangy red sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "1/2 Lb. Cheesy Potato Burrito",
								description:
									"a warm, soft flour tortilla loaded with a double portion of seasoned ground beef and filled with crispy potato bites, warm nacho cheese sauce, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Bean Burrito",
								description:
									"a warm, soft flour tortilla wrapped around hearty beans, real cheddar cheese, tangy red sauce and diced onions.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "New XXL Grilled Stuft Burrito Beef",
								description:
									"the new xxl, grilled stuff burrito is our biggest burrito yet, stuft full of our seasoned beef, a three cheese blend, flavorful seasoned rice, hearty beans, reduced-fat sour cream, chunky guacamole avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Grilled Stuft Burrito Chicken",
								description:
									"the new xxl, grilled stuft burrito is our biggest burrito yet, stuft full of all white-meat-chicken, a three cheese blend, hearty beans, reduced-fat sour cream, chunky guacamole, avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Grilled Stuft Burrito Steak",
								description:
									"the new xxl grilled stuft burrito is our biggest burrito yet, stuft full of grilled, marinated steak, a three cheese blend, flavorful seasoned rice, hearty beans, reduced-fat sour cream, chunky guacamole, avocado ranch and fiesta salsa, wrapped up in a warm flour tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Gorditas",
						description: "",
						menu_items: [
							{
								name: "Gordita Baja",
								description:
									"warm, pillowy flatbread filled with seasoned ground beef, creamy pepper jack sauce, crisp shredded lettuce, a three cheese and blend and fiesta salsa.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Gordita Supreme",
								description:
									"warm, pillow flatbread filled with seasoned ground beef, reduced fat sour cream, crisp shredded lettuce, a three cheese blend and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Gordita Nacho Cheese",
								description:
									"warm, pillowy flatbread filled with seasoned ground beef, warm nacho cheese sauce, crisp shredded lettuce, and diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Nachos",
						description: "",
						menu_items: [
							{
								name: "Volcano Nachos",
								description:
									"crunchy, freshly prepared tortilla chips covered with hearty beans, seasoned ground beef, warm nacho cheese sauce, red tortilla strips, cheesy molten hot lava sauce, jalapenos and topped with reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos Bellgrande",
								description:
									"a large platter of crisp, freshly prepared tortilla chips covered with hearty beans, seasoned ground beef, warm nacho cheese sauce, diced ripe tomatoes, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos Supreme",
								description:
									"a large platter of crisp, freshly prepared daily tortilla chips covered with hearty beans, seasoned beef, warm nacho cheese sauce, diced ripe tomatoes, and reduced-fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cheesy Nachos",
								description: "crisp, freshly prepared tortilla chips covered in warm nacho cheese sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Chalupas",
						description: "",
						menu_items: [
							{
								name: "XXL Chalupa - Beef",
								description:
									"a double portion of premium seasoned beef, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Chalupa - Chicken",
								description:
									"a double* portion of 100% marinated all-white-meat chicken, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell. also available with 100% usda select marinated, grilled steak or premium seasoned beef.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "XXL Chalupa - Steak",
								description:
									"a double portion of 100% usda select marinated, grilled steak, topped with warm nacho cheese sauce, crunchy red strips, crisp lettuce, a delicious three cheese blend, freshly-prepared fiesta salsa, and cool reduced-fat sour cream inside a double-sized chalupa shell. also available with 100% marinated all-white-meat chicken or premium seasoned beef.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "New Bacon Ranch Chicken Flatbread Sandwich",
								description:
									"a warm, soft flatbread layered with 100% marinated all-white-meat chicken, a three cheese blend and topped with bacon ranch sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Original Chicken Flatbread Sandwich",
								description:
									"a warm, soft flatbread layered with 100% marinated all-white-meat chicken, a three cheese blend and topped with creamy chipotle sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Steak Quesadilla",
								description:
									"authentic carne asada steak combined with a three cheese blend and a creamy jalapeno sauce all folded in a freshly toasted tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Quesadilla",
								description:
									"grilled and marinated all-white-meat chicken combined with a three cheese blend and a creamy jalapeno sauce all folded in a freshly toasted tortilla.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Meximelt",
								description:
									"a warm, soft flour tortilla wrapped around seasoned ground beef, a three cheese blend and fiesta salsa, then melted to perfection.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mexican Pizza",
								description:
									"two crisp pizza shells filled with seasoned ground beef, hearty beans and then topped with pizza sauce, a three cheese blend melted to perfection, and topped with diced ripe tomatoes.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cheese Roll-Up",
								description: "a flour tortilla rolled up with a three cheese and blend melted to perfection.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Chicken Taquitos",
								description:
									"a warm, soft flour tortilla wrapped around grilled and marinated all-white-meat chicken and real cheddar cheese, then rolled up tightly and grilled to go. it comes with your choice of three available dips reduced fat sour cream, salsa or guacamole.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Crunchwrap Supreme",
								description:
									"a warm, soft, flour tortilla filled with seasoned beef, warm nacho cheese sauce, a crunchy tostada shell, reduced-fat sour cream, lettuce and tomatoes and then wrapped up and grilled for maximum portability.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Grilled Steak Taquitos",
								description:
									"a warm, flour tortilla wrapped around authentic carne asada steak and real cheddar cheese, then rolled up tightly and grilled to go. it comes with your choice of three available dips reduced fat sour cream, salsa, or guacamole.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Enchirito",
								description:
									"a warm, soft flour tortilla wrapped around seasoned ground beef, hearty beans, diced onions, real cheddar cheese, and tangy red sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Featured",
						description: "",
						menu_items: [
							{
								name: "Chicken Flatbread Sandwich Big Box Meal",
								description:
									"a chicken flatbread sandwich (original or new bacon ranch), burrito supreme, crunchy taco and a medium fountain drink.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Taco 12 Pack",
								description:
									"a chicken flatbread sandwich (original or new bacon ranch), burrito supreme, crunchy taco and a medium fountain drink.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Sides",
						description: "",
						menu_items: [
							{
								name: "Mexican Rice",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Chicken Fiesta Potatoes",
								description: "golden potatoes topped with warm nacho cheese sauce, and reduced fat sour cream.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Pintos N Cheese",
								description: "hearty beans, tangy red sauce, and a three cheese blend.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Nachos",
								description: "crispy, freshly prepared tortilla chips served with warm nacho cheese sauce on the side.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Caramel Apple Empanada",
								description: "a crispy golden pastry pocket filled with chunks of warm apples in creamy caramel sauce.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cinnamon Twists",
								description: "crispy, puffed corn twists, sprinkled with cinnamon and sugar.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
					{
						section_name: "Beverages",
						description: "",
						menu_items: [
							{
								name: "Diet Pepsi",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Pepsi",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mountain Dew Baja Blast",
								description:
									"mountain dew baja blast is only available at taco bell because it was made specialty to go with our great tasting food.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mountain Dew",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Sierra Mist",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Tropicana Fruit Punch",
								description: "",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cherry Creme Frutista Freeze",
								description:
									"a refreshing, frozen blend of bold cherry flavor and smooth vanilla flavor, swirled together to make one sweet treat. available in two thirst-quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Strawberry Frutista Freeze",
								description:
									"a refreshing, frozen blend of bold cherry flavor and smooth vanilla flavor, swirled together to make one sweet treat, available in two thirst-quenching sizes 16 oz, 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Mango Strawberry Frutista Freeze",
								description:
									"a smooth, frozen mango-flavored drink topped with real strawberries. now available in two thirst-quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Classic Limeade Sparkler",
								description:
									"a refreshing mix of cool lemon-lime soda and real lime juice poured over ice and garnished with a real lime wedge, available in two thirst quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
							{
								name: "Cherry Limeade Sparkler",
								description:
									"a refreshing mix of cool lemon-lime soda, real lime juice and natural cherry flavor poured lime wedge, available in two thirst quenching sizes 16 oz and 20 oz.",
								pricing: [
									{
										price: 0,
										currency: "USD",
										priceString: "N/A",
									},
								],
								price: 0,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-29T05:38:49.861Z",
	},
	{
		restaurant_name: "Senor Peppers",
		restaurant_phone: "(608) 835-7930",
		restaurant_website: "https://www.snrpeppers.com/menu/",
		hours: "",
		price_range: "$",
		price_range_num: 1,
		restaurant_id: 4292571089384250,
		cuisines: ["Mexican"],
		address: {
			city: "Oregon",
			state: "WI",
			postal_code: "53575",
			street: "108 Janesville Street",
			formatted: "108 Janesville Street Oregon, WI 53575",
		},
		geo: {
			lat: 42.92571,
			lon: -89.38425,
		},
		menus: [
			{
				menu_name: "Main",
				menu_sections: [
					{
						section_name: "Featured Appetizers",
						description: "",
						menu_items: [
							{
								name: "Guacamole Mazatlan",
								description: "Freshly smashed avocado with diced onions and tomatoes.",
								pricing: [
									{
										price: 6.25,
										currency: "USD",
										priceString: "$6.25",
									},
								],
								price: 6.25,
							},
							{
								name: "Big Cheese Dip",
								description: "Our in-house made a melty-white-cheese dip with a slight kick.",
								pricing: [
									{
										price: 4.25,
										currency: "USD",
										priceString: "$4.25",
									},
								],
								price: 4.25,
							},
							{
								name: "Cheese and Chorizo",
								description: "Melted mozzarella cheese and spicy Mexican sausage.",
								pricing: [
									{
										price: 6.75,
										currency: "USD",
										priceString: "$6.75",
									},
								],
								price: 6.75,
							},
						],
					},
					{
						section_name: "Popular Dessert",
						description: "",
						menu_items: [
							{
								name: "Chocolate Flan",
								description: "Chocolate cake and custard. Yum.",
								pricing: [
									{
										price: 4.99,
										currency: "USD",
										priceString: "$4.99",
									},
								],
								price: 4.99,
							},
							{
								name: "Sopapilla",
								description: "Honey, ice cream, and deep-fried.",
								pricing: [
									{
										price: 3.99,
										currency: "USD",
										priceString: "$3.99",
									},
								],
								price: 3.99,
							},
						],
					},
					{
						section_name: "Dinner Spotlight",
						description: "",
						menu_items: [
							{
								name: "Mazatlan's Famous",
								description: "Please ask your server for details. Great tastes only.",
								pricing: [
									{
										price: 11.99,
										currency: "USD",
										priceString: "$11.99",
									},
								],
								price: 11.99,
							},
							{
								name: "Fajitas",
								description: "Just how you like 'em starting at just.",
								pricing: [
									{
										price: 14.99,
										currency: "USD",
										priceString: "$14.99",
									},
								],
								price: 14.99,
							},
							{
								name: "Chimichangas",
								description: "Everything is better mini starting at just.",
								pricing: [
									{
										price: 10.99,
										currency: "USD",
										priceString: "$10.99",
									},
								],
								price: 10.99,
							},
						],
					},
				],
			},
		],
		last_updated: "2020-12-24T17:47:58.320Z",
	},
]; **/
