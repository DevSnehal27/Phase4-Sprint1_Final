import { No_Cases_in_col_Var1 } from "./Helper";
import { No_Cases_in_col_Var2 } from "./Helper";
import { No_Cases_in_row_Var1 } from "./Helper";
import { No_Cases_in_row_Var2 } from "./Helper";


export const Frame_1 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    "Frame_1 Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;
    var V1_Capacity = 0;
    var No_Cases_in_Row1;

    var No_Cases_in_col1;

    var Quad1_Oriantation = "Width";
    var Quad2_Oriantation = "Width";
    var Quad1_Origin;
    var Quad2_Origin;

    var Quad_Capacity_1;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Pallet_Wid;

    PL_2 = PL_1;
    PW_2 = PW_1;

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + (Pallet_Len - Case_Len);//

    Xpos3 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
    Ypos3 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

    // Xpos1 = Ypos;
    // Xpos2 = Ypos1 + (Pallet_Len - Case_Len);//

    // Ypos3 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
    // Xpos3 = Ypos + (Pallet_Len / 2 - Case_Len / 2);


    if ((Weight_distribution_V) || (Weight_distribution_H)) {

      if (Pallet_Origin[index][1] == "TL-to-B") {
        Xpos1 = Xpos;
        Quad1_Origin = "TL-to-B";
        Quad2_Origin = "BR-to-T";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);

      }
      else if (Pallet_Origin[index][1] == "TR-to-B") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        console.log(" ;;;;Xpos1 " + Xpos1);
        Quad1_Origin = "TR-to-B";
        Quad2_Origin = "BL-to-T";
        Xpos2 = Xpos;
      }
      else if (Pallet_Origin[index][1] == "Top-Left") {
        Xpos1 = Xpos;
        Quad1_Origin = "Top-Left";
        Quad2_Origin = "Bottom-Right";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);

      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        Quad1_Origin = "Top-Right";
        Quad2_Origin = "Bottom-Left";
        Xpos2 = Xpos;
      }
    }
    else {
      if (Pallet_Origin[index][1] == "TL-to-B") {
        Xpos1 = Xpos;
        Quad1_Origin = "TL-to-B";
      }
      else if (Pallet_Origin[index][1] == "TR-to-B") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        Quad1_Origin = "TR-to-B";
      }
      else if (Pallet_Origin[index][1] == "Top-Left") {
        Xpos1 = Xpos;
        Quad1_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        Quad1_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Right") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Left") {
        Xpos1 = Xpos;
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][1] == "BL-to-T") {
        Xpos1 = Xpos;
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][1] == "BR-to-T") {
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "BR-to-T";
      }
    }
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    V1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];
    console.log(" v1 row" + No_Cases_in_row_Var1(PL_1, Case_Len)[0] + " v1 col " + No_Cases_in_col_Var1(PW_1, Case_Wid)[0]);

    if (V1_Capacity <= Cases) {
      Quad1_Oriantation = "Width";
      Quad1_Origin = Pallet_Origin[index][1];
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
      No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
      Cases_in_Q1 = V1_Capacity; //Quad_Capacity_1 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      Quad1_Origin = Pallet_Origin[index][1];

      if (Pallet_Origin[index][1] == "TL-to-B") {
        Quad2_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][1] == "TR-to-B") {
        Quad2_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][1] == "Top-Left") {
        Quad2_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Quad2_Origin = "Bottom-Left";
      }

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Cases_in_Q1 = Cases;
      Cases_in_Q2 = Cases;

      No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
      No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if ((Weight_distribution_H) || (Weight_distribution_V)) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H & Weight_distribution_V var 1 if " + (Weight_distribution_H) || (Weight_distribution_V));
      if (V1_Capacity == 1) {
        Cases_in_Q1 = 1;
        Cases_in_Q2 = 0;
        console.log(" V1_Capacity " + V1_Capacity + " Quad1_Origin " + Pallet_Origin[1]);
        if (Pallet_Origin[index][1] == "Top-Left") {
          Quad1_Origin == "Top-Left";
        }
        else if (Pallet_Origin[index][1] == "Top-Right") {
          Quad1_Origin == "Top-Right";
        }
        else if (Pallet_Origin[index][1] == "TL-to-B") {
          Quad1_Origin == "Bottom-Left";
        }
        else if (Pallet_Origin[index][1] == "TR-to-B") {
          Quad1_Origin == "Bottom-Right";
        }

        if ((Weight_distribution_H) && (!Weight_distribution_V)) {
          console.log(" H  is true ");
          if (Pallet_Origin[index][1] == "Top-Left") {
            Xpos1 = Xpos1;
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
          else if (Pallet_Origin[index][1] == "Top-Right") {
            Xpos1 = (Xpos + (Pallet_Wid - Case_Wid));
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
          else if (Pallet_Origin[index][1] == "TL-to-B") {
            Xpos1 = Xpos1;
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];

          }
          else if (Pallet_Origin[index][1] == "TR-to-B") {
            Xpos1 = (Xpos + (Pallet_Wid - Case_Wid));
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
        }
        else if ((!Weight_distribution_H) && (Weight_distribution_V)) {
          console.log(" V is true ");
          if (Pallet_Origin[index][1] == "Top-Left") {
            Xpos1 = Xpos1 + No_Cases_in_col1[1];
            Ypos1 = Ypos1;
          }
          else if (Pallet_Origin[index][1] == "Top-Right") {
            Xpos1 = (Xpos + (Pallet_Wid - Case_Wid)) - No_Cases_in_col1[1];
            Ypos1 = Ypos1;

          }
          else if (Pallet_Origin[index][1] == "TL-to-B") {
            Xpos1 = Xpos + No_Cases_in_col1[1];
            Ypos1 = Ypos + (Pallet_Len - Case_Len);

          }
          else if (Pallet_Origin[index][1] == "TR-to-B") {
            Xpos1 = Xpos + No_Cases_in_col1[1];
            Ypos1 = Ypos + (Pallet_Len - Case_Len);

          }
        }
        else if ((Weight_distribution_H) && (Weight_distribution_V)) {
          console.log(" H & V is true ");
          if (Pallet_Origin[index][1] == "Top-Left") {
            Xpos1 = Xpos1 + No_Cases_in_col1[1];
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
          else if (Pallet_Origin[index][1] == "Top-Right") {
            Xpos1 = Xpos1 - No_Cases_in_col1[1];
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
          else if (Pallet_Origin[index][1] == "TL-to-B") {
            Xpos1 = Xpos1 + No_Cases_in_col1[1];
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
          else if (Pallet_Origin[index][1] == "TR-to-B") {
            Xpos1 = Xpos1 - No_Cases_in_col1[1];
            Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          }
        }
        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col1[1],
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad1_Oriantation,
        ];
        Total_no_cases = [
          Quad_Capacity_1,
          Quad_Capacity_1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
      else if (Cases >= Inner_Quad_Capacity) {
        Centred_Cases = 0;
        Cases_in_Q1 = (Inner_Quad_Capacity / 2);
        Cases_in_Q2 = (Inner_Quad_Capacity / 2);



        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col1[1],
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad1_Oriantation,
        ];
        Total_no_cases = [
          Quad_Capacity_1,
          Quad_Capacity_1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
      else {
        console.log(" Cases " + Cases);
        var Centred_Cases = 0;
        if (Cases % 2 == 0) {
          console.log(" Total_inside_cases%2 == 0 ");
          Centred_Cases = 0;
          Cases_in_Q1 = Cases / 2;
          Cases_in_Q2 = Cases / 2;
          console.log(" en in cases %2 ==0");
          console.log(" CaSES4 " + Cases_in_Q1);
          console.log(" Cntrd_Cases4 " + Centred_Cases);

        }
        else {
          Centred_Cases = 1;
          Cases_in_Q1 = (Cases - 1) / 2;
          Cases_in_Q2 = (Cases - 1) / 2;
          console.log(" CaSES5 " + Cases_in_Q1);
          console.log(" Cntrd_Cases5 " + Centred_Cases);

        }


        if (((No_Cases_in_col1[0] * No_Cases_in_Row1[0]) > 0 && Centred_Cases == 1) || (Cases == 1 && Centred_Cases == 1)) {
          Centred_Cases = 1;
        }
        else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          console.log(" Centered cases ==0 loop you have entered");

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;//- No_Cases_in_Row1[1]; //+ (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          Xpos3 = Xpos3;
          Ypos3 = Ypos3;
          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row1[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col1[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row1[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col1[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {

          Centred_Cases = 1;

          if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 != 0) {
            console.log(" Both Odd Loop ");
            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;
            console.log(" Cases_in_Q1 bothodd" + Cases_in_Q1);
          }
          else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 == 0) {
            console.log(" Both Even Loop ");

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" Cases_in_Q32 " + Cases_in_Q1);

            //var Possible_Cases = (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] +No_Cases_in_col1[0] / 2 -1;

            if ((Pallet_Origin[index][1] == "TL-to-B") || (Pallet_Origin[index][1] == "TR-to-B")) {
              var Possible_Cases =
                (No_Cases_in_col1[0] / 2 - 1) * No_Cases_in_Row1[0] +
                No_Cases_in_Row1[0] / 2 -
                1;

            }
            else if ((Pallet_Origin[index][1] == "Top-Left") || (Pallet_Origin[index][1] == "Top-Right")) {
              var Possible_Cases =
                (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] +
                No_Cases_in_col1[0] / 2 -
                1;

            }

            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 != 0) {
            console.log(" Even  Odd  Loop ");

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" -------totl inside cases " + Total_inside_cases);
            console.log(" Cases_in_Q33 " + Cases_in_Q1);
            if ((Pallet_Origin[index][1] == "Top-Left") || (Pallet_Origin[index][1] == "Top-Right")) {
              var Possible_Cases =
                (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] + (No_Cases_in_col1[0]) / 2;
            }
            else if ((Pallet_Origin[index][1] == "TL-to-B") || (Pallet_Origin[index][1] == "TR-to-B")) {
              var Possible_Cases =
                (No_Cases_in_col1[0] / 2 - 1) * No_Cases_in_Row1[0] + (No_Cases_in_Row1[0]);
            }

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 == 0) {
            console.log(" Odd Even Loop ");
            var Possible_Cases = No_Cases_in_col1[0] / 2 + 1;

            console.log(" Possible_Cases " + Possible_Cases);

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" Cases_in_Q " + Cases_in_Q1);

            var Possible_Cases = ((((No_Cases_in_Row1[0] - 1) / 2) * No_Cases_in_col1[0]) + (No_Cases_in_col1[0] / 2) - 1);

            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }

          if (No_Cases_in_col1[0] > 0 && Centred_Cases == 1) {
            Centred_Cases = 1;
          } else {
            Centred_Cases = 0;
          }

          console.log(+ " Cases_in_Q1 " + Cases_in_Q1);

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;
          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;//- No_Cases_in_Row1[1];//+ (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 5
          var Xpos3 = Xpos3;
          var Ypos3 = Ypos3;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,

          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,

          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row1[0],
            1
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col1[0],
            1
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row1[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col1[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Centred_Cases
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      console.log("Cases at unweighted  " + Cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity)
      if ((Cases >= Inner_Quad_Capacity) || (Cases <= Inner_Quad_Capacity)) {
        Quad1_Origin = Pallet_Origin[index][1];
        console.log(" ya 2.1 Cases > Inner_Quad_Capacity ");

        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];



        orientation_Based = [
          Quad1_Oriantation,
        ];

        Total_no_cases = [
          Quad_Capacity_1,

        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];

      }

    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };
  console.log("algoFrame frame1 data:..... ", Data)

  return Data;
};

export const Frame_2 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;

    var No_Cases_in_col1;
    var No_Cases_in_col2;

    var Quad1_Capacity;
    var Quad2_Capacity;

    var Quad1_Oriantation = "Length";
    var Quad2_Oriantation = "Width";
    var Quad3_Oriantation = "Width";
    var Quad1_Origin;
    var Quad2_Origin;
    var Quad3_Origin;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Case_Len;

    PL_2 = PL_1;
    PW_2 = Pallet_Wid - Case_Len;
    if (Weight_distribution_H) {
      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Ypos1 = Ypos;

      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Len);

      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad1_Origin = "Top-Left-V2";
      }

      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos;
        Quad2_Origin = "TL-to-B";
        Quad3_Origin = "BR-to-T";
        Xpos3 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);

      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Quad2_Origin = "TR-to-B";
        Quad3_Origin = "BL-to-T";
        Xpos3 = Xpos;
        console.log(" Q2 TR to B and Q3 is Bl to T " + Quad2_Origin);
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos;
        Quad2_Origin = "Top-Left";
        Quad3_Origin = "Bottom-Right";
        Xpos3 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);

      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Quad2_Origin = "Top-Right";
        Quad3_Origin = "Bottom-Left";
        Xpos3 = Xpos;
      }

      Xpos4 = Xpos + (PW_2 / 2 - Case_Wid / 2);
      Ypos4 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
    }
    else {
      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Ypos1 = Ypos;

      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad1_Origin = "Top-Left-V2";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
        Quad1_Origin = "Bottom-Left-V2";
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);
      }


      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos;
        Ypos2 = Ypos;
        Quad2_Origin = "TL-to-B";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Ypos2 = Ypos;
        Quad2_Origin = "TR-to-B";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos;
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        Xpos2 = Xpos;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
        Quad2_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
        Quad2_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "BL-to-T") {
        Xpos2 = Xpos;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
        Quad2_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "BR-to-T") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
        Quad2_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len - Case_Wid);
        Ypos2 = Ypos;
        Quad2_Origin = "TR-to-B";
      }
      else if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos;
        Ypos2 = Ypos;
        Quad2_Origin = "TL-to-B";
      }
    }
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
    No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
    No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    Total_outside_cases = Quad1_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Quad2_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad2_Capacity<= Total_inside_cases");
      Quad2_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Cases_in_Q2 = Quad2_Capacity;
      Inner_Quad_Capacity = Quad2_Capacity;

    }
    else {
      Quad2_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[index][2] == "TL-to-B") {
        Quad3_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Quad3_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Quad3_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Quad3_Origin = "Bottom-Left";
      }

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Cases_in_Q2 = Total_inside_cases;
      Cases_in_Q3 = Total_inside_cases;

      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Inner_Quad_Capacity = Quad2_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases;

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          var space = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q2 = Total_inside_cases / 2;
            Cases_in_Q3 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q2 " + Cases_in_Q2);
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] +
                  No_Cases_in_Row2[0] / 2 -
                  1;
                console.log(" ''Pallet_Origin[index][1]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] +
                  No_Cases_in_col2[0] / 2 -
                  1;
                console.log(" //Pallet_Origin[index][2]==Top-Left     Possible_Cases ");
              }
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] + (No_Cases_in_col2[0] - 1) / 2;
                console.log(" :::::Pallet_Origin[index][1]==Top-Left    Even odd loop  possible cases ");
              }
              else if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] + (No_Cases_in_Row2[0]);
              }
              console.log(" No_Cases_in_col2[0] " + No_Cases_in_col2[0] + " No_Cases_in_Row2[0]" + No_Cases_in_Row2[0]);
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col2[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);

              var Possible_Cases =
                ((((No_Cases_in_col2[0] - 1) / 2) * No_Cases_in_Row2[0]) + (No_Cases_in_Row2[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col2[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          var space = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          Centred_Cases = 0;
          Cases_in_Q1 = Remaining_Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col2[0]>=0  " + No_Cases_in_col2[0]);
        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(" entered in CC==0 loop of passing only x and y");

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;


          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" UNweighted loop ");
      console.log(" Cases " + Cases + " Total_outside_cases " + Total_outside_cases);
      if (Cases < Total_outside_cases) {
        console.log(" entered in Cases< Total_outside_cases ");
        Cases_in_Q1 = Cases;
        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];


        orientation_Based = [
          Quad1_Oriantation,
        ];

        Total_no_cases = [
          Quad1_Capacity,

        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];
      }
      else {
        console.log(" Cases > Total_outside_cases ");
        Cases_in_Q1 = Quad1_Capacity;
        Cases_in_Q2 = Total_inside_cases;

        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0]
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0]
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1]
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1]
        ];


        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation
        ];

        Total_no_cases = [
          Quad1_Capacity,
          Quad2_Capacity
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin

        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame2 data:..... ", Data)

  return Data;
};

export const Frame_3 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases,
    " Pallet_Origin ", Pallet_Origin,
    " index ", index
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;

    var No_Cases_in_col1;
    var No_Cases_in_col2;

    var Quad1_Capacity;
    var Quad2_Capacity;

    var Quad1_Oriantation = "Width";
    var Quad2_Oriantation = "Length";
    var Quad3_Oriantation = "Length";
    var Quad1_Origin;
    var Quad2_Origin;
    var Quad3_Origin;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Case_Wid;

    PL_2 = PL_1;
    PW_2 = Pallet_Wid - Case_Wid;
    if (Weight_distribution_H) {
      Xpos1 = Xpos;
      Ypos1 = Ypos;

      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }

      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos2 = Xpos + Case_Wid;
        Quad2_Origin = "TL-B-V2";
        Quad3_Origin = "BR-T-V2";
        Xpos3 = Xpos + (Pallet_Wid - Case_Len);

      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Quad2_Origin = "TR-B-V2";
        Quad3_Origin = "BL-T-V2";
        Xpos3 = Xpos + Case_Wid;
      }
      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        Xpos2 = Xpos + Case_Wid;
        Quad2_Origin = "Top-Left-V2";
        Quad3_Origin = "Bottom-Right-V2";
        Xpos3 = Xpos + (Pallet_Wid - Case_Len);

      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Quad2_Origin = "Top-Right-V2";
        Quad3_Origin = "Bottom-Left-V2";
        Xpos3 = Xpos + Case_Wid;
      }
    }
    else {
      Xpos1 = Xpos;

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
        Ypos1 = Ypos;
      }
      else if (Pallet_Origin[index][1] == "Bottom-Left") {
        Quad1_Origin = "Bottom-Left";
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
      }

      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos2 = Xpos + Case_Wid;
        Quad2_Origin = "TL-B-V2";
        Ypos2 = Ypos;
      }
      else if (Pallet_Origin[index][2] == "BR-T-V2") {
        Quad2_Origin = "BR-T-V2";
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Ypos2 = Ypos
        Quad2_Origin = "TR-B-V2";
      }
      else if (Pallet_Origin[index][2] == "BL-T-V2") {
        Quad2_Origin = "BL-T-V2";
        Xpos2 = Xpos + Case_Wid;
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        Xpos2 = Xpos + Case_Wid;
        Quad2_Origin = "Top-Left-V2";
        Ypos2 = Ypos;
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right-V2") {
        Quad2_Origin = "Bottom-Right-V2";
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Quad2_Origin = "Top-Right-V2";
        Ypos2 = Ypos;
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left-V2") {
        Quad2_Origin = "Bottom-Left-V2";
        Xpos2 = Xpos + Case_Wid;
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
      }


    }
    Xpos4 = (Xpos + (((Pallet_Wid - Case_Wid) / 2) - (Case_Len / 2))) + Case_Wid;
    Ypos4 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    Total_outside_cases = Quad1_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Quad2_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad2_Capacity<= Total_inside_cases");
      Quad2_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
      No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
      Cases_in_Q2 = Quad2_Capacity;
      Inner_Quad_Capacity = Quad2_Capacity;

    }
    else {
      Quad2_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Quad3_Origin = "BR-T-V2";
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Quad3_Origin = "BL-T-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        Quad3_Origin = "Bottom-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        Quad3_Origin = "Bottom-Left-V2";
      }
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Cases_in_Q2 = Total_inside_cases;
      Cases_in_Q3 = Total_inside_cases;

      No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
      No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
      Inner_Quad_Capacity = Quad2_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases;

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          var space = (PL_1 - Cases_in_Q1 * Case_Len) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q2 = Total_inside_cases / 2;
            Cases_in_Q3 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q2 " + Cases_in_Q2);
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "TL-B-V2") || (Pallet_Origin[index][2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] +
                  No_Cases_in_Row2[0] / 2 -
                  1;
                console.log(" ''Pallet_Origin[index][2]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[index][2] == "Top-Left-V2") || (Pallet_Origin[index][2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] +
                  No_Cases_in_col2[0] / 2 -
                  1;
                console.log(" //Pallet_Origin[index][2]==Top-Left-V2     Possible_Cases ");
              }
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "Top-Left-V2") || (Pallet_Origin[index][2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] + (No_Cases_in_col2[0] - 1) / 2;
                console.log(" :::::Pallet_Origin[index][1]==Top-Left-V2    Even odd loop  possible cases ");
              }
              else if ((Pallet_Origin[index][2] == "TL-B-V2") || (Pallet_Origin[index][2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] + (No_Cases_in_Row2[0]);
              }
              console.log(" No_Cases_in_col2[0] " + No_Cases_in_col2[0] + " No_Cases_in_Row2[0]" + No_Cases_in_Row2[0]);
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col2[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);

              var Possible_Cases =
                ((((No_Cases_in_col2[0] - 1) / 2) * No_Cases_in_Row2[0]) + (No_Cases_in_Row2[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col2[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          var space = (PL_1 - Cases_in_Q1 * Case_Len) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          Centred_Cases = 0;
          Cases_in_Q1 = Remaining_Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col2[0]>=0  " + No_Cases_in_col2[0]);
        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Len) / 2;

          console.log(" entered in CC==0 loop of passing only x and y");

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;


          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Len) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" UNweighted loop ");
      console.log(" Cases " + Cases + " Total_outside_cases " + Total_outside_cases);
      if (Cases < Total_outside_cases) {
        console.log(" entered in Cases< Total_outside_cases ");
        Cases_in_Q1 = Cases;
        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];


        orientation_Based = [
          Quad1_Oriantation,
        ];

        Total_no_cases = [
          Quad1_Capacity,

        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];
      }
      else {
        console.log(" Cases > Total_outside_cases ");
        Cases_in_Q1 = Quad1_Capacity;
        Cases_in_Q2 = Total_inside_cases;

        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0]
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0]
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1]
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1]
        ];


        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation
        ];

        Total_no_cases = [
          Quad1_Capacity,
          Quad2_Capacity
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin

        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };
  console.log("algoFrame frame3 data:..... ", Data)

  return Data;
};

