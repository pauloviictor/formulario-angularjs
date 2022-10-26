angular.module("formularioDesafio").config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('listaCadastros', {
        url:'/',
        templateUrl: '../angularform/View/listaCadastros.html',
        controller: 'listaCadastrosControll',
    })
    .state('adicionaCadastro',{
        url: '/novoCadastro',
        templateUrl: '../angularform/View/novoCadastro.html',
        controller: 'novoCadastroControll'
    })
    .state('editaCadastro', {
        url:'/cadastro/:id',
        templateUrl: '../angularform/View/editaCadastro.html',
        controller: 'editaCadastroControll'
    })
    .state('contatos', {
        url: '/contatos/{id}',
        templateUrl: '../angularform/View/contatos.html',
        controller: 'contatosControll'
    })
        .state('novoContato',{
            url:'/novoContato/{id}',
            templateUrl: '../angularform/View/novoContato.html',
            controller: 'novoContatoControll'
        })

})