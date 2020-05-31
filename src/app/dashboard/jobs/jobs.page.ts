import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { PlacesService } from "../dashboard.service";

import { Observable } from "rxjs";
import { ButtonRendererComponent } from "./button-renderer.component"; //

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.page.html",
  styleUrls: ["./jobs.page.scss"],
})
export class JobsPage implements OnInit {
  items: Observable<any[]>;

  private gridApi;

  columnDefs = [
    {
      headerName: "Jenkins Job Id",
      field: "jenkinsJobId",
      sortable: true,
      resizable: true,
      filter: true,
      rowDrag: true,
    },
    {
      headerName: "User Product Guid",
      field: "userProductGuid",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "File Name",
      field: "fileName",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "Start Time",
      field: "startTime",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "Status",
      field: "status",
      sortable: true,
      resizable: true,
      filter: true,
      cellStyle: function (params) {
        if (params.value == "Stopped") {
          return { color: "black", backgroundColor: "rgba(255,128,171,.4)" };
        }
        if (params.value == "Completed") {
          return { color: "black", backgroundColor: "cyan" };
        }
        if (params.value == "Aborted") {
          return { color: "black", backgroundColor: "rgba(185,246,202,.4)" };
        }
        if (params.value == "Cancelled") {
          return { color: "black", backgroundColor: "orange" };
        }
        if (params.value == "Running") {
          return { color: "black", backgroundColor: "rgba(24,228,58,1)" };
        } else {
          return null;
        }
      },
    },
    {
      headerName: "End Time",
      field: "endTime",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "Org",
      field: "org",
      sortable: true,
      resizable: true,
      filter: true,
    },
    {
      headerName: "Sub Status",
      field: "subStatus",
      sortable: true,
      resizable: true,
      filter: true,
      cellStyle: function (params) {
        if (params.value == "Stopped") {
          return { color: "black", backgroundColor: "rgba(255,128,171,.4)" };
        }
        if (params.value == "Completed") {
          return { color: "black", backgroundColor: "cyan" };
        }
        if (params.value == "Aborted") {
          return { color: "black", backgroundColor: "rgba(185,246,202,.4)" };
        }
        if (params.value == "Cancelled") {
          return { color: "black", backgroundColor: "orange" };
        }
        if (params.value == "Running") {
          return { color: "black", backgroundColor: "rgba(24,228,58,1)" };
        } else {
          return null;
        }
      },
    },
    {
      headerName: "Location",
      field: "loc",
      sortable: true,
      resizable: true,
      filter: true,
    },
    {
      headerName: "Total SSNs",
      field: "totalSsns",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "Stoppable",
      field: "stoppable",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
      cellRendererFramework: ButtonRendererComponent,
    },

    {
      headerName: "Paychex Opted In",
      field: "payxOptedIn",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "NR Opted In",
      field: "nrOptedIn",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
    {
      headerName: "Paychex SSNs",
      field: "payxSsns",
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true,
    },
  ];
  rowData: any;
  rowDataClicked1 = {};
  themevar;
  gridOptions;
  frameworkComponents: any;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
  }

  ngOnInit() {
    this.themevar = "ag-theme-balham";
    this.refresh();
  }

  refresh() {
    this.rowData = this.placesService.getJobs();
  }

  changeThemeTo(theme) {
    this.themevar = theme;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onGridReady(params: any) {
    console.log("grid ready");
    console.log("Grid api:", params.api);
    console.log("Col api:", params.columnApi);
    this.gridApi = params.api;
  }

  onRowClicked(event: any) {
    console.log("row", event);
  }
  onCellClicked(event: any) {
    console.log("cell", event);
  }
  onSelectionChanged(event: any) {
    console.log("selection", event);
  }
}
