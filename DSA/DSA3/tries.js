class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    //app
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currNode.children[char]) {
        currNode.children[char] = new TrieNode();
      }
      currNode = currNode.children[char];
    }
    currNode.isEndOfWord = true;
  }
  search(word) {
    //apple
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currNode.children[char]) {
        return false;
      }
      currNode = currNode.children[char];
    }
    return currNode.isEndOfWord;
  }
  display(node = this.root, word = "") {
    if (node.isEndOfWord) {
      console.log(word);
    }
    for (let char in node.children) {
      this.display(node.children[char], word + char);
    }
  }
  delete(word) {
    if (!word) return;
    const deleteRecursively = (node, word, index) => {
      if (index === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }
      const char = word[index];
      const childNode = node.children[char];

      if (!childNode) {
        return false;
      }
      const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);
      if (shouldDeleteChild) {
        delete node.children[char];
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }
      return false;
    };
    deleteRecursively(this.root, word, 0);
  }
  autoComplete(prefix) {
    let currNode = this.root;
    for (let char of prefix) {
      if (!currNode.children[char]) return [];
      currNode = currNode.children[char];
    }    
    return this.getWords(currNode);
  }
  getWords(node) {
    const words = [];
    if (node.isEndOfWord) words.push("");
    for (const char in node.children) {
      const childWords = this.getWords(node.children[char]);
      for (let i = 0; i < childWords.length; i++) {
        words.push(char + childWords[i]);
      }
    }
    return words;
  }
}

const t = new trie();

t.insert("apple");
t.insert("app");
t.insert("ant");
t.insert("and");
t.insert("arunghosh")
t.insert("muneer")

console.log(t.search("ant"));
t.display();
t.delete("app");
console.log(t.search("app"));
t.display();
console.log(t.autoComplete("a"));
