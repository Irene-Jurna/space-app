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
  selectedTab: string = "Moon";
  @Output() tabSelected = new EventEmitter<string>;

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabSelected.emit(this.selectedTab);
  }
}
