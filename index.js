import dotenv from 'dotenv';

import TelegramBot from 'node-telegram-bot-api';

import express from 'express';
import cors from 'cors';

dotenv.config();

const token = process.env.TG_BOT_API_KEY;

const webUrl = 'https://stirring-stardust-a6437f.netlify.app/';

const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	if (text === '/start') {
		// send a message to the chat acknowledging receipt of their message message');
		await bot.sendMessage(chatId, 'Received your message', {
			reply_markup: {
				inline_keyboard: [
					[{ text: 'Launch 1', web_app: { url: webUrl } }],
					[
						{
							text: 'Launch 2',
							url: 'https://stirring-stardust-a6437f.netlify.app/',
						},
					],
				],
			},
		});
	}
});