export const Frame_4 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  var Pallet_Origin = Pallet_Origin
  var index = index

  console.log(
    "poss_Origin here createVariants Frame_4 Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    " CasesSchemaA " +
    Cases + " poss_Origin ",
    Pallet_Origin, " index ", index
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;
    var Cases_in_Q4 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;

    var No_Cases_in_col1;
    var No_Cases_in_col2;

    var Quad1_Capacity;
    var Quad2_Capacity;

    var Quad1_Oriantation = "Length";
    var Quad2_Oriantation = "Width";
    var Quad3_Oriantation = "Width";
    var Quad1_Origin;
    var Quad2_Origin;
    var Quad3_Origin;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Case_Len;

    PL_2 = PL_1;
    PW_2 = Pallet_Wid - Case_Len;

    if (Weight_distribution_H) {
      Xpos1 = Xpos;
      Ypos1 = Ypos;

      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Len);

      console.log("Pallet_Origin[index][1] 1 ", Pallet_Origin[index][1])

      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad1_Origin = "Top-Left-V2";
      }

      console.log("Pallet_Origin[index][1] 2 ", Pallet_Origin[index][2])



      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos + Case_Len;
        Quad2_Origin = "TL-to-B";
        Quad3_Origin = "BR-to-T";
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid);

      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Quad2_Origin = "TR-to-B";
        Quad3_Origin = "BL-to-T";
        Xpos3 = Xpos + Case_Len;
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos + Case_Len;
        Quad2_Origin = "Top-Left";
        Quad3_Origin = "Bottom-Right";
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid);

      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Quad2_Origin = "Top-Right";
        Quad3_Origin = "Bottom-Left";
        Xpos3 = Xpos + Case_Len;
      }
    }
    else {
      Xpos1 = Xpos;
      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Len);

      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad1_Origin = "Top-Left-V2";
        Ypos1 = Ypos;
      }
      else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
        Quad1_Origin = "Bottom-Left-V2";
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);
      }
      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos + Case_Len;
        Ypos2 = Ypos;
        Quad2_Origin = "TL-to-B";
      }
      else if (Pallet_Origin[index][2] == "BR-to-T") {
        Quad2_Origin = "BR-to-T";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos2 = Ypos;
        Quad2_Origin = "TR-to-B";
      }
      else if (Pallet_Origin[index][2] == "BL-to-T") {
        Quad2_Origin = "BL-to-T";
        Xpos2 = Xpos + Case_Len;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos + Case_Len;
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        Quad2_Origin = "Bottom-Right";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        Quad2_Origin = "Bottom-Left";
        Xpos2 = Xpos + Case_Len;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
    }
    Xpos4 = (Xpos + (((Pallet_Wid - Case_Len) / 2) - (Case_Wid / 2))) + Case_Len;
    Ypos4 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
    No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
    No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    Total_outside_cases = Quad1_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    console.log("Pallet_Origin[index][1] 2 ", Pallet_Origin[index][2])


    if (Quad2_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad3_Capacity<= Total_inside_cases");
      Quad2_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Cases_in_Q2 = Quad2_Capacity;
      Inner_Quad_Capacity = Quad2_Capacity;

    }
    else {
      Quad2_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[index][2] == "TL-to-B") {
        Quad3_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Quad3_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Quad3_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Quad3_Origin = "Bottom-Left";
      }
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Cases_in_Q2 = Total_inside_cases;
      Cases_in_Q3 = Total_inside_cases;

      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Inner_Quad_Capacity = Quad2_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases;

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          var space = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q2 = Total_inside_cases / 2;
            Cases_in_Q3 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q2 " + Cases_in_Q2);
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] +
                  No_Cases_in_Row2[0] / 2 -
                  1;
                console.log(" ''Pallet_Origin[index][1]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] +
                  No_Cases_in_col2[0] / 2 -
                  1;
                console.log(" //Pallet_Origin[1]==Top-Left     Possible_Cases ");
              }
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] + (No_Cases_in_col2[0] - 1) / 2;
                console.log(" :::::Pallet_Origin[index][2]==Top-Left    Even odd loop  possible cases ");
              }


              else if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] + (No_Cases_in_Row2[0]);
                console.log(" >>>>Pallet_Origin[2]==TL-to-B     Even odd loop  possible cases ");
              }
              console.log(" No_Cases_in_col2[0] " + No_Cases_in_col2[0] + " No_Cases_in_Row2[0]" + No_Cases_in_Row2[0]);
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col2[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);

              var Possible_Cases =
                ((((No_Cases_in_col2[0] - 1) / 2) * No_Cases_in_Row2[0]) + (No_Cases_in_Row2[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col2[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          var space = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          Centred_Cases = 0;
          Cases_in_Q1 = Remaining_Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col2[0]>=0  " + No_Cases_in_col2[0]);
        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(" entered in CC==0 loop of passing only x and y");

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;


          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" UNweighted loop ");
      console.log(" Cases " + Cases + " Total_outside_cases " + Total_outside_cases);
      if (Cases < Total_outside_cases) {
        console.log(" entered in Cases< Total_outside_cases ");
        Cases_in_Q1 = Cases;
        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];


        orientation_Based = [
          Quad1_Oriantation,
        ];

        Total_no_cases = [
          Quad1_Capacity,

        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];
      }
      else {
        console.log(" Cases > Total_outside_cases ");
        Cases_in_Q1 = Quad1_Capacity;
        Cases_in_Q2 = Total_inside_cases;

        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0]
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0]
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1]
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1]
        ];


        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation
        ];

        Total_no_cases = [
          Quad1_Capacity,
          Quad2_Capacity
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin

        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame4 data:..... ", Data)

  return Data;
};

export const Frame_5 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    "Frame_5 Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;

    var No_Cases_in_col1;
    var No_Cases_in_col2;

    var Quad1_Capacity;
    var Quad2_Capacity;

    var Quad1_Oriantation = "Width";
    var Quad2_Oriantation = "Width";
    var Quad3_Oriantation = "Width";
    var Quad1_Origin;
    var Quad2_Origin;
    var Quad3_Origin;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Case_Wid;

    PL_2 = PL_1;
    PW_2 = Pallet_Wid - Case_Wid;
    if (Weight_distribution_H) {
      Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
      Ypos1 = Ypos;

      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Len);

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }

      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos;
        Quad2_Origin = "TL-to-B";
        Quad3_Origin = "BR-to-T";
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid * 2);

      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Quad2_Origin = "TR-to-B";
        Quad3_Origin = "BL-to-T";
        Xpos3 = Xpos;
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos;
        Quad2_Origin = "Top-Left";
        Quad3_Origin = "Bottom-Right";
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid * 2);

      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Quad2_Origin = "Top-Right";
        Quad3_Origin = "Bottom-Left";
        Xpos3 = Xpos;
      }
    }
    else {
      Xpos1 = Xpos + (Pallet_Wid - Case_Wid);

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
        Ypos1 = Ypos;
      }
      else if (Pallet_Origin[index][1] == "Bottom-Left") {
        Quad1_Origin = "Bottom-Left";
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
      }
      if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos2 = Xpos;
        Ypos2 = Ypos;
        Quad2_Origin = "TL-to-B";
      }
      else if (Pallet_Origin[index][2] == "BR-to-T") {
        Quad2_Origin = "BR-to-T";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Ypos2 = Ypos;
        Quad2_Origin = "TR-to-B";
      }
      else if (Pallet_Origin[index][2] == "BL-to-T") {
        Quad2_Origin = "BL-to-T";
        Xpos2 = Xpos;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos2 = Xpos;
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        Quad2_Origin = "Bottom-Right";
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Xpos2 = Xpos + (Pallet_Wid - Case_Wid * 2);
        Ypos2 = Ypos;
        Quad2_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        Quad2_Origin = "Bottom-Left";
        Xpos2 = Xpos;
        Ypos2 = Ypos + (Pallet_Len - Case_Len);
      }
    }
    Xpos4 = Xpos + (PW_2 / 2 - Case_Wid / 2);
    Ypos4 = Ypos + (Pallet_Len / 2 - Case_Len / 2);


    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
    No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    Total_outside_cases = Quad1_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Quad2_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad3_Capacity<= Total_inside_cases");
      Quad2_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Cases_in_Q2 = Quad2_Capacity;
      Inner_Quad_Capacity = Quad2_Capacity;

    }
    else {
      Quad2_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[index][2] == "TL-to-B") {
        Quad3_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Quad3_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Quad3_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        Quad3_Origin = "Bottom-Left";
      }
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Cases_in_Q2 = Total_inside_cases;
      Cases_in_Q3 = Total_inside_cases;

      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Inner_Quad_Capacity = Quad2_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases;

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          var space = (PL_1 - Cases_in_Q1 * Case_Len) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q2 = Total_inside_cases / 2;
            Cases_in_Q3 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q2 " + Cases_in_Q2);
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] +
                  No_Cases_in_Row2[0] / 2 -
                  1;
                console.log(" ''Pallet_Origin[index][1]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] +
                  No_Cases_in_col2[0] / 2 -
                  1;
                console.log(" //Pallet_Origin[index][1]==Top-Left     Possible_Cases ");
              }
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 == 0 && No_Cases_in_col2[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);
              if ((Pallet_Origin[index][2] == "Top-Left") || (Pallet_Origin[index][2] == "Top-Right")) {
                var Possible_Cases =
                  (No_Cases_in_Row2[0] / 2 - 1) * No_Cases_in_col2[0] + (No_Cases_in_col2[0] - 1) / 2;
                console.log(" :::::Pallet_Origin[index][1]==Top-Left    Even odd loop  possible cases ");
              }
              else if ((Pallet_Origin[index][2] == "TL-to-B") || (Pallet_Origin[index][2] == "TR-to-B")) {
                var Possible_Cases =
                  (No_Cases_in_col2[0] / 2 - 1) * No_Cases_in_Row2[0] + (No_Cases_in_Row2[0]) / 2;
                console.log(" >>>>Pallet_Origin[2]==TL-to-B     Even odd loop  possible cases ");
              }

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row2[0] % 2 != 0 && No_Cases_in_col2[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col2[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q2 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q2 " + Cases_in_Q2);

              var Possible_Cases =
                ((((No_Cases_in_col2[0] - 1) / 2) * No_Cases_in_Row2[0]) + (No_Cases_in_Row2[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q2) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col2[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          var space = (PL_1 - Cases_in_Q1 * Case_Len) / 2;
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;

          Ypos1 = Ypos1 + space;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          Centred_Cases = 0;
          Cases_in_Q1 = Remaining_Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col2[0]>=0  " + No_Cases_in_col2[0]);
        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Len) / 2;

          console.log(" entered in CC==0 loop of passing only x and y");

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;


          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PL_1 - Cases_in_Q1 * Case_Len) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1 + space_1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row2[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col2[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row2[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col2[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad2_Oriantation,
            Quad3_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad2_Origin,
            Quad3_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" UNweighted loop ");
      console.log(" Cases " + Cases + " Total_outside_cases " + Total_outside_cases);
      if (Cases < Total_outside_cases) {
        console.log(" entered in Cases< Total_outside_cases ");
        Cases_in_Q1 = Cases;
        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];


        orientation_Based = [
          Quad1_Oriantation,
        ];

        Total_no_cases = [
          Quad1_Capacity,

        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];
      }
      else {
        console.log(" Cases > Total_outside_cases ");
        Cases_in_Q1 = Quad1_Capacity;
        Cases_in_Q2 = Total_inside_cases;

        Xpos1 = Xpos1;

        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1, Xpos2];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0]
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0]
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1]
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1]
        ];


        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation
        ];

        Total_no_cases = [
          Quad1_Capacity,
          Quad2_Capacity
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin

        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2
        ];
      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame5 data:..... ", Data)

  return Data;
};

