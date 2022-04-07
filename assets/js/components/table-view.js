parasails.registerComponent('table-view', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'selectedRecords',
    'modal'
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      //…
      records: [],
    };
  },



  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },

  mounted: async function () {
    //…
    this.records = await Cloud.getTeams();
  },

  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clearSelection: function () {
      for (let record of this.records) {
        record.isSelected = false;
      }
      this.$emit('update:selectedRecords', []);
    },

    tableRowClick: function (record) {
      record.isSelected = !record.isSelected;
      let selectedRecords = _.filter(this.records, { 'isSelected': true });
      this.$emit('update:selectedRecords', selectedRecords);

      if (_.size(selectedRecords) === 2) {
        this.clearSelection();
      }
    },

    goalsDifferenceClass: function (record) {
      if (record.isSelected) {
        return record.statistics[0].goalsDifference > 0 ? 'text-green-300' : record.statistics[0].goalsDifference < 0 ? 'text-red-300' : 'text-gray-300';
      }
      return record.statistics[0].goalsDifference > 0 ? 'text-green-600' : record.statistics[0].goalsDifference < 0 ? 'text-red-600' : 'text-gray-600';
    }

  },


  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="-mx-4 mt-8 overflow-visible shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table  class="min-w-full">
        <thead class="bg-gray-50 ">
          <tr class="sticky top-0 z-10  bg-gray-50/75 backdrop-blur-sm">
            <th scope="col" class=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Club</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Total</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Won</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Drawn</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Lost</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900 hidden sm:table-cell">GF</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900 hidden sm:table-cell">GA</th>
            <th scope="col" class=" px-3 py-3.5 text-center text-sm font-semibold text-gray-900 hidden sm:table-cell">GD</th>
          </tr>
        </thead>
        <tbody class="border-0 bg-white">
          <!-- Loop though records -->
          <tr v-for="record in records" class="group" :class="[record.isSelected?'bg-gray-600 text-white':'text-gray-600' ]" @click="tableRowClick(record)">
            <td class="w-full max-w-0  py-1 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-6">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="record.logo" alt="">
                </div>
                <div class="ml-4 ">
                  <dd class="font-medium ">{{record.name}}</dd>
                </dl>
                </div>
              </div>              
            </td>
            <td class="px-3 py-4 text-center">{{record.statistics[0].playedTotal}}</td>
            <td class="px-3 py-4 text-center">{{record.statistics[0].winsTotal}}</td>
            <td class="px-3 py-4 text-center">{{record.statistics[0].drawsTotal}}</td>
            <td class="px-3 py-4 text-center">{{record.statistics[0].losesTotal}}</td>
            <td class="px-3 py-4 text-center hidden sm:table-cell">{{record.statistics[0].goalsFor}}</td>
            <td class="px-3 py-4 text-center hidden sm:table-cell">{{record.statistics[0].goalsAgainst}}</td>
            <td class="px-3 py-4 text-center hidden sm:table-cell" :class="goalsDifferenceClass(record)">{{record.statistics[0].goalsDifference}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>   
`});
