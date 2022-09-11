import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'details-tab',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnChanges {
  currentTab: string;

  @Input()
  tabs: string[];

  @ContentChild(TemplateRef)
  tabTemplate: TemplateRef<any>

  openTab(index: number): void {
    this.currentTab = this.tabs[index];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tabs?.length) {
      this.currentTab = this.tabs[0]
    }
  }
}
