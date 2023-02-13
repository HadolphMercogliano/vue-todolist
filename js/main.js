// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// **MILESTONE 1**
// * Stampare all'interno di una lista HTML un item per ogni todo.
// * Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

//  **MILESTONE 2**
// * Visualizzare a fianco ad ogni item una "x":
// * cliccando su di essa, il todo viene rimosso dalla lista.

// TODO **MILESTONE 3**
// *Predisporre un campo di input testuale e un pulsante "aggiungi":
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// TODO **Bonus:**
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const myapp = Vue.createApp({
  data() {
    return {
      message: "hello",
      tasks: [
        {
          task: "fai qualcosa",
          done: true,
        },
        {
          task: "fai un' altra cosa",
          done: false,
        },
        {
          task: "fai la terza cosa",
          done: true,
        },
        {
          task: "task 4",
          done: true,
        },
        {
          task: "task 5",
          done: false,
        },
        {
          task: "task 6",
          done: true,
        },
        {
          task: "task 7",
          done: false,
        },
        {
          task: "task 8",
          done: true,
        },
      ],
    };
  },

  methods: {
    removeTask(index) {
      console.log("sono il remove task");
      this.tasks.splice(index, 1);
    },
  },
});
myapp.mount("#root");
