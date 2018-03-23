import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/ramp-and-table/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { RampAndTableService } from '../../../shared/ramp-and-table/ramp-and-table.service';

@Component({
  selector: 'app-one-pair-scissors',
  templateUrl: './one-pair-scissors.component.html',
  styleUrls: ['./one-pair-scissors.component.css']
})
export class OnePairScissorsComponent implements OnInit {

  public colors: Color[];
  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => RampAndTableService))
    public rampAndTableService: RampAndTableService
  ) {}

  ngOnInit() {
    this.colors = this.rampAndTableService.getColor([
      'black',
      'blue',
    ]);
    this.acsessuars = this.rampAndTableService.getAcsessuars([
      'inclosure'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}
