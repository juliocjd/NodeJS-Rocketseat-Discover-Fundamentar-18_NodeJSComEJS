const express = require('express') //vai criar um servidor para mostrar tudo que a gente construir no servidor

const app = express()

app.set('view engine', 'ejs') //estamos falando para o express que a view engine(ferramenta para renderizar html, que é o que significa view engine) vai usar o EJS

app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenolver aplicações/serviços de forma ácil'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'morzinho'
    },
    {
      title: 'I',
      message: 'nstall ejs'
    },
    {
      title: 'S',
      message: 'intaxe simples'
    }
  ]

  const subtitle =
    'Uma linguagem de modelagem para criação de página HTML utilizando JS'
  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle
  })
}) //o GET é um método que está dentro do express, onde eu coloca a rota. Ou seja, quando a gente acessar o site o "/" seria a página inicial, então a gente indica para onde ele será renderizado.
// Não preciso colocar index.ejs porque na linha de cima, no set, a gente indicou que está trabalhando com EJS

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080) // depois de configurar todo o servidor, usamos o listen, que fica dentro do express, que é uma função que fica ouvindo uma porta (listen é ouvir)
//estamos dizendo ao nosso servidor que está rodando na nossa máquina que quando a gente chamar a porta 8080 ele vai executar tudo que está aqui

console.log('Rodando')
