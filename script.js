function shortcut(s1, s2) {
  // Check if either of the strings is empty
  if (!s1 || !s2) {
    return '';
  }

  // Return the initial letters of the strings
  return s1.charAt(0).toUpperCase() + s2.charAt(0).toLowerCase();
}

// Test cases
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));             // Output: 'Hw'
console.log(shortcut("", "International"));           // Output: ''
console.log(shortcut("Amnesty", ""));                 // Output: ''
