import { OptionItem } from './../option-item/option-item.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css'],
})
export class GroupItemComponent {
  @Input() groupOptions: { [key: string]: OptionItem[] } = {};
  @Input() isMulti: boolean = false;
  @Input() onChange: (value: string | number, option: OptionItem) => void =
    () => {};
  @Input() selectedOptions: Array<string | number> = [];
}