export const Frame_6 = (
  Parameter_1,
  Parameter_2,
  Parameter_3,
  Parameter_4,
  Parameter_5,
  Parameter_6,
  Parameter_7,
  Parameter_8,
  Parameter_9,
  Parameter_10,
  Parameter_11,
  Parameter_12
) => {

  var Pallet_Len = parseInt(Parameter_1, 10);
  var Pallet_Wid = parseInt(Parameter_2, 10);
  var Case_Len = parseInt(Parameter_3, 10);
  var Case_Wid = parseInt(Parameter_4, 10);
  var Xpos = parseInt(Parameter_5, 10);
  var Ypos = parseInt(Parameter_6, 10);
  var Cases = parseInt(Parameter_7, 10);
  var Weight_distribution_H = Parameter_8;
  var Weight_distribution_V = Parameter_9;
  var label_priority = Parameter_10;
  var Pallets_Origin = Parameter_11;
  var index = Parameter_12;

  console.log(" frame_6 Pallet_Len " + Pallet_Len + " Pallet_Wid " + Pallet_Wid + " Case_Len " + Case_Len + " Case_Wid " + Case_Wid + " Xpos " + Xpos + " Ypos " + Ypos + "Cases" + Cases + " Weight_distribution_H " + Weight_distribution_H + " Weight_distribution_V" + Weight_distribution_V + "Pallets_Origin" + Pallets_Origin);
  //obj Variables
  var Pallet_Region_X_Pos;
  var Pallet_Region_Y_Pos;
  var No_Cases_in_row;
  var No_Cases_in_col;
  var Vertical_Space;
  var Horizontal_Space;
  var orientation_Based;
  var Total_no_cases;
  var Case_length;
  var Case_Width;
  var Position_orientation_Based;
  var Max_No_Cases;

  //local Variables
  var Total_outside_cases = 0;
  var Remaining_Cases = 0;

  var Quad1_Oriantation = "Length";
  var Quad2_Oriantation = "Length";
  var Quad3_Oriantation = "Width";
  var Quad4_Oriantation = "Width";
  var Center_Oriantation = "Length";

  var Quad1_Origin = Pallets_Origin[index][1];
  var Quad2_Origin;
  var Quad3_Origin;
  var Quad4_Origin;

  var Centred_Origin = "Top-Left-V2";
  var Inner_Quad_Capacity;

  var No_Cases_in_Row1 = 0;
  var No_Cases_in_Row3 = 0;

  var No_Cases_in_col1 = 0;
  var No_Cases_in_col3 = 0;

  var Quad_Capacity_1 = 0;
  var Quad_Capacity_2 = 0;
  var Quad_Capacity_3 = 0;
  var Quad_Capacity_4 = 0;
  var Centred_Cases = 0;

  var PW_1 = 0;
  var PW_3 = 0;

  var PL_1 = 0;
  var PL_3 = 0;

  var Xpos1 = 0;
  var Xpos2 = 0;
  var Xpos3 = 0;
  var Xpos4 = 0;
  var Xpos5 = 0;

  var Ypos1 = 0;
  var Ypos2 = 0;
  var Ypos3 = 0;
  var Ypos4 = 0;
  var Ypos5 = 0;

  PW_1 = Pallet_Wid;
  PL_1 = Pallet_Len;

  //Outside quad 1
  No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
  No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
  Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

  Xpos1 = Xpos;
  Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

  Ypos1 = Ypos;
  Ypos5 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);

  // Calculate Positions basedon origins
  if (Weight_distribution_H || Weight_distribution_V) {

    console.log(" Quad1_Origin ==== > : ", Quad1_Origin);

    if (Quad1_Origin === "Top-Left-V2") {

      console.log(" Quad1_Origin inside(Top-Left-V2) ==== > : ", Quad1_Origin);

      if (((No_Cases_in_col1[1] * 2) + (0.1)) >= Case_Wid) {
        PW_3 = ((No_Cases_in_col1[1] * 2) + (0.1));
        PL_3 = Pallet_Len / 2;

        //Outside quad 2
        No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
        No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);

        Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];
        Quad_Capacity_4 = Quad_Capacity_3;
        if (Pallets_Origin[index][1] == "Top-Left-V2") {
          Quad2_Origin = "Bottom-Right-V2";
        }

        Quad3_Origin = "Bottom-Left";
        Quad4_Origin = "Top-Right";

        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Xpos3 = Xpos;
        Xpos4 = Xpos + (Pallet_Wid - Case_Wid);

        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
        Ypos3 = Ypos + (Pallet_Len - Case_Len);
        Ypos4 = Ypos;
      }
      else {
        if (Pallets_Origin[index][1] == "Top-Left-V2") {
          Quad2_Origin = "Bottom-Right-V2";
        }

        //Quad2_Origin = "Bottom-Right-V2";

        Xpos2 = Xpos + (Pallet_Wid - Case_Len);
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
      }

    }
    else if (Quad1_Origin === "Top-Right-V2") {
      console.log(" Quad1_Origin inside(Top-Right-V2) ==== > : ", Quad1_Origin);
      if (((No_Cases_in_col1[1] * 2) + (0.1)) >= Case_Wid) {

        PW_3 = ((No_Cases_in_col1[1] * 2) + (0.1));
        PL_3 = Pallet_Len / 2;

        //Outside quad 2
        No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
        No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);

        Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];
        Quad_Capacity_4 = Quad_Capacity_3;

        Xpos1 = Xpos + Pallet_Wid - Case_Len;
        Xpos2 = Xpos;
        Xpos3 = Xpos + Pallet_Wid - Case_Wid;
        Xpos4 = Xpos;

        Ypos1 = Ypos;
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
        Ypos3 = Ypos + (Pallet_Len - Case_Len);
        Ypos4 = Ypos1;

        console.log("Ypos2: ", Ypos2, " Pallet_Len :", Pallet_Len, " Case_Wid :", Case_Wid, " (Pallet_Len - Case_Wid) :"), (Pallet_Len - Case_Wid);

        if (Pallets_Origin[index][1] == "Top-Right-V2") {
          Quad2_Origin = "Bottom-Left-V2";
        }
        Quad3_Origin = "Bottom-Right";
        Quad4_Origin = "Top-Left";
      }
      else {

        if (Pallets_Origin[index][1] == "Top-Right-V2") {
          Quad2_Origin = "Bottom-Left-V2";
        }
        else if (Pallets_Origin[index][1] == "TR-B-V2") {
          Quad2_Origin = "BL-T-V2";
        }

        Xpos1 = Xpos + (Pallet_Wid - Case_Len);
        Xpos2 = Xpos;

        Ypos1 = Ypos;
        Ypos2 = Ypos + (Pallet_Len - Case_Wid);
        console.log("Ypos2: ", Ypos2, " Pallet_Len :", Pallet_Len, " Case_Wid :", Case_Wid, " (Pallet_Len - Case_Wid) :"), (Pallet_Len - Case_Wid);

        console.log(" Top-Right-V2 in else : ", Xpos1);
      }
    }
  }
  else {

    Quad1_Origin = Pallets_Origin[index][1];

    if (((No_Cases_in_col1[1] * 2) + (0.1)) >= Case_Wid) {
      PW_3 = ((No_Cases_in_col1[1] * 2) + (0.1));
      PL_3 = Pallet_Len;

      //quad 3 & 4
      No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
      No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);

      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      // Pal_1
      if ((Quad1_Origin == "Top-Left-V2") || (Quad1_Origin == "TL-B-V2")) {
        Xpos1 = Xpos;
        Ypos1 = Ypos;

        Quad3_Origin = "Top-Right"
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos3 = Ypos;
      }
      else if ((Quad1_Origin == "Top-Right-V2") || (Quad1_Origin == "TR-B-V2")) {
        Xpos1 = Xpos + (Pallet_Wid - Case_Len);
        Ypos1 = Ypos;

        Quad3_Origin = "Top-Left"
        Xpos3 = Xpos;
        Ypos3 = Ypos;
      }
      else if ((Quad1_Origin == "Bottom-Left-V2") || (Quad1_Origin == "BL-T-V2")) {
        Xpos1 = Xpos;
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);

        Quad3_Origin = "Top-Right"
        Xpos3 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos3 = Ypos;
      }
      else if ((Quad1_Origin == "Bottom-Right-V2") || (Quad1_Origin == "BR-T-V2")) {
        Xpos1 = Xpos + (Pallet_Wid - Case_Len);
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);

        Quad3_Origin = "Top-Left"
        Xpos3 = Xpos;
        Ypos3 = Ypos;
      }

    }
    else {
      if ((Quad1_Origin == "Top-Left-V2") || (Quad1_Origin == "TL-B-V2")) {
        Xpos1 = Xpos;
        Ypos1 = Ypos;
      }
      else if ((Quad1_Origin == "Top-Right-V2") || (Quad1_Origin == "TR-B-V2")) {
        Xpos1 = Xpos + (Pallet_Wid - Case_Len);
        Ypos1 = Ypos;
      }
      else if ((Quad1_Origin == "Bottom-Left-V2") || (Quad1_Origin == "BL-T-V2")) {
        Xpos1 = Xpos;
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);
      }
      else if ((Quad1_Origin == "Bottom-Right-V2") || (Quad1_Origin == "BR-T-V2")) {
        Xpos1 = Xpos + (Pallet_Wid - Case_Len);
        Ypos1 = Ypos + (Pallet_Len - Case_Wid);
      }
    }

  }

  Total_outside_cases = Quad_Capacity_1 + Quad_Capacity_3 + Quad_Capacity_4;

  console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
  console.log(" Quad_Capacity_3 >> " + Quad_Capacity_2);
  console.log(" Quad_Capacity_4 >> " + Quad_Capacity_3);
  console.log(" Cases >> " + Cases);
  console.log(" Total_outside_cases >> " + Total_outside_cases);

  // Cases placement 
  if (Weight_distribution_H || Weight_distribution_V) {
    if (Cases > Total_outside_cases) {
      Quad_Capacity_1 = Quad_Capacity_1 / 2;
      Quad_Capacity_2 = Quad_Capacity_1
    }
    else {
      if (Cases > (Quad_Capacity_3 + Quad_Capacity_4)) {

        console.log(" Cases > (Quad_Capacity_3 + Quad_Capacity_4) ");
        var Remaining_Cases = Cases - (Quad_Capacity_3 + Quad_Capacity_4);
        var Centred_Cases = 0;

        if (Remaining_Cases % 2 == 0) {
          console.log(" Remaining_Cases%2 == 0 ");
          Centred_Cases = 0;
          Quad_Capacity_1 = Remaining_Cases / 2;
          Quad_Capacity_2 = Remaining_Cases / 2;
        }
        else {
          Centred_Cases = 1;
          console.log(" Remaining_Cases%2 != 0 ");

          if (Quad1_Origin === "Top-Left-V2" || Quad1_Origin === "Top-Right-V2") {
            console.log(" Quad1_Origin === Top-Left-v2 || Quad1_Origin === Top-Right-v2 ");
            if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_1 = (Remaining_Cases - 1) / 2;
              Quad_Capacity_2 = (Remaining_Cases - 1) / 2;
              console.log(" Quad_Capacity_1 " + Quad_Capacity_1);
            }
            else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_1 = (Remaining_Cases - 1) / 2;
              Quad_Capacity_2 = (Remaining_Cases - 1) / 2;

              console.log(" Quad_Capacity_1 " + Quad_Capacity_1);

              var Possible_Cases = (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] + No_Cases_in_col1[0] / 2 - 1;
              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_1) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_1 = (Remaining_Cases - 1) / 2;
              Quad_Capacity_2 = (Remaining_Cases - 1) / 2;

              console.log(" Quad_Capacity_1 " + Quad_Capacity_1);

              var Possible_Cases =
                (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] +
                (No_Cases_in_col1[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_1) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col1[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_1 = (Remaining_Cases - 1) / 2;
              Quad_Capacity_2 = (Remaining_Cases - 1) / 2;

              console.log(" Quad_Capacity_1 " + Quad_Capacity_1);

              var Possible_Cases =
                ((((No_Cases_in_Row1[0] - 1) / 2) * No_Cases_in_col1[0]) + (No_Cases_in_col1[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_1) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (((Pallet_Wid - (Case_Wid * 2)) >= Case_Len) && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;
            }
          }


        }

      }
      else {
        if (Cases % 2 == 0) {
          Centred_Cases = 0;
          Quad_Capacity_1 = 0;
          Quad_Capacity_2 = 0;
          Quad_Capacity_3 = Cases / 2;
          Quad_Capacity_4 = Cases / 2;
        }
        else {
          Centred_Cases = 1;
          Quad_Capacity_1 = 0;
          Quad_Capacity_2 = 0;
          Quad_Capacity_3 = (Cases - 1) / 2;
          Quad_Capacity_4 = (Cases - 1) / 2;
        }
      }
    }
  }
  else {
    var Remaining_Cases = Cases;
    if (Remaining_Cases > Quad_Capacity_1) {
      Remaining_Cases = Remaining_Cases - Quad_Capacity_1;
    }
    else {
      Quad_Capacity_1 = Remaining_Cases;
      Quad_Capacity_3 = 0;
    }

    if (Remaining_Cases > Quad_Capacity_3) {
      Remaining_Cases = Remaining_Cases - Quad_Capacity_3;
    }
    else {
      Quad_Capacity_3 = Remaining_Cases;
    }

  }


  Pallet_Region_X_Pos = [
    Xpos1,
    Xpos2,
    Xpos3,
    Xpos4,
    Xpos5
  ];

  Pallet_Region_Y_Pos = [
    Ypos1,
    Ypos2,
    Ypos3,
    Ypos4,
    Ypos5
  ];

  No_Cases_in_row = [
    No_Cases_in_Row1[0],
    No_Cases_in_Row1[0],
    No_Cases_in_Row3[0],
    No_Cases_in_Row3[0],
    1
  ];

  No_Cases_in_col = [
    No_Cases_in_col1[0],
    No_Cases_in_col1[0],
    No_Cases_in_col3[0],
    No_Cases_in_col3[0],
    1
  ];

  orientation_Based = [
    Quad1_Oriantation,
    Quad2_Oriantation,
    Quad3_Oriantation,
    Quad4_Oriantation,
    Center_Oriantation
  ];

  Total_no_cases = [
    Quad_Capacity_1,
    Quad_Capacity_2,
    Quad_Capacity_3,
    Quad_Capacity_4,
    Centred_Cases
  ];

  Case_length = [Case_Len];
  Case_Width = [Case_Wid];

  Position_orientation_Based = [
    Quad1_Origin,
    Quad2_Origin,
    Quad3_Origin,
    Quad4_Origin,
    Centred_Origin,
  ];

  Max_No_Cases = [
    Quad_Capacity_1,
    Quad_Capacity_2,
    Quad_Capacity_3,
    Quad_Capacity_4,
    Centred_Cases
  ];


  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame6 data:..... ", Data)

  return Data;
};

export const Frame_7 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var Quad1_Oriantation = "Width";
    var Quad5_Oriantation = "Length";
    var Quad6_Oriantation = "Length";

    var Quad1_Origin = Pallet_Origin[index][1];
    var Quad5_Origin;
    var Quad6_Origin;

    var PW_1 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PL_1 = Case_Len;

    PW_5 = Pallet_Wid;
    PL_5 = Pallet_Len - Case_Len;

    if (Weight_distribution_V) {
      Xpos1 = Xpos;
      Ypos1 = Ypos + (Pallet_Len - Case_Len);

      Xpos5 = Xpos;
      Ypos5 = Ypos;

      Xpos6 = (Xpos + Pallet_Wid) - Case_Len;
      Ypos6 = (Ypos + Pallet_Len - Case_Len) - Case_Wid;

      if (Pallet_Origin[index][1] == "Top-Left") {
        Xpos1 = Xpos;
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "Top-Left";
      }
      if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        Ypos1 = Ypos + (Pallet_Len - Case_Len);
        Quad1_Origin = "Top-Right";
      }


      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos5 = Xpos;
        Quad5_Origin = "TL-B-V2";
        Quad6_Origin = "BR-T-V2";
        Xpos6 = Xpos + (Pallet_Wid - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Quad5_Origin = "TR-B-V2";
        Quad6_Origin = "BL-T-V2";
        Xpos6 = Xpos;
      }

      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        console.log("28643");
        Xpos5 = Xpos;
        Quad5_Origin = "Top-Left-V2";
        Quad6_Origin = "Bottom-Right-V2";
        Xpos6 = Xpos + (Pallet_Wid - Case_Len);

      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        console.log("28652");
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Quad5_Origin = "Top-Right-V2";
        Quad6_Origin = "Bottom-Left-V2";
        Xpos6 = Xpos;
      }

      Ypos7 = Ypos + (Pallet_Len / 2) - Case_Wid;
      console.log(" 12Ypos7 " + Ypos7);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    }
    else {
      Xpos1 = Xpos;
      Ypos1 = Ypos + (Pallet_Len - Case_Len);

      if (Pallet_Origin[index][1] == "Bottom-Left") {
        console.log(" 28671 ");
        Quad1_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        console.log(" 28676 ");
        Quad1_Origin = "Bottom-Right";
      }

      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos5 = Xpos;
        Ypos5 = Ypos;
        Quad5_Origin = "Top-Left-V2";
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = Ypos;
        Quad5_Origin = "Top-Right-V2";
      }

      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        console.log(" 28695 ");
        Xpos5 = Xpos;
        Ypos5 = Ypos;
        Quad5_Origin = "Top-Left-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = Ypos;
        Quad5_Origin = "Top-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right-V2") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Wid;
        Quad5_Origin = "Bottom-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left-V2") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Wid;
        Quad5_Origin = "Bottom-Left-V2";
      }
      else if (Pallet_Origin[index][2] == "BL-T-V2") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Wid;
        Quad5_Origin = "BL-T-V2";
      }
      else if (Pallet_Origin[index][2] == "BR-T-V2") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Wid;
        Quad5_Origin = "BR-T-V2";
      }
    }
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    Total_outside_cases = Quad_Capacity_1;
    Total_inside_cases = Cases - Total_outside_cases;

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
    var V2_Capacity =
      No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
      No_Cases_in_col_Var2(PW_5, Case_Len)[0];

    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log(" rule3ed3");
      Quad5_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Right-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      console.log(" PL_51233 " + PL_5);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    }
    else {
      //Outside quad 5
      console.log(" 1234 ");
      Quad5_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[2] == "TL-B-V2") {
        Quad6_Origin = "BR-T-V2";
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Quad6_Origin = "BL-T-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        Quad6_Origin = "Bottom-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        Quad6_Origin = "Bottom-Left-V2";
      }
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Inner_Quad_Capacity = V2_Capacity;
    }


    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);
    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);
    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);
    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_V);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 5381 2.1 Cases > Total_outside_cases ");
        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {

          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          var Quad_Capacity_5 = Inner_Quad_Capacity / 2;
          var Quad_Capacity_6 = Inner_Quad_Capacity / 2;

          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;
          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;
          Pallet_Region_X_Pos = [Xpos1, Xpos5, Xpos6];
          Pallet_Region_Y_Pos = [Ypos1, Ypos5, Ypos6];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
          ];

          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
          ];

          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];
        }
        else {
          console.log(" 5785 Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" 5795 Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5455 Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              if ((Pallet_Origin[2] == "TL-B-V2") || (Pallet_Origin[2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 -
                  1;
                //console.log(" ''Pallet_Origin[1]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[2] == "Top-Left-V2") || (Pallet_Origin[2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5821 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5832 Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5837 Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "Top-Left-V2") || (Pallet_Origin[2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] + (No_Cases_in_col5[0] - 1) / 2;
                //console.log( " :::::Pallet_Origin[1]==Top-Left    Even odd loop  possible cases " );
              }
              else if ((Pallet_Origin[2] == "TL-B-V2") || (Pallet_Origin[2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] + (No_Cases_in_Row5[0]);
              }
              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
            else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" 23598 Odd Even Loop ");

              var Possible_Cases = No_Cases_in_col5[0] / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5862 Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5869 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                console.log("in loop");
                Centred_Cases = 0;
              } else {
                Centred_Cases = 1;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;//+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;//- No_Cases_in_Row5[1];

          Ypos7 = (Ypos + ((Pallet_Len - Case_Len) / 2) - (Case_Wid / 2));
          console.log(" 31470 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2) - (Case_Len / 2);

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
          console.log(" Quad_Capacity_1 " + Quad_Capacity_1 + " Quad_Capacity_5 " + Quad_Capacity_5 + " Quad_Capacity_6 " + Quad_Capacity_6 + " Centred_Cases " + Centred_Cases);

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1;//+ Quad_Capacity_3;
        //var Centred_Cases = 1;
        console.log(" 5629 Cases_In_Q1_Q3 " + Cases_In_Q1_Q3)

        //var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q1_Q3) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases;//- Cases_In_Q1_Q3;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        if (Cases < Cases_In_Q1_Q3) {
          console.log(" 5660 Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;
          Cases_In_Q1_Q3 = Remaining_Cases / 2;

          console.log(" 5663 Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" 5682 Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          //console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          //var Cases_In_Q1_Q3 =( Cases_In_Q1_Q3/2)-1;
          console.log(
            " 5703 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          //Outside quad
          Xpos5 = Xpos5;
          Ypos5 = Ypos5 + Case_Len;

          //Outside quad 3
          Xpos6 = Xpos6;
          Ypos6 = Ypos6;

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          // var Cases_In_Q1_Q3 = Cases/2;
          // var Centred_Cases = 1;
          console.log(
            " 5828 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          //Outside quad 5
          var Xpos5 = Xpos5;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos;//+ (Pallet_Len / 2 - Case_Len / 2);

          var Xpos6 = Xpos6;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos6 = Ypos + Pallet_Len - Case_Wid;

          Ypos7 = Ypos + (Pallet_Len / 2) - (Case_Wid / 2);
          console.log(" 12 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2) - (Case_Len / 2);

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        }
      }
    }
    // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_V);
      //loop for cases max than outside quads
      console.log(" Total_outside_cases " + Total_outside_cases);
      if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Cases_In_Q1_Q3 = Cases;
        console.log(" 2887764 Cases_In_Q1_Q3 " + Cases_In_Q1_Q3);
        //var Cases_In_Q1_Q3 = Remaining_Cases



        //var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " 11362 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;//+ space_1;
        Ypos1 = Ypos1;




        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],


        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],

        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],


        ];

        orientation_Based = [Quad1_Oriantation];

        Total_no_cases = [
          Quad_Capacity_1,
          // No_Cases_in_Row1[0] * No_Cases_in_col1[0],


        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,


        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,


        ];

      }
      else if (Cases > Total_outside_cases) {
        console.log("Weight Diasable 2.1 Cases > Total_outside_cases ");



        Cases_In_Q1_Q3 = Quad_Capacity_1
        console.log("  Cases_In_Q1_Q3 " + Cases_In_Q1_Q3);
        Quad_Capacity_5 = Total_inside_cases;
        console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
        //var Centred_Cases = 0;

        //if (Quad_Capacity_5) {
        console.log(" 2.2 (Centred_Cases == 0) ");

        Xpos1 = Xpos1 + No_Cases_in_col1[1];
        //Xpos5 = Xpos5 ;//- No_Cases_in_col5[1];  //HERE

        Ypos1 = Ypos1;
        //Ypos5 = Ypos5 ;//+ No_Cases_in_Row5[1];

        Pallet_Region_X_Pos = [Xpos1, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row5[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col5[1],
        ];



        orientation_Based = [
          Quad1_Oriantation,
          Quad5_Oriantation,
        ];
        console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation + Quad5_Oriantation);

        Total_no_cases = [
          Quad_Capacity_1,
          Quad_Capacity_5,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad5_Origin,
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Quad_Capacity_5,
        ];
        //}
      }

    }

  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame7 data:..... ", Data)

  return Data;
};

