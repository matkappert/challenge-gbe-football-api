parasails.registerComponent('sign-up', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [

  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      //…
      isVisible: false,
      hasErrors: false,
      fullName: '',
      emailAddress: '',
      password: '',
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
  watch: {
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    formSubmit: async function () {
      if (_.size(this.fullName) < 3 || _.size(this.fullName) > 50) {
        this.hasErrors = true;
        return;
      }
      if (_.size(this.emailAddress) < 3 || _.size(this.emailAddress) > 50 || !parasails.util.isValidEmailAddress(this.emailAddress)) {
        this.hasErrors = true;
        return;
      }
      if (_.size(this.password) < 3 || _.size(this.password) > 50) {
        this.hasErrors = true;
        return;
      }
          
      let results = await Cloud.signup.with({
        fullName: this.fullName,
        emailAddress: this.emailAddress,
        password: this.password
      }).tolerate(()=>{
        this.hasErrors = true;
      });

      if(results){
        this.$emit('update:signed-up', results);
      }

    }
  },



  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <object>
    <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="formSubmit()" @keydown.meta.enter="formSubmit()">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
            <div class="mt-1">
              <input v-model.trim="fullName" id="name" name="name" type="name" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-700" :class="[hasErrors?'border-pink-600':'']">
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input v-model.trim="emailAddress" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-700" :class="[hasErrors?'border-pink-600':'']">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input v-model.trim="password" id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-700" :class="[hasErrors?'border-pink-600':'']">
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
          </div>
        </form>

        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500"> OR </span>
        </div>
      </div>

      <div>
        <button @click="$emit('view-sign-in-page')" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
      </div>

    </div>
  </object>
`});

