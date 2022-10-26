angular.module("formularioDesafio").service('serviceApi', serviceApi)

serviceApi.$inject = ['$http', 'constants'];

function serviceApi($http, constants) {

    this.adicionaPessoa = function (pessoa) {
        return $http.post(constants.urlBase + "/rest/pessoa/novoCadastro", pessoa)
    }

    this.editaPessoa = function (pessoa) {
        return $http.put(constants.urlBase + "/rest/pessoa/editaPessoa", pessoa)
    }

    this.listaCadastro = function () {
        return $http.get(constants.urlBase + "/rest/pessoa/listaPessoa")
    }

    this.removeCadastro = function (id) {
        return $http.delete(constants.urlBase + `/rest/pessoa/removePessoa/${id}`)
    }

    this.encontraPessoa = function (id) {
        return $http.get(constants.urlBase + `/rest/pessoa/${id}`)
    }

    this.isPessoaEmpty = function (pessoa){
        if (!pessoa) {
            return true;
        } else {
            if (pessoa.nome === "") {
                return true;
            } else if (pessoa.cpf === "") {
                return true;
            } else if (pessoa.email === "") {
                return true;
            } else {
                return false;
            }
        }
    }

}