
export function proxy(req, res) {
  if (!req.url) {
    req.url = '/'
    req.path = '/'
  }
  response.status(200).send('Hello!')
}

export function proxy2(req, res) {
  if (!req.url) {
    req.url = '/'
    req.path = '/'
  }
  response.status(200).send('Hello!')
}

