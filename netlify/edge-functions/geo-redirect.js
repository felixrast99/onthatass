export default async (request, context) => {

  const country = context.geo?.country?.code || "UNKNOWN";

  const geoLinks = {
    "FR": "https://onthatass.com/fr-fr/men/signup?tid=&utm_source=everflow&utm_campaign=uk&utm_medium=cpa&oid=212&affid=464",
    "DE": "https://www.onthatass-deals.com/Q2S9MT/C2WBD8/"
  };

  if (geoLinks[country]) {
    return Response.redirect(geoLinks[country], 302);
  }

  return new Response("Offer not available in your country", {
    status: 200,
    headers: { "content-type": "text/plain" }
  });
};
