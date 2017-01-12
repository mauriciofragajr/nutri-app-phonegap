angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
      Chats.remove(chat);
    };
})

.controller('ImcCtrl', function($scope) {
  function minmax(alt) {
    var min = (alt * alt) * 18.5;
    var max = (alt * alt) * 25;
    min = min.toFixed(2);
    max = max.toFixed(2);
    $scope.respostaAntesMin = "Min";
    $scope.respostaAntesMax = "Min";
    $scope.respostaE = "e";
    $scope.respostaMIN = min;
    $scope.respostaKG = "Kg";
    $scope.respostaMAX = max;
  }
  $scope.calcula = function() {
    var alt = altura.value;
    var pes = peso.value;
    var resp = pes / (alt * alt);

    if(resp<18.5){
      resp = resp.toFixed(2);
      $scope.resposta00 = "O Imc é de";
      $scope.resposta0 = resp;
      $scope.kgmetro = "Kg/m²";
      $scope.resposta1 = "Atencão!";
      $scope.resposta2 = "Abaixo do Peso";
      }
      else if(resp>=18.5 && resp<24.9){
        resp = resp.toFixed(2);
        $scope.resposta00 = "O Imc é de";
        $scope.resposta0 = resp;
        $scope.kgmetro = "Kg/m²";
        $scope.resposta1 = "Parabéns!";
        $scope.resposta2 = "Peso Normal";
      }
      else if(resp>=25 && resp<29.9) {
        resp = resp.toFixed(2);
        $scope.resposta00 = "O Imc é de";
        $scope.resposta0 = resp;
        $scope.kgmetro = "Kg/m²";
        $scope.resposta1 = "Atencão!";
        $scope.resposta2 = "Acima do Peso";
      }
      else if(resp>=30 && resp<35) {
        resp = resp.toFixed(2);
        $scope.resposta00 = "O Imc é de";
        $scope.resposta0 = resp;
        $scope.kgmetro = "Kg/m²";
        $scope.resposta1 = "Cuidado!";
        $scope.resposta2 = "Obesidade Grau I";
      }
      else if(resp>=35 && resp<40) {
        resp = resp.toFixed(2);
        $scope.resposta00 = "O Imc é de";
        $scope.resposta0 = resp;
        $scope.kgmetro = "Kg/m²";
        $scope.resposta1 = "Cuidado!";
        $scope.resposta2 = "Obesidade Grau II";
      }
      else if (resp>=40){
        resp = resp.toFixed(2);
        $scope.resposta00 = "O Imc é de";
        $scope.resposta0 = resp;
        $scope.kgmetro = "Kg/m²";
        $scope.resposta1 = "Cuidado!";
        $scope.resposta2 = "Obesidade Grau III";
      }
      minmax(alt);
  };


})

.controller('pesoIdealCtrl', function($scope) {
  var resp = altura.value;
  $scope.calcula = function(value) {
    if (value == 'M'){
      $scope.pesoideal = "Peso Ideal";
      resp = (altura.value * altura.value) * 22;
      $scope.resposta = resp.toFixed(2);
      $scope.kg = "Kg";
    }else if (value == 'F'){
      $scope.pesoideal = "Peso Ideal";
      resp = (altura.value * altura.value) * 20.8;
      $scope.resposta = resp.toFixed(2);
      $scope.kg = "Kg";
    }

  }

})

.controller('AccountCtrl', function($scope) {
  
});
