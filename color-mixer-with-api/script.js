Vue.createApp({
  data() {
    return {
      rgbValues: {
        red: "255",
        green: "255",
        blue: "255",
      },
      activeMainColor: "rgb(255, 0, 0)",
      activeFormColor: "rgba(255,0,0,0.5)",
    };
  },
  async created() {
    await this.getRandomColor();
  },

  computed: {
    buildColor() {
      this.activeMainColor = this.makeRgb(this.rgbValues);
      this.activeFormColor = this.makeRgba(this.rgbValues);
      return this.activeMainColor;
    },
  },

  methods: {
    makeRgb(values) {
      return (this.activeMainColor = `rgb(${values.red.padStart(
        3,
        "0"
      )}, ${values.green.padStart(3, "0")}, ${values.blue.padStart(3, "0")})`);
    },
    makeRgba(values) {
      return `rgba(${values.red}, ${values.green}, ${values.blue}, 0.5)`;
    },

    async getRandomColor() {
      console.log("hello");
      const response = await fetch("https://dummy-apis.netlify.app/api/color");
      const results = await response.json();
      this.rgbValues.red = results.rgb.r + "";
      this.rgbValues.green = results.rgb.g + "";
      this.rgbValues.blue = results.rgb.b + "";
    },
  },
}).mount("#app");
