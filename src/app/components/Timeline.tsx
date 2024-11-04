import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Image from "next/image";
import { AkilaCastings } from "../assets";

export default function OutlinedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot style={{padding:0, margin:0, border:'none', outline:'none', display:"flex", justifyContent:'center', alignItems:'center'}} sx={{padding:0, justifyContent:'center', alignItems:'center', margin:0, border:'none', outline:'none'}} variant="outlined"> */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
              background: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            V
          </div>
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <div style={{display:"flex", justifyContent:'center', alignItems:'center', color: "darkorange", textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>V</div> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot variant="outlined" color="primary" /> */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
              background: "white",
              border: "1px solid lightgrey",
              padding: "18%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={AkilaCastings}
              alt=""
            ></Image>
          </div>

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
