
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, MessageComponent],
})
export class HomePage {
  private data = inject(DataService);
  private detachedDivs: any[] = [];
  constructor() { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ionViewDidEnter() {
    const detachedDiv = document.createElement('div');
    detachedDiv.textContent = 'This is a detached div from home';
    this.detachedDivs.push(detachedDiv)
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
