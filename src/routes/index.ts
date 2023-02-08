import {Router, Request, Response} from 'express';


const router = Router();


router.get('/', (req:Request, res:Response)=>{
    const urlApi ='http://gateway.marvel.com/v1/public/events?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586';
    fetch(urlApi).then(res=> res.json())
    .then((json)=>{
        res.render('events/index', {model: json.data.results});
    })
   
})

router.get('/event/:id', (req:Request, res:Response)=>{
    const urlApi ='http://gateway.marvel.com/v1/public/events/'+ req.params.id+'?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586';
    fetch(urlApi).then(res=> res.json())
    .then((json)=>{
        console.log(json.data.results)
        res.render('events/detalle', {model: json.data.results[0]});
    })
    
})

export default router;