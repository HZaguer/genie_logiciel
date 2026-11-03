export function slotMachine(bet, result) {
    const [a, b, c] = result;

    if (a === b) {
        return bet * 2;
    }

    return 0;
}

