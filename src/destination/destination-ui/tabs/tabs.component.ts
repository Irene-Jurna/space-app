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

  onKeydown(e: any) {
    if (e.key === "ArrowRight") {
      this.index = (this.index + 1) % this.tabs.length;
    }

    if (e.key === "ArrowLeft") {
      this.index = (this.index - 1 + this.tabs.length) % this.tabs.length;
    }

    this.selectTab(this.tabs[this.index]);
  }
}
