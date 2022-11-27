// function to create a one second delay
const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

export const todos = {
  state: {
    1516344826871: { text: 'do stuff', done: true },
    1516344852231: { text: 'do other stuff', done: false },
  },
  reducers: {
    toggleDone(state, id) {
      const todo = { ...state[id], done: !state[id].done }
      return {
        ...state,
        [id]: todo
      }
    },
    add(state, text) {
      return {
        ...state,
        [Date.now()]: { text, done: false }
      }
    },
    remove(state, id) {
      delete state[id]
      return {
        ...state
      }
    }
  },
  effects: {
    async asyncRemove(id, state) {
      await delay(1000)
      this.remove(id)
    }
  }
}
