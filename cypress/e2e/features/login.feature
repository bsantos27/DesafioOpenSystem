Feature: Login
    Funcionalidade para realizar login

    Scenario Outline: <cenarios>
        Given eu acesso a pagina home da aplicação
        When eu clico no botao Customer Login
        And eu seleciono o cliente "<cliente>"
        Then valido que foi logado com sucesso "<mensagemWelcome>"
        When faco um deposito "<deposito>" 
        Then valido a mensagem do deposito "<mensagemSucessDeposito>"
        And faco um saque "<saque>"
        Then valido a mensagem de saque "<mensagemSucessSaque>"       
       
Examples:
    | cenarios           | cliente           | mensagemWelcome | deposito | saque | mensagemSucessDeposito | mensagemSucessSaque     |
    | Primeiro nome      | Hermoine Granger  |  Welcome        |  20      |   10  | Deposit Successful     | Transaction successful  |
    
    