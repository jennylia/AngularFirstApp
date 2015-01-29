(function() 
	{
		var app = angular.module('store', []); 
		app.controller('StoreController', function(){

			this.product = gem;

		});

		app.controller('InventoryController', function(){
			this.inventory = inventory;
			this.firstItem = gem;
		})


		var gem = {
			name: 'Dedecaheron-JL',
			price: 2.95,
			description: 'best gem ever by JL',
		}

		var inventory = {
			name: 'Closet',
			size: '12',
		}

	}



)();
