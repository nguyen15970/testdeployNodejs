const http = require('http');  

// Tạo server  
const server = http.createServer((req, res) => {  
  res.statusCode = 200; // Mã trạng thái 200 OK  
  res.setHeader('Content-Type', 'text/plain'); // Đặt Header Content-Type  
  res.end('Hello World\n'); // Gửi phản hồi "Hello World"  
});  

// Lắng nghe trên cổng 3000  
const PORT = 3000;  
server.listen(PORT, () => {  
  console.log(`Server running at http://localhost:${PORT}/`);  
});