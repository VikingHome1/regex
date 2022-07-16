function match0ne(pattern, text){
  if (!pattern) return true; // any text matches an empty pattern
  if (!text) return false; // if pattern defined but text is empty there cannot be a match
  if (pattern === ".") return true; // any inputted text matches the wildcard
  return pattern === text;
}
function match(pattern, text){
  if (pattern === "") return true;
  // our base case - if the pattern is empty, any inputted text is a match
  else
    return(
      match0ne(pattern[0],text[0]) && match(pattern.slice(1), text.slice(1))
    );
  }
