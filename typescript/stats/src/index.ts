import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV();
const summary = Summary.winsAnalysisWithHTMLReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
