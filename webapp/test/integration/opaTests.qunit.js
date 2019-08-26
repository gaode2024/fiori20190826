/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"bao/td01/td01/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});