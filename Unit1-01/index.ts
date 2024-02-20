/*
 * This is a program that calculates the maple logs.
 *
 *  @author Venika Sem
 *  @version 1.0
 *   @since Feb-2024
*/

import { createPrompt } from 'bun-promptx'

const truckLimit = 1100

const lengthOfLog = createPrompt('Enter the length of the logs in meters ( 0.25, 0.5, 1): ')

console.log(`\nEnter the length of the logs: ${String(lengthOfLog.value)}`)

try {
    if (isNaN(Number(lengthOfLog.value))) {
        throw new Error('Invalid input.')
      }
  let massLogs = 20 * Number(lengthOfLog.value)

   if (massLogs === 0) {
         throw new Error('Mass of logs cannot be zero.')
      }

   let numberOfLogs = truckLimit / massLogs

   console.log(`The number of logs is ${String(numberOfLogs)}`)
} catch (error) {
    console.error(`Error: ${error.message}`)
}

 console.log('\nDone.')
