import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss'],
})
export class AdoptionComponent implements OnInit {
  doughnutChartLabels: string[] = [
    'Pólizas',
    'Restan',
  ];
  doughnutChartOptions: any = {
    borderWidth: 1,
    maintainAspectRatio: true,
    cutoutPercentage: 50,
  };
  responsive: true;
  doughnutChartData: number[] = [84, 150];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLegend: boolean = true;
  colors: any = [
    {
      backgroundColor: [
        'rgb(0, 0, 0)',
        '#bababa',
        '#06d79c',
        'rgb(236, 239, 241)'
      ]
    }
  ];

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }

  clickBox(id) {
    let data = {};
    localStorage.clear();

    switch (id) {
      case 1:
        data = {
          parentTitle: 'Lo que tengo que saber',
          list: [
            {
              id: 1,
              img: 'post-list1.jpg',
              title: 'AHORA, PÍDELE SALIR',
              description: 'Porque las primeras impresiones importan, ¡y mucho!',
            },
            {
              id: 2,
              img: 'post-list2.jpg',
              title: 'AHORA, PÍDELE SALIR',
              description: 'Que te diga que sí es una meta y aquí tienes las de la campaña.',
            },
            {
              id: 3,
              img: 'post-list3.jpg',
              title: 'AVERIGUA TODO DE ELLA',
              description: 'Incluso sus partes más ocultas. Aquí tienes las condiciones.',
            },
            {
              id: 4,
              img: 'post-list4.jpg',
              title: 'Y POR FIN, ENAMÓRATE',
              description: '¡Mira todo lo que puedes llegar a ganar! Quién lo iba a decir en la primera cita..',
            },
          ]
        };
        break;

      case 2:
        data = {
          parentTitle: 'Lo que tengo que aprender',
          list: [
            {
              id: 5,
              img: 'post-list2.jpg',
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
            {
              id: 6,
              img: 'post-list3.jpg',
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
          ]
        };
        break;

      case 3:
        data = {
          parentTitle: 'Lo que tengo que hacer',
          list: [
            {
              id: 7,
              img: 'post-list4.jpg',
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
            {
              id: 8,
              img: 'post-list1.jpg',
              title: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            },
          ]
        };
        break;

      default:
        break;
    }

    localStorage.setItem('post-list', JSON.stringify(data));
    this.navCtrl.navigateForward("/post-list");
  }
}
