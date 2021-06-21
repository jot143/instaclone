import { EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appInfinityScroll]",
})
export class InfinityScrollDirective implements OnInit {

  @Input() delayInNextEmit: any;
  @Output() action = new EventEmitter<any>();
  constructor(public el: ElementRef) {
    this.el.nativeElement.style.overflow = 'auto';
    this.el.nativeElement.style.width = "100%";
    this.el.nativeElement.style.height = "100%"; 
    this.el.nativeElement.style.position = "absolute"; 
    this.el.nativeElement.style.top = 0; 
    this.el.nativeElement.style.left = 0; 
    this.el.nativeElement.style.right = 0; 
    this.el.nativeElement.style.bottom = 0;
  }

  ngOnInit(){
    console.log(this.el.nativeElement);
  }

  AllowEmit = true; 

  @HostListener('scroll', ['$event'])
  public onSrcoll($event): void {
    if($event.target.scrollHeight - $event.target.scrollTop + $event.target.clientHeight < 4000)
    {
      if(this.AllowEmit)  this.action.emit(true);
      this.AllowEmit = false;
      setTimeout(() => {
        this.AllowEmit = true;
      }, this.delayInNextEmit)
    }
  }
}
