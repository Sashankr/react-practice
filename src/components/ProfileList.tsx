const athletes = [
  {
    name: "Cristiano Ronaldo",
    sport: "Football",
    nationality: "Portuguese",
    popularity_metric: "Most followed person on social media (950M+ followers)",
    notable_team: "Al-Nassr",
  },
  {
    name: "Lionel Messi",
    sport: "Football",
    nationality: "Argentine",
    popularity_metric: "620M+ social media followers",
    notable_team: "Inter Miami",
  },
  {
    name: "Virat Kohli",
    sport: "Cricket",
    nationality: "Indian",
    popularity_metric: "Most followed cricketer (390M+ followers)",
    notable_team: "Royal Challengers Bengaluru",
  },
  {
    name: "LeBron James",
    sport: "Basketball",
    nationality: "American",
    popularity_metric: "230M+ social media followers",
    notable_team: "Los Angeles Lakers",
  },
  {
    name: "Neymar Jr.",
    sport: "Football",
    nationality: "Brazilian",
    popularity_metric: "380M+ social media followers",
    notable_team: "Al-Hilal",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    nationality: "American",
    popularity_metric: "Highest popularity rating (57%) in 2026 YouGov survey",
    achievements: "Most decorated gymnast in history",
  },
  {
    name: "Stephen Curry",
    sport: "Basketball",
    nationality: "American",
    popularity_metric: "Top 10 most followed and influential athletes",
    notable_team: "Golden State Warriors",
  },
  {
    name: "Lewis Hamilton",
    sport: "Formula 1",
    nationality: "British",
    popularity_metric: "Most popular F1 driver globally",
    notable_team: "Ferrari (starting 2025/26)",
  },
  {
    name: "Shohei Ohtani",
    sport: "Baseball",
    nationality: "Japanese",
    popularity_metric: "Global icon of MLB and highest-paid baseball player",
    notable_team: "Los Angeles Dodgers",
  },
  {
    name: "Kylian Mbappé",
    sport: "Football",
    nationality: "French",
    popularity_metric: "160M+ social media followers",
    notable_team: "Real Madrid",
  },
];

const ProfileList = () => {
  const sportsPersonalityList = athletes.map((item) => {
    return (
      <section key={item.name}>
        <h3>{item.name}</h3>
        <p>{item.sport}</p>
        <small>{item.nationality}</small>
      </section>
    );
  });
  return <div>{sportsPersonalityList}</div>;
};

export default ProfileList;
