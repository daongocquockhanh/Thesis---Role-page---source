
const ipfsClient = require('ipfs-http-client')

const projectId = '2HLMaIQGgLeTyxNKO3yv8mi92PF'
const projectSecret = 'cd87d6665f5d2fdc49b6602f40eb2aee'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})
export default ipfs