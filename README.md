# Teste automatizado da aplicação Swag-Labs

Teste end-to-end da aplicação e-commerce Swag Labs, onde é validado login e compra de produtos.
Cenários positivos, onde as validação levam finalização da comprar dos produtos.

Os cenários feitos em BDD são: 

Dado que um usuário cadastrado na Swag Labs esteja na tela de login
Quando ele digitar o usuário e senha corretamente
E clicar no Botão "Login"
Então o usuário terá feito um login com sucesso

Dado que o usuário esteja na tela inicial
Quando visualizado o produto desejado
E clicar no card do produto
Então será redirecionado ao tela com a descrição do produto

Dado que o usuário esteja na tela da descrição do produto
Quando clicar no botão "add to cart"
Então produto será adicionado a lista de compras no carrinho(ícone quantitavo será exibido mais 1)

Dado que o usuário esteja na tela da descrição do produto
Quando clicar no botão "back to products"
Então voltará para página inicial

Dado que o usuário esteja na tela inicial
Quando visualizado um outro produto desejado
E clicar no botão "add to cart"
Então produto será adicionado a lista de compras no carrinho(ícone quantitavo será exibido com 4)

Dado que o usuário queria finalizar a compras
Quando clicar no ícone do carrinho
Então será exibido os produtos adicionados posteriormente

Dado que o usuário esteja na tela do carrinho
Quando conferido os produtos desejados para compras
Então clicar no botão "Checkout"

Dado que o usuário esteja na tela de Checkout
Quando inserido os dados corretamente
E clicado no botão "Continue"
Então será exibido a tela para finalizar a compra

Dado que o usuário esteja na tela "Checkout: Overview"
Quando checado e conferido todos os produtos
E clicado no botão "Finish"
Então será realizado o pedido de compra 

__

Para execação dos teste é necessário:
- instalação do node js -> 16.13.2 ou superior
- instalação do cypress js -> 9.5.1 ou superior
- clona o repositório via http ou ssh
- iniciar o terminal dentro do repositório
- inicia o cypress pelo comando: npx cypress open
