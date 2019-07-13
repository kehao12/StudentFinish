using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebAPI1.Models;
using WebAPI1.ViewModels;
namespace QLSVISC.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CATALOGController : ApiController
    {
        private DbModels db = new DbModels();
        public CATALOGController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }


        //  public async Task<IHttpActionResult> GetCusCatalog()
        //  {

        //  }
       
        public IQueryable<CusCatalog> GetCATALOG()
        {
            return from c in db.CATALOGs
                   join y1 in db.YEARs on c.YEAR_START_ID equals y1.YEAR_ID
                   join y2 in db.YEARs on c.YEAR_END_ID equals y2.YEAR_ID
                   select new CusCatalog()
                   {
                       id = c.CATA_ID,
                       startYear = y1.YEAR1,
                       endYear = y2.YEAR1,
                       note = c.NOTE,
                       status = c.STATUS

                   };
        }


        // GET: api/CATALOGs
        [Route("api/CATALOGs")]
        public IQueryable<CatalogCustom> GetCATALOGs()
            {
            return from c in db.CATALOGs
                   join y1 in db.YEARs on c.YEAR_START_ID equals y1.YEAR_ID
                   join y2 in db.YEARs on c.YEAR_END_ID equals y2.YEAR_ID
                   select new CatalogCustom()
                   {
                       CATA_ID = c.CATA_ID,
                       YEAR_START_ID = y1.YEAR_ID,
                       YEAR_START = y1.YEAR1,
                       YEAR_END_ID = y2.YEAR_ID,
                       YEAR_END = y2.YEAR1,
                       NOTE = c.NOTE,
                       STATUS = c.STATUS

                   };
        }

        // GET: api/CATALOG/5
        [ResponseType(typeof(CatalogCustom))]
        public IQueryable<CatalogCustom> GetCATALOG(int id)
        {
            return from c in db.CATALOGs
                   join y1 in db.YEARs on c.YEAR_START_ID equals y1.YEAR_ID
                   join y2 in db.YEARs on c.YEAR_END_ID equals y2.YEAR_ID
                   where c.CATA_ID == id
                   select new CatalogCustom()
                   {
                       CATA_ID = c.CATA_ID,
                       YEAR_START_ID = y1.YEAR_ID,
                       YEAR_START = y1.YEAR1,
                       YEAR_END_ID = y2.YEAR_ID,
                       YEAR_END = y2.YEAR1,
                       NOTE = c.NOTE,
                       STATUS = c.STATUS

                   };
        }

        // PUT: api/CATALOG/5
        [ResponseType(typeof(CatalogCustom))]
        public IQueryable<CatalogCustom> PutCATALOG(CATALOG cATALOG)
        {
            int id = cATALOG.CATA_ID;

            db.Entry(cATALOG).State = EntityState.Modified;
            db.SaveChanges();


            return from c in db.CATALOGs
                   join y1 in db.YEARs on c.YEAR_START_ID equals y1.YEAR_ID
                   join y2 in db.YEARs on c.YEAR_END_ID equals y2.YEAR_ID
                   where c.CATA_ID == id
                   select new CatalogCustom()
                   {
                       CATA_ID = c.CATA_ID,
                       YEAR_START_ID = y1.YEAR_ID,
                       YEAR_START = y1.YEAR1,
                       YEAR_END_ID = y2.YEAR_ID,
                       YEAR_END = y2.YEAR1,
                       NOTE = c.NOTE,
                       STATUS = c.STATUS

                   };
        }

        // POST: api/CATALOG
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult PostCATALOG(CATALOG cATALOG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CATALOGs.Add(cATALOG);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cATALOG.CATA_ID }, cATALOG);
        }

        // DELETE: api/CATALOG/5
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult DeleteCATALOG(int id)
        {
            CATALOG cATALOG = db.CATALOGs.Find(id);
            if (cATALOG == null)
            {
                return NotFound();
            }

            db.CATALOGs.Remove(cATALOG);
            db.SaveChanges();

            return Ok(cATALOG);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CATALOGExists(int id)
        {
            return db.CATALOGs.Count(e => e.CATA_ID == id) > 0;
        }
       

    }
  
}