export const Frame_8 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  //obj Variables
  var Pallet_Region_X_Pos;
  var Pallet_Region_Y_Pos;
  var No_Cases_in_row;
  var No_Cases_in_col;
  var Vertical_Space;
  var Horizontal_Space;
  var orientation_Based;
  var Total_no_cases;
  var Case_length;
  var Case_Width;
  var Position_orientation_Based;
  var Max_No_Cases;

  //local Variables
  var Total_outside_cases = 0;
  var Total_inside_cases = 0;
  var Cases_in_Q1 = 0;
  var Cases_in_Q2 = 0;
  var Cases_in_Q3 = 0;
  var Cases_in_Q4 = 0;
  var Cases_in_Q5 = 0;

  var Centred_Oriantation = "Width";
  var Centred_Origin = "Top-Left";
  var Inner_Quad_Capacity;

  var No_Cases_in_Row1;
  var No_Cases_in_Row2;
  var No_Cases_in_Row3;
  var No_Cases_in_Row4;

  var No_Cases_in_col1;
  var No_Cases_in_col2;
  var No_Cases_in_col3;
  var No_Cases_in_col4;

  var Quad1_Capacity;
  var Quad2_Capacity;
  var Quad3_Capacity;
  var Quad4_Capacity;

  var Quad1_Oriantation = "Length";
  var Quad2_Oriantation = "Width";
  var Quad3_Oriantation = "Width";
  var Quad4_Oriantation = "Width";

  var Quad1_Origin;
  var Quad2_Origin;
  var Quad3_Origin;
  var Quad4_Origin;
  var Quad5_Origin;

  var PW_1 = 0;
  var PW_2 = 0;
  var PW_3 = 0;
  var PW_4 = 0;

  var PL_1 = 0;
  var PL_2 = 0;
  var PL_3 = 0;
  var PL_4 = 0;

  var Xpos1 = 0;
  var Xpos2 = 0;
  var Xpos3 = 0;
  var Xpos4 = 0;
  var Xpos5 = 0;
  var Xpos6 = 0;

  var Ypos1 = 0;
  var Ypos2 = 0;
  var Ypos3 = 0;
  var Ypos4 = 0;
  var Ypos5 = 0;
  var Ypos6 = 0;

  PL_1 = (Pallet_Len - (Case_Len * 2));
  PW_1 = Case_Len;

  PL_2 = Case_Len;
  PW_2 = Pallet_Wid;

  PL_3 = Case_Len;
  PW_3 = Pallet_Wid;

  PL_4 = PL_1;
  PW_4 = Pallet_Wid - Case_Len;

  if (Weight_distribution_H) {
    Ypos1 = Ypos + Case_Len;
    Ypos2 = Ypos;
    Ypos3 = Ypos + (Pallet_Len - Case_Len);
    Ypos4 = Ypos + Case_Len;
    Ypos5 = Ypos + (Pallet_Len - (Case_Len * 2));

    if (Pallet_Origin[index][1] == "Top-Left-V2") {
      Xpos1 = Xpos;
      Quad1_Origin = "Top-Left-V2";
    }
    else if (Pallet_Origin[index][1] == "Top-Right-V2") {
      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Quad1_Origin = "Top-Right-V2";
    }

    if (Pallet_Origin[index][2] == "Top-Left") {
      Quad2_Origin = "Top-Left";
      Xpos2 = Xpos;
    }
    else if (Pallet_Origin[index][2] == "Top-Right") {
      Quad2_Origin = "Top-Right";
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
    }
    if (Pallet_Origin[index][3] == "Top-Left") {
      Xpos3 = Xpos;
      Quad3_Origin = "Top-Left";
    }
    else if (Pallet_Origin[index][3] == "Top-Right") {
      Xpos3 = Xpos + (Pallet_Wid - Case_Wid);
      Quad3_Origin = "Top-Right";
    }

    if (Pallet_Origin[index][1] == "Top-Left-V2") {
      Xpos6 = (Xpos + (((Pallet_Wid - Case_Len) / 2) - (Case_Wid / 2))) + Case_Len;
      Ypos6 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

      Xpos4 = Xpos + (Pallet_Wid - Case_Wid);
      Quad4_Origin = "Top-Right";
      Quad5_Origin = "Bottom-Left";
      Xpos5 = Xpos + Case_Len;

    }
    else {
      Xpos6 = Xpos + (((Pallet_Wid - Case_Len) / 2) - (Case_Wid / 2));
      Ypos6 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

      Xpos4 = Xpos;
      Quad4_Origin = "Top-Left";

      Quad5_Origin = "Bottom-Right";
      Xpos5 = Xpos + (Pallet_Wid - (Case_Len + Case_Wid));

    }

  }
  else {

    Ypos2 = Ypos;
    Ypos3 = Ypos + (Pallet_Len - Case_Len);
    Ypos5 = Ypos + (Pallet_Len - (Case_Len * 2));

    if (Pallet_Origin[index][1] == "Top-Left-V2") {
      Xpos1 = Xpos;
      Ypos1 = Ypos + Case_Len;
      Quad1_Origin = "Top-Left-V2";
    }
    else if (Pallet_Origin[index][1] == "Top-Right-V2") {
      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Ypos1 = Ypos + Case_Len;
      Quad1_Origin = "Top-Right-V2";
    }
    else if (Pallet_Origin[index][1] == "Bottom-Right-V2") {
      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Ypos1 = Ypos + (Pallet_Len - (Case_Len + Case_Wid));
      Quad1_Origin = "Bottom-Right-V2";
    }
    else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
      Xpos1 = Xpos;
      Ypos1 = Ypos + (Pallet_Len - (Case_Len + Case_Wid));
      Quad1_Origin = "Bottom-Left-V2";
    }

    if (Pallet_Origin[index][2] == "Top-Left") {
      Quad2_Origin = "Top-Left";
      Xpos2 = Xpos;
    }
    else if (Pallet_Origin[index][2] == "Top-Right") {
      Quad2_Origin = "Top-Right";
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
    }
    if (Pallet_Origin[index][3] == "Top-Left") {
      Xpos3 = Xpos;
      Quad3_Origin = "Top-Left";
    }
    else if (Pallet_Origin[index][3] == "Top-Right") {
      Xpos3 = Xpos + (Pallet_Wid - Case_Wid);
      Quad3_Origin = "Top-Right";
    }

    if (Pallet_Origin[index][1] == "Top-Left-V2") {
      Xpos4 = Xpos + Case_Len;
      Ypos4 = Ypos + Case_Len;
      Quad4_Origin = "Top-Left";
    }
    else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
      Xpos4 = Xpos + (Pallet_Wid - Case_Wid);
      Ypos4 = Ypos + Case_Len;
      Quad4_Origin = "Top-Right";
    }
    else if (Pallet_Origin[index][1] == "Top-Right-V2") {
      Xpos4 = Xpos;
      Ypos4 = Ypos + (Pallet_Len - (Case_Len * 2));
      Quad4_Origin = "Bottom-Left";
    }
    else if (Pallet_Origin[index][1] == "Bottom-Right-V2") {
      Xpos4 = Xpos;
      Ypos4 = Ypos + Case_Len;
      Quad4_Origin = "Top-Left";
    }




  }


  //Outside quad 1
  No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
  No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
  Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

  No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
  No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
  Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

  No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
  No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
  Quad3_Capacity = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

  No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
  No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
  Quad4_Capacity = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

  Total_outside_cases = Quad1_Capacity + Quad2_Capacity + Quad3_Capacity;
  Total_inside_cases = Cases - Total_outside_cases;
  if (Total_inside_cases < 0) {
    Total_inside_cases = 0;
  }
  if (Quad4_Capacity <= Total_inside_cases) {
    //Outside quad 5
    console.log(" Quad4_Capacity<= Total_inside_cases");
    if (Weight_distribution_H) {
      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad4_Origin = "Top-Right";

      }
      else if (Pallet_Origin[index][1] == "Top-Right-V2") {
        Quad4_Origin = "Top-Left";

      }

    }
    else {
      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad4_Origin = "Top-Left";
        console.log(" Top left Q4 " + Quad4_Origin);
        console.log("  Pallet_Origin[index][1] " + Pallet_Origin[index][1]);
      }
      else if (Pallet_Origin[index][1] == "Top-Right-V2") {
        Quad4_Origin = "Bottom-Left";

      }
      else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
        Quad4_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Right-V2") {
        Quad4_Origin = "Top-Left";
      }
    }



    Centred_Oriantation = "Width";
    Centred_Origin = "Top-Left";
    No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
    No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
    Cases_in_Q4 = Quad4_Capacity;
    Inner_Quad_Capacity = Quad4_Capacity;
  }
  else {
    Quad4_Origin = Pallet_Origin[index][4];
    if (Weight_distribution_H) {
      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad4_Origin = "Top-Right";
        Quad5_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][1] == "Top-Right-V2") {
        Quad4_Origin = "Top-Left";
        Quad5_Origin = "Bottom-Right";
      }

    }
    else {
      if (Pallet_Origin[index][1] == "Top-Left-V2") {
        Quad4_Origin = "Top-Left";
        console.log(" Top left Q4 " + Quad4_Origin);
        console.log("  Pallet_Origin[index][1] " + Pallet_Origin[index][1]);
      }
      else if (Pallet_Origin[index][1] == "Top-Right-V2") {
        Quad4_Origin = "Bottom-Left";

      }
      else if (Pallet_Origin[index][1] == "Bottom-Left-V2") {
        Quad4_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][1] == "Bottom-Right-V2") {
        Quad4_Origin = "Top-Left";
      }
    }
    Centred_Oriantation = "Width";
    Centred_Origin = "Top-Left";

    Cases_in_Q4 = Total_inside_cases;
    Cases_in_Q5 = Total_inside_cases;

    Inner_Quad_Capacity = Quad4_Capacity;
  }

  console.log(" Centred_Origin >> " + Centred_Origin);
  console.log(" Centred_Oriantation >> " + Centred_Oriantation);
  console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

  if (Weight_distribution_H) {
    // loop for weight distribution is enabled
    console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

    //loop for cases max than outside quads
    if (Cases > Total_outside_cases) {
      console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
      console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
      Cases_in_Q1 = Quad1_Capacity;
      Cases_in_Q2 = Quad2_Capacity;
      Cases_in_Q3 = Quad3_Capacity;

      if (Total_inside_cases >= Inner_Quad_Capacity) {
        Cases_in_Q4 = Inner_Quad_Capacity;
        var space = (PL_1 - (Cases_in_Q1 * Case_Wid)) / 2;

        Xpos1 = Xpos1;
        Xpos2 = Xpos2;
        Xpos3 = Xpos3;
        Xpos4 = Xpos4;

        Ypos1 = Ypos1 + space;
        Ypos2 = Ypos2;
        Ypos3 = Ypos3;
        Ypos4 = Ypos4;
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation,
          Quad3_Oriantation,
          Quad4_Oriantation,
        ];
        Total_no_cases = [
          Quad1_Capacity,
          Quad2_Capacity,
          Quad3_Capacity,
          Quad4_Capacity,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin,
          Quad3_Origin,
          Quad4_Origin,

        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
          Cases_in_Q4,
        ];
      }
      else {
        console.log(" Total_inside_cases ;;;;Remaining cases < Inner_Quad_Capacity ");

        var Centred_Cases = 0;

        if (Total_inside_cases % 2 == 0) {
          console.log(" Total_inside_cases%2 == 0 ");
          Centred_Cases = 0;
          Cases_in_Q4 = Total_inside_cases / 2;
          Cases_in_Q5 = Total_inside_cases / 2;
        }
        else {
          Centred_Cases = 1;
          console.log(" Total_inside_cases%2 != 0 ");

          if (No_Cases_in_Row4[0] % 2 != 0 && No_Cases_in_col4[0] % 2 != 0) {
            console.log(" Both Odd Loop ");
            Cases_in_Q4 = (Total_inside_cases - 1) / 2;
            Cases_in_Q5 = (Total_inside_cases - 1) / 2;
            console.log(" Cases_in_Q4 " + Cases_in_Q4);
          }
          else if (No_Cases_in_Row4[0] % 2 == 0 && No_Cases_in_col4[0] % 2 == 0) {
            console.log(" Both Even Loop ");

            Cases_in_Q4 = (Total_inside_cases - 1) / 2;
            Cases_in_Q5 = (Total_inside_cases - 1) / 2;

            console.log(" Cases_in_Q4 " + Cases_in_Q4);


            var Possible_Cases =
              (No_Cases_in_Row4[0] / 2 - 1) * No_Cases_in_col4[0] +
              No_Cases_in_col4[0] / 2 -
              1;
            console.log(" // Pallet_Origin[1]==Top-Left     Possible_Cases ");

            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q4) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row4[0] % 2 == 0 && No_Cases_in_col4[0] % 2 != 0) {
            console.log(" Even  Odd  Loop ");

            Cases_in_Q4 = (Total_inside_cases - 1) / 2;
            Cases_in_Q5 = (Total_inside_cases - 1) / 2;

            console.log(" Cases_in_Q4 " + Cases_in_Q4);

            var Possible_Cases =
              (No_Cases_in_Row4[0] / 2 - 1) * No_Cases_in_col4[0] + (No_Cases_in_col4[0] - 1) / 2;
            console.log(" ::::: Pallet_Origin[2]==Top-Left    Even odd loop  possible cases ");


            console.log(" No_Cases_in_col2[0] " + No_Cases_in_col2[0] + " No_Cases_in_Row2[0]" + No_Cases_in_Row2[0]);
            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q4) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row4[0] % 2 != 0 && No_Cases_in_col4[0] % 2 == 0) {
            console.log(" Odd Even Loop ");
            var Possible_Cases = No_Cases_in_col4[0] / 2 + 1;

            console.log(" Possible_Cases " + Possible_Cases);

            Cases_in_Q4 = (Total_inside_cases - 1) / 2;
            Cases_in_Q5 = (Total_inside_cases - 1) / 2;

            console.log(" Cases_in_Q4 " + Cases_in_Q4);

            var Possible_Cases =
              ((((No_Cases_in_col4[0] - 1) / 2) * No_Cases_in_Row4[0]) + (No_Cases_in_Row4[0] / 2) - 1);

            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q4) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }

          if (No_Cases_in_col4[0] > 0 && Centred_Cases == 1) {
            Centred_Cases = 1;
          } else {
            Centred_Cases = 0;

          }
        }
        var space = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;
        Xpos1 = Xpos1;
        Xpos2 = Xpos2;
        Xpos3 = Xpos3;
        Xpos4 = Xpos4;
        Xpos5 = Xpos5;
        Xpos6 = Xpos6;

        Ypos1 = Ypos1 + space;
        Ypos2 = Ypos2;
        Ypos3 = Ypos3;
        Ypos4 = Ypos4;
        Ypos5 = Ypos5;
        Ypos6 = Ypos6;
        Pallet_Region_X_Pos = [
          Xpos1,
          Xpos2,
          Xpos3,
          Xpos4,
          Xpos5,
          Xpos6,
        ];
        Pallet_Region_Y_Pos = [
          Ypos1,
          Ypos2,
          Ypos3,
          Ypos4,
          Ypos5,
          Ypos6,
        ];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation,
          Quad3_Oriantation,
          Quad4_Oriantation,
          Quad4_Oriantation,
          Centred_Oriantation,
        ];
        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          Centred_Cases,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin,
          Quad3_Origin,
          Quad4_Origin,
          Quad5_Origin,
          Centred_Origin,
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
          Cases_in_Q4,
          Cases_in_Q5,
          Centred_Cases,
        ];
      }
    }
    else if (Cases <= Total_outside_cases) {
      // loop for cases less than outside quads
      console.log(" 2.2 (Cases <= Total_outside_cases) ");
      var Centred_Cases = 0;

      var Cases_In_1 = Quad1_Capacity;
      var Cases_In_Q2_Q3 = Quad2_Capacity + Quad3_Capacity;

      var Remaining_Cases;

      if (Cases <= Cases_In_1) {
        console.log(" Cases < Cases_In_1 ");
        Remaining_Cases = Cases;
        console.log(" Cases " + Cases);
        console.log(" Remaining_Cases  " + Remaining_Cases);

        Centred_Cases = 0;
        Cases_in_Q1 = Remaining_Cases;

        console.log(" Remaining_Cases  " + Remaining_Cases);
        console.log(" Centred_Cases  " + Centred_Cases);
        console.log(" Cases_in_Q1  " + Cases_in_Q1);

      }
      else {
        Cases_in_Q1 = Quad1_Capacity;
        Remaining_Cases = Cases - Cases_in_Q1;
        console.log(" Cases >= Cases_In_1 Remaining_Cases " + Remaining_Cases);
        if (Remaining_Cases % 2 == 0) {
          Cases_in_Q2 = Remaining_Cases / 2;
          Cases_in_Q3 = Remaining_Cases / 2;
          console.log("HHH Cases_in_Q3  " + Cases_in_Q5);
        }
        else {
          Centred_Cases = 1;
          Cases_in_Q2 = (Remaining_Cases - 1) / 2;
          Cases_in_Q3 = (Remaining_Cases - 1) / 2;
          console.log(" JJJCentred_Origin " + Centred_Origin);
        }
      }

      // loop for Centred_Cases == 0
      if (Centred_Cases == 0) {
        //Outside quad 1
        var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

        console.log(" entered in CC==0 loop of passing only x and y");
        console.log(" position orientation based " + Quad2_Origin);

        Xpos1 = Xpos1;
        Ypos1 = Ypos1 + space_1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        Xpos4 = Xpos4;
        Ypos4 = Ypos4;

        Xpos5 = Xpos5;
        Ypos5 = Ypos5;

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [
          Xpos1,
          Xpos2,
          Xpos3,
          Xpos4,
          Xpos5,
          Xpos6
        ];
        Pallet_Region_Y_Pos = [
          Ypos1,
          Ypos2,
          Ypos3,
          Ypos4,
          Ypos5,
          Ypos6
        ];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation,
          Quad3_Oriantation,
          Quad4_Oriantation,
          Quad4_Oriantation,
          Centred_Oriantation,
        ];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          Centred_Cases,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin,
          Quad3_Origin,
          Quad4_Origin,
          Quad5_Origin,
          Centred_Origin,
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
          Cases_in_Q4,
          Cases_in_Q5,
          Centred_Cases,
        ];
      } // loop for Centred_Cases != 0
      else {
        var space_1 = (PL_1 - Cases_in_Q1 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_in_Q5 " + Cases_in_Q5
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1 + space_1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4;

        Xpos5 = Xpos5;
        Ypos5 = Ypos5;

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [
          Xpos1,
          Xpos2,
          Xpos3,
          Xpos4,
          Xpos5,
          Xpos6
        ];
        Pallet_Region_Y_Pos = [
          Ypos1,
          Ypos2,
          Ypos3,
          Ypos4,
          Ypos5,
          Ypos6
        ];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad2_Oriantation,
          Quad3_Oriantation,
          Quad4_Oriantation,
          Quad4_Oriantation,
          Centred_Oriantation,
        ];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          Centred_Cases,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad2_Origin,
          Quad3_Origin,
          Quad4_Origin,
          Quad5_Origin,
          Centred_Origin,
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
          Cases_in_Q4,
          Cases_in_Q5,
          Centred_Cases,
        ];
      }
    }
  } // loop for weight distribution is disabled
  else {
    console.log(" UNweighted loop ");
    console.log(" Cases " + Cases + " Total_outside_cases " + Total_outside_cases);
    if (Cases <= Total_outside_cases) {
      console.log(" entered in Cases< Total_outside_cases ");
      console.log(" Q1 Capacity " + Quad1_Capacity + " Q2 Capacity " + Quad2_Capacity);
      if (Cases > Quad1_Capacity) {
        Cases_in_Q1 = Quad1_Capacity;
        Remaining_Cases = Cases - Cases_in_Q1;
        console.log(" RC after plcing cases in Q1 " + Remaining_Cases);
        if (Remaining_Cases <= Quad2_Capacity) {
          Cases_in_Q2 = Remaining_Cases;

          console.log(" Q2 cses " + Cases_in_Q2);
        }
        else {
          console.log(" Remaining cases ater placing q1 " + Remaining_Cases);
          Cases_in_Q2 = Quad2_Capacity;
          console.log(" cases in Q2 after placing Q1 " + Cases_in_Q2);
          Remaining_Cases = Remaining_Cases - Cases_in_Q2;
          Cases_in_Q3 = Remaining_Cases;
          console.log("remainin cases after placing Q2 and Q3 " + Remaining_Cases);
          console.log(" cases in Q3 after placing Q1 Q2 " + Cases_in_Q3);
        }

      }
      else {
        Remaining_Cases = Cases;
        Cases_in_Q1 = Remaining_Cases;
        console.log(" Cases>Quad1_Capacity so Cases_in_Q1 " + Cases_in_Q1);
      }
      Xpos1 = Xpos1;
      Ypos1 = Ypos1;

      //Outside quad
      Xpos2 = Xpos2;
      Ypos2 = Ypos2;

      //Outside quad 3
      Xpos3 = Xpos3;
      Ypos3 = Ypos3;

      Xpos4 = Xpos4;
      Ypos4 = Ypos4;

      Xpos5 = Xpos5;
      Ypos5 = Ypos5;

      Pallet_Region_X_Pos = [
        Xpos1,
        Xpos2,
        Xpos3,
        Xpos4,
        Xpos5,
        Xpos6
      ];
      Pallet_Region_Y_Pos = [
        Ypos1,
        Ypos2,
        Ypos3,
        Ypos4,
        Ypos5,
        Ypos6
      ];

      No_Cases_in_row = [
        No_Cases_in_Row1[0],
        No_Cases_in_Row2[0],
        No_Cases_in_Row3[0],
        No_Cases_in_Row4[0],
        No_Cases_in_Row4[0],
        1,
      ];
      No_Cases_in_col = [
        No_Cases_in_col1[0],
        No_Cases_in_col2[0],
        No_Cases_in_col3[0],
        No_Cases_in_col4[0],
        No_Cases_in_col4[0],
        1,
      ];

      Vertical_Space = [
        No_Cases_in_Row1[1],
        No_Cases_in_Row2[1],
        No_Cases_in_Row3[1],
        No_Cases_in_Row4[1],
        No_Cases_in_Row4[1],
        0,
      ];
      Horizontal_Space = [
        No_Cases_in_col1[1],
        No_Cases_in_col2[1],
        No_Cases_in_col3[1],
        No_Cases_in_col4[1],
        No_Cases_in_col4[1],
        0,
      ];

      orientation_Based = [
        Quad1_Oriantation,
        Quad2_Oriantation,
        Quad3_Oriantation,
        Quad4_Oriantation,
        Quad4_Oriantation,
        Centred_Oriantation,
      ];

      Total_no_cases = [
        No_Cases_in_Row1[0] * No_Cases_in_col1[0],
        No_Cases_in_Row2[0] * No_Cases_in_col2[0],
        No_Cases_in_Row3[0] * No_Cases_in_col3[0],
        No_Cases_in_Row4[0] * No_Cases_in_col4[0],
        No_Cases_in_Row4[0] * No_Cases_in_col4[0],
        Centred_Cases,
      ];

      Case_length = [Case_Len];
      Case_Width = [Case_Wid];

      Position_orientation_Based = [
        Quad1_Origin,
        Quad2_Origin,
        Quad3_Origin,
        Quad4_Origin,
        Quad5_Origin,
        Centred_Origin,
      ];
      Max_No_Cases = [
        Cases_in_Q1,
        Cases_in_Q2,
        Cases_in_Q3,
        Cases_in_Q4,
        Cases_in_Q4,
        Centred_Cases,
      ];
    }
    else {
      console.log(" Cases > Total_outside_cases ");
      Cases_in_Q1 = Quad1_Capacity;
      Cases_in_Q2 = Quad2_Capacity;
      Cases_in_Q3 = Quad3_Capacity;
      Remaining_Cases = (Cases - (Cases_in_Q1 + Cases_in_Q2 + Cases_in_Q3));
      console.log(" Remaining_Cases  ==== " + Remaining_Cases);
      if (Remaining_Cases <= Inner_Quad_Capacity) {
        Cases_in_Q4 = Remaining_Cases;
        console.log(" Remaining_Cases <=Inner_Quad_Capacity  ");
        console.log(" Remaining_Cases " + Remaining_Cases);
        console.log(" Cases_in_Q4  " + Cases_in_Q4);

      }
      else {
        Cases_in_Q4 = Inner_Quad_Capacity;
      }
      Xpos1 = Xpos1;
      Ypos1 = Ypos1;

      //Outside quad
      Xpos2 = Xpos2;
      Ypos2 = Ypos2;

      //Outside quad 3
      Xpos3 = Xpos3;
      Ypos3 = Ypos3;

      Xpos4 = Xpos4;
      Ypos4 = Ypos4;


      Pallet_Region_X_Pos = [
        Xpos1,
        Xpos2,
        Xpos3,
        Xpos4,
        Xpos6
      ];
      Pallet_Region_Y_Pos = [
        Ypos1,
        Ypos2,
        Ypos3,
        Ypos4,
        Ypos6
      ];

      No_Cases_in_row = [
        No_Cases_in_Row1[0],
        No_Cases_in_Row2[0],
        No_Cases_in_Row3[0],
        No_Cases_in_Row4[0],
        1,
      ];
      No_Cases_in_col = [
        No_Cases_in_col1[0],
        No_Cases_in_col2[0],
        No_Cases_in_col3[0],
        No_Cases_in_col4[0],
        1,
      ];

      Vertical_Space = [
        No_Cases_in_Row1[1],
        No_Cases_in_Row2[1],
        No_Cases_in_Row3[1],
        No_Cases_in_Row4[1],
        0,
      ];
      Horizontal_Space = [
        No_Cases_in_col1[1],
        No_Cases_in_col2[1],
        No_Cases_in_col3[1],
        No_Cases_in_col4[1],
        0,
      ];

      orientation_Based = [
        Quad1_Oriantation,
        Quad2_Oriantation,
        Quad3_Oriantation,
        Quad4_Oriantation,
        Centred_Oriantation,
      ];

      Total_no_cases = [
        No_Cases_in_Row1[0] * No_Cases_in_col1[0],
        No_Cases_in_Row2[0] * No_Cases_in_col2[0],
        No_Cases_in_Row3[0] * No_Cases_in_col3[0],
        No_Cases_in_Row4[0] * No_Cases_in_col4[0],
        Centred_Cases,
      ];

      Case_length = [Case_Len];
      Case_Width = [Case_Wid];

      Position_orientation_Based = [
        Quad1_Origin,
        Quad2_Origin,
        Quad3_Origin,
        Quad4_Origin,
        Centred_Origin,
      ];
      Max_No_Cases = [
        Cases_in_Q1,
        Cases_in_Q2,
        Cases_in_Q3,
        Cases_in_Q4,
        Centred_Cases,]
    }
  }


  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame8 data:..... ", Data)

  return Data;
};

