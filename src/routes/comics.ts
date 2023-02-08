import {Router, Request, Response} from 'express';


const router = Router();



router.get('/comics', (req:Request, res:Response)=>{
    const urlApi ='http://gateway.marvel.com/v1/public/comics?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586';
    fetch(urlApi).then(res=> res.json())
    .then((json)=>{
        res.render('comics/index', {model: json.data.results});
    })
   
})

router.get('/comic/:id', (req:Request, res:Response)=>{
    const urlApi ='http://gateway.marvel.com/v1/public/comics/'+ req.params.id+'?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586';
    fetch(urlApi).then(res=> res.json())
    .then((json)=>{
        console.log(json.data.results)
        res.render('comics/detalle', {model: json.data.results[0]});
    })
    
})

export default router;