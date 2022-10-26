angular.module("formularioDesafio").controller("contatosControll", contatosControll)

contatosControll.$inject = ['$scope', '$uiRouter', 'serviceApi', 'contatoApi']

function contatosControll($scope, $uiRouter, serviceApi, contatoApi) {

    inicializar();

    function inicializar() {
    }

    let recuperaCadastros = function () {
        let id = $uiRouter.globals.params.id;
        return serviceApi.encontraPessoa(id).then(function (response) {
            console.log(response.data)
            $scope.contatos = response.data.contatosAlternativos;
            $scope.idPessoa = response.data.id
        })
    }

    $scope.removeContato = function (id){
        return contatoApi.excluiContato(id).then(recuperaCadastros)
    }



    recuperaCadastros()

}
