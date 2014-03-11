bookly = bookly or {}

bookly.bookApp = angular.module('bookApp, []')

bookly.BooksController = ($scope) ->

  $scope.books = books

  $scope.cart = []

  $scope.addToCart = (book) ->
    $scope.cart.push(book)
    return

  $scope.cartTotal = (cart) ->
    total = 0.0
    for books in cart 
      (book) ->
        total = total + book.price
        return
    return total

  $scope.emptyCart = (cart) ->
    $scope.cart = []
    return

  $scope.quantify = (cart, book_id) ->
    items = (book for book in cart when book.id == book_id)
    items.length
  

  return





