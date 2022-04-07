module.exports = {


  friendlyName: 'GET Teams',

  inputs: {
  },

  exits: {
    notFound: {
      description: 'No records in Teams were found.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    // Find all records in Teams and link Statistics to each item.
    let records = await Teams.find({}).populate('statistics').tolerate(() => {
      sails.log.error('Failed to find Teams');
    });

    // If there are no Team records, respond thru the "notFound" exit.
    if (!records) { throw 'notFound'; }

    // add additional data to each record.
    for(let record of records){
      record.isSelected = false;
    }

    return exits.success(records);
  }


};
