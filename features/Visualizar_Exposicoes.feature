Feature: Visualizar Exposicoes
Como usuário cadastrado no sistema eu gostaria de visualizar listas de exposições, páginas de exposições e listas com exposições relacionadas
Para que eu possa obter informações sobre exposições.

Scenario: Lista de exposições
Given Eu estou na página inicial 
And Eu consigo ver o ícone da lista de exposições
When Eu clico na lista de exposições
Then Eu consigo ver uma lista de exposições resumidas contendo nome, tempo de duração, custo, local

Scenario: Olhar página de certa exposição permanente
Given Eu estou na lista de exposições
When Eu clico em uma exposição permanente
Then Eu sou levado a página da exposição permanente
And Eu consigo ver informações completas da exposição permanente

Scenario: Olhar página de certa exposição temporária 
Given Eu estou na lista de exposições
When Eu clico em uma exposição temporária
Then Eu sou levado a página da exposição temporária
And Eu consigo ver informações completas da exposição temporária

Scenario: Você também pode gostar dessas outras indicações relacionadas
Given Eu estou na página de uma exposição
And Eu consigo ver o aviso de outras indicações relacionadas
When Eu clico no aviso
Then Eu consigo visualizar uma lista de exposições relacionadas à exposição que estou vendo

Scenario: Falha na visualização de certa exposição
Given Eu estou na lista de exposições
When Eu clico em uma exposição
Then Eu sou levado a página da exposição
And O sistema retorna um erro que a página não foi encontrada

Scenario: Falha na lista de exposições
Given Eu estou na página inicial
And Eu consigo ver o ícone da lista de exposições
When Eu clico na lista de exposições
Then Eu não consigo ver nenhum conteúdo pois a lista está vazia
