import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const App = () => {
  const usernames = ["Bosongsae", "userA", "userB", "userC"];
  return (
    <div>
      <h1>GitHub Contributions</h1>
      {usernames.map((username) => (
        <div key={username} style={{ marginBottom: "30px" }}>
          <h2>{username}'s Contributions</h2>
          <GitHubCalendar username={username} blockSize={10} />
        </div>
      ))}
    </div>   
  );
};

export default App;