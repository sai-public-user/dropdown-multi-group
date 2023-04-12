import { Component, Input, SimpleChanges } from '@angular/core';

export interface OptionItem {
  label: string;
  count?: number;
  category: string;
  subLabel?: string;
  value: string | number;
}

@Component({
  selector: 'app-option-item',
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.css'],
})
export class OptionItemComponent {
  @Input() isMulti: boolean = false;
  isChecked: boolean = false;
  @Input() option: OptionItem = {
    label: 'Individual-X12345678',
    count: 7,
    category: 'Fidelity',
    value: 1,
  };
  @Input() isLast: boolean = false;
  @Input() onChange: (value: string | number, option: OptionItem) => void =
    () => {};
  @Input() selectedOptions: Array<string | number> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOptions']) {
      const newSelectedOpts = changes['selectedOptions'].currentValue;
      this.isChecked = newSelectedOpts.includes(this.option.value);
    }
  }

  onOptionClicked(value: string | number, option: OptionItem) {
    this.onChange(value, option);
  }
}
