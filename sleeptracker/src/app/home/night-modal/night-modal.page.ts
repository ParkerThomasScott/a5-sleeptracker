import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-night-modal',
  templateUrl: './night-modal.page.html',
  styleUrls: ['./night-modal.page.scss'],
})
export class NightModalPage {

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NightModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
