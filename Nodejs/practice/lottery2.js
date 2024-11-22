
// Define the LotteryStrategy interface (abstract strategy)
class LotteryStrategy {
    calculateOutcome(percentages) {
        throw new Error("This method should be implemented by concrete strategy classes.");
    }
}

// Concrete strategy that implements the lottery logic
class DefaultLotteryStrategy extends LotteryStrategy {
    calculateOutcome(percentages) {
        // Round each percentage to two decimal places
        percentages = percentages.map(pct => Math.round(pct * 100) / 100);
        
        // Calculate probabilities with rounding and ensuring the sum equals 1
        let remainingPct = 1 - percentages.reduce((acc, cur) => acc + cur, 0);
        let probabilities = [...percentages, Math.round(remainingPct * 100) / 100];

        // Calculate cumulative thresholds
        let thresholds = probabilities.map((_, i) => 
            probabilities.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0)
        );

        // Define labels for the different lottery outcomes
        const outcomes = ["First Prize", "Second Prize", "Third Prize", "Special Prize", "Nothing"];

        let randomValue = Math.random();

        console.log(randomValue);
        console.log(probabilities);
        console.log(thresholds);

        // Determine which outcome the random value falls into
        for (let i = 0; i < thresholds.length; i++) {
            if (randomValue <= thresholds[i]) {
                return outcomes[i]; // Return the result instead of logging
            }
        }


        return "Nothing"; // Fallback outcome
    }
}

// Context class that uses the strategy
class LotteryContext {
    constructor(strategy) {
        this.strategy = strategy;  // Inject the strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    runLottery(percentages) {
        return this.strategy.calculateOutcome(percentages);
    }
}

// Client code (main execution)
let first = 0.11;
let second = 0.12;
let third = 0.13;
let special = 0.25;
let percentages = [first, second, third, special];

// Choose a lottery strategy (DefaultLotteryStrategy in this case)
const defaultStrategy = new DefaultLotteryStrategy();
const lotteryContext = new LotteryContext(defaultStrategy);

// Run the lottery and print the result
const result = lotteryContext.runLottery(percentages);
console.log("Lottery Result:", result);
