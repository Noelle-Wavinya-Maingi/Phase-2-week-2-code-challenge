import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

export default function Botspages () {
    const [bots, setBots] = useState([]);

    function FetchBots (){
        fetch("https://bot-battlr-jkc6.onrender.com/bots")
        .then((res) => {
            if(res.ok){
                return res.json()
            }
            throw new Error("Failed to fetch the bots")
        })
        .then ((bots) => setBots(bots))
        .catch(console.error("Failed to fetch the bots"), Error)
    }

    useEffect(() => {
        FetchBots()
 } , [])

 return (
    <div> 
      <BotCollection bots={bots}/> 
    </div>
 )
}