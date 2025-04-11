import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const response = await fetch('https://dicasaindaial.kommo.com/api/v4/leads', {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1YzhiYzg0OTMyYzY5MzNkOGMxYTVmYzZjNmFlOTY3NTg5N2Y5ZDQyOTI2NmIyNTQ3ZmZjZTcyNmQ3ZjhlMjAzY2ViOGJjNDI4MjAyYmU0In0.eyJhdWQiOiJhMzEzOTQwNi02MDNjLTQ2MDEtYTMxMi05YjNkYmE0YzFkZTQiLCJqdGkiOiI0NWM4YmM4NDkzMmM2OTMzZDhjMWE1ZmM2YzZhZTk2NzU4OTdmOWQ0MjkyNjZiMjU0N2ZmY2U3MjZkN2Y4ZTIwM2NlYjhiYzQyODIwMmJlNCIsImlhdCI6MTczNjI4NzMxOCwibmJmIjoxNzM2Mjg3MzE4LCJleHAiOjE3OTYwODMyMDAsInN1YiI6IjExMzg5NTQzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyOTI2NzE1LCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiM2U5NGQ3YTgtNjY4NS00NGJiLWFhMjgtMGJjODVmZTkyMDM2IiwiYXBpX2RvbWFpbiI6ImFwaS1nLmtvbW1vLmNvbSJ9.KrwkJ9B1EznOCF6dGEXNkoRlmpodfQAeK8Vw1JRi3SjnxLXlwlgmWe3ar01S_vkh0MsmTKzBzl7mPZAVkqo3_KtTNJZq_hloNf1xQfZRTZ0lbrtKf_yYU46SO-nlEdN6KOoFk4ri1cf28YpSutejeBmL31oRD6ddQMTQEMl92AFv3d5hwnvDHM2JDpCAkW2VL5cN1IYtfcuekV4UUq2ZU9o9nLdek5u7GpGx0S50AlpAzFtgy2R8EbH-G5ohX6qR7fJyU9e6EhkhRMb5CzvywXx7xFhLPx5WXD0Ax8bUFHXyFa6kURyUo55PrbdymBLDP5Fi8WqORDU6fM295iXGEQ',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});