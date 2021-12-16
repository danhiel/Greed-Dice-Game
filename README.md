# Greed-Dice-Game

Greed is a press-your-luck dice rolling game. In the game, the player rolls the dice and tries to
earn as many points as possible from the result. For the purposes of this kata, we will just be
scoring a single roll of five dice

## My Solution

We can take the greedy approach and calculate the largest point as we iterate through the
the dices. This gives us a worst time complexity of O(n).

## My Questions

- What are the win conditions of the dice game?

## My Assumptions

- Assume that the dice is a 6-sided dice with the numbers from 1 to 6.
- Assume that there is an equal probability for every side on the dice to be rolled.

## Different Solutions Contemplated

- Brute force O(2n): First loop calculate triples. Second loop calculates single ones and fives.