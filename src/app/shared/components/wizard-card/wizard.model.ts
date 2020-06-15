export class WizardModel {
  label?: string
  step?: string
  icon?: string
  iconStep?: string
  stepClass?: string
  isFirst: boolean
  isFinishLine: boolean
  isFinish: boolean
  howIsStepInProgress?: string
}

export enum STEPS {
  EMPTY = 'nothing',
  COMPLETE = 'completed',
  NEXT = 'next',
  PREV = 'prev'
}