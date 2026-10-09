export default async (request, context) => {
const url = new URL(request.url);

// قراءة الاسم من الرابط
const firstName = url.searchParams.get("name") || "gmail";
const sub1 = encodeURIComponent(firstName);

const country = context.geo?.country?.code || "UNKNOWN";

const geoLinks = {
FR: `https://onthatass.com/fr-fr/men/signup?tid=&utm_source=everflow&utm_campaign=uk&utm_medium=cpa&oid=212&affid=464&sub1=${sub1}`,
DE: `https://www.onthatass-deals.com/Q2S9MT/C2WBD8/?sub1=${sub1}`,
GB: ` https://www.onthatass-deals.com/Q2S9MT/FM48MS/?sub1=${sub1}`
};

if (geoLinks[country]) {
return Response.redirect(geoLinks[country], 302);
}

return new Response("Offer not available in your country", {
status: 200,
headers: {
"content-type": "text/plain"
}
});
};
