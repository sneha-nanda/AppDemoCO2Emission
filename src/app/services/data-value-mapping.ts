import {
  ILivingHouse,
  ILifeStyle,
  ITransport
} from './data-mapper';

export const customerCO2Consumtion = () => {
  const livingCO2Data: ILivingHouse = {
    furniture: 3,
    refrigerator: 0,
    electricityLarge: 2,
    electricityIT: 5,
    electricitySmall: 0,

    electricity: 2,
    naturalGas: 6,
    lPGGas: 5,

    glass: 5,
    booksPapers: 0,
    plastic: 0,

    // Not used properties
    metals: 0
    //
  };

  const lifeStyleCO2Data: ILifeStyle = {
    foodType: 2,
    food: 2,
    drinks: 2,
    clothing: 2,
    wfh: 2,
    hotel: 2,
  };

  const transportCO2Data: ITransport = {
    carDiesel: 2,
    carPetrol: 2,
    carElectric: 2,
    motorBike: 2,
    taxi: 2,
    bus: 2,
    sea: 2,
    rail: 2,
    internationalFlight: 2,
    domesticFlight: 2
  };

  return {
    livingDetails: livingCO2Data,
    lifeStyle: lifeStyleCO2Data,
    transport: transportCO2Data
  };
};
