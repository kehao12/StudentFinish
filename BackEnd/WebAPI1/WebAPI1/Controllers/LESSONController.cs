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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LESSONController : ApiController
    {
        private DbModels db = new DbModels();
        public LESSONController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }

        // GET: api/LESSON
        public IQueryable<LESSON> GetLESSONs()
        {
            return db.LESSONs;
        }

        // GET: api/LESSON/5
        [ResponseType(typeof(LESSON))]
        public IHttpActionResult GetLESSON(int id)
        {
            LESSON lESSON = db.LESSONs.Find(id);
            if (lESSON == null)
            {
                return NotFound();
            }

            return Ok(lESSON);
        }

        // PUT: api/LESSON/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLESSON(int id, LESSON lESSON)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != lESSON.LESS_ID)
            {
                return BadRequest();
            }

            db.Entry(lESSON).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LESSONExists(id))
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

        // POST: api/LESSON
        [ResponseType(typeof(LESSON))]
        public IHttpActionResult PostLESSON(LESSON lESSON)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.LESSONs.Add(lESSON);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = lESSON.LESS_ID }, lESSON);
        }

        // DELETE: api/LESSON/5
        [ResponseType(typeof(LESSON))]
        public IHttpActionResult DeleteLESSON(int id)
        {
            LESSON lESSON = db.LESSONs.Find(id);
            if (lESSON == null)
            {
                return NotFound();
            }

            db.LESSONs.Remove(lESSON);
            db.SaveChanges();

            return Ok(lESSON);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LESSONExists(int id)
        {
            return db.LESSONs.Count(e => e.LESS_ID == id) > 0;
        }
    }
}