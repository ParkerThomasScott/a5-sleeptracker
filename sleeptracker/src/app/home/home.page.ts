import { Component, Input } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ModalController } from '@ionic/angular';
import { NightModalPage } from './night-modal/night-modal.page';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	bedTime:Date;
	wakeTime:Date;
	sleepRating:number;
	sleepyTime:Date;
	nightData:OvernightSleepData[];
	sleepyData:StanfordSleepinessData[];

	constructor(public sleepService:SleepService, public modalController: ModalController, public FirebaseService:FirebaseService) {
		this.bedTime = new Date();
		this.wakeTime = new Date();
	}

	ngOnInit() {
		//console.log(this.allSleepData);
	}

	presentModal() {
		this.modalController.create({
		  component: NightModalPage,
		  componentProps: { name: "INF 133" }
		}).then((modal) => {
		modal.present();
		})
	}
	dismissModal() {
		this.modalController.dismiss();
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
		
	}

	nightDBInput() {
		this.FirebaseService.addOvernightSleepLog(this.nightData);
	}

	sleepyDBInput() {
		this.FirebaseService.addRatingsSleepLog(this.sleepyData)
	}

	//overnight data input function
	nightInput() {
		var bedUTC = new Date(this.bedTime);
		 bedUTC = new Date(bedUTC.getTime() + ( bedUTC.getTimezoneOffset() * 60000 ) );
		
		var wakeUTC = new Date(this.wakeTime);
		 wakeUTC = new Date(wakeUTC.getTime() + ( wakeUTC.getTimezoneOffset() * 60000 ) );
		 
		this.sleepService.logOvernightData(new OvernightSleepData(bedUTC, wakeUTC));
		//console.log(this.bedTime);
		//console.log(this.wakeTime);
		//console.log(this.allSleepData);
	}

	//sleepiness rating data input function
	ratingInput() {
		var sleepyUTC = new Date(this.sleepyTime);
		 sleepyUTC = new Date(sleepyUTC.getTime() + ( sleepyUTC.getTimezoneOffset() * 60000 ) );

		this.sleepService.logSleepinessData(new StanfordSleepinessData(this.sleepRating, sleepyUTC));
		console.log(this.sleepRating);
		console.log(this.allSleepData);
		
	}

	//overnight logging function
	nightLogs() {
		console.log("Firebase nightLogs: " + this.FirebaseService.getOvernightSleepLogs());
		this.nightData = SleepService.AllOvernightData;
	}

	//sleepiness logging function
	sleepyLogs() {
		this.sleepyData = SleepService.AllSleepinessData;
	}
}
