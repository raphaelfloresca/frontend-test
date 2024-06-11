/**
 * Transform the data returned by the GraphQL endpoint to a format that's easier to query.
 */
export default function transformData(data) {
  // Extract circuit name
  const circuitName = data.getCircuit.name;

  // Extract exercise mappings
  const exerciseMappings = data.getCircuit.getExerciseCircuitMappings[0].exerciseCircuitMappings;

  // Transform exercise mappings
  const exercises = exerciseMappings.map(mapping => ({
    id: mapping.exercise.id,
    name: mapping.exercise.name,
    sets: mapping.sets,
    reps: mapping.reps,
    weight: mapping.weight,
    swapWithExerciseId: mapping.swapWithExerciseId// You can set the weight to null or any default value here
  }));

  // Return transformed data
  return {
    circuitName: circuitName,
    exercises: exercises
  };
}
