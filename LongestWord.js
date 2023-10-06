function removePt(str) {
  // Regular expression pattern to match leading and trailing punctuation - 
//   , . ! ( )
  const regex = /^[,.!()\s]+|[,.!()\s]+$/g; 
  return str.replace(regex, '');
}

function findValid(word) {
  // Regular expression to match English letters 
  const regex = /^[a-z]+$/;
  return regex.test(word);
}

function countVowels(word) {
    //Regular expression to find number of vowels
  return (word.match(/[aeiouAEIOU]/g) || []).length;
}

function findLongestWord(sentence){
  let longestWord = '';
  let maxWordLength = 0;
  let maxVowelCount = 0;
  
  const words = sentence.toLowerCase().split(' ');

  // Iterate through the words
  for (const word of words){
      currentWord = removePt(word)
      currlength = currentWord.length
      
      if(currlength >= maxWordLength && findValid(currentWord)){
          vowels = countVowels(currentWord)
           if(currlength > maxWordLength || vowels > maxVowelCount){
               longestWord = currentWord;
               maxWordLength = currlength
               maxVowelCount = vowels
           }
      }

  }
  
  return longestWord;
  
}

// Test Cases:
let sentences = ['“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)',
    '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socratesaeiou)',
    '“Smart people learn from everything and everyone, average people from their experience2, stupid people already, have all the answers” (Socrates)'
    ]
    
for(const sentence of sentences){
    console.log('Sentence : ',sentence,'\n');
    console.log("Longest word:" + findLongestWord(sentence)+'\n\n');
}


//Time Complexity: O(n*k) , n: Number of words, k: longest word