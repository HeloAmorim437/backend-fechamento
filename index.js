import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/enviar', async (req, res) => {
  try {
    const dados = req.body;

    await fetch('https://script.google.com/macros/s/AKfycbztvzwGxUKdHiNoXKanJVG4Q-d0GqJqqYlTkAb9f9vY_3NUmqwAnIGrH8Cft5UuTolG/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    res.status(200).json({ mensagem: 'Enviado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao enviar', detalhes: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
