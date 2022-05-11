function longestWord(line:string){
    let strSplit = line.split(' ');
    var longest = strSplit[0];
    for (var i=0; i<strSplit.length; i++){
      if(longest.length<strSplit[i].length)
      longest = strSplit[i];
    }

    return longest;
}

console.log(longestWord('TypeScript has more functionality'));