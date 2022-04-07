/**
 * football/Statistics.js
 *
 * @description :: A model from api-football statistics of a team in relation to a given competition and season..
 * @docs        :: https://rapidapi.com/api-sports/api/api-football/
 * @docs        :: https://www.api-football.com/documentation-v3#operation/get-teams-statistics
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    leagueID: {
      type: 'number',
      required: true,
    },
    seasonYear: {
      type: 'number',
      required: true,
      min: 1999,
      max: 2050,
    },

    playedTotal: {
      type: 'number',
      required: true,
    },

    winsTotal: {
      type: 'number',
      required: true,
    },

    drawsTotal: {
      type: 'number',
      required: true,
    },

    losesTotal: {
      type: 'number',
      required: true,
    },

    goalsFor: {
      type: 'number',
      required: true,
    },

    goalsAgainst: {
      type: 'number',
      required: true,
    },

    goalsDifference: {
      type: 'number',
      required: true,
      description: '[goalsFor] - [goalsAgainst]'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    team:{
      model:'teams'
    },



  },

};

