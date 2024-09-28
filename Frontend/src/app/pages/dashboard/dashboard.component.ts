import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { TablerIconsModule } from 'angular-tabler-icons';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {MatListItemIcon} from "@angular/material/list";
import {MatDialog} from "@angular/material/dialog";
import {ViewImageComponent} from "../extra/view-image/view-image.component";
import {ManagementAlbumComponent} from "../extra/management-album/management-album.component";

interface month {
  value: string;
  viewValue: string;
}

export interface profitExpanceChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

export interface trafficChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

export interface salesChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  hourRate: number;
  classes: number;
  priority: string;
}

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Mark J. Freeman',
    position: 'English',
    hourRate: 150,
    classes: 53,
    priority: 'Available',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    hourRate: 150,
    classes: 68,
    priority: 'In Class',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    hourRate: 150,
    classes: 94,
    priority: 'Absent',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    hourRate: 150,
    classes: 27,
    priority: 'On Leave',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        TablerIconsModule,
        MatCardModule,
        NgApexchartsModule,
        MatTableModule,
        CommonModule,
        MatFormFieldModule,
        MatListItemIcon
    ],
})
export class AppDashboardComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public profitExpanceChart!: Partial<profitExpanceChart> | any;
  public trafficChart!: Partial<trafficChart> | any;
  public salesChart!: Partial<salesChart> | any;

  displayedColumns: string[] = ['profile', 'hrate', 'exclasses', 'status'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
      
  }


  // ecommerce card
  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/p1.jpg',
      title: 'Boat Headphone',
      price: '285',
      rprice: '375',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/p2.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      rprice: '375',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/p3.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/p4.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
    {
      id: 5,
      imgSrc: '/assets/images/products/p3.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    }
  ];

  currentIndex = 0;
  itemsPerPage = 4;
  animate = false;

  constructor(private dialog: MatDialog) {
  }

  prevItem() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextItem() {
    if (this.currentIndex < this.productcards.length - this.itemsPerPage) {
      this.currentIndex++;
    }
  }

  isVisible(index: number): boolean {
    return index >= this.currentIndex && index < this.currentIndex + this.itemsPerPage;
  }

  openDialog(srcImage: string) {
    const dialogRef = this.dialog.open(ViewImageComponent, {
      data: {name: 'Joel', id: '1', srcImage: srcImage},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Result from dialog:', result);
      }
    });
  }

  openManagementAlbum(){
    const dialogRef = this.dialog.open(ManagementAlbumComponent, {
      data: {name: 'Joel', id: '1', srcImage: 'srcImage'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Result from dialog:', result);
      }
    });
  }
}