export const Frame_9 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (
    true
  ) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var Quad1_Oriantation = "Width";
    var Quad5_Oriantation = "Width";
    var Quad6_Oriantation = "Width";

    var Quad1_Origin = Pallet_Origin[index][1];
    var Quad5_Origin;
    var Quad6_Origin;

    var PW_1 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;


    PW_1 = Pallet_Wid;
    PW_5 = Pallet_Wid;

    PL_1 = Case_Len;
    PL_5 = Pallet_Len - Case_Len;

    if (Weight_distribution_V) {
      console.log(" 29731");
      Xpos1 = Xpos;
      Ypos1 = Ypos;

      Xpos5 = Xpos;
      Ypos5 = Ypos + Case_Len;

      Xpos6 = (Xpos + Pallet_Wid) - Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Len);

      if (Pallet_Origin[index][1] == "Top-Left") {
        Xpos1 = Xpos;
        Ypos1 = Ypos;
        Quad1_Origin = "Top-Left";
      }
      if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        Ypos1 = Ypos;
        Quad1_Origin = "Top-Right";

      }

      if (Pallet_Origin[index][2] == "Top-Left") {
        console.log("28643");
        Xpos5 = Xpos;
        Quad5_Origin = "Top-Left";
        Quad6_Origin = "Bottom-Right";
        Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      }
      if (Pallet_Origin[index][2] == "Top-Right") {
        console.log("29764");
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Quad5_Origin = "Top-Right";
        Quad6_Origin = "Bottom-Left";
        Xpos6 = Xpos;

      }
      else if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos5 = Xpos;
        Quad5_Origin = "TL-to-B";
        Quad6_Origin = "BR-to-T";
        Xpos6 = Xpos + (Pallet_Wid - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Quad5_Origin = "TR-to-B";
        Quad6_Origin = "BL-to-T";
        Xpos6 = Xpos;
        //console.log(" Q2 TR to B and Q3 is Bl to T " + Quad2_Origin);
      }


      Ypos7 = Ypos + (Pallet_Len / 2);
      console.log(" 12Ypos7 " + Ypos7);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
    }
    else {
      Xpos1 = Xpos;
      Ypos1 = Ypos;

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        Quad1_Origin = "Top-Right";
      }

      else if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Case_Len);
        Quad5_Origin = "TL-to-B";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos5 = (Ypos + Case_Len);
        Quad5_Origin = "TR-to-B";
      }

      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Case_Len);
        Quad5_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos5 = (Ypos + Case_Len);
        Quad5_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Pallet_Len - Case_Len);
        Quad5_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        console.log("28702");
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Ypos5 = (Ypos + Pallet_Len - Case_Len);
        Quad5_Origin = "Bottom-Right";
      }
    }
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    Total_outside_cases = Quad_Capacity_1;
    Total_inside_cases = Cases - Total_outside_cases;

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
    var V2_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log(" rule3ed3");
      //Xpos5 = Xpos5;
      Quad5_Origin = Pallet_Origin[index][2];
      // = Xpos;
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Right-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    }
    else {
      //Outside quad 5
      console.log(" 1234 ");
      Quad5_Origin = Pallet_Origin[index][2];


      if (Pallet_Origin[index][2] == "TL-to-B") {
        Quad6_Origin = "BR-to-T";

      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Quad6_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Quad6_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        console.log(" 29747 ");

        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        //Ypos5 = Ypos;
        Quad5_Origin = "Top-Right";
        Quad6_Origin = "Bottom-Left";
        Xpos6 = Xpos;
      }
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V2_Capacity;
    }


    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);
    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);
    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);
    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution var 1 if " + Weight_distribution_V);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 5381 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" 31648 Total_inside_cases >= Quad_Capacity_5 ");

          var Quad_Capacity_5 = Inner_Quad_Capacity / 2;
          var Quad_Capacity_6 = Inner_Quad_Capacity / 2;

          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;//+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;

          Pallet_Region_X_Pos = [Xpos1, Xpos5, Xpos6];
          Pallet_Region_Y_Pos = [Ypos1, Ypos5, Ypos6];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
          ];

          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
          ];

          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,

          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];
        }
        else {
          console.log(" 5785 Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" 5795 Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5455 Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }

            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }


              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5821 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5832 Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5837 Quad_Capacity_5 " + Quad_Capacity_5);

              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
            else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" 30113 Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log("30118  Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5862 Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 - 1;

              console.log(" 5869 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          console.log(" 30685 ");
          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;//+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;//- No_Cases_in_Row5[1];

          Ypos7 = (Ypos5 + (PL_5 / 2) - Case_Wid / 2);
          console.log(" 12Ypos7 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1;//+ Quad_Capacity_3;
        //var Centred_Cases = 1;
        console.log(" 5629 Cases_In_Q1_Q3 " + Cases_In_Q1_Q3)

        //var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q1_Q3) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases;//- Cases_In_Q1_Q3;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        if (Cases < Cases_In_Q1_Q3) {
          console.log(" 5660 Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;
          Cases_In_Q1_Q3 = Remaining_Cases / 2;

          console.log(" 5663 Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" 5682 Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          //console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          //var Cases_In_Q1_Q3 =( Cases_In_Q1_Q3/2)-1;
          console.log(
            " 5703 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );



          //Outside quad
          Xpos5 = Xpos5;
          Ypos5 = Ypos5;

          //Outside quad 3
          Xpos6 = Xpos6;
          Ypos6 = Ypos6;



          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            // No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            // No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          // var Cases_In_Q1_Q3 = Cases/2;
          // var Centred_Cases = 1;
          console.log(
            " 5828 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          //Outside quad 5
          var Xpos5 = Xpos5;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos;//+ (Pallet_Len / 2 - Case_Len / 2);

          var Xpos6 = Xpos6;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos6 = Ypos6;

          Ypos7 = Ypos + (Pallet_Len / 2) - (Case_Wid / 2);
          console.log(" 12 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2) - (Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            // Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        }
      }
    }
    // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution var 1 else " + Weight_distribution_V);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log("Weight Diasable 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;

        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//- No_Cases_in_col5[1];  //HERE

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,

            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,

            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = Cases;
        var Cases_In_Q1_Q3 = Remaining_Cases



        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " 11362 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos5 = Xpos5;//+ space_1;
        Ypos5 = Ypos;

        //Building Array
        Pallet_Region_X_Pos = [Xpos5];
        Pallet_Region_Y_Pos = [Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row5[0],


        ];
        No_Cases_in_col = [
          No_Cases_in_col5[0],


        ];

        Vertical_Space = [
          No_Cases_in_Row5[1],



        ];
        Horizontal_Space = [
          No_Cases_in_col5[1],


        ];

        orientation_Based = [Quad5_Oriantation, Quad6_Oriantation];

        Total_no_cases = [
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],


        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad5_Origin,


        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,


        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame9 data:..... ", Data)

  return Data;
};

export const Frame_10 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy

  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var Quad1_Oriantation = "Width";
    var Quad5_Oriantation = "Length";
    var Quad6_Oriantation = "Length";

    var Quad1_Origin = Pallets_Origin[index][1];
    var Quad5_Origin;
    var Quad6_Origin;

    var PW_1 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_5 = Pallet_Wid;

    PL_1 = Case_Len;
    PL_5 = Pallet_Len - Case_Len;

    if (Weight_distribution_V) {
      console.log(" 29547 ");
      Xpos1 = Xpos;
      Ypos1 = Ypos;

      Xpos5 = Xpos;
      Ypos5 = Ypos + Case_Len;

      Xpos6 = (Xpos + Pallet_Wid) - Case_Len;
      Ypos6 = Ypos1 + (Pallet_Len - Case_Wid);

      if (Pallet_Origin[index][1] == "Top-Left") {
        console.log(" 29558 ");
        Quad1_Origin = "Top-Left";
      }
      if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        console.log(" 29558 ");
        Quad1_Origin = "Top-Right";
      }

      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos5 = Xpos;
        Quad5_Origin = "TL-B-V2";
        Quad6_Origin = "BR-T-V2";
        Xpos6 = Xpos + (Pallet_Wid - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Quad5_Origin = "TR-B-V2";
        Quad6_Origin = "BL-T-V2";
        Xpos6 = Xpos;
      }

      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        console.log("28643");
        Xpos5 = Xpos;
        Quad5_Origin = "Top-Left-V2";
        Quad6_Origin = "Bottom-Right-V2";
        Xpos6 = Xpos + (Pallet_Wid - Case_Len);
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        console.log("28652");
        Xpos5 = Xpos + Pallet_Wid - Case_Len;
        Quad5_Origin = "Top-Right-V2";
        Quad6_Origin = "Bottom-Left-V2";
        Xpos6 = Xpos;
      }
      Ypos7 = Ypos + (Pallet_Len / 2);
      console.log(" 12Ypos7 " + Ypos7);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
    }
    else {
      Xpos1 = Xpos;
      Ypos1 = Ypos;
      console.log(" 29601 ");

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        Quad1_Origin = "Top-Right";
      }

      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Xpos5 = Xpos;
        Ypos5 = Ypos + Case_Len;
        Quad5_Origin = "TL-B-V2";
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = Ypos + Case_Len;
        Quad5_Origin = "TR-B-V2";
      }

      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        console.log(" 29627 ");
        Xpos5 = Xpos;
        Ypos5 = Ypos + Case_Len;
        Quad5_Origin = "Top-Left-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Len);
        Ypos5 = Ypos + Case_Len;
        Quad5_Origin = "Top-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left-V2") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = Ypos + Pallet_Len - Case_Wid;
        Quad5_Origin = "Bottom-Left-V2";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right-V2") {
        console.log("28702");
        Xpos5 = Xpos + Pallet_Wid - Case_Len;
        Ypos5 = Ypos + Pallet_Len - Case_Wid;
        Quad5_Origin = "Bottom-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "BL-T-V2") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = Ypos + Pallet_Len - Case_Wid;
        Quad5_Origin = "BL-T-V2";
      }
      else if (Pallet_Origin[index][2] == "BR-T-V2") {
        console.log(" 29664");
        Xpos5 = Xpos + Pallet_Wid - Case_Len;
        Ypos5 = Ypos + Pallet_Len - Case_Wid;
        Quad5_Origin = "BR-T-V2";
      }
    }

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    Total_outside_cases = Quad_Capacity_1;
    Total_inside_cases = Cases - Total_outside_cases;

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
    var V2_Capacity =
      No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
      No_Cases_in_col_Var2(PW_5, Case_Len)[0];

    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log(" rule3ed3");
      Quad5_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Right-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      console.log(" PL_51233 " + PL_5);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    }
    else {
      //Outside quad 5
      console.log(" 1234 ");
      //Quad5_Oriantation = "Length";
      Quad5_Origin = Pallet_Origin[index][2];
      if (Pallet_Origin[index][2] == "TL-B-V2") {
        Quad6_Origin = "BR-T-V2";
      }
      else if (Pallet_Origin[index][2] == "TR-B-V2") {
        Quad6_Origin = "BL-T-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Left-V2") {
        Quad6_Origin = "Bottom-Right-V2";
      }
      else if (Pallet_Origin[index][2] == "Top-Right-V2") {
        Quad6_Origin = "Bottom-Left-V2";
      }
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Inner_Quad_Capacity = V2_Capacity;
    }


    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);
    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);
    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);
    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution enabled " + Weight_distribution_V);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 5381 2.1 Cases > Total_outside_cases ");
        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {

          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          var Quad_Capacity_5 = Inner_Quad_Capacity / 2;
          var Quad_Capacity_6 = Inner_Quad_Capacity / 2;

          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;

          Pallet_Region_X_Pos = [Xpos1, Xpos5, Xpos6];
          Pallet_Region_Y_Pos = [Ypos1, Ypos5, Ypos6];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
          ];

          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
          ];

          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];
        }
        else {
          console.log(" 5785 Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" 5795 Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5455 Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "TL-B-V2") || (Pallet_Origin[2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 -
                  1;
                //console.log(" ''Pallet_Origin[1]==TL-to-B     Possible_Cases ");

              }
              else if ((Pallet_Origin[2] == "Top-Left-V2") || (Pallet_Origin[2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }

            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5821 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5832 Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5837 Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "Top-Left-V2") || (Pallet_Origin[2] == "Top-Right-V2")) {
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] + (No_Cases_in_col5[0] - 1) / 2;
                //console.log( " :::::Pallet_Origin[1]==Top-Left    Even odd loop  possible cases " );
              }
              else if ((Pallet_Origin[2] == "TL-B-V2") || (Pallet_Origin[2] == "TR-B-V2")) {
                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] + (No_Cases_in_Row5[0]);
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
            else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5862 Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5869 Possible_Cases " + Possible_Cases);


              if (Possible_Cases >= Quad_Capacity_5) {
                console.log("in loop");
                Centred_Cases = 0;
              } else {
                Centred_Cases = 1;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;//+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;//- No_Cases_in_Row5[1];
          Ypos7 = (Ypos5 + (PL_5 / 2) - Case_Wid / 2);
          console.log(" 12Ypos7 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;
        var Cases_In_Q1_Q3 = Quad_Capacity_1;//+ Quad_Capacity_3;
        console.log(" 5629 Cases_In_Q1_Q3 " + Cases_In_Q1_Q3)

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q1_Q3) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases;//- Cases_In_Q1_Q3;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        if (Cases < Cases_In_Q1_Q3) {
          console.log(" 5660 Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;
          Cases_In_Q1_Q3 = Remaining_Cases / 2;

          console.log(" 5663 Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" 5682 Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          //var Cases_In_Q1_Q3 =( Cases_In_Q1_Q3/2)-1;
          console.log(
            " 5703 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          //Outside quad
          Xpos5 = Xpos5;
          Ypos5 = Ypos5;

          //Outside quad 3
          Xpos6 = Xpos6;
          Ypos6 = Ypos6 - Case_Len;

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];

          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          console.log(" 5828 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3);

          //Outside quad 5
          var Xpos5 = Xpos5;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos;//+ (Pallet_Len / 2 - Case_Len / 2);

          var Xpos6 = Xpos6;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos6 = Ypos6;

          Ypos7 = Ypos + (Pallet_Len / 2) - (Case_Wid / 2);
          console.log(" 12 " + Ypos7);
          Xpos7 = Xpos + (Pallet_Wid / 2) - (Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];

          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];

          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];

          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        }
      }
    }
    // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution disable " + Weight_distribution_V);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log("Weight Diasable 2.1 Cases > Total_outside_cases ");

        Cases_In_Q1_Q3 = Quad_Capacity_1;
        Quad_Capacity_5 = Total_inside_cases;
        //var Centred_Cases = 0;

        //if (Quad_Capacity_5) {
        console.log(" 2.2 (Centred_Cases == 0) ");

        Xpos1 = Xpos1 + No_Cases_in_col1[1];
        Xpos5 = Xpos5;//- No_Cases_in_col5[1];  //HERE

        Ypos1 = Ypos1;
        Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];

        Pallet_Region_X_Pos = [Xpos1, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row5[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col5[1],
        ];

        orientation_Based = [
          Quad1_Oriantation,
          Quad5_Oriantation,
        ];

        Total_no_cases = [
          Quad_Capacity_1,
          Quad_Capacity_5,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad5_Origin,
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Quad_Capacity_5,
        ];
        //}
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Cases_In_Q1_Q3 = Cases;
        //var Cases_In_Q1_Q3 = Remaining_Cases;

        //var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " 11362 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;//+ space_1;
        Ypos1 = Ypos1;

        //Building Array
        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];

        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];

        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];

        orientation_Based = [Quad1_Oriantation];

        Total_no_cases = [
          Quad_Capacity_1,
          //No_Cases_in_Row1[0] * No_Cases_in_col1[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
        ];

        Max_No_Cases = [
          Cases_In_Q1_Q3,
        ];
      }
    }

  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame10 data:..... ", Data)

  return Data;
};


export const Frame_11 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy,
  Pallet_Origin,
  index
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true
  ) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var Quad1_Oriantation = "Width";
    var Quad5_Oriantation = "Width";
    var Quad6_Oriantation = "Width";

    var Quad1_Origin = Pallet_Origin[index][1];
    var Quad5_Origin;
    var Quad6_Origin;

    var PW_1 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_5 = Pallet_Wid;

    PL_1 = Case_Len;
    PL_5 = Pallet_Len - Case_Len;

    if (Weight_distribution_V) {
      Xpos1 = Xpos;
      Ypos1 = Ypos + (Pallet_Len - Case_Len);

      Xpos5 = Xpos;
      Ypos5 = Ypos;

      Xpos6 = (Xpos + Pallet_Wid) - Case_Wid;
      Ypos6 = Ypos + Pallet_Len - (Case_Len * 2);

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }
      if (Pallet_Origin[index][1] == "Top-Right") {
        console.log(" 31478 ");
        Quad1_Origin = "Top-Right";
        Xpos1 = Xpos + (Pallet_Wid - Case_Wid);
      }

      if (Pallet_Origin[index][2] == "Top-Left") {
        console.log("28643");
        Xpos5 = Xpos;
        Quad5_Origin = "Top-Left";
        Quad6_Origin = "Bottom-Right";
        Xpos6 = Xpos + (Pallet_Wid - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        console.log("28652");
        Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
        Quad5_Origin = "Top-Right";
        Quad6_Origin = "Bottom-Left";
        Xpos6 = Xpos;
      }
      else if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos5 = Xpos;
        Quad5_Origin = "TL-to-B";
        Quad6_Origin = "BR-to-T";
        Xpos6 = Xpos + (Pallet_Wid - Case_Wid);
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Quad5_Origin = "TR-to-B";
        Quad6_Origin = "BL-to-T";
        Xpos6 = Xpos;
        //console.log(" Q2 TR to B and Q3 is Bl to T " + Quad2_Origin);
      }


      Ypos7 = Ypos + (PL_5 / 2) - Case_Wid / 2;
      console.log(" 12Ypos7 " + Ypos7);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
    }
    else {
      Xpos1 = Xpos;
      Ypos1 = Ypos + Pallet_Len - Case_Len;

      if (Pallet_Origin[index][1] == "Top-Left") {
        Quad1_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][1] == "Top-Right") {
        Xpos1 = Xpos + Pallet_Wid - Case_Wid;
        Ypos1 = Ypos + Pallet_Len - Case_Len;
        Quad1_Origin = "Top-Right";
      }


      else if (Pallet_Origin[index][2] == "Top-Left") {
        Xpos5 = Xpos;
        Ypos5 = Ypos;
        Quad5_Origin = "Top-Left";
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        console.log("28702");
        Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
        Ypos5 = Ypos + Pallet_Wid - Case_Wid;
        Quad5_Origin = "Top-Right";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        console.log("28702");
        Xpos5 = Xpos;
        Ypos5 = Ypos + Pallet_Len - Case_Len;
        Quad5_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        console.log("28702");
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Len;
        Quad5_Origin = "Bottom-Right";
      }
      else if (Pallet_Origin[index][2] == "TL-to-B") {
        Xpos5 = Xpos;
        Quad5_Origin = "TL-to-B";

      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Quad5_Origin = "TR-to-B";

      }
    }
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];


    Total_outside_cases = Quad_Capacity_1;
    Total_inside_cases = Cases - Total_outside_cases;

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
    var V2_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];


    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log(" rule3ed3");
      Quad5_Origin = Pallet_Origin[index][2];
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Right-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    }
    else {
      //Outside quad 5
      console.log(" 1234 ");
      Quad5_Origin = Pallet_Origin[index][2];

      if (Pallet_Origin[index][2] == "TL-to-B") {
        Quad6_Origin = "BR-to-T";
      }
      else if (Pallet_Origin[index][2] == "TR-to-B") {
        Quad6_Origin = "BL-to-T";
      }
      else if (Pallet_Origin[index][2] == "Top-Left") {
        Quad6_Origin = "Bottom-Right";
        // Xpos6 = Xpos+Pallet_Wid-Case_Wid;
        // Ypos6 = (Ypos +Pallet_Len -Case_Len)-Case_Len;
      }
      else if (Pallet_Origin[index][2] == "Top-Right") {
        // console.log( " 3147887 ");
        // Xpos5 = Xpos + Pallet_Wid-Case_Wid;
        Quad6_Origin = "Bottom-Left";
        // Xpos6 = Xpos;
        // Ypos6 = (Ypos + Pallet_Len-Case_Len)-Case_Len;
      }
      else if (Pallet_Origin[index][2] == "Bottom-Left") {
        console.log("31702");
        Xpos5 = Xpos;
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Len;
        Quad5_Origin = "Bottom-Left";
      }
      else if (Pallet_Origin[index][2] == "Bottom-Right") {
        console.log("31702");
        Xpos5 = Xpos + Pallet_Wid - Case_Wid;
        Ypos5 = (Ypos + Pallet_Len - Case_Len) - Case_Len;
        Quad5_Origin = "Bottom-Right";
      }

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V2_Capacity;
    }


    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);
    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);
    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);
    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution var 1 if " + Weight_distribution_V);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 5381 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" 31648 Total_inside_cases >= Quad_Capacity_5 ");

          var Quad_Capacity_5 = Inner_Quad_Capacity / 2;
          var Quad_Capacity_6 = Inner_Quad_Capacity / 2;

          Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
          Xpos5 = Xpos5;//+ No_Cases_in_col5[1];
          Xpos6 = Xpos6;//+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;

          Pallet_Region_X_Pos = [Xpos1, Xpos5, Xpos6];
          Pallet_Region_Y_Pos = [Ypos1, Ypos5, Ypos6];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
          ];

          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
          ];

          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,

          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
          ];
        }
        else {
          console.log(" 5785 Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" 5795 Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5455 Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }

            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }


              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5821 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" 5832 Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5837 Quad_Capacity_5 " + Quad_Capacity_5);

              if ((Pallet_Origin[2] == "TL-to-B") || (Pallet_Origin[2] == "TR-to-B")) {

                var Possible_Cases =
                  (No_Cases_in_col5[0] / 2 - 1) * No_Cases_in_Row5[0] +
                  No_Cases_in_Row5[0] / 2 - 1;
              }
              else if ((Pallet_Origin[2] == "Top-Left") || (Pallet_Origin[2] == "Top-Right")) {
                console.log(" 30054 ");
                var Possible_Cases =
                  (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                  No_Cases_in_col5[0] / 2 -
                  1;
                //console.log(" //Pallet_Origin[2]==Top-Left     Possible_Cases ");
              }
              if (Possible_Cases > Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
            else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" 5862 Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" 5869 Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          console.log(" 31792 ");
          Xpos1 = Xpos1; //+ No_Cases_in_col1[1];
          Xpos5 = Xpos5; //+ No_Cases_in_col5[1];
          console.log(" Xpos5 " + Xpos5)
          Xpos6 = Xpos6;  //+ No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];
          Ypos6 = Ypos6;//- No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad1_Oriantation,
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad1_Origin,
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1;//+ Quad_Capacity_3;
        //var Centred_Cases = 1;
        console.log(" 5629 Cases_In_Q1_Q3 " + Cases_In_Q1_Q3)

        //var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q1_Q3) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases;//- Cases_In_Q1_Q3;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        if (Cases < Cases_In_Q1_Q3) {
          console.log(" 5660 Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;
          Cases_In_Q1_Q3 = Remaining_Cases / 2;

          console.log(" 5663 Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            //Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" 5682 Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          //console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(" 5703 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3);



          //Outside quad
          Xpos5 = Xpos5;
          Ypos5 = Ypos5 + Case_Len;

          //Outside quad 3
          Xpos6 = Xpos6;
          Ypos6 = Ypos6;


          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;
          // var Cases_In_Q1_Q3 = Cases/2;
          // var Centred_Cases = 1;
          console.log(
            " 5828 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );



          //Outside quad 5
          var Xpos5 = Xpos5;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos;//+ (Pallet_Len / 2 - Case_Len / 2);

          var Xpos6 = Xpos6;//+ (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos6 = Ypos1;

          var Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
          var Ypos7 = Ypos + (Pallet_Len / 2) - Case_Wid / 2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q1_Q3,
            Centred_Cases,
          ];
        }
      }
    }
    // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution var 1 else " + Weight_distribution_V);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log("Weight Diasable 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;

        //if (Quad_Capacity_5) {
        console.log(" 2.2 (Centred_Cases == 0) ");

        Xpos1 = Xpos1;//+ No_Cases_in_col1[1];
        Xpos5 = Xpos5;//- No_Cases_in_col5[1];  //HERE

        Ypos1 = Ypos1;
        Ypos5 = Ypos5;//+ No_Cases_in_Row5[1];

        Pallet_Region_X_Pos = [Xpos1, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row5[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col5[1],
        ];

        console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

        orientation_Based = [
          Quad1_Oriantation,
          Quad5_Oriantation,
        ];

        Total_no_cases = [
          Quad_Capacity_1,
          Quad_Capacity_5,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad1_Origin,
          Quad5_Origin,
        ];
        Max_No_Cases = [
          Quad_Capacity_1,
          Quad_Capacity_5,
        ];
        //}
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = Cases;
        var Cases_In_Q1_Q3 = Remaining_Cases



        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " 11362 space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos5 = Xpos5;//+ space_1;
        Ypos5 = Ypos;

        //Building Array
        Pallet_Region_X_Pos = [Xpos5];
        Pallet_Region_Y_Pos = [Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row5[0],


        ];
        No_Cases_in_col = [
          No_Cases_in_col5[0],


        ];

        Vertical_Space = [
          No_Cases_in_Row5[1],



        ];
        Horizontal_Space = [
          No_Cases_in_col5[1],


        ];

        orientation_Based = [Quad5_Oriantation, Quad6_Oriantation];

        Total_no_cases = [
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],


        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          Quad5_Origin,


        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,


        ];

      }
    }


  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame11 data:..... ", Data)

  return Data;
};

