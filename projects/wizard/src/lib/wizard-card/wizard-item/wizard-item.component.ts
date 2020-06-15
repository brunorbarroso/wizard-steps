import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-wizard-item',
  templateUrl: './wizard-item.component.html',
  styleUrls: ['./wizard-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WizardItemComponent implements OnInit {

  @Input() label = null;
  @Input() step  = null;
  @Input() icon  = null;
  @Input() iconStep = null;
  @Input() stepClass = null;
  @Input() line = null;
  showItem = false;

  constructor() { }

  ngOnInit() {
    this.enableComponent();
  }

  enableComponent() {
    if (this.label) {
      this.showItem = true;
    }
  }
}
