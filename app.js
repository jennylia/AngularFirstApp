(function() 
	{
		var app = angular.module('store', []); 
		app.controller('StoreController', function(){

			this.product = gems[0];

		});

		app.controller('InventoryController', function(){
			this.inventory = inventory;
			this.firstItem = gems[1];
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




		];

		var inventory = {
			name: 'Closet',
			size: '12',
		}

	}



)();
