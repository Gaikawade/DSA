
// Pattern - 7
//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
let pattern7 = (n) => {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n-i-1; j++) {
        process.stdout.write(' ')
      }
      for(let j = 0; j < (2 * i) + 1; j++) {
        process.stdout.write('*')
      }
      for(let j = 0; j < n-i-1; j++) {
        process.stdout.write(' ')
      }
      console.log()
    }
  }
  
  // Pattern - 8
  // ***********
  //  ********* 
  //   *******  
  //    *****   
  //     ***    
  //      *     
  let pattern8 = (n) => {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < i; j++) {
        process.stdout.write(' ')
      }
      for(let j = 0; j < 2*(n-i)-1; j++) {
        process.stdout.write('*')
      }
      for(let j = 0; j < i; j++) {
        process.stdout.write(' ')
      }
      console.log()
    }
  }
  
  // Pattern - 9
  //      *     
  //     ***    
  //    *****   
  //   *******  
  //  ********* 
  // ***********
  // ***********
  //  ********* 
  //   *******  
  //    *****   
  //     ***    
  //      *  
  let pattern9 = (n) => {
    pattern7(n)
    pattern8(n)
  }
  
pattern9(5)  