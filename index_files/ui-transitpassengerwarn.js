define(['knockout'], function(ko){
	
	ko.components.register('transitpassengerwarn', {
	    viewModel: { require: "eteration/widgets/booking/transitpassengerwarn/transitpassengerwarn-view" },
	    template: { require: "text!eteration/widgets/booking/transitpassengerwarn/transitpassengerwarn.html" }
	});
	
});