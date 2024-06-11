export type Exercise = {
  id: number
  imageIndex: number
  name: string
  sets: string
  reps: string
  weight?: string
  swapWithExerciseId?: number | undefined
}

/**
 * Get the first element with a swapWithExerciseId and the rest from an exercise array
 */
export const getStartingElements = (array: Exercise[]) => {
  const firstArray = array.filter(item => item.swapWithExerciseId !== null).slice(0, 1)
  const secondArray = array.filter(item => item.swapWithExerciseId === null)

  return [...firstArray, ...secondArray];
}

/**
 * Get the second element with a swapWithExerciseId and the rest
 */
export const getAlternateElements = (array: Exercise[]) => {
  const firstArray = array.filter(item => item.swapWithExerciseId !== null).slice(1, 2)
  const secondArray = array.filter(item => item.swapWithExerciseId === null)

  return [...firstArray, ...secondArray];
}
