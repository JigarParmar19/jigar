document.addEventListener('DOMContentLoaded', (event) => {
    const dice = document.getElementById('dice');
    const rollButton = document.getElementById('rollButton');

    rollButton.addEventListener('click', () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        dice.textContent = getDiceFace(diceRoll);
    });

    function getDiceFace(number) {
        const diceFaces = [
            '⚀', // 1
            '⚁', // 2
            '⚂', // 3
            '⚃', // 4
            '⚄', // 5
            '⚅'  // 6
        ];
        return diceFaces[number - 1];
    }
});
