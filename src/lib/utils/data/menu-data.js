export const menuData = {
	soups: {
		title: 'Soups',
		thaiTitle: 'ซุป',
		imagePath: 'soups',
		mobilePath: 'm-soups',
		items: [
			{
				name: 'Single or Regular Sized Soups',
				isSubheader: true,
				gP1: 'Single',
				gP2: 'Regular'
			},
			{
				name: '1. Tom Yum',
				description:
					'Hot & sour soup with white button mushrooms, tomatoes, chopped lemongrass and Thai herbs',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				extras: 'With Gai - Chicken',
				p1: '6.75',
				p2: '13.50'
			},
			{
				extras: 'With Goong - Prawns',
				p1: '6.95',
				p2: '13.95'
			},
			{
				extras: 'With Phak - Seasonal Vegetables & Tofu',
				p1: '6.75',
				p2: '13.50'
			},
			{
				extras: 'With Ta-Lay - Seafood',
				p1: '9.50',
				p2: '16.50'
			},
			{
				name: '2. Tom Kah',
				description:
					'Hot & sour soup with white button mushrooms, chopped lemongrass, Thai herbs and coconut milk',
				tag: 'GF',
				medium: 'medium'
			},
			{
				extras: 'With Gai - Chicken',
				p1: '6.50',
				p2: '12.95'
			},
			{
				extras: 'With Goong - Prawns',
				p1: '7.25',
				p2: '13.50'
			},
			{
				extras: 'With Phak - Seasonal Vegetables & Tofu',
				p1: '6.50',
				p2: '12.95'
			},
			{
				extras: 'With Ta-Lay - Seafood',
				p1: '9.50',
				p2: '16.95'
			},
			{
				name: 'Single Sized Soups',
				isSubheader: true
			},
			{
				name: '3. Kaeng Jeed Won San',
				description: 'Ground chicken, glass noodles, tofu, tomatoes & assorted vegetables',
				price: '12.95',
				tag: 'GF'
			}
		]
	},
	appetizers: {
		title: 'Appetizers',
		thaiTitle: 'อาหารเรียกน้ำย่อย',
		imagePath: 'appetizers',
		mobilePath: 'm-appetizers',
		items: [
			{
				name: '4. Combo Appetizer',
				description: 'Lamb satay, chicken satay, chicken wings and Thai pork spring rolls',
				price: '24.50'
			},
			{
				name: '5. Seafood Combo',
				description:
					'Shrimp cakes, fish cakes, butterfly prawns, prawn satay and deep-fried calamari',
				price: '33.50',
				mild: 'mild'
			},
			{
				name: '6. Deep-Fried Tofu',
				description: 'Served with homemade peanut sauce',
				price: '8.50',
				tag: 'GF'
			},
			{
				name: '7. Spring Rolls',
				description: 'Thai pork spring rolls or vegetarian spring rolls (4 pieces)',
				price: '9.50'
			},
			{
				name: '8. Thai Satay (4 skewers)'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork',
				price: '12.50'
			},
			{
				extras: '(Choose 1) House Special Lamb or Prawns',
				price: '14.50'
			},
			{
				name: '9. Tod Mun Pla',
				description: 'Homemade fish cakes',
				price: '7.50'
			},
			{
				name: '10. Tod Mun Goong',
				description: 'Homemade shrimp cakes',
				price: '8.95'
			},
			{
				name: '11. Deep-Fried Calamari',
				description: 'Served with spicy Thai chilli lime sauce',
				price: '10.95',
				mild: 'mild'
			},
			{
				name: '12. Deep-Fried Chicken Wings',
				description: 'Served with a sweet and spicy Thai dip',
				price: '11.95'
			},
			{
				name: '13. Butterfly Prawns',
				description: 'Served with spicy Thai chilli lime sauce',
				price: '11.95',
				mild: 'mild'
			},
			{
				name: '14. Thai Lettuce Wraps',
				description: 'Chilli, garlic, onions, house green basil'
			},
			{
				extras: '(Choose 1) Minced Chicken, Minced Beef, or Tofu',
				price: '13.95'
			},
			{
				extras: '(Choose 1) Minced Prawns or Duck',
				price: '15.50'
			},
			{
				name: '15. Traditional Mee-Krob ',
				description: 'Crispy rice vermicelli tossed with tofu and shrimps',
				price: '9.95',
				tag: 'GF'
			}
		]
	},
	salad: {
		title: 'Salads',
		thaiTitle: 'สลัด',
		imagePath: 'salads',
		mobilePath: 'm-salads',
		items: [
			{
				name: '16. Som Tum',
				description:
					"Seasonal green papaya, garlic, tomatoes, roasted peanuts, lime juice, bird's eye chilli",
				price: '12.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '17. Yum Woon San (Salad Lettuce Wrap)',
				description:
					"Glass noodles, minced chicken, shrimps, shallots, mint, lime juice, bird's eye chilli",
				price: '13.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '18. Yum Ta-Lay',
				description:
					"Shrimp, bay scallops and squid tossed with fresh lime, fish sauce and bird's eye chilli",
				price: '14.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '19. Pla Goong',
				description:
					'Spicy tiger prawns, lemongrass, shallots, fish sauce, lime juice and Thai spices',
				price: '14.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '20. Yum Pla Meuk',
				description: "Squids with lime juice, shallots, fish sauce and bird's eye chilli",
				price: '14.50',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '21. Yum Neuua',
				description: 'Strip loin beef, lime juice, onions, scallions and Thai chilli',
				price: '14.50',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '22. Larb',
				description: 'Minced chicken or beef, with shallots, lime juice and roasted chilli',
				price: '13.50',
				tag: 'GF',
				medium: 'medium'
			},
			{
				name: '23. Veggie Salad',
				description: 'Soft tofu, lettuce, cucumbers and homemade peanut sauce',
				price: '12.95',
				tag: 'GF',
				mild: 'mild'
			}
		]
	},
	curry: {
		title: 'Curry',
		thaiTitle: 'แกง',
		imagePath: 'curry',
		mobilePath: 'm-curry',
		items: [
			{
				name: 'Curry Options',
				isSubheader: true
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '18.50'
			},
			{
				extras: '(Choose 1) Seafood Hot Pot or Prawns',
				price: '21.25'
			},
			{
				name: '24. Gaaeng Dang',
				description: 'Red curry paste, bamboo shoots, basil and coconut milk',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '25. Gaaeng Ka-Ri',
				description: 'Yellow curry paste, carrots, potatoes, pineapples and coconut milk',
				tag: 'GF',
				medium: 'medium'
			},
			{
				name: '26. Gaaeng Kiew Waan',
				description: 'Green curry paste, aubergine, green beans, basil and coconut milk',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '27. Gaaeng Pha Naeng',
				description:
					'Pha Naeng thick curry paste, kaffir lime leaves, onions, basil and coconut milk',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '28. Gaaeng Massaman',
				description: 'Sweet curry with roasted ground peanuts, potatoes, onions and coconut milk',
				tag: 'GF',
				medium: 'medium'
			}
		]
	},
	'stir-fried': {
		title: 'Stir-Fried',
		thaiTitle: 'ผัด',
		imagePath: 'stir-fried',
		mobilePath: 'm-stir-fried',
		items: [
			{
				name: 'Stir-Fried Options',
				isSubheader: true
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '18.50'
			},
			{
				extras: '(Choose 1) Tiger Prawns or Squid',
				price: '21.25'
			},
			{
				name: '29. Phat Phrik Groong Thaehp',
				description: 'Wild Bangkok Delight',
				hot: 'Hot'
			},
			{
				name: '30. Phat Bai Horapa',
				description: 'Stir-fried with bird’s eye Thai chilli, wild garlic, onions and green basil',
				veryHot: 'veryHot'
			},
			{
				name: '31. Phat Bai Ga-Phrao',
				description: 'Stir-fried with chilli paste, onions, white button mushrooms and holy basil',

				hot: 'Hot'
			},
			{
				name: '32. Phat Nahm Phrik Phao',
				description: 'Thai chilli paste with peppers, onions, celery and holy basil',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '33. Phat Ma Kheuua Muaang',
				description:
					'Stir-fried with aubergine, bird’s eye Thai chilli, wild garlic and holy basil',
				hot: 'Hot'
			},
			{
				name: '34. Phat Khing',
				description:
					'Stir-fried with white button mushrooms, onions, chopped ginger and white pepper'
			},
			{
				name: '35. Phat Namman Haawy',
				description: 'Stir-fried with snow peas, pineapples and celery in Thai Black Bean sauce'
			},
			{
				name: '36. Phat Bpriaao Waan',
				description: 'Sweet and sour stir-fried with cucumbers, pineapples and tomatoes'
			},
			{
				name: '37. Phat Gra Thiiam',
				description: 'Stir-fried with spinach and onions in marinated white pepper'
			},
			{
				name: '38. Phat Ruaam Mit',
				description:
					'Stir-fried seasonal vegetables and mushrooms with your favourite sauce (Black Bean, Thai Peanut Sauce, Garlic, Oyster or Wild Bangkok Delight)',
				tag: 'GF'
			}
		]
	},
	noodles: {
		title: 'Noodles',
		thaiTitle: 'ก๋วยเตี๋ยว',
		imagePath: 'noodles',
		mobilePath: 'm-noodles',
		items: [
			{
				name: '39. Traditional Phat Thai',
				description:
					'Rice noodles or egg noodles, with shrimps and bay scallops, roasted peanuts, egg, bean sprouts, scallions and lime, with a choice of tamarind sauce or tomato sauce',
				tag: 'GF',
				mild: 'mild'
			},
			{
				extras: '(Choose 1) Tamarind Sauce or Tamarind Sauce',
				price: '16.50'
			},
			{
				name: '40. Phat See-Iw',
				description: 'Strip loin beef, lime juice, onions, scallions and Thai chilli',
				price: '16.50'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '16.50'
			},
			{
				extras: '(Choose 1) Seafood or Prawns',
				price: '17.95'
			},
			{
				name: '41. Mee-Krob Song Cuang',
				description:
					'Stir-fried rice noodles with eggs, cabbage, seasonal vegetables, in aged dark Thai soy-sauce and white peppercorn',
				tag: 'GF'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '16.50'
			},
			{
				extras: '(Choose 1) Seafood or Prawns',
				price: '17.95'
			},
			{
				name: '42. Phat Kee-Meow',
				description: 'Stir-fried rice noodles with house basil, onions, in chilli paste',
				price: '16.50',
				extras: 'Add seafood or prawns for | 1.45',
				hot: 'Hot'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '16.50'
			},
			{
				extras: '(Choose 1) Seafood or Prawns',
				price: '17.95'
			},
			{
				name: '43. Bamei Rommitr',
				description: 'Stir-fried egg noodles with cabbage, onions and seasonal vegetables',
				price: '16.50',
				extras: 'Add seafood or prawns for | 1.45'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '16.50'
			},
			{
				extras: '(Choose 1) Seafood or Prawns',
				price: '17.95'
			}
		]
	},
	vegetables: {
		title: 'Vegetables',
		thaiTitle: 'ผัก',
		imagePath: 'vegetables',
		mobilePath: 'm-vegetables',
		items: [
			{
				name: '44. Tofu Phat Bai Ga-Phrao',
				description:
					'Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste and holy basil',
				price: '17.95',
				hot: 'Hot'
			},
			{
				name: '45. Phat Phak Ruaam Mit',
				description:
					'Stir-fried seasonal vegetables, white button mushrooms and tofu with your favourite sauce (Black Bean, Thai Peanut Sauce, Garlic, Oyster or Wild Bangkok Delight)',
				price: '17.95',
				tag: 'GF'
			},
			{
				name: '46. Ruaam Mit Phat Bai Horapa',
				description:
					'Seasonal vegetables, mushrooms, pressed tofu, bean sprouts, with house basil and garlic',
				price: '17.95',
				tag: 'GF'
			},
			{
				name: '47. Thuaa Phat Phrik Khing',
				description: 'Stir-fried green beans, kaffir lime leaves, basil, in House Spicy Sauce',
				price: '17.95',
				hot: 'Hot'
			}
		]
	},
	rice: {
		title: 'Rice',
		thaiTitle: 'ข้าว',
		imagePath: 'rice',
		mobilePath: 'm-rice',
		items: [
			{
				name: 'Fresh Fruit Fried Rice Options',
				isSubheader: true
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork, Vegetarian',
				price: '18.50'
			},
			{
				extras: '(Choose 1) Seafood or Prawns',
				price: '20.50'
			},
			{
				name: '48. Khao Phat Ma Phraao Soht',
				description: 'Traditional fresh young coconut fried rice',
				tag: 'GF'
			},
			{
				name: '49. Khao Phat Sap-Bpa-Roht',
				description:
					'Traditional fresh pineapple fried rice topped with roasted peanuts, organic raisins and pork floss',
				tag: 'GF'
			},
			{
				name: 'Fried Rice',
				isSubheader: true
			},
			{
				name: '50. Khao Phat Phong Ka-Ri',
				description: 'Yellow curry powder fried rice with turmeric',
				tag: 'GF',
				mild: 'mild'
			},
			{
				name: '51. Khao Phat Bai Ga-Phrao',
				description: 'Fried rice with wild garlic, fresh Thai chilli, onions and Thai holy basil',
				tag: 'GF',
				veryHot: 'veryHot'
			},
			{
				name: '52. Khao Phat Nahm Phrik Phao',
				description: 'Thai chilli paste fried rice with onions and basil',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: '53. Khao Phat Prik Gra-Thiiam',
				description: 'Chilli pepper fried rice with garlic',
				tag: 'GF'
			},
			{
				name: 'Steamed Rice',
				isSubheader: true
			},
			{
				name: '54. Khao Suay Ga-Thi',
				description: 'Steamed Thai Jasmine rice with coconut milk (per person)',
				price: '2.50',
				tag: 'GF'
			}
		]
	},
	specialties: {
		title: 'Green Basil Specialties',
		thaiTitle: 'พิเศษ',
		imagePath: 'specialties',
		mobilePath: 'm-specialties',
		items: [
			{
				name: 'G1. Haawy Maaeng Phuu Ob Maaw Din',
				description: 'Mussels, white wine, butter, lemongrass and basil',
				price: '18.95',
				tag: 'GF'
			},
			{
				name: 'G2. Haawy Lai Phat Phrik Phao',
				description: 'Stir-fried manila clams, hot chilli paste, onions and basil',
				price: '17.95',
				hot: 'Hot'
			},
			{
				name: 'G3. Goong Ob Woon San',
				description: 'Tiger prawns, glass noodles, garlic butter braised celery and basil',
				price: '21.95',
				mild: 'mild'
			},
			{
				name: 'G4. Bpuu',
				description:
					'Live Dungeness crab with your favourite sauce (Yellow Curry, Hot Chilli Paste, Creamy Garlic Butter, Green Basil’s Chef Sauce or Wild Bangkok Delight)',
				price: 'Market Price',
				tag: 'GF'
			},
			{
				name: 'G5. Bpuu Ob Woon San',
				description: 'Live Dungeness crab, glass noodles, garlic butter braised celery and basil',
				price: 'Market Price',
				mild: 'mild'
			},
			{
				name: 'G6. Bplaa Laad Phrik (Fish) ',
				description: 'Steamed Thai Jasmine rice with coconut milk (per person)',
				tag: 'GF',
				medium: 'medium'
			},
			{
				extras:
					'A.) Deep-fried mullet fish, garlic, Thai spices, fresh lime, sour curry paste in special hot pot',
				price: '27.95'
			},
			{
				extras:
					'B.) Deep-fried Tilapia – Three flavoured sauce – Homemade spicy sauce – Homemade curry sauce',
				price: '21.50'
			},
			{
				extras: 'C.) Sweet and sour fresh cod with tomatoes, pineapples and cucumbers',
				price: '18.95'
			},
			{
				name: 'G7. Ta-Lay Sa Meat',
				description: 'Stir-Fried Seafood Combination',
				price: '21.95',
				hot: 'Hot'
			},
			{
				extras:
					'A.) Tiger prawns, manila clams, New Zealand mussels, bay scallops and squids in Green Basil’s Chef Sauce',
				price: '21.95'
			},
			{
				extras:
					'B.) Tiger prawns, manila clams, New Zealand mussels bay scallops and squids in Green Basil’s House Sauce',
				price: '21.95'
			},
			{
				name: 'G8. Phat Ped Ta-Lay',
				description:
					'Sizzling seafood combination with house spicy sauce served on cast iron hot plate',
				price: '21.95',
				hot: 'Hot'
			},
			{
				name: 'G9. Phat Met Ma-Muang Him Ma-Phan',
				description: 'Stir-fried cashew nuts with onions, peppers and celery in house chilli paste',
				hot: 'Hot'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork or Seasonal Vegetables',
				price: '19.50'
			},
			{
				extras: '(Choose 1) Tiger Prawns',
				price: '21.95'
			},
			{
				name: 'G10. Gaaeng Goong Sap-Bpa-Roht',
				description: 'Tiger prawns with red curry paste, fresh pineapples and coconut milk',
				price: '21.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: 'G11. Ma Kheuua Yaao',
				description: 'Aubergine stuffed with minced shrimp in chilli black bean sauce',
				price: '17.95',
				medium: 'medium'
			},
			{
				name: 'G12. Thuaa Phat Phrik Khing',
				description: 'Green beans with kaffir lime leaves, holy basil and house spicy sauce',
				hot: 'Hot'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork or Seasonal Vegetables',
				price: '19.50'
			},
			{
				extras: '(Choose 1) Tiger Prawns, Squid, or Fresh Cod',
				price: '21.95'
			},
			{
				name: 'G13. Neuua Gae Gaaeng Pha Naeng',
				description:
					'Pha Naeng thick curry braised New Zealand lamb shoulder, kaffir lime leaves, star anise, lychee, onions and basil',
				price: '21.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: 'G14. Gaaeng Bpet Yaang',
				description: 'Roast duck with red curry paste, pineapples, tomatoes and coconut milk',
				price: '19.95',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				name: 'G15. Bpet Phat Bai Ga-Phrao',
				description:
					'Stir-fried roasted duck with chilli paste, white button mushrooms, onions, peppers and holy basil',
				price: '18.95',
				hot: 'Hot'
			},
			{
				name: 'G16. Gai Yaang',
				description: 'Boneless BBQ chicken marinated in lemongrass, garlic and Thai spices',
				price: '19.95'
			},

			{
				name: 'G17. Haw Mok Ma Phraao',
				description:
					'Traditional slow-cooked red curry paste in coconut milk and tender young coconut meat',
				tag: 'GF',
				hot: 'Hot'
			},
			{
				extras: '(Choose 1) Chicken, Beef, Pork or Seasonal Vegetables',
				price: '19.50'
			},
			{
				extras: '(Choose 1) Tiger Prawns',
				price: '21.95'
			},
			{
				name: 'G18. Para Ram Gai',
				description: 'Chicken with homemade peanut sauce served on a bed of lettuce and spinach',
				price: '18.95',
				mild: 'mild'
			},
			{
				name: 'G19. Goong Katiem Phrik Tai',
				description:
					'Tiger prawns marinated with garlic and white peppercorns with snow peas and celery',
				price: '21.95'
			},
			{
				name: 'G20. Goong Phat Lhao Nam',
				description: 'Red wine drunken tiger prawns with ginger and Thai chillies',
				price: '21.95',
				tag: 'GF',
				medium: 'medium'
			}
		]
	},
	desserts: {
		title: 'Desserts',
		thaiTitle: 'ขนม',
		imagePath: 'desserts',
		mobilePath: 'm-desserts',
		items: [
			{
				name: 'Single Scoop',
				isSubheader: true
			},
			{
				name: 'Fresh Mango Sticky Rice (Seasonal)',
				price: '7'
			},
			{
				name: 'Brown Sticky Rice with Vanilla Ice-Cream',
				price: '7'
			},
			{
				name: 'Deep-Fried Banana with Vanilla Ice-Cream',
				price: '7'
			},
			{
				name: 'Green Tea Ice-Cream',
				price: '6'
			},
			{
				name: 'Multi-Scoop',
				isSubheader: true,
				gP1: 'Single',
				gP2: 'Double'
			},
			{
				name: 'Mango Ice-Cream',
				p1: '4',
				p2: '6'
			}
		]
	},
	combos: {
		title: 'Combos',
		thaiTitle: 'ชุดคอมโบ',
		imagePath: 'combinations',
		mobilePath: 'm-combinations',
		items: [
			{
				name: 'Combo for Two',
				description:
					'-Grilled garlic prawn satay\n-Thai pork spring rolls\n-Stir-fried chicken with snow peas, pineapples and celery in Thai Black Bean sauce\n-Tiger prawns in red curry paste, fresh pineapples, basil and coconut milk\n-Steamed Thai Milagrosa jasmine rice with coconut milk\n-Daily desserts',
				price: '56'
			},
			{
				name: 'Combo for Two Deluxe',
				description:
					'Tom Kah Gai Soup\n-Grilled garlic prawn satay\n-Thai pork spring rolls\n-Traditional slow-cooked chicken in aromatic red curry and tender coconut flesh\n-Tiger prawns marinated in garlic and ground white pepper with snow peas\n-Steamed Thai Milagrosa jasmine rice with coconut milk\n-Deep-fried banana with vanilla ice-cream',
				price: '65'
			},
			{
				name: 'Combo for Four',
				description:
					'Tom Yum Ta-Lay Soup\n-Thai pork spring rolls\n-Grilled chicken satay with homemade peanut sauce\n-Traditional slow-cooked chicken in aromatic red curry and tender coconut flesh\n-Sweet and sour fresh cod\n-Tiger prawns stir-fried with green beans, kaffir lime leaves, holy basil in house spicy sauce\n-Steamed Thai Milagrosa jasmine rice with coconut milk\n-Daily desserts',
				price: '108'
			},
			{
				name: 'Combo for Six',
				description:
					'Beef lettuce wrap with chilli and basilSeafood combo appetizer\n-Stir-fried chicken with cashew nuts, peppers, onions and celery in house chilli paste\n-Stir-fried pork with white button mushrooms, onions, chopped ginger and ground white peppercorns\n-Tiger prawns in green curry paste, aubergines, green beans, basil and coconut milk\n-Phat Thai rice noodles with shrimps and bay scallops, roasted ground peanuts, scallions, bean sprouts in tamarind sauce\n-Steamed Thai Milagrosa jasmine rice with coconut milk\n-Daily desserts',
				price: '156'
			},
			{
				name: 'Combo for Eight',
				description:
					'Deep-fried calamari\n-Grilled chicken satay with Thai peanut sauce\n-Thai pork spring rolls\n-Tiger prawns in traditional slow-cooked aromatic red curry paste with tender coconut flesh\n-Chicken with homemade peanut sauce served on a bed of lettuce and spinach\n-Stir-fried beef with spinach and onions in marinated garlic and white pepper\n-Phat Thai rice noodles with shrimps and bay scallops, roasted ground peanuts, scallions, bean sprouts in tamarind sauce\n-Roast duck stir-fried with chilli paste, white button mushrooms, onions and holy basil\n-Deep-fried Tilapia with signature Three Flavoured Sauce\n-Tiger prawns stir-fried with green beans, kaffir lime leaves, holy basil in house spicy sauce\n-Steamed Thai Milagrosa jasmine rice with coconut milk\n-Daily desserts',
				price: '208'
			}
		]
	},
	'happy-hour': {
		title: 'Happy Hour',
		thaiTitle: 'สลัด',
		sectionDetails: 'Every day from 3pm – 6pm & 9pm – close (dine in only)',
		imagePath: 'happy-hour',
		mobilePath: 'm-happy-hour',
		items: [
			{
				name: 'Food',
				isSubheader: true
			},
			{
				name: 'Thai Fish Cakes',
				price: '6'
			},
			{
				name: 'Deep-Fried Tofu',
				price: '6'
			},
			{
				name: 'Deep-Fried Vegetarian Spring Rolls',
				price: '8'
			},
			{
				name: 'Crispy Chicken Wings',
				price: '10'
			},
			{
				name: 'Grilled Thai Chicken Satay',
				price: '10'
			},
			{
				name: 'Tom Yum Gai Soup',
				price: '10'
			},
			{
				name: 'Grilled Beef Salad',
				price: '11'
			},
			{
				name: 'Draught Beer',
				isSubheader: true
			},
			{
				name: 'Granville Island Northwest Pale Ale',
				description: 'Pale ale, Big Citrus, floral aroma, crisp',
				price: '5'
			},
			{
				name: 'Deep-Fried Vegetarian Spring Rolls',
				description: 'Crisp, dry Karakuchi taste, clean finish',
				price: '6'
			},
			{
				name: 'Highballs - 1oz',
				isSubheader: true
			},
			{
				name: 'Absolut',
				description: 'Vodka',
				price: '3.50'
			},
			{
				name: 'Tanqueray',
				description: 'Gin',
				price: '3.50'
			},
			{
				name: 'Jim Beam',
				description: 'Bourbon',
				price: '3.50'
			},
			{
				name: 'Havana Club Year',
				description: 'Rum',
				price: '3.50'
			},
			{
				name: 'Featured Cocktails - 6oz',
				isSubheader: true
			},
			{
				name: 'Americano',
				description: 'Campari, Cinzano Rosso, club soda',
				price: '7'
			},
			{
				name: 'Party Crasher',
				description: 'Alizé Red Passion, Absolut Vodka, fresh lime',
				price: '7'
			},
			{
				name: 'Moscow Mule',
				description: 'Absolut Vodka, Fever Tree Ginger Beer, fresh lime',
				price: '7'
			},
			{
				name: 'Wine - 6oz',
				isSubheader: true
			},
			{
				name: 'Sur Andino 1969',
				description: 'Merlot | Buin, Chile',
				price: '7'
			},
			{
				name: 'Mt. Dawson',
				description: 'Cabernet Sauvignon | Okanagan Valley, BC',
				price: '7'
			},
			{
				name: 'Copper Moon',
				description: 'Shiraz | Okanagan Valley, BC',
				price: '7'
			},
			{
				name: 'Viña Maipo',
				description: 'Sauvignon Blanc | Central Valley, Chile',
				price: '7'
			},
			{
				name: 'Spring Rock',
				description: 'Chardonnay | South Australia',
				price: '7'
			}
		]
	},
	ctsd: {
		title: 'Coffee, Tea & Soft Drinks',
		thaiTitle: 'กาแฟและชาและน้ำอัดลม',
		sHead: 'Coffee & Tea',
		imagePath: 'ctsd',
		mobilePath: 'm-ctsd',
		items: [
			{
				name: 'Coffee & Tea',
				isSubheader: true
			},
			{
				name: 'Java Club Arabica Coffee – Regular or Decaf',
				price: '6',
				extras: 'Add Bailey’s Irish Cream | 3'
			},
			{
				name: 'Jasmine Green Tea, English Breakfast, Earl Grey, Orange Pekoe',
				description: '',
				price: '3'
			},
			{
				name: 'Iced Tea',
				description: '',
				price: '4'
			},
			{
				name: 'Juices',
				isSubheader: true
			},
			{
				name: 'Orange, Apple, Pineapple, Cranberry, Mango, Lychee',
				description: '',
				price: '4'
			},
			{
				name: 'Fresh Young Coconut Juice',
				description: '',
				price: '7'
			},
			{
				name: 'Sodas & Bottled Beverages',
				isSubheader: true
			},
			{
				name: 'Coke, Diet Coke, Coke Zero',
				description: '',
				price: '4'
			},
			{
				name: 'Sprite, Ginger Ale, Tonic Water, Club Soda',
				description: '',
				price: '4'
			},
			{
				name: 'A&W® Root Beer',
				description: '',
				price: '4'
			},
			{
				name: 'Red Bull',
				description: '',
				price: '5'
			},
			{
				name: 'Fever Tree Ginger Beer',
				description: '– London, UK',
				price: '5'
			},
			{
				name: 'San Pellegrino Carbonated Natural Mineral Water',
				description: '– Bergamo, Italy',
				price: '4.75'
			},
			{
				name: 'Fiji Spring Water',
				description: '– Yaqara, Fiji',
				price: '3.25'
			}
		]
	},
	'non-spirited': {
		title: 'Non-Spirited',
		thaiTitle: 'ไม่มีจิตวิญญาณ',
		imagePath: 'non-spirited',
		mobilePath: 'm-non-spirited',
		items: [
			{
				name: 'Shirley Temple',
				description: 'Ginger ale, lemon, lime, cherry grenadine, maraschino cherry',
				price: '5'
			},
			{
				name: 'Roy Rogers',
				description: 'Coca-Cola®, cherry syrup, grenadine',
				price: '5'
			},
			{
				name: 'Stumbling Jade',
				description: 'Fresh lime, lime cordial, lemon, melon syrup, club soda',
				price: '6'
			},
			{
				name: 'Here Comes the Sun',
				description: 'Mango, lime, wild strawberry confiture, club soda',
				price: '6'
			},
			{
				name: 'Pineapple Cobbler',
				description: 'Strawberry, pineapple, lime, lemon-lime soda',
				price: '6'
			},
			{
				name: 'Virgin Mary',
				description: 'Tomato juice, lime, worcestershire, tabasco, celery, black pepper',
				price: '6'
			},
			{
				name: 'Virgin Strawberry Margarita',
				description: 'Strawberries, pineapple, fresh lime, lime cordial',
				price: '6'
			},
			{
				name: 'Virgin Mango Colada',
				description: 'Mango, crème de coco, half & half, coconut milk',
				price: '6'
			},
			{
				name: 'Royal Thai',
				description: 'Lychee, coconut milk, half & half, crème de coco',
				price: '6',
				extras: 'Add Soho lychee liqueur | 3'
			},
			{
				name: 'กาแฟเย็น (kafæ yen) aka Thai Iced – Coffee',
				description: 'Espresso, condensed milk, half & half',
				price: '6',
				extras: 'Add Bailey’s Irish Cream | 3'
			},
			{
				name: 'ชาไทย (cha yen) aka Thai Iced – Tea',
				description: 'Black tea, star anise, cloves, palm sugar syrup, half & half',
				price: '6',
				extras: 'Add Bailey’s Irish Cream | 3'
			}
		]
	},
	'signature-cocktails': {
		title: 'Signature Cocktails',
		thaiTitle: 'ซิกเนเจอร์ค็อกเทล',
		imagePath: 'signature-cocktails',
		mobilePath: 'm-signature-cocktails',
		items: [
			{
				name: 'The Long Thailand Iced Tea (3 oz)',
				description:
					'Marquis de Villard V.S.O.P., Havana Club Añejo Reserva, Crown Royal, honey, black tea, condensed milk, palm sugar syrup, club soda, lemon',
				price: '14'
			},
			{
				name: 'Pattaya Delight (3 oz)',
				description:
					'Havana Club Añejo Reserva, Havana Club 3 year, Malibu coconut rum, blue Curaçao, mango, crème de coco',
				price: '12.75'
			},
			{
				name: 'Broken Skull Margarita (5 oz)',
				description:
					'Jose Cuervo Tradicional Resposado, Cointreau, Grand Marnier Cordon Rouge, lime juice, celery salt',
				price: '22'
			},
			{
				name: 'Mai Tai (3 oz)',
				description:
					'Havana Club Añejo Reserva, Malibu coconut rum, Cointreau, Disaronno Amaretto, orange, pineapple, lime juice, grenadine, palm sugar',
				price: '14'
			},
			{
				name: 'Cloud Nine (2.25oz)',
				description:
					'Grey Goose l’orange, Stolichnaya crushed mango, Alizé gold passion, mango, grenadine',
				price: '14'
			},
			{
				name: 'Green Basil (2.25oz)',
				description:
					'Belvedere vodka, St-Germain elderflower, melon liqueur, lime cordial, lime juice, holy basil',
				price: '13.75'
			},
			{
				name: 'Marina Bay Street Circuit (2 oz)',
				description:
					'Grey Goose cherry noir, Alizé red passion, cranberry, mango, lime juice, grenadine',
				price: '13.50'
			},
			{
				name: 'Cosmopolitan de l’Orange (2 oz)',
				description: 'Grey Goose l’orange, Cointreau, cranberry, fresh lime',
				price: '14'
			},
			{
				name: 'Bolan (3 oz)',
				description: 'Jim Beam bourbon, palm sugar, angostura bitters, orange, lychee',
				price: '14'
			},
			{
				name: 'In the Night (3 oz)',
				description:
					'Cîroc pineapple, Stolichnaya crushed mango, Malibu coconut rum, Blue Curaçao, pineapple, mango, crème de coco',
				price: '14.50'
			},
			{
				name: 'Blue Hawaii (3 oz)',
				description:
					'Malibu coconut rum, Havana Club 3 Year, Alizé blue passion, Blue Curaçao, pineapple, crème de coco',
				price: '13.50'
			},
			{
				name: 'Lychee Paradise (2.25oz)',
				description: 'Grey Goose, St.Germain elderflower, Soho lychee, lychee juice',
				price: '13.75'
			},
			{
				name: 'El Clássico (2 oz)',
				description: 'Jose Cuervo Tradicional Resposado, Cointreau, lime juice, celery salt',
				price: '11'
			},
			{
				name: 'Chao Phraya Daiquiri (2 oz)',
				description: 'Alizé gold passion, Havana Club Añejo Reserva, lime juice, honey',
				price: '12.50'
			},
			{
				name: 'Pattaya Long Island (3.50 oz)',
				description:
					'Havana Club 3 year, Malibu coconut rum, Absolut Vodka, Tanqueray dry gin, Jose Cuervo Tradicional Resposado, Cointreau, lime juice, Coca Cola™',
				price: '14.75'
			},
			{
				name: 'Singapore Sling (2.50 oz)',
				description:
					'Tanqueray dry gin, cherry brandy, Benedictine – D.O.M., Cointreau, fresh pineapple, lime, grenadine, cherry syrup, maraschino cherry, angostura bitters',
				price: ''
			},
			{
				name: 'Piña Colada (3 oz)',
				description:
					'Havana Club 3 year, Havana Club Añejo Reserva, Malibu coconut rum, fresh pineapple, coconut milk, crème de coco, half & half',
				price: '14'
			},
			{
				name: 'House Signature Caesar (2 oz)',
				description: 'Absolut Vodka, bird’s eye chilli (พรกขหนูแดง), clamato',
				price: '11'
			}
		]
	},
	'classic-cocktails': {
		title: 'Classic Cocktails',
		thaiTitle: 'ค็อกเทลคลาสสิก',
		imagePath: 'classic-cocktails',
		mobilePath: 'm-classic-cocktails',
		items: [
			{
				name: 'Old Fashioned (2 oz)',
				description: 'Jim Bean bourbon, demerara sugar, angostura bitters',
				price: '12'
			},
			{
				name: 'Negroni (2 oz)',
				description: 'Tanqueray dry gin, Campari, Cinzano Rosso',
				price: '11'
			},
			{
				name: 'Manhattan, NY (2.50 oz)',
				description: 'Crown Royal rye, Cinzano Rosso, angostura bitters',
				price: '11.50'
			},
			{
				name: 'Bronx, NY (2.50 oz)',
				description: 'Tanqueray dry gin, Cinzano Rosso, Noilly Prat dry,',
				price: '12.50'
			},
			{
				name: 'Boulevardier (3 oz)',
				description: 'Jim Beam bourbon, Campari, Cinzano Rosso,',
				price: '14'
			},
			{
				name: 'Godfather (2.50 oz)',
				description: 'Johnnie Walker Black Label, Disaronno Amaretto,',
				price: '14'
			},
			{
				name: 'Old Pal (2.25oz)',
				description: 'Crown Royal Rye, Noilly Prat dry, Campari',
				price: '12.50'
			},
			{
				name: 'Jungle Bird (2 oz)',
				description: 'Havana Club Añejo Reserva, Campari, pineapple, demerara sugar',
				price: '12'
			},
			{
				name: 'Blood & Sand (2 oz)',
				description: 'John Barr reserve blended scotch, cherry brandy, Cinzano Rosso, orange juice',
				price: '12.75'
			},
			{
				name: 'Bobby Burns (2.50 oz)',
				description: 'Glenlivet 12 yrs, Cinzano Rosso, french brandy, Benedictine – D.O.M.',
				price: '14'
			},
			{
				name: 'Moscow Mule (1 oz)',
				description: 'Absolut Vodka, fever tree ginger beer, fresh lemon',
				price: '9.50'
			},
			{
				name: 'Whisky Sour (2 oz)',
				description:
					'Jack Daniel’s Old no°7, fresh lemon, Chilliwack River Valley honey, angostura bitters',
				price: '11.75'
			},
			{
				name: 'Amaretto Sour (2.50 oz)',
				description: 'Disaronno Amaretto, Jim Beam bourbon, fresh lemon, demerara sugar',
				price: '12.50'
			},
			{
				name: 'New York Sour (2.50 oz)',
				description: 'Crown Royal Rye, Yellow Tail Shiraz, fresh lemon, demerara sugar',
				price: '13.25'
			},
			{
				name: 'Black/White Russian (1.50 oz)',
				description: 'Absolut Vodka, Kahlua, half & half',
				price: '9.50'
			},
			{
				name: 'Espresso Martini (2.50 oz)',
				description: 'Grey goose, Kahlua, Bailey’s Irish Cream, Espresso',
				price: '14'
			},
			{
				name: 'Tom Collins (1.50 oz)',
				description: 'Tanqueray dry gin, fresh lemon juice, simple syrup, club soda',
				price: '9.50'
			},
			{
				name: 'Sangria (5 oz)',
				description: 'Yellow Tail Shiraz, cherry brandy, fresh lychee, citrus, pineapple, cherry',
				price: '10'
			}
		]
	},
	beer: {
		title: 'Beer',
		thaiTitle: 'เบียร์',
		imagePath: 'beer2',
		mobilePath: 'm-beer',
		items: [
			{
				name: 'Draught Beer',
				isSubheader: true,
				gP1: '16oz',
				gP2: '60oz'
			},
			{
				name: 'Asahi Super Dry Pilsner',
				description: 'Crisp, dry Karakuchi taste, clean finish',
				p1: '7',
				p2: '22'
			},
			{
				name: 'Granville Island Northwest Pale Ale',
				description: 'Pale ale, Big Citrus, floral aroma, crisp',
				p1: '6.50',
				p2: '20'
			},
			{
				name: 'Domestic Beer',
				isSubheader: true,
				gP1: '16oz',
				gP2: '60oz'
			},
			{
				name: 'Coors Original (355 ml)',
				description: 'Vancouver, BC / Lager / 5.0% ABV',
				price: '6.25'
			},
			{
				name: 'Kokanee (341 ml)',
				description: 'Creston, BC / Lager / 5.0% ABV',
				price: '6.25'
			},
			{
				name: '33 Acres of Darkness (330 ml)',
				description: 'Vancouver, BC / Schwarzbier / 5.0% ABV',
				price: '7'
			},
			{
				name: 'Four Winds (330 ml)',
				description: 'Delta, BC / IPA / 7.0% ABV',
				price: '7.25'
			},
			{
				name: 'Imported Beer',
				isSubheader: true,
				gP1: '16oz',
				gP2: '60oz'
			},
			{
				name: 'Singha (330 mL)',
				description: 'Thailand / Lager / 5.0% ABV',
				price: '7.25'
			},
			{
				name: 'Singha – Large Format (630 mL)',
				description: 'Thailand / Lager / 5.0% ABV',
				price: '13'
			},
			{
				name: 'Chang (320 mL)',
				description: 'Thailand / Lager / 5.0% ABV',
				price: '7.25'
			},
			{
				name: 'Tiger (330 mL)',
				description: 'Singapore / Lager / 5.0% ABV',
				price: '7.25'
			},
			{
				name: 'Tsingtao (330 mL)',
				description: 'China / Lager / 4.5% ABV',
				price: '7.25'
			},
			{
				name: 'Stella Artois (330 mL)',
				description: 'Belgium / Lager / 5.2% ABV',
				price: '7.25'
			},
			{
				name: 'Heineken (330 ml)',
				description: 'Holland / Lager / 5.0% ABV',
				price: '7.25'
			},
			{
				name: 'Peroni Nastro Azzurro (330 ml)',
				description: 'Italy / Lager / 5.2% ABV',
				price: '8'
			},
			{
				name: 'Sapporo (355 mL)',
				description: 'Japan / Pilsner / 5.0% ABV',
				price: '7.50'
			},
			{
				name: 'Pilsner Urquell (330 mL)',
				description: 'Czech Republic / Pilsner / 4.4% ABV',
				price: '8'
			},
			{
				name: 'Guinness Pub Draught (330 mL)',
				description: 'Ireland / Stout / 4.2% ABV',
				price: '8'
			},
			{
				name: 'Warsteiner Fresh Non-Alcoholic',
				description: 'Germany / 0.0% ABV',
				price: '7'
			},
			{
				name: 'Corona (330 mL)',
				description: 'Mexico / Lager / 4.6% ABV',
				price: '7.25'
			}
		]
	},
	cider: {
		title: 'Cider',
		thaiTitle: 'สลัด',
		imagePath: 'cider',
		mobilePath: 'm-cider',
		items: [
			{
				name: 'Lonetree Old Growth Orchard (355 mL)',
				description: 'Okanagan Valley, BC / Dry Apple Cider / 5.5% ABV',
				price: '7'
			}
		]
	},
	vodka: {
		title: 'Vodka',
		thaiTitle: 'สลัด',
		imagePath: 'vodka',
		mobilePath: 'm-vodka',

		items: [
			{
				name: 'Vodka',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz',
				gP3: 'Martini'
			},
			{
				name: 'Absolut',
				description: 'Åhus, Sweden',
				p1: '7',
				p2: '11',
				p3: '14'
			},
			{
				name: 'Stolichnaya Crushed Mango',
				description: 'Latvia',
				p1: '9',
				p2: '14',
				p3: '17'
			},
			{
				name: 'Belvedere',
				description: 'Zyrardów, Poland',
				p1: '10',
				p2: '15',
				p3: '20'
			},
			{
				name: 'Cîroc',
				description: 'Bordeaux, France',
				p1: '11',
				p2: '16',
				p3: '22'
			},
			{
				name: 'Cîroc Green Apple',
				description: 'Bordeaux, France',
				p1: '11',
				p2: '16',
				p3: '22'
			},
			{
				name: 'Cîroc Pineapple',
				description: 'Bordeaux, France',
				p1: '11',
				p2: '16',
				p3: '22'
			},
			{
				name: 'Grey Goose',
				description: 'Picardy, France',
				p1: '11',
				p2: '16',
				p3: '22'
			},
			{
				name: 'Grey Goose Cherry Noir',
				description: 'Picardy, France',
				p1: '11',
				p2: '16',
				p3: '22'
			},
			{
				name: 'Grey Goose l’Orange',
				description: 'Picardy, France',
				p1: '11',
				p2: '16',
				p3: '22'
			}
		]
	},
	gin: {
		title: 'Gin',
		thaiTitle: 'สลัด',
		imagePath: 'gin',
		mobilePath: 'm-gin',
		items: [
			{
				name: 'Gin',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz',
				gP3: 'Martini'
			},
			{
				name: 'Tanqueray',
				description: 'England',
				p1: '7',
				p2: '11',
				p3: '14'
			}
		]
	},
	rum: {
		title: 'Rum',
		thaiTitle: 'สลัด',
		imagePath: 'rum',
		mobilePath: 'm-rum',
		items: [
			{
				name: 'Rum',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Malibu Coconut Rum',
				description: 'Canada',
				p1: '7',
				p2: '11'
			},
			{
				name: 'Havana Club 3 year',
				description: 'Cárdenas, Cuba',
				p1: '7',
				p2: '11'
			},
			{
				name: 'Havana Club Añejo Reserva',
				description: 'Cárdenas, Cuba',
				p1: '8',
				p2: '12'
			}
		]
	},
	tequila: {
		title: 'Tequila',
		thaiTitle: 'สลัด',
		imagePath: 'tequila',
		mobilePath: 'm-tequila',
		items: [
			{
				name: 'Tequila',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Jose Cuervo Tradicional Resposado',
				description: 'Jalisco, Mexico',
				p1: '8',
				p2: '12'
			}
		]
	},
	whisky: {
		title: 'Whisky',
		thaiTitle: 'สลัด',
		imagePath: 'whisky',
		mobilePath: 'm-whisky',
		items: [
			{
				name: 'Whisky',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz',
				gP3: 'Manhattan'
			},
			{
				name: 'Crown Royal Rye',
				description: 'Canada',
				p1: '8',
				p2: '12',
				p3: '16'
			},
			{
				name: 'Jack Daniel’s Old No°7',
				description: 'Tennessee, USA',
				p1: '7',
				p2: '11',
				p3: '14'
			},
			{
				name: 'Jim Beam Bourbon',
				description: 'Kentucky, USA',
				p1: '7',
				p2: '11',
				p3: '14'
			}
		]
	},
	scotch: {
		title: 'Scotch',
		thaiTitle: 'สลัด',
		imagePath: 'scotch',
		mobilePath: 'm-scotch',
		items: [
			{
				name: 'Scotch',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Highland Park 12',
				description: 'Orkney Islands',
				p1: '15',
				p2: '23'
			},
			{
				name: 'John Barr Reserve – Whyte & Mackay',
				description: 'Lowlands',
				p1: '10',
				p2: '16'
			},
			{
				name: 'Johnnie Walker 12 Black Label',
				description: 'Speyside',
				p1: '12',
				p2: '18'
			},
			{
				name: 'Macallan Double Cask 12',
				description: 'Speyside',
				p1: '22',
				p2: '39'
			}
		]
	},
	brandy: {
		title: 'Brandy',
		thaiTitle: 'สลัด',
		imagePath: 'brandy',
		mobilePath: 'm-brandy',
		items: [
			{
				name: 'Brandy',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Marquis de Villard V.S.O.P.',
				description: 'France',
				p1: '8',
				p2: '12'
			}
		]
	},
	'aperitif-digestif': {
		title: 'Aperitif & Digestif',
		thaiTitle: 'สลัด',
		imagePath: 'aperitif-digestif',
		mobilePath: 'm-aperitif-digestif',
		items: [
			{
				name: 'Aperitif & Digestif',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Benedictine D.O.M.',
				p1: '10',
				p2: '15'
			},
			{
				name: 'Campari',
				p1: '8',
				p2: '12'
			},
			{
				name: 'Cointreau',
				p1: '9',
				p2: '14'
			},
			{
				name: 'Disaronno Amaretto',
				p1: '8',
				p2: '12'
			},
			{
				name: 'Grand Marnier Cordon Rouge',
				p1: '11',
				p2: '16'
			},
			{
				name: 'Jägermeister',
				p1: '9',
				p2: '14'
			}
		]
	},
	'vermouth-liqueurs': {
		title: 'Vermouth & Liqueurs',
		thaiTitle: 'สลัด',
		imagePath: 'vermouth-liqueurs',
		mobilePath: 'm-vermouth-liqueurs',
		items: [
			{
				name: 'Vermouth & Liqueurs',
				isSubheader: true,
				gP1: '1oz',
				gP2: '2oz'
			},
			{
				name: 'Alizé – Bleu Passion',
				p1: '',
				p2: '10'
			},
			{
				name: 'Alizé – Gold Passion',
				p1: '',
				p2: '10'
			},
			{
				name: 'Alizé – Red Passion',
				p1: '',
				p2: '10'
			},
			{
				name: 'Cinzanno – Rosso',
				p1: '',
				p2: '8'
			},
			{
				name: 'Noilly Prat – Sec',
				p1: '',
				p2: '9'
			},
			{
				name: 'Bailey’s Irish Cream',
				p1: '8',
				p2: '12'
			},
			{
				name: 'Kahlua',
				p1: '8',
				p2: '12'
			},
			{
				name: 'Saint Germain Elderflower',
				p1: '11',
				p2: '16'
			},
			{
				name: 'Soho Lychee',
				p1: '8',
				p2: '12'
			}
		]
	},
	sct: {
		title: 'Specialty Coffee & Tea',
		thaiTitle: 'สลัด',
		imagePath: 'sct',
		mobilePath: 'm-sct',
		items: [
			{
				name: 'B52 Bomber (1.50 oz)',
				description: 'Grand Marnier Cordon Rouge, Kahlua, Bailey’s Irish Cream, whipped cream',
				price: '9'
			},
			{
				name: 'Café du Montecristo (1.50 oz)',
				description:
					'Kahlua, Bailey’s Irish Cream, Grand Marnier Cordon Rouge, fresh coffee, whipped cream',
				price: '10'
			},
			{
				name: 'Café Español (1.50 oz)',
				description:
					'Marquis de Villard V.S.O.P., Grand Marnier Cordon Rouge, Kahlua, fresh coffee, whipped cream',
				price: '10'
			},
			{
				name: 'Café l’Orange (1.50 oz)',
				description:
					'Marquis de Villard V.S.O.P., Cointreau, Grand Marnier Cordon Rouge, fresh coffee',
				price: '10'
			},
			{
				name: 'Blueberry Tea (1.50 oz)',
				description: 'Disaronno Amaretto, Grand Marnier Cordon Rouge, orange pekoe',
				price: '10'
			}
		]
	},
	'featured-wine': {
		title: 'Featured Wines',
		thaiTitle: 'สลัด',
		imagePath: 'featured-wine',
		mobilePath: 'm-featured-wine',
		items: [
			{
				name: 'BC VQA',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Bottle'
			},
			{
				name: "Quails' Gate | Chardonnay",
				description: 'West Kelowna, BC',
				p1: '11',
				p2: '30',
				p3: '43'
			},
			{
				name: "Quails' Gate | Chasselas Pinot Blanc-Gris",
				description: 'West Kelowna, BC',
				p1: '',
				p2: '',
				p3: '42'
			},
			{
				name: 'Wild Goose | Gewürztraminer',
				description: 'Okanagan Falls, BC',
				p1: '',
				p2: '',
				p3: '43'
			},
			{
				name: 'Burrowing Owl | Chardonnay',
				description: 'Oliver, BC',
				p1: '',
				p2: '',
				p3: '66'
			},
			{
				name: 'Gray Monk | Merlot',
				description: 'Lake Country, BC',
				p1: '11',
				p2: '30',
				p3: '42'
			},
			{
				name: "Quails' Gate | Pinot Noir",
				description: 'West Kelowna, BC',
				p1: '13',
				p2: '36',
				p3: '48'
			},
			{
				name: 'Burrowing Owl | Merlot',
				description: 'Oliver, BC',
				p1: '18',
				p2: '35',
				p3: '65'
			},
			{
				name: 'White',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Litre'
			},
			{
				name: 'Spring Rock | Chardonnay',
				description: 'South Australia',
				p1: '9.50',
				p2: '22',
				p3: '36'
			},
			{
				name: 'Yellow Tail | Chardonnay',
				description: 'South East Australia',
				p1: '10',
				p2: '24',
				p3: '38'
			},
			{
				name: 'Viña Maipo | Sauvignon Blanc',
				description: 'Central Valley, Chile',
				p1: '10.25',
				p2: '25',
				p3: '40'
			},
			{
				name: 'Pasqua Colori D’italia | Pinot Grigio',
				description: 'Veneto, Italy',
				p1: '10.75',
				p2: '27',
				p3: '45'
			},
			{
				name: 'Red',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Litre'
			},
			{
				name: 'Copper Moon | Shiraz',
				description: 'Okanagan Valley, BC',
				p1: '9',
				p2: '19',
				p3: '35'
			},
			{
				name: 'Mt. Dawson | Cabernet Sauvignon',
				description: 'Okanagan Valley, BC',
				p1: '9.50',
				p2: '23',
				p3: '41'
			},
			{
				name: 'Yellow Tail | Shiraz',
				description: 'South East Australia',
				p1: '10',
				p2: '25',
				p3: '43'
			},
			{
				name: 'Sur Andino 1969 | Merlot',
				description: 'Buin, Chile',
				p1: '10.50',
				p2: '28',
				p3: '47'
			},
			{
				name: 'Cameleon Domaine Bousquet Organic | Malbec',
				description: 'Tupungato, Argentina',
				p1: '12',
				p2: '28.50',
				p3: '49'
			}
		]
	},
	'white-wines': {
		title: 'White Wine',
		thaiTitle: 'ไวน์ขาว',
		imagePath: 'white-wines',
		mobilePath: 'm-white-wines',
		items: [
			{
				name: 'White Wine',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Bottle'
			},
			{
				name: 'Echeverria Cool Climate | Sauvignon Blanc',
				description: 'Leyda Valley, Chile',
				p1: '10',
				p2: '24',
				p3: '35'
			},
			{
				name: 'Seven Terraces | Sauvignon Blanc',
				description: 'Marlborough, New Zealand',
				p1: '11',
				p2: '32',
				p3: '46'
			},
			{
				name: 'Oxford Landing | Chardonnay',
				description: 'South Australia',
				p1: '11.50',
				p2: '33',
				p3: '47'
			},
			{
				name: 'Whitehaven | Sauvignon Blanc',
				description: 'Marlborough, New Zealand',
				p1: '12',
				p2: '34',
				p3: '47'
			},
			{
				name: 'Quails’ Gate | Chasselas Pinot Blanc-Gris',
				description: 'West Kelowna, BC VQA',
				p1: '',
				p2: '',
				p3: '42'
			},
			{
				name: 'Wild Goose | Gewürztraminer',
				description: 'Okanagan Falls, BC VQA',
				p1: '',
				p2: '',
				p3: '43'
			},
			{
				name: 'Oyster Bay | Chardonnay',
				description: 'Marlborough, New Zealand',
				p1: '',
				p2: '',
				p3: '49'
			},
			{
				name: 'Selbach Mosel | Riesling',
				description: 'Moselle River Valley, Germany',
				p1: '',
				p2: '',
				p3: '52'
			}
		]
	},
	rose: {
		title: 'Rosé',
		thaiTitle: 'โรเซ่',
		imagePath: 'rose',
		mobilePath: 'm-rose',
		items: [
			{
				name: 'Rosé',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Bottle'
			},
			{
				name: 'Domaine de Pellehaut',
				description: 'Côtes de Gascogne, France',
				p1: '10',
				p2: '24.50',
				p3: '35'
			}
		]
	},
	'red-wines': {
		title: 'Red Wine',
		thaiTitle: 'ไวน์แดง',
		imagePath: 'red-wines',
		mobilePath: 'm-red-wines',
		items: [
			{
				name: 'Red Wine',
				isSubheader: true,
				gP1: '6oz',
				gP2: '500ml',
				gP3: 'Bottle'
			},
			{
				name: 'Gray Monk | Merlot',
				description: 'Lake Country, BC VQA',
				p1: '11',
				p2: '30',
				p3: '42'
			},
			{
				name: 'George Wyndham Bin 444 | Cabernet Sauvignon',
				description: 'South East Australia',
				p1: '11.50',
				p2: '32',
				p3: '43'
			},
			{
				name: 'Santa Julia Reserva | Malbec',
				description: 'Uco Valley, Argentina',
				p1: '12',
				p2: '32',
				p3: '43'
			},
			{
				name: 'Thorne Clarke Terra Barossa | Shiraz',
				description: 'South Australia',
				p1: '13',
				p2: '36',
				p3: '48'
			},
			{
				name: 'Trapiche Reserve | Malbec',
				description: 'Mendoza, Argentina',
				p1: '',
				p2: '',
				p3: '42'
			},
			{
				name: 'Robert Mondavi Private Selection | Cabernet Sauvignon',
				description: 'California, USA',
				p1: '',
				p2: '',
				p3: '46'
			},
			{
				name: 'Escorihuela 1884 | Syrah',
				description: 'Mendoza, Argentina',
				p1: '',
				p2: '',
				p3: '52'
			},
			{
				name: 'Tom Gore | Cabernet Sauvignon',
				description: 'Geyserville, USA',
				p1: '',
				p2: '',
				p3: '54'
			},
			{
				name: 'Château Ste Michelle | Cabernet Sauvignon',
				description: 'Columbia Valley, USA',
				p1: '',
				p2: '',
				p3: '70'
			},
			{
				name: 'Meiomi | Pinot Noir',
				description: 'California, USA',
				p1: '',
				p2: '',
				p3: '77'
			}
		]
	},
	footer: {
		isFooter: 'isFooter'
	}
};
