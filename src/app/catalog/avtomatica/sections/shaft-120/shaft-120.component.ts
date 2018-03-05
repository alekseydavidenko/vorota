import { Component, OnInit } from '@angular/core';

import { Construction, Specification } from '../../../../shared/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';
@Component({
  selector: 'app-shaft-120',
  templateUrl: './shaft-120.component.html',
  styleUrls: ['./shaft-120.component.css']
})
export class Shaft120Component implements OnInit {

  public constructions: Construction[];
  public specifications: Specification[];
  public specification = false;

  constructor() { }

  ngOnInit() {
    this.constructions = Constructions;
    this.specifications = CharacteristicTechnical;

    this.specificationShow();
  }

  specificationShow() {
    const _this = this;
    this.specifications.map(item => {
      if (item.note != null) {
        _this.specification = true;
        return;
      }
    });
  }

}
