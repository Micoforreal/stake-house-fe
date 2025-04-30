// pages/api/fixtures/route.ts
import axios from 'axios';

export  async function GET(request:Request) {
  try {
    const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures', {
      params: {
        api_token: 'EAnzEkHh6AHiCywGOGmJZPlJM918MNXk97rZWPHPevhwHIQnL0THNLwFwcdZ', // store this in .env.local
      }
    });

    return Response.json(response.data, {status:200});

  } catch (error) {
   return Response.json({ error: 'Failed to fetch fixtures' }, {status:200});
  }
}
