const data = [
  {
    id: 1,
    name: 'db bench press',
    workout: 'chest/tris',
    focus: 'chest',
  },
  {
    id: 2,
    name: 'incline db bench press',
    workout: 'chest/tris',
    focus: 'chest',
  },
  {
    id: 3,
    name: 'decline db bench press',
    workout: 'chest/tris',
    focus: 'chest',
  },
  {
    id: 4,
    name: 'tricep cable pushdown',
    workout: 'chest/tris',
    focus: 'triceps',
  },
  {
    id: 5,
    name: 'bench press machine',
    workout: 'chest/tris',
    focus: 'chest',
  },
  {
    id: 6,
    name: 'dip',
    workout: 'chest/tris',
    focus: 'triceps',
  },
  {
    id: 7,
    name: 'skullcrusher',
    workout: 'chest/tris',
    focus: 'triceps',
  },
  {
    id: 8,
    name: 'seated triceps machine',
    workout: 'chest/tris',
    focus: 'triceps',
  },
  {
    id: 9,
    name: 'kickbacks',
    workout: 'chest/tris',
    focus: 'triceps',
  },
  {
    id: 10,
    name: 'bicep curls',
    workout: 'back/bis',
    focus: 'biceps',
  },
  {
    id: 11,
    name: 'pull-ups',
    workout: 'back/bis',
    focus: 'back',
  },
  {
    id: 12,
    name: 'pull-downs',
    workout: 'back/bis',
    focus: 'back',
  },
  {
    id: 13,
    name: 'seated row',
    workout: 'back/bis',
    focus: 'back',
  },
  {
    id: 14,
    name: 'hammer curls',
    workout: 'back/bis',
    focus: 'biceps',
  },
  {
    id: 15,
    name: 'cable bicep curls',
    workout: 'back/bis',
    focus: 'biceps',
  },
  {
    id: 16,
    name: 'back extension',
    workout: 'back/bis',
    focus: 'back',
  },
  {
    id: 17,
    name: 'sit-ups',
    workout: 'abs/core',
    focus: 'abs',
  },
  {
    id: 18,
    name: 'side plank',
    workout: 'abs/core',
    focus: 'abs',
  },
  {
    id: 19,
    name: 'leg lifts',
    workout: 'abs/core',
    focus: 'abs',
  },
  {
    id: 20,
    name: 'plank',
    workout: 'abs/core',
    focus: 'abs',
  },
  {
    id: 21,
    name: 'glute squeeze',
    workout: 'abs/core',
    focus: 'lower body',
  },
  {
    id: 22,
    name: 'leg extension',
    workout: 'shoulders/legs',
    focus: 'lower body',
  },
  {
    id: 23,
    name: 'calf raise',
    workout: 'shoulders/legs',
    focus: 'lower body',
  },
  {
    id: 24,
    name: 'hamstring squeeze',
    workout: 'shoulders/legs',
    focus: 'lower body',
  },
  {
    id: 25,
    name: 'leg raises',
    workout: 'shoulders/legs',
    focus: 'lower body',
  },
  {
    id: 26,
    name: 'running',
    workout: 'cardio',
    focus: 'cardio',
  },
  {
    id: 27,
    name: 'elliptical trainer',
    workout: 'cardio',
    focus: 'cardio',
  },
  {
    id: 28,
    name: 'shoulder press',
    workout: 'shoulders/legs,',
    focus: 'shoulders',
  },
  {
    id: 29,
    name: 'lateral raise',
    workout: 'shoulders/legs',
    focus: 'shoulders',
  },
  {
    id: 30,
    name: 'front raise',
    workout: 'shoulders/legs',
    focus: 'shoulders',
  },
  {
    id: 31,
    name: 'shrugs',
    workout: 'shoulders/legs',
    focus: 'shoulders',
  },
  {
    id: 32,
    name: 'scarecrows',
    workout: 'shoulders/legs',
    focus: 'shoulders',
  },
  {
    id: 33,
    name: 'push-ups',
    workout: 'chest/tris',
    focus: 'chest',
  },
];

function exerciseParser(data) {
  const chestTrisWorkout = [];
  const backBisWorkout = [];
  const absCoreWorkout = [];
  const shouldersLegsWorkout = [];
  const cardioWorkout = [];

  const myWorkouts = {
    chestTrisWorkout,
    backBisWorkout,
    absCoreWorkout,
    shouldersLegsWorkout,
    cardioWorkout,
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i].workout === 'chest/tris') {
      chestTrisWorkout.push(data[i].name);
    }
    if (data[i].workout === 'back/bis') {
      backBisWorkout.push(data[i].name);
    }
    if (data[i].workout === 'abs/core') {
      absCoreWorkout.push(data[i].name);
    }
    if (data[i].workout === 'shoulders/legs') {
      shouldersLegsWorkout.push(data[i].name);
    }
    if (data[i].workout === 'cardio') {
      cardioWorkout.push(data[i].name);
    }
  }
  return myWorkouts;
}

console.log(exerciseParser(data));

// full stack workout tracker app
// React frontend
// CRUD functionality for exercises and workouts
// Node/Express backend
// Postgres database
// build an API

// App
// Containers
// Navbar
// Dashboard
// Workouts
// Exercises
// Components
// Workout
// Exercise
