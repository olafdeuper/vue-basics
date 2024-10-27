Vue.createApp({
  data() {
    return {
      allTodos: [
        {
          id: 200,
          done: false,
          protected: true,
          description: "Learn Vue",
        },
        {
          id: 300,
          done: false,
          protected: true,
          description: "Learn Python",
        },
      ],
      description: "",
      selectedTodo: "",
      filter: "filter-all",
    };
  },

  created() {
    console.log("hallo");
    let result = localStorage.getItem("state") || [];
    console.log(result);
    if (result.length > 0) {
      this.allTodos = JSON.parse(result);
    }
    //
  },

  updated() {
    console.log("goodbye");
    localStorage.setItem("state", JSON.stringify(this.allTodos));
  },

  computed: {
    filterTodos() {
      if (this.filter === "filter-all") {
        return this.allTodos;
      } else if (this.filter === "filter-done") {
        return this.allTodos.filter((todo) => todo.done === true);
      } else if (this.filter === "filter-open") {
        return this.allTodos.filter((todo) => todo.done === false);
      }
    },
  },

  methods: {
    addTodo() {
      let id = "id" + window.crypto.randomUUID();
      this.allTodos.push({
        id: id,
        done: false,
        protected: true,
        description: this.description,
      });
      this.description = "";
    },

    removeTodos() {
      this.allTodos = this.allTodos.filter((todo) => todo.done === false);
    },
  },
}).mount("#app");
