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
    public class INTAKEController : ApiController
    {
        private DbModels db = new DbModels();
        public INTAKEController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/INTAKE
        public IQueryable<INTAKE> GetINTAKEs()
        {
            return db.INTAKEs;
        }

        // GET: api/INTAKE/5
        [ResponseType(typeof(INTAKE))]
        public IHttpActionResult GetINTAKE(int id)
        {
            INTAKE iNTAKE = db.INTAKEs.Find(id);
            if (iNTAKE == null)
            {
                return NotFound();
            }

            return Ok(iNTAKE);
        }

        // PUT: api/INTAKE/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutINTAKE(int id, INTAKE iNTAKE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != iNTAKE.INTAKE_ID)
            {
                return BadRequest();
            }

            db.Entry(iNTAKE).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!INTAKEExists(id))
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

        // POST: api/INTAKE
        [ResponseType(typeof(INTAKE))]
        public IHttpActionResult PostINTAKE(INTAKE iNTAKE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.INTAKEs.Add(iNTAKE);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = iNTAKE.INTAKE_ID }, iNTAKE);
        }

        // DELETE: api/INTAKE/5
        [ResponseType(typeof(INTAKE))]
        public IHttpActionResult DeleteINTAKE(int id)
        {
            INTAKE iNTAKE = db.INTAKEs.Find(id);
            if (iNTAKE == null)
            {
                return NotFound();
            }

            db.INTAKEs.Remove(iNTAKE);
            db.SaveChanges();

            return Ok(iNTAKE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool INTAKEExists(int id)
        {
            return db.INTAKEs.Count(e => e.INTAKE_ID == id) > 0;
        }
    }
}