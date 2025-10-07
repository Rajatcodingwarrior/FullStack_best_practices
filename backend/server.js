import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static('dist'))

// for using the dist remove the '/' link from the next lines

app.get('/', (req, res) => {
  res.send('Server is ready!');
});

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id: 1,
      title: "This is a joke",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 2,
      title: "Another joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 3,
      title: "Yet another joke",
      joke: "Why did the bicycle fall over? Because it was two-tired!"
    },
    {
      id: 4,
      title: "This is fourth joke",
      joke: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 5,
      title: "Fifth joke",
      joke: "Why did the math book look sad? Because it had too many problems."
    }
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});