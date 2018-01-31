-2018.01.31
--Began project
--Finished after some hours. Everything went smoothly until I encountered a small
problem, which interestingly was a similar kind of problem that I encountered when I
was working on Rock Paper Scissors Shoot UI version. I was able to make the squares
that fit, was able to make the colors change, was able to reset all the squares when
clicking the button. The problem surfaced when I had to resize the squares again.
I knew that resizing the board meant that I had to remove all the squares and create
them again. And since the color change events are triggered when mouse hovers over
each of the squares, I'd have to add the event all over the squares again, since they are
deleted when the user clicks on the resize button. So I put creating squares and adding events to those squares as an iteration process when clicking on resize button. My mistake was adding the function of resizing the board itself to the iteration process. Fixing this
(simply removing the recursion) took me too much time. I should've noticed that the prompt, asking the user to type a number, repeated more and more (1 time, 2 time, 4 time, 8 times and so on) as I clicked the resize button. Anyways, it's complete and I'm pretty
happy it worked out in the end.
--There was another minor problem: when choosing 3,9,12 squares, the squares were out of place. This was caused because the container did not have enough space to put in another square. Instead of changing the size of the container (because that would not fix the problem), I changed the formula for getting the length of the square, which was:
Math.round(800/number of squares) 800 as the width of the container. The rounding up, instead of down, caused the lack of space, so I used Math.floor to make things fit, if not perfectly.
