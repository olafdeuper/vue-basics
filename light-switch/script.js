"use strict";

Vue.createApp({
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNightDay() {
      this.isActive = !this.isActive;
      if (this.isActive === false) {
        document.title = "Good Morning!";
      } else {
        document.title = "Good Night!";
      }
    },
  },
}).mount("#app");
