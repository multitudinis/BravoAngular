import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Obra } from "src/app/domain/model/obra";
import { ObraService } from "src/app/services/obra.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class ListarComponent implements OnInit {
  dataSource: MatTableDataSource<Obra>;
  ELEMENT_DATA: Obra[] = [];
  columnsToDisplay = ["descricao", "Nº Colaboradors", "etapa"];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, "expand"];
  expandedElement: null;

  @ViewChild("pagination") paginator: MatPaginator;
  constructor(private service: ObraService) {}

  getObras() {
    return this.service.getAll().subscribe(
      (obra) => {
        this.ELEMENT_DATA = obra;
        this.dataSource = new MatTableDataSource<Obra>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error("ocorreu um erro", error);
      }
    );
  }

  ngOnInit(): void {
    this.getObras();
  }
}
