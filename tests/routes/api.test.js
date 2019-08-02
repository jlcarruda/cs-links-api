const expect = require('chai').expect;

const { links } = require('../../routes/api');
const { messageBuilder } = require('../../helper/utils');
let reqWithUser = {
    query: {
        user_name: 'John Doe',
    },
};

let reqWithoutUser = {
    query: {
    },
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Api Route', function() {
    describe('Links() function with user defined', function() {
        it('Should respond all Links as default', function() {   
            let newReq = reqWithUser;      
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond all Links with text todos', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'todos';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Valores Link with text valores', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'valores';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Guia de Sobrevivência Link with text guia', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'guia';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Viagens Link with texts viagem or viagens', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'viagem';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'viagens';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Salário e Benefícios Link with texts salário or salario', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'salário';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'salario';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Salário e Benefícios Link with texts benefícios, beneficios, benefício or beneficio', function() {
            let newReq = reqWithUser;
            newReq.query.text = 'benefícios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'beneficios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'benefício';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'beneficio';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
    }),
    describe('Links() function without user defined', function() {
        it('Should respond all Links as default', function() {   
            let newReq = reqWithoutUser;         
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond all Links with text todos', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'todos';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Valores Link with text valores', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'valores';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Guia de Sobrevivência Link with text guia', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'guia';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Viagens Link with texts viagem or viagens', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'viagem';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'viagens';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Salário e Benefícios Link with texts salário or salario', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'salário';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'salario';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
        it('Should respond Salário e Benefícios Link with texts benefícios, beneficios, benefício or beneficio', function() {
            let newReq = reqWithoutUser;
            newReq.query.text = 'benefícios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'beneficios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'benefício';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
            newReq.query.text = 'beneficio';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(messageBuilder(newReq.query.user_name, newReq.query.text));
        });
    })
});