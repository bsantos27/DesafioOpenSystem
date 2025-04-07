Feature: Login
    Funcionalidade para realizar login

    Scenario Outline: <cenarios>
        Given eu acesso a pagina home da aplicação
        When eu clico no botao Customer Login
        And eu seleciono o cliente "<cliente>"
        Then valido que foi logado com sucesso "Welcome"

       
Examples:
    | cenarios           | cliente           | mensagem |
    | Primeiro nome      | Hermoine Granger  |  Welcome |
    | Segundo nome       | Harry Potter      |  Welcome |
    