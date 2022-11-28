import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { Option, currency, foods, foodType } from 'src/app/data/default-data';
import { MatCardModule } from '@angular/material/card';


@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	providers: [{
	    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
	}]
})
export class StepperComponent implements OnInit {
	isLinear = false;
	livingFormGroup: FormGroup=Object.create(null);
	transportFormGroup: FormGroup=Object.create(null);
	foodFormGroup: FormGroup=Object.create(null);  

	isLinearvarient = false;
 	isLinearposition = false;

	//food
	foodfirstFormGroup: FormGroup=Object.create(null);
	foodsecondFormGroup: FormGroup=Object.create(null);
	foodthirdFormGroup: FormGroup=Object.create(null);
	foodfourthFormGroup: FormGroup=Object.create(null);
	foodfifthFormGroup: FormGroup=Object.create(null);
	foodsixthFormGroup: FormGroup=Object.create(null);

	//transport
	transportfirstFormGroup: FormGroup=Object.create(null);
	transportsecondFormGroup: FormGroup=Object.create(null);
	transportthirdFormGroup: FormGroup=Object.create(null);
	transportfourthFormGroup: FormGroup=Object.create(null);
	transportfifthFormGroup: FormGroup=Object.create(null);
	transportsixthFormGroup: FormGroup=Object.create(null);
	transportseventhFormGroup: FormGroup=Object.create(null);
	transporteighthFormGroup: FormGroup=Object.create(null);
	transportninthFormGroup: FormGroup=Object.create(null);
	transporttenthFormGroup: FormGroup=Object.create(null);
	transporteleventhFormGroup: FormGroup=Object.create(null);
	transporttwelvethFormGroup: FormGroup=Object.create(null);

	//living
	lifestylefirstFormGroup: FormGroup=Object.create(null);
	lifestylesecondFormGroup: FormGroup=Object.create(null);
	lifestylethirdFormGroup: FormGroup=Object.create(null);
	lifestylefourthFormGroup: FormGroup=Object.create(null);
	lifestylefifthFormGroup: FormGroup=Object.create(null);
	lifestylesixthFormGroup: FormGroup=Object.create(null);
	lifestyleseventhFormGroup: FormGroup=Object.create(null);
	lifestyleeighthFormGroup: FormGroup=Object.create(null);
	lifestyleninthFormGroup: FormGroup=Object.create(null);
	lifestyletenthFormGroup: FormGroup=Object.create(null);
	lifestyleeleventhFormGroup: FormGroup=Object.create(null);
	lifestyletwelvethFormGroup: FormGroup=Object.create(null);

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {

	    // food
		this.foodfirstFormGroup = this._formBuilder.group({
			foodTypeCtrl: ['', Validators.required]
		});
		this.foodsecondFormGroup = this._formBuilder.group({
			foodCtrl: ['', Validators.required]
		});
		this.foodthirdFormGroup = this._formBuilder.group({
			drinksCtrl: [''],
		});
		this.foodfourthFormGroup = this._formBuilder.group({
			clothingCtrl: [''],
		});
		this.foodfifthFormGroup = this._formBuilder.group({
			wfhCtrl: [''],
		  });
		  this.foodsixthFormGroup = this._formBuilder.group({
			hotelCtrl: [''],
		  });

		//transport
		this.transportfirstFormGroup = this._formBuilder.group({
			carDieselCtrl: ['', Validators.required]
		});
		this.transportsecondFormGroup = this._formBuilder.group({
			carPetrolCtrl: ['', Validators.required]
		});
		this.transportthirdFormGroup = this._formBuilder.group({
			carElectricCtrl: [''],
		});
		this.transportfourthFormGroup = this._formBuilder.group({
			internationalFlightCtrl: [''],
		});
		this.transportfifthFormGroup = this._formBuilder.group({
			domesticFlightctrl: [''],
		});
		this.transportsixthFormGroup = this._formBuilder.group({
			busCtrl: [''],
		});
		this.transportseventhFormGroup = this._formBuilder.group({
			waterCtrl: [''],
		});
		this.transporteighthFormGroup = this._formBuilder.group({
			railCtrl: [''],
		});
		this.transportninthFormGroup = this._formBuilder.group({
			bikeCtrl: [''],
		});
		
		//lifestyle
	 this.lifestylefirstFormGroup = this._formBuilder.group({
		furnitureCtrl: ['', Validators.required]
	  });
	  this.lifestylesecondFormGroup = this._formBuilder.group({
		refrigeratorCtrl: ['', Validators.required]
	  });
	  this.lifestylethirdFormGroup = this._formBuilder.group({
		electricityCtrl: [''],
	  });
	  this.lifestylefourthFormGroup = this._formBuilder.group({
		gasCtrl: [''],
	  });
	  this.lifestylefifthFormGroup = this._formBuilder.group({
		naturalgasCtrl: [''],
	  });
	  this.lifestylesixthFormGroup = this._formBuilder.group({
		glassCtrl: [''],
	  });
	  this.lifestyleseventhFormGroup = this._formBuilder.group({
		booksPapersCtrl: [''],
	  });
	  this.lifestyleeighthFormGroup = this._formBuilder.group({
		plasticCtrl: [''],
	  });
	  this.lifestyleninthFormGroup = this._formBuilder.group({
		metalsCtrl: [''],
	  });
	  this.lifestyletenthFormGroup = this._formBuilder.group({
		electricitysmallCtrl: [''],
	  });
	  this.lifestyleeleventhFormGroup = this._formBuilder.group({
		electricitysITCtrl: [''],
	  });
	  this.lifestyletwelvethFormGroup = this._formBuilder.group({
		electricitylargeCtrl: [''],
	  });

		//Co2 App
		this.livingFormGroup = this._formBuilder.group({
			furnitureCtrl: [''],
			refrigeratorCtrl: [''],
			electricityCtrl: [''],
			gasCtrl: [''],
			naturalgasCtrl: [''],
			glassCtrl: [''],
			booksPapersCtrl: [''],
			plasticCtrl: [''],
			metalsCtrl: [''],
			currencyCtrl: ['USD'],
		  });
		  this.transportFormGroup = this._formBuilder.group({
			carDieselCtrl: [''],
			carPetrolCtrl: [''],
			carElectricCtrl: [''],
			internationalFlightCtrl: [''],
			domesticFlightctrl: [''],
			busCtrl: [''],
			waterCtrl: [''],
			railCtrl: [''],
		  });
		  this.foodFormGroup = this._formBuilder.group({
			foodTypeCtrl: [''],
			foodCtrl: [''],
			drinksCtrl: [''],
			clothingCtrl: [''],
			wfhCtrl: [''],
			hotelCtrl:[''],
		  });
		//   this.forthFormGroup = this._formBuilder.group({
		// 	secondCtrl: [''],
		//   });
	}

	//logic here
	foods: Option[] = foods;
	currency: Option[] = currency;
	foodType: Option[] = foodType;
  
	onSubmit() {
	//   if (this.livingFormGroup.valid) {
	// 	//add calculation calculation logic
	//   }
	}
}
