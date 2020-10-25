class TrieNode {
    constructor(value) {
        this.children = {};
        this.endWord = null;
        this.value = value;
    }
}

class TrieTree extends TrieNode {
    constructor() {
        super(null);
    }

    addWordHelper(node, str) {
        if (!node.children[str[0]]) {
            node.children[str[0]] = new TrieNode(str[0]);
            if (str.length === 1) {
    
              node.children[str[0]].endWord = 1;
            }
          } else {
    
          }
          if (str.length > 1) {
            this.addWordHelper(node.children[str[0]], str.slice(1));
          }
    }

    addWord(str) {
        this.addWordHelper(this, str);
    }

    getRemainingTree(string, tree) {
        var node = tree;
        while (string) {
          node = node.children[string[0]];
          string = string.substr(1);
        }
        return node;
    }

    allWordsHelper(stringSoFar, tree, res) {
        for (let k in tree.children) {
            const child = tree.children[k]
            var newString = stringSoFar + child.value;
            if (child.endWord) {
                res.push(newString);
            }
            this.allWordsHelper(newString, child, res);
        }
    }

    predictWord(str) {
        let res = [];
        let remainNode = this.getRemainingTree(str, this);

        this.allWordsHelper(str, remainNode, res);

        return res;
    }
}

module.exports = new TrieTree();
