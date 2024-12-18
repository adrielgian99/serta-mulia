const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {

 const db = new Firestore({

databaseId: 'predictions'

})
}

module.exports = storeData;