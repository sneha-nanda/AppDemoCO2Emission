import { customerCO2Consumtion } from "./data-value-mapping";
import { CompanyPercentage } from "./organizationData";

export interface ILivingHouse {
  furniture: number;
  refrigerator: number;
  electricityLarge: number;
  electricityIT: number;
  electricitySmall: number;

  electricity: number;
  naturalGas: number;
  lPGGas: number;

  glass: number;
  booksPapers: number;
  plastic: number;

  // Not used properties
  metals: number;
  //
}

export interface ILifeStyle {
  foodType: number;
  food: number;
  drinks: number;
  clothing: number;
  wfh: number;
  hotel: number;
}

export interface ITransport {
  carDiesel: number;
  carPetrol: number;
  carElectric: number;
  motorBike: number;
  taxi: number;
  bus: number;
  sea: number;
  rail: number;
  internationalFlight: number;
  domesticFlight: number;
}

export interface IGoGreenFields {
  livingDetails: ILivingHouse;
  lifestyle: ILifeStyle;
  transport: ITransport;
}

export interface IGoGreenCO2Consumtion {
  livingCO2: number;
  lifestyleCO2: number;
  transportCO2: number;
}

export interface CO2IndividualPerConsumption {
  co2LivingPercentage: number;
  co2TransportPercentage: number;
  co2LifeStylePercentage: number;
}

export interface CO2IndividualConsumption {
  LivingCO2: number;
  lifeStyleCO2: number;
  transportCO2: number;
}

export const goGreenData = (
  livingData: ILivingHouse,
  lifestyle: ILifeStyle,
  transportData: ITransport
) => {
  const livingCO2 =
    livingData.furniture * 0.312611780172903 +
    livingData.refrigerator * 4.36333 +
    livingData.electricity * 0.19338 +
    livingData.electricityLarge * 3.267 +
    livingData.electricityIT * 24.86548 +
    livingData.electricitySmall * 5.64795 +
    livingData.plastic * 3.11629 +
    livingData.naturalGas * 0.03446 +
    livingData.lPGGas * 0.06264 +
    livingData.glass * 1.402767 +
    livingData.booksPapers * 0.82886 +
    livingData.metals * 5.26856;

  const lifeStyleCO2 =
    lifestyle.food * 0.28 +
    lifestyle.clothing * 0.31917 +
    lifestyle.wfh * 0.34075 +
    lifestyle.hotel * 10.4;

  const transportCO2 =
    transportData.carDiesel * 0.17082 +
    transportData.carPetrol * 0.17048 +
    transportData.carElectric * 0.0514 +
    transportData.motorBike * 0.16237 +
    transportData.taxi * 0.20826 +
    transportData.internationalFlight * 0.14063 +
    transportData.domesticFlight * 0.15102 +
    transportData.bus * 0.10778 +
    transportData.sea * 0.11286 +
    transportData.rail * 0.02861;

  return {
    Living: livingCO2,
    Transport: transportCO2,
    Lifestyle: lifeStyleCO2
  };
};

export const calculateCO2PercentageConsumtion = (
  livingData: ILivingHouse,
  lifestyle: ILifeStyle,
  transportData: ITransport
) => {
  // Replace below default data once data will from form
  // const co2ConsumptionCategoryWise = customerCO2Consumtion();
  // const co2ConsumptionCategory = goGreenData(
  //   co2ConsumptionCategoryWise.livingDetails,
  //   co2ConsumptionCategoryWise.lifeStyle,
  //   co2ConsumptionCategoryWise.transport
  // );

  const co2ConsumptionCategory = goGreenData(
    livingData,
    lifestyle,
    transportData
  );

  // Total CO2 consumtion in tonnes
  const totalCO2Consumption = 
    (co2ConsumptionCategory.Living +
      co2ConsumptionCategory.Transport +
      co2ConsumptionCategory.Lifestyle) /
      1000;

  // percentage Calculation  of living, transport and lifestyle
  const individualCategoryCO2Perentage = {
    co2LivingPercentage: (
      ((co2ConsumptionCategory.Living / 1000) / totalCO2Consumption) *
      100
    ).toString(),
    co2TransportPercentage: (
      ((co2ConsumptionCategory.Transport/1000) / totalCO2Consumption) *
      100
    ).toString(),
    co2LifeStylePercentage: (
      ((co2ConsumptionCategory.Lifestyle/1000) / totalCO2Consumption) *
      100
    ).toString()
  };

  return {
    CO2IndividualPerConsumption: {
      co2LivingPercentage: individualCategoryCO2Perentage.co2LivingPercentage,
      co2TransportPercentage:
        individualCategoryCO2Perentage.co2TransportPercentage,
      co2LifeStylePercentage:
        individualCategoryCO2Perentage.co2LifeStylePercentage
    },
    CO2IndividualConsumption: {
      LivingCO2: co2ConsumptionCategory.Living,
      lifeStyleCO2: co2ConsumptionCategory.Lifestyle,
      transportCO2: co2ConsumptionCategory.Transport
    },
    CO2IndividualTotalConsumtion:
      co2ConsumptionCategory.Living +
      co2ConsumptionCategory.Lifestyle +
      co2ConsumptionCategory.Transport
  };
};
