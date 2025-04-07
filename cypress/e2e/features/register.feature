Feature: Cadatros de Usuarios
    Funcionalidade para realizar cadastro de usuarios

    Scenario Outline: Cadastro de usuário e conta - <caso_teste>
        Given que estamos na pagina de cadastro
        When inserimos o Nome <name> e o sobre nome <lastName> e o code <code>
        And e clico no botao adicionar
        Then valido o cadastro com a mensagem <mensagem>
        Given clico no botao customer
        Then valido o cadastro com a mensagem <mensagem>
        Then devo ver a seguinte lista de clientes:
            | cliente |
            | Bruno   |
        Then e clico no botao abrir conta
        And e seleciono o nome do cliente
            | customer   |
            | <customer> |
        And e seleciono o tipo de moeda
            | currency   |
            | <currency> |
        When clico no botao processar
        Then valido a abertura de conta com a mensagem "Account created successfully"
    Examples:
            | caso_teste        | name  | lastName | code | mensagem                    | customer     | currency  | mensagem                    |
            | Primeiro cadastro | Bruno | Santos   | 20   | Customer added successfully | Bruno Santos | Dollar    | Customer added successfully |


   Scenario Outline: Cadastro com campos obrigatórios em branco - <caso_teste>
       Given que estamos na pagina de cadastro
       When inserimos o Nome <name> e o sobre nome <lastName> e o code <code>
       And e clico no botao adicionar
       Then valido o cadastro com a mensagem <mensagem>
    Examples:
           | caso_teste             | name  | lastName | code | mensagem                   |
           | Cadastro sem nome      |       | Santos   | 20   | Please fill out this field |
           | Cadastro sem sobrenome | Bruno |          | 20   | Please fill out this field |
           | Cadastro sem código    | Bruno | Santos   |      | Please fill out this field |


   Scenario Outline: Cadastro de usuário duplicado - <caso_teste>
       Given que estamos na pagina de cadastro
       When inserimos o Nome <name> e o sobre nome <lastName> e o code <code>
       And e clico no botao adicionar
       Then valido o cadastro com a mensagem <mensagem>
    Examples:
        | caso_teste            | name  | lastName | code | mensagem                                             |
        | Cadastro              | Bruno | Santos   | 20   | Customer added successfully                          |
        | Cadastro duplicado    | Bruno | Santos   | 20   | Please check the details. Customer may be duplicate. |
