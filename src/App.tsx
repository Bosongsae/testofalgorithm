import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const App = () => {
  return (
    <div>
      <h1>My GitHub Contributions</h1>
      <GitHubCalendar username="Bosongsae" />
    </div>
  );
};

export default App;