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

//POST api/account/login - логин
router.post('api/account/login',function(req, res, next) {
  let {phone, password} = req.body
  
  res.json({ title: 'Express JSON' });
})

//POST api/account/logout - логоут
router.post('api/account/logout',function(req, res, next) {

  res.json({ title: 'Express JSON' });
})
//POST api/account - регистрация
router.post('api/account',function(req, res, next) {
  let { phone,name,last_name,password} = req.body;

  res.json({ title: 'Express JSON' });
})
//GET api/account - получение информации о текущем мользоватлеле
router.get('api/account',function(req, res, next) {
  let { token } = req.header('authorization')
  
  res.json({ title: 'Express JSON' });
})
//PUT api/account - редактирование данных текущего пользователя
router.put('api/account',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//POST api/account/restore - востановление пароля (запрос на востановление)
router.post('api/account/restore',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//PUT api/account/restore - изменение пароля
router.put('api/account/restore',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//GET api/article - получение статей
router.get('api/article',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
//GET api/artiles/:id получение конкретной статьи
router.get('api/artiles/:id',function(req, res, next) {
  res.json({ title: 'Express JSON' });
})
export default router;
