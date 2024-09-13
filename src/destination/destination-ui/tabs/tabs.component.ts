import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-tabs",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tabs.component.html",
})
export class TabsComponent {
  @Input() tabs: string[] = [];
  @Output() tabSelected = new EventEmitter<string>();

  selectedTab: string = "Moon";
  index: number = 0;

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabSelected.emit(this.selectedTab);
  }
}
