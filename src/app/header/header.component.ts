import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('stickyMenu') menuElement: ElementRef;
  // sticky: boolean = false;
  // elementPosition: any;

  constructor() { }

  ngOnInit(): void {
      $('.modal-resultados').css('height',`${screen.height-217}px`);
  }

  abrirLoterias(){
    $('.modal-resultados').toggleClass('abrir-modal');
  }

  ngAfterViewInit(){
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  // @HostListener('window:scroll', ['$event'])
  // handleScroll(){
  //   const windowScroll = window.pageYOffset;
  //   if(windowScroll >= this.elementPosition){
  //     this.sticky = true;
  //   } else {
  //     this.sticky = false;
  //   }
  // }

}
