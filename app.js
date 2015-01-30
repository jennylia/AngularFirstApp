(function() 
	{
		var app = angular.module('store', []); 
		app.controller('StoreController', function(){

			this.products = gems;

		});

		app.controller('PanelController', function(){

			this.tab = 1;

			this.setTab = function (setTab){
				this.tab = setTab;
			};

			this.checkTab = function(i){
				return (this.tab === i);
			};

		});


		app.controller('InventoryController', function(){
			this.inventory = inventory;
			this.firstItem = gems;
		})


		var gems = [
		{
			name: 'Dedecaheron-JL',
			price: 2.9523,
			description: 'best gem ever by JL',
			canPurchase: true,
			images: [{
				full:'./photo/gem0.jpg',
				half:'./photo/gem1.jpg',
			},
			{
				full:'./photo/gem1.jpg',
				half:'./photo/gem1.jpg',
			},],
		},
		{
			name: 'Red Gem',
			price: 4,
			description: 'best gem ever by JL',
			canPurchase: true,
			images: [{
				full:'./photo/gem0.jpg',
				half:'./photo/gem1.jpg',
			},
			{
				full:'./photo/gem1.jpg',
				half:'./photo/gem1.jpg',
			},],
			
		},
		{
			name: 'Blue Gem',
			price: 2.95,
			description: 'best gem ever by JL',
			canPurchase: true,
			images: [{
				full:'./photo/gem0.jpg',
				half:'./photo/gem1.jpg',
			},
			{
				full:'./photo/gem1.jpg',
				half:'./photo/gem1.jpg',
			},],
		},




		];

		var inventory = {
			name: 'Closet',
			size: '12',
		}

	}



)();
