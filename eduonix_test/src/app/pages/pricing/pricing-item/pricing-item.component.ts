import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrls: ['./pricing-item.component.scss']
})
export class PricingItemComponent implements OnInit {
  @Input() title!: String;
  @Input() price!: number;
  @Input() description!: String;
  constructor() { }

  ngOnInit(): void {
  }

}
