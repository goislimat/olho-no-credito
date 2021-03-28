import { Navbar } from "ui";
import {
  // Share,
  QuodScore,
  TrailQuodScore,
  PendingCreditControl,
  Localization,
  ScoreInfo,
} from "pages/FullConsultation/components";

function FullConsultation() {
  const score = 900;
  const scoreCalcAngle = (value: number) => {
    if (value < 401) {
      return 0;
    }
    const percent = ((value - 401) * 100) / 599;
    return (percent * 278) / 100;
  };

  const scoreCalcPercent = (value: number) =>
    value > 401 ? ((value - 401) * 100) / 599 : 4.5;

  return (
    <>
      <Navbar />

      {/* <Share /> */}

      <QuodScore angle={scoreCalcAngle(score)} />

      <ScoreInfo />

      <TrailQuodScore score={scoreCalcPercent(score)} />

      <PendingCreditControl />

      <Localization />

      <div>Footer</div>
    </>
  );
}

export default FullConsultation;
