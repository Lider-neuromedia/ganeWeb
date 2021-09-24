import { Component, Input, OnInit } from '@angular/core';

declare var $ : any; 

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {

  constructor() { }
  @Input() slotwrapper: string;
  ngOnInit(): void {
  }

  activeRuleta(){
    $('#example1 ul').playSpin({
      time: 1000,
      stopSeq: 'leftToRight'
  });
    
  }

}
