import Match from "./Match";

function App() {
  const matchData = [
    {
      date: "03.29",
      day: "(토)",
      time: "14:00",
      homeLogo: "Seoul.png",
      awayLogo: "Daejeon.png",
      homeTeam: "FC서울",
      awayTeam: "대전",
      stadium: "서울월드컵경기장",
      openDate: "2025.04.07(월)",
      openTime: "18:00오픈예정",
    },
    {
      date: "04.12",
      day: "(토)",
      time: "16:30",
      homeLogo: "Seoul.png",
      awayLogo: "Gwangju.png",
      homeTeam: "FC서울",
      awayTeam: "광주FC",
      stadium: "서울월드컵경기장",
      openDate: "2025.04.15(화)",
      openTime: "18:00오픈예정",
    },
    {
      date: "05.03",
      day: "(일)",
      time: "19:00",
      homeLogo: "Seoul.png",
      awayLogo: "Jeonbuk.png",
      homeTeam: "FC서울",
      awayTeam: "전북현대",
      stadium: "서울월드컵경기장",
      openDate: "2025.04.28(월)",
      openTime: "18:00오픈예정",
    },
  ];

  return (
    <section>
      {matchData.map((v) => (
        <Match {...v} />
      ))}
    </section>
  );
}

export default App;
