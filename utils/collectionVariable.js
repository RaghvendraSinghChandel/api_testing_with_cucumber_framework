class CollectionVariable {
    constructor() {
      this.vars = {}
    }
  
    set(key, value) {
      this.vars[key] = value
    }
  
    get(key) {
      return this.vars[key]
    }
  
    getAll() {
      return this.vars
    }
  
    reset() {
      this.vars = {}
    }
  }
  
  module.exports = CollectionVariable;