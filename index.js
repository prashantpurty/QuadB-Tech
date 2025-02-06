const crypto = require('crypto');

class Block {
  constructor(index, transactions, previousHash = '') {
    this.index = index;
    this.timestamp = new Date().toISOString();
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto.createHash('sha256').update(
      this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce
    ).digest('hex');
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block ${this.index} mined: ${this.hash}`);
  }
}

class Blockchain {
  constructor(difficulty = 2) {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = difficulty;
  }

  createGenesisBlock() {
    return new Block(0, 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Example Usage
const myBlockchain = new Blockchain(2);

console.log("Mining block 1...");
myBlockchain.addBlock(new Block(1, [{ sender: "Alice", receiver: "Bob", amount: 10 }]));

console.log("Mining block 2...");
myBlockchain.addBlock(new Block(2, [{ sender: "Charlie", receiver: "Dave", amount: 20 }]));

console.log("Blockchain valid?:", myBlockchain.isChainValid());

// Tampering demonstration
console.log("Tampering with blockchain...");
myBlockchain.chain[1].transactions = [{ sender: "Eve", receiver: "Frank", amount: 100 }];

console.log("Blockchain valid after tampering?:", myBlockchain.isChainValid());
