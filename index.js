let PetContract;

// 2. Set contract address and ABI
const Pet_Contract_Address = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const Pet_Contract_ABI = [[
    {
        "inputs": [],
        "name": "getPet",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "petAge",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "petName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "petOwner",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newPetName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newPetOwner",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newPetAge",
                "type": "string"
            }
        ],
        "name": "setPet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum);
console.log("Provider: ", provider);
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);

        /* 3.1 Create instance of pet smart contract */
        PetContract = new ethers.Contract(
            Pet_Contract_Address,
            Pet_Contract_ABI,
            signer
        );
    });
});

var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname))
    .listen(3000, () => console.log('Server running on 3000...'));