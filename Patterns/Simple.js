// Pattern - 1
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// Pattern - 2
// *
// * *
// * * *
// * * * *
// * * * * *
let pattern2 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};

// Pattern - 3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let pattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
};

// Pattern - 4
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
let pattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(i + " ");
    }
    console.log();
  }
};

// Pattern - 5
// * * * * *
// * * * *
// * * *
// * *
// *
let pattern5 = (n) => {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};

// Pattern - 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let pattern6 = (n) => {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + ' ');
    }
    console.log();
  }
};

pattern6(5);
