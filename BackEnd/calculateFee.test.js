const { calculateCarFee, calculateMotorcycleFee, calculateBusFee } = require('./calculateFee');

// Test Suite for calculateCarFee
describe('calculateCarFee', () => {
  const durationInSeconds = 3600; // 1 hour (3600 seconds)

  // Test Monday to Thursday
  test('calculates car fee correctly for Monday to Thursday', () => {
    // Test the function
    const calculatedFee = calculateCarFee(durationInSeconds, 'Monday');

    // Assertion
    expect(calculatedFee).toBe(1);
  });

  // Test Friday
  test('calculates car fee correctly for Friday', () => {
    // Test the function
    const calculatedFee = calculateCarFee(durationInSeconds, 'Friday');

    // Assertion
    expect(calculatedFee).toBe(2);
  });

  // Test Saturday
  test('calculates car fee correctly for Saturday', () => {
    // Test the function
    const calculatedFee = calculateCarFee(durationInSeconds, 'Saturday');

    // Assertion
    expect(calculatedFee).toBe(4);
  });

  // Test Sunday
  test('calculates car fee correctly for Sunday', () => {
    // Test the function
    const calculatedFee = calculateCarFee(durationInSeconds, 'Sunday');

    // Assertion
    expect(calculatedFee).toBe(0);
  });
});

// Test Suite for calculateMotorcycleFee
describe('calculateMotorcycleFee', () => {
  const durationInSeconds = 3600; // 1 hour (3600 seconds)

  // Test Monday to Thursday
  test('calculates motorcycle fee correctly for Monday to Thursday', () => {
    // Test the function
    const calculatedFee = calculateMotorcycleFee(durationInSeconds, 'Monday');

    // Assertion
    expect(calculatedFee).toBe(0.5);
  });

  // Test Friday
  test('calculates motorcycle fee correctly for Friday', () => {
    // Test the function
    const calculatedFee = calculateMotorcycleFee(durationInSeconds, 'Friday');

    // Assertion
    expect(calculatedFee).toBe(1.5);
  });

  // Test Saturday
  test('calculates motorcycle fee correctly for Saturday', () => {
    // Test the function
    const calculatedFee = calculateMotorcycleFee(durationInSeconds, 'Saturday');

    // Assertion
    expect(calculatedFee).toBe(2);
  });

  // Test Sunday
  test('calculates motorcycle fee correctly for Sunday', () => {
    // Test the function
    const calculatedFee = calculateMotorcycleFee(durationInSeconds, 'Sunday');

    // Assertion
    expect(calculatedFee).toBe(0);
  });
});

// Test Suite for calculateBusFee
describe('calculateBusFee', () => {
  const durationInSeconds = 3600; // 1 hour (3600 seconds)

  // Test Monday to Thursday
  test('calculates bus fee correctly for Monday to Thursday', () => {
    // Test the function
    const calculatedFee = calculateBusFee(durationInSeconds, 'Monday');

    // Assertion
    expect(calculatedFee).toBe(2);
  });

  // Test Friday
  test('calculates bus fee correctly for Friday', () => {
    // Test the function
    const calculatedFee = calculateBusFee(durationInSeconds, 'Friday');

    // Assertion
    expect(calculatedFee).toBe(3.5);
  });

  // Test Saturday
  test('calculates bus fee correctly for Saturday', () => {
    // Test the function
    const calculatedFee = calculateBusFee(durationInSeconds, 'Saturday');

    // Assertion
    expect(calculatedFee).toBe(5);
  });

  // Test Sunday
  test('calculates bus fee correctly for Sunday', () => {
    // Test the function
    const calculatedFee = calculateBusFee(durationInSeconds, 'Sunday');

    // Assertion
    expect(calculatedFee).toBe(0);
  });
});
