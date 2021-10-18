const fs = require('fs');

try {
  const lines = fs.readFileSync('./README.md', 'utf8').split('\n');
  const remainingExercises = lines.filter((line) => line.startsWith('- [ ]'));
  if (remainingExercises.length === 0) {
    console.log('No exercises remaining!');
    return;
  }
  const randomIndex = Math.floor(Math.random() * remainingExercises.length);
  const randomExercise =
    remainingExercises[randomIndex].match(/- \[ \] \[(.+)\]/)[1];
  console.log(
    `${remainingExercises.length} exercises remaining. Try '${randomExercise}' next.`,
  );
} catch (err) {
  console.error(err);
}
