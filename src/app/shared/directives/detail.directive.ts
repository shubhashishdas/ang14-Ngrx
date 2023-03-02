import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDetail]'
})
export class DetailDirective {

  constructor(
    public _viewContainerRef: ViewContainerRef
  ) { }

}
