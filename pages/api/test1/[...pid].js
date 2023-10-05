
export default function handler(req, res) {
  const { pid } = req.query

  console.log("request query ",req.query);

  req.query.pid.map((id) => {
    console.log(" ", id);
  });

  console.log("join ", req.query.pid.join("@"));

  res.end(`Post: ${pid}`)
}