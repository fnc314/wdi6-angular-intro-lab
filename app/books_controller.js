var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.addToCart = function(book) {
    // $scope.cart_item = {};
    // $scope.cart_item.title = book.title;
    // $scope.cart_item.price = book.price;
    // $scope.cart_item.author = book.author;
    $scope.cart.push(book);

  };

  $scope.cartTotal = function(cart) {
    var total = 0;
    _.each(cart, function(book) {
      
      total = total + book.price;
    });
    return total;
  };
  // $scope.cartCount = function($scope.cart) {
  //   _.each($scope.cart, )
  // };

};
