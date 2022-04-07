/**
 * football/Teams.js
 *
 * @description :: A model from api-football available teams information..
 * @docs        :: https://rapidapi.com/api-sports/api/api-football/
 * @docs        :: https://www.api-football.com/documentation-v3#tag/Teams
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    teamID: {
      type: 'number',
      required: true,
      unique: true,
      example: 33,
    },
    name: {
      type: 'string',
      required: true,
      example: 'Liverpool',
    },
    code: {
      type: 'string',
      required: true,
      example: 'LIV',
    },
    country: {
      type: 'string',
      required: true,
      example: 'England',
    },
    founded: {
      type: 'string',
      required: true,
      example: '1892',
    },
    national: {
      type: 'boolean',
      required: true,
    },
    logo: {
      type: 'string',
      required: true,
      example: 'https://media.api-sports.io/football/teams/40.png',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    statistics:{
      collection: 'statistics',
      via: 'team',
    },

  },

};

