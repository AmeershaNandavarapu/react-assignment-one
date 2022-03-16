import './index.css'

const HistoryProfile = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const deleteHistory1 = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-history">
      <div className="container1">
        <p className="time">{timeAccessed}</p>
        <img className="history-logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button className="button" type="button" onClick={deleteHistory1}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryProfile
