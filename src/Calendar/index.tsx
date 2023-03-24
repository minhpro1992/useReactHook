import axios from "axios";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import styledComponents from "styled-components";
import { MockData } from "./MockData";
export const dateToYMD = (date: Date) => moment(date).format("YYYY-MM-DD");

export const dateToHHmmss = (date: Date) => moment(date).format("HH:mm:ss");

export const getDiffDate = (startTime: string, endTime: string) =>
  moment(endTime, "HH:mm").diff(moment(startTime, "HH:mm"));

export const getTimeDuration = (startTime: string, endTime: string) =>
  moment.duration(getDiffDate(startTime, endTime));
const WIDTH = 80;
const { mockRooms, mockTickets } = MockData;
const TDStyled = styledComponents.td`
  &:hover {
    background-color: #ccc!important;
  }
`;

const TRow = ({ room, roomIndex }: { room: any; roomIndex: number }) => {
  const [tickets, setTickets] = useState<any[]>([]);

  const fetchTickets = async () => {
    try {
      const results = await axios.get("./MockData.json");
      console.log(results);
    } catch (error: unknown) {
      setTickets(mockTickets);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, [room._id]);

  const getTickets = useMemo(() => {
    const times = [];
    const flagStart = moment("07:00", "HH:mm"),
      flagEnd = moment("19:00", "HH:mm");

    if (tickets.length)
      tickets
        .sort((a, b) => -getDiffDate(a.startTime, b.startTime))
        .map(({ startTime, endTime, ...rest }) => {
          const start = moment(startTime, "HH:mm");
          start.add(-(start.minute() % 30), "m");

          const end = moment(endTime, "HH:mm");
          end.add(-(end.minute() % 30), "m");
          while (flagStart.isBefore(start)) {
            const time = {
              open: "open 1",
              bookingType: "empty 1",
              startTime: flagStart.format("HH:mm"),
              endTime: flagStart.add(30, "m").format("HH:mm"),
              colSpan: 1,
            };
            times.push(time);
          }

          if (flagStart.isSame(start)) {
            const duration = getTimeDuration(start.toString(), end.toString());
            console.log(duration.hours(), duration.minutes());
            const ticketTime = {
              ...rest,
              startTime: start.format("HH:mm"),
              endTime: end.format("HH:mm"),
              colSpan: duration.hours() * 2 + duration.minutes() / 30,
            };
            times.push(ticketTime);
            flagStart.add(getDiffDate(start.toString(), end.toString()));
          }
        });

    while (flagStart.isSameOrBefore(flagEnd)) {
      const time = {
        open: "open 2",
        bookingType: "empty 2",
        startTime: flagStart.format("HH:mm"),
        endTime: flagStart.add(30, "m").format("HH:mm"),
        colSpan: 1,
      };
      times.push(time);
    }
    // console.log(times);
    return times;
  }, [tickets]);
  return (
    <tr>
      <td style={{ width: `${WIDTH}px` }}>{room.name}</td>
      {getTickets.map((item: any) => {
        return (
          <TDStyled
            style={{
              width: `${WIDTH}px`,
              backgroundColor: `${
                item.bookingType !== "empty" && item.room?._id === room._id
                  ? "green"
                  : "white"
              }`,
            }}
            colSpan={item.colSpan}
          >
            {`${item.startTime}-${item.endTime}`}
          </TDStyled>
        );
      })}
    </tr>
  );
};

type Props = {
  isShowCalendar: boolean;
};

function Calendar(props: Props) {
  const { isShowCalendar } = props;
  const TYPE_TIME = "HH:mm";
  const getTimes = () => {
    const times = [];
    for (
      let time = moment("07:00", TYPE_TIME);
      time.isBefore(moment("19:30", TYPE_TIME));
      time.add(30, "m")
    ) {
      times.push(time.format(TYPE_TIME));
    }
    return times;
  };
  console.log("render calendar");
  return isShowCalendar ? (
    <div className="App">
      <table>
        <thead>
          <th></th>
          {getTimes().map((item, index) => (
            <th style={{ width: `${WIDTH}px` }}>{item}</th>
          ))}
        </thead>
        <tbody>
          {mockRooms.map((room, roomIndex) => (
            <TRow room={room} roomIndex={roomIndex} />
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default React.memo(Calendar);
