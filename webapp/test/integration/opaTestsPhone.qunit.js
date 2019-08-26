/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"bao/td01/td01/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});