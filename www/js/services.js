angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'IMC',
    descricao: 'Calcule o Índice de Massa Corporal',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Peso Ideal',
    descricao: 'Calcule o Peso Ideal',
    face: 'img/max.png'
  }];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
