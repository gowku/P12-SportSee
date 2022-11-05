import React from "react";

function Calorie() {
  return (
    <div class="right_container calorie">
      <div class="right_container_calorie">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.066125" width="60" height="60" rx="6" fill="#FF0000" />
          <path
            d="M31.905 28.8663C31.905 28.8663 32.8375 23.3812 29.0325 21C28.9178 22.9061 27.9968 24.6731 26.5 25.8587C24.875 27.2875 21.8187 30.5 21.8512 33.925C21.8274 36.9116 23.4991 39.6534 26.165 41C26.2593 39.6645 26.8874 38.4233 27.9075 37.5562C28.7719 36.8915 29.333 35.9074 29.465 34.825C31.7407 36.0348 33.2125 38.3521 33.34 40.9263V40.9425C35.8552 39.7904 37.5109 37.3241 37.625 34.56C37.895 31.3425 36.1325 26.9675 34.5687 25.5375C33.9784 26.8556 33.0615 28.0013 31.905 28.8663Z"
            fill="#FF0000"
          />
        </svg>
        <div class="right_container_calorie_info">
          <p>1,930KCal</p>
          <p>Calories</p>
        </div>
      </div>
    </div>
  );
}

export default Calorie;
