// To parse this data:
//
//   import { Convert } from "./file";
//
//   const sprintDetails = Convert.toSprintDetails(json);

export interface SprintDetail {
    endDate:          string;   
    goal:             null;     
    id:               string;   
    name:             string;   
    originBoardId:    number;   
    self:             string;   
    startDate:        string;   
    state:            string;   
    timeChart:        Array<Object>;
    totalStoryPoints: number;   
}

// export interface myType {
//     name : myType2;
// }

// export interface myType2 {
//     originalEstimated: number;
//     remaining:         number;
//     totalSpent:        number;
// }
