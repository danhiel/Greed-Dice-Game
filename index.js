/**
*  Name: Danhiel Vu
*  Date: 12/15/2021
*
*  This is the JS for the greed dice HTML.
*/
"use strict";

(function() {

    const NUM_DICES = 5; // Number of dices used to roll
    const DICE_SIDES = 6; // Number of sides for a single dice.

    window.addEventListener('load', init);

    /**
     * Sets up an event listener to the roll button so we can roll the dices.
     */
    function init() {
        document.getElementById("roll").addEventListener("click", rollDice);
    }

    function rollDice() {
        let elem_freq = [0, 0, 0, 0, 0, 0];
        let score = 0;

        for (let i = 0; i < NUM_DICES; i++) {
            let dice = Math.floor(Math.random() * DICE_SIDES) + 1;
            document.getElementById("Dice" + (i + 1)).src = "images/dice" + dice + ".PNG";
            elem_freq[dice - 1]++;

            if (elem_freq[dice - 1] == 3 && (dice == 1 || dice == 5)) {
                score -= dice == 1 ? 200 : 100;
                score += dice == 1 ? 1000 : 500;

            } else if (elem_freq[dice - 1] == 3) {
                score += dice * 100;

            } else if (dice == 1 || dice == 5) {
                score += dice == 1 ? 100 : 50;
            }
        }
        document.getElementById("points").textContent = score;
    }
})();