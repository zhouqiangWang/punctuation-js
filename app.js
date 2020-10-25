const express = require('express');
const axios = require('axios').default;
const trie = require('./TrieTree');

const app = express();
const port = 3000;
const DictURL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';

async function main() {
    let dict = (await axios.get(DictURL)).data;

    let dicts = dict.split('\n');
    console.log(typeof dicts);
    console.log(dicts[0]);

    dicts.forEach(ele => {
        trie.addWord(ele);
    });


    app.get('/', (req, res) => {
        let result = {
            data: trie.predictWord(req.query.stem)
        }
        res.send(result)
    })
    
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

main();