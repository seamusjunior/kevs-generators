﻿var mainLayout = {
	bindings: {
	allowChanges: '@'
	},
	controllerAs: 'vm',
	templateUrl: './src/Client/Features/Navigation/Components/mainLayoutTemplate.html',
	controller: function () {
	var vm = this;

	vm.userName = 'Test Username';

	vm.sideMenuItems = [
		   <% for (var key in data.features.features) {  %>  
				{          
		state: '<%=key%>',
		linkText: '<%=key%>',
		icon: 'cogs',
		requiresLogin: true
		},
        <% } %>
		
				{
		state: 'lookupLists',
		linkText: 'Lookup Lists',
		icon: 'cogs',
		requiresLogin: true
		}
	];


	vm.userMenuItems = [{
		state: 'userprofile',
		linkText: 'User Profile',
		icon: 'user'
	}, {
		state: 'useroptions',
		linkText: 'User Options',
		icon: 'cogs'
	}, {
		state: 'logout',
		linkText: 'Logout',
		icon: 'cogs'
	}, {
		state: 'login',
		linkText: 'Login',
		icon: 'check'
	}];

	vm.alertMenuItems = [{
		state: 'alert1',
		linkText: 'Alert 1',
		icon: 'bell'
	}, {
		state: 'alert2',
		linkText: 'Alert 3',
		icon: 'bell'
	}];

	// vm.footerLinks = [{
	// 		state: 'link1',
	// 		linkText: 'Link 1'
	// 	}, {
	// 		state: 'link2',
	// 		linkText: 'Link 2'
	// 	}, {
	// 		state: 'link3',
	// 		linkText: 'Link 3'
	// 	},


	},
}
angular.module('app').component('mainLayout', mainLayout);