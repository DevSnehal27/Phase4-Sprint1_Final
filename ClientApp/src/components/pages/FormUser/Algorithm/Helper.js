export const No_Cases_in_row_Var1 = (Pallet_Len, Case_Len) => {
    var Case_Fraction = Pallet_Len / Case_Len;
    var No_of_cases = Math.floor(Pallet_Len / Case_Len); // floor
    var Space = ((Case_Fraction - No_of_cases) * Case_Len) / 2;  
    console.log("Space withing row",Space);
    return [No_of_cases, Space];
}

export const No_Cases_in_col_Var1 = (Pallet_Wid, Case_Width) => {
    var Case_Fraction = Pallet_Wid / Case_Width;
    var No_of_cases = Math.floor(Pallet_Wid / Case_Width); // floor
    var Space = ((Case_Fraction - No_of_cases) * Case_Width) / 2;
    return [No_of_cases, Space];
}

export const No_Cases_in_row_Var2 = (Pallet_Len, Case_Width) => {
    var Case_Fraction = Pallet_Len / Case_Width;
    var No_of_cases = Math.floor(Pallet_Len / Case_Width); // floor
    var Space = ((Case_Fraction - No_of_cases) * Case_Width) / 2;
    return [No_of_cases, Space];
}

export const No_Cases_in_col_Var2 = (Pallet_Wid, Case_Len) => {
    var Case_Fraction = Pallet_Wid / Case_Len;
    var No_of_cases = Math.floor(Pallet_Wid / Case_Len); // floor
    var Space = ((Case_Fraction - No_of_cases) * Case_Len) / 2;
    return [No_of_cases, Space];
}

export const Top_Left = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
      var Ypos = Y;

  
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema])
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) + parseInt(Case_Width, 10);
        }
        Xpos = X;
        Ypos = Ypos + Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };

export const TL_to_B = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
      var Ypos = Y;
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++)
      {
        
        for (var j = 1; j <= No_cases_row; j++) 
        {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) 
          {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = parseInt(Ypos, 10) + parseInt(Case_Length, 10);
        }
        Xpos = Xpos + Case_Width;
        Ypos = Y;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const Top_Right = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema
,
  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col+
      "Max_Cases : " + Max_Cases
    );
  
    let casePosforFilterVarients = [];
    
    if (Max_Cases > 0) {
      console.log(" Max_Cases in : " + Max_Cases);
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          console.log(" Max_Cases in Nikhil : " + Max_Cases)
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) - parseInt(Case_Width, 10);
          //Ypos=Y;
        }
        
        Xpos = X;
        Ypos = Ypos + Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const TR_to_B = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++) {
        for (var j = 1; j <= No_cases_row; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = parseInt(Ypos, 10) + parseInt(Case_Length, 10);
          
        }
        
        Xpos = Xpos - Case_Width;
        Ypos = Y;
      }
    }
    // return casePosforFilterVarients;
  };
  
