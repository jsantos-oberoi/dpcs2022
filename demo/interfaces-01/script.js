// Heron's Method (for calculating square roots):
//  Heuristic: Method for getting a "close enough" answer.
//      1. Make a guess for the square root of N.
//      2. Test the guess for being "close enough".
//      3. Not close enough: modify the guess as:
//              the average of the guess and N / guess
//              (guess + N / guess) / 2
//         Loop back to 2
//      4. Guess is close enough, return.

//  Example: square root of 30
//      guess_0: 15
//      guess_1: (15 + (30 / 15)) / 2 = 8.5
//      guess_2: (8.5 + (30 / 8.5)) / 2 = ....

function update() {
    //output.innerText = num.value;
    let N = num.value;
    let guess = N / 2;
    output.innerHTML = "<br>" + guess;

    while (!isClose(guess, N)) {
        guess = nextGuess(guess, N);
        output.innerHTML += "<br>" + guess;
    }

    output.innerHTML += "<br>" + guess;
}

function nextGuess(guess, N) {
    return (guess + N / guess) / 2;
}

function isClose(guess, N) {
    let tolerance = tol.value;

    if (Math.abs(guess * guess - N) < tolerance) {
        return true;
    }

    return false;
}


calc_button.onclick = update;
//num.onchange = update;