import { Component, OnInit } from '@angular/core';

declare var $ : any; 

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeRuleta(){
    $('#example1 ul').playSpin({
      time: 1000,
      stopSeq: 'leftToRight'
  });
    
  }

}
