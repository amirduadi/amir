let messages = [
"תודה לצוות המדהים 🙌"
]

export default function handler(req,res){

if(req.method==="GET"){

res.status(200).json(messages)

}

if(req.method==="POST"){

const {text}=req.body

messages.push(text)

res.status(200).json({success:true})

}

}