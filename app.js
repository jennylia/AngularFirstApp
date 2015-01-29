(function() 
	{
		var app = angular.module('store', []); 
		app.controller('StoreController', function(){

			this.products = gems;

		});

		app.controller('InventoryController', function(){
			this.inventory = inventory;
			this.firstItem = gems;
		})


		var gems = [
		{
			name: 'Dedecaheron-JL',
			price: 2.95,
			description: 'best gem ever by JL',
			canPurchase: true,
		},
		{
			name: 'Red Gem',
			price: 2.95,
			description: 'best gem ever by JL',
			canPurchase: true,
		},
		{
			name: 'Blue Gem',
			price: 2.95,
			description: 'best gem ever by JL',
			canPurchase: true,
		},




		];

		var inventory = {
			name: 'Closet',
			size: '12',
		}

	}



)();
