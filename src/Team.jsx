import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
         const newTeam = team + 1;
         setTeam(newTeam)
    }
    const handleRemove = () => {
        // const newCount = team - 1;
        setTeam(team -1)
    }

    const teamStyle = {
        border: "1px solid #535bf2",
        margin: "20px",
        padding: "20px",
        borderRadius: "30px",
        backgroundColor: "#646cff23"
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button onClick={handleAdd} 
            style={{color:"#535bf2", backgroundColor:"#61dafbaa", cursor: "pointer", marginRight: "10px"}}>
            add</button>
            <button onClick={handleRemove} 
            style={{color:"#535bf2", backgroundColor:"#61dafbaa", cursor: "pointer"}}>
            remove</button>
        </div>
    )
}