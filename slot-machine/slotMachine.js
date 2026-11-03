const JACKPOT = '$';

export function slotMachine(bet, result) {
    const [a, b, c] = result;

    if (a === JACKPOT && b === JACKPOT && c === JACKPOT) {
        return bet * 20;
    }

    if (a === b && b === c) {
        return bet * 5;
    }

    if (a === b || b === c) {
        return bet * 2;
    }

    return 0;
}