//Front Widthwise innerquad
export const Frame_20 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priority " + label_priority
  );
  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos1;
    Xpos5 = Xpos1 + Case_Len;
    Xpos6 = Xpos1 + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5
      console.log("rule3");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Right";

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Ypos6 = Ypos6 - Case_Len;
      Xpos6 = Xpos6 - Case_Wid;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame20 data:..... ", Data)

  return Data;
};
//Front inner QuadLengthwise
export const Frame_21 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " ," + label_priority
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos1;
    Xpos5 = Xpos1 + Case_Len;
    Xpos6 = Xpos1 + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V2_Capacity =
      No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log("rule3");
      Quad5_Oriantation = "Length";
      Quad5_Origin = "Top-Left-V2";
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    } else {
      //Outside quad 5
      Quad5_Oriantation = "Length";
      Quad5_Origin = "Top-Left-V2";

      Quad6_Oriantation = "Length";
      Quad6_Origin = "Bottom-Right-V2";

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

      Ypos6 = Ypos6 - Case_Wid;
      Xpos6 = Xpos6 - Case_Len;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Inner_Quad_Capacity = V2_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        } else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;
              Quad_Capacity_5 = 0;
              Quad_Capacity_6 = 0;
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        var Quad_Capacity_5 = Cases - Total_outside_cases;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;


        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);

          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame21 data:..... ", Data)

  return Data;
};

export const Frame_22 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priority " + label_priority
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2)123 ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos;
      Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos6 = Xpos + Case_Wid;

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1;
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Right-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V2_Capacity;
        Xpos5 = Xpos5 - Case_Len;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V2_Capacity;
          Xpos5 = Xpos5 - Case_Len;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Left-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Xpos5 = Xpos5 - Case_Len;
          Xpos6 = Xpos6;

          Ypos6 = Ypos6 - Case_Wid;


          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }
    else if (
      Space_In_Quad_1_3 >= Case_Wid &&
      Space_In_Quad_1_3 < Case_Wid * 2
    ) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1 + Case_Wid;
      Xpos4 = Xpos1;
      Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos6 = Xpos + Case_Wid;

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1 + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);


      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Right-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V2_Capacity;
        Xpos5 = Xpos5 - Case_Len;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V2_Capacity;
          Xpos5 = Xpos5 - Case_Len;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Left-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Xpos5 = Xpos5 - Case_Len;
          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    } else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos1;
      Xpos5 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos6 = Xpos + Case_Wid;

      Ypos1 = Ypos;
      Ypos2 = Ypos1 + Case_Wid;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos2;
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos1 + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Right-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V2_Capacity;
        Xpos5 = Xpos5 - Case_Len;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Right-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V2_Capacity;
          Xpos5 = Xpos5 - Case_Len;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Right-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Left-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Xpos5 = Xpos5 - Case_Len;
          Xpos6 = Xpos6;

          Ypos6 = Ypos6 - Case_Wid;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;
          Xpos6 = Xpos6;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Right-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Len, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3 + space_1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = parseInt(Ypos4, 10) + parseInt(space_2, 10);
        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Right-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };
  console.log("algoFrame frame22 data:..... ", Data)

  return Data;
};
// Right middle cases top-right and bottom-
export const Frame_23 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos;
      Xpos5 = Xpos1;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1;
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (
      Space_In_Quad_1_3 >= Case_Wid &&
      Space_In_Quad_1_3 < Case_Wid * 2
    ) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1 + Case_Wid;
      Xpos4 = Xpos1;
      Xpos5 = Xpos3;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1 + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    } else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos1;
      Xpos5 = Xpos1 + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1 + Case_Wid;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos2;
      Ypos5 = Ypos2;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Len, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3 + space_1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = parseInt(Ypos4, 10) + parseInt(space_2, 10);

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame23 data:..... ", Data)

  return Data;
};
//Right
export const Frame_24 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos;
      Xpos5 = Xpos1;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1;
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      if (V1_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log("rule1");
        Quad5_Oriantation = "Width";
        Quad5_Origin = "Top-Left";

        Centred_Oriantation = "Width";
        Centred_Origin = "Top-Left";

        No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
        No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
        Quad_Capacity_5 = V1_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else if (V1_Capacity >= V2_Capacity) {
        if (Total_inside_cases >= V1_Capacity) {
          //Outside quad 5
          console.log("rule3");
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";
          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";
          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Quad_Capacity_5 = V1_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        } else {
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";

          Quad6_Oriantation = "Width";
          Quad6_Origin = "Bottom-Right";

          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

          Ypos6 = Ypos6 - Case_Len;
          Xpos6 = Xpos6 - Case_Wid;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }

    } else if (
      Space_In_Quad_1_3 >= Case_Wid &&
      Space_In_Quad_1_3 < Case_Wid * 2
    ) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1 + Case_Wid;
      Xpos4 = Xpos1;
      Xpos5 = Xpos3;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1 + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V1_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log("rule1");
        Quad5_Oriantation = "Width";
        Quad5_Origin = "Top-Left";

        Centred_Oriantation = "Width";
        Centred_Origin = "Top-Left";

        No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
        No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
        Quad_Capacity_5 = V1_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else if (V1_Capacity >= V2_Capacity) {
        if (Total_inside_cases >= V1_Capacity) {
          //Outside quad 5
          console.log("rule3");
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";
          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";
          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Quad_Capacity_5 = V1_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        } else {
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";

          Quad6_Oriantation = "Width";
          Quad6_Origin = "Bottom-Right";

          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

          Ypos6 = Ypos6 - Case_Len;
          Xpos6 = Xpos6 - Case_Wid;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }

    } else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos1;
      Xpos5 = Xpos1 + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1 + Case_Wid;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos2;
      Ypos5 = Ypos2;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      if (V1_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log("rule1");
        Quad5_Oriantation = "Width";
        Quad5_Origin = "Top-Left";

        Centred_Oriantation = "Width";
        Centred_Origin = "Top-Left";

        No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
        No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
        Quad_Capacity_5 = V1_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else if (V1_Capacity >= V2_Capacity) {
        if (Total_inside_cases >= V1_Capacity) {
          //Outside quad 5
          console.log("rule3");
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";
          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";
          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Quad_Capacity_5 = V1_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        } else {
          Quad5_Oriantation = "Width";
          Quad5_Origin = "Top-Left";

          Quad6_Oriantation = "Width";
          Quad6_Origin = "Bottom-Right";

          Centred_Oriantation = "Width";
          Centred_Origin = "Top-Left";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

          Ypos6 = Ypos6 - Case_Len;
          Xpos6 = Xpos6 - Case_Wid;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
          No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }

    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        } else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled

    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            "Width",
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Len, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3 + space_1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = parseInt(Ypos4, 10) + parseInt(space_2, 10);

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Right",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame24 data:..... ", Data)

  return Data;
};
//Front
export const Frame_25 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos1;
    Xpos5 = Xpos1 + (Pallet_Wid - Case_Len);      //inside quad 5 TR
    Xpos6 = Xpos1 + Case_Len;                    //inside quad 6 BL

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5
      console.log("rule3 moni");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Right";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
      Xpos5 = Xpos5 - Case_Wid;
    }
    else {
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Right";    ///

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Left";  ///

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Xpos5 = Xpos5 - Case_Wid;
      console.log(" ki kara " + Xpos5);

      Xpos6 = Xpos6;
      Ypos6 = Ypos6 - Case_Len;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log("G 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Gayatri lendave");
          console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);
          console.log(" Quad5_Origin >> " + Quad5_Origin);
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];   //HERE

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" L Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            console.log(" Xp " + Xpos5);
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];  //HERE
          console.log(" Xpos5KK " + Xpos5 + " No_Cases_in_col5[1] " + No_Cases_in_col5[1]);
          Xpos6 = Xpos6 + No_Cases_in_col5[1];    //CHANGED HERE - TO +

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    }
    // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log("Weight Diasable 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;

        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];  //HERE

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        }
        // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          Quad5_Origin,
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame25 data:..... ", Data)

  return Data;
};
//Front
export const Frame_26 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );
  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos1;
    Xpos5 = Xpos2;               //cg
    Xpos6 = Xpos1 + Case_Len;    //cng

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V2_Capacity =
      No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V2_Capacity) {
      //Outside quad 5
      console.log("rule3");
      Quad5_Oriantation = "Length";
      Quad5_Origin = "Top-Right-V2";  //
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Quad_Capacity_5 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
      Xpos5 = Xpos5 - Case_Len;
    }
    else {
      //Outside quad 5
      Quad5_Oriantation = "Length";
      Quad5_Origin = "Top-Right-V2";    //

      Quad6_Oriantation = "Length";
      Quad6_Origin = "Bottom-Left-V2";  //

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

      Xpos5 = Xpos5 - Case_Len;  //

      Xpos6 = Xpos6; //- Case_Len;
      Ypos6 = Ypos6 - Case_Wid;  //  ///
      console.log(" Xpo6 " + Xpos6 + " ypos6" + Ypos6);
      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
      No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
      Inner_Quad_Capacity = V2_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];      // changed to -

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }

            if ((No_Cases_in_col5[0] > 0) && (Centred_Cases == 1)) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 - No_Cases_in_col5[1];   //  +to-
          Xpos6 = Xpos6;//- No_Cases_in_col5[1];   // - to + //

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];
          console.log(" Xs6 " + Xpos6 + " Y " + Ypos6);
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    }                 // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        var Quad_Capacity_5 = Cases - Total_outside_cases;

        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5; //- No_Cases_in_col5[1];  //

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,   //
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);

          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          Quad5_Origin,  //
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame26 data:..... ", Data)

  return Data;
};
//Front 
export const Frame_27 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos + (Pallet_Wid - Case_Wid);
    Xpos4 = Xpos1;
    Xpos5 = Xpos1 + Case_Len;
    Xpos6 = Xpos1 + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5

      //need to modify
      console.log("rule3");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      //need to modify
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Right";

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Ypos6 = Ypos6 - Case_Len;
      Xpos6 = Xpos6 - Case_Wid;

      Xpos3 = Xpos3;
      Ypos3 = Ypos3;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");
        //need to modify
        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;//+ No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Right",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          //need to modify
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;//+ No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Right",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos3;//+ No_Cases_in_col3[1];
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Right",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos3;//+ No_Cases_in_col3[1];
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Right",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");
          //need to modify
          Xpos1 = Xpos;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;//+ No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Right",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0
        //need to modify
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3; //+ No_Cases_in_col3[1];
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];
        //need to modify
        Position_orientation_Based = [
          "Top-Left",
          "Top-Left-V2",
          "Bottom-Right",
          "Top-Left-V2",
          "Top-Left",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame27 data:..... ", Data)

  return Data;
};
//Front
export const Frame_28 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos + (Pallet_Wid - Case_Wid); // changes
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos; // //
    console.log(" hello " + Xpos3);
    Xpos4 = Xpos; //////////
    Xpos5 = Xpos + Case_Len;
    Xpos6 = Xpos + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos; // //
    Ypos2 = Ypos1 + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len); // //
    Ypos4 = Ypos2;
    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5
      console.log("rule3");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Right";

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Ypos6 = Ypos6 - Case_Len;
      Xpos6 = Xpos6 - Case_Wid;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3; /// changes
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right",
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right",
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right",
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos2;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right",
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      Xpos5 = Xpos + Case_Len;  /////
      Ypos5 = Ypos + (Pallet_Len - (Case_Len + Case_Len)) //////

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;
          console.log("dispaly Xpos1" + Xpos1);
          console.log("dispaly Xpos5" + Xpos5);
          console.log("dispaly Xpos3" + Xpos3);


          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5;

          console.log("dispaly Ypos1" + Ypos1);
          console.log("dispaly Ypos5" + Ypos5);
          console.log("dispaly Ypos3" + Ypos3);

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right",
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Bottom-Left",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Wid, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos2;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Right", // ***
          "Top-Left-V2",
          "Bottom-Left", //** */
          "Top-Left-V2",
          "Bottom-Left",  //// changes 5th 
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame28 data:..... ", Data)

  return Data;
};
//Front
export const Frame_29 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos;
    Xpos5 = Xpos1 + Case_Len; ///changed
    Xpos6 = Xpos1 + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos + (Pallet_Len - (Case_Len + Case_Wid));  //
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos + Case_Len;   //
    Ypos5 = Ypos1 + Case_Len;   ///chngd
    Ypos6 = Ypos + (Pallet_Len - Case_Len);
    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5
      console.log("rule3");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Right";

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Ypos6 = Ypos6 - Case_Len;
      Xpos6 = Xpos6 - Case_Wid;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;

          Ypos5 = Ypos5 + No_Cases_in_Row5[1];


          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Left-V2",  //
            "Top-Left",
            "Top-Left-V2",  //
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;
          console.log(" hi " + Ypos2);
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;  //

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      Xpos5 = Xpos1 + (Pallet_Wid - (Case_Len + Case_Wid));
      Ypos5 = Ypos + Case_Len;

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;


          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;
          Ypos5 = Ypos5; // - No_Cases_in_Row5[1];  //
          console.log("Xs  1 " + Ypos5);  //
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Top-Right",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;   //+ (PL_2 - Case_Wid * Cases_In_Q2_Q4) / 2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4;

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Bottom-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Top-Right",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame29 data:..... ", Data)

  return Data;
};
//Front
export const Frame_30 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );
  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    PW_1 = Pallet_Wid;
    PW_2 = Case_Len;
    PW_3 = PW_1;
    PW_4 = PW_2;
    PW_5 = Pallet_Wid - Case_Len * 2;

    PL_1 = Case_Len;
    PL_2 = Pallet_Len - Case_Len * 2;
    PL_3 = PL_1;
    PL_4 = PL_2;
    PL_5 = PL_2;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);
    Xpos3 = Xpos1;
    Xpos4 = Xpos;
    Xpos5 = Xpos1 + Case_Len;
    Xpos6 = Xpos1 + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos + Case_Len;
    Ypos3 = Ypos1 + (Pallet_Len - Case_Len);
    Ypos4 = Ypos + (Pallet_Len - (Case_Len + Case_Wid));

    Ypos5 = Ypos2;
    Ypos6 = Ypos + (Pallet_Len - Case_Len);

    Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    //Outside quad 2
    No_Cases_in_Row2 = No_Cases_in_row_Var2(PL_2, Case_Wid);
    No_Cases_in_col2 = No_Cases_in_col_Var2(PW_2, Case_Len);
    Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    //Outside quad 3
    No_Cases_in_Row3 = No_Cases_in_row_Var1(PL_3, Case_Len);
    No_Cases_in_col3 = No_Cases_in_col_Var1(PW_3, Case_Wid);
    Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    //Outside quad 4
    No_Cases_in_Row4 = No_Cases_in_row_Var2(PL_4, Case_Wid);
    No_Cases_in_col4 = No_Cases_in_col_Var2(PW_4, Case_Len);
    Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

    Total_outside_cases =
      Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Total_inside_cases < 0) {
      Total_inside_cases = 0;
    }

    var V1_Capacity =
      No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
      No_Cases_in_col_Var1(PW_5, Case_Wid)[0];

    if (Total_inside_cases >= V1_Capacity) {
      //Outside quad 5

      //need to modify
      console.log("rule3");
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";
      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";
      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Quad_Capacity_5 = V1_Capacity;
      Inner_Quad_Capacity = V1_Capacity;
    }
    else {
      //need to modify
      Quad5_Oriantation = "Width";
      Quad5_Origin = "Top-Left";

      Quad6_Oriantation = "Width";
      Quad6_Origin = "Bottom-Right";

      Centred_Oriantation = "Width";
      Centred_Origin = "Top-Left";

      Ypos7 = Ypos + (Pallet_Len / 2 - Case_Len / 2);
      Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);

      Ypos6 = Ypos6 - Case_Len;
      Xpos6 = Xpos6 - Case_Wid;

      Quad_Capacity_5 = Total_inside_cases;
      Quad_Capacity_6 = Total_inside_cases;

      No_Cases_in_Row5 = No_Cases_in_row_Var1(PL_5, Case_Len);
      No_Cases_in_col5 = No_Cases_in_col_Var1(PW_5, Case_Wid);
      Inner_Quad_Capacity = V1_Capacity;
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");
        //need to modify
        if (Total_inside_cases >= Inner_Quad_Capacity) {

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2", //
            "Top-Left",
            "Bottom-Left-V2", //
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 == 0 && No_Cases_in_col5[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row5[0] % 2 != 0 && No_Cases_in_col5[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0]) + (No_Cases_in_col5[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }
          //need to modify
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;//
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;//
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",//
            "Top-Left",
            "Bottom-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        console.log("  No_Cases_in_col5[0]>=0  " + No_Cases_in_col5[0]);

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            No_Cases_in_Row5[0] * No_Cases_in_col5[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Left-V2",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      Xpos5 = Xpos5 + No_Cases_in_col5[1];

      Ypos5 = Ypos5 + No_Cases_in_Row5[1];


      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;
        var Centred_Cases = 0;



        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");
          //need to modify
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;


          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;


          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);
          //need to modify
          orientation_Based = [
            "Width",
            "Length",
            "Width",
            "Length",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];
          //need to modify
          Position_orientation_Based = [
            "Top-Left",
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",  //
            "Top-Left"
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      } else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        // loop for Centred_Cases == 0
        //need to modify
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;

        //Outside quad 3
        Xpos3 = Xpos1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          No_Cases_in_Row5[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          No_Cases_in_col5[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Width", "Length", "Width", "Length", "Width"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          No_Cases_in_Row5[0] * No_Cases_in_col5[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];
        //need to modify
        Position_orientation_Based = [
          "Top-Left",
          "Top-Right-V2",
          "Top-Left",
          "Bottom-Left-V2",
          "Top-Left",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame30 data:..... ", Data)

  return Data;
};
//Right
export const Frame_31 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + (Pallet_Wid - (Case_Wid + Case_Len));
      Xpos4 = Xpos;
      Xpos5 = Xpos1;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1;
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (Space_In_Quad_1_3 >= Case_Wid && Space_In_Quad_1_3 < Case_Wid * 2) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + (Pallet_Wid - Case_Len);
      Xpos4 = Xpos1;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1 + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + (Pallet_Wid - Case_Len);
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos + Case_Wid;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos2;
      Ypos5 = Ypos2;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Right-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Right-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Right-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Right-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      Xpos5 = Xpos + (Pallet_Wid - (Case_Wid + Case_Len));
      Ypos5 = Ypos + (Pallet_Len - (Case_Wid * 2));

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;

        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Bottom-Right-V2",
            "Top-Left",
            "Bottom-Right-V2"
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Len, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = parseInt(Ypos4, 10) + parseInt(space_2, 10);

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Top-Left",
          "Bottom-Right-V2",
          "Top-Left",
          "Bottom-Right-V2"
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame31 data:..... ", Data)

  return Data;
};
//Right
export const Frame_32 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + (Pallet_Wid - (Case_Wid + Case_Len));
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + Case_Wid;
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos;
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (
      Space_In_Quad_1_3 >= Case_Wid &&
      Space_In_Quad_1_3 < Case_Wid * 2
    ) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos + (Pallet_Wid - (Case_Wid + Case_Len));
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + Case_Wid;
      Xpos4 = Xpos;
      Xpos5 = Xpos3;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + (Pallet_Wid - Case_Len);
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos;
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos + Case_Wid;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + Case_Wid;
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2 + space_2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4 + space_2;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      Xpos5 = Xpos + Case_Wid;
      Ypos5 = Ypos + (Pallet_Len - (Case_Wid * 2));

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;

        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 + No_Cases_in_Row2[1];
          Ypos3 = Ypos3;
          Ypos4 = Ypos4 + No_Cases_in_Row4[1];
          Ypos5 = Ypos5;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Right-V2",
            "Top-Left",
            "Bottom-Left-V2",
            "Top-Left",
            "Bottom-Left-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = parseInt(Ypos2, 10) + (parseInt(PL_2, 10) - parseInt(Case_Len, 10) * parseInt(Cases_In_Q2_Q4, 10)) / 2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = parseInt(Ypos4, 10) + parseInt(space_2, 10);

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Right-V2",
          "Top-Left",
          "Bottom-Left-V2",
          "Top-Left",
          "Bottom-Left-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame32 data:..... ", Data)

  return Data;
};
//Right 
export const Frame_33 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos;
      Xpos5 = Xpos1;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1 + (Pallet_Len - Case_Len); //
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1;
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (
      Space_In_Quad_1_3 >= Case_Wid &&
      Space_In_Quad_1_3 < Case_Wid * 2
    ) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1 + Case_Wid;
      Xpos4 = Xpos1;
      Xpos5 = Xpos1 + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos1 + (Pallet_Len - (Case_Wid + Case_Len));
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos1 + Case_Wid;
      Ypos5 = Ypos4;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    } else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos;
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos + ((Pallet_Len - Case_Wid) - Case_Len);
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + Case_Wid;
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2; //
          Ypos3 = Ypos3;
          Ypos4 = Ypos4; //
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Top-Left",
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2; //

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4; //

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Top-Left",
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Top-Left",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      Xpos5 = Xpos + (Pallet_Wid - (Case_Wid + Case_Len));
      Ypos5 = Ypos + Case_Wid;

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;


        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;
          Ypos4 = Ypos4;
          Ypos5 = Ypos5;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Left",
            "Top-Left-V2",
            "Top-Left",
            "Top-Right-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = Xpos1 + space_1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2; //

        //Outside quad 3
        Xpos3 = Xpos3 + space_1;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4; //

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Bottom-Left",
          "Top-Left-V2",
          "Top-Left",
          "Top-Right-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame33 data:..... ", Data)

  return Data;
};
//Right 
export const Frame_34 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases + " label_priorityy " + label_priorityy
  );

  if (true) {
    console.log(" 1. Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;

    var Quad5_Oriantation;
    var Quad5_Origin;

    var Quad6_Oriantation;
    var Quad6_Origin;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;
    var No_Cases_in_Row4;
    var No_Cases_in_Row5;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;
    var No_Cases_in_col4;
    var No_Cases_in_col5;

    var Quad_Capacity_1;
    var Quad_Capacity_2;
    var Quad_Capacity_3;
    var Quad_Capacity_4;
    var Quad_Capacity_5;
    var Quad_Capacity_6;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;
    var PW_4 = 0;
    var PW_5 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;
    var PL_4 = 0;
    var PL_5 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;
    var Xpos6 = 0;
    var Xpos7 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;
    var Ypos6 = 0;
    var Ypos7 = 0;

    var Space_In_Quad_1_3 =
      No_Cases_in_col_Var2(Pallet_Wid, Case_Len)[1] * 2 + 0.1;
    console.log(
      " Space_In_Quad_1_3 = " +
      Space_In_Quad_1_3 +
      " (Case_Wid*2) " +
      Case_Wid * 2
    );
    console.log(
      "Space_In_Quad_1_3 >= (Case_Wid*2)  = " +
      (Space_In_Quad_1_3 >= Case_Wid * 2)
    );

    // Space is >=  (2 cases_width)
    if (Space_In_Quad_1_3 >= Case_Wid * 2) {
      console.log(" 1.1 Space_In_Quad_1_3 >= (Case_Wid*2) ");

      PW_1 = Pallet_Wid - Case_Wid * 2;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos + Case_Wid;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos1;
      Xpos4 = Xpos;
      Xpos5 = Xpos1;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos;
      Ypos3 = Ypos1 + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + (Pallet_Len - Case_Len); // change
      Ypos5 = Ypos1 + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];


      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed1");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (Space_In_Quad_1_3 >= Case_Wid && Space_In_Quad_1_3 < Case_Wid * 2) {
      // Space is >=  (1 cases_width)
      console.log(
        " 1.2 ( Space_In_Quad_1_3 >= Case_Wid ) && ( Space_In_Quad_1_3 < (Case_Wid*2) ) "
      );

      PW_1 = Pallet_Wid - Case_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = PW_1 - Case_Wid;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = PL_2 - Case_Wid;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos + Case_Wid;
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + (Pallet_Len - Case_Len); // change
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(PL_4, Case_Len);
      No_Cases_in_col4 = No_Cases_in_col_Var1(PW_4, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Wid)[0];

      console.log("V1_Capacity : " + V1_Capacity);
      console.log("V2_Capacity : " + V2_Capacity);

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log("rule3ed2");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
        }
        else {
          //Outside quad 5

          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          Inner_Quad_Capacity = V1_Capacity;
        }
      }
    }
    else if (Space_In_Quad_1_3 < Case_Wid) {
      // Space is <  (1 cases_width)
      console.log(" 1.3 (Space_In_Quad_1_3 < Case_Wid)  ");

      PW_1 = Pallet_Wid;
      PW_2 = Case_Wid;
      PW_3 = PW_1;
      PW_4 = PW_2;
      PW_5 = Pallet_Wid - Case_Wid * 2;

      PL_1 = Case_Wid;
      PL_2 = Pallet_Len - Case_Wid * 2;
      PL_3 = PL_1;
      PL_4 = PL_2;
      PL_5 = Pallet_Len - Case_Wid * 2;

      Xpos1 = Xpos;
      Xpos2 = Xpos + (Pallet_Wid - Case_Wid);
      Xpos3 = Xpos;
      Xpos4 = Xpos;
      Xpos5 = Xpos + Case_Wid;
      Xpos6 = Xpos + (Pallet_Wid - Case_Wid);

      Ypos1 = Ypos;
      Ypos2 = Ypos + Case_Wid;
      Ypos3 = Ypos + (Pallet_Len - Case_Wid);
      Ypos4 = Ypos + (Pallet_Len - (Case_Wid + Case_Len)); // change
      Ypos5 = Ypos + Case_Wid;
      Ypos6 = Ypos + (Pallet_Len - Case_Wid);

      //Outside quad 1
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Quad_Capacity_1 = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

      //Outside quad 2
      No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
      No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
      Quad_Capacity_2 = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

      //Outside quad 3
      No_Cases_in_Row3 = No_Cases_in_row_Var2(Case_Wid, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(Pallet_Wid, Case_Len);
      Quad_Capacity_3 = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

      //Outside quad 4
      No_Cases_in_Row4 = No_Cases_in_row_Var1(
        Pallet_Len - Case_Wid * 2,
        Case_Len
      );
      No_Cases_in_col4 = No_Cases_in_col_Var1(Case_Wid, Case_Wid);
      Quad_Capacity_4 = No_Cases_in_Row4[0] * No_Cases_in_col4[0];

      Total_outside_cases =
        Quad_Capacity_1 + Quad_Capacity_2 + Quad_Capacity_3 + Quad_Capacity_4;
      Total_inside_cases = Cases - Total_outside_cases;

      if (Total_inside_cases <= 0) {
        Total_inside_cases = 0;
      }

      var V1_Capacity =
        No_Cases_in_row_Var1(PL_5, Case_Len)[0] *
        No_Cases_in_col_Var1(PW_5, Case_Wid)[0];
      var V2_Capacity =
        No_Cases_in_row_Var2(PL_5, Case_Wid)[0] *
        No_Cases_in_col_Var2(PW_5, Case_Len)[0];

      if (V2_Capacity == Total_inside_cases) {
        //Outside quad 5
        console.log(" 543455 ");

        Centred_Oriantation = "Length";
        Centred_Origin = "Top-Left-V2";

        console.log("rule2");
        Quad5_Oriantation = "Length";
        Quad5_Origin = "Top-Left-V2";
        No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
        No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
        Quad_Capacity_5 = V2_Capacity;
        Inner_Quad_Capacity = V1_Capacity;
      }

      else {
        if (Total_inside_cases >= V2_Capacity) {
          //Outside quad 5
          console.log(" rule3ed3");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";
          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";
          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" PL_51233 " + PL_5);
          Quad_Capacity_5 = V2_Capacity;
          Inner_Quad_Capacity = V1_Capacity;
          console.log(" quad capacit123y " + Inner_Quad_Capacity);

        }
        else {
          //Outside quad 5
          console.log(" 1234 ");
          Quad5_Oriantation = "Length";
          Quad5_Origin = "Top-Left-V2";

          Quad6_Oriantation = "Length";
          Quad6_Origin = "Bottom-Right-V2";

          Centred_Oriantation = "Length";
          Centred_Origin = "Top-Left-V2";

          Ypos7 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          Xpos7 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

          Ypos6 = Ypos6 - Case_Wid;
          Xpos6 = Xpos6 - Case_Len;

          Quad_Capacity_5 = Total_inside_cases;
          Quad_Capacity_6 = Total_inside_cases;

          No_Cases_in_Row5 = No_Cases_in_row_Var2(PL_5, Case_Wid);
          No_Cases_in_col5 = No_Cases_in_col_Var2(PW_5, Case_Len);
          console.log(" No_Cases_in_col5ed3 " + No_Cases_in_col5[1]);
          console.log(" PL_5ed12 " + PL_5);
          Inner_Quad_Capacity = V2_Capacity;
        }
      }
    }

    console.log(" Quad_Capacity_1 >> " + Quad_Capacity_1);
    console.log(" Quad_Capacity_2 >> " + Quad_Capacity_2);
    console.log(" Quad_Capacity_3 >> " + Quad_Capacity_3);
    console.log(" Quad_Capacity_4 >> " + Quad_Capacity_4);
    console.log(" Quad_Capacity_5 >> " + Quad_Capacity_5);
    console.log(" Quad_Capacity_6 >> " + Quad_Capacity_6);

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Quad5_Origin >> " + Quad5_Origin);
    console.log(" Quad6_Origin >> " + Quad6_Origin);

    console.log(" Total_inside_cases >> " + Total_inside_cases);
    console.log(" Total_outside_cases >> " + Total_outside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        console.log(" Total_inside_cases " + Total_inside_cases);
        console.log(" Inner_Quad_Capacity " + Inner_Quad_Capacity);

        if (Total_inside_cases >= Inner_Quad_Capacity) {
          console.log(" Total_inside_cases >= Quad_Capacity_5 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2; // change
          Ypos3 = Ypos3;
          Ypos4 = Ypos4; // change 
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Left", //change
            Quad5_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            Centred_Cases = 0;
            Quad_Capacity_5 = Total_inside_cases / 2;
            Quad_Capacity_6 = Total_inside_cases / 2;
          } else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Both Odd Loop ");
              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;
              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Both Even Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 == 0 &&
              No_Cases_in_col5[0] % 2 != 0
            ) {
              console.log(" Even  Odd  Loop ");

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                (No_Cases_in_Row5[0] / 2 - 1) * No_Cases_in_col5[0] +
                (No_Cases_in_col5[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            } else if (
              No_Cases_in_Row5[0] % 2 != 0 &&
              No_Cases_in_col5[0] % 2 == 0
            ) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col5[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Quad_Capacity_5 = (Total_inside_cases - 1) / 2;
              Quad_Capacity_6 = (Total_inside_cases - 1) / 2;

              console.log(" Quad_Capacity_5 " + Quad_Capacity_5);

              var Possible_Cases =
                ((No_Cases_in_Row5[0] - 1) / 2) * No_Cases_in_col5[0] +
                No_Cases_in_col5[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad_Capacity_5) {
                Centred_Cases = 1;
              } else {
                Centred_Cases = 0;
              }
            }
          }

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5 + No_Cases_in_col5[1];
          Xpos6 = Xpos6 - No_Cases_in_col5[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2; // change
          Ypos3 = Ypos3;
          Ypos4 = Ypos4; // change
          Ypos5 = Ypos5 + No_Cases_in_Row5[1];
          Ypos6 = Ypos6 - No_Cases_in_Row5[1];

          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
            Xpos6,
            Xpos7,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
            Ypos6,
            Ypos7,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
            No_Cases_in_Row5[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
            No_Cases_in_col5[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
            No_Cases_in_Row5[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
            No_Cases_in_col5[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
            Quad6_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Left", // change
            Quad5_Origin,
            Quad6_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
            Quad_Capacity_6,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(
            " Remaining_Cases >>> " +
            Remaining_Cases +
            " (Remaining_Cases % 2) " +
            (Remaining_Cases % 2) +
            " (Remaining_Cases % 2) != 0 : " +
            (Remaining_Cases % 2 != 0)
          );

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases) +
              " (Remaining_Cases % 2) " +
              (Remaining_Cases % 2) +
              " (Remaining_Cases % 2) != 0 : " +
              (Remaining_Cases % 2 != 0);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }

        if (No_Cases_in_col5[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2; // change

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4; // change

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
          ];

          orientation_Based = ["Length", "Width", "Length", "Width"];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Left", // change here
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
          ];
        } // loop for Centred_Cases != 0
        else {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
          var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
          console.log(" PW_1 " + PW_1);
          console.log(
            " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
          );

          Xpos1 = Xpos1 + space_1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2; // change

          //Outside quad 3
          Xpos3 = Xpos3 + space_1;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4; // change 

          //Outside quad 5
          // var Xpos5 = Xpos + ( (Pallet_Wid / 2) - (Case_Wid/2) ) ;
          // var Ypos5 = Ypos + ( (Pallet_Len / 2) - (Case_Len/2) );

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos7];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos7];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row4[0] * No_Cases_in_col4[0],
            1,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Left", // change
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Cases_In_Q1_Q3,
            Cases_In_Q2_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads
      Xpos5 = Xpos5;
      Ypos5 = Ypos5;


      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad_Capacity_5 = Cases - Total_outside_cases;


        if (Quad_Capacity_5) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];
          Xpos4 = Xpos4;
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2; // change 
          Ypos3 = Ypos3;
          Ypos4 = Ypos4; // change 
          Ypos5 = Ypos5;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row4[0],
            No_Cases_in_Row5[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col4[0],
            No_Cases_in_col5[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row4[1],
            No_Cases_in_Row5[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col4[1],
            No_Cases_in_col5[1],
          ];

          console.log(" Quad5_Oriantation >>>>>> " + Quad5_Oriantation);

          orientation_Based = [
            "Length",
            "Width",
            "Length",
            "Width",
            Quad5_Oriantation,
          ];

          Total_no_cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Top-Left",
            "Top-Left-V2",
            "Bottom-Left", // change here
            "Top-Left-V2",
          ];
          Max_No_Cases = [
            Quad_Capacity_1,
            Quad_Capacity_2,
            Quad_Capacity_3,
            Quad_Capacity_4,
            Quad_Capacity_5,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q3 = Quad_Capacity_1 + Quad_Capacity_3;
        var Cases_In_Q2_Q4 = Quad_Capacity_2 + Quad_Capacity_4;

        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases >= Cases_In_Q2_Q4) {
          console.log(" Cases >= Cases_In_Q2_Q4 ");

          Remaining_Cases = Cases - Cases_In_Q2_Q4;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);

            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = Remaining_Cases / 2;
            Cases_In_Q2_Q4 = Cases_In_Q2_Q4 / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

        } // loop for cases < Cases_In_Q2_Q4
        else {
          console.log(" Cases < Cases_In_Q2_Q4 ");
          Remaining_Cases = Cases;

          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Quad_Capacity_5 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Quad_Capacity_5 = 0;
            Cases_In_Q1_Q3 = 0;
            Cases_In_Q2_Q4 = Remaining_Cases / 2;
          }
          if (No_Cases_in_col5[0] > 0 && Quad_Capacity_5 == 1) {
            Quad_Capacity_5 = 1;
            console.log(" id 2");
          }
          else {
            Quad_Capacity_5 = 0;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_In_Q1_Q3  " + Cases_In_Q1_Q3);
          console.log(" Cases_In_Q2_Q4  " + Cases_In_Q2_Q4);
        }


        // loop for Centred_Cases != 0
        var space_1 = (PW_1 - Cases_In_Q1_Q3 * Case_Len) / 2;
        var space_2 = (PL_2 - Cases_In_Q2_Q4 * Case_Len) / 2;
        console.log(
          " space_1 " + space_1 + " Cases_In_Q1_Q3 " + Cases_In_Q1_Q3
        );

        Xpos1 = parseInt(Xpos1, 10) + parseInt(space_1, 10);
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2; //change

        //Outside quad 3
        Xpos3 = parseInt(Xpos3, 10) + parseInt(space_1, 10);
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4; // change 

        //Outside quad 5
        // var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
        // var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3, Xpos4, Xpos5];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3, Ypos4, Ypos5];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
          No_Cases_in_Row4[0],
          1,
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
          No_Cases_in_col4[0],
          1,
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          No_Cases_in_Row3[1],
          No_Cases_in_Row4[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          No_Cases_in_col3[1],
          No_Cases_in_col4[1],
          0,
        ];

        orientation_Based = ["Length", "Width", "Length", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          No_Cases_in_Row4[0] * No_Cases_in_col4[0],
          1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
          "Top-Left",
          "Top-Left-V2",
          "Bottom-Left",
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Cases_In_Q1_Q3,
          Cases_In_Q2_Q4,
          Quad_Capacity_5,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame34 data:..... ", Data)

  return Data;
};

export const Frame_35 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" Label Priority Loop ");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_col1;

    var Quad1_Oriantation;
    var Quad1_Origin;
    var Quad2_Oriantation;
    var Quad2_Origin;

    var Quad_Capacity_1;

    var PW_1 = 0;
    var PW_2 = 0;

    var PL_1 = 0;
    var PL_2 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Pallet_Wid;

    PL_2 = PL_1;
    PW_2 = PW_1;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + (Pallet_Len - Case_Wid);

    Ypos3 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos3 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
    No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
    var V2_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    if (V2_Capacity <= Cases) {
      //Outside quad 5
      console.log("rule3");
      Quad1_Oriantation = "Length";
      Quad1_Origin = "Top-Left-V2";
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Cases_in_Q1 = V2_Capacity;
      Inner_Quad_Capacity = V2_Capacity;
    }
    else {
      //Outside quad 5
      Quad1_Oriantation = "Length";
      Quad1_Origin = "Top-Left-V2";

      Quad2_Oriantation = "Length";
      Quad2_Origin = "Bottom-Right-V2";

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Cases_in_Q1 = Cases;
      Cases_in_Q2 = Cases;

      No_Cases_in_Row1 = No_Cases_in_row_Var2(PL_1, Case_Wid);
      No_Cases_in_col1 = No_Cases_in_col_Var2(PW_1, Case_Len);
      Inner_Quad_Capacity = V2_Capacity;
    }

    console.log(" 16603 Centred_Origin >> " + Centred_Origin);
    console.log(" 16604 Centred_Oriantation >> " + Centred_Oriantation);


    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H " + Weight_distribution_H);

      if (Cases >= Inner_Quad_Capacity) {

        Xpos1 = Xpos1 + No_Cases_in_col1[1];

        Ypos1 = Ypos1 + No_Cases_in_Row1[1];

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];

        orientation_Based = [
          "Length"
        ];
        Total_no_cases = [
          Quad_Capacity_1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_in_Q1,

        ];
      }
      else {
        var Centred_Cases = 0;
        if (Cases % 2 == 0) {
          console.log(" Total_inside_cases%2 == 0 ");
          Centred_Cases = 0;
          Cases_in_Q1 = Cases / 2;
          Cases_in_Q2 = Cases / 2;
          console.log(" 16663 Cases_in_Q1 " + Cases_in_Q1);
          console.log(" 16664 Centred_Cases " + Centred_Cases);

        }
        else {
          Centred_Cases = 1;
          Cases_in_Q1 = Cases - 1 / 2;
          Cases_in_Q2 = Cases - 1 / 2;
          console.log(" 16672 Cases_in_Q1 " + Cases_in_Q1);
          console.log(" 16673 Cases_in_Q1 " + Cases_in_Q2);
          console.log(" 16674 Centred_Cases " + Centred_Cases);
        }

        if (((No_Cases_in_col1[0] * No_Cases_in_Row1[0]) > 0 && Centred_Cases == 1) || (Cases == 1 && Centred_Cases == 1)) {
          Centred_Cases = 1;
        }
        else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          console.log(" 16689 Centered cases ==0 ");
          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2 - No_Cases_in_col1[1];
          Ypos2 = Ypos2;

          Xpos3 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
          Ypos3 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row1[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col1[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row1[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col1[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Length",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Right-V2",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          Centred_Cases = 1;
          if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 != 0) {
            console.log(" Both Odd Loop ");
            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;
            console.log(" 16767 Cases_in_Q1 " + Cases_in_Q1);
          }
          else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 == 0) {
            console.log(" Both Even Loop ");

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" Cases_in_Q32 " + Cases_in_Q1);

            var Possible_Cases = (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] + No_Cases_in_col1[0] / 2 - 1;

            console.log(" 16780 Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row1[0] % 2 == 0 && No_Cases_in_col1[0] % 2 != 0) {
            console.log(" Even  Odd  Loop ");

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" 16798 Totl inside cases " + Total_inside_cases);
            console.log(" 16799 Cases_in_Q1 " + Cases_in_Q1);

            var Possible_Cases = (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] + (No_Cases_in_col1[0] - 1) / 2;
            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }
          else if (No_Cases_in_Row1[0] % 2 != 0 && No_Cases_in_col1[0] % 2 == 0) {
            console.log(" Odd Even Loop ");
            var Possible_Cases = No_Cases_in_col1[0] / 2 + 1;

            console.log(" Possible_Cases " + Possible_Cases);

            Cases_in_Q1 = (Cases - 1) / 2;
            Cases_in_Q2 = (Cases - 1) / 2;

            console.log(" Cases_in_Q " + Cases_in_Q1);

            var Possible_Cases = ((((No_Cases_in_Row1[0] - 1) / 2) * No_Cases_in_col1[0]) + (No_Cases_in_col1[0] / 2) - 1);

            console.log(" Possible_Cases " + Possible_Cases);

            if (Possible_Cases >= Cases_in_Q1) {
              Centred_Cases = 1;
            }
            else {
              Centred_Cases = 0;
            }
          }

          if (No_Cases_in_col1[0] > 0 && Centred_Cases == 1) {
            Centred_Cases = 1;
          } else {
            Centred_Cases = 0;
          }

          console.log(+ " Cases_in_Q1 " + Cases_in_Q1);

          Xpos1 = Xpos1 + No_Cases_in_col1[1];
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2 - No_Cases_in_col1[1];
          Ypos2 = Ypos2;

          //Outside quad 5
          var Xpos3 = Xpos3;
          var Ypos3 = Ypos3;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,

          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,

          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row1[0],
            1
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col1[0],
            1
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row1[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col1[1],
            0,
          ];

          orientation_Based = [
            "Length",
            "Length",
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left-V2",
            "Bottom-Right-V2",
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Centred_Cases
          ];
        }
      }

    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H is disabled " + Weight_distribution_H);
      //loop for cases max than outside quads
      console.log(" 16931 Inner_Quad_Capacity " + Inner_Quad_Capacity)
      if ((Cases >= Inner_Quad_Capacity) || (Cases <= Inner_Quad_Capacity)) {
        Xpos1 = Xpos1 + No_Cases_in_col1[1];
        Ypos1 = Ypos1;

        Pallet_Region_X_Pos = [Xpos1];
        Pallet_Region_Y_Pos = [Ypos1];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
        ];

        No_Cases_in_col = [
          No_Cases_in_col1[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
        ];

        Horizontal_Space = [
          No_Cases_in_col1[1],
        ];

        orientation_Based = [
          "Length",
        ];

        Total_no_cases = [
          Quad_Capacity_1,
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left-V2",

        ];
        Max_No_Cases = [
          Cases_in_Q1,
        ];
      }

    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame35 data:..... ", Data)

  return Data;
};

