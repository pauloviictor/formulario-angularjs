angular.module("formularioDesafio").controller("editaCadastroControll", editaCadastroControll);

editaCadastroControll.$inject = ['$scope', '$uiRouter', '$http', 'constants', 'serviceApi'];

function editaCadastroControll($scope, $uiRouter, $http, constants, serviceApi) {

    inicializar();

    function inicializar(){

    }

    $scope.escolaridades = constants.escolaridades;

    $scope.isPessoaEmpty = function (pessoa) {
        serviceApi.isPessoaEmpty(pessoa)
    }

    let idPessoa = function () {
        let id = $uiRouter.globals.params.id;

        serviceApi.encontraPessoa(id).then(function (response) {
            $scope.pessoa = response.data
        })
    }

    $scope.editaPessoa = function (pessoa) {
        serviceApi.editaPessoa(pessoa).then(alert("Editado"))
    }


    idPessoa()

}
