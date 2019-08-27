/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"PerInfo/TD02/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});