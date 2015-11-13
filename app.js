var ClickViewModel = function() {
  this.clickNumber = ko.observable(0);
  this.clickIncrement = function() {
    this.clickNumber(this.clickNumber() + 1);
  };
  this.clickReset = function() {
    this.clickNumber(0);
  };
};

ko.applyBindings(new ClickViewModel());
