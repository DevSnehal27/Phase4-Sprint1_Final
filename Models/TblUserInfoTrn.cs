using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class TblUserInfoTrn
    {
        public long UserId { get; set; }
        public string Username { get; set; }
        public string Usergroup { get; set; }
        public string Role { get; set; }
        public long? Lcid { get; set; }
        public string UpdatedBy { get; set; }
        public string UpdatedDatetime { get; set; }
    }
}
