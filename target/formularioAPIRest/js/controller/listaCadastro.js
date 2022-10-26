angular.module("formularioDesafio").controller("listaCadastrosControll", listaCadastrosControll)

    listaCadastrosControll.$inject = ['$scope', 'serviceApi']

    function listaCadastrosControll($scope, serviceApi){

    let exibeCadastros = function () {
        return serviceApi.listaCadastro().then(function (response) {
            $scope.pessoas = response.data;
        });
    }

    $scope.removeCadastro = function (id) {
        return serviceApi.removeCadastro(id).then(exibeCadastros)
    }

    exibeCadastros()

}
