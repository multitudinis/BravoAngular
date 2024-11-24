import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { HelpersService } from "src/app/services/helpers.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isButtonDisabled = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private helper: HelpersService) {}

  ngOnInit(): void {
    this.hasToken();
  }

  hasToken() {
    const valor = this.helper.isAuthenticated();
    //if (valor) this.isButtonDisabled = !valor;
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
