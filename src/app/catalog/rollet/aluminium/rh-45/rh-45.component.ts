import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewLamel } from '../../../../shared/rollet/view-lamel';
import { ColorLamel } from '../../../../shared/rollet/color-lamel';
import { AcsessuarRollet } from '../../../../shared/rollet/acsessuar-rollet';

import { RolletService } from '../../../../shared/rollet/rollet.service';

@Component({
  selector: 'app-rh-45',
  templateUrl: './rh-45.component.html',
  styleUrls: ['./rh-45.component.css']
})
export class Rh45Component implements OnInit {

  public viewLamels: ViewLamel[];
  public colorLamels: ColorLamel[];
  public acsessuars: AcsessuarRollet[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => RolletService))
    public rolletService: RolletService
  ) { }

  ngOnInit() {
    this.viewLamels = this.rolletService.getViewsLamels([
      'rh45'
    ]);
    this.colorLamels = this.rolletService.getColorLamels([
      'white',
      'brown',
      'blue',
      'green',
      'silver',
      'gray',
      'ivory',
      'wineRed',
      'anthracite',
    ]);
    this.acsessuars = this.rolletService.getAcsessuarsRollet([
      'swb',
      'swm',
      'cv01',
      'smartRoll',
      'roll',
      'gc',
      'dhre1',
      'smartcontrol2',
      'gsm2',
      't5',
      'transmitter2Pro',
      'transmitter4Pro',
      'transmitter4',
      'transmitterPremium',
      'photosell',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}
