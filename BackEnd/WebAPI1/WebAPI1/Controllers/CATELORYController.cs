using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
    [Authorize]
    public class CATELORYController : ApiController
    {
        private DbModels db = new DbModels();
        public CATELORYController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/CATELORY
        public IQueryable<CATEGORY> GetCATEGORies()
        {
            return db.CATEGORies;
        }

        // GET: api/CATELORY/5
        [ResponseType(typeof(CATEGORY))]
        public IHttpActionResult GetCATEGORY(int id)
        {
            CATEGORY cATEGORY = db.CATEGORies.Find(id);
            if (cATEGORY == null)
            {
                return NotFound();
            }

            return Ok(cATEGORY);
        }

        // PUT: api/CATELORY/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCATEGORY(int id, CATEGORY cATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cATEGORY.CATE_ID)
            {
                return BadRequest();
            }

            db.Entry(cATEGORY).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CATEGORYExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CATELORY
        [ResponseType(typeof(CATEGORY))]
        public IHttpActionResult PostCATEGORY(CATEGORY cATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CATEGORies.Add(cATEGORY);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cATEGORY.CATE_ID }, cATEGORY);
        }

        // DELETE: api/CATELORY/5
        [ResponseType(typeof(CATEGORY))]
        public IHttpActionResult DeleteCATEGORY(int id)
        {
            CATEGORY cATEGORY = db.CATEGORies.Find(id);
            if (cATEGORY == null)
            {
                return NotFound();
            }

            db.CATEGORies.Remove(cATEGORY);
            db.SaveChanges();

            return Ok(cATEGORY);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CATEGORYExists(int id)
        {
            return db.CATEGORies.Count(e => e.CATE_ID == id) > 0;
        }
    }
}