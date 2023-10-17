using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class LayerCreator
    {
        public long Lid { get; set; }
        public int Palletid { get; set; }

        public int pallet_no { get; set; }
        public string Layername { get; set; }
        public bool Intermediatelayer { get; set; }
        public int LayerSequence { get; set; }
        public bool isActive { get; set; }
        public int? UpdatedBy { get; set; }
        public string Updated_DateTime { get; set; }
    }
}