export const Frame_36 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;
    var Cases_in_Q4 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;

    var Quad1_Capacity;
    var Quad2_Capacity;
    var Quad3_Capacity;

    var Quad3_Oriantation;
    var Quad4_Oriantation;
    var Quad3_Origin;
    var Quad4_Origin;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;

    PL_1 = Case_Len;
    PW_1 = Pallet_Wid;

    PL_2 = PL_1;
    PW_2 = PW_1;

    PL_3 = Pallet_Len - (Case_Len * 2);
    PW_3 = Pallet_Wid;

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Wid)
    Xpos3 = Xpos;
    Xpos4 = Xpos + (Pallet_Wid - Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + (Pallet_Len - Case_Len);//
    Ypos3 = Ypos1 + Case_Len;
    Ypos4 = Ypos2 - Case_Wid;

    Ypos5 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
    No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
    No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
    Quad3_Capacity = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    Total_outside_cases = Quad1_Capacity + Quad2_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Quad3_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad3_Capacity<= Total_inside_cases");
      Quad3_Oriantation = "Length";
      Quad3_Origin = "Top-Left-V2";
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Cases_in_Q3 = Quad3_Capacity;
      Inner_Quad_Capacity = Quad3_Capacity;
    }
    else {
      //Outside quad 5
      Quad3_Oriantation = "Length";
      Quad3_Origin = "Top-Left-V2";

      Quad4_Oriantation = "Length";
      Quad4_Origin = "Bottom-Right-V2";

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Cases_in_Q3 = Total_inside_cases;
      Cases_in_Q4 = Total_inside_cases;

      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Inner_Quad_Capacity = Quad3_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases / 2;
        Cases_in_Q2 = Total_outside_cases / 2;
        if (Total_inside_cases >= Inner_Quad_Capacity) {


          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 - No_Cases_in_Row2[1];
          Ypos3 = Ypos3 + No_Cases_in_Row3[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
            Quad3_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q3 = Total_inside_cases / 2;
            Cases_in_Q4 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row3[0] % 2 != 0 && No_Cases_in_col3[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q3 " + Cases_in_Q3);
            }
            else if (No_Cases_in_Row3[0] % 2 == 0 && No_Cases_in_col3[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                (No_Cases_in_Row3[0] / 2 - 1) * No_Cases_in_col3[0] +
                No_Cases_in_col3[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Quad3_Capacity) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row3[0] % 2 == 0 && No_Cases_in_col3[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                (No_Cases_in_Row1[0] / 2 - 1) * No_Cases_in_col1[0] +
                (No_Cases_in_col1[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q3) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row3[0] % 2 != 0 && No_Cases_in_col3[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col3[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                ((((No_Cases_in_Row3[0] - 1) / 2) * No_Cases_in_col3[0]) + (No_Cases_in_col3[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q3) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col3[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1;
          Xpos2 = Xpos2 - No_Cases_in_col2[1];
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;//- No_Cases_in_col3[1];
          Xpos5 = Xpos5;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 - No_Cases_in_Row2[1];
          Ypos3 = Ypos3 + No_Cases_in_Row3[1];
          Ypos4 = Ypos4 - No_Cases_in_Row3[1];
          Ypos5 = Ypos5;//+ No_Cases_in_Row3[1];
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity + Quad2_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col3[0]>=0  " + No_Cases_in_col3[0]);

        if (No_Cases_in_col3[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,

          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,

          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Wid / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Len / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad3_Capacity = Cases - Total_outside_cases;
        var Centred_Cases = 0;
        Cases_in_Q1 = Total_outside_cases / 2;
        Cases_in_Q2 = Total_outside_cases / 2;
        if (Quad3_Capacity) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2 - No_Cases_in_Row2[1];
          Ypos3 = Ypos3;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
          ];

          console.log(" Quad3_Oriantation >>>>>> " + Quad3_Oriantation);

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity + Quad2_Capacity;
        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases <= Cases_In_Q1_Q2 ");

          Remaining_Cases = Cases;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Cases_in_Q3 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Cases_in_Q3 = 0;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4;


        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          0,
        ];

        orientation_Based = ["Width", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Bottom-Right",
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame36 data:..... ", Data)

  return Data;
};

export const Frame_37 = (
  Pallet_Lenn,
  Pallet_Widd,
  Case_Lenn,
  Case_Widd,
  Xposs,
  Yposs,
  Casess,
  Weight_distributionn_H,
  Weight_distributionn_V,
  label_priorityy
) => {
  var Pallet_Len = parseInt(Pallet_Lenn, 10)
  var Pallet_Wid = parseInt(Pallet_Widd, 10)
  var Case_Len = parseInt(Case_Lenn, 10)
  var Case_Wid = parseInt(Case_Widd, 10)
  var Xpos = parseInt(Xposs, 10)
  var Ypos = parseInt(Yposs, 10)
  var Cases = parseInt(Casess, 10)
  var Weight_distribution_H = Weight_distributionn_H
  var Weight_distribution_V = Weight_distributionn_V
  var label_priority = label_priorityy
  console.log(
    " Pallet_Len " +
    Pallet_Len +
    " Pallet_Wid " +
    Pallet_Wid +
    " Case_Len " +
    Case_Len +
    " Case_Wid " +
    Case_Wid +
    " Xpos " +
    Xpos +
    " Ypos " +
    Ypos +
    "CasesSchemaA" +
    Cases
  );

  if (true) {
    console.log(" Front/Back Label Priority Loop");
    //obj Variables
    var Pallet_Region_X_Pos;
    var Pallet_Region_Y_Pos;
    var No_Cases_in_row;
    var No_Cases_in_col;
    var Vertical_Space;
    var Horizontal_Space;
    var orientation_Based;
    var Total_no_cases;
    var Case_length;
    var Case_Width;
    var Position_orientation_Based;
    var Max_No_Cases;

    //local Variables
    var Total_outside_cases = 0;
    var Total_inside_cases = 0;
    var Cases_in_Q1 = 0;
    var Cases_in_Q2 = 0;
    var Cases_in_Q3 = 0;
    var Cases_in_Q4 = 0;

    var Centred_Oriantation;
    var Centred_Origin;
    var Inner_Quad_Capacity;

    var No_Cases_in_Row1;
    var No_Cases_in_Row2;
    var No_Cases_in_Row3;

    var No_Cases_in_col1;
    var No_Cases_in_col2;
    var No_Cases_in_col3;

    var Quad1_Capacity;
    var Quad2_Capacity;
    var Quad3_Capacity;

    var Quad3_Oriantation;
    var Quad4_Oriantation;
    var Quad3_Origin;
    var Quad4_Origin;

    var PW_1 = 0;
    var PW_2 = 0;
    var PW_3 = 0;

    var PL_1 = 0;
    var PL_2 = 0;
    var PL_3 = 0;

    var Xpos1 = 0;
    var Xpos2 = 0;
    var Xpos3 = 0;
    var Xpos4 = 0;
    var Xpos5 = 0;

    var Ypos1 = 0;
    var Ypos2 = 0;
    var Ypos3 = 0;
    var Ypos4 = 0;
    var Ypos5 = 0;

    PL_1 = Pallet_Len;
    PW_1 = Case_Wid;

    PL_2 = PL_1;
    PW_2 = PW_1;

    PL_3 = Pallet_Len;
    PW_3 = Pallet_Wid - (Case_Wid * 2);

    Xpos1 = Xpos;
    Xpos2 = Xpos + (Pallet_Wid - Case_Wid)
    Xpos3 = Xpos + Case_Wid;
    Xpos4 = Xpos + Pallet_Wid - (Case_Wid + Case_Len);

    Ypos1 = Ypos;
    Ypos2 = Ypos1 + (Pallet_Len - Case_Len);//
    Ypos3 = Ypos1;
    Ypos4 = Ypos + (Pallet_Len - Case_Wid);

    Ypos5 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);
    Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);

    //Outside quad 1
    No_Cases_in_Row1 = No_Cases_in_row_Var1(PL_1, Case_Len);
    No_Cases_in_col1 = No_Cases_in_col_Var1(PW_1, Case_Wid);
    Quad1_Capacity = No_Cases_in_Row1[0] * No_Cases_in_col1[0];

    No_Cases_in_Row2 = No_Cases_in_row_Var1(PL_2, Case_Len);
    No_Cases_in_col2 = No_Cases_in_col_Var1(PW_2, Case_Wid);
    Quad2_Capacity = No_Cases_in_Row2[0] * No_Cases_in_col2[0];

    No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
    No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
    Quad3_Capacity = No_Cases_in_Row3[0] * No_Cases_in_col3[0];

    Total_outside_cases = Quad1_Capacity + Quad2_Capacity;
    Total_inside_cases = Cases - Total_outside_cases;

    if (Quad3_Capacity <= Total_inside_cases) {
      //Outside quad 5
      console.log(" Quad3_Capacity<= Total_inside_cases");
      Quad3_Oriantation = "Length";
      Quad3_Origin = "Top-Left-V2";
      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";
      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Cases_in_Q3 = Quad3_Capacity;
      Inner_Quad_Capacity = Quad3_Capacity;
    }
    else {
      //Outside quad 5
      Quad3_Oriantation = "Length";
      Quad3_Origin = "Top-Left-V2";

      Quad4_Oriantation = "Length";
      Quad4_Origin = "Bottom-Right-V2";

      Centred_Oriantation = "Length";
      Centred_Origin = "Top-Left-V2";

      Cases_in_Q3 = Total_inside_cases;
      Cases_in_Q4 = Total_inside_cases;

      No_Cases_in_Row3 = No_Cases_in_row_Var2(PL_3, Case_Wid);
      No_Cases_in_col3 = No_Cases_in_col_Var2(PW_3, Case_Len);
      Inner_Quad_Capacity = Quad3_Capacity;
    }

    console.log(" Centred_Origin >> " + Centred_Origin);
    console.log(" Centred_Oriantation >> " + Centred_Oriantation);

    console.log(" Total_inside_cases according to Pallet & case Dimension is >> " + Total_inside_cases);

    if (Weight_distribution_H || Weight_distribution_V) {
      // loop for weight distribution is enabled
      console.log("  Weight_distribution_H var 1 if " + Weight_distribution_H);

      //loop for cases max than outside quads
      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases " + Total_outside_cases);
        console.log(" Total_insidecases  " + Total_inside_cases + " Inner_Quad_Capacity " + Inner_Quad_Capacity);
        Cases_in_Q1 = Total_outside_cases / 2;
        Cases_in_Q2 = Total_outside_cases / 2;
        if (Total_inside_cases >= Inner_Quad_Capacity) {

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3 + No_Cases_in_col3[1];

          Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          Ypos2 = Ypos2 - No_Cases_in_Row2[1];
          Ypos3 = Ypos3 + No_Cases_in_Row3[1];

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
          ];
          Total_no_cases = [
            Quad1_Capacity,
            Quad2_Capacity,
            Quad3_Capacity,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
          ];
        }
        else {
          console.log(" Total_inside_cases < Inner_Quad_Capacity ");

          var Centred_Cases = 0;

          if (Total_inside_cases % 2 == 0) {
            console.log(" Total_inside_cases%2 == 0 ");
            Centred_Cases = 0;
            Cases_in_Q3 = Total_inside_cases / 2;
            Cases_in_Q4 = Total_inside_cases / 2;
          }
          else {
            Centred_Cases = 1;
            console.log(" Total_inside_cases%2 != 0 ");

            if (No_Cases_in_Row3[0] % 2 != 0 && No_Cases_in_col3[0] % 2 != 0) {
              console.log(" Both Odd Loop ");
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;
              console.log(" Cases_in_Q3 " + Cases_in_Q3);
            }
            else if (No_Cases_in_Row3[0] % 2 == 0 && No_Cases_in_col3[0] % 2 == 0) {
              console.log(" Both Even Loop ");

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                (No_Cases_in_Row3[0] / 2 - 1) * No_Cases_in_col3[0] +
                No_Cases_in_col3[0] / 2 -
                1;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q3) {
                Centred_Cases = 1;
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row3[0] % 2 == 0 && No_Cases_in_col3[0] % 2 != 0) {
              console.log(" Even  Odd  Loop ");

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q4 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                (No_Cases_in_Row3[0] / 2 - 1) * No_Cases_in_col3[0] +
                (No_Cases_in_col3[0] - 1) / 2;

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q3) {
                Centred_Cases = 1;
                console.log(" possible cs evn odd loop ");
              }
              else {
                Centred_Cases = 0;
              }
            }
            else if (No_Cases_in_Row3[0] % 2 != 0 && No_Cases_in_col3[0] % 2 == 0) {
              console.log(" Odd Even Loop ");
              var Possible_Cases = No_Cases_in_col3[0] / 2 + 1;

              console.log(" Possible_Cases " + Possible_Cases);

              Cases_in_Q3 = (Total_inside_cases - 1) / 2;
              Cases_in_Q3 = (Total_inside_cases - 1) / 2;

              console.log(" Cases_in_Q3 " + Cases_in_Q3);

              var Possible_Cases =
                ((((No_Cases_in_Row3[0] - 1) / 2) * No_Cases_in_col3[0]) + (No_Cases_in_col3[0] / 2) - 1);

              console.log(" Possible_Cases " + Possible_Cases);

              if (Possible_Cases >= Cases_in_Q3) {
                Centred_Cases = 1;
                console.log(" odd evn possible cases C=1  ");
              }
              else {
                Centred_Cases = 0;
              }
            }

            if (No_Cases_in_col3[0] > 0 && Centred_Cases == 1) {
              Centred_Cases = 1;
              console.log(" all 4 combination evn odd outer loop : No_Cases_in_col3 C=1  ");
            } else {
              Centred_Cases = 0;

            }
          }

          Xpos1 = Xpos1;
          Xpos2 = Xpos2 - No_Cases_in_col2[1];
          Xpos3 = Xpos3;
          Xpos4 = Xpos4;//- No_Cases_in_col3[1];
          Xpos5 = Xpos5;

          Ypos1 = Ypos1 + No_Cases_in_Row1[1];
          Ypos2 = Ypos2 - No_Cases_in_Row2[1];
          Ypos3 = Ypos3 + No_Cases_in_Row3[1];
          Ypos4 = Ypos4 - No_Cases_in_Row3[1];
          Ypos5 = Ypos5;//+ No_Cases_in_Row3[1];
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];
          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity + Quad2_Capacity;
        console.log(" Cases_In_Q1_Q2 " + Cases_In_Q1_Q2);
        var Remaining_Cases;

        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases < Cases_In_Q1_Q2 ");
          Remaining_Cases = Cases;
          console.log(" Cases " + Cases);
          console.log(" Remaining_Cases  " + Remaining_Cases);

          // loop for odd cases and centred cases
          if (Remaining_Cases % 2 != 0) {
            console.log(" (Remaining_Cases%2) != 0 ");
            Centred_Cases = 1;
            Remaining_Cases = Remaining_Cases - 1;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases%2) == 0 ");
            Centred_Cases = 0;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          }

          console.log(" Remaining_Cases  " + Remaining_Cases);
          console.log(" Centred_Cases  " + Centred_Cases);
          console.log(" Cases_in_Q1  " + Cases_in_Q1);

        }

        console.log("  No_Cases_in_col3[0]>=0  " + No_Cases_in_col3[0]);

        if (No_Cases_in_col3[0] > 0 && Centred_Cases == 1) {
          Centred_Cases = 1;
        } else {
          Centred_Cases = 0;
        }

        // loop for Centred_Cases == 0
        if (Centred_Cases == 0) {
          //Outside quad 1
          var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,

          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,

          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        } // loop for Centred_Cases != 0
        else {
          var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

          console.log(
            " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
          );

          Xpos1 = Xpos1;
          Ypos1 = Ypos1;

          //Outside quad
          Xpos2 = Xpos2;
          Ypos2 = Ypos2;

          //Outside quad 3
          Xpos3 = Xpos3;
          Ypos3 = Ypos3;

          //Outside quad 4
          Xpos4 = Xpos4;
          Ypos4 = Ypos4;

          //Outside quad 5
          var Xpos5 = Xpos + (Pallet_Wid / 2 - Case_Len / 2);
          var Ypos5 = Ypos + (Pallet_Len / 2 - Case_Wid / 2);

          console.log("");

          //Building Array
          Pallet_Region_X_Pos = [
            Xpos1,
            Xpos2,
            Xpos3,
            Xpos4,
            Xpos5,
          ];
          Pallet_Region_Y_Pos = [
            Ypos1,
            Ypos2,
            Ypos3,
            Ypos4,
            Ypos5,
          ];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
            No_Cases_in_Row3[0],
            1,
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
            No_Cases_in_col3[0],
            1,
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
            No_Cases_in_Row3[1],
            0,
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
            No_Cases_in_col3[1],
            0,
          ];

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
            Quad4_Oriantation,
            Centred_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
            Centred_Cases,
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin,
            Quad4_Origin,
            Centred_Origin,
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
            Cases_in_Q4,
            Centred_Cases,
          ];
        }
      }
    } // loop for weight distribution is disabled
    else {
      console.log(" Weight_distribution_H var 1 else " + Weight_distribution_H);
      //loop for cases max than outside quads

      if (Cases > Total_outside_cases) {
        console.log(" 2.1 Cases > Total_outside_cases ");

        Quad3_Capacity = Cases - Total_outside_cases;
        var Centred_Cases = 0;
        Cases_in_Q1 = Total_outside_cases / 2;
        Cases_in_Q2 = Total_outside_cases / 2;
        if (Quad3_Capacity) {
          console.log(" 2.2 (Centred_Cases == 0) ");

          Xpos1 = Xpos1;
          Xpos2 = Xpos2;
          Xpos3 = Xpos3;

          Ypos1 = Ypos1;
          Ypos2 = Ypos2;
          Ypos3 = Ypos3;

          Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
          Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

          No_Cases_in_row = [
            No_Cases_in_Row1[0],
            No_Cases_in_Row2[0],
            No_Cases_in_Row3[0],
          ];
          No_Cases_in_col = [
            No_Cases_in_col1[0],
            No_Cases_in_col2[0],
            No_Cases_in_col3[0],
          ];

          Vertical_Space = [
            No_Cases_in_Row1[1],
            No_Cases_in_Row2[1],
            No_Cases_in_Row3[1],
          ];
          Horizontal_Space = [
            No_Cases_in_col1[1],
            No_Cases_in_col2[1],
            No_Cases_in_col3[1],
          ];

          console.log(" Quad3_Oriantation >>>>>> " + Quad3_Oriantation);

          orientation_Based = [
            "Width",
            "Width",
            Quad3_Oriantation,
          ];

          Total_no_cases = [
            No_Cases_in_Row1[0] * No_Cases_in_col1[0],
            No_Cases_in_Row2[0] * No_Cases_in_col2[0],
            No_Cases_in_Row3[0] * No_Cases_in_col3[0],
          ];

          Case_length = [Case_Len];
          Case_Width = [Case_Wid];

          Position_orientation_Based = [
            "Top-Left",
            "Bottom-Right",
            Quad3_Origin
          ];
          Max_No_Cases = [
            Cases_in_Q1,
            Cases_in_Q2,
            Cases_in_Q3,
          ];
        }
      }
      else if (Cases <= Total_outside_cases) {
        // loop for cases less than outside quads
        console.log(" 2.2 (Cases <= Total_outside_cases) ");

        var Remaining_Cases = 0;
        var Centred_Cases = 0;

        var Cases_In_Q1_Q2 = Quad1_Capacity + Quad2_Capacity;
        var Remaining_Cases;

        // loop for cases > Cases_In_Q2_Q4
        if (Cases <= Cases_In_Q1_Q2) {
          console.log(" Cases <= Cases_In_Q1_Q2 ");

          Remaining_Cases = Cases;

          console.log(" Remaining_Cases >>> " + Remaining_Cases);

          if (Remaining_Cases % 2 != 0) {
            // loop for odd cases and centred cases
            console.log(" (Remaining_Cases % 2) != 0 ");
            Cases_in_Q3 = 1;
            Remaining_Cases = Remaining_Cases - 1;
            console.log(" Remaining_Cases >>> " + Remaining_Cases);
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          } // loop for even cases
          else {
            console.log(" (Remaining_Cases % 2) == 0 ");
            Cases_in_Q3 = 0;
            Cases_in_Q1 = Remaining_Cases / 2;
            Cases_in_Q2 = Remaining_Cases / 2;
          }
        } // loop for cases < Cases_In_Q2_Q4

        // loop for Centred_Cases == 0

        var space_1 = (PW_1 - Cases_in_Q1 * Case_Wid) / 2;

        console.log(
          " space_1 " + space_1 + " Cases_in_Q1 " + Cases_in_Q1
        );

        Xpos1 = Xpos1;
        Ypos1 = Ypos1;

        //Outside quad
        Xpos2 = Xpos2;
        Ypos2 = Ypos2;

        //Outside quad 3
        Xpos3 = Xpos3;
        Ypos3 = Ypos3;

        //Outside quad 4
        Xpos4 = Xpos4;
        Ypos4 = Ypos4;

        Xpos5 = Xpos5;
        Ypos5 = Ypos5;

        console.log("");

        //Building Array
        Pallet_Region_X_Pos = [Xpos1, Xpos2, Xpos3];
        Pallet_Region_Y_Pos = [Ypos1, Ypos2, Ypos3];

        No_Cases_in_row = [
          No_Cases_in_Row1[0],
          No_Cases_in_Row2[0],
          No_Cases_in_Row3[0],
        ];
        No_Cases_in_col = [
          No_Cases_in_col1[0],
          No_Cases_in_col2[0],
          No_Cases_in_col3[0],
        ];

        Vertical_Space = [
          No_Cases_in_Row1[1],
          No_Cases_in_Row2[1],
          0,
        ];
        Horizontal_Space = [
          No_Cases_in_col1[1],
          No_Cases_in_col2[1],
          0,
        ];

        orientation_Based = ["Width", "Width", "Length"];

        Total_no_cases = [
          No_Cases_in_Row1[0] * No_Cases_in_col1[0],
          No_Cases_in_Row2[0] * No_Cases_in_col2[0],
          No_Cases_in_Row3[0] * No_Cases_in_col3[0],
        ];

        Case_length = [Case_Len];
        Case_Width = [Case_Wid];

        Position_orientation_Based = [
          "Top-Left",
          "Bottom-Right",
          "Top-Left-V2",
        ];
        Max_No_Cases = [
          Cases_in_Q1,
          Cases_in_Q2,
          Cases_in_Q3,
        ];

      }
    }
  }

  // Output Object
  let Data = {
    Pallet_Region_X_Pos: Pallet_Region_X_Pos,
    Pallet_Region_Y_Pos: Pallet_Region_Y_Pos,
    No_Cases_in_row: No_Cases_in_row,
    No_Cases_in_col: No_Cases_in_col,
    Vertical_Space: Vertical_Space,
    Horizontal_Space: Horizontal_Space,
    orientation_Based: orientation_Based,
    Total_no_cases: Total_no_cases,
    Case_length: Case_length,
    Case_Width: Case_Width,
    Position_orientation_Based: Position_orientation_Based,
    Max_No_Cases: Max_No_Cases,
  };

  console.log("algoFrame frame37 data:..... ", Data)

  return Data;
};


