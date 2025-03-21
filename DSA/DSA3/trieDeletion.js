class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this._searchNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._searchNode(prefix) !== null;
  }

  _searchNode(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }

  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(node, word, index) {
    if (index === word.length) {
      // If we've reached the end of the word, mark the end of word as false
      if (!node.isEndOfWord) {
        return false; // Word not found
      }
      node.isEndOfWord = false;

      // If the node has no other children, it can be deleted
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const childNode = node.children[char];
    if (!childNode) {
      return false; // Word not found
    }

    const shouldDeleteCurrentNode = this._deleteHelper(
      childNode,
      word,
      index + 1
    );

    if (shouldDeleteCurrentNode) {
      delete node.children[char];

      // Return true if the current node has no other children and is not the end of another word
      return Object.keys(node.children).length === 0 && !node.isEndOfWord;
    }

    return false;
  }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("bat");

console.log(trie.search("apple")); // true
trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app")); // true (app should still be there)
console.log(trie.search("bat")); // true
