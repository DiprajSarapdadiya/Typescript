function unique(str: string){
  let strSplit = str.split('');
  let check='';
  for(var i=0; i<strSplit.length; i++){
    if(!check.includes(strSplit[i]))
    check = check+strSplit[i];
  }
  return check;
}
console.log(unique('prominentpixel'));

