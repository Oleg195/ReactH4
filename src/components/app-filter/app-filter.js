import "./app-filter.css";

const AppFilter = (props) => {
    const buttonData=[
        {name:'all',label:'Все товары'},

        {name:'moreThen1000', label:'Стоимость Более 1000$'}
    ];

    const buttons=buttonData.map(({name,label})=>{
        const active=props.filter===name;
        const classCss = active ? 'btn btn-light':'btn btn-outline-light';

        return(
            <button type="button"
            className="btn btn-light"
            onClick={()=>props.onFilterSelect(name)}
            key={name}>
                {label}
            </button>
        )
})
    return (
        <div className="btn-group">
           {buttons}
        </div>
    )
}

export default AppFilter;