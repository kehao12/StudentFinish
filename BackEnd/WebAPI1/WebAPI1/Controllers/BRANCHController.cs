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
    public class BRANCHController : ApiController
    {
        private DbModels db = new DbModels();
        public BRANCHController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }

        // GET: api/BRANCH
        public IQueryable<BRANCH> GetBRANCHes()
        {
            return db.BRANCHes;
        }

        // GET: api/BRANCH/5
        [ResponseType(typeof(BRANCH))]
        public IHttpActionResult GetBRANCH(int id)
        {
            BRANCH bRANCH = db.BRANCHes.Find(id);
            if (bRANCH == null)
            {
                return NotFound();
            }

            return Ok(bRANCH);
        }

        // PUT: api/BRANCH/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBRANCH(int id, BRANCH bRANCH)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bRANCH.BRANCH_ID)
            {
                return BadRequest();
            }

            db.Entry(bRANCH).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BRANCHExists(id))
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

        // POST: api/BRANCH
        [ResponseType(typeof(BRANCH))]
        public IHttpActionResult PostBRANCH(BRANCH bRANCH)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BRANCHes.Add(bRANCH);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bRANCH.BRANCH_ID }, bRANCH);
        }

        // DELETE: api/BRANCH/5
        [ResponseType(typeof(BRANCH))]
        public IHttpActionResult DeleteBRANCH(int id)
        {
            BRANCH bRANCH = db.BRANCHes.Find(id);
            if (bRANCH == null)
            {
                return NotFound();
            }

            db.BRANCHes.Remove(bRANCH);
            db.SaveChanges();

            return Ok(bRANCH);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BRANCHExists(int id)
        {
            return db.BRANCHes.Count(e => e.BRANCH_ID == id) > 0;
        }
    }
}