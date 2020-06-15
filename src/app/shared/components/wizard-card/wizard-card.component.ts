import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class WizardCardComponent implements OnInit {
  steps: {};

  constructor() { }

  ngOnInit() {
    this.composerSteps();
  }

  composerSteps() {
    const steps = [
      {
        label: 'Shopping',
        step: 'completed',
        icon: 'done',
        iconStep: 'fas fa-cart-arrow-down',
        stepClass: null,
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: STEPS.COMPLETE
      },
      {
        label: 'Payment',
        step: 'completed',
        icon: 'done',
        iconStep: 'far fa-credit-card',
        stepClass: null,
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: STEPS.NEXT
      },
      {
        label: 'Stock',
        step: 'in-progress',
        icon: 'preloader',
        iconStep: 'fas fa-dolly',
        stepClass: 'loading',
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: STEPS.PREV
      },
      {
        label: 'Delivery',
        step: null,
        icon: null,
        iconStep: 'fas fa-truck',
        stepClass: null,
        isFinishLine: true,
        isFinish: false,
        howIsStepInProgress: STEPS.EMPTY
      },
      {
        label: 'Completed',
        step: null,
        icon: null,
        iconStep: 'far fa-check-circle',
        stepClass: null,
        isFirst: false,
        isFinishLine: true,
        isFinish: true,
        howIsStepInProgress: STEPS.EMPTY
      }
    ];

    this.steps = steps;
  }

}

export enum STEPS {
  EMPTY = 'nothing',
  COMPLETE = 'completed',
  NEXT = 'next',
  PREV = 'prev'
}
