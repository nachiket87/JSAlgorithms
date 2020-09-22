"use strict";
// Greedy Algorithm to merge meetings times that overlap
const meetingTime = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];
// sort the array first
const sortedTimes = meetingTime.sort((a, b) => {
    return a.startTime - b.startTime;
});
let mergedMeetings = [sortedTimes[0]]; //add the first meeting to merged array
// loop over the sortedTimes array from index 1 and check if startTime < endTime
for (let i = 1; i < sortedTimes.length; i++) {
    let currentMeeting = sortedTimes[i];
    let lastMeeting = mergedMeetings[mergedMeetings.length - 1];
    if (currentMeeting.startTime <= lastMeeting.endTime) {
        lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    }
    else {
        mergedMeetings.push(currentMeeting);
    }
}
console.log(mergedMeetings);
/* answer should be =  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 }] */
