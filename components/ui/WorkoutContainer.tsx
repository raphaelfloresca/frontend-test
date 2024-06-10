import { View, Text, StyleSheet, Button } from "react-native"
import ExerciseContainer from "./ExerciseContainer";
import { useQuery, gql } from '@apollo/client';
import transformData from "./transformData";
import { useState } from "react";

const GET_CIRCUIT = gql`
{
  getCircuit(id: 6) {
    name
    getExerciseCircuitMappings {
      exerciseCircuitMappings {
        sets
        reps
        weight
        swapWithExerciseId
        exercise {
          id
          name
        }
      }
    }
  }
}
`

type Exercise = {
  name: string
  sets: string
  reps: string
  weight?: string
  swapWithExerciseId?: number | undefined
}

const getStartingElements = (array) => {
  const firstArray = array.filter(item => item.swapWithExerciseId !== null).slice(0, 1)
  const secondArray = array.filter(item => item.swapWithExerciseId === null)

  return [...firstArray, ...secondArray];
}

const getAlternateElements = (array) => {
  const firstArray = array.filter(item => item.swapWithExerciseId !== null).slice(1, 2)
  const secondArray = array.filter(item => item.swapWithExerciseId === null)

  return [...firstArray, ...secondArray];
}

export default function WorkoutContainer() {
  // Get GraphQL data
  const { loading, error, data } = useQuery(GET_CIRCUIT);

  // Handle loading and errors
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  // Tidy data into a form that's easier to query
  const transformedData = transformData(data)
  const allExercises = transformedData.exercises

  // Get the exercises to render first
  const startingExercises = getStartingElements(allExercises)
  const alternateExercises = getAlternateElements(allExercises)

  const [exerciseList, setExerciseList] = useState(startingExercises)

  const handleSwap = () => {
    if (exerciseList.some((exercise) => exercise.id === 7)) {
      const newList = alternateExercises
      setExerciseList(newList)
    } else {
      const newList = startingExercises
      setExerciseList(newList)
    }
  };

  return (
    <View style={styles.container}>
      {exerciseList.map((exercise: Exercise, index: number) => (
        <ExerciseContainer
          key={index}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          swapWithExerciseId={exercise.swapWithExerciseId}
          handleSwap={handleSwap}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#E9E9E9",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 28
  },
})

