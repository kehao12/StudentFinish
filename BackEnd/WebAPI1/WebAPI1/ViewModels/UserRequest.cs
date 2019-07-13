using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI1.ViewModels
{
    public class UserRequest
    {
        public string currentPassword { get; set; }
        public string newPassword { get; set; }
        public string username { get; set; }
    }
}