# Desafio Driva
## Desafio para vaga de estagio

<p align="center">
 <a href="#proposta">Proposta</a> • 
 <a href="#como-rodar">Como Rodar</a> • 
 <a href="#desafio-01">Desafio 01</a> •
 <a href="#desafio-02">Desafio 02</a> • 
 <a href="#desafio-03">Desafio 03</a> • 
</p>

### Proposta

Faça uma API Rest utilizando Javascript (NodeJS) ou Python que atenda os seguintes requisitos:

Uma rota /hello do tipo GET que retorne a mensagem "World";
Uma rota /soma do tipo POST que recebe um JSON com dois números inteiros e retorna a soma deles;
Uma rota /starwars/films  do tipo GET que retorna o nome dos filmes da franquia Star Wars (para fazer essa etapa você precisa usar a API aberta https://swapi.dev/, nela você pode fazer uma requisição para o endereço https://swapi.dev/api/films que retorna a informação de todos os filmes da franquia, incluindo o nome)


### Como-rodar

* Baixe as dependencias
* $ npm i
* Use o comando:
 $ npm start


### Desafio-01

Faça uma requisiçao GET na rota http://localhost:8080/hello 


### Desafio-02

Faça uma requisiçao POST na rota http://localhost:8080/soma contendo um JSON seguindo o exemplo

{
		"variavel_1": 2,
		"variavel_2": -5
	
}


### Desafio-03

Faça uma requisiçao GET na rota http://localhost:8080//starwars/films
