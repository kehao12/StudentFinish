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
    public class SEMESTERController : ApiController
    {
        private DbModels db = new DbModels();
        public SEMESTERController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/SEMESTER
        public IQueryable<SEMESTER> GetSEMESTERs()
        {
            return db.SEMESTERs;
        }

        // GET: api/SEMESTER/5
        [ResponseType(typeof(SEMESTER))]
        public IHttpActionResult GetSEMESTER(int id)
        {
            SEMESTER sEMESTER = db.SEMESTERs.Find(id);
            if (sEMESTER == null)
            {
                return NotFound();
            }

            return Ok(sEMESTER);
        }

        // PUT: api/SEMESTER/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSEMESTER(int id, SEMESTER sEMESTER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sEMESTER.SEM_ID)
            {
                return BadRequest();
            }

            db.Entry(sEMESTER).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SEMESTERExists(id))
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

        // POST: api/SEMESTER
        [ResponseType(typeof(SEMESTER))]
        public IHttpActionResult PostSEMESTER(SEMESTER sEMESTER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SEMESTERs.Add(sEMESTER);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sEMESTER.SEM_ID }, sEMESTER);
        }

        // DELETE: api/SEMESTER/5
        [ResponseType(typeof(SEMESTER))]
        public IHttpActionResult DeleteSEMESTER(int id)
        {
            SEMESTER sEMESTER = db.SEMESTERs.Find(id);
            if (sEMESTER == null)
            {
                return NotFound();
            }

            db.SEMESTERs.Remove(sEMESTER);
            db.SaveChanges();

            return Ok(sEMESTER);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SEMESTERExists(int id)
        {
            return db.SEMESTERs.Count(e => e.SEM_ID == id) > 0;
        }
    }
}