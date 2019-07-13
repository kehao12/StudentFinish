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
    public class TYPE_STUDENTController : ApiController
    {
        private DbModels db = new DbModels();
        public TYPE_STUDENTController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/TYPE_STUDENT
        public IQueryable<TYPE_STUDENT> GetTYPE_STUDENT()
        {
            return db.TYPE_STUDENT;
        }

        // GET: api/TYPE_STUDENT/5
        [ResponseType(typeof(TYPE_STUDENT))]
        public IHttpActionResult GetTYPE_STUDENT(int id)
        {
            TYPE_STUDENT tYPE_STUDENT = db.TYPE_STUDENT.Find(id);
            if (tYPE_STUDENT == null)
            {
                return NotFound();
            }

            return Ok(tYPE_STUDENT);
        }

        // PUT: api/TYPE_STUDENT/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTYPE_STUDENT(int id, TYPE_STUDENT tYPE_STUDENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tYPE_STUDENT.STUTYPE_ID)
            {
                return BadRequest();
            }

            db.Entry(tYPE_STUDENT).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TYPE_STUDENTExists(id))
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

        // POST: api/TYPE_STUDENT
        [ResponseType(typeof(TYPE_STUDENT))]
        public IHttpActionResult PostTYPE_STUDENT(TYPE_STUDENT tYPE_STUDENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TYPE_STUDENT.Add(tYPE_STUDENT);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (TYPE_STUDENTExists(tYPE_STUDENT.STUTYPE_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tYPE_STUDENT.STUTYPE_ID }, tYPE_STUDENT);
        }

        // DELETE: api/TYPE_STUDENT/5
        [ResponseType(typeof(TYPE_STUDENT))]
        public IHttpActionResult DeleteTYPE_STUDENT(int id)
        {
            TYPE_STUDENT tYPE_STUDENT = db.TYPE_STUDENT.Find(id);
            if (tYPE_STUDENT == null)
            {
                return NotFound();
            }

            db.TYPE_STUDENT.Remove(tYPE_STUDENT);
            db.SaveChanges();

            return Ok(tYPE_STUDENT);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TYPE_STUDENTExists(int id)
        {
            return db.TYPE_STUDENT.Count(e => e.STUTYPE_ID == id) > 0;
        }
    }
}