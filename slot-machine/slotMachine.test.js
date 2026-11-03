import { test } from "node:test";
import assert from "node:assert";
import { slotMachine } from "./slotMachine.js";

test("2 premiers symboles identiques : retourne le double de la mise", function () {
    assert.equal(slotMachine(5, ['+', '+', '%']), 10);
});
test("2 derniers symboles identiques : retourne le double de la mise", function () {
    assert.equal(slotMachine(5, ['%', '+', '+']), 10);
});
test("3 symboles identiques : retourne la mise x5", function () {
    assert.equal(slotMachine(10, ['+', '+', '+']), 50);
});
test("3 symboles Jackpot : retourne la mise x20", function () {
    assert.equal(slotMachine(50, ['$', '$', '$']), 1000);
});
test("aucun symbole identique : retourne 0", function () {
    assert.equal(slotMachine(5, ['+', '%', '$']), 0);
});

