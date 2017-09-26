const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  const query = req.query;
  const apiKey = "6c06af0cde254bc0a14d82aaa261021c";
  const startDate = `${req.startDate}0101`;
  const endDate = `${req.endDate}1231`
  axios.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': apiKey,
      'q': query,
      'begin_date': startDate,
      'end_date': endDate
    }
  }).then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
