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
  @Input() selectedTab: string = "";

  @Output() tabSelected = new EventEmitter<string>();

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabSelected.emit(this.selectedTab);
  }

  onKeydown(e: KeyboardEvent) {
    const currentIndex = this.tabs.indexOf(this.selectedTab);

    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();

      const nextIndex =
        e.key === "ArrowRight"
          ? (currentIndex + 1) % this.tabs.length
          : (currentIndex - 1 + this.tabs.length) % this.tabs.length;
      this.selectTab(this.tabs[nextIndex]);
    }
  }
}
