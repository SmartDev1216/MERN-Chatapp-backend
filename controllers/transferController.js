exports.transfer = async (req, res) => {


  try {

    // const { Connection, Keypair, SystemProgram, Transaction, sendAndConfirmTransaction } = require('@solana/web3.js');

    // async function initializeAccount(data, senderKeyPair) {
    //   // Connect to the Solana devnet
    //   const connection = new Connection('https://api.devnet.solana.com');
    
    //   // Replace with your actual smart contract program ID
    //   const programId = new PublicKey('5Kb15y8qWUSRN2p6PnaQSghSFqxVuynax5owTaBa4qKz');
    
    //   // Create a Solana transaction
    //   const transaction = new Transaction().add(
    //     // Invoke the initialize function of the smart contract
    //     anchor.web3.SystemProgram.transfer({
    //       fromPubkey: senderKeyPair.publicKey,
    //       toPubkey: senderKeyPair.publicKey,
    //       lamports: 0, // Amount can be 0 for initialization
    //     }),
    //     anchor.web3.SystemProgram.programId, // Specify the program ID
    //     new anchor.web3.AccountMeta({ pubkey: senderKeyPair.publicKey, isSigner: true, isWritable: true }), // Signer account
    //     new anchor.web3.AccountMeta({ pubkey: senderKeyPair.publicKey, isSigner: false, isWritable: true }), // Mutable account
    //   );
    
    //   // Set the transaction fee payer and recent blockhash
    //   transaction.feePayer = senderKeyPair.publicKey;
    //   transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    
    //   // Sign the transaction
    //   transaction.sign(senderKeyPair);
    
    //   // Send and confirm the Solana transaction
    //   const signature = await sendAndConfirmTransaction(connection, transaction);
    
    //   console.log('Transaction Signature:', signature);
    // }
    
    // // Replace with your actual sender secret key bytes
    // const senderKeyPair = Keypair.fromSecretKey(new Uint8Array(/* sender secret key bytes here */));
    
    // // Replace with the desired data value to initialize the account
    // const dataToInitialize = 42;
    
    // // Call the initializeAccount function
    // initializeAccount(dataToInitialize, senderKeyPair);
   
    const { Connection } = require('@solana/web3.js');

    const connection = new Connection('https://api.mainnet-beta.solana.com');

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};