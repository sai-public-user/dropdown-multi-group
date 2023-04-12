import { OptionItem } from './option-item/option-item.component';
import { Component } from '@angular/core';

export interface ActionItem {
  btnLabel: string;
  onClick: (e: Event) => void;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dropdown-multi-group';

  isMulti: boolean = true;

  groupBy: string = 'category';

  actions?: ActionItem[] = [
    {
      btnLabel: 'Manage external accounts',
      onClick: (event: Event) => {},
    },
    // {
    //   btnLabel: 'Manage internal accounts',
    //   onClick: (event: Event) => {},
    // },
  ];

  options: OptionItem[] = [
    {
      label: 'Individual-X12345678',
      count: 7,
      category: 'Fidelity',
      value: 1,
    },
    {
      label: 'Individual-X123456',
      subLabel: 'Hello',
      category: 'Fidelity',
      value: 2,
    },
    {
      label: 'Individual-X1234',
      count: 15,
      category: 'Fidelity1',
      value: 3,
    },
  ];
}
