const request = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe('JOBS ROUTES', () => {
  describe('GET /api/jobs route', () => {
    it('should return status 200 OK', async () => {
      const res = await request(server).get('/api/jobs')
      expect(res.status).toEqual(200)
    })

    it('should return an array with at least one item', async () => {
      const res = await request(server).get('/api/jobs')
      expect(res.body.length).toBeGreaterThan(0)
    })

    it('should return a body of type JSON', async () => {
      const res = await request(server).get('/api/jobs')
      expect(res.type).toBe('application/json')
    })
  })

  describe('POST /api/jobs route', () => {
    const testPayload = {
      name: "Front End Dev",
      location: "Austin",
      description: "You know"
    }
    it('should return status 401 Unauthorized', async () => {
      const res = await request(server).post('/api/jobs').send(testPayload)
      expect(res.status).toEqual(401)
    })

    it('should return a body of type JSON', async () => {
      const res = await request(server).get('/api/jobs')
      expect(res.type).toBe('application/json')
    })
  })

  describe('/DEL /users/:id route', () => {
    it('should return a status 401', async () => {
      const res = await request(server).delete('/api/jobs/:id')
      console.log(res.status)
      expect(res.status).toBe(401)
    })

    it('should return a body of type JSON', async () => {
      const res = await request(server).delete('/api/jobs/:id')
      expect(res.type).toBe('application/json')
    })
  })
})