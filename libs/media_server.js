const NodeMediaServer = require('node-media-server');
const User = require('../models/User')
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

const getStreamKeyFromStreamPath = (path) => {
  let parts = path.split('/');
  return parts[parts.length - 1];
};
 
let nms = new NodeMediaServer(config)


nms.on('prePublish', async (id, StreamPath, args) => {
  let streamKey = getStreamKeyFromStreamPath(StreamPath);
  console.log('[NodeEvent on prePublish] =====>>>>>>>>>>', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  
  User.findOne({streamKey: streamKey}, (err, user) => {
      if (!err) {
          if (!user) {
              let session = nms.getSession(id);
              session.reject();
          } else {
            console.log('SUCCESS')
              // helpers.generateStreamThumbnail(stream_key);
          }
      }
  });
});

module.exports = nms