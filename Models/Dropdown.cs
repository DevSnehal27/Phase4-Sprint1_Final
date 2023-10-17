using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class Dropdown
    {
        public long? DdpId { get; set; }
        public string DdpName { get; set; }
        public string DdpValue { get; set; }
        public long? IsActive { get; set; }
        public long? UpdatedBy { get; set; }
        public string UpdatedDate { get; set; }
    }
}
