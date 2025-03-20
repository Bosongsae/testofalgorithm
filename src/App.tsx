import React from 'react';
import GitHubCalendar from 'react-github-calendar';


const selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};


const App = () => {
  const usernames = ["GideokKim", "Bosongsae", "zer0ken", "Yoonsoyoung02", "trivialcoding6", "ChooSeongho", "codingorijazz","kairosial", "Ju-hong", "suyeon0702", "wnsdlfrns", "weg-9000", "serin826", "jiiiiiiiy", "YiHeeJu", "chaeengg", "Kristyn-Yoon", "yongsuk204", "Ryan-OH", "hongwon1031" ];
  const usernamessolved = ["potatooftaebaek", "covertnest", "zer0ken", "thdud4231", "trivialcoding6", "csh9895", "khuho777", "kairosial", "seesong", "dev_k", "jl92", "weg1456", "rin0742", "", "lehejo0330", "bchaeeun9", "kristyn00", "yongsuk204", "akrsoek0971", "hongwon1031"]
  return (    
    <div style={{ display: "flex" }}>      
      <div id="github" style={{ width : "420px", marginLeft: "40px" }}>
      {usernames.map((username) => (
        <div key={username} style={{ marginBottom: "30px", height : "220px"  }}>
          <h4>{username}'s GitHub Contributions </h4>
          <GitHubCalendar username={username} transformData={selectLastHalfYear} blockSize={10} />
        </div>
      ))}
      </div>
      <div id="solved" style={{ width : "420px"}}>
      {usernamessolved.map((username) => (
        <div key={username} style={{ marginBottom: "30px", height : "220px" }}>
          <h4>{username}'s Solved.ac Streak</h4>
          <img src={`http://mazandi.herokuapp.com/api?handle=${username}&theme=warm`} />
        </div>))}
      </div>
    </div>   
  );
};

export default App;