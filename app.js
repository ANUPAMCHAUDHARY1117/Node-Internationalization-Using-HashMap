const HashMap = require('./hashmap'); 
let m = new HashMap();
  
//HERE I AM TRANSLATING HELLO 'MY NAME IS JOHN DOE INTO FRENCH'
var datas = [
['hello' , 'Bonjour!'], 
['are' , 'sont'],
['you' , 'vous'],
['my', 'mon'],
['name', 'prénom'],
['is', 'est'],
]

dataString = "hello my name is John Doe";
var outString = '';

datas.map(data => {
    m.set(data[0], data[1]);
});

keys = dataString.split(' ');
keys.map(key => {
    outString += m.get(key);
    outString += ' ';
});

console.log(outString);