export const Bottom_Left = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) + parseInt(Case_Width, 10);
        }
        
        Xpos = X;
        Ypos = Ypos - Case_Length;
        //printf("\n YPos : %d ",Ypos);
      }
    }
    // return casePosforFilterVarients;
  };
  
 export const BL_to_T = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++) {
        for (var j = 1; j <= No_cases_row; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = parseInt(Ypos, 10) - parseInt(Case_Length, 10);
        }
        
        Xpos = Xpos + Case_Width;
        Ypos = Y;
        //printf("\n YPos : %d ",Ypos);
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const Bottom_Right = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) - parseInt(Case_Width, 10);
        }
        
        Xpos = X;
        Ypos = Ypos - Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const BR_to_T = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var1_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++) {
        for (var j = 1; j <= No_cases_row; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = parseInt(Ypos, 10) - parseInt(Case_Length, 10);
        }
        
        Xpos = Xpos - Case_Width;
        Ypos = Y;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const Top_Left_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) + parseInt(Case_Width, 10);
        }
        
        Xpos = X;
        Ypos = Ypos + Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const TL_B_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
      var Ypos = Y;
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++)
      {
        for (var j = 1; j <= No_cases_row; j++)
        {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases)
          {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = Ypos + Case_Length;
        }
        Xpos = Xpos + Case_Width;
        Ypos = Y;
        
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const TR_B_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
      var Ypos = Y;
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++)
      {
        for (var j = 1; j <= No_cases_row; j++)
        {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases)
          {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = Ypos + Case_Length;
        }
        Xpos = Xpos - Case_Width;
        Ypos = Y;
        
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const BR_T_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
  var Ypos = Y;
  
  var Index_no = 0;
  for (var i = 1; i <= No_cases_col; i++)
  {
    for (var j = 1; j <= No_cases_row; j++)
    {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases)
          {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Ypos = Ypos - Case_Length;
        }
        Xpos = Xpos - Case_Width;
        Ypos = Y;
        
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const BL_T_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = X;
      var Ypos = Y;
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_col; i++)
      {
    for (var j = 1; j <= No_cases_row; j++)
    {
      casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
      draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
      Index_no = Index_no + 1;
      if (Index_no == Max_Cases)
      {
        console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
        return casePosforFilterVarients;
          }
          Ypos = Ypos - Case_Length;
        }
        Xpos = Xpos + Case_Width;
        Ypos = Y;
        
      }
    }
    // return casePosforFilterVarients;
  };

  export const Top_Right_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
  var Ypos = parseInt(Y, 10);
  
  var Index_no = 0;
  for (var i = 1; i <= No_cases_row; i++) {
    for (var j = 1; j <= No_cases_col; j++) {
      console.log("cases xpos " + Xpos + ", ypos" + Ypos);
      casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
      draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
      Index_no = Index_no + 1;
      if (Index_no == Max_Cases) {
        console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
        return casePosforFilterVarients;
      }
      Xpos = parseInt(Xpos, 10) - parseInt(Case_Width, 10);
    }
    
    Xpos = X;
    Ypos = Ypos + Case_Length;
  }
}
// return casePosforFilterVarients;
  };
  
  export const Bottom_Left_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) + parseInt(Case_Width, 10);
        }
        
        Xpos = X;
        Ypos = Ypos - Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };
  
  export const Bottom_Right_V2 = (
    Xx,
    Yy,
    Case_Lengthh,
    Case_Widthh,
    No_cases_roww,
    No_cases_coll,
    Max_Casess,
    orientation,
    draw,
    isSim, simulationSchema

  ) => {
    var X = parseInt(Xx, 10)
    var Y = parseInt(Yy, 10)
    var Case_Length = parseInt(Case_Lengthh, 10)
    var Case_Width = parseInt(Case_Widthh, 10)
    var No_cases_row = parseInt(No_cases_roww, 10)
    var No_cases_col = parseInt(No_cases_coll, 10)
    var Max_Cases = parseInt(Max_Casess, 10)
    console.log(
      "Var2_Display X : " +
      X +
      " Y : " +
      Y +
      " Case_Length : " +
      Case_Length +
      " Case_Width : " +
      Case_Width +
      " No_cases_row : " +
      No_cases_row +
      " No_cases_col : " +
      No_cases_col
    );
    let casePosforFilterVarients = [];
    if (Max_Cases > 0) {
      var Xpos = parseInt(X, 10);
      var Ypos = parseInt(Y, 10);
      
      var Index_no = 0;
      for (var i = 1; i <= No_cases_row; i++) {
        for (var j = 1; j <= No_cases_col; j++) {
          casePosforFilterVarients.push([Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema]);
          draw(Xpos, Ypos, Case_Length, Case_Width,orientation, isSim, simulationSchema);
          Index_no = Index_no + 1;
          if (Index_no == Max_Cases) {
            console.log("inside hepler.js case pos Xpos, Ypos", casePosforFilterVarients)
            return casePosforFilterVarients;
          }
          Xpos = parseInt(Xpos, 10) - parseInt(Case_Width, 10);
        }
        
        Xpos = X;
        Ypos = Ypos - Case_Length;
      }
    }
    // return casePosforFilterVarients;
  };