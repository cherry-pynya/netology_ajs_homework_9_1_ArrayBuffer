export default class ArrayBufferConverter {
  load(buffer) {
    this.data = new Uint16Array(buffer);
    return this.data;
  }

  toString() {
    const array = [];
    for (let i = 0; i < this.data.length; i++) {
      array.push(String.fromCodePoint(this.data[i]));
    }
    return array.join('');
  }
}
