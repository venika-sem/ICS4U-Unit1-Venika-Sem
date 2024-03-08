/*This program calculates a board foot of wood
* By Venika Sem
* @version 1.0
* @since Feb-2024
*/

import { createPrompt } from 'bun-promptx'

function BoardFoot(width = number, height = number) {
        const volume = 144
        const length = volume / (width * height)
        return length
}

function main() {
        const widthString = createPrompt("Enter the width of the piece of wood (in inches): ")
        const heightString = createPrompt("Enter the height of the piece of wood (in inches): ")

        const width = parseFloat(widthString.value)
        const height = parseFloat(heightString.value)

if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        console.log("\nInvalid input. Width and height must be positive numbers.\n")
        return
}
const length = BoardFoot(width, height)
console.log(`To make exactly 1 board foot of wood, the length should be ${length.toFixed(1)} inches.`)
console.log(`\nDone.`)
}
// Call main function
main()
