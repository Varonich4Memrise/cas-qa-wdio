import request from "supertest" 

describe('123', () => {
    it('123', async function GET() {
        let res = await request("https://reqres.in")
        .get("/api/user?page=2");
        console.log(`Res: ${JSON.stringify(res.body)}`);
    });
  });



