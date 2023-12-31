import style from "./Paginado.module.css"

const Paginado = ({countriesPerPage, allCountries, paginado}) => {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className={style.paginado} key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado