
export default function handler(req, res) {
  const { pid } = req.query

  console.log("request query ",req.query);

  res.end(`Post: ${pid}`)
}