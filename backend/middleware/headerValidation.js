module.exports = (req, res, next) => {
    const forwardedFor = req.headers['x-forwarded-for'];
  
    if (forwardedFor) {
      let ipList = forwardedFor.split(',').map(ip => ip.trim());
      ipList = ipList.reverse();
      const clientIp = ipList[0];
  
      console.log('Client IP from X-Forwarded-For:', clientIp);
  
      const trustedProxies = ['127.0.0.1', '::1', '::ffff:127.0.0.1'];
      if (trustedProxies.includes(clientIp)) {
        next();
      } else {
        res.status(403).send('Forbidden: Untrusted IP');
      }
    } else {
      console.log('No X-Forwarded-For header, allowing request');
      next(); // Allow request in development
    }
  };
  