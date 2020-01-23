import {IOption} from 'ng-select';

export class SelectOption implements IOption {
  label: string;
  value: string;
  disabled?: boolean;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}
