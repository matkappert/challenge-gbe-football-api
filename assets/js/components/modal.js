parasails.registerComponent('modal', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    //…
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      //…
      isVisible: false,
    };
  },


  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    show: function () {
      this.isVisible = true;
    },
    hide: function () {
      this.$emit('close');
      this.isVisible = false;
    }

  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <object>
    <transition enter-active-class="transition-all ease-in-out duration-200"  enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all ease-in-out duration-200" leave-class="opacity-100" leave-to-class="opacity-0" >
      <div class="fixed inset-0 bg-zinc-300/70 backdrop-saturate-0 backdrop-blur-sm z-20 overflow-hidden w-screen h-screen" aria-hidden="true" v-if="isVisible" @click="hide()"></div>
    </transition>
    <transition enter-active-class="transition-all ease-in-out duration-200"  enter-class="opacity-0 scale-90 -translate-y-32"  enter-to-class="opacity-100 scale-100 translate-y-0"  leave-active-class="transition-all ease-in-out duration-200"  leave-class="opacity-100 scale-100 translate-y-0"  leave-to-class="opacity-0 scale-90 -translate-y-32"  >
      <div v-if="isVisible" @click.self="hide()" class="fixed inset-0 z-20 overflow-y-auto p-4 sm:p-6 md:p-20 " role="dialog" aria-modal="true">
        <div class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 ">
          <slot name="default">
          </slot>          
        </div>
      </div>
    </transition>
  </object>
`});
