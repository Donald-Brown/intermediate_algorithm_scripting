function convertHTML(str) {
  // return str
  //   .replace(/&/g, "&amp;")
  //   .replace(/</g, "&lt;")
  //   .replace(/>/g, "&gt;")
  //   .replace(/"/g, "&quot;").replace(/'/g, '&apos;');

  let entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }
  return str.replace(/([&<>"'])/g, match => entities[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
//convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List") should return "Schindler&apos;s List".
// convertHTML("<>") should return "&lt;&gt;".
// convertHTML("abc") should return "abc".
