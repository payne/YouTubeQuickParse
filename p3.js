const fs = require('fs');

fs.reo

let content;
try {
   content = fs.readFileSync('j3.json', { encoding: 'utf8' });
} catch(err) {
  // An error occurred
  console.error(err);
}
const data  = JSON.parse(content);
data.forEach( d => console.log(`* [${d.title}](https://YouTu.be/${d.videoId})`) )
