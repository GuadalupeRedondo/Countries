import { Link } from "react-router-dom"
import style from "./Landing.module.css"

const Landing = () => {
    return(
        <div className={style.container}>
            <h2>Countries and activities</h2>
            <h1>WORLD MAP</h1>
            <Link to="/home">
                <button >EXPLORE</button>
            </Link>
        </div>
    )
}

export default Landing