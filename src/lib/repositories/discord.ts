
export async function getDiscordUserById(discordDoc: any): Promise<any> {
    const response = await fetch(`https://discord.com/api/v10/users/@me`, {
        headers: {
            "Authorization": `Bearer ${discordDoc.access_token}`
        }
    });
    const data = await response.json();
    return data;
}
