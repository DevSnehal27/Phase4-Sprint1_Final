import {
  Top_Left, Top_Left_V2, Top_Right, Top_Right_V2, TL_to_B, TR_to_B, Bottom_Left, BL_to_T, Bottom_Right,
  BR_to_T, Bottom_Right_V2, Bottom_Left_V2, TL_B_V2,
  TR_B_V2,
  BR_T_V2,
  BL_T_V2
} from './Helper';


export const DisplayVariant_Core = (Data, draw, isSim, simulationSchema) => {

  console.log("Data.orientation_Based.length inside Display_Variants = ", draw);
  
 // console.log("Data.orientation_Based.length inside Display_Variants = " + Data.orientation_Based?.length);
  var loop = Data.orientation_Based?.length;
  console.log("Loop display variant inside ::: ",loop);
  console.log("Data ::: ",Data);
  var i;
  console.log(
    "=================================================================================================================="
  );

  // for (i = 0; i < loop; i++) {
  //   console.log(
  //     "Pallet_Region_X_Pos : " + Data.Pallet_Region_X_Pos[i],
  //     "Pallet_Region_Y_Pos : " + Data.Pallet_Region_Y_Pos[i],
  //     "No_Cases_in_row : " + Data.No_Cases_in_row[i],
  //     "No_Cases_in_col: " + Data.No_Cases_in_col[i],
  //     "orientation_Based : " + Data.orientation_Based[i],
  //     "Total_no_cases : " + Data.Total_no_cases[i],
  //     "Case_length : " + Data.Case_length,
  //     "Case_Width : " + Data.Case_Width,
  //     "Position_orientation_Based : " + Data.Position_orientation_Based[i],
  //     "Max_No_Cases : " + Data.Max_No_Cases[i]
  //   );
  // }

  console.log(
    "=================================================================================================================="
  );
  let casePositions = [];
  // let singleVarcaseVal = [];


  for (i = 0; i < loop; i++) {
   //  console.log("inside displayVarient_core abc asePositions...  ", casePositions.flat().sort())
    if (Data.orientation_Based[i] == "Width") {
      console.log("Width Position count",Data.Position_orientation_Based[i]);
      if (Data.Position_orientation_Based[i] == "Top-Left") {
        let singleVarcaseVal_Top_Left = Top_Left(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Top_Left !== null) && (singleVarcaseVal_Top_Left !== undefined)) {
          casePositions.push(singleVarcaseVal_Top_Left)
        }
      } else if (Data.Position_orientation_Based[i] == "Top-Right") {
        let singleVarcaseVal_Top_Right = Top_Right(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Top_Right !== null) && (singleVarcaseVal_Top_Right !== undefined)) {
          casePositions.push(singleVarcaseVal_Top_Right)
        }
      } else if (Data.Position_orientation_Based[i] == "Bottom-Right") {
        let singleVarcaseVal_Bottom_Right = Bottom_Right(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Bottom_Right !== null) && (singleVarcaseVal_Bottom_Right !== undefined)) {
          casePositions.push(singleVarcaseVal_Bottom_Right)
        }
      } else if (Data.Position_orientation_Based[i] == "Bottom-Left") {
        let singleVarcaseVal_Bottom_Left = Bottom_Left(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Bottom_Left !== null) && (singleVarcaseVal_Bottom_Left !== undefined)) {
          casePositions.push(singleVarcaseVal_Bottom_Left)
        }
      }
      else if (Data.Position_orientation_Based[i] == "TL-to-B") {
        let singleVarcaseVal_TL_to_B = TL_to_B(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_TL_to_B !== null) && (singleVarcaseVal_TL_to_B !== undefined)) {
          casePositions.push(singleVarcaseVal_TL_to_B)
        }
      }
      else if (Data.Position_orientation_Based[i] == "TR-to-B") {
        let singleVarcaseVal_TR_to_B = TR_to_B(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_TR_to_B !== null) && (singleVarcaseVal_TR_to_B !== undefined)) {
          casePositions.push(singleVarcaseVal_TR_to_B)
        }
      }
      else if (Data.Position_orientation_Based[i] == "BL-to-T") {
        let singleVarcaseVal_BL_to_T = BL_to_T(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_BL_to_T !== null) && (singleVarcaseVal_BL_to_T !== undefined)) {
          casePositions.push(singleVarcaseVal_BL_to_T)
        }
      }
      else if (Data.Position_orientation_Based[i] == "BR-to-T") {
        let singleVarcaseVal_BR_to_T = BR_to_T(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_length[0],
          Data.Case_Width[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_BR_to_T !== null) && (singleVarcaseVal_BR_to_T !== undefined)) {
          casePositions.push(singleVarcaseVal_BR_to_T)
        }
      }

    } else if (Data.orientation_Based[i] == "Length") {
      console.log("Length Position count",i);
      if (Data.Position_orientation_Based[i] == "Top-Left-V2") {
        let singleVarcaseVal_Top_Left_V2 = Top_Left_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Top_Left_V2 !== null) && (singleVarcaseVal_Top_Left_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_Top_Left_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "Top-Right-V2") {
        let singleVarcaseVal_Top_Right_V2 = Top_Right_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Top_Right_V2 !== null) && (singleVarcaseVal_Top_Right_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_Top_Right_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "Bottom-Right-V2") {
        let singleVarcaseVal_Bottom_Right_V2 = Bottom_Right_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Bottom_Right_V2 !== null) && (singleVarcaseVal_Bottom_Right_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_Bottom_Right_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "Bottom-Left-V2") {
        let singleVarcaseVal_Bottom_Left_V2 = Bottom_Left_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_Bottom_Left_V2 !== null) && (singleVarcaseVal_Bottom_Left_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_Bottom_Left_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "TL-B-V2") {
        let singleVarcaseVal_TL_B_V2 = TL_B_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_TL_B_V2 !== null) && (singleVarcaseVal_TL_B_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_TL_B_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "TR-B-V2") {
        let singleVarcaseVal_TR_B_V2 = TR_B_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_TR_B_V2 !== null) && (singleVarcaseVal_TR_B_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_TR_B_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "BL-T-V2") {
        let singleVarcaseVal_BL_T_V2 = BL_T_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_BL_T_V2 !== null) && (singleVarcaseVal_BL_T_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_BL_T_V2)
        }
      }
      if (Data.Position_orientation_Based[i] == "BR-T-V2") {
        let singleVarcaseVal_BR_T_V2 = BR_T_V2(
          parseInt(Data.Pallet_Region_X_Pos[i], 10),
          parseInt(Data.Pallet_Region_Y_Pos[i], 10),
          Data.Case_Width[0],
          Data.Case_length[0],
          Data.No_Cases_in_row[i],
          Data.No_Cases_in_col[i],
          Data.Max_No_Cases[i],
          Data.orientation_Based[i],
          draw, isSim, simulationSchema
        );
        if ((singleVarcaseVal_BR_T_V2 !== null) && (singleVarcaseVal_BR_T_V2 !== undefined)) {
          casePositions.push(singleVarcaseVal_BR_T_V2)
        }
      }


    }
  }

  console.log("casePositions from DisplayVarient module... ", casePositions.flat())

  return casePositions.flat();


}



