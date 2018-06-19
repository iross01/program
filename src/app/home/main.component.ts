import { Component } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main.component.html'
})
export class MainComponent {

	breadcrumb:number=1;

	nextStep(step:number) {
		this.breadcrumb=step;
	}

}
