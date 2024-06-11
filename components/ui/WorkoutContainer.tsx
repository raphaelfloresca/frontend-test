import { View, Text, StyleSheet } from "react-native"
import ExerciseContainer from "./ExerciseContainer";
import { useQuery, gql } from '@apollo/client';
import transformData from "./transformData";
import { useState, useEffect, useRef } from "react";
import { getStartingElements, getAlternateElements, Exercise } from "./workoutContainerHelpers";

/**
 * Query the particular circuit needed
 */
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

/**
 * Return the container which holds the individual exercises.
 * Exercise swapping is handld here.
 *
 */
export default function WorkoutContainer() {
  // Get GraphQL data
  const { loading, error, data } = useQuery(GET_CIRCUIT);

  // Set exerciseList state
  const [exerciseList, setExerciseList] = useState<Exercise[]>([])

  // Refs to store allExercises and startingExercises
  const allExercisesRef = useRef<Exercise[]>([]);
  const startingExercisesRef = useRef<Exercise[]>([]);

  // Effect to update exerciseList when data changes
  useEffect(() => {
    // Check if data is available and transform it
    if (data) {
      const transformedData = transformData(data);
      allExercisesRef.current = transformedData.exercises;
      startingExercisesRef.current = getStartingElements(allExercisesRef.current);
      // Set exerciseList to startingExercises
      setExerciseList(startingExercisesRef.current);
    }
  }, [data]);

  // Handle loading and errors
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  // Get the exercises to swap to 
  const alternateExercises = getAlternateElements(allExercisesRef.current);

  // Manage the toggling of exercises
  const handleSwap = () => {
    // TODO: Handle this logic by running a comparison to the original array
    if (exerciseList.some((exercise: Exercise) => exercise.id === 7)) {
      const newList = alternateExercises
      setExerciseList(newList)
    } else {
      const newList = startingExercisesRef.current
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

