import { Component, OnDestroy, OnInit } from '@angular/core';
import { Plano } from './models/plano';
import { ToastrService } from 'ngx-toastr';
import { PhoneCallValue } from './models/phoneCallValue';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(private toastr: ToastrService) { }

  planos: Array<Plano>;
  verValores: boolean = false;

  origem: number;
  destino: number;
  minutos: number;
  plano: number;
  minutosRestantes: number;
  custoLigacao: number

  phoneCall: PhoneCallValue;

  phoneCallLog: Array<PhoneCallValue> = [];

  precificacao: boolean = true;
  hasLogToShow: boolean = false;
  showLogTable: boolean = false;

  ptbrLanguage: boolean = true;


  ngOnInit() { this.chargePlanos(); }

  chargePlanos() {
    this.planos = [];

    this.planos.push({ id: 30, descricaoPtBr: 'FaleMais 30', descricaoEnglish: 'SpeakMore 30' });
    this.planos.push({ id: 60, descricaoPtBr: 'FaleMais 60', descricaoEnglish: 'SpeakMore 30' });
    this.planos.push({ id: 120, descricaoPtBr: 'FaleMais 120', descricaoEnglish: 'SpeakMore 30' });

  }

  calculateCharge() {

    if (this.origem == null || this.origem == undefined) {
      if (this.ptbrLanguage == true) {
        this.toastr.error('O campo origem é obrigatório!');
      } else {
        this.toastr.error('The origin field is required');
      }
    } else if (this.destino == null || this.destino == undefined) {
      if (this.ptbrLanguage == true) {
        this.toastr.error('O campo destino é obrigatório!');
      } else {
        this.toastr.error('The destination field is required');
      }
    } else if (this.minutos == null || this.minutos == undefined) {
      if (this.ptbrLanguage == true) {
        this.toastr.error('O campo minutos é obrigatório!');
      } else {
        this.toastr.error('The minutes field is required');
      }
    } else if (this.plano == null || this.plano == undefined) {
      if (this.ptbrLanguage == true) {
        this.toastr.error('O campo plano é obrigatório!');
      } else {
        this.toastr.error('The plan field is required');
      }
    } else {

      this.phoneCall = new PhoneCallValue();
      this.precificacao = true;

      if (this.origem == 11 && this.destino == 16) {
        this.custoLigacao = 1.90;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }


      } else if (this.origem == 16 && this.destino == 11) {
        this.custoLigacao = 2.90;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }

      } else if (this.origem == 11 && this.destino == 17) {
        this.custoLigacao = 1.70;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }

      } else if (this.origem == 17 && this.destino == 11) {
        this.custoLigacao = 2.70;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }

      } else if (this.origem == 11 && this.destino == 18) {
        this.custoLigacao = 0.90;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }

      } else if (this.origem == 18 && this.destino == 11) {
        this.custoLigacao = 1.90;

        this.phoneCall.resultSemPlano = this.minutos * this.custoLigacao;

        this.minutosRestantes = this.reduceMinutesAccordingToChosenPlan(this.plano, this.minutos);

        if (this.minutosRestantes > 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes == 0) {
          this.phoneCall.resultComPlano = 0;
        } else if (this.minutosRestantes < 0) {
          this.phoneCall.resultComPlano = Math.abs(this.minutosRestantes) * (this.custoLigacao + ((this.custoLigacao * 10) / 100));
        }
      } else {

        if (this.ptbrLanguage == true) {
          this.toastr.error('Os DDDs escolhidos ainda não possuem precificação, verifique a tabela de valores, por gentileza.', 'Operação Indisponível', { timeOut: 5000 });
        } else {
          this.toastr.error('There are no prices for the choosen origin and destinations yet. Please, contact support.', 'Unavailable Operation', { timeOut: 5000 });
        }

        this.precificacao = false;
      }

      if (this.precificacao) {
        this.phoneCall.origem = this.origem.toString();
        this.phoneCall.destino = this.destino.toString();
        this.phoneCall.minutos = this.minutos;
        this.phoneCall.custoLigacao = this.custoLigacao;

        this.phoneCall.resultComPlanoFixed = this.phoneCall.resultComPlano.toFixed(2);
        this.phoneCall.resultSemPlanoFixed = this.phoneCall.resultSemPlano.toFixed(2);

        this.planos.forEach(plano => {
          if (plano.id == this.plano) {
            this.phoneCall.plano = plano;
          }
        });

        this.phoneCallLog.push(this.phoneCall);

        if (this.ptbrLanguage == true) {
          this.toastr.success(`Custo com plano: R$ ${this.phoneCall.resultComPlanoFixed} | Custo sem plano: R$ ${this.phoneCall.resultSemPlanoFixed}`, `Plano FaleMais${this.plano}`, {
            positionClass: 'toast-bottom-full-width',
            closeButton: true,
            disableTimeOut: true
          });
        } else {
          this.toastr.success(`Cost with plan: R$ ${this.phoneCall.resultComPlanoFixed} | Cost without plan: R$ ${this.phoneCall.resultSemPlanoFixed}`, `Plan SpeakMore${this.plano}`, {
            positionClass: 'toast-bottom-full-width',
            closeButton: true,
            disableTimeOut: true
          });
        }



        this.hasLogToShow = true;
      }

    }

  }

  showValuesTable() {
    this.verValores = !this.verValores;
  }

  reduceMinutesAccordingToChosenPlan(plano: number, minutos: number) {
    return plano - minutos;
  }

  showLogTableOnClick() {
    this.showLogTable = !this.showLogTable;
  }

  turnLanguageToPortuguese() {
    this.ptbrLanguage = true;
  }

  turnLanguageToEnglish() {
    this.ptbrLanguage = false;
  }

  ngOnDestroy() { }

}