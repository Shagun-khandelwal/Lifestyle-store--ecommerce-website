const jwt = require('jsonwebtoken')

function getdetails(token) {
    if(token !== null || token !== undefined){
    const base64String = token.split('.')[1];
    const decodedValue = JSON.parse(Buffer.from(base64String,'base64').toString('ascii'));
    console.log(decodedValue);
    return decodedValue;
    }
    return null;
  }
module.exports.getdetails = getdetails;
//getdetails('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhZmIxMzk1YjhjODU2Y2UxMDc1OGQiLCJpc0FkbWluIjpmYWxzZSwiZmlyc3RuYW1lIjoibWVnaG5hIiwibGFzdG5hbWUiOiJraGFuZGVsd2FsIiwiZW1haWwiOiJtZWdobmFraGFuZGVsd2FsNDJAZ21haWwuY29tIiwicGhvbmUiOjgzNTkwMzYyNzIsImFkZHJlc3MiOiJIT1VTRSBOTy42NCIsImNpdHkiOiJHV0FMSU9SIiwic3RhdGUiOiJNQURIWUEgUFJBREVTSCIsInBpbmNvZGUiOjQ3NDAwMSwiaWF0IjoxNjM1NTA3MDAyfQ.FHdszq-BayyT9buKVqFKoKJ9-vz2zy6qidhPRvyr_94')