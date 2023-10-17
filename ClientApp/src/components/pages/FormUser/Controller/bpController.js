// import { useState } from "react";

// import { createContext } from "react";

// const UserContext = createContext()
// import {context} from '../Context/context';

// const [WA_1_width_X_Dir,WA_1_Length_Y_Dir] = useState(" ");


export const updateSelectionPal2 = (
  CasesSchemaA,
  CasesSchemaB,
  CasesSchemaC,
  cases_Schema_A1,
  cases_Schema_B1,
  cases_Schema_C1,
  cases_Schema_A2,
  cases_Schema_B2,
  cases_Schema_C2,
  selectedOne,
  selectedTwo,
  circle,
  G_firstcase_pal2,
  G_firstcase_pal1,
  updatePallet,
) => {

  if (selectedOne) {
    console.log(" inside of the selected one :")
    CasesSchemaA = cases_Schema_A1;
    CasesSchemaB = cases_Schema_B1;
    CasesSchemaC = cases_Schema_C1;
  }

  else if (selectedTwo) {
    CasesSchemaA = cases_Schema_A2;
    CasesSchemaB = cases_Schema_B2;
    CasesSchemaC = cases_Schema_C2;
  }

  circle("pal2", G_firstcase_pal2);  //2
  circle("pal1", G_firstcase_pal1);  //1
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
};

export const firstCase12OnChange = (firstCasePal, e, firstCaseOriginChangeFlush, circle) => {
  // console.log("checking casedatas for schema abc: A: " + JSON.stringify(this.casedataA1) + " B: " + JSON.stringify(this.casedataB1) + " C: " + JSON.stringify(this.casedataC1))
  firstCaseOriginChangeFlush("pal1",true) // flushing both pallet rotation
  firstCaseOriginChangeFlush("pal2",true) // flushing both pallet rotation
  if (firstCasePal == "pal1") {
    firstCaseOriginChangeFlush("pal1");
    circle(firstCasePal, e);
  } else if (firstCasePal == "pal2") {
    firstCaseOriginChangeFlush("pal2");
    circle(firstCasePal, e);
  }
}


//First Case Pal 1
export const updateSelectionCase1 = (
  circle,
  updatePallet,
  selectedOne,
  selectedTwo,
  CasesSchemaA,
  CasesSchemaB,
  CasesSchemaC,
  cases_Schema_A1,
  cases_Schema_B1,
  cases_Schema_C1,
  cases_Schema_A2,
  cases_Schema_B2,
  cases_Schema_C2,
  G_firstcase_pal1,
  G_firstcase_pal2,


) => {

  if (selectedOne) {
    CasesSchemaA = cases_Schema_A1;
    CasesSchemaB = cases_Schema_B1;
    CasesSchemaC = cases_Schema_C1;
  }

  else if (selectedTwo) {
    CasesSchemaA = cases_Schema_A2;
    CasesSchemaB = cases_Schema_B2;
    CasesSchemaC = cases_Schema_C2;
  }
  console.log("G_firstcasepal1...." + G_firstcase_pal1 + "G_firstcasepal2......" + G_firstcase_pal2)
  circle("pal1", G_firstcase_pal1);
  circle("pal2", G_firstcase_pal2);

  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }

};

// //First Case Pal 2
export const updateSelectionCase2 = (
  circle,
  updatePallet,
  selectedOne,
  selectedTwo,
  CasesSchemaA,
  CasesSchemaB,
  CasesSchemaC,
  cases_Schema_A1,
  cases_Schema_B1,
  cases_Schema_C1,
  cases_Schema_A2,
  cases_Schema_B2,
  cases_Schema_C2,
  G_firstcase_pal1,
  G_firstcase_pal2,

) => {

  if (selectedOne) {
    CasesSchemaA = cases_Schema_A1;
    CasesSchemaB = cases_Schema_B1;
    CasesSchemaC = cases_Schema_C1;
  }

  else if (selectedTwo) {
    CasesSchemaA = cases_Schema_A2;
    CasesSchemaB = cases_Schema_B2;
    CasesSchemaC = cases_Schema_C2;
  }

  circle("pal1", G_firstcase_pal1);
  circle("pal2", G_firstcase_pal2);
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }

};


