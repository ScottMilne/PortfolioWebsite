import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./myTimeline.css";
import HorizontalTimeline from "react-horizontal-timeline";
import React from 'react'
import { Chrono } from "react-chrono";

function myTimeline() {

  const items = [
    {
    title: "2021",
    cardTitle: "Hastle Free Boilers",
    cardDetailedText: "During the Summer after my third year of univeristy I worked in the dev team for a boiler managemnt company"
  }, {
    title: "2020",
    cardTitle: "HND Computing",
    cardDetailedText: "During the Summer after my third year of univeristy I worked in the dev team for a boiler managemnt company"
  }, {
    title: "2018",
    cardTitle: "NC Computing",
    cardDetailedText: "During the Summer after my third year of univeristy I worked in the dev team for a boiler managemnt company"
  }, {
    title: "2017",
    cardTitle: "Intro Computing",
    cardDetailedText: "During the Summer after my third year of univeristy I worked in the dev team for a boiler managemnt company"
  }
];


  return (
    <div>
    <Chrono items={items} hideControls="true"/>
  </div>
  );
}
export default myTimeline;
