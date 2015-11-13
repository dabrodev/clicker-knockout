var ClickViewModel = function() {
  this.clickNumber = ko.observable(0);
  this.clickIncrement = function() {
    this.clickNumber(this.clickNumber() + 1);
  };
};

ko.applyBindings(new ClickViewModel());
