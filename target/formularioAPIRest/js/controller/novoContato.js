angular.module("formularioDesafio").controller('novoContatoControll', novoContatoControll)

novoContatoControll.$inject = ['$scope', '$uiRouter', 'contatoApi']

function novoContatoControll($scope, $uiRouter, contatoApi){

    inicializar()

    function inicializar(){
        $scope.idPessoa = $uiRouter.globals.params.id
    }

    $scope.salvaContato = function (contato) {
        return contatoApi.insereContato(contato, $scope.idPessoa).then(function (){
            delete $scope.contato;
            $scope.formContato.$setUntouched()
            $scope.formContato.$setPristine()
            alert("Contato adicionado com Sucesso")
        })
    }

}