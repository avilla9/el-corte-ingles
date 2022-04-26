import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
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

  data: any = [
    {
      id: 1,
      parentTitle: 'Lo que tengo que saber',
      img: 'campaign/need-know.jpg',
      list: [
        {
          id: 1,
          img: 'campaign/hogar-pelayo.jpg',
          title: 'Hogar Pelayo',
          description: '¿Qué es Hogaralia 3.0 y cuáles son sus principales garantías? ¡Recuérdalo!',
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1NMSbfDqDksuwPr9UpbHDc5_ETzzZryID/view?usp=sharing'
        },
        {
          id: 2,
          img: 'campaign/DKV.jpg',
          title: 'Decesos DKV',
          description: 'Nuestro producto de Decesos exclusivo de DKV: Decesos Valor y Senior',
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1oTWf5-6m_P9DvWQOlInJHZ53cT__sPaB/view?usp=sharing',
        },
        {
          id: 3,
          img: 'campaign/aisa.png',
          title: 'Salud ASISA Servicios Completos',
          description: 'Sin copagos, desde los servicios básicos a los más avanzados, ¡el más completo!',
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1ZGg1qskLWm3gtVS-LeEfv_6XEHeHd_vy/view?usp=sharing',
        },
        {
          id: 4,
          img: 'campaign/aisa.png',
          title: 'Salud ASISA Máster',
          description: 'Para aquellos que buscan el mejor servicio, pero con una utilización media o baja.',
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1Dz6yP1YhnmuEp30pGW29jRVVAIn5v08v/view?usp=sharing',
        },
        {
          id: 5,
          img: 'campaign/aisa.png',
          title: 'Salud ASISA Pymes',
          description: 'Para empresarios, autónomos, sus trabajadores y familiares directos.',
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1oSpZRnZQ30C4mgzNwbQsrHATYYyi_TRR/view?usp=sharing',
        },
      ]
    },
    {
      id: 2,
      parentTitle: 'Lo que tengo que aprender',
      img: 'campaign/need-learn.jpg',
      list: [
        {
          id: 1,
          img: 'campaign/desgrave.png',
          title: "¿Cómo desgravarte el Seguro de Hogar?",
          description: "Haz crecer tu negocio ayudando a tu cliente a pagar menos en su Declaración de la Renta",
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://www.businessinsider.es/como-desgravar-seguro-hogar-declaracion-renta-2022-1032873',
        },
      ]
    },
    {
      id: 3,
      parentTitle: 'Lo que tengo que hacer',
      img: 'campaign/need-do.jpg',
      list: [
        {
          id: 1,
          img: 'campaign/jamon.jpg',
          title: "¡Consigue un Jamón!",
          description: "Conoce tus objetivos para alcanzar el premio.",
          date: '',
          cta: '',
          cta_content: '',
          internal_route: '',
          link: 'https://drive.google.com/file/d/1jLyRay4uG7VPxS9EWVmmApPKmu5hCGR2/view?usp=sharing',
        },
      ]
    }
  ];

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }

  clickBox(list) {
    localStorage.clear();
    localStorage.setItem('post-list', JSON.stringify(list));
    this.navCtrl.navigateForward("/post-list");
  }
}
