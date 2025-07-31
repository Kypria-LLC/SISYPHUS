export async function generateEcho({
  sponsorId,
  issueNumber,
  shrineChannel
}) {
  const message = `
🔔 Civic decree: Sponsor ${sponsorId} earned the 🧭 Crown of Canon.
📜 Scroll: kypria/ledger#${issueNumber}
`;

  return sendDiscordMessage(shrineChannel, message);
}export async function generateEcho({
  sponsorId,
  issueNumber,
  echoId,
  timestamp = new Date().toISOString(),
  tier = 'Councilbacker',
  ritual = 'Public Pledge Drive',
  shrineChannel
}) {
  const message = `
🔔 [${timestamp}] Civic decree issued by 🦁 El León del Pueblo!

✨ Sponsor ${sponsorId} ascended and earned the 🧭 Crown of Canon.
📜 Scroll entry: kypria/ledger#${issueNumber}
🎖️ Tier: ${tier} • Ritual: ${ritual} • Echo ID: ${echoId}
`;

  return await sendDiscordMessage(shrineChannel, message);
}