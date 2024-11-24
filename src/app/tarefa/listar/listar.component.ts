import { Tarefa } from "./../../domain/model/tarefa";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { TarefasService } from "src/app/services/tarefas.service";

@Component({
  selector: "app-tarefas",
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
  dataSource: MatTableDataSource<Tarefa>;
  ELEMENT_DATA: Tarefa[] = [];
  columnsToDisplay = ["recorrencia", "prioridade", "etapa"];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, "expand"];
  expandedElement: null;

  @ViewChild("pagination") paginator: MatPaginator;
  constructor(private tarefas: TarefasService) {}

  getTarefas() {
    return this.tarefas.getAll().subscribe(
      (tarefa) => {
        this.ELEMENT_DATA = tarefa;
        this.dataSource = new MatTableDataSource<Tarefa>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error("ocorreu um erro", error);
      }
    );
  }

  ngOnInit(): void {
    this.getTarefas();
  }
}
