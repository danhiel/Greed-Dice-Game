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

    /**
     * Generates random dices and calculates the score of the random dices. Updates the
     * front end with the new dices and the new score.
     */
    function rollDice() {
        let dices = new Array(NUM_DICES);

        // Generate random dices.
        for (let i = 0; i < dices.length; i++) {
            let dice = Math.floor(Math.random() * DICE_SIDES) + 1;
            id("Dice" + (i + 1)).src = "images/dice" + dice + ".PNG";
            dices[i] = dice;
        }

        // Calculate score.
        let score = calculateScore(dices);
        id("points").textContent = score;
    }

    /**
     * Calcualtes the score from the given array of dices.
     * @param {IntArray} dices the array containing the rolled dices.
     * @returns the integer score.
     */
    function calculateScore(dices) {
        let elem_freq = new Array(DICE_SIDES);
        let score = 0;

        // Initialize elem_freq with 0s
        for (let i = 0; i < elem_freq.length; i++) {
            elem_freq[i] = 0;
        }

        // Calculate score
        for (let i = 0; i < dices.length; i++) {
            let dice = dices[i];
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
        return score;
    }

    // JUnit testing for calculate score.
    if (typeof module !== 'undefined') module.exports = calculateScore;

    /**
     * Returns the DOM element from the given element ID.
     * @param {String} element the DOM name.
     * @returns the DOM object matching the string element name.
     */
    function id(element) {
        return document.getElementById(element);
    }
})();