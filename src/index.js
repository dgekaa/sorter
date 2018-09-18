class Sorter {
  constructor() {
    this.x = []; 
  }

  add(element) {
    this.x.push(element);
    return this.x; 
  }

  at(index) {
    return this.x[index]; 
  }

  get length() {
    return this.x.length; 
  }

  toArray() {
    return this.x; 
  }

  sort(indices=[]) {
    indices.sort(function(a,b) {return a-b});

    var e = this.x.slice(indices[0],indices[indices.length-1]);
    e.push(this.x[indices[indices.length-1]]);

    e.sort(function(a,b) {return a-b});

    for(var j = 0; j<indices.length; j++){
    this.x.splice(indices[j],1,e[j]);
    }
    return this.x; 
  }

  setComparator(compareFunction) {
   Sorter.prototype.sort = function(indices=[]) {
          indices.sort(function(a,b) {return a-b});
          var e = this.x.slice(indices[0],indices[indices.length-1]);
          e.push(this.x[indices[indices.length-1]]);
          e.sort(function(a,b) {return b-a});
          for(var j = 0; j<indices.length; j++){
          this.x.splice(indices[j],1,e[j]);
          }
          return this.x; 
    }
  }
}

module.exports = Sorter;