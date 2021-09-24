import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || !this.chains[position - 1]) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    
    this.chains.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chains.reverse();
    return this;
  },

  finishChain() {
    let result = this.chains.join("~~");
    this.chains = [];
    return result;
  }
};
