using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        private DbModels db = new DbModels();
        public ValuesController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET api/values
        public IEnumerable<int[]> Get()
        {
            int []a = new int[3];
            a[1] = db.INTAKEs.Count();
            a[0] = db.CATALOGs.Count();
            a[2] = db.PROGRAMS.Count();
            yield return a;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
