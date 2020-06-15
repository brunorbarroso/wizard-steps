import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-wizard-line',
  templateUrl: './wizard-line.component.html',
  styleUrls: ['./wizard-line.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WizardLineComponent implements OnInit {

  @Input() howIsStepInProgress = null;
  constructor() { }

  ngOnInit() {
  }

}
