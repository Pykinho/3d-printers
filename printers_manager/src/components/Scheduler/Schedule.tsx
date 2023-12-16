import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useEffect, useMemo, useState } from "react";
import { useEpg, Epg, Layout } from "planby";

import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,
} from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
// import "react-calendar-timeline/lib/Timeline.css";
import "./Schedule.css";
import moment from "moment";

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // fetching data

    setIsLoading(false);
  }, []);

  const [filterButtonState, setFilterButtonState] = useState(0);

  const mockedSchedulerData: SchedulerData = [
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24",
        title: "Joe Doe",
        subtitle: "Frontend Developer",
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
          startDate: new Date("2023-04-13T15:31:24.272Z"),
          endDate: new Date("2023-08-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,177)",
        },
        {
          id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
          startDate: new Date("2023-10-07T08:16:31.123Z"),
          endDate: new Date("2023-11-15T21:55:23.582Z"),
          occupancy: 2852,
          title: "Project B",
          subtitle: "Subtitle B",
          description: "Tuna Home pascal IP drive",
          bgColor: "rgb(254,165,177)",
        },
        {
          id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
          startDate: new Date("2023-03-30T22:25:14.377Z"),
          endDate: new Date("2023-09-01T07:20:50.526Z"),
          occupancy: 1800,
          title: "Project C",
          subtitle: "Subtitle C",
          bgColor: "rgb(254,165,177)",
        },
        {
          id: "b088e4ac-9911-426f-aef3-843d75e714c2",
          startDate: new Date("2023-10-30T10:08:22.986Z"),
          endDate: new Date("2023-10-30T12:30:30.150Z"),
          occupancy: 11111,
          title: "Project D",
          subtitle: "Subtitle D",
          description: "Garden heavy an software Metal",
          bgColor: "rgb(254,165,177)",
        },
      ],
    },
  ];

  // return (
  //   <section>
  //     <Scheduler
  //       data={mockedSchedulerData}
  //       isLoading={isLoading}
  //       onRangeChange={(newRange) => console.log(newRange)}
  //       onTileClick={(clickedResource) => console.log(clickedResource)}
  //       onItemClick={(item) => console.log(item)}
  //       onFilterData={() => {
  //         // Some filtering logic...
  //         setFilterButtonState(1);
  //       }}
  //       onClearFilterData={() => {
  //         // Some clearing filters logic...
  //         setFilterButtonState(0);
  //       }}
  //       config={{
  //         zoom: 1,
  //         filterButtonState,
  //         maxRecordsPerPage: 4,
  //       }}
  //     />
  //   </section>
  // );

  // const channels = useMemo(
  //   () => [
  //     {
  //       logo: "data:image/png;base64,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",
  //       uuid: "10339a4b-7c48-40ab-abad-f3bcaf95d9fa",
  //     },
  //     {
  //       logo: "data:image/png;base64,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",
  //       uuid: "10339a4b-7c48-40ab-abad-f3bcaf95d9fa",
  //     },
  //   ],
  //   []
  // );

  // const epg = useMemo(
  //   () => [
  //     {
  //       channelUuid: "30f5ff1c-1346-480a-8047-a999dd908c1e",
  //       description: "Ut anim nisi consequat minim deserunt...",
  //       id: "b67ccaa3-3dd2-4121-8256-33dbddc7f0e6",
  //       image:
  //         "data:image/png;base64,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",

  //       since: "2022-12-13T23:50:00",
  //       till: "2022-12-14T00:55:00",
  //       title: "Title",
  //     },
  //   ],
  //   []
  // );

  // const {
  //   getEpgProps,
  //   getLayoutProps,
  //   onScrollToNow,
  //   onScrollLeft,
  //   onScrollRight,
  // } = useEpg({
  //   epg,
  //   channels,
  //   startDate: "2023/12/13",
  //   endDate: "2023/12/14", // or 2022-02-02T00:00:00
  // });

  // return (
  //   <div>
  //     <div style={{ height: "600px", width: "1200px" }}>
  //       <Epg {...getEpgProps()}>
  //         <Layout {...getLayoutProps()} />
  //       </Epg>
  //     </div>
  //   </div>
  // );
  const [startingGroup, setStartingGroup] = useState(0);
  const groups = [
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
    { id: 3, title: "group 3" },
    { id: 4, title: "group 4" },
    { id: 7, title: "group 7" },
    { id: 8, title: "group 8" },
    { id: 9, title: "group 9" },
    { id: 10, title: "group 10" },
    { id: 11, title: "group 11" },
    { id: 12, title: "group 12" },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: moment(),
      end_time: moment().add(1, "hour"),
    },
    {
      id: 2,
      group: 2,
      title: "item 2",
      start_time: moment(new Date("2023-12-14T03:24:00")), //.add(-0.5, "hour"),
      end_time: moment().add(0.5, "hour"),
    },
    {
      id: 3,
      group: 1,
      title: "item 3",
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
    },
    {
      id: 4,
      group: 3,
      title: "item 3",
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
    },
    {
      id: 5,
      group: 4,
      title: "item 3",
      start_time: moment(new Date("2023-12-14T10:00:00")),
      end_time: moment().add(3, "hour"),
    },
    {
      id: 6,
      group: 5,
      title: "item 8",
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
      itemProps: {
        style: {
          background: "fuchsia",
        },
      },
    },
  ];

  return (
    <div>
      <Timeline
        groups={groups.slice(startingGroup, startingGroup + 6)}
        items={items}
        defaultTimeStart={moment().add(-7, "hour")}
        defaultTimeEnd={moment().add(7, "hour")}
        lineHeight={70}
        itemHeightRatio={0.5}
        canMove={false}
        onItemClick={(itemId, e, time) => console.log("dupa")}
        sidebarWidth={200}
        maxZoom={2678400000}
      />
    </div>
  );
}
