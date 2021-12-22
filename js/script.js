function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/922440100774813696/DSRmiIOkMNZ2aXnFANHOpqvM6RsYa9SYh0l3CyvYZ_2u_ZfutoukIL85D0lORD2hrR2k");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
    }