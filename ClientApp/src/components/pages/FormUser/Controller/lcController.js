export const handleSelectionLayerPallet = ({

  name,
  value,
  G_layerdata,
  G_layer_name,
  G_layer_sequence,
  S_palletid,
  S_layer_data,
  S1_layer_data,

}) => event => {
  console.log("Inside the function----- handleSelectionLayerPallet ");

  let pallet_no = 1;
  let layers = [];

  layers = G_layerdata;

  console.log(" G_layerdata " + G_layerdata)

  if (layers.length === 0) {
    console.log("Inside the function----- layers.length ");


    G_layer_name = event.target.value;
    G_layer_sequence = value;
    const inter_value = true;

    for (let i = 0; i < 2; i++) {
      console.log("Inside the function----- for loop ");

      let pallet_no = i + 1;

      let records = {
        "l_id": 0,
        "palletid": S_palletid,
        "pallet_no": pallet_no,
        "layername": G_layer_name,
        "intermediatelayer": inter_value,
        "layerSequence": G_layer_sequence
      };
      layers.push(records);
    }

    let arr = [...layers];
    G_layerdata = arr;

    // this.setState({
    //   layer_data: arr
    // });
    S1_layer_data(arr,G_layerdata)

    console.log(" S1_layer_data " + S1_layer_data)
  }
  else {
    console.log("Inside the function----- handleSelectionLayerPallet else part  ");


    const tempArr = layers.map((item) => {
      if ((name === "layername") && (item.layerSequence === (value))) {
        G_layer_name = event.target.value;
        G_layer_sequence = value;
        return {
          ...item,
          layername: G_layer_name,
          layerSequence: value,
          palletid: S_palletid
        }
      }
      return item;
    });

    console.log("tempArr", tempArr);
    let arr = [...tempArr];

    G_layerdata = arr;

    console.log("Inside the else G_layerdata " + G_layerdata)


    let tempLayer_data = [];
    for (let i = 0; i < G_layerdata.length; i++) {
      if (G_layerdata[i].pallet_no == 1) {
        tempLayer_data[G_layerdata[i].layerSequence] = G_layerdata[i];
      }
    }
    S_layer_data = tempLayer_data;


    // this.setState({
    //   layer_data: tempLayer_data
    // })
    S1_layer_data(tempLayer_data,G_layerdata)
  }

  console.log("Inside the function----- handleSelectionLayerPallet end  ");

}


export const handleSelectionIntLayer = ({
  name,
  value,
  G_layerdata,
  G_intermediate_layer,
  G_layer_name,
  G_layer_sequence,
  S_palletid,
  S1_layer_data,

}) => event => {


  let pallet_no = 1;
  let layers = [];

  layers = G_layerdata;

  // const layers = this.state.layer_data;

  if (name === "intermediatelayer") {

    console.log(" Enter in intermediate :   ");


    G_intermediate_layer = event.target.checked;
    G_layer_name = "";
    G_layer_sequence = value;
    console.log(" check  in intermediate G_intermediate_layer :   " + G_intermediate_layer);
    console.log(" check  in intermediate G_layer_sequence :   " + G_layer_sequence);


    if (layers.length === 0) {
      // console.log(" Enter in intermediate layer :   " );

      for (let i = 0; i < 2; i++) {
        let pallet_no = i + 1;

        let records = {
          "l_id": 0,
          "palletid": S_palletid,
          "pallet_no": pallet_no,
          "layername": G_layer_name,
          "intermediatelayer": G_intermediate_layer,
          "layerSequence": G_layer_sequence
        };

        layers.push(records);

      }

      let arr = [...layers];
      G_layerdata = arr;

      console.log(" handleSelectionIntLayer in G_layerdata " + G_layerdata)

      // this.setState({
      //   layer_data: arr
      // });
      S1_layer_data(arr , G_layerdata)

    }
    else {


      const tempArr = layers.map((item) => {

        if ((name === "intermediatelayer") && (item.layerSequence === (value))) {
          // console.log(" In  handleSelectionIntLayer , event.target.checked ==  " + event.target.checked);
          // console.log(" In handleSelectionIntLayer , value ==  " + value);

          G_intermediate_layer = event.target.checked;
          G_layer_sequence = value;

          // console.log("In handleSelectionIntLayer ,  G_intermediate_layer ==  " + G_intermediate_layer);
          // console.log("In handleSelectionIntLayer ,  G_layer_sequence ==  " + G_layer_sequence);



          return {
            ...item,
            intermediatelayer: G_intermediate_layer,
            layerSequence: value,
            palletid: S_palletid,
          }
        }

        return item;

      });


      console.log("tempArr", tempArr);
      let arr = [...tempArr];
      G_layerdata = arr;
      //
      //
      let tempLayer_data = [];
      for (let i = 0; i < G_layerdata.length; i++) {
        if (G_layerdata[i].pallet_no == 1) {
          tempLayer_data[G_layerdata[i].layerSequence] = G_layerdata[i];
        }
      }
      // S_la = tempLayer_data;
      
      // this.setState({
        //   layer_data: tempLayer_data
        // })
      console.log("In tempLayer_data : " + JSON.stringify(tempLayer_data))
      S1_layer_data(tempLayer_data,G_layerdata)
      console.log(" tempLayer_data @@@ " + tempLayer_data)
    }
  }
};