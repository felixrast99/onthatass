export default async (request, context) => {

  const country = context.geo?.country?.code || "UNKNOWN";

  const geoLinks = {
    "GB": "https://track.vcommission.com/click?campaign_id=12308&pub_id=126083&url_id=2",
    "DE": "https://track.vcommission.com/click?campaign_id=12308&pub_id=126083&url_id=3",
    "DK": "https://track.vcommission.com/click?campaign_id=12308&pub_id=126083&url_id=4",
    "FI": "https://track.vcommission.com/click?campaign_id=12308&pub_id=126083&url_id=5",
    "FR": "https://track.vcommission.com/click?campaign_id=12308&pub_id=126083&url_id=6"
  };

  if (geoLinks[country]) {
    return Response.redirect(geoLinks[country], 302);
  }

  return new Response("Offer not available in your country", {
    status: 200,
    headers: { "content-type": "text/plain" }
  });
};
