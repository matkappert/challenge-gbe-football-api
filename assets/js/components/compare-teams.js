parasails.registerComponent('compare-teams', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'records',
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
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
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    comparePointsClass: function (x, y) {
      return x > y ? 'text-green-500' : x < y ? 'text-red-500' : 'text-blue-500';
    },
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: ` 
    <object>
      <div v-if="_.size(records) >= 2" class="mt-10 pb-12 bg-white sm:pb-16">
        <!-- TEAM -->
        <dl class=" bg-white grid  gap-4 grid-cols-5 ">
          <div class="col-span-2 flex flex-col  text-center">
            <div class="mx-auto h-14 w-14">
              <img class="h-14 w-14 rounded-full" :src="records[0].logo" alt="">
            </div>
            <dt class="order-1 mt-2 text-lg leading-6 font-medium text-gray-700 hidden sm:inline">{{records[0].name}}</dt>
            <dt class="order-1 mt-2 text-2xl leading-6 font-medium text-gray-700 inline sm:hidden">{{records[0].code}}</dt>
          </div>
          <div class="flex flex-col pt-3 text-center">
            <dt class="order-2 mt-2 text-4xl sm:text-7xl leading-6 font-extrabold text-gray-700">VS</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <div class="mx-auto h-14 w-14">
              <img class="h-14 w-14 rounded-full" :src="records[1].logo" alt="">
            </div>
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 hidden sm:inline">{{records[1].name}}</dt>
            <dt class="order-2 mt-2 text-2xl leading-6 font-medium text-gray-700 inline sm:hidden">{{records[1].code}}</dt>
          </div>
        </dl>
        <dl class=" bg-white grid  gap-4 grid-cols-5 pt-8">

          <!-- PLAYED TOTAL -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].playedTotal, records[1].statistics[0].playedTotal)">{{records[0].statistics[0].playedTotal}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">TOTAL</dt>
          </div>
          <div class=" col-span-2 flex flex-col  text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].playedTotal, records[0].statistics[0].playedTotal)">{{records[1].statistics[0].playedTotal}}</dd>
          </div>

          <!-- WON -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].winsTotal, records[1].statistics[0].winsTotal)">{{records[0].statistics[0].winsTotal}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">WON</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].winsTotal, records[0].statistics[0].winsTotal)">{{records[1].statistics[0].winsTotal}}</dd>
          </div>

          <!-- DRAW -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].drawsTotal, records[1].statistics[0].drawsTotal)">{{records[0].statistics[0].drawsTotal}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">DRAW</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].drawsTotal, records[0].statistics[0].drawsTotal)">{{records[1].statistics[0].drawsTotal}}</dd>
          </div>

          <!-- LOST -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].losesTotal, records[1].statistics[0].losesTotal)">{{records[0].statistics[0].losesTotal}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">LOST</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].losesTotal, records[0].statistics[0].losesTotal)">{{records[1].statistics[0].losesTotal}}</dd>
          </div>

          <!-- GOALS FOR -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].goalsFor, records[1].statistics[0].goalsFor)">{{records[0].statistics[0].goalsFor}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700"><span class="hidden sm:inline">GOALS</span> FOR</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].goalsFor, records[0].statistics[0].goalsFor)">{{records[1].statistics[0].goalsFor}}</dd>
          </div>

          <!-- GOALS AGAINST -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].goalsAgainst, records[1].statistics[0].goalsAgainst)">{{records[0].statistics[0].goalsAgainst}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700"><span class="hidden sm:inline">GOALS</span> AGAINST</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].goalsAgainst, records[0].statistics[0].goalsAgainst)">{{records[1].statistics[0].goalsAgainst}}</dd>
          </div>

          <!-- GOALS DIFFERENCE -->
          <div class="col-span-2 flex flex-col  text-center">
            <dd class="order-1 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[0].statistics[0].goalsDifference, records[1].statistics[0].goalsDifference)">{{records[0].statistics[0].goalsDifference}}</dd>
          </div>
          <div class="flex flex-col text-center">
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 inline sm:hidden">DIFF</dt>
            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 hidden sm:inline">GOALS DIFFERENCE</dt>
          </div>
          <div class="col-span-2 flex flex-col text-center">
            <dd class="order-3 text-3xl sm:text-5xl font-extrabold" :class="comparePointsClass(records[1].statistics[0].goalsDifference, records[0].statistics[0].goalsDifference)">{{records[1].statistics[0].goalsDifference}}</dd>
          </div>
        </dl>
      </div>
    </object>
`});
