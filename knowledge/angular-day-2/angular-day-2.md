# Template syntax
## Interpolation binding
- {{ 1 + - * / 1 }}
- {{ employer?.companyName }}
- {{ birthday | date:"MM/dd/yy" }} => `=> 12/22/19`
- {{ true ? ‘David’ : ‘Dong’ }} `=> David`
- {{ employer | json }} `=> {key: value, key: value}`
- ...Readmore on `angular.io`

## Property binding
- [value]="firstName"
- [attr.role]="myAriaRole"
- [class.active]=“isActive"
- [ngClass]="{abc: abc, bcd: false}” 
- [style.width.px]="mySize"
- [ngStyle]="{'property': ‘value'}” 
- ...Readmore on `angular.io`

## Event binding
- (click)=“start($event)”
- (mouseenter)=“hover($event)”
- (mouseleave)=“leave($event)”
- (keyup)=“keyupInput($event)”
- (keyup.enter)=“keyupInput($event)”
- ...Readmore on `angular.io` or check more than event js here `https://developer.mozilla.org/en-US/docs/Web/Events`

## 2-way binding
- `<input [(ngModel)]="userName">`

# Component Interaction
  - Pass data from parent to child with input binding ( use @input )
    > Ex: @Input() getContent: string;
  - Parent listens for child event ( use @output )
    > Ex: @Output() emitData = new EventEmitter();
  - ...Readmore on `angular.io`
