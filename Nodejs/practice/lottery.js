function lottery(...percentages) {
    let remainingPct = 1 - percentages.reduce((acc, cur) => acc + cur, 0);
    let probabilities = [...percentages, remainingPct].map(x => Math.round(x * 100) / 100);

    console.log(probabilities);

    // Calculate cumulative thresholds
    let thresholds = probabilities.map((_, i) => 
        probabilities.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0)
    );

    const outcomes = ["First Prize", "Second Prize", "Third Prize", "Special Prize", "Nothing"];

    let randomValue = Math.random();

    // Determine which outcome the random value falls into
    for (let i = 0; i < thresholds.length; i++) {
        if (randomValue <= thresholds[i]) {
            console.log(outcomes[i]);
            break;
        }
    }

    console.log("Random Value:", randomValue);
    console.log("Thresholds:", thresholds);
}

let first = 0.1;
let second = 0.2;
let third = 0.3;
let special = 0.25;

let pcts = [first, second, third, special];
lottery(...pcts);
