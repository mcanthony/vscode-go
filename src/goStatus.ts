/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import { GO_MODE } from './goMode'
import vscode = require('vscode');

let statusBarEntry: vscode.StatusBarItem;

export function showHideStatus() {
	if (!statusBarEntry) {
		return;
	}
	if (!vscode.window.activeTextEditor) {
		statusBarEntry.hide();
		return;
	}
	if (vscode.languages.match(GO_MODE, vscode.window.activeTextEditor.document)) {
		statusBarEntry.show();
		return;
	}
	statusBarEntry.hide();
}

export function hideGoStatus() { 
	statusBarEntry.dispose(); 
}

export function showGoStatus(message: string, command: string, tooltip?: string) {
	statusBarEntry = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, Number.MIN_VALUE);
	statusBarEntry.text = message;
	statusBarEntry.command = command;
	statusBarEntry.color = 'yellow';
	statusBarEntry.tooltip = tooltip;
	statusBarEntry.show();
}