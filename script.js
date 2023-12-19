class UberPricingCalculator {
  constructor(distance, duration, surgeMultiplier = 1.0) {
    this.baseFare = 2.5;
    this.perMileRate = 1.25; 
    this.perMinuteRate = 0.2; 
    this.surgeMultiplier = surgeMultiplier; 
    this.distance = distance;
    this.duration = duration;
  }

  calculateFare() {
    
    const finalSurgeMultiplier = this.surgeMultiplier * 1.5; 

    
    let fare =
      this.baseFare +
      this.distance * this.perMileRate +
      this.duration * this.perMinuteRate;

    
    fare *= finalSurgeMultiplier;

    return fare;
  }
}