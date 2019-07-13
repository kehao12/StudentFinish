using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
  
    public class LESS_CONDITIONController : ApiController
    {
        private DbModels db = new DbModels();
        public LESS_CONDITIONController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }

        // GET: api/LESS_CONDITION
        public IQueryable<LESS_CONDITION> GetLESS_CONDITION()
        {
            return db.LESS_CONDITION;
        }

        // GET: api/LESS_CONDITION/5
        [ResponseType(typeof(LESS_CONDITION))]
        public IHttpActionResult GetLESS_CONDITION(int id)
        {
            LESS_CONDITION lESS_CONDITION = db.LESS_CONDITION.Find(id);
            if (lESS_CONDITION == null)
            {
                return NotFound();
            }

            return Ok(lESS_CONDITION);
        }

        // PUT: api/LESS_CONDITION/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLESS_CONDITION(int id, LESS_CONDITION lESS_CONDITION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != lESS_CONDITION.ID)
            {
                return BadRequest();
            }

            db.Entry(lESS_CONDITION).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LESS_CONDITIONExists(id))
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

        // POST: api/LESS_CONDITION
        [ResponseType(typeof(LESS_CONDITION))]
        public IHttpActionResult PostLESS_CONDITION(LESS_CONDITION lESS_CONDITION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.LESS_CONDITION.Add(lESS_CONDITION);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = lESS_CONDITION.ID }, lESS_CONDITION);
        }

        // DELETE: api/LESS_CONDITION/5
        [ResponseType(typeof(LESS_CONDITION))]
        public IHttpActionResult DeleteLESS_CONDITION(int id)
        {
            LESS_CONDITION lESS_CONDITION = db.LESS_CONDITION.Find(id);
            if (lESS_CONDITION == null)
            {
                return NotFound();
            }

            db.LESS_CONDITION.Remove(lESS_CONDITION);
            db.SaveChanges();

            return Ok(lESS_CONDITION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LESS_CONDITIONExists(int id)
        {
            return db.LESS_CONDITION.Count(e => e.ID == id) > 0;
        }
    }
}