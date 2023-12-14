function shortcut(s1, s2) {
  // your code here
	    if not s1 or not s2:  
        return ''

   // # Return the initial letters of the strings
   return s1[0].upper() + s2[0].lower()
}

// // Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:"); 
alert(shortcut(s1, s2));
 