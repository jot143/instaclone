import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinner: any;
  constructor(public loadingController: LoadingController) { }

  async load() {
    this.spinner = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await this.spinner.present();
  }

  async dismiss() {
    const { role, data } = await this.spinner.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
