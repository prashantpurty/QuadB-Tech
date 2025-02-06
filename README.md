# Simple Blockchain Implementation in Node.js

This project demonstrates a simple blockchain implementation using Node.js and the `crypto` module. It includes basic features such as block mining, transaction handling, and blockchain integrity validation.

## Features
- Implements a basic blockchain structure.
- Uses SHA-256 hashing for block security.
- Implements proof-of-work (mining) to secure the blockchain.
- Provides a method to validate blockchain integrity.
- Demonstrates tampering and validation checks.

## Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/simple-blockchain.git
   cd simple-blockchain
   ```
2. Install dependencies (none required for this project, but you can initialize a package if needed):
   ```sh
   npm init -y
   ```

## Usage
Run the script to see the blockchain in action:
```sh
node blockchain.js
```

## Code Structure
- **Block Class**: Defines a block with properties such as index, transactions, previous hash, and a mining function.
- **Blockchain Class**: Manages the chain, adds blocks, mines blocks, and validates the chain.
- **Example Usage**: Demonstrates mining new blocks and validating the blockchain.

## Tampering Demonstration
The script also includes a demonstration of blockchain tampering to show how the validation function detects modifications.

## Example Output
```
Mining block 1...
Block 1 mined: 0000abcd1234...
Mining block 2...
Block 2 mined: 0000efgh5678...
Blockchain valid?: true
Tampering with blockchain...
Blockchain valid after tampering?: false
```

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Feel free to fork the project and submit pull requests for improvements.

## Author
Your Name
[GitHub Profile](https://github.com/prashantpurty)

