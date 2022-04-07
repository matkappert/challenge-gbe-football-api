module.exports = {


  friendlyName: 'rebuild football database',


  description: 'Running this script will remove all existing records from the database and create new one using RapidAPI’s API-Football',

  inputs: {

    leagueID: {
      type: 'number',
      defaultsTo: 39, //Premier League - England
      min: 0,
      max: 1000,
    },

    seasonYear: {
      type: 'number',
      defaultsTo: 2020,
      min: 1999,
      max: 2050,
    }

  },


  fn: async function (inputs) {

    sails.log.warn('WARNING: All records are about the be deleted...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Obviously this is not practical for production, records should be merged with any existing records if they exist.
    await Statistics.destroy({});
    await Teams.destroy({});
    sails.log('All records have been  deleted');

    // Get all the teams using the season year and league identification.
    let teams = await sails.helpers.football.teams.with({
      leagueID: inputs.leagueID,
      seasonYear: inputs.seasonYear,
    });

    // Create a new Statistics record for each team and link it to the team record.
    for (let team of teams) {
      let statistics = await sails.helpers.football.teamStatistics.with({
        leagueID: inputs.leagueID,
        seasonYear: inputs.seasonYear,
        teamID: team.teamID
      });
      await Teams.addToCollection(team.id, 'statistics').members([statistics.id]);
      sails.log(`statistics ID: ${statistics.id}\tTeam ID: ${team.teamID}`);
    }

  }


};

