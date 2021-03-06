var toCDNPATH = function(url) {
        if(window.cdnDomain){
           url = window.cdnDomain+ url;
        }
        return url;
};


var requireConfig = {
	
    config: {
        'text': {
    		useXhr: function (url, protocol, hostname, port) {
    			return true;
    		}
    	}
    },

    baseUrl: window.location.host === 'localhost'? toCDNPATH('assets/js') : toCDNPATH('/com.thy.web.online.portal/assets/js'),
    urlArgs: "vs="+window.appVersion,
	paths : {
		'excanvas' : 'ie/excanvas',
		'html5shiv' : 'ie/html5shiv',
		'underscore':'underscore-min',
		'text':'text',
		'respond' : 'ie/respond',
		'base64.min':'ie/base64.min',
		'jquery' : 'jquery',
		'jquery.migrate' : 'jquery.migrate',
		'jquery.knob' : 'jquery.knob',
		'jquery.cookie' : 'jquery.cookie',
		'jquery.mask' : 'jquery.mask',
		'jquery.alphanum' : 'jquery.alphanum',
		'jquery.mousewheel' : 'jquery.mousewheel',
		'moment' : 'moment.min',
		'modernizr' : 'modernizr',
		'fastclick' : 'fastclick',
		'jquery.placeholder' : 'jquery.placeholder',
		'bootstrap' : 'bootstrap',
		'bootstrap.select' : 'bootstrap.select',
		'bootstrap.overwrite' : 'bootstrap.overwrite',
//		'bootstrap.switch' : 'bootstrap.switch',
		'jquery.tagsinput' : 'jquery.tagsinput',
		'jquery.ui' : 'jquery.ui.min' ,
		'sly' : 'sly',
		'jquery.sticky' : 'jquery.sticky',
		'jquery.plugin':'jquery.plugin',
		'knockout' : 'knockout',
		//'recaptcha' : '//www.google.com/recaptcha/api',
		//'handlebars' : 'handlebars',
		'combodate' : 'combodate',
		'jquery.form' : 'jquery.form',
		'numeral' : 'numeral.min',
		'numeral.languages' : 'numeral.languages.min',
		'jquery.wholly' : 'jquery.wholly' ,
		'jquery.rangeslider' : 'jquery.rangeslider' ,
		'jquery.uisliderpips' : 'jquery.uisliderpips' ,
		'humanize-duration' : 'humanize-duration' ,
		'maps/infobox_packed' : 'maps/infobox_packed',
		'maps/markerwithlabel_packed' : 'maps/markerwithlabel_packed',
		'maps/markermanager' : 'maps/markermanager',
		'maps/markermanager_packed' : 'maps/markermanager_packed',
		'jquery.payment' : 'jquery.payment',
		'jquery.color' : 'jquery.color',
		'jquery.Jcrop' : 'jquery.Jcrop.min',
		'eteration/eteration' :'eteration/eteration',
		'eteration/eteration-cc' :'eteration/eteration-cc',
		'eteration/eteration-base' :'eteration/eteration-base',
		'eteration/eteration-urlparser' :'eteration/eteration-urlparser',
		'eteration/eteration-ajax' :'eteration/eteration-ajax',
		'eteration/eteration-i18n' :'eteration/eteration-i18n',
        'eteration/ui/base-viewmodel':'eteration/ui/base-viewmodel',
        'eteration/ui/char-utils':'eteration/ui/char-utils',
        'eteration/ui/login-viewmodel':'eteration/ui/login-viewmodel',
        'eteration/ui/signup-viewmodel':'eteration/ui/signup-viewmodel',
        'eteration/ui/form-viewmodel':'eteration/ui/form-viewmodel',
        'eteration/widgets/widget-util':'eteration/widgets/widget-util',
        'eteration/widgets/ui-datelabel':'eteration/widgets/ui-datelabel',
        'eteration/widgets/ui-i18n':'eteration/widgets/ui-i18n',
        'eteration/widgets/ui-spinner':'eteration/widgets/ui-spinner',
        'eteration/widgets/ui-closepopup':'eteration/widgets/ui-closepopup',
        'eteration/widgets/ui-msmenu':  'eteration/widgets/ui-msmenu',
        'eteration/widgets/ui-corpmenu': 'eteration/widgets/ui-corpmenu',
        'eteration/widgets/ui-datepicker':'eteration/widgets/ui-datepicker',

        'eteration/widgets/ui-booker-datepicker':'eteration/widgets/ui-booker-datepicker',
        'eteration/widgets/ui-booker-paxpicker':'eteration/widgets/ui-booker-paxpicker',
        
        'eteration/widgets/ui-form-items':'eteration/widgets/ui-form-items',
        'eteration/widgets/ui-flight':'eteration/widgets/ui-flight',
        'eteration/widgets/ui-progressbar':'eteration/widgets/ui-progressbar',
        'eteration/widgets/ui-gauge':'eteration/widgets/ui-gauge',
        'eteration/widgets/ui-gauge-slice':'eteration/widgets/ui-gauge-slice',
        'eteration/widgets/ui-etrselect':'eteration/widgets/ui-etrselect',
        'eteration/widgets/ui-selectpicker':'eteration/widgets/ui-selectpicker',
        'eteration/widgets/ui-togglepopup':'eteration/widgets/ui-togglepopup',
        'eteration/widgets/ui-seatpopover':'eteration/widgets/ui-seatpopover',
        'eteration/widgets/ui-emailpopover':'eteration/widgets/ui-emailpopover',
        'eteration/widgets/ui-seatmap':'eteration/widgets/ui-seatmap',
        'eteration/widgets/ui-checkinflight':'eteration/widgets/ui-checkinflight',
        'eteration/widgets/ui-etrtimeperiod-select':'eteration/widgets/ui-etrtimeperiod-select',
        'eteration/widgets/ui-datagrid' : 'eteration/widgets/ui-datagrid',
        'eteration/widgets/ui-subscribe-promotions' : 'eteration/widgets/ui-subscribe-promotions',
        'eteration/widgets/ui-layover-duration' : 'eteration/widgets/ui-layover-duration',
        'eteration/widgets/ui-send-flight' : 'eteration/widgets/ui-send-flight',
        'eteration/widgets/ui-searchbar' : 'eteration/widgets/ui-searchbar',
        'eteration/widgets/ui-cms' : 'eteration/widgets/ui-cms',
        'eteration/widgets/ui-img' : 'eteration/widgets/ui-img',
        'eteration/widgets/booking/ui-passengerregistrationrecord': 'eteration/widgets/booking/ui-passengerregistrationrecord',
        'eteration/widgets/managebooking/ui-refund-card-information' : 'eteration/widgets/managebooking/ui-refund-card-information',
        'eteration/widgets/managebooking/ui-refund-card-owner-information' : 'eteration/widgets/managebooking/ui-refund-card-owner-information',
        'eteration/widgets/managebooking/ui-refund-pricebreakdown-information' : 'eteration/widgets/managebooking/ui-refund-pricebreakdown-information',
        'eteration/widgets/managebooking/ui-refund-payment-owner-information' : 'eteration/widgets/managebooking/ui-refund-payment-owner-information',
        'eteration/widgets/managebooking/ui-assistance-selector' : 'eteration/widgets/managebooking/ui-assistance-selector',
        /*'eteration/widgets/tccportal/ui-modal-forgotpassword' : 'eteration/widgets/tccportal/ui-modal-forgotpassword',
        'eteration/widgets/tccportal/ui-header-logout' : 'eteration/widgets/tccportal/ui-header-logout',
        'eteration/widgets/tccportal/ui-header-login' : 'eteration/widgets/tccportal/ui-header-login',
        'eteration/widgets/tccportal/ui-header-language-selector' : 'eteration/widgets/tccportal/ui-header-language-selector',
        'eteration/widgets/tccportal/ui-header-user-operations' : 'eteration/widgets/tccportal/ui-header-user-operations',
        'eteration/widgets/tccportal/ui-header-menu' : 'eteration/widgets/tccportal/ui-header-menu',
        'eteration/widgets/tccportal/ui-datagrid' : 'eteration/widgets/tccportal/ui-datagrid',
        'eteration/widgets/tccportal/ui-cardrequests-summary' : 'eteration/widgets/tccportal/ui-cardrequests-summary',
        'eteration/widgets/tccportal/ui-cardrequests-delivery-address' : 'eteration/widgets/tccportal/ui-cardrequests-delivery-address',
        'eteration/widgets/tccportal/ui-searchbar' : 'eteration/widgets/tccportal/ui-searchbar',
        'eteration/widgets/tccportal/ui-cardrequest-details' : 'eteration/widgets/tccportal/ui-cardrequest-details',
        'eteration/widgets/tccportal/ui-cardrequest-creation-tool' : 'eteration/widgets/tccportal/ui-cardrequest-creation-tool',
        'eteration/widgets/tccportal/ui-cardrequest-cancellation-tool' : 'eteration/widgets/tccportal/ui-cardrequest-cancellation-tool',
        'eteration/widgets/tccportal/ui-application-state-list' : 'eteration/widgets/tccportal/ui-application-state-list',
        'eteration/widgets/tccportal/ui-representative-information' : 'eteration/widgets/tccportal/ui-representative-information',
        'eteration/widgets/tccportal/ui-passenger-details' : 'eteration/widgets/tccportal/ui-passenger-details',
        'eteration/widgets/tccportal/ui-contact-details' : 'eteration/widgets/tccportal/ui-contact-details',
        'eteration/widgets/tccportal/ui-company-details' : 'eteration/widgets/tccportal/ui-company-details',
        'eteration/widgets/tccportal/ui-contract-details' : 'eteration/widgets/tccportal/ui-contract-details',
        'eteration/widgets/tccportal/ui-passenger-creation-tool' : 'eteration/widgets/tccportal/ui-passenger-creation-tool',
        'eteration/widgets/tccportal/ui-passenger-cancellation-tool' : 'eteration/widgets/tccportal/ui-passenger-cancellation-tool',
        'eteration/widgets/tccportal/ui-page-redirection-section' : 'eteration/widgets/tccportal/ui-page-redirection-section',
        'eteration/widgets/tccportal/ui-background-image-panel' : 'eteration/widgets/tccportal/ui-background-image-panel',
        */'ui-helper-tcc/flight-search-helper' : 'ui-helper-tcc/flight-search-helper',
        'ui-helper-tcc/flight-list-helper' : 'ui-helper-tcc/flight-list-helper',

        'cms-helper':'cms-helper',
        'portselect-helper': 'portselect-helper',
        'cityselect-helper': 'cityselect-helper',
        'promotion-helper': 'promotion-helper',
        'new-promotion-helper': 'new-promotion-helper',
        'destination-helper':'destination-helper',
        'promotion-parameters-helper': 'promotion-parameters-helper',
        
        'ajaxConsolidator' : 'common/ajax-consolidator',

        
        'ui-helper-tcc/passenger-register-helper' : 'ui-helper-tcc/passenger-register-helper',
        'eteration/ui/ko-validation':"eteration/ui/eteration-ko.validation",
        'eteration/ui/validation-helper':'eteration/ui/eteration-validation.helper',
        'animate' : 'animate',
        'app/ko-app' : 'app/ko-app',
        'application' : 'application',
        'investor' : 'investor',
        'corporateclub' : 'corporateclub',
        'bloodhound' :'bloodhound.min',
	    'eteration/widgets/ui-portselect':'eteration/widgets/ui-portselect',
        'eteration/widgets/ui-cityselect':'eteration/widgets/ui-cityselect',
	    'eteration/widgets/ui-locationselect':'eteration/widgets/ui-locationselect',
	    'eteration/widgets/ui-countryselect':'eteration/widgets/ui-countryselect',
	    'ui-helper/item-list-helper.js':'ui-helper/item-list-helper.js',
	    'eteration/widgets/ui-moment':'eteration/widgets/ui-moment',
	    'ui-helper/passenger-register-helper':'ui-helper/passenger-register-helper',
	    'ui-helper/payment-helper' : 'ui-helper/payment-helper',
	    'ui-helper/externalapp-helper' : 'ui-helper/externalapp-helper',
	    'ui-helper/bup-helper' : 'ui-helper/bup-helper',
	    'ui-helper/gtm-helper' : 'ui-helper/gtm-helper',
	    'ui-helper/currency-helper' : 'ui-helper/currency-helper',
	    'eteration/widgets/ui-payment':'eteration/widgets/ui-payment',
	    'eteration/widgets/ui-money':'eteration/widgets/ui-money',
	    'eteration/widgets/ui-isodate':'eteration/widgets/ui-isodate',
	    'eteration/widgets/ui-date-formats':'eteration/widgets/ui-date-formats',
	    'eteration/widgets/ui-paxtype-count':'eteration/widgets/ui-paxtype-count',
	    'eteration/widgets/ui-name':'eteration/widgets/ui-name',
	    'eteration/widgets/ui-sociallinks':'eteration/widgets/ui-sociallinks',
	    'eteration/widgets/ui-routerestrictionmessage':'eteration/widgets/ui-routerestrictionmessage',
	    'eteration/widgets/ui-timerangepicker':'eteration/widgets/ui-timerangepicker',
	    'eteration/widgets/ui-frontend-controls':'eteration/widgets/ui-frontend-controls',
	    
		'eteration/widgets/ui-singlecity-booker':'eteration/widgets/ui-singlecity-booker',
		'eteration/widgets/ui-multicity-booker':'eteration/widgets/ui-multicity-booker',
		'eteration/widgets/ui-previoussearches-booker':'eteration/widgets/ui-previoussearches-booker',
		'eteration/widgets/ui-farefamily-picker':'eteration/widgets/ui-farefamily-picker',
		
	    'eteration/widgets/ui-timerangegrid':'eteration/widgets/ui-timerangegrid',
	    'eteration/widgets/ui-timerange':'eteration/widgets/ui-timerange',
	    'eteration/widgets/ui-paymenttype-information':'eteration/widgets/ui-paymenttype-information',
	    'eteration/widgets/managebooking/ui-awardticket-ms-information':'eteration/widgets/managebooking/ui-awardticket-ms-information',
		'async': 'plugins/async',
		'goog': 'plugins/goog',
		'propertyParser': 'plugins/propertyParser',
		'eteration/widgets/ui-recaptcha':'eteration/widgets/ui-recaptcha',
		'jquery.accessibility':'accessibility/jquery.accessibility',
		'accessibility-component':'accessibility/accessibility-component',
        'sign-lang':'accessibility/sign-lang',
        'eteration/widgets/ui-seatpopup':'eteration/widgets/ui-seatpopup',
        'eteration/widgets/ui-wingosharebox':'eteration/widgets/ui-wingosharebox',
        'eteration/ui/wingo-viewmodel':'eteration/ui/wingo-viewmodel',
        'eteration/ui/userpref-viewmodel':'eteration/ui/userpref-viewmodel',
        'facebook': 'fb-sdk',
        'gapi' : 'platform',
        'social-likes': 'app/social-likes',
        'app/ko-app-mobile' : 'app/ko-app-mobile',
        'app/ko-app-touch' : 'app/ko-app-touch',
        'jquery.mobile-events' : 'jquery.mobile-events',
        'bootbox' : 'bootbox',
        'eteration/widgets/ui-reset-session' : 'eteration/widgets/ui-reset-session',
		'eteration/widgets/ui-seat-amount-table' : 'eteration/widgets/ui-seat-amount-table',
		'eteration/widgets/ui-seat-info-block' : 'eteration/widgets/ui-seat-info-block',
        'knockout-repeat' : 'knockout-repeat',
        'mobile/week-switcher' : 'app/mobile/week-switcher',
        'mobile/custom-bindings' : 'app/mobile/custom-bindings',
        'mobile/timeline-table' : 'app/mobile/timeline-table',
        'mobile/ui-passengerlogo' : 'app/mobile/ui-passengerlogo',
        'mobile/ui-passengerdetails' : 'app/mobile/ui-passengerdetails',
        'mobile/timetable-timeline-table' : 'app/mobile/timetable-timeline-table',
        'mobile/flightstatus-timeline-table' : 'app/mobile/flightstatus-timeline-table',
        'mobile/basic-components' : 'app/mobile/basic-components',
        'mobile/mytrips-flight-panel' : 'app/mobile/mytrips-flight-panel',
        'common/ko-modal' : 'app/common/ko-modal',
        'json2' : '/com.thy.web.online.portal/assets/js/json2',
		'jstorage' : '/com.thy.web.online.portal/assets/js/jstorage',	
		'sdl-media-manager.player' : 'sdl-media-manager.player',
		'core' : 'core',
		'stringUtils' : 'string',
		'jquery-scrolltofixed' : 'jquery-scrolltofixed-min',
		'roundslider':'roundslider',
		'perfect-scrollbar.jquery':'perfect-scrollbar.jquery',
		'perfect-scrollbar':'perfect-scrollbar',
		'jquery.bgLoaded':'jquery.bgLoaded',
		'Countdown':'Countdown',
		'sherpaIntegration':'sherpa-integration-script'

	},
	waitSeconds: 50,
	shim : {
        'underscore': {
            exports: '_'
        },
		'bootstrap' : {
			deps : ['jquery','jquery.ui','jquery.migrate','jquery.tagsinput' ,'modernizr','sly','jquery.wholly','animate']
		},
		'jquery.alphanum' : {
			deps : ['jquery' ]
		},'jquery.mask' : {
			deps : ['jquery' ]
		},'jquery.plugin' : {
			deps : ['jquery' ]
		},'jquery.payment' : {
			deps : ['jquery' ]
		},'jquery.uisliderpips' : {
			deps : ['jquery','jquery.ui' ]
		},'jquery.rangeslider' : {
			deps : ['jquery','jquery.ui' ]
		},'numeral.languages' : {
			deps : ['numeral' ]
		},'combodate' : {
			deps : ['jquery' ,'moment']
		},'jquery.knob':{
			deps : ['jquery']
		},'roundslider':{
			deps:['jquery']
		},'jquery.mousewheel':{
			deps : ['jquery']
		},'animate':{
			deps : ['jquery','modernizr']
		},'recaptcha' : {
			exports : 'Recaptcha'
		},'bloodhound':{
			deps : ['jquery'],
			exports : 'Bloodhound'
		},'jquery.ui' : {
			deps : ['jquery' ]
		},'sly' : {
			deps : ['jquery' ]
		},'jquery.wholly' : {
			deps : ['jquery' ]
		},'jquery.placeholder' : {
			deps : ['jquery' ]
		},'jquery.migrate' : {
			deps : ['jquery' ]
		},'jquery.tagsinput' : {
			deps : ['jquery' ]
		},'jquery.bgLoaded': {
			deps:['jquery']
		},
		'jquery.sticky' : {
			 deps : ['jquery' ]
		},'investor' : {
			deps : ['jquery.placeholder','bootstrap.select']
		},'corporateclub' : {
			deps : ['jquery.placeholder','bootstrap.select' ]
		}
//		,'bootstrap.switch' : {
//			deps : ['jquery' ,'bootstrap'],
//		}
		
		,'bootstrap.overwrite' : {
			deps : ['jquery' ,'bootstrap']
		},'bootstrap.select' : {
			deps : ['jquery' ,'bootstrap','bootstrap.overwrite']
		},'jquery.Jcrop' : {
			deps : ['jquery' ,'jquery.color']
		}, 'facebook' : {
			exports: 'FB'
		},'social-likes' : {
			deps : ['facebook','gapi']
		},'jquery.mobile-events' : {
			deps : ['jquery' ]
		},'jquery.accessibility' : {
			deps : ['jquery','knockout']
		},'accessibility-component' : {
            deps : ['jquery','knockout']
        },'sign-lang' : {
            deps : ['jquery','knockout']
        },'bootbox' : {
			deps : ['jquery','bootstrap']
		},'eteration/widgets/ui-reset-session' : {
			deps : ['bootbox']
		},'knockout-repeat' : {
			deps : ['knockout' ]
		},'jstorage' : {
			deps : ['json2','jquery' ]
		},'sdl-media-manager.player' : {
			deps : ['jquery' ]
		},'maps/markermanager' : {
			deps : ['async!https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyB7eVj45GZPJ5Xua31hm-N1ncS3vkK7GOo' ]
		},'maps/infobox_packed' : {
			deps : ['maps/markermanager' ]
		},'maps/markerwithlabel_packed' : {
			deps : ['maps/infobox_packed' ]
		}
	}
};
require.config(requireConfig);

require(['base64.min']);
