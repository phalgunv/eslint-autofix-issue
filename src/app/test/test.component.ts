import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent {
	// labelStyle = {
	// 	'background-color': 'red'
	// };

	@Input() labelStyle: { [key: string]: string } = {};
}
