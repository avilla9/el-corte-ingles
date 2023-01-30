import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { CampaignService } from 'src/app/services/explore/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

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
      parentTitle: 'Lo que he conseguido',
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

  statistics: any;
  campaignsData: any;
  currentCampaign: any;
  pageStatus: any = false;
  statusMessage = "Cargando...";
  campaignSelected: any;

  constructor(
    public navCtrl: NavController,
    private campaignService: CampaignService,
  ) { }

  ngOnInit() {
    this.campaigns();
  }

  clickBox(list) {
    localStorage.removeItem('post-list');
    localStorage.setItem('post-list', JSON.stringify(list));
    this.navCtrl.navigateForward("/post-list");
  }

  campaigns() {
    this.campaignService.campaignList('Campaña')
      .subscribe((res: any) => {
        this.campaignsData = res;
        this.pageStatus = true;

        this.currentCampaign = res[0];
        this.loadSelectedCampaign(this.currentCampaign);
      }, (err: any) => {
        this.statusMessage = 'Error al cargar la información';
      });
  }

  handleChange(ev) {
    this.currentCampaign = ev.target.value;
    this.loadSelectedCampaign(this.currentCampaign);
  }

  loadSelectedCampaign(campaign_id) {
    this.campaignService.campaignData('Campaña', campaign_id)
      .subscribe((res: any) => {
        console.log(res);
        this.campaignSelected = res;
        this.pageStatus = true;
        this.setStatistics(res[3]);
      }, (err: any) => {
        this.statusMessage = 'Error al cargar la información';
      });
  }

  setStatistics(data) {
    let polize = 0;
    let bonus = 0;
    let incentive = 0;

    if (data.policy_objective > 0) {
      polize = parseFloat((data.policy_raised * 100 / data.policy_objective).toPrecision(2));
    }
    if (typeof (data.bonus) !== 'undefined') {
      bonus = data.bonus;
    }
    if (typeof (data.incentive) !== 'undefined') {
      incentive = data.incentive;
    }

    this.statistics = [
      {
        title: 'Pólizas',
        parameter: polize + '%',
        doughnutChartLabels: [
          'Ventas',
          'Restan',
        ],
        doughnutChartData: [polize, 100 - polize],
        doughnutChartOptions: {
          borderWidth: 1,
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          aspectRatio: 1,
        },
        doughnutChartType: 'doughnut',
        responsive: true,
        doughnutChartLegend: false,
        colors: [
          {
            backgroundColor: [
              'rgb(0, 0, 0)',
              '#bababa',
            ]
          }
        ],
      },
      {
        title: 'Primas',
        parameter: bonus + ' €',
        doughnutChartLabels: [
          'Primas',
        ],
        doughnutChartData: [100],
        doughnutChartOptions: {
          borderWidth: 1,
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          aspectRatio: 1,
        },
        doughnutChartType: 'doughnut',
        responsive: true,
        doughnutChartLegend: false,
        colors: [
          {
            backgroundColor: [
              'rgb(0, 0, 0)',
            ]
          }
        ],
      },
      {
        title: 'Incentivo',
        parameter: incentive + ' €',
        doughnutChartLabels: [
          'Incentivo',
        ],
        doughnutChartData: [100],
        doughnutChartOptions: {
          borderWidth: 1,
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          aspectRatio: 1,
        },
        doughnutChartType: 'doughnut',
        responsive: true,
        doughnutChartLegend: false,
        colors: [
          {
            backgroundColor: [
              'rgb(0, 0, 0)',
            ]
          }
        ],
      },
    ];
  }
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
