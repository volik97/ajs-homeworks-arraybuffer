export default class ArrayBufferConverter {
    constructor() {
      this.bufferContainer = null;
    }
  
    load(data) {
      this.bufferContainer = new Uint16Array(data);
    }
  
    toString() {
      return String.fromCharCode(...this.bufferContainer);
    }
  }