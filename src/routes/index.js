import express from 'express';
import account_provider from './../business/auth';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});
router.get('/json', (req, res, next) => {
  res.json({ title: 'Express JSON' });
});

//POST account/login - логин
router.post('/account/login',function(req, res, next) {
  let {email, password} = req.body
  
  res.json({ title: 'Express JSON' });
})

//POST account/logout - логоут
router.post('/account/logout',function(req, res, next) {

  res.json({ title: 'Express JSON' });
})
//POST account - регистрация
router.post('/account',function(req, res, next) {
  let { email,name,last_name,password} = req.body;

  res.json({ title: 'Express JSON' });
})
//GET account - получение информации о текущем мользоватлеле
router.get('/account',function(req, res, next) {
  let { token } = req.header('authorization')
  
  res.json({ title: 'Express JSON' });
})
//PUT account - редактирование данных текущего пользователя
router.put('/account',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//POST account/restore - востановление пароля (запрос на востановление)
router.post('/account/restore',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//PUT account/restore - изменение пароля
router.put('/account/restore',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//GET article - получение статей
router.get('/article',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//GET artiles/:id получение конкретной статьи
router.get('/artiles/:id',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
export default router;
