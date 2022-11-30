import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper";
import {
  Option,
  currency,
  foods,
  foodType,
  StorageKeys
} from "src/app/data/default-data";
import { MatCardModule } from "@angular/material/card";
import {
  ILivingHouse,
  ILifeStyle,
  ITransport,
  calculateCO2PercentageConsumtion
} from "src/app/services/data-mapper";
import { getControlvalue } from "src/app/services/common-utils";
import { LocalService } from "src/app/services/local-service";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class StepperComponent implements OnInit {
  isSubmitted: boolean = false;
  isCompleted: boolean = false;
  CO2IndividualTotalConsumtion: string = "";
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  isLinear = false;
  livingFormGroup: FormGroup = Object.create(null);
  transportFormGroup: FormGroup = Object.create(null);
  foodFormGroup: FormGroup = Object.create(null);

  isLinearvarient = false;
  isLinearposition = false;

  //food
  foodfirstFormGroup: FormGroup = Object.create(null);
  foodsecondFormGroup: FormGroup = Object.create(null);
  foodthirdFormGroup: FormGroup = Object.create(null);
  foodfourthFormGroup: FormGroup = Object.create(null);
  foodfifthFormGroup: FormGroup = Object.create(null);
  foodsixthFormGroup: FormGroup = Object.create(null);

  //transport
  transportfirstFormGroup: FormGroup = Object.create(null);
  transportsecondFormGroup: FormGroup = Object.create(null);
  transportthirdFormGroup: FormGroup = Object.create(null);
  transportfourthFormGroup: FormGroup = Object.create(null);
  transportfifthFormGroup: FormGroup = Object.create(null);
  transportsixthFormGroup: FormGroup = Object.create(null);
  transportseventhFormGroup: FormGroup = Object.create(null);
  transporteighthFormGroup: FormGroup = Object.create(null);
  transportninthFormGroup: FormGroup = Object.create(null);

  //living
  lifestylefirstFormGroup: FormGroup = Object.create(null);
  lifestylesecondFormGroup: FormGroup = Object.create(null);
  lifestylethirdFormGroup: FormGroup = Object.create(null);
  lifestylefourthFormGroup: FormGroup = Object.create(null);
  lifestylefifthFormGroup: FormGroup = Object.create(null);
  lifestylesixthFormGroup: FormGroup = Object.create(null);
  lifestyleseventhFormGroup: FormGroup = Object.create(null);
  lifestyleeighthFormGroup: FormGroup = Object.create(null);
  lifestyleninthFormGroup: FormGroup = Object.create(null);
  lifestyletenthFormGroup: FormGroup = Object.create(null);
  lifestyleeleventhFormGroup: FormGroup = Object.create(null);
  lifestyletwelvethFormGroup: FormGroup = Object.create(null);

  constructor(
    private _formBuilder: FormBuilder,
    private localStore: LocalService
  ) {}

  ngOnInit() {
    // food
    this.foodfirstFormGroup = this._formBuilder.group({
      foodTypeCtrl: ['', Validators.required]
    });
    this.foodsecondFormGroup = this._formBuilder.group({
      foodCtrl: ["", Validators.required]
    });
    this.foodthirdFormGroup = this._formBuilder.group({
      drinksCtrl: [""]
    });
    this.foodfourthFormGroup = this._formBuilder.group({
      clothingCtrl: [""]
    });
    this.foodfifthFormGroup = this._formBuilder.group({
      wfhCtrl: [""]
    });
    this.foodsixthFormGroup = this._formBuilder.group({
      hotelCtrl: [""]
    });

    //transport
    this.transportfirstFormGroup = this._formBuilder.group({
      carDieselCtrl: ["", Validators.required]
    });
    this.transportsecondFormGroup = this._formBuilder.group({
      carPetrolCtrl: ["", Validators.required]
    });
    this.transportthirdFormGroup = this._formBuilder.group({
      carElectricCtrl: [""]
    });
    this.transportfourthFormGroup = this._formBuilder.group({
      internationalFlightCtrl: [""]
    });
    this.transportfifthFormGroup = this._formBuilder.group({
      domesticFlightctrl: [""]
    });
    this.transportsixthFormGroup = this._formBuilder.group({
      busCtrl: [""]
    });
    this.transportseventhFormGroup = this._formBuilder.group({
      waterCtrl: [""]
    });
    this.transporteighthFormGroup = this._formBuilder.group({
      railCtrl: [""]
    });
    this.transportninthFormGroup = this._formBuilder.group({
      bikeCtrl: [""]
    });

    //lifestyle
    this.lifestylefirstFormGroup = this._formBuilder.group({
      furnitureCtrl: ["", Validators.required]
    });
    this.lifestylesecondFormGroup = this._formBuilder.group({
      refrigeratorCtrl: ["", Validators.required]
    });
    this.lifestylethirdFormGroup = this._formBuilder.group({
      electricityCtrl: [""]
    });
    this.lifestylefourthFormGroup = this._formBuilder.group({
      gasCtrl: [""]
    });
    this.lifestylefifthFormGroup = this._formBuilder.group({
      naturalgasCtrl: [""]
    });
    this.lifestylesixthFormGroup = this._formBuilder.group({
      glassCtrl: [""]
    });
    this.lifestyleseventhFormGroup = this._formBuilder.group({
      booksPapersCtrl: [""]
    });
    this.lifestyleeighthFormGroup = this._formBuilder.group({
      plasticCtrl: [""]
    });
    this.lifestyleninthFormGroup = this._formBuilder.group({
      metalsCtrl: [""]
    });
    this.lifestyletenthFormGroup = this._formBuilder.group({
      electricitysmallCtrl: [""]
    });
    this.lifestyleeleventhFormGroup = this._formBuilder.group({
      electricitysITCtrl: [""]
    });
    this.lifestyletwelvethFormGroup = this._formBuilder.group({
      electricitylargeCtrl: [""]
    });
  }

  foods: Option[] = foods;
  currency: Option[] = currency;
  foodType: Option[] = foodType;

  customerCO2Consumtion = () => {
    const livingCO2Data: ILivingHouse = {
      furniture: getControlvalue(
        this.lifestylefirstFormGroup.controls.furnitureCtrl.value
      ),
      refrigerator: getControlvalue(
        this.lifestylesecondFormGroup.controls.refrigeratorCtrl.value
      ),
      electricityLarge: getControlvalue(
        this.lifestyletwelvethFormGroup.controls.electricitylargeCtrl.value
      ),
      electricityIT: getControlvalue(
        this.lifestyleeleventhFormGroup.controls.electricitysITCtrl.value
      ),
      electricitySmall: getControlvalue(
        this.lifestyletenthFormGroup.controls.electricitysmallCtrl.value
      ),

      electricity: getControlvalue(
        this.lifestylethirdFormGroup.controls.electricityCtrl.value
      ),
      naturalGas: getControlvalue(
        this.lifestylefifthFormGroup.controls.naturalgasCtrl.value
      ),
      lPGGas: getControlvalue(
        this.lifestylefourthFormGroup.controls.gasCtrl.value
      ),

      glass: getControlvalue(
        this.lifestylesixthFormGroup.controls.glassCtrl.value
      ),
      booksPapers: getControlvalue(
        this.lifestyleseventhFormGroup.controls.booksPapersCtrl.value
      ),
      plastic: getControlvalue(
        this.lifestyleeighthFormGroup.controls.plasticCtrl.value
      ),

      // Not used properties
      metals: getControlvalue(
        this.lifestyleninthFormGroup.controls.metalsCtrl.value
      )
      //
    };

    const lifeStyleCO2Data: ILifeStyle = {
      foodType: this.foodfirstFormGroup.controls.foodTypeCtrl.value,
      food: getControlvalue(this.foodsecondFormGroup.controls.foodCtrl.value),
      drinks: getControlvalue(
        this.foodthirdFormGroup.controls.drinksCtrl.value
      ),
      clothing: getControlvalue(
        this.foodfourthFormGroup.controls.clothingCtrl.value
      ),
      wfh: getControlvalue(this.foodfifthFormGroup.controls.wfhCtrl.value),
      hotel: getControlvalue(this.foodsixthFormGroup.controls.hotelCtrl.value)
    };

    const transportCO2Data: ITransport = {
      carDiesel: getControlvalue(
        this.transportfirstFormGroup.controls.carDieselCtrl.value
      ),
      carPetrol: getControlvalue(
        this.transportsecondFormGroup.controls.carPetrolCtrl.value
      ),
      carElectric: getControlvalue(
        this.transportthirdFormGroup.controls.carElectricCtrl.value
      ),
      motorBike: getControlvalue(
        this.transportninthFormGroup.controls.bikeCtrl.value
      ),
      taxi: 0, //getControlvalue(this.transporteighthFormGroup.controls.mot.value),
      bus: getControlvalue(this.transportsixthFormGroup.controls.busCtrl.value),
      sea: getControlvalue(
        this.transportseventhFormGroup.controls.waterCtrl.value
      ),
      rail: getControlvalue(
        this.transporteighthFormGroup.controls.railCtrl.value
      ),
      internationalFlight: getControlvalue(
        this.transportfourthFormGroup.controls.internationalFlightCtrl.value
      ),
      domesticFlight: getControlvalue(
        this.transportfifthFormGroup.controls.domesticFlightctrl.value
      )
    };

    return {
      livingDetails: livingCO2Data,
      lifeStyle: lifeStyleCO2Data,
      transport: transportCO2Data
    };
  };

  onSubmit() {
    this.isSubmitted = true;
    this.localStore.saveData(StorageKeys.isSubmitted, "true");
    setTimeout(() => {
      localStorage.clear();
      this.localStore.removeData(StorageKeys.CO2IndividualConsumption);
      this.localStore.removeData(StorageKeys.CO2IndividualPerConsumption);
      this.localStore.saveData(StorageKeys.isSubmitted, "false");
      const eSGDataMappingObject = this.customerCO2Consumtion();
      const co2Consumtion = calculateCO2PercentageConsumtion(
        eSGDataMappingObject.livingDetails,
        eSGDataMappingObject.lifeStyle,
        eSGDataMappingObject.transport
      );
      this.CO2IndividualTotalConsumtion = (
        co2Consumtion.CO2IndividualTotalConsumtion / 1000
      ).toFixed(2).toString();
      this.localStore.saveData(
        StorageKeys.CO2IndividualConsumption,
        JSON.stringify(co2Consumtion.CO2IndividualConsumption)
      );
      this.localStore.saveData(
        StorageKeys.CO2IndividualPerConsumption,
        JSON.stringify(co2Consumtion.CO2IndividualPerConsumption)
      );
      this.localStore.saveData(
        StorageKeys.CO2IndividualTotalConsumtion,
        JSON.stringify(co2Consumtion.CO2IndividualTotalConsumtion)
      );
      this.isCompleted = true;
      this.isSubmitted = false;
    }, 2000);
  }
}
