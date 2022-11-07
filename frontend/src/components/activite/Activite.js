import GraphiqueActivity from "../graphiques/graphiqueActivity/GraphiqueActivity";

function Activite({ activity }) {
  console.log(activity);
  return (
    <div className="activite">
      <div className="activite_top">
        <p className="activite_top-quotidienne">Activité quotidienne</p>
        <div className="activite_top_info">
          <div className="activite_top_info_poids">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#282D30"
              />
            </svg>
            <p>Poids (Kg)</p>
          </div>
          <div className="activite_top_info_calorie">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#e60000"
              />
            </svg>
            <p>Calories brûlées (KCal)</p>
          </div>
        </div>
      </div>
      <GraphiqueActivity activity={activity} />
    </div>
  );
}

export default Activite;
