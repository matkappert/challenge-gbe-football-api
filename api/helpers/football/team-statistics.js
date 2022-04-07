const axios = require('axios');
module.exports = {

  friendlyName: 'Football API - team statistics',

  description: 'This helper create a new ’Statistics’ database record for a team',

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
    },

    teamID: {
      type: 'number',
      required: true,
    },

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {

    // 'GET' API-Footballs team statistics using the season year, league ID and team ID.
    // API data can be accessed from 'axiosResponse.data.response'
    let axiosResponse;
    try {
      axiosResponse = await axios.request({
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        headers: {
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          'X-RapidAPI-Key': sails.config.rapidAPI,
        },
        params: {
          league: inputs.leagueID,
          season: inputs.seasonYear,
          team: inputs.teamID
        },
      });
      if (!axiosResponse || !axiosResponse.data || !axiosResponse.data.response) {
        exits.error('No axios response');
      }
    } catch (error) {
      exits.error(error);
    }

    // Create a new 'Statistics' database record for a team.
    // obviously this is not practical for production, records should be merged with any existing records if they exist.
    let statistic = axiosResponse.data.response;
    let record = await Statistics.create({
      leagueID: statistic.league.id,
      seasonYear: statistic.league.season,
      playedTotal: statistic.fixtures.played.total,
      winsTotal: statistic.fixtures.wins.total,
      drawsTotal: statistic.fixtures.draws.total,
      losesTotal: statistic.fixtures.loses.total,
      goalsFor: statistic.goals.for.total.total,
      goalsAgainst: statistic.goals.against.total.total,
      goalsDifference: (statistic.goals.for.total.total - statistic.goals.against.total.total),
      // append any additional data..
    }).fetch();
    // TODO: Implement error handling.

    // return a object of the record created.
    exits.success(record);

  }
};

