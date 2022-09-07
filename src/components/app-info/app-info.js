import "./app-info.css";

const AppInfo = ({inc,emp}) => {
    return (
        <div className="app-info">
            <h1>Учет Товара</h1>
            <h2>Общее число: {emp}</h2>
            <h2>По спец.заказу: {inc}</h2>
        </div>
    )
}
export default AppInfo;