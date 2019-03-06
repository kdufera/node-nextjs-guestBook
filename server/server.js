const express = require('express')
const next = require('next');
 var bodyParser = require('body-parser');
 const _ = require('lodash');
 

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const serialize = data => JSON.stringify({ data })

app.prepare()
  .then(() => {
      const server = express();
      server.use(bodyParser.json())
      let userDataContainer = [];
      let index = 0;



  server.post('/api/guestbook', (req, res) => {
		let body = _.pick(req.body.userPost,['name','message']);
    let tempSize = userDataContainer.length;
    body.key = index;
    userDataContainer.push(body);
    index++;
		if(tempSize == userDataContainer.length) {
			res.end(JSON.stringify("", null, 2));
		} else {
			res.end(JSON.stringify(userDataContainer, null, 2));
		}
	});


	server.get('/api/get/guestbook', (req, res) => {
		if( userDataContainer.length != 0) {
			res.end(JSON.stringify(userDataContainer, null, 2));
		} else  {
			res.end(JSON.stringify("", null, 2));
		}
  });
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
