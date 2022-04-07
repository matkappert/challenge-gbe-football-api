const axios = require('axios'); // https://github.com/axios/axios
module.exports = {

  friendlyName: 'Football API - teams',

  description: 'This helper creates a record for each team using the season year and league identification from RapidAPI’s API-Football.',

  inputs: {

    leagueID: {
      type: 'number',
      required: true,
      min: 0,
      max: 1000,
    },

    seasonYear: {
      type: 'number',
      required: true,
      min: 1999,
      max: 2050,
    }

  },

  exits: {

    success: {
      description: 'All done.',
    },

  },

  fn: async function (inputs, exits) {

    // 'GET' API-Footballs teams using the season year and league identification.
    // API data can be accessed from 'axiosResponse.data.response'
    let axiosResponse;
    try {
      axiosResponse = await axios.request({
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        headers: {
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          'X-RapidAPI-Key': sails.config.rapidAPI,
        },
        params: {
          league: inputs.leagueID,
          season: inputs.seasonYear
        },
      });
      if (!axiosResponse || !axiosResponse.data || !axiosResponse.data.response) {
        exits.error('No axios response');
      }
    } catch (error) {
      exits.error(error);
    }

    // Iterate over all the response and create a new 'Teams' database record for each team.
    // obviously this is not practical for production, records should be merged with any existing records if they exist.
    let records = [];
    for (let i in axiosResponse.data.response) {
      let team = axiosResponse.data.response[i].team;
      let record = await Teams.create({
        teamID: team.id,
        name: team.name,
        code: team.code,
        country: team.country,
        founded: team.founded,
        national: team.national,
        logo: team.logo,
        // append any additional data..
      }).fetch();
      // TODO: Implement error handling.
      records.push(record);
      sails.log(`${i}/${_.size(axiosResponse.data.response) - 1}\tID: ${record.teamID}\tTeam: ${record.name}, ${team.country}`);
    }

    // return a object of the records created.
    exits.success(records);

  }
};

