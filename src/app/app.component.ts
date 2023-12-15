import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'eslint-autofix-issue';
	a = 1;
	b = 2;
	c = 3;
	d = 4;

	field = {
		options: {
			stateKey: 'name'
		}
	};
	invalidLabelStyle = {
		'background-color': 'red'
	};

	labelStyle = {
		'background-color': 'green'
	};

	_formGroup: UntypedFormGroup;
	set formGroup(value: UntypedFormGroup) {
		this._formGroup = value;
	}
	get formGroup() {
		return this._formGroup;
	}
	constructor() {
		this._formGroup = {} as UntypedFormGroup;
	}
}
