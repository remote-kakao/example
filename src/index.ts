import { Server } from '@remote-kakao/core';
import config from '../config.json';

const server = new Server({ useKakaoLink: true });

server.on('message', async (msg) => {
  const prefix = '>';
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.split(' ');
  const cmd = args.shift()?.slice(prefix.length);

  switch (cmd) {
    case 'ping':
      const timestamp = Date.now();
      await msg.replyText('Pong!');
      msg.replyText(`${Date.now() - timestamp}ms`);
      break;
    case 'kaling':
      msg.replyKakaoLink({ id: 69201, args: { title: args[0], description: args[1] } });
      break;
  }
});

server.start(3000, config);
