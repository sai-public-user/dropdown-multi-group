import { ActionItem } from './../app.component';
import { OptionItem } from './../option-item/option-item.component';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent {
  @Input() isMulti: boolean = true;

  @Input() groupBy: string = 'category';

  @Input() options: OptionItem[] = [];

  @Input() actions?: ActionItem[] = undefined;

  @Input() placeholder?: string = 'Select...';

  allItemsValues: Array<string | number> = [];

  groupOptions: { [key: string]: OptionItem[] } = {};

  selectAllChecked: boolean = false;

  selectedOptions: Array<string | number> = [];

  openMenu: boolean = false;

  setAllOptionsBasedValues(options: OptionItem[]) {
    options.forEach((opt) => {
      if (this.groupOptions[opt.category] !== undefined) {
        this.groupOptions[opt.category].push(opt);
      } else {
        this.groupOptions[opt.category] = [opt];
      }
    });
    this.allItemsValues = options.map((opt) => opt.value);
  }

  onChange(value: string | number, option: OptionItem) {
    // console.log(
    //   'selected option => ',
    //   option,
    //   this.allItemsValues,
    //   this.groupOptions
    // );
    const pos = this.selectedOptions.indexOf(value);
    if (value && pos > -1) {
      this.selectedOptions.splice(pos, 1);
      this.selectAllChecked = false;
    } else {
      this.selectedOptions.push(value);
      if (this.selectedOptions.length === this.allItemsValues?.length) {
        this.selectAllChecked = true;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      const newOpts = changes['options'].currentValue;
      this.setAllOptionsBasedValues(newOpts);
    }
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  onSelectAll(event: Event) {
    if (this.selectAllChecked) {
      this.selectedOptions = [];
    } else {
      this.selectedOptions = [...this.allItemsValues];
    }
    this.selectAllChecked = !this.selectAllChecked;
  }
}
