var Element = module.require('./element');

function _getElementOutput(elements){
  var rtf = "",
      i;
  //outputs the elements
  for(i=0; i<elements.length; i++){
    //TODO:What if this is a group? need a better way to test, can we use hasOwnProperty on getRTFCode?
    if(elements[i].hasOwnProperty('text')){
            rtf += elements[i].getRTFCode();
    }else if(typeof elements[i] === "string"){
            rtf += elements[i];
    }
  }
  return rtf;
}

module.exports = GroupElement = function(name, format, colorPos, backgroundColorPos, fontPos) {
  Element.apply(this, [format]);
  this.elements = [];
  this.name = name;
  this._colorPos = colorPos;
  this._backgroundColorPos = backgroundColorPos;
  this._fontPos = fontPos;
};
GroupElement.subclass(Element);

GroupElement.prototype.addElement = function(element){
  elements.push(element);
};

GroupElement.prototype.getRTFCode = function(){
  //safe text already done in getlementoutput()
  return format.formatText(_getElementOutput(this.elements), colorTable, fontTable, false);
};