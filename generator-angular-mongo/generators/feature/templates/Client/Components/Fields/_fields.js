var <%=data.camelCase%>sFields = {
	bindings: {
		ngModel: '='
	},
	template: require('raw-loader!./<%=data.camelCase%>sFields.Html'),	
	controllerAs: "vm"
};
angular.module("app").component("<%=data.camelCase%>sFields", <%=data.camelCase%>sFields);


