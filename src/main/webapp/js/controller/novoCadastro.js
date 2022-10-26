angular.module("formularioDesafio").controller("novoCadastroControll", novoCadastroControll)

    novoCadastroControll.$inject = ['$scope', 'serviceApi', 'constants']

    function novoCadastroControll($scope, serviceApi, constants){

    $scope.escolaridades = constants.escolaridades;

    $scope.isPessoaEmpty = function (pessoa) {
        serviceApi.isPessoaEmpty(pessoa)
    }

    $scope.cadastraPessoa = function (pessoa) {
        pessoa.cpf = pessoa.cpf.replaceAll('.', '')
        pessoa.cpf = pessoa.cpf.replaceAll('-', '')
        console.log(pessoa)

        serviceApi.adicionaPessoa(pessoa).then(function () {
            delete $scope.pessoa;
            $scope.formDados.$setUntouched()
            $scope.formDados.$setPristine()
            alert("Cadastro Adicionado com Sucesso")
        });
    }
}