// // working area for 1
export const callBlurFor_WorkingareaX = (
  event,
  updatePallet,
  G_WA_1_width_X_Dir,
  S_WA_1_width_X_Dir,
  G_Pallet_Width,
  setWA_1_width_X_Dir,
  setErrorWorkingaraeaWidth,
  setErrorHelperForWorkingareaWidth1,

) => {
  console.log(" calling callBlurFor_WorkingareaX1 event.target.value...." + event.target.value + " G_Pallet_Width....." + G_Pallet_Width)
  if (event.target.value > 1400) {
    console.log("calling callBlurFor_WorkingareaX1 event.target.value > 1400" + event.target.value)
    G_WA_1_width_X_Dir = 1400;
    // S_WA_1_width_X_Dir = 1400;


    setWA_1_width_X_Dir(1400)
    setErrorWorkingaraeaWidth(false)
    setErrorHelperForWorkingareaWidth1(" ")

    console.log("end of this")

  }
  if (event.target.value < G_Pallet_Width) {
    console.log("calling callBlurFor_WorkingareaX1 event.target.value < G_Pallet_Width" + G_Pallet_Width)
    G_WA_1_width_X_Dir = G_Pallet_Width;
    // S_WA_1_width_X_Dir = G_Pallet_Width;

    setWA_1_width_X_Dir(G_Pallet_Width)
    setErrorWorkingaraeaWidth(false)
    setErrorHelperForWorkingareaWidth1(" ")
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}


export const callBlurFor_WorkingareaY = (
  event,
  updatePallet,
  G_WA_1_Length_Y_Dir,
  G_Pallet_Length,
  set_WA_1_Length_Y_Dir,
  setErrorWorkingaraeaLength,
  setErrorHelperForWorkingareaLength1,

) => {
  if (event.target.value > 1400) {
    G_WA_1_Length_Y_Dir = 1400;

    set_WA_1_Length_Y_Dir(1400)
    setErrorWorkingaraeaLength(false)
    setErrorHelperForWorkingareaLength1(" ")

  }
  if (event.target.value < G_Pallet_Length) {
    G_WA_1_Length_Y_Dir = G_Pallet_Length;


    set_WA_1_Length_Y_Dir(G_Pallet_Length)
    setErrorWorkingaraeaLength(false)
    setErrorHelperForWorkingareaLength1(" ")

  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_WorkingareaZ = (
  event,
  updatePallet,
  G_WA_1_Height_Z_Dir,
  // G_Pallet_Length,
  set_WA_1_Height_Z_Dir,
  setErrorWorkingaraeaHeight,
  setErrorHelperForWorkingareaheight1,

) =>
{
console.log(G_WA_1_Height_Z_Dir,"G_WA_1_Height_Z_Dir")

  if (event.target.value > 1400) {
    G_WA_1_Height_Z_Dir = 1400;

    set_WA_1_Height_Z_Dir(1400)
    setErrorWorkingaraeaHeight(false)
    setErrorHelperForWorkingareaheight1(" ")

  }
  if (event.target.value < 10) {
    G_WA_1_Height_Z_Dir = 10;


    set_WA_1_Height_Z_Dir(10)
    setErrorWorkingaraeaHeight(false)
    setErrorHelperForWorkingareaheight1(" ")

  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_WorkingareaoffsetX = (
  event,
  G_originPal1,
  G_Pallet_Length,
  G_WA_1_Length_Y_Dir,
  G_WA_1_Offset_X_Dir,
  S_WA_1_Offset_X_Dir,
  set_WA_1_Offset_X_Dir,
  setErrorWorkingaraeaoffsetWidth,
  setErrorHelperForWorkingareaoffsetWidth1,
  updatePallet

) => {

  if (G_originPal1 == "Upper Right Corner") {

    if (event.target.value > (G_WA_1_Length_Y_Dir - G_Pallet_Length) || event.target.value < 0) {
      G_WA_1_Offset_X_Dir = (G_WA_1_Length_Y_Dir - G_Pallet_Length);
      S_WA_1_Offset_X_Dir = (G_WA_1_Length_Y_Dir - G_Pallet_Length);

      set_WA_1_Offset_X_Dir(G_WA_1_Length_Y_Dir - G_Pallet_Length)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
    if (event.target.value == "") {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: ""
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
    if (event.target.value < 0) {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // });
      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
  }


  if (G_originPal1 == "Upper Left Corner") {

    if (event.target.value > (G_WA_1_Length_Y_Dir - G_Pallet_Length) || event.target.value <= 0) {
      G_WA_1_Offset_X_Dir = (G_WA_1_Length_Y_Dir - G_Pallet_Length);
      S_WA_1_Offset_X_Dir = (G_WA_1_Length_Y_Dir - G_Pallet_Length);

      // this.setState({
      //   WA_1_Offset_X_Dir: (G_WA_1_Length_Y_Dir - G_Pallet_Length),
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // });

      set_WA_1_Offset_X_Dir(G_WA_1_Length_Y_Dir - G_Pallet_Length)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")
    }
    if (event.target.value == "") {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: ""
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value <= 0) {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
  }

  if (G_originPal1 == "Lower Right Corner") {

    if (event.target.value < ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * - 1) || event.target.value > 0) {
      G_WA_1_Offset_X_Dir = ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1);
      S_WA_1_Offset_X_Dir = ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1);

      // this.setState({
      //   WA_1_Offset_X_Dir: ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1),
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // })

      set_WA_1_Offset_X_Dir((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    } else if (event.target.value == "") {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: ""
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
    if (event.target.value > 0) {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")


    }
  }

  if (G_originPal1 == "Lower Left Corner") {

    if (event.target.value < ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1) || event.target.value >= 0) {
      G_WA_1_Offset_X_Dir = ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1);
      S_WA_1_Offset_X_Dir = ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1);

      // this.setState({
      //   WA_1_Offset_X_Dir: ((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1),
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // })

      set_WA_1_Offset_X_Dir((G_WA_1_Length_Y_Dir - G_Pallet_Length) * -1)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
    if (event.target.value == "") {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: ""
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

    }
    if (event.target.value >= 0) {
      G_WA_1_Offset_X_Dir = 0;
      S_WA_1_Offset_X_Dir = 0;

      // this.setState({
      //   WA_1_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidth: false,
      //   errorHelperForWorkingareaoffsetWidth: " "
      // });

      set_WA_1_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidth(false)
      setErrorHelperForWorkingareaoffsetWidth1(" ")

      console.log("WA_1_Offset_X_Dir ???????" + S_WA_1_Offset_X_Dir);
    }
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_WorkingareaoffsetY = (
  event,
  G_originPal1,
  G_Pallet_Width,
  G_WA_1_width_X_Dir,
  G_WA_1_Offset_Y_Dir,
  S_WA_1_Offset_Y_Dir,
  set_WA_1_Offset_Y_Dir,
  setErrorWorkingaraeaoffsetLength,
  setErrorHelperForWorkingareaoffsetLenght1,
  updatePallet,

) => {

  if (G_originPal1 == "Upper Right Corner") {
    // if (event.target.value < 0 || event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width)) {

    if (event.target.value < 0 || event.target.value > (G_WA_1_width_X_Dir - G_Pallet_Width)) {
      G_WA_1_Offset_Y_Dir = (G_WA_1_width_X_Dir - G_Pallet_Width);
      S_WA_1_Offset_Y_Dir = (G_WA_1_width_X_Dir - G_Pallet_Width);


      set_WA_1_Offset_Y_Dir(G_WA_1_width_X_Dir - G_Pallet_Width)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")


    }
    else if (event.target.value == "") {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: ""
      // });

      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value < 0) {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // });

      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }


  if (G_originPal1 == "Upper Left Corner") {

    if (event.target.value > 0 || event.target.value < ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1)) {
      G_WA_1_Offset_Y_Dir = ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1);
      S_WA_1_Offset_Y_Dir = ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1);

      // this.setState({
      //   WA_1_Offset_Y_Dir: ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1),
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // });

      set_WA_1_Offset_Y_Dir(((G_WA_1_width_X_Dir - G_Pallet_Width) * -1))
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // console.log("callBlurFor_WorkingareaoffsetY1 " + this.state.errorWorkingaraeaoffsetLength)
    }
    else if (event.target.value == "") {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: ""
      // });
      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value >= 0) {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // });
      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }

  if (G_originPal1 == "Lower Right Corner") {

    if (event.target.value > (G_WA_1_width_X_Dir - G_Pallet_Width) || event.target.value < 0) {
      G_WA_1_Offset_Y_Dir = (G_WA_1_width_X_Dir - G_Pallet_Width);
      S_WA_1_Offset_Y_Dir = (G_WA_1_width_X_Dir - G_Pallet_Width);

      // this.setState({
      //   WA_1_Offset_Y_Dir: (G_WA_1_width_X_Dir - G_Pallet_Width),
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // })

      set_WA_1_Offset_Y_Dir(G_WA_1_width_X_Dir - G_Pallet_Width)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
    }
    if (event.target.value == "") {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: ""
      // });

      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value < 0) {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // });
      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }

  if (G_originPal1 == "Lower Left Corner") {

    if (event.target.value < ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1) || event.target.value >= 0) {
      G_WA_1_Offset_Y_Dir = ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1);
      S_WA_1_Offset_Y_Dir = ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1);
      // this.setState({
      //   WA_1_Offset_Y_Dir: ((G_WA_1_width_X_Dir - G_Pallet_Width) * -1),
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // })

      set_WA_1_Offset_Y_Dir(((G_WA_1_width_X_Dir - G_Pallet_Width) * -1))
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
    }
    if (event.target.value == "") {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: ""
      // });

      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
    }
    if (event.target.value >= 0) {
      G_WA_1_Offset_Y_Dir = 0;
      S_WA_1_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_1_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLength: false,
      //   errorHelperForWorkingareaoffsetLength: " "
      // });

      set_WA_1_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLength(false)
      setErrorHelperForWorkingareaoffsetLenght1(" ")
      // console.log("WA_1_Offset_X_Dir ???????" + S_WA_1_Offset_Y_Dir);
    }
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }

}

// // working area for 2

export const callBlurFor_Workingareafor2X = (
  event,
  G_WA_2_width_X_Dir,
  G_Pallet_Width,
  set_WA_2_width_X_Dir,
  setErrorWorkingaraeaWidthfor2,
  setErrorHelperForWorkingareaWidthfor2,
  updatePallet,


) => {

  if (event.target.value > 1400) {
    G_WA_2_width_X_Dir = 1400;

    set_WA_2_width_X_Dir(1400)
    setErrorWorkingaraeaWidthfor2(false)
    setErrorHelperForWorkingareaWidthfor2("")

  }
  if (event.target.value < G_Pallet_Width) {
    G_WA_2_width_X_Dir = G_Pallet_Width;


    set_WA_2_width_X_Dir(G_Pallet_Width)
    setErrorWorkingaraeaWidthfor2(false)
    setErrorHelperForWorkingareaWidthfor2("")
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_Workingareafor2Y = (
  event,
  G_Pallet_Length,
  G_WA_2_Length_Y_Dir,
  set_WA_2_Length_Y_Dir,
  setErrorWorkingaraeaLengthfor2,
  setErrorHelperForWorkingareaLengthfor2,
  updatePallet,

) => {

  if (event.target.value > 1400) {
    G_WA_2_Length_Y_Dir = 1400;


    set_WA_2_Length_Y_Dir(1400)
    setErrorWorkingaraeaLengthfor2(false)
    setErrorHelperForWorkingareaLengthfor2("")

  }
  if (event.target.value < G_Pallet_Length) {
    G_WA_2_Length_Y_Dir = G_Pallet_Length;

    set_WA_2_Length_Y_Dir(G_Pallet_Length)
    setErrorWorkingaraeaLengthfor2(false)
    setErrorHelperForWorkingareaLengthfor2("")
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_WorkingareaZfor2 = (
  event,
  updatePallet,
  G_WA_2_Height_Z_Dir,
  // G_Pallet_Length,
  set_WA_2_Height_Z_Dir,
  setErrorWorkingaraeaHeightfor2,
  setErrorHelperForWorkingareaHeightfor2,
) =>
{
console.log(G_WA_2_Height_Z_Dir,"G_WA_2_Height_Z_Dir")

  if (event.target.value > 1400) {
    G_WA_2_Height_Z_Dir = 1400;

    set_WA_2_Height_Z_Dir(1400)
    setErrorWorkingaraeaHeightfor2(false)
    setErrorHelperForWorkingareaHeightfor2(" ")

  }
  if (event.target.value < 10) {
    G_WA_2_Height_Z_Dir = 10;


    set_WA_2_Height_Z_Dir(10)
    setErrorWorkingaraeaHeightfor2(false)
    setErrorHelperForWorkingareaHeightfor2(" ")

  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}
export const callBlurFor_WorkingareaoffsetXfor2 = (
  event,
  G_originPal2,
  G_WA_2_Length_Y_Dir,
  G_Pallet_Length,
  G_WA_2_Offset_X_Dir,
  set_WA_2_Offset_X_Dir,
  setErrorWorkingaraeaoffsetWidthfor2,
  setErrorHelperForWorkingareaoffsetWidthfor2,
  updatePallet,
) => {


  if (G_originPal2 == "Upper Right Corner") {

    if (event.target.value > (G_WA_2_Length_Y_Dir - G_Pallet_Length) || event.target.value < 0) {
      G_WA_2_Offset_X_Dir = (G_WA_2_Length_Y_Dir - G_Pallet_Length);
      // this.state.WA_2_Offset_X_Dir = (G_WA_2_Length_Y_Dir - G_Pallet_Length);

      // this.setState({
      //   WA_2_Offset_X_Dir: (G_WA_2_Length_Y_Dir - G_Pallet_Length),
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // })

      set_WA_2_Offset_X_Dir((G_WA_2_Length_Y_Dir - G_Pallet_Length))
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value == "") {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;

      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: ""
      // });

      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value < 0) {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;
      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
  }


  if (G_originPal2 == "Upper Left Corner") {

    if (event.target.value > (G_WA_2_Length_Y_Dir - G_Pallet_Length) || event.target.value <= 0) {
      G_WA_2_Offset_X_Dir = (G_WA_2_Length_Y_Dir - G_Pallet_Length);
      // this.state.WA_2_Offset_X_Dir = (G_WA_2_Length_Y_Dir - G_Pallet_Length);

      // this.setState({
      //   WA_2_Offset_X_Dir: (G_WA_2_Length_Y_Dir - G_Pallet_Length),
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // });
      set_WA_2_Offset_X_Dir((G_WA_2_Length_Y_Dir - G_Pallet_Length))
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value == "") {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;
      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: ""
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
      // this.state.errorHelperForWorkingareaoffsetWidthfor2 = "Enter in 1 - 50"
    }
    if (event.target.value <= 0) {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;
      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // });

      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
      // console.log("WA_2_Offset_X_Dir ???????" + this.state.WA_2_Offset_X_Dir);
    }
  }

  if (G_originPal2 == "Lower Right Corner") {

    if (event.target.value < ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * - 1) || event.target.value > 0) {
      G_WA_2_Offset_X_Dir = ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1);
      // this.state.WA_2_Offset_X_Dir = ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1);

      // this.setState({
      //   WA_2_Offset_X_Dir: ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1),
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // })

      set_WA_2_Offset_X_Dir(((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1))
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")

    } else if (event.target.value == "") {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;

      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: ""
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value > 0) {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;

      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
      // console.log("WA_2_Offset_X_Dir ???????" + this.state.WA_2_Offset_X_Dir);
    }
  }

  if (G_originPal2 == "Lower Left Corner") {

    if (event.target.value < ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1) || event.target.value >= 0) {
      G_WA_2_Offset_X_Dir = ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1);
      // this.state.WA_2_Offset_X_Dir = ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1);

      // this.setState({
      //   WA_2_Offset_X_Dir: ((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1),
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // })

      set_WA_2_Offset_X_Dir(((G_WA_2_Length_Y_Dir - G_Pallet_Length) * -1))
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value == "") {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;
      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: ""
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
    }
    if (event.target.value >= 0) {
      G_WA_2_Offset_X_Dir = 0;
      // this.state.WA_2_Offset_X_Dir = 0;
      // this.setState({
      //   WA_2_Offset_X_Dir: 0,
      //   errorWorkingaraeaoffsetWidthfor2: false,
      //   errorHelperForWorkingareaoffsetWidthfor2: " "
      // });
      set_WA_2_Offset_X_Dir(0)
      setErrorWorkingaraeaoffsetWidthfor2(false)
      setErrorHelperForWorkingareaoffsetWidthfor2("")
      // console.log("WA_2_Offset_X_Dir ???????" + this.state.WA_2_Offset_X_Dir);
    }
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

export const callBlurFor_WorkingareaoffsetYfor2 = (
  event,
  G_originPal2,
  G_WA_2_Offset_Y_Dir,
  G_WA_2_width_X_Dir,
  G_Pallet_Width,
  set_WA_2_Offset_Y_Dir,
  setErrorWorkingaraeaoffsetLengthfor2,
  setErrorHelperForWorkingareaoffsetLengthfor2,
  updatePallet,
) => {

  if (G_originPal2 == "Upper Right Corner") {

    // console.log("(this.WA_1_Offset_Y_Dir - this.Pallet_Length) " + (this.WA_1_Length_Y_Dir - this.Pallet_Width))

    if (event.target.value < 0 || event.target.value > (G_WA_2_width_X_Dir - G_Pallet_Width)) {
      G_WA_2_Offset_Y_Dir = (G_WA_2_width_X_Dir - G_Pallet_Width);
      // this.state.WA_2_Offset_Y_Dir = (G_WA_2_width_X_Dir - G_Pallet_Width);

      // this.setState({
      //   WA_2_Offset_Y_Dir: (G_WA_2_width_X_Dir - G_Pallet_Width),
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // })
      set_WA_2_Offset_Y_Dir((G_WA_2_width_X_Dir - G_Pallet_Width))
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
    }
    else if (event.target.value == "") {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: ""
      // });

      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value < 0) {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // });
      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")

      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }


  if (G_originPal2 == "Upper Left Corner") {

    if (event.target.value > 0 || event.target.value < ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1)) {
      G_WA_2_Offset_Y_Dir = ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1);
      // this.state.WA_2_Offset_Y_Dir = ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1);

      // this.setState({
      //   WA_2_Offset_Y_Dir: ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1),
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // });
      set_WA_2_Offset_Y_Dir(((G_WA_2_width_X_Dir - G_Pallet_Width) * -1))
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // console.log("callBlurFor_WorkingareaoffsetY1 " + this.state.errorWorkingaraeaoffsetLengthfor2)
    }
    else if (event.target.value == "") {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: ""
      // });

      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value >= 0) {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;

      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // });
      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }

  if (G_originPal2 == "Lower Right Corner") {

    if (event.target.value > (G_WA_2_width_X_Dir - G_Pallet_Width) || event.target.value < 0) {
      G_WA_2_Offset_Y_Dir = (G_WA_2_width_X_Dir - G_Pallet_Width);
      // this.state.WA_2_Offset_Y_Dir = (G_WA_2_width_X_Dir - G_Pallet_Width);

      // this.setState({
      //   WA_2_Offset_Y_Dir: (G_WA_2_width_X_Dir - G_Pallet_Width),
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // })

      set_WA_2_Offset_Y_Dir((G_WA_2_width_X_Dir - G_Pallet_Width))
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
    }
    if (event.target.value == "") {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: ""
      // });
      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
    }
    if (event.target.value < 0) {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // });
      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")

      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
    }
  }

  if (G_originPal2 == "Lower Left Corner") {

    if (event.target.value < ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1) || event.target.value >= 0) {
      G_WA_2_Offset_Y_Dir = ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1);
      // this.state.WA_2_Offset_Y_Dir = ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1);

      // this.setState({
      //   WA_2_Offset_Y_Dir: ((G_WA_2_width_X_Dir - G_Pallet_Width) * -1),
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // })

      set_WA_2_Offset_Y_Dir(((G_WA_2_width_X_Dir - G_Pallet_Width) * -1))
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
    }
    if (event.target.value == "") {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: ""
      // });
      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
    }
    if (event.target.value >= 0) {
      G_WA_2_Offset_Y_Dir = 0;
      // this.state.WA_2_Offset_Y_Dir = 0;
      // this.setState({
      //   WA_2_Offset_Y_Dir: 0,
      //   errorWorkingaraeaoffsetLengthfor2: false,
      //   errorHelperForWorkingareaoffsetLengthfor2: " "
      // });

      set_WA_2_Offset_Y_Dir(0)
      setErrorWorkingaraeaoffsetLengthfor2(false)
      setErrorHelperForWorkingareaoffsetLengthfor2("")
      // console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_2_Offset_Y_Dir);
    }
  }
  for (let i = 1; i < 3; i++) {
    updatePallet(i);
  }
}

