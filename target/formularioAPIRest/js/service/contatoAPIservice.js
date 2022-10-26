angular.module("formularioDesafio").service("contatoApi", contatoApi)

contatoApi.$inject = ['$http', 'constants'];

function contatoApi($http, constants) {
    this.insereContato = function (contato, idPessoa) {
        return $http.post(constants.urlBase + `/rest/contato/novoContato/${idPessoa}`, contato);
    }

    this.excluiContato = function (id) {
        return $http.delete(constants.urlBase + `/rest/contato/deletaContato/${id}`)
    }

}