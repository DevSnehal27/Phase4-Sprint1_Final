export const handleSelection1 = (
  name,
  event,
  clearingSchemaFields,
  firstCaseOriginChangeFlush,
  G_outsideLabelPrior,
  G_outside_Label_Priority,
  S1_outside_Label_Priority,
  S_colorA,
  S_colorB,
  S_colorC,
  handlecolorA,
  handlecolorB,
  handlecolorC,
  callSchemaDropdown,
  reOrderingSwiperIndex,
  disableAlgoPW,
  swiperRef



  // toast,
) => {
  disableAlgoPW(true, "visible");

  if (name === "outsideLabelPriority") {
    clearingSchemaFields(name);
    firstCaseOriginChangeFlush("pal1");
    firstCaseOriginChangeFlush("pal2");

    try {
      var outSide = event.target.value;
      var split = outSide.split('_', 2);
      console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
      G_outsideLabelPrior = split[1];

      G_outside_Label_Priority = outSide;
      S1_outside_Label_Priority(outSide)

      // this.setState({
      //   outside_Label_Priority: outSide,
      // });
      // S1_outside_Label_Priority(outSide)

      // if (S_colorA == "#5eb8b3") {
      //   handlecolorA();
      // } else if (S_colorB == "#5eb8b3") {
      //   handlecolorB();
      // } else if (S_colorC == "#5eb8b3") {
      //   handlecolorC();
      // }
    }
    catch (e) {
      console.log("split error inside handleSelection " + e);
    }

    callSchemaDropdown();
    swiperRef?.current?.swiper.slideNext();
    reOrderingSwiperIndex();
  }

  disableAlgoPW(false, "hidden");

}


export const updateSelectionForCases = (e, updatePallet) => {

  for (let i = 1; i < 3; i++) {
    console.log("Inside updateSelectionForCases For Loop");
    updatePallet(i);
  }
};