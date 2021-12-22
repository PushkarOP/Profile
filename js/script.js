const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/922440100774813696/DSRmiIOkMNZ2aXnFANHOpqvM6RsYa9SYh0l3CyvYZ_2u_ZfutoukIL85D0lORD2hrR2k' });

webhookClient.send({
	content: 'Webhook test',
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});