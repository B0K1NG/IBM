function calculateCarFee(duration, enteredTimestamp) {
  const weekdaysDaytimeRate = 1; // EUR/h
  const fridayEveningRate = 2; // EUR/h
  const saturdayRate = 4; // EUR/h
  const sundayRate = 0; // EUR/h

  const millisecondsPerHour = 1000 * 60 * 60;
  const hours = duration / millisecondsPerHour;

  const date = new Date(enteredTimestamp);
  const day = date.getDay();
  const hours24 = date.getHours();

  if (day >= 1 && day <= 4) {
    if (hours24 >= 8 && hours24 < 17) {
      return hours * weekdaysDaytimeRate;
    }
  } else if (day === 5) {
    if (hours24 >= 8 && hours24 < 20) {
      return hours * fridayEveningRate;
    }
  } else if (day === 6) {
    return hours * saturdayRate;
  } else if (day === 0) {
    return hours * sundayRate;
  }

  return 0; // Return 0 if the conditions are not met
}

function calculateMotorcycleFee(duration, enteredTimestamp) {
  const weekdaysDaytimeRate = 0.5; // EUR/h
  const fridayEveningRate = 1.5; // EUR/h
  const saturdayRate = 2; // EUR/h
  const sundayRate = 0; // EUR/h

  const millisecondsPerHour = 1000 * 60 * 60;
  const hours = duration / millisecondsPerHour;

  const date = new Date(enteredTimestamp);
  const day = date.getDay();
  const hours24 = date.getHours();

  if (day >= 1 && day <= 4) {
    if (hours24 >= 8 && hours24 < 17) {
      return hours * weekdaysDaytimeRate;
    }
  } else if (day === 5) {
    if (hours24 >= 8 && hours24 < 20) {
      return hours * fridayEveningRate;
    }
  } else if (day === 6) {
    return hours * saturdayRate;
  } else if (day === 0) {
    return hours * sundayRate;
  }

  return 0; // Return 0 if the conditions are not met
}

function calculateBusFee(duration, enteredTimestamp) {
  const weekdaysDaytimeRate = 2; // EUR/h
  const fridayEveningRate = 3.5; // EUR/h
  const saturdayRate = 5; // EUR/h
  const sundayRate = 0; // EUR/h

  const millisecondsPerHour = 1000 * 60 * 60;
  const hours = duration / millisecondsPerHour;

  const date = new Date(enteredTimestamp);
  const day = date.getDay();
  const hours24 = date.getHours();

  if (day >= 1 && day <= 4) {
    if (hours24 >= 8 && hours24 < 17) {
      return hours * weekdaysDaytimeRate;
    }
  } else if (day === 5) {
    if (hours24 >= 8 && hours24 < 20) {
      return hours * fridayEveningRate;
    }
  } else if (day === 6) {
    return hours * saturdayRate;
  } else if (day === 0) {
    return hours * sundayRate;
  }

  return 0; // Return 0 if the conditions are not met
}

module.exports = {
  calculateCarFee,
  calculateMotorcycleFee,
  calculateBusFee,
};
