
// middleware/headerValidation.js


module.exports = (req, res, next) => {
    const forwardedFor = req.headers['x-forwarded-for'];
  
    if (forwardedFor) {
      // Split the forwarded IP chain into an array
      let ipList = forwardedFor.split(',').map(ip => ip.trim()); // Trim spaces
  
      // Reverse the list to ensure the client IP is first (if necessary)
      ipList = ipList.reverse(); // Reverse the list to correct order
  
      // Get the first IP (the real client's IP, which should be first after reversing)
      const clientIp = ipList[0];
  
      console.log('Client IP:', clientIp);
  
      // Optionally, validate against trusted proxies
      const trustedProxies = ['trusted-proxy-ip']; // Replace with your trusted proxy IPs
      if (trustedProxies.includes(clientIp)) {
        next(); // Proceed if the IP is trusted
      } else {
        res.status(403).send('Forbidden'); // Reject if the IP is not trusted
      }
    } else {
      next(); // If no X-Forwarded-For header, proceed normally
    }
  };
  