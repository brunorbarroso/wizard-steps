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
        label: 'Start',
        step: 'completed',
        icon: 'done',
        iconStep: 'fa-play-circle',
        stepClass: null,
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: 'completed'
      },
      {
        label: 'Email',
        step: 'completed',
        icon: 'done',
        iconStep: 'fa-envelope',
        stepClass: null,
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: 'next'
      },
      {
        label: 'Sms',
        step: 'in-progress',
        icon: 'preloader',
        iconStep: 'fa-comment-dots',
        stepClass: 'loading',
        isFinishLine: false,
        isFinish: false,
        howIsStepInProgress: 'prev'
      },
      {
        label: 'Letter',
        step: null,
        icon: null,
        iconStep: 'fa-newspaper',
        stepClass: null,
        isFinishLine: true,
        isFinish: false,
        howIsStepInProgress: 'nothing'
      },
      {
        label: ' ',
        step: null,
        icon: null,
        iconStep: 'fa-check-circle',
        stepClass: null,
        isFirst: false,
        isFinishLine: true,
        isFinish: true,
        howIsStepInProgress: 'nothing'
      }
    ];

    this.steps = steps;
  }

}
