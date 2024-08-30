import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.css",
})
export class NavigationComponent {
  @ViewChild("nav") nav!: ElementRef;
  @ViewChild("navToggle") navToggle!: ElementRef;

  toggleNav() {
    const visibility = this.nav.nativeElement.getAttribute("data-visible");

    if (visibility === "false") {
      this.nav.nativeElement.setAttribute("data-visible", "true");
      this.navToggle.nativeElement.setAttribute("aria-expanded", "true");
    } else {
      this.nav.nativeElement.setAttribute("data-visible", "false");
      this.navToggle.nativeElement.setAttribute("aria-expanded", "false");
    }
  }
}
