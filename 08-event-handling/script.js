Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    writeCoordinate(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    removeFruit(e) {
      let fruitTxt = e.target.parentElement.firstChild.innerText;
      this.fruitBasket = this.fruitBasket.filter((fruit) => fruit !== fruitTxt);
    },
  },
}).mount("#app");
