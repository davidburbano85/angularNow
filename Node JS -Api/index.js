const express= require("express")
const app =express()
app.use(express.json())
const Metallica=
    [
        
           
                 {
                "983":
                        {
                           id:"Kill Em All",
                            "album":"Kill Em All",
                            "fecha de lanzamiento":"25-07-1983"
                        },
        
                  "984":
                        {
                            id:"Ride The Lighting",
                            "album":"Ride The Lighting",
                            "fecha de lanzamiento":"27-07-1984"
                        },
                    
                  "986":
                        {
                            id:"Master Of Puppets",
                            "album":"Master Of Puppets",
                            "fecha de lanzamiento":"03-03-1986"
                        },
        
                  "988":
                        {
                            id:"And Justice For All",
                            "album":"And Justice For All",
                            "fecha de lanzamiento":"07-09-1988"
                        },
                     
                  "991":
                        {
                            id:"Black Album",
                            "album":"Black Album",
                            "fecha de lanzamiento":"12-08-1991"
                        },
                         
                   "991":
                        {
                            id:"Load",
                            "album":"Load",
                            "fecha de lanzamiento":"04-06-1996"
                        },
                  
                  "991":
                        {
                            id:"Reload",
                            "album":"Reload",
                            "fecha de lanzamiento":"18-1-1997"
                        }      				
                    
                  }	
        
        
    ]

    app.get("/",(req,res)=>
        {
            res.send("Node.JS api")
        })

    app.get("/api/Metallica", (req, res)=>
        {
            res.send(Metallica);
        })

    app.get("/app/Metallica/:id",(req,res)=>
        {
            const Metallica= Metallica.find(c=>c.id===parseInt(req.params.id))
            if (!Metallica) return res.status(404).send("Album no encontrado") 
                else res.send(Metallica)
        })
    
    app.post("/api/Metallica",(req,res)=>
        {
            const Metallica =
                    {
                        id: Metallica.length+1,
                        "album": req.body.album,
                        "fecha de lanzamiento": parseInt(req.body.fecha),
                    }
        })

        
