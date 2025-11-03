import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { Typography } from "@mui/material";
export default function TimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2023</TimelineOppositeContent>
        <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
        <TimelineContent><Typography variant="h6">Event</Typography><Typography>Desc</Typography></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
