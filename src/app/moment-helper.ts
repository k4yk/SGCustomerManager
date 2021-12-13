import * as moment from "moment";

export default function formatMoment(moment: moment.Moment) {
    return moment.format("YYYY.MM.DD. HH:mm").toString();
